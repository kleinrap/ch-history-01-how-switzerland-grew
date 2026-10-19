# How Switzerland Grew

A map site about Swiss history: "Through time", "Every canton" and "Stories". River corrections moved to the sister site Engineered Switzerland. The map is in the middle, the explanation is on the side, and a timeline moves you through the dates.

- **How the cantons joined:** from the three founders in 1291 to 26 cantons today. Before 1798 it also shows the big conquests (Bern's Aargau 1415 and Vaud 1536), the lands ruled together by the cantons, and the allies. There are no fixed border lines: each date draws its own borders.
- **1803: Six new cantons:** what Aargau, Graubünden, St. Gallen, Thurgau, Ticino and Vaud were before 1798, piece by piece. The map zooms to each canton.
- **Every canton:** click a canton on the small map of Switzerland and step through its own history, from its earlier rulers (Zähringen, Kyburg, Habsburg, Savoy, bishops, abbeys) to today. The map zooms to the canton; a dashed line shows its border today.
- **Stories:** guided chapters with their own maps, some zooming out to Europe: 1803 six new cantons; Bern; the Helvetic cantons 1798–1803; lords (Habsburg, Savoy, Zähringen and Kyburg, bishops and abbeys); the Reformation 1519–1712; six stories on wars and battles from Morgarten to the Sonderbund War.
- **Bern's real borders:** Bern at its largest (1555), split by France (1798), the loss of Vaud and Aargau (1803), the Jura (1815), and the losses of 1979, 1994 and 2026. A bar chart shows Bern's area at each date.

## Run it

Double-click `index.html`. Or:

```
python3 scripts/fetch_data.py
python3 -m http.server 8000
```

then open `http://localhost:8000`. Links like `index.html#bern-1798` or `index.html#six-st-gallen` open one step directly.

## Files

- `logic.js`: the rules. Every historical territory is a set of today's municipalities.
- `content.js`: the side-panel text for each date (hand-written, from the HLS).
- `research/*.json`: the researched history of each canton (5 files, by region). `python3 scripts/build_cantons.py research/central.json research/northeast.json research/northwest.json research/west.json research/south.json` turns them into `content-cantons.js`.
- `app.js`: map, timeline, legend and chart (d3 + topojson-client from a CDN).
- `data/`: borders and the municipality list, made by `scripts/fetch_data.py`.
- `docs/DATA.md`: sources and limits. `docs/OPEN-QUESTIONS.md`: facts to check. `docs/IDEAS.md`: ideas for later.

- `PLAN.md`: decisions and phases. `uncertain.html` is built from `docs/OPEN-QUESTIONS.md` with `python3 scripts/build_uncertain.py . "How Switzerland Grew"`.
