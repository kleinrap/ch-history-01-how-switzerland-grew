#!/usr/bin/env python3
"""Build content-stories.js (window.MAP_STORIES) from research/stories-*.json. Standard library only."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = ["church-lords", "zahringen-kyburg", "habsburg", "savoy", "wars-founding", "wars-15th", "wars-italy",
         "reformation", "wars-civil", "wars-1798", "wars-sonderbund"]


def main():
    research = os.path.join(ROOT, "research")
    stories = []
    for name in sorted(os.listdir(research)):
        if name.startswith("stories-") and name.endswith(".json"):
            stories += json.load(open(os.path.join(research, name), encoding="utf-8"))
    stories.sort(key=lambda s: ORDER.index(s["id"]) if s["id"] in ORDER else 99)
    for st in stories:
        for s in st["stops"]:
            s.setdefault("view", "ch")
    with open(os.path.join(ROOT, "content-stories.js"), "w", encoding="utf-8") as fh:
        fh.write("// Map stories (lords, Reformation, wars). Built by scripts/build_stories.py from research/stories-*.json\n")
        fh.write("window.MAP_STORIES = %s;\n" % json.dumps(stories, ensure_ascii=False, indent=1))
    print("%d stories: %s" % (len(stories), ", ".join(s["id"] for s in stories)))


if __name__ == "__main__":
    main()
