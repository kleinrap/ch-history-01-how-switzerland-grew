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
| 2 | The full Old Confederation (all ruled lands and allies: Valais, Geneva, Neuchâtel, Biel, Mulhouse …) and the Helvetic cantons 1798–1803 | Next |
| 3 | Lords before 1291 on the main map (Habsburg, Kyburg, Zähringen, Savoy, bishops, abbeys) | Planned |
| 4 | Religion: the Reformation | Planned |
| 5 | Wars and battles (Morgarten to the Sonderbund War) | Planned |
| 6 | Languages, and municipality mergers since 1850 | Planned |
| 7 | Romans and Celts | Planned |
| – | Translations (DE, FR, IT) | When both sites have their main content |

Work order across both sites: phase 1 of both together, then one phase at a time, on the site the owner chooses.

## Research workflow

1. Sort `docs/OPEN-QUESTIONS.md` by impact (how visible, how big the possible error).
2. The top items become GitHub issues with a priority label.
3. Items with no online source get a **visit sheet** in `docs/VISITS.md`: what to find, which archive or library, likely files or map numbers, and what to bring back (photo and reference). Sheets are grouped by place, so one visit answers many questions. Likely places: Swiss National Library and swisstopo library (Bern/Wabern), ETH Library map collection (Zurich), the canton archives.
4. Answers go into `research/*.json` and the note is updated or removed.

## Open next steps

- Sort the open questions and write the first visit sheets.
