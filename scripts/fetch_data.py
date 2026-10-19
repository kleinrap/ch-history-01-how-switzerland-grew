#!/usr/bin/env python3
"""Build the map data for "How Switzerland Grew".

Downloads:
  - The 2026 Swiss municipality borders (BFS GEOSTAT, generalised, as TopoJSON
    from the swiss-maps package by Interactive Things).
  - The official BFS list of municipalities on 1 January 2026, which gives each
    municipality its name, district and canton.

The site draws every historical territory by joining today's municipalities, so it
only needs these two files. The history itself (who owned what, when) is curated
by hand in content.js.

Standard library only. Re-runnable. Writes:
  data/geo.json      + data/geo.js      (window.DATA_GEO)
  data/communes.json + data/communes.js (window.DATA_COMMUNES)
  data/outside.json  + data/outside.js  (window.DATA_OUTSIDE)

Land the Swiss held outside today's border (Valtellina, Gex, Chablais, Mulhouse ...) comes
from OpenStreetMap (ODbL, (c) OpenStreetMap contributors) through the Nominatim lookup API.
Today's administrative areas stand in for the old ones; see docs/DATA.md.
"""
import csv
import io
import json
import os
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
UA = "Mozilla/5.0 (compatible; how-switzerland-grew/1.0)"
GEO_YEAR = "2026"
TOPO_URL = "https://unpkg.com/swiss-maps@4.7.0/%s/ch-combined.json" % GEO_YEAR
SNAPSHOT_URL = "https://www.agvchapp.bfs.admin.ch/api/communes/snapshot?date=01-01-2026"
NOMINATIM = ("https://nominatim.openstreetmap.org/lookup?format=json&polygon_geojson=1"
             "&polygon_threshold=0.003&osm_ids=")
# id on the site -> OpenStreetMap relation, and the name of the modern area used.
OUTSIDE = {
    "valtellina": (46708, "Province of Sondrio"),
    "gex": (2088975, "Pays de Gex Agglo"),
    "thonon": (6842908, "Thonon Agglomeration"),
    "evian": (6842909, "Pays d'Evian - Vallee d'Abondance"),
    "genevois": (2085004, "Communaute de communes du Genevois"),
    "annemasse": (2086904, "Annemasse Agglo"),
    "mulhouse": (38246, "Mulhouse"),
    "rottweil": (943756, "Rottweil"),
}

CANTONS = ["ZH", "BE", "LU", "UR", "SZ", "OW", "NW", "GL", "ZG", "FR", "SO", "BS", "BL",
           "SH", "AR", "AI", "SG", "GR", "AG", "TG", "TI", "VD", "VS", "NE", "GE", "JU"]

# Shared land (state forest, "communanze") that is on the BFS map but is not a municipality.
EXTRA = {
    "2391": ["FR", 1005, "Staatswald Galm"],
    "5391": ["TI", 2101, "C'za Cadenazzo/Monteceneri"],
    "5394": ["TI", 2105, "C'za Capriasca/Lugano"],
}


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def write(name, var, obj):
    text = json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
    with open(os.path.join(DATA, name + ".json"), "w", encoding="utf-8") as f:
        f.write(text)
    with open(os.path.join(DATA, name + ".js"), "w", encoding="utf-8") as f:
        f.write("window.%s = %s;\n" % (var, text))


def ring_area(ring):
    return sum(ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1] for i in range(len(ring) - 1)) / 2


def d3_winding(geom):
    """GeoJSON (RFC 7946) rings are counter-clockwise; d3 needs clockwise outer rings."""
    polys = geom["coordinates"] if geom["type"] == "MultiPolygon" else [geom["coordinates"]]
    out = []
    for poly in polys:
        rings = []
        for i, ring in enumerate(poly):
            ring = [[round(x, 5), round(y, 5)] for x, y in ring]
            clockwise = ring_area(ring) < 0
            if (i == 0) != clockwise:  # outer ring must be clockwise, holes counter-clockwise
                ring.reverse()
            rings.append(ring)
        out.append(rings)
    return {"type": "MultiPolygon", "coordinates": out}


def fetch_outside():
    ids = ",".join("R%d" % rel for rel, _ in OUTSIDE.values())
    found = {r["osm_id"]: r for r in json.loads(get(NOMINATIM + ids))}
    feats = []
    for key, (rel, name) in OUTSIDE.items():
        r = found.get(rel)
        if not r or r["geojson"]["type"] not in ("Polygon", "MultiPolygon"):
            sys.exit("OpenStreetMap area missing: %s (relation %d)" % (name, rel))
        feats.append({"type": "Feature", "id": key, "properties": {"source": name, "osm": rel},
                      "geometry": d3_winding(r["geojson"])})
    return {"type": "FeatureCollection", "features": feats}


def main():
    os.makedirs(DATA, exist_ok=True)

    print("Downloading borders ...")
    topo = json.loads(get(TOPO_URL))
    # The site does not use the district shapes; it builds districts from municipalities.
    topo["objects"].pop("districts", None)

    print("Downloading BFS municipality list ...")
    raw = get(SNAPSHOT_URL).decode("utf-8-sig")
    rows = list(csv.DictReader(io.StringIO(raw)))
    # HistoricalCode is only unique within one level (a district and a municipality can share one).
    districts = {r["HistoricalCode"]: r for r in rows if r["Level"] == "2"}
    cantons = {r["HistoricalCode"]: r for r in rows if r["Level"] == "1"}

    communes = {}
    for r in rows:
        if r["Level"] != "3":
            continue
        district = districts[r["Parent"]]
        canton = cantons[district["Parent"]]
        communes[r["BfsCode"]] = [canton["ShortName"], int(district["BfsCode"]), r["Name"]]

    communes.update(EXTRA)
    geo_ids = [g["id"] for g in topo["objects"]["municipalities"]["geometries"]]
    missing = [i for i in geo_ids if str(i) not in communes]
    if missing:
        sys.exit("Municipalities on the map but not in the BFS list: %s" % missing[:20])

    # Keep only municipalities that are on the map (the list also has lakes etc.).
    communes = {str(i): communes[str(i)] for i in geo_ids}

    print("Downloading land outside today's border (OpenStreetMap) ...")
    write("outside", "DATA_OUTSIDE", fetch_outside())
    write("geo", "DATA_GEO", topo)
    write("communes", "DATA_COMMUNES", communes)
    bad = sorted({v[0] for v in communes.values()} - set(CANTONS))
    if bad:
        sys.exit("Unknown canton codes in the municipality list: %s" % bad)
    print("OK: %d municipalities, %d cantons." % (
        len(communes), len(topo["objects"]["cantons"]["geometries"])))


if __name__ == "__main__":
    main()
