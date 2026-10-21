#!/usr/bin/env python3
"""Read the coloured areas of a vector (SVG) history map and turn them into lon/lat shapes.

How it works:
1. Read every filled path of the SVG (with its group transforms) as polygons in map pixels.
2. Find the lakes (by their fill colour) and match them to the real lakes of today's map
   (data/geo.js) by name, using the known position of each lake.
3. Fit a simple linear (affine) transform from map pixels to lon/lat on the lake centres.
4. Write the areas of the wanted colours as lon/lat polygons (simplified).

Usage:
  python3 scripts/trace_map.py MAP.svg --lake "#A2DAF4" --list            # list colours and lakes
  python3 scripts/trace_map.py MAP.svg --lake "#A2DAF4" --match "Geneva=12,Zurich=3,..." --out shapes.json --colour "#EBAFC8"

Needs numpy. The map itself is not stored in this project (copyright and size); only the traced shapes.
"""
import argparse
import json
import math
import re
import sys
import xml.etree.ElementTree as ET

import numpy as np

# Rough centre (lon, lat) of today's lakes, used only to match map lakes by name.
LAKES = {
    "Geneva": (6.55, 46.45), "Neuchatel": (6.85, 46.90), "Constance": (9.35, 47.58), "Untersee": (9.03, 47.68),
    "Zurich": (8.66, 47.25), "Biel": (7.17, 47.08), "Thun": (7.72, 46.69), "Brienz": (7.97, 46.73),
    "Lucerne": (8.45, 47.00), "Lugano": (8.97, 45.98), "Maggiore": (8.65, 45.95), "Walensee": (9.20, 47.12),
    "Zug": (8.49, 47.13), "Murten": (7.08, 46.93), "Sempach": (8.16, 47.14), "Hallwil": (8.21, 47.28),
    "Sarnen": (8.21, 46.88), "Greifensee": (8.68, 47.35), "Pfaffikersee": (8.78, 47.35), "Como": (9.26, 45.99),
    "Garda": (10.68, 45.62), "Iseo": (10.08, 45.72), "Annecy": (6.17, 45.85), "Bourget": (5.86, 45.73),
}

NUM = r"[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?"


def parse_transform(t):
    m = np.eye(3)
    for name, args in re.findall(r"(\w+)\s*\(([^)]*)\)", t or ""):
        a = [float(x) for x in re.findall(NUM, args)]
        if name == "matrix":
            n = np.array([[a[0], a[2], a[4]], [a[1], a[3], a[5]], [0, 0, 1]])
        elif name == "translate":
            n = np.array([[1, 0, a[0]], [0, 1, a[1] if len(a) > 1 else 0], [0, 0, 1]])
        elif name == "scale":
            n = np.array([[a[0], 0, 0], [0, a[1] if len(a) > 1 else a[0], 0], [0, 0, 1]])
        elif name == "rotate":
            r = math.radians(a[0])
            n = np.array([[math.cos(r), -math.sin(r), 0], [math.sin(r), math.cos(r), 0], [0, 0, 1]])
            if len(a) == 3:
                n = np.array([[1, 0, a[1]], [0, 1, a[2]], [0, 0, 1]]) @ n @ np.array([[1, 0, -a[1]], [0, 1, -a[2]], [0, 0, 1]])
        else:
            continue
        m = m @ n
    return m


