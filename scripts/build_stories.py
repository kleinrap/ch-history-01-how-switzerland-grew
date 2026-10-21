#!/usr/bin/env python3
"""Build content-stories.js (window.MAP_STORIES) from research/stories-*.json. Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = ["celts-romans", "early-middle-ages", "church-lords", "zahringen-kyburg", "habsburg", "savoy", "wars-founding", "wars-15th", "wars-italy",
         "reformation", "wars-civil", "wars-1798", "wars-sonderbund", "languages", "municipalities"]


def smooth(points, steps=10):
    """Closed Catmull-Rom curve through hand-drawn points, as a closed ring."""
    n = len(points)
    out = []
    for i in range(n):
        p0, p1, p2, p3 = points[i - 1], points[i], points[(i + 1) % n], points[(i + 2) % n]
        for k in range(steps):
            t = k / steps
            out.append([round(0.5 * (2 * p1[j] + (-p0[j] + p2[j]) * t + (2 * p0[j] - 5 * p1[j] + 4 * p2[j] - p3[j]) * t * t
                                     + (-p0[j] + 3 * p1[j] - 3 * p2[j] + p3[j]) * t ** 3), 4) for j in (0, 1)])
    out.append(out[0])
    return out


def apply_shapes(stories, research, name):
    """Give a story broad areas traced from maps or drawn by hand (research/shapes-*.json)
    instead of today's municipalities and regions."""
    spec = json.load(open(os.path.join(research, name), encoding="utf-8"))
    st = [s for s in stories if s["id"] == spec["story"]][0]
    st["shaped"] = True
    maps = {k: dict(m, data=json.load(open(os.path.join(research, m["file"]), encoding="utf-8"))) for k, m in spec["maps"].items()}
    for idx, layers in spec["stops"].items():
        stop = st["stops"][int(idx)]
        used = []
        for layer in stop["layers"]:
            refs = layers.get(layer["name"])
            if not refs:
                continue
            rings, traced = [], []
            for ref in refs:
                kind, rest = ref.split(":", 1)
                if kind in ("hand", "far"):
                    rings.append(smooth(spec[kind][rest]))
                    traced.append(0)
                    note = "%s: %s" % (layer["name"], spec[kind + "_note"])
                    if note not in stop.setdefault("uncertain", []):
                        stop["uncertain"].append(note)
                    continue
                parts = rest.split(":")
                found = {k.lower(): v for k, v in maps[kind]["data"]["areas"].items()}[parts[0].lower()]
                got = [found[int(parts[1])]] if len(parts) > 1 else found
                rings += got
                traced += [1] * len(got)
                if kind not in used:
                    used.append(kind)
            layer["shape"] = rings
            layer["traced"] = traced
            # Today's municipalities and regions are no longer used for this layer.
            for k in ("sel", "regions", "countries"):
                layer.pop(k, None)
        # Frame of the traced map, shrunk a little: the site fades the shapes out before its cut edge.
        frames = [maps[k]["data"].get("frame") for k in used if maps[k]["data"].get("frame")]
        if frames:
            f = frames[0]
            cx = sum(p[0] for p in f[:-1]) / 4
            cy = sum(p[1] for p in f[:-1]) / 4
            stop["frame"] = [[round(cx + (p[0] - cx) * 0.96, 4), round(cy + (p[1] - cy) * 0.96, 4)] for p in f]
        for kind in used:
            m = maps[kind]
            stop.setdefault("sources", []).append({
                "url": m["url"], "title": m["title"],
                "quote": "(map, %s)" % m["licence"],
                "supports": "The shapes of the areas are traced from this map (matched to today's lakes; about %s km off on average)." % m["data"]["fit_error_km"]})


def main():
    research = os.path.join(ROOT, "research")
    stories = []
    for name in sorted(os.listdir(research)):
        if name.startswith("stories-") and name.endswith(".json"):
            stories += json.load(open(os.path.join(research, name), encoding="utf-8"))
    stories.sort(key=lambda s: ORDER.index(s["id"]) if s["id"] in ORDER else 99)
    # Steps whose places are a route, in the order of the march (drawn as a line through them).
    routes = {("wars-1798", "1799 Gotthard"), ("wars-1798", "1799 Muotathal"), ("wars-1798", "1799 Panix")}
    for st in stories:
        for s in st["stops"]:
            s.setdefault("view", "ch")
            if (st["id"], s.get("tick")) in routes:
                s["route"] = True
    # Stories with drawn shapes (research/shapes-*.json).
    for name in sorted(os.listdir(research)):
        if name.startswith("shapes-") and name.endswith(".json"):
            apply_shapes(stories, research, name)
    with open(os.path.join(ROOT, "content-stories.js"), "w", encoding="utf-8") as fh:
        fh.write("// Map stories (lords, Reformation, wars). Built by scripts/build_stories.py from research/stories-*.json\n")
        fh.write("window.MAP_STORIES = %s;\n" % json.dumps(stories, ensure_ascii=False, indent=1))
    print("%d stories: %s" % (len(stories), ", ".join(s["id"] for s in stories)))


if __name__ == "__main__":
    main()
