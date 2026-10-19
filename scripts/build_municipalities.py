#!/usr/bin/env python3
"""Build the story "Municipalities: fewer and larger" (research/stories-municipalities.json)
from the official BFS register of municipalities (snapshots and mutations since 1960).

For each of today's municipalities (1 January 2026) it finds the 1960 municipalities it is made of,
and the date the first two of them were merged. A step for year Y colours every municipality that
was already merged by Y, by the period of that first merger. Before 1960 the register has no
mutations, so the early steps use the counts from the Historical Lexicon of Switzerland.

Standard library only. Re-runnable.
"""
import csv
import io
import json
import os
import urllib.request
from collections import defaultdict
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API = "https://www.agvchapp.bfs.admin.ch/api/communes/"
REGISTER = "https://www.agvchapp.bfs.admin.ch/"
HLS = "https://hls-dhs-dss.ch/de/articles/007971/"


def get_csv(path):
    req = urllib.request.Request(API + path, headers={"User-Agent": "how-switzerland-grew/1.0"})
    with urllib.request.urlopen(req, timeout=300) as r:
        return list(csv.DictReader(io.StringIO(r.read().decode("utf-8-sig"))))


def d(s):  # "01.01.1961" -> date
    dd, mm, yy = s.split(".")
    return date(int(yy), int(mm), int(dd))


