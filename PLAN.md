# Plan: How Switzerland Grew

Swiss history through maps. Sister site: [Engineered Switzerland](../ch-landscape-01-engineered-switzerland/) (the reshaped landscape).

## Decisions (October 2026)

- **Readers:** curious people, no expert knowledge. Every fact has a source. Uncertain points are visible: a note on every step and the page `uncertain.html` ("What we are not sure about").
- **Goal:** publish openly and for free. Not commercial (the border data allows non-commercial use only).
- **Main question:** how Switzerland's territory formed. Other themes come later as stories.
- **Accuracy:** "good enough" now, with uncertain points marked. Deeper research where needed, including visits to archives and libraries (by public transport, anywhere in Switzerland).
- **Time range:** from about 1000. The Romans and Celts come later.
- **Layout:** "Through time" (main map), "Every canton" (clickable map), and "Stories" (one card per topic; it grows without limit).
- **Language:** English now. German, French and Italian when both sites have their main content.
- **Name:** "How Switzerland Grew" (can change later; no domain yet).
- **Code:** its own git repository, published on GitHub Pages.
- **Licences:** texts CC BY 4.0, code MIT, data derived from OpenStreetMap ODbL. Border data: BFS GEOSTAT via swiss-maps, non-commercial.
- **Plan and research tracking:** this file, plus GitHub issues for the research questions (sorted by impact).

## Live

- How Switzerland Grew: https://kleinrap.github.io/ch-history-01-how-switzerland-grew/
- Engineered Switzerland: https://kleinrap.github.io/ch-landscape-01-engineered-switzerland/

Published on GitHub Pages from the `main` branch (18 Oct 2026). The repository names equal the folder names, so the links between the sites (`../<folder>/index.html`) work both online and from disk.

## Phases

| # | Phase | Status |
|---|---|---|
| 1 | Clean-up: new layout (Through time, Every canton, Stories), rivers moved to the sister site, "uncertain" notes and page | **Done** (18 Oct 2026) |
| 2 | The full Old Confederation (all ruled lands and allies: Valais, Geneva, Neuchâtel, Biel, Mulhouse …) and the Helvetic cantons 1798–1803 | **Done** (19 Oct 2026): 30 allies and protected places (`research/allies.json`), 7 Helvetic maps (`research/helvetic.json`), new 1798 step, story "The Helvetic cantons 1798–1803". Dates to check on HLS: see docs/OPEN-QUESTIONS.md |
| 3 | Lords before 1291 on the main map (Habsburg, Kyburg, Zähringen, Savoy, bishops, abbeys) | **Done** (19 Oct 2026): main map steps 1000, 1150, 1218, 1264 with the lords' land; stories Habsburg, Savoy, Zähringen and Kyburg, Bishops and abbeys (with Europe zoom) |
| 4 | Religion: the Reformation | **Done** (19 Oct 2026): story "Reformation: one Confederation, two faiths", 1519–1712 |
| 5 | Wars and battles (Morgarten to the Sonderbund War) | **Done** (19 Oct 2026): 6 stories, 46 steps, battles abroad on the Europe map, foreign armies 1798–1799 |
| 6 | Languages, and municipality mergers since 1850 | **Done** (20 Oct 2026): story "Languages" (15 BC–2022, BFS language regions 2000/2020 by municipality); story "Municipalities" (built by `scripts/build_municipalities.py` from the BFS register; counts before 1960 from HLS) |
| 7 | Romans and Celts | **Done** (20 Oct 2026): stories "Celts and Romans" (12 steps) and "The early Middle Ages" (8 steps) |
| S | Sources for every step | **Done** (20 Oct 2026): 376 steps, 2,325 sources, each with an exact short quote and what it supports; 166 statements shown as "Uncertain". Changes made while checking: `docs/SOURCE-CHANGES.md` |
| – | Translations (DE, FR, IT) | When both sites have their main content |

Work order across both sites: phase 1 of both together, then one phase at a time, on the site the owner chooses.

## Research workflow

1. Sort `docs/OPEN-QUESTIONS.md` by impact (how visible, how big the possible error).
2. The top items become GitHub issues with a priority label.
3. Items with no online source get a **visit sheet** in `docs/VISITS.md`: what to find, which archive or library, likely files or map numbers, and what to bring back (photo and reference). Sheets are grouped by place, so one visit answers many questions. Likely places: Swiss National Library and swisstopo library (Bern/Wabern), ETH Library map collection (Zurich), the canton archives.
4. Answers go into `research/*.json` and the note is updated or removed.

## Sources (decided 20 Oct 2026)

- The user: "for certain elements, it is not clear where you found it and whether it's correct." So every step has `sources: [{url, title, quote, supports}]` (in the research JSON; for the steps in content.js in `research/sources-content.json`) and optional `uncertain: [...]`, shown in the panel under "Sources for this step".
- High-trust sources only (HLS first, official and scholarly pages); Wikipedia is not a source. Quotes were checked word for word against saved page text.
- `docs/OPEN-QUESTIONS.md` and `uncertain.html` are built from the data (`scripts/build_open_questions.py`, `scripts/build_uncertain.py`).

## Open next steps

- Sort the 166 uncertain statements by impact and write the first archive visit sheets (`docs/VISITS.md`).
- Translations (DE, FR, IT) when both sites are complete.
