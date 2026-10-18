#!/usr/bin/env python3
"""Merge the researched canton histories (one JSON file per group of cantons)
into content-cantons.js for the "Every canton" tab.

Usage: python3 scripts/build_cantons.py research/*.json
Standard library only.
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = ["ZH", "BE", "LU", "UR", "SZ", "OW", "NW", "GL", "ZG", "FR", "SO", "BS", "BL",
         "SH", "AR", "AI", "SG", "GR", "AG", "TG", "TI", "VD", "VS", "NE", "GE", "JU"]


def main(files):
    cantons = {}
    for f in files:
        for c in json.load(open(f, encoding="utf-8")):
            cantons[c["canton"]] = c
    out = [cantons[k] for k in ORDER if k in cantons]
    text = json.dumps(out, ensure_ascii=False, indent=1)
    with open(os.path.join(ROOT, "content-cantons.js"), "w", encoding="utf-8") as fh:
        fh.write("// Territorial history of each canton, researched from the HLS. Built by scripts/build_cantons.py\n")
        fh.write("// from research/*.json. Each layer selects today's municipalities (see logic.js selMatch).\n")
        fh.write("window.CANTON_HISTORY = %s;\n" % text)
    print("%d cantons: %s" % (len(out), " ".join(c["canton"] for c in out)))


if __name__ == "__main__":
    main(sys.argv[1:])
