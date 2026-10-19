#!/usr/bin/env python3
"""Write docs/OPEN-QUESTIONS.md from the data: every statement marked "uncertain" on a step,
grouped by map and story, plus the general limits of the method. uncertain.html is built from it.
Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
R = lambda p: json.load(open(os.path.join(ROOT, "research", p), encoding="utf-8"))

LIMITS = """## How the maps are made (general limits)

- Old territories are drawn by joining today's municipalities and districts (and, outside Switzerland, today's regions of Europe). Old borders did not always follow these lines, so small places can be on the wrong side.
- Outside Switzerland, regions differ in size: France has départements and Italy provinces, but Germany and Austria only federal states. Old borders there are rough.
- Areas are measured on a simplified map (about 3% too small).
- Every step lists its sources with a short quote. HLS = Historisches Lexikon der Schweiz.
- Where the sources disagree or say nothing, the statement is listed below and marked "Uncertain" on the step.
- What changed when the sources were checked: docs/SOURCE-CHANGES.md.
"""


def section(title, items):
    return ["## " + title, ""] + ["- **%s** — %s" % (k, u) for k, u in items] + [""] if items else []


def main():
    out = ["# What we are not sure about", "", LIMITS]
    content = R("sources-content.json")
    names = {"cantons": "Main map", "six": "Story: 1803 six new cantons", "bern": "Story: Bern"}
    for mode, title in names.items():
        out += section(title, [(k.split(":", 1)[1], u) for k, v in content.items() if k.startswith(mode + ":") for u in v.get("uncertain", [])])
    for f in ["central.json", "northeast.json", "northwest.json", "west.json", "south.json"]:
        for c in R(f):
            out += section("Canton: %s" % c["name"], [(str(s["year"]), u) for s in c["stops"] for u in s.get("uncertain", [])])
    out += section("Allies of the Old Confederation", [(a["name"], u) for a in R("allies.json") for u in a.get("uncertain", [])])
    out += section("Story: the Helvetic cantons", [(s.get("date", ""), u) for s in R("helvetic.json")["stops"] for u in s.get("uncertain", [])])
    for name in sorted(os.listdir(os.path.join(ROOT, "research"))):
        if name.startswith("stories-") and name.endswith(".json"):
            for st in R(name):
                out += section("Story: %s" % st["title"], [(s.get("tick") or str(s["year"]), u) for s in st["stops"] for u in s.get("uncertain", [])])
    open(os.path.join(ROOT, "docs", "OPEN-QUESTIONS.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
    print(sum(1 for l in out if l.startswith("- **")), "uncertain statements")


if __name__ == "__main__":
    main()
