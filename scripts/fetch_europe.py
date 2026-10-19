#!/usr/bin/env python3
"""Build the Europe map: today's regions (Natural Earth admin-1) and countries (admin-0), clipped
to Europe and simplified. Old territories outside Switzerland are drawn by joining these regions,
the same way Swiss territories are drawn by joining today's municipalities.

Source: Natural Earth (public domain), https://www.naturalearthdata.com/
Writes data/europe.js (window.DATA_EUROPE) and data/europe-regions.tsv (code, name, country, type),
the list researchers use to pick regions. Standard library only. Re-runnable.
"""
import json
import os
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
BASE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/"
ADMIN1 = BASE + "ne_10m_admin_1_states_provinces.geojson"
ADMIN0 = BASE + "ne_50m_admin_0_countries.geojson"
BOX = (-11.0, 35.0, 33.0, 60.0)  # west, south, east, north: from Portugal to Poland, Sicily to Denmark
TOL = 0.02                        # simplification tolerance in degrees (about 1.5-2 km)


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "how-switzerland-grew/1.0"})
    with urllib.request.urlopen(req, timeout=600) as r:
        return json.loads(r.read())


def polys(geom):
    return geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]


def bbox_hits(geom):
    xs = [p[0] for poly in polys(geom) for ring in poly for p in ring]
    ys = [p[1] for poly in polys(geom) for ring in poly for p in ring]
    return not (max(xs) < BOX[0] or min(xs) > BOX[2] or max(ys) < BOX[1] or min(ys) > BOX[3])


def rdp(pts, tol):
    if len(pts) < 3:
        return pts
    (x1, y1), (x2, y2) = pts[0], pts[-1]
    dx, dy = x2 - x1, y2 - y1
    norm = (dx * dx + dy * dy) ** 0.5 or 1e-12
    best, idx = -1, 0
    for i in range(1, len(pts) - 1):
        d = abs(dy * pts[i][0] - dx * pts[i][1] + x2 * y1 - y2 * x1) / norm
        if d > best:
            best, idx = d, i
    if best <= tol:
        return [pts[0], pts[-1]]
    return rdp(pts[: idx + 1], tol)[:-1] + rdp(pts[idx:], tol)


def ring_area(ring):
    return sum(ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1] for i in range(len(ring) - 1)) / 2


def clean(geom):
    """Simplify, drop tiny rings, and wind for d3 (outer rings clockwise)."""
    out = []
    for poly in polys(geom):
        rings = []
        for i, ring in enumerate(poly):
            pts = [[round(x, 3), round(y, 3)] for x, y in ring]
            # A closed ring starts and ends on the same point: simplify its two halves separately.
            mid = len(pts) // 2
            r = rdp(pts[: mid + 1], TOL)[:-1] + rdp(pts[mid:], TOL) if len(pts) > 4 else pts
            if len(r) < 4 or abs(ring_area(r)) < 0.0004:  # smaller than about 3 km2
                if i == 0:
                    break
                continue
            if (i == 0) != (ring_area(r) < 0):
                r.reverse()
            rings.append(r)
        if rings:
            out.append(rings)
    return {"type": "MultiPolygon", "coordinates": out} if out else None


def main():
    os.makedirs(DATA, exist_ok=True)
    print("Downloading Natural Earth regions ...")
    a1 = get(ADMIN1)
    regions, rows = [], []
    for f in a1["features"]:
        p = f["properties"]
        if p.get("adm0_a3") == "CHE" or not f.get("geometry") or not bbox_hits(f["geometry"]):
            continue  # Switzerland is drawn from its municipalities
        g = clean(f["geometry"])
        if not g:
            continue
        code = p.get("adm1_code")
        regions.append({"type": "Feature", "id": code, "properties": {"n": p.get("name"), "c": p.get("adm0_a3")}, "geometry": g})
        rows.append((code, p.get("name") or "", p.get("admin") or "", p.get("adm0_a3") or "", p.get("type_en") or "", p.get("region") or ""))
    print("Downloading Natural Earth countries ...")
    a0 = get(ADMIN0)
    countries = []
    for f in a0["features"]:
        p = f["properties"]
        if not f.get("geometry") or not bbox_hits(f["geometry"]):
            continue
        g = clean(f["geometry"])
        if g:
            countries.append({"type": "Feature", "id": p.get("ADM0_A3"), "properties": {"n": p.get("NAME")}, "geometry": g})
    data = {"regions": {"type": "FeatureCollection", "features": regions},
            "countries": {"type": "FeatureCollection", "features": countries}}
    text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(DATA, "europe.js"), "w", encoding="utf-8") as fh:
        fh.write("// Natural Earth (public domain): today's regions and countries of Europe. Built by scripts/fetch_europe.py\n")
        fh.write("window.DATA_EUROPE = %s;\n" % text)
    with open(os.path.join(DATA, "europe-regions.tsv"), "w", encoding="utf-8") as fh:
        fh.write("code\tname\tcountry\tcountry_code\ttype\tregion\n")
        for r in sorted(rows, key=lambda r: (r[2], r[5], r[1])):
            fh.write("\t".join(r) + "\n")
    print("OK: %d regions, %d countries, %.1f MB" % (len(regions), len(countries), len(text) / 1e6))


if __name__ == "__main__":
    main()