def main():
    snap1960 = [r for r in get_csv("snapshot?date=01-01-1960") if r["Level"] == "3"]
    snap2026 = [r for r in get_csv("snapshot?date=01-01-2026") if r["Level"] == "3"]
    muts = get_csv("mutations?startPeriod=01-01-1960&endPeriod=01-01-2026")
    counts = {}
    for y in (1960, 1980, 2000, 2010, 2020, 2026):
        counts[y] = sum(1 for r in get_csv("snapshot?date=01-01-%d" % y) if r["Level"] == "3")

    # Follow every 1960 municipality through the mutations, date by date.
    by_date = defaultdict(list)
    for m in muts:
        by_date[d(m["MutationDate"])].append(m)
    hc_now = {r["HistoricalCode"]: r["HistoricalCode"] for r in snap1960}   # 1960 HC -> current HC
    bfs_now = {r["HistoricalCode"]: r["BfsCode"] for r in snap1960}
    first_merge = {}                                                        # 1960 HC -> date
    for day in sorted(by_date):
        step = {}
        for m in by_date[day]:
            step.setdefault(m["InitialHistoricalCode"], m)
        for h0, h in list(hc_now.items()):
            m = step.get(h)
            if m:
                hc_now[h0] = m["TerminalHistoricalCode"]
                bfs_now[h0] = m["TerminalCode"]
        # A merger: two 1960 municipalities now share one municipality.
        groups = defaultdict(list)
        for h0, h in hc_now.items():
            groups[h].append(h0)
        for members in groups.values():
            if len(members) > 1:
                for h0 in members:
                    first_merge.setdefault(h0, day)

    today = {r["BfsCode"]: r["Name"] for r in snap2026}
    parts = defaultdict(list)          # today's bfs -> 1960 names
    merged_on = {}                     # today's bfs -> first merger date
    for r in snap1960:
        b = bfs_now[r["HistoricalCode"]]
        parts[b].append(r["Name"])
        if r["HistoricalCode"] in first_merge:
            dt = first_merge[r["HistoricalCode"]]
            merged_on[b] = min(merged_on.get(b, dt), dt)

    periods = [("merge1960", 1960, 1979, "Merged 1960–1979"), ("merge1980", 1980, 1999, "Merged 1980–1999"),
               ("merge2000", 2000, 2009, "Merged 2000–2009"), ("merge2010", 2010, 2019, "Merged 2010–2019"),
               ("merge2020", 2020, 2026, "Merged 2020–2026")]

    def layers_until(year):
        out = []
        for kind, a, b, label in periods:
            if a > year:
                continue
            munis = sorted(int(t) for t, dt in merged_on.items() if a <= dt.year <= min(b, year) and t in today)
            if munis:
                out.append({"name": label, "kind": kind, "label": label + " (municipalities made of two or more of 1960)", "sel": {"munis": munis}})
        return out

    biggest = sorted(((len(v), today[t], t) for t, v in parts.items() if t in today), reverse=True)[:6]
    reg = lambda y: {"url": REGISTER, "title": "BFS: Official register of Swiss municipalities (snapshot 1 January %d, mutations since 1960)" % y,
                     "supports": "The number of municipalities on 1 January %d (%d, counted from the register) and the mergers shown on the map" % (y, counts[y])}
    hls = {"url": HLS, "title": "HLS: Gemeindezusammenschluss (Peter Steiner)",
           "quote": "1850 gab es in der Schweiz 3205 Gemeinden, 1900 3164, 1950 3101, 1990 2955, 2003 2840.",
           "supports": "The number of municipalities in 1850, 1900, 1950, 1990 and 2003"}
    hls2 = {"url": HLS, "title": "HLS: Gemeindezusammenschluss (Peter Steiner)",
            "quote": "1850-1990 verschwanden durch Fusion 250 Gemeinden",
            "supports": "250 municipalities disappeared through mergers between 1850 and 1990"}

    def stop(year, title, text, srcs):
        return {"year": year, "tick": str(year), "title": title, "text": text, "view": "ch", "layers": layers_until(year), "sources": srcs}

    stops = [
        {"year": 1850, "tick": "1850", "title": "About 3,200 municipalities", "view": "ch", "layers": [],
         "text": ["In 1850 Switzerland has 3,205 municipalities. Many are very small villages.",
                  "From 1850 to 1990 only 250 municipalities disappear through mergers. The register of all changes starts in 1960, so the map starts then."],
         "sources": [hls, hls2]},
        stop(1960, "The register starts", ["On 1 January 1960 there are %d municipalities." % counts[1960],
             "Coloured areas on the next maps are today's municipalities that were made by merging two or more municipalities of 1960."], [reg(1960)]),
        stop(1980, "Slow change", ["By 1980 there are %d municipalities. Only a few small villages have merged." % counts[1980]], [reg(1980)]),
        stop(2000, "Mergers speed up", ["By 2000 there are %d municipalities." % counts[2000]], [reg(2000)]),
        stop(2010, "Many mergers", ["By 2010 there are %d municipalities." % counts[2010]], [reg(2010)]),
        stop(2020, "Whole valleys merge", ["By 2020 there are %d municipalities. Some cantons now have only a few large municipalities: Glarus merged its municipalities into three in 2011." % counts[2020]], [reg(2020)]),
        stop(2026, "About 2,100 municipalities today", ["On 1 January 2026 there are %d municipalities." % counts[2026],
             "The largest mergers: " + "; ".join("%s (%d municipalities of 1960)" % (n, c) for c, n, t in biggest) + "."], [reg(2026)]),
    ]
    stops[2]["text"].append("The canton of Jura (1979) renumbered its municipalities, but this is not a merger and is not shown.")
    stories = [{"id": "municipalities", "title": "Municipalities: fewer and larger",
                "card": "From 3,205 municipalities in 1850 to about 2,100 today: where and when they merged.",
                "stops": stops, "sources": [REGISTER, HLS],
                "notes": "Built by scripts/build_municipalities.py from the BFS register (mutations since 1960). Mergers before 1960 are not on the map."}]
    with open(os.path.join(ROOT, "research", "stories-municipalities.json"), "w", encoding="utf-8") as fh:
        json.dump(stories, fh, ensure_ascii=False, indent=1)
    print("counts", counts, "merged today's municipalities:", len(merged_on), "biggest:", biggest[:3])


if __name__ == "__main__":
    main()
