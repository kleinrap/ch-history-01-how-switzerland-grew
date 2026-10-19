#!/usr/bin/env python3
"""Build content-sources.js (window.STEP_SOURCES) from research/sources-content.json:
the sources for the steps written in content.js. Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    data = json.load(open(os.path.join(ROOT, "research", "sources-content.json"), encoding="utf-8"))
    for v in data.values():
        v.pop("changed", None)  # the change log is for docs/SOURCE-CHANGES.md, not for readers
    with open(os.path.join(ROOT, "content-sources.js"), "w", encoding="utf-8") as fh:
        fh.write("// Sources for the steps written in content.js, keyed \"mode:tick\". Built by scripts/build_sources.py\n")
        fh.write("window.STEP_SOURCES = %s;\n" % json.dumps(data, ensure_ascii=False, indent=1))
    print("%d steps with sources" % len(data))


if __name__ == "__main__":
    main()
