#!/usr/bin/env python3
"""Build content-stories.js (window.MAP_STORIES) from research/stories-*.json. Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = ["celts-romans", "early-middle-ages", "church-lords", "zahringen-kyburg", "habsburg", "savoy", "wars-founding", "wars-15th", "wars-italy",
         "reformation", "wars-civil", "wars-1798", "wars-sonderbund", "languages", "municipalities"]


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
    with open(os.path.join(ROOT, "content-stories.js"), "w", encoding="utf-8") as fh:
        fh.write("// Map stories (lords, Reformation, wars). Built by scripts/build_stories.py from research/stories-*.json\n")
        fh.write("window.MAP_STORIES = %s;\n" % json.dumps(stories, ensure_ascii=False, indent=1))
    print("%d stories: %s" % (len(stories), ", ".join(s["id"] for s in stories)))


if __name__ == "__main__":
    main()
