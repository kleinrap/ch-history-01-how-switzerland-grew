# Data and method

## Sources

| What | Source | Licence |
|---|---|---|
| Municipality, canton and lake borders, state 1 January 2026 | BFS GEOSTAT generalised borders, packaged as TopoJSON by [swiss-maps](https://github.com/interactivethings/swiss-maps) 4.7.0 | Non-commercial; attribute "Bundesamt für Statistik (BFS), GEOSTAT" |
| Municipality names, districts, cantons | [BFS official register of municipalities](https://www.agvchapp.bfs.admin.ch/), snapshot 1 January 2026 | Open |
| Land outside today's Switzerland (Valtellina, Gex, Chablais, Ternier/Gaillard, Évian, Mulhouse) | [OpenStreetMap](https://www.openstreetmap.org/copyright) via the Nominatim lookup API; today's areas stand in for the old ones | ODbL, "© OpenStreetMap contributors" |
| Historical maps for the river tab | [swisstopo "Journey through time"](https://www.swisstopo.admin.ch/en/journey-through-time-historical-maps) (WMTS layer ch.swisstopo.zeitreihen, 1844–2021) and the national map | swisstopo free geodata; attribute "© swisstopo" |
| Old map scans (Kander about 1710, Linth plain 1811, Jura correction 1850) | Wikimedia Commons; licence on each file page (public domain or CC BY-SA 4.0) | As stated on each file page |
| River corrections (years, stretches, lengths) | HLS article [Gewässerkorrektionen](https://hls-dhs-dss.ch/de/articles/007850), river articles, BAFU and canton pages | Read, not copied |
| History (dates, who owned what) | [Historisches Lexikon der Schweiz](https://hls-dhs-dss.ch/): articles "Bern (Kanton)", "Schwarzenburg (Amtsbezirk)", "Murten (Vogtei)", "Gemeine Herrschaften", "Oberland", "Helvetische Republik" | Read, not copied |

Three map areas are shared land, not municipalities, and are not in the BFS list: 2391 Staatswald Galm (FR), 5391 and 5394 (communanze in TI). The script adds them by hand.

## Method

Every old territory is a set of today's municipalities (see `logic.js`):

- **Old Bern** = today's canton of Bern without the Jura bernois and Biel districts (these were lands of the Prince-Bishop of Basel until 1815).
- **Bernese Aargau** = today's Aargau districts Aarau, Brugg, Kulm, Lenzburg, Zofingen.
- **Vaud** = all of today's Vaud.
- **Shared with Fribourg** (until 1798) = today's municipalities Murten, Schwarzenburg, Guggisberg, Rüschegg, Orbe, Echallens, Grandson. The real shared lordships were larger in Vaud.
- **Oberland 1798–1803** = Thun, Obersimmental-Saanen, Frutigen-Niedersimmental, Interlaken-Oberhasli.
- **Land before 1798** (`BEFORE_1798` in `logic.js`), each with the year it came under Swiss rule:
  - Aargau: Bernese Aargau (1415), County of Baden = districts Baden + Zurzach (1415), Freie Ämter = Bremgarten + Muri (1415), Fricktal = Laufenburg + Rheinfelden (Austrian).
  - St. Gallen: abbey lands = Wahlkreise St. Gallen (without the town), Rorschach, Wil (ally 1451); town of St. Gallen (ally 1454); Toggenburg (abbey, 1468); Rheintal (1490); Sargans + Wartau (1483); Werdenberg without Sennwald and Wartau (Glarus, 1517); Sax = Sennwald (Zurich, 1615); Gaster and Uznach = See-Gaster without Rapperswil-Jona (1438); Rapperswil (1464).
  - Ticino: Leventina (Uri, 1480); Bellinzona, Riviera, Blenio (1500); Lugano, Locarno, Mendrisio, Vallemaggia (1512).
  - Thurgau (1460), Graubünden as one ally (1497), Vaud (Bern, 1536) with Orbe, Echallens, Grandson shared (1476).
- Before 1798 the 13 cantons are drawn from their researched histories (below). In "How the cantons joined", Valais, Neuchâtel, Geneva and Biel are not drawn as allies yet; their own histories are in "Every canton".

## Canton histories

`research/*.json` holds one history per canton, researched from the HLS by five research agents, one per region. Each stop lists layers; each layer selects today's municipalities (by canton, district or BFS number). The first layer that matches a municipality wins. Kinds: `core` (the canton with full rights), `subject` (ruled by the canton), `shared` (ruled with other cantons), `other` (context). Each canton's `notes` field says what is approximate.

Before 1798, "How the cantons joined" takes each member canton's latest stop at or before the year. Only land that is `core`, `subject` or `shared` in that stop is drawn.

## Allies and Helvetic cantons

- `research/allies.json`: allies, protected places and ruled lands of the Old Confederation (from/until, selector or OpenStreetMap area). On the main map they fill only land that no canton's own history claims at that date; smaller entries win over larger ones.
- `research/helvetic.json`: the Helvetic Republic's administrative cantons at 7 dates (April 1798 to March 1803), each covering all of today's Switzerland; land outside the Republic is marked "foreign".
- `python3 scripts/build_confederation.py` builds `content-allies.js` and `content-helvetic.js`.

## Limits

- Old borders did not always follow today's municipality lines. Small villages can be on the wrong side (for example Pieterlen near Biel).
- Vellerat (moved to Jura in 1996) is now part of Courrendlin and cannot be drawn alone.
- Areas are measured on the simplified map. All of Switzerland comes out at about 39,900 km² (true: 41,285 km²), so all areas are about 3% too small.
- In "How the cantons joined" and "1803: Six new cantons", Graubünden is drawn as one ally. "Every canton" draws its three leagues (approximately). Land outside today's Switzerland is drawn with today's administrative areas (for example the Province of Sondrio for the Valtellina).