def path_rings(d, steps=8):
    """SVG path data to a list of rings (lists of (x, y)); curves are sampled."""
    toks = re.findall(r"[MmLlHhVvCcSsQqTtAaZz]|" + NUM, d)
    rings, ring = [], []
    x = y = sx = sy = 0.0
    last_c = None
    cmd = None
    i = 0

    def nums(n):
        nonlocal i
        out = [float(t) for t in toks[i:i + n]]
        i += n
        return out
    while i < len(toks):
        if re.match(r"[A-Za-z]", toks[i]):
            cmd = toks[i]
            i += 1
            if cmd in "Zz":
                if ring:
                    rings.append(ring)
                ring = []
                x, y = sx, sy
                continue
        rel = cmd.islower()
        c = cmd.upper()
        if c == "M":
            dx, dy = nums(2)
            x, y = (x + dx, y + dy) if rel else (dx, dy)
            if ring:
                rings.append(ring)
            ring = [(x, y)]
            sx, sy = x, y
            cmd = "l" if rel else "L"
        elif c == "L":
            dx, dy = nums(2)
            x, y = (x + dx, y + dy) if rel else (dx, dy)
            ring.append((x, y))
        elif c == "H":
            (dx,) = nums(1)
            x = x + dx if rel else dx
            ring.append((x, y))
        elif c == "V":
            (dy,) = nums(1)
            y = y + dy if rel else dy
            ring.append((x, y))
        elif c in "CS":
            if c == "C":
                a = nums(6)
                p1 = (x + a[0], y + a[1]) if rel else (a[0], a[1])
                p2 = (x + a[2], y + a[3]) if rel else (a[2], a[3])
                p3 = (x + a[4], y + a[5]) if rel else (a[4], a[5])
            else:
                a = nums(4)
                p1 = (2 * x - last_c[0], 2 * y - last_c[1]) if last_c else (x, y)
                p2 = (x + a[0], y + a[1]) if rel else (a[0], a[1])
                p3 = (x + a[2], y + a[3]) if rel else (a[2], a[3])
            for k in range(1, steps + 1):
                t = k / steps
                u = 1 - t
                ring.append((u ** 3 * x + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t ** 3 * p3[0],
                             u ** 3 * y + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t ** 3 * p3[1]))
            last_c = p2
            x, y = p3
            continue
        elif c in "QT":
            a = nums(4) if c == "Q" else nums(2)
            if c == "Q":
                p1 = (x + a[0], y + a[1]) if rel else (a[0], a[1])
                p2 = (x + a[2], y + a[3]) if rel else (a[2], a[3])
            else:
                p1 = (2 * x - last_c[0], 2 * y - last_c[1]) if last_c else (x, y)
                p2 = (x + a[0], y + a[1]) if rel else (a[0], a[1])
            for k in range(1, steps + 1):
                t = k / steps
                u = 1 - t
                ring.append((u * u * x + 2 * u * t * p1[0] + t * t * p2[0], u * u * y + 2 * u * t * p1[1] + t * t * p2[1]))
            last_c = p1
            x, y = p2
            continue
        elif c == "A":
            a = nums(7)
            x, y = (x + a[5], y + a[6]) if rel else (a[5], a[6])
            ring.append((x, y))
        last_c = None
    if ring:
        rings.append(ring)
    return rings


def poly_points(e):
    pts = [float(v) for v in re.findall(NUM, e.get("points", ""))]
    return [list(zip(pts[0::2], pts[1::2]))]


def read_styles(root):
    css = {}
    for st in root.iter():
        if st.tag.endswith("style") and st.text:
            for names, body in re.findall(r"([^{}]+)\{([^}]*)\}", st.text):
                for n in names.split(","):
                    css[n.strip().lstrip(".")] = body
    return css


def fill_of(e, css, inherited):
    f = e.get("fill")
    st = e.get("style", "")
    for cl in (e.get("class") or "").split():
        st = css.get(cl, "") + ";" + st
    m = re.search(r"fill:\s*([^;]+)", st)
    if m:
        f = m.group(1).strip()
    return (f or inherited or "").lower()


def shapes(svg):
    root = ET.parse(svg).getroot()
    css = read_styles(root)
    out = []

    def walk(e, mat, fill):
        tag = e.tag.split("}")[-1]
        if tag in ("defs", "clipPath", "symbol", "mask", "pattern"):
            return
        mat = mat @ parse_transform(e.get("transform"))
        f = fill_of(e, css, fill)
        rings = None
        if tag == "path":
            rings = path_rings(e.get("d", ""))
        elif tag in ("polygon", "polyline"):
            rings = poly_points(e)
        elif tag == "rect":
            x0, y0 = float(e.get("x", 0)), float(e.get("y", 0))
            w, h = float(e.get("width", 0)), float(e.get("height", 0))
            rings = [[(x0, y0), (x0 + w, y0), (x0 + w, y0 + h), (x0, y0 + h)]]
        if rings and f not in ("none", ""):
            tr = []
            for r in rings:
                a = np.array([[p[0], p[1], 1] for p in r]).T
                b = (mat @ a)[:2].T
                if len(b) >= 3:
                    tr.append(b)
            if tr:
                out.append({"fill": f, "rings": tr})
        for c in e:
            walk(c, mat, f if tag == "g" else fill)
    walk(root, np.eye(3), None)
    return out


def area_centroid(r):
    x, y = r[:, 0], r[:, 1]
    x1, y1 = np.roll(x, -1), np.roll(y, -1)
    cr = x * y1 - x1 * y
    a = cr.sum() / 2
    if abs(a) < 1e-9:
        return 0, (x.mean(), y.mean())
    return abs(a), ((x + x1) * cr).sum() / (6 * a), ((y + y1) * cr).sum() / (6 * a)


