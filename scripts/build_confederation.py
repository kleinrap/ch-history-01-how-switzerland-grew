#!/usr/bin/env python3
"""Build content-allies.js (window.ALLIES) and content-helvetic.js (window.HELVETIC)
from research/allies.json and research/helvetic.json. Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


def write(name, var, obj, note):
    with open(os.path.join(ROOT, name), "w", encoding="utf-8") as fh:
        fh.write("// %s Built by scripts/build_confederation.py\n" % note)
        fh.write("window.%s = %s;\n" % (var, json.dumps(obj, ensure_ascii=False, indent=1)))


def main():
    research = os.path.join(ROOT, "research")
    allies_path = os.path.join(research, "allies.json")
    allies = json.load(open(allies_path, encoding="utf-8")) if os.path.exists(allies_path) else []
    communes = json.load(open(os.path.join(ROOT, "data", "communes.json"), encoding="utf-8"))
    osm_ids = {943756: "rottweil"}

    def size(a):
        sel = a.get("sel") or {}
        n = 0
        for bfs, c in communes.items():
            inc = c[0] in sel.get("cantons", []) or c[1] in sel.get("districts", []) or int(bfs) in sel.get("munis", [])
            exc = int(bfs) in sel.get("except", []) or c[1] in sel.get("exceptDistricts", [])
            n += inc and not exc
        return n
    for a in allies:
        if a.get("osm"):
            a["outside_id"] = osm_ids.get(a["osm"], "osm-%d" % a["osm"])
    # Overlapping entries (Lötschental inside Valais, Le Landeron inside Neuchâtel): the smaller one must win.
    allies.sort(key=size)
    write("content-allies.js", "ALLIES", allies, "Allies and other ruled lands of the Old Confederation.")
    helv_path = os.path.join(research, "helvetic.json")
    helv = json.load(open(helv_path, encoding="utf-8")) if os.path.exists(helv_path) else None
    if helv:
        for st in helv["stops"]:
            # Several steps fall in the same year: the timeline shows month and year.
            y, m = st["date"][:4], int(st["date"][5:7]) if len(st.get("date", "")) >= 7 else 0
            st["tick"] = (MONTHS[m - 1] + " " if m else "") + y
            st["when"] = st.get("when") or st["tick"]
    write("content-helvetic.js", "HELVETIC", helv, "The Helvetic Republic 1798-1803: its administrative cantons.")
    print("%d allies, %s Helvetic steps" % (len(allies), len(helv["stops"]) if helv else 0))


if __name__ == "__main__":
    main()