def simplify(pts, tol):
    """Douglas-Peucker on a list of points."""
    if len(pts) < 3:
        return pts
    if pts[0] == pts[-1]:
        k = len(pts) // 2
        return simplify(pts[:k + 1], tol)[:-1] + simplify(pts[k:], tol)
    a, b = np.array(pts[0]), np.array(pts[-1])
    ab = b - a
    n = np.hypot(*ab) or 1e-12
    d = [abs(ab[0] * (p[1] - a[1]) - ab[1] * (p[0] - a[0])) / n for p in pts[1:-1]]
    k = int(np.argmax(d)) + 1
    if d[k - 1] > tol:
        return simplify(pts[:k + 1], tol)[:-1] + simplify(pts[k:], tol)
    return [pts[0], pts[-1]]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("svg")
    ap.add_argument("--lake", required=True, help="fill colour of lakes")
    ap.add_argument("--list", action="store_true")
    ap.add_argument("--match", help="Name=index,... (lake indexes from --list)")
    ap.add_argument("--colour", action="append", default=[], help="fill colour of areas to export")
    ap.add_argument("--min", type=float, default=50, help="smallest area (map pixels²) to export")
    ap.add_argument("--tol", type=float, default=0.01, help="simplify tolerance in degrees")
    ap.add_argument("--bbox", help="keep only rings whose centre is inside lon0,lat0,lon1,lat1 (drops inset maps)")
    ap.add_argument("--frame", help="main map area in map pixels: x0,y0,x1,y1")
    ap.add_argument("--out")
    a = ap.parse_args()
    sh = shapes(a.svg)
    lake = a.lake.lower()
    lakes = []
    for s in sh:
        if s["fill"] == lake:
            for r in s["rings"]:
                ar, cx, cy = area_centroid(r) if len(area_centroid(r)) == 3 else (0, 0, 0)
                if ar > 5:
                    lakes.append((ar, cx, cy))
    lakes.sort(reverse=True)
    if a.list:
        cols = {}
        for s in sh:
            cols[s["fill"]] = cols.get(s["fill"], 0) + sum(area_centroid(r)[0] for r in s["rings"])
        print("colours (total area):", sorted(cols.items(), key=lambda kv: -kv[1])[:20])
        for i, (ar, cx, cy) in enumerate(lakes[:30]):
            print("lake %d area %.0f at %.1f %.1f" % (i, ar, cx, cy))
        return
    pairs = [m.split("=") for m in a.match.split(",")]
    src = np.array([[lakes[int(i)][1], lakes[int(i)][2], 1] for n, i in pairs])
    lat0 = math.radians(46.8)
    dst = np.array([[LAKES[n][0] * math.cos(lat0), LAKES[n][1]] for n, i in pairs])
    M, res, *_ = np.linalg.lstsq(src, dst, rcond=None)
    fit = src @ M
    err = np.hypot((fit[:, 0] - dst[:, 0]) / math.cos(lat0) * 76, (fit[:, 1] - dst[:, 1]) * 111)
    for (n, i), e in zip(pairs, err):
        print("  %-12s off by %.1f km" % (n, e))
    print("mean error %.1f km" % err.mean())

    def to_ll(p):
        q = np.array([p[0], p[1], 1]) @ M
        return [round(q[0] / math.cos(lat0), 4), round(q[1], 4)]
    out = {}
    for col in a.colour:
        polys = []
        for s in sh:
            if s["fill"] != col.lower():
                continue
            for r in s["rings"]:
                if area_centroid(r)[0] < a.min:
                    continue
                ll = [to_ll(p) for p in r]
                if a.bbox:
                    b = [float(v) for v in a.bbox.split(",")]
                    cx = sum(p[0] for p in ll) / len(ll)
                    cy = sum(p[1] for p in ll) / len(ll)
                    if not (b[0] <= cx <= b[2] and b[1] <= cy <= b[3]):
                        continue
                ll = simplify(ll, a.tol)
                if ll[0] != ll[-1]:
                    ll.append(ll[0])
                if len(ll) >= 4:
                    polys.append(ll)
        out[col] = polys
        print(col, len(polys), "rings", [(len(p), round(sum(q[0] for q in p) / len(p), 2), round(sum(q[1] for q in p) / len(p), 2)) for p in polys])
    # The map frame (main map area), so the site can fade the shapes out before the cut edge.
    frame = None
    if a.frame:
        x0, y0, x1, y1 = [float(v) for v in a.frame.split(",")]
        frame = [to_ll(p) for p in [(x0, y0), (x1, y0), (x1, y1), (x0, y1), (x0, y0)]]
    if a.out:
        json.dump({"source": a.svg.split("/")[-1], "fit_error_km": round(float(err.mean()), 1), "frame": frame, "areas": out}, open(a.out, "w"))


if __name__ == "__main__":
    sys.exit(main())
