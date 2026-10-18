// Territorial history of each canton, researched from the HLS. Built by scripts/build_cantons.py
// from research/*.json. Each layer selects today's municipalities (see logic.js selMatch).
window.CANTON_HISTORY = [
 {
  "canton": "ZH",
  "name": "Zurich",
  "summary": "The city of Zurich bought and conquered most of today's canton in the 1400s, held some outlying lands until 1798, and got its present borders in 1803.",
  "stops": [
   {
    "year": 1218,
    "title": "An imperial city",
    "text": [
     "From 1098 the dukes of Zähringen hold the imperial bailiff rights (Reichsvogtei) over Zurich. The Zähringen family dies out in 1218.",
     "The Emperor then takes the rights back. Zurich becomes an imperial city (a city directly under the Emperor). The abbess of the Fraumünster keeps some old rights.",
     "The countryside belongs to many noble families. The strongest are the counts of Kyburg in the east and the barons of Regensberg in the north."
    ],
    "layers": [
     {
      "name": "City of Zurich",
      "kind": "lord",
      "lord": "empire",
      "label": "Zurich: imperial city from 1218",
      "sel": {
       "munis": [
        261
       ]
      }
     },
     {
      "name": "Kyburg",
      "kind": "lord",
      "lord": "kyburg",
      "label": "Counts of Kyburg: main lands around Kyburg and Winterthur (about)",
      "sel": {
       "districts": [
        110,
        108
       ]
      }
     },
     {
      "name": "Regensberg",
      "kind": "lord",
      "lord": "noble",
      "label": "Barons of Regensberg: lands in the Zurich Unterland (about)",
      "sel": {
       "districts": [
        104
       ]
      }
     }
    ]
   },
   {
    "year": 1300,
    "title": "Habsburg around the city",
    "text": [
     "The counts of Kyburg die out in 1264. Count Rudolf of Habsburg takes their lands. In 1267–1268 Habsburg and Zurich defeat the barons of Regensberg.",
     "By about 1300 Habsburg holds the main rights in most of the later canton. Later, Zurich buys these lands one by one, mostly from Habsburg and its vassals."
    ],
    "layers": [
     {
      "name": "City of Zurich",
      "kind": "lord",
      "lord": "empire",
      "label": "Zurich: imperial city",
      "sel": {
       "munis": [
        261
       ]
      }
     },
     {
      "name": "Habsburg",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Habsburg: main lordship rights in most of the countryside (about 1300)",
      "sel": {
       "cantons": [
        "ZH"
       ],
       "except": [
        261
       ]
      }
     }
    ]
   },
   {
    "year": 1351,
    "title": "The city joins the Swiss",
    "text": [
     "In 1351 the city of Zurich makes an alliance with Uri, Schwyz and Unterwalden. At this time Zurich rules almost no land outside its walls.",
     "Zurich starts to buy rights on the lake soon after, for example Zollikon in 1358."
    ],
    "layers": [
     {
      "name": "City of Zurich",
      "kind": "core",
      "label": "City of Zurich: member of the Confederation since 1351",
      "sel": {
       "munis": [
        261
       ]
      }
     }
    ]
   },
   {
    "year": 1452,
    "title": "A city-state is built",
    "text": [
     "Zurich buys or takes many lordships from nobles who need money. Greifensee comes in 1402, Grüningen in 1408 and Regensberg in 1409. Zurich takes the Knonauer Amt in 1415.",
     "Zurich gets the County of Kyburg from Habsburg in 1424. It loses Kyburg in the Old Zurich War, but gets it back for good in 1452. Zurich also gave up the Höfe on the upper lake to Schwyz in 1440.",
     "Each piece of land becomes a bailiwick (land ruled by a governor from the city). Its people have no vote. Since 1415 Zurich also shares the County of Baden with other cantons."
    ],
    "layers": [
     {
      "name": "County of Baden villages",
      "kind": "shared",
      "label": "Part of the County of Baden: ruled together with other cantons since 1415",
      "sel": {
       "munis": [
        243,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Dörflingen",
      "kind": "subject",
      "label": "Dörflingen: ruled by Zurich since 1434",
      "sel": {
       "munis": [
        2915
       ]
      }
     },
     {
      "name": "Grüningen",
      "kind": "subject",
      "label": "Grüningen: ruled by Zurich since 1408",
      "sel": {
       "districts": [
        105
       ],
       "munis": [
        153
       ]
      }
     },
     {
      "name": "Greifensee",
      "kind": "subject",
      "label": "Greifensee: ruled by Zurich since 1402",
      "sel": {
       "districts": [
        109
       ]
      }
     },
     {
      "name": "Regensberg",
      "kind": "subject",
      "label": "Regensberg and Bülach: ruled by Zurich since 1409",
      "sel": {
       "districts": [
        104
       ],
       "munis": [
        53,
        51,
        59,
        60,
        72
       ]
      }
     },
     {
      "name": "Knonauer Amt",
      "kind": "subject",
      "label": "Knonauer Amt: taken by Zurich in 1415",
      "sel": {
       "districts": [
        101
       ]
      }
     },
     {
      "name": "Lake and city lands",
      "kind": "subject",
      "label": "Villages near the city and on the lake: bought by Zurich 1358–1406",
      "sel": {
       "districts": [
        107,
        111
       ],
       "munis": [
        131,
        295,
        135,
        136,
        137,
        139,
        141
       ]
      }
     },
     {
      "name": "Kyburg",
      "kind": "subject",
      "label": "County of Kyburg: ruled by Zurich since 1424, for good since 1452",
      "sel": {
       "districts": [
        110,
        108,
        102,
        103
       ],
       "except": [
        230,
        292,
        38,
        34,
        55,
        58,
        61,
        67,
        70,
        71
       ]
      }
     },
     {
      "name": "City of Zurich",
      "kind": "core",
      "label": "City of Zurich",
      "sel": {
       "munis": [
        261
       ]
      }
     }
    ]
   },
   {
    "year": 1615,
    "title": "Zurich at its largest",
    "text": [
     "Zurich buys Winterthur in 1467, Stein am Rhein in 1484, Eglisau in 1496 and Wädenswil in 1549. In 1615 it buys Sax-Forstegg in the Rhine valley.",
     "From 1460 Zurich shares the rule of Thurgau with other cantons. Rheinau, with its abbey, is part of this shared land.",
     "The country people have no vote. Only the citizens of the city govern."
    ],
    "layers": [
     {
      "name": "County of Baden villages",
      "kind": "shared",
      "label": "Part of the County of Baden: ruled together with other cantons",
      "sel": {
       "munis": [
        243,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau",
      "kind": "shared",
      "label": "Rheinau: under the cantons that ruled Thurgau",
      "sel": {
       "munis": [
        38
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "shared",
      "label": "Thurgau: common lordship (land ruled together) since 1460",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Sax-Forstegg",
      "kind": "subject",
      "label": "Sax-Forstegg: ruled by Zurich since 1615",
      "sel": {
       "munis": [
        3274
       ]
      }
     },
     {
      "name": "Stein am Rhein",
      "kind": "subject",
      "label": "Stein am Rhein: under Zurich since 1484",
      "sel": {
       "munis": [
        2964,
        2962
       ]
      }
     },
     {
      "name": "Dörflingen",
      "kind": "subject",
      "label": "Dörflingen: ruled by Zurich since 1434",
      "sel": {
       "munis": [
        2915
       ]
      }
     },
     {
      "name": "Zurich countryside",
      "kind": "subject",
      "label": "Zurich countryside: bailiwicks ruled by the city",
      "sel": {
       "cantons": [
        "ZH"
       ],
       "except": [
        261
       ]
      }
     },
     {
      "name": "City of Zurich",
      "kind": "core",
      "label": "City of Zurich",
      "sel": {
       "munis": [
        261
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Today's borders",
    "text": [
     "In 1798 the old city-state ends. The country people get equal rights. Stein am Rhein and Dörflingen go to Schaffhausen, and Sax goes to the new canton of Linth.",
     "In 1803 the Act of Mediation fixes the canton. Zurich gets Rheinau and Dietikon with nearby villages from the old County of Baden.",
     "Since then, the borders have not changed, except for very small corrections."
    ],
    "layers": [
     {
      "name": "Gained 1803",
      "kind": "core",
      "label": "Rheinau and the Dietikon area: part of Zurich since 1803",
      "sel": {
       "munis": [
        38,
        243,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Canton of Zurich",
      "kind": "core",
      "label": "Canton of Zurich",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Went to Schaffhausen",
      "kind": "other",
      "label": "Stein am Rhein and Dörflingen: went to Schaffhausen in 1798",
      "sel": {
       "munis": [
        2964,
        2962,
        2915
       ]
      }
     },
     {
      "name": "Went to St. Gallen",
      "kind": "other",
      "label": "Sax: went to Linth in 1798 and to St. Gallen in 1803",
      "sel": {
       "munis": [
        3274
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007381/",
   "https://hls-dhs-dss.ch/de/articles/000164/"
  ],
  "notes": "Bailiwicks drawn as today's districts: Kyburg = Winterthur, Pfäffikon, Andelfingen and most of Bülach; Grüningen = Hinwil + Hombrechtikon; Greifensee = Uster; Regensberg = Dielsdorf + Bülach and nearby villages. Many small lordships bought later (Regensdorf 1469, Knonau 1512, Bonstetten 1539, Laufen 1544, Flaach 1694, Altikon 1696) are not shown separately in 1452. Winterthur, Stammheim (1464), Laufen-Uhwiesen and the Eglisau villages are left blank in 1452. Dietikon area = Dietikon, Schlieren, Oetwil an der Limmat, Hüttikon. Hemishofen is drawn with Stein am Rhein. Ellikon am Rhein (now part of Marthalen) came from Schaffhausen in 1798 and cannot be drawn alone."
 },
 {
  "canton": "BE",
  "name": "Bern",
  "summary": "Bern was founded by the Zähringen, became an imperial town in 1218, grew into the largest city-state north of the Alps, lost Vaud and Aargau in 1798–1803, got the Jura in 1815 and lost most of it again after 1979.",
  "stops": [
   {
    "year": 1200,
    "title": "Zähringen towns",
    "text": [
     "About 1200 the dukes of Zähringen rule much of the land between the Jura and the Alps. They found towns to hold it, for example Burgdorf, Thun and Bern. The usual date for Bern is 1191.",
     "Bern is a small town on a bend of the Aare river."
    ],
    "layers": [
     {
      "name": "Zähringen towns",
      "kind": "lord",
      "lord": "zahringen",
      "label": "Towns of the dukes of Zähringen: Bern, Burgdorf, Thun",
      "sel": {
       "munis": [
        351,
        404,
        942
       ]
      }
     }
    ]
   },
   {
    "year": 1218,
    "title": "A free town of the Empire",
    "text": [
     "In 1218 the last duke of Zähringen dies. The counts of Kyburg get his own lands, for example Burgdorf and Thun.",
     "Bern now stands directly under the king. It is an imperial town (a town with no lord between it and the king). Laupen is also imperial land.",
     "From 1256 the counts of Savoy protect Bern for some years."
    ],
    "layers": [
     {
      "name": "Kyburg",
      "kind": "lord",
      "lord": "kyburg",
      "label": "Counts of Kyburg: Burgdorf and Thun",
      "sel": {
       "munis": [
        404,
        942
       ]
      }
     },
     {
      "name": "Laupen",
      "kind": "lord",
      "lord": "empire",
      "label": "Laupen: imperial land",
      "sel": {
       "munis": [
        667
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "lord",
      "lord": "empire",
      "label": "Bern: imperial town under the king",
      "sel": {
       "munis": [
        351
       ]
      }
     }
    ]
   },
   {
    "year": 1353,
    "title": "A small city-state joins",
    "text": [
     "In 1353 Bern makes a permanent alliance with Uri, Schwyz and Unterwalden. This links Bern to the Confederation.",
     "At this time Bern rules only a small area: the city, four parishes around it, Laupen and the Hasli valley (Oberhasli). Bern holds Laupen and Hasli as a pledge (land given as security for a loan) from the king.",
     "Bern also has strong ties with nearby lords and towns, for example Thun, but it does not rule them yet."
    ],
    "layers": [
     {
      "name": "Laupen",
      "kind": "subject",
      "label": "Laupen: held by Bern as a pledge (confirmed 1348)",
      "sel": {
       "munis": [
        667
       ]
      }
     },
     {
      "name": "Hasli",
      "kind": "subject",
      "label": "Hasli (Oberhasli): held by Bern as a pledge since 1334",
      "sel": {
       "munis": [
        782,
        783,
        784,
        785,
        786
       ]
      }
     },
     {
      "name": "City of Bern",
      "kind": "core",
      "label": "City of Bern and the parishes Bolligen, Vechigen, Stettlen and Muri",
      "sel": {
       "munis": [
        351,
        352,
        358,
        359,
        356,
        362,
        363
       ]
      }
     }
    ]
   },
   {
    "year": 1415,
    "title": "Fast growth and the Aargau",
    "text": [
     "After 1384 Bern grows very fast. It takes Burgdorf and Thun in 1384, the Simmental, Unterseen, Nidau and Büren in 1389, Frutigen in 1400 and the Emmental in 1406–1408.",
     "In 1413 Bern and Solothurn take Bipp together. In 1415 Bern conquers most of the Aargau and rules it as bailiwicks (land ruled by a governor sent from Bern)."
    ],
    "layers": [
     {
      "name": "Bipp",
      "kind": "shared",
      "label": "Bipp: shared with Solothurn since 1413",
      "sel": {
       "munis": [
        981,
        983,
        987,
        995,
        975,
        971,
        990
       ]
      }
     },
     {
      "name": "Nidau",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "munis": [
        743,
        731,
        732,
        733,
        739,
        742,
        744,
        745,
        746,
        747,
        748,
        750,
        740,
        756
       ]
      }
     },
     {
      "name": "Bernese Aargau",
      "kind": "subject",
      "label": "Bernese Aargau: conquered by Bern in 1415",
      "sel": {
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ],
       "except": [
        841,
        842,
        843,
        852,
        853,
        855,
        492,
        491,
        493,
        494,
        495,
        496,
        497,
        498,
        499,
        500,
        501,
        502,
        981,
        983,
        987,
        995,
        975,
        971,
        990
       ]
      }
     }
    ]
   },
   {
    "year": 1536,
    "title": "Bern takes Vaud",
    "text": [
     "In the 1400s Bern adds more land, for example Gümmenen in 1467 and Erlach in 1474. In 1463 Bern gets Bipp alone. In the Burgundian Wars (1474–1476) Bern takes Aigle and, together with Fribourg, Murten, Grandson, Orbe and Echallens.",
     "In 1536 Bern conquers Vaud without a fight. Vaud becomes Bernese subject land."
    ],
    "layers": [
     {
      "name": "Shared with Fribourg",
      "kind": "shared",
      "label": "Shared with Fribourg: Murten, Schwarzenburg, Orbe-Echallens, Grandson",
      "sel": {
       "munis": [
        2275,
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     },
     {
      "name": "Vaud",
      "kind": "subject",
      "label": "Vaud: ruled by Bern since 1536 (Aigle since 1475)",
      "sel": {
       "cantons": [
        "VD"
       ],
       "except": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Bernese Aargau",
      "kind": "subject",
      "label": "Bernese Aargau: ruled by Bern since 1415",
      "sel": {
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910
       ]
      }
     },
     {
      "name": "Nidau",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "munis": [
        743,
        731,
        732,
        733,
        739,
        742,
        744,
        745,
        746,
        747,
        748,
        750,
        740,
        756
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ],
       "except": [
        841,
        842,
        843
       ]
      }
     }
    ]
   },
   {
    "year": 1555,
    "title": "Bern at its largest",
    "text": [
     "In 1555 the last count of Gruyère cannot pay his debts. Bern and Fribourg divide his county.",
     "Bern gets the upper part: Saanen and the Pays-d'Enhaut. Now Bern is the largest city-state north of the Alps."
    ],
    "layers": [
     {
      "name": "Shared with Fribourg",
      "kind": "shared",
      "label": "Shared with Fribourg: Murten, Schwarzenburg, Orbe-Echallens, Grandson",
      "sel": {
       "munis": [
        2275,
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     },
     {
      "name": "Vaud",
      "kind": "subject",
      "label": "Vaud: ruled by Bern since 1536 (Aigle since 1475)",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     },
     {
      "name": "Bernese Aargau",
      "kind": "subject",
      "label": "Bernese Aargau: ruled by Bern since 1415",
      "sel": {
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910
       ]
      }
     },
     {
      "name": "Nidau",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "munis": [
        743,
        731,
        732,
        733,
        739,
        742,
        744,
        745,
        746,
        747,
        748,
        750,
        740,
        756
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Bernese state",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "The Helvetic Republic splits Bern",
    "text": [
     "In 1798 France conquers Switzerland and makes the Helvetic Republic. Bern loses Vaud and the Aargau. Both become their own cantons.",
     "The Oberland also becomes a separate canton, with Thun as its capital. Bern keeps only its middle part.",
     "France had already taken the Jura and Biel in 1793 and 1797."
    ],
    "layers": [
     {
      "name": "Canton Oberland",
      "kind": "other",
      "label": "Canton of Oberland (1798–1803)",
      "sel": {
       "districts": [
        247,
        248,
        249,
        250
       ]
      }
     },
     {
      "name": "Nidau",
      "kind": "core",
      "label": "Helvetic canton of Bern",
      "sel": {
       "munis": [
        743,
        731,
        732,
        733,
        739,
        742,
        744,
        745,
        746,
        747,
        748,
        750,
        740,
        756
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Helvetic canton of Bern",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242,
        247,
        248,
        249,
        250
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Bern without Vaud and Aargau",
    "text": [
     "In 1803 the Act of Mediation ends the Helvetic Republic. The Oberland goes back to Bern.",
     "Vaud and Aargau stay separate cantons. Bern does not get them back."
    ],
    "layers": [
     {
      "name": "Nidau",
      "kind": "core",
      "label": "Canton of Bern",
      "sel": {
       "munis": [
        743,
        731,
        732,
        733,
        739,
        742,
        744,
        745,
        746,
        747,
        748,
        750,
        740,
        756
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Canton of Bern",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Bern gets the Jura",
    "text": [
     "In 1815 the Congress of Vienna gives most of the old Prince-Bishopric of Basel to Bern. This is the land of the Jura, with Biel and the Laufen valley.",
     "Bern gets it as a replacement for Vaud and Aargau."
    ],
    "layers": [
     {
      "name": "Jura",
      "kind": "core",
      "label": "Jura, Biel and Laufen: part of Bern since 1815",
      "sel": {
       "districts": [
        241,
        242,
        1302
       ],
       "cantons": [
        "JU"
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Old Bernese land",
      "sel": {
       "cantons": [
        "BE"
       ]
      }
     }
    ]
   },
   {
    "year": 1979,
    "title": "The canton of Jura leaves",
    "text": [
     "In 1974 the north of the Jura votes for its own canton. In 1975 the three southern districts vote to stay with Bern.",
     "On 1 January 1979 the new canton of Jura starts. Bern loses the districts of Porrentruy, Delémont and Franches-Montagnes."
    ],
    "layers": [
     {
      "name": "Moutier",
      "kind": "core",
      "label": "Canton of Bern",
      "sel": {
       "munis": [
        6831
       ]
      }
     },
     {
      "name": "Canton of Jura",
      "kind": "other",
      "label": "Left Bern in 1979: new canton of Jura",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Canton of Bern",
      "sel": {
       "cantons": [
        "BE"
       ],
       "districts": [
        1302
       ]
      }
     }
    ]
   },
   {
    "year": 2026,
    "title": "Laufen and Moutier leave",
    "text": [
     "The Laufen district was cut off from the rest of Bern by the new canton of Jura. In 1989 it voted to join Basel-Landschaft, and it moved in 1994.",
     "In 1996 the small village of Vellerat moved to Jura. In 2021 the town of Moutier voted to join Jura, and it moved on 1 January 2026."
    ],
    "layers": [
     {
      "name": "Moutier",
      "kind": "other",
      "label": "Moutier: to the canton of Jura in 2026",
      "sel": {
       "munis": [
        6831
       ]
      }
     },
     {
      "name": "Laufen",
      "kind": "other",
      "label": "Laufen: to Basel-Landschaft in 1994",
      "sel": {
       "districts": [
        1302
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "core",
      "label": "Canton of Bern today",
      "sel": {
       "cantons": [
        "BE"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007383/",
   "https://hls-dhs-dss.ch/de/articles/008456/",
   "https://hls-dhs-dss.ch/de/articles/008451/",
   "https://hls-dhs-dss.ch/de/articles/007399/"
  ],
  "notes": "1353: the four parishes around the city are drawn as Bern, Bolligen, Ittigen, Ostermundigen, Stettlen, Vechigen and Muri. 1415 and 1536: old Bern is drawn as today's canton without the districts Jura bernois and Biel, but with the old Nidau bailiwick (lake shore and Nidau). In 1415 Saanen, Schwarzenburg and the Erlach area are left out; the monastery lands of Interlaken are drawn as Bernese, although Bern only took them over fully in 1528. 1555: Saanen and the Pays-d'Enhaut are drawn as Saanen, Gsteig, Lauenen, Château-d'Oex, Rossinière and Rougemont. 1798: the Bern/Oberland line is drawn by today's districts. Vellerat (1996) cannot be drawn alone (now part of Courrendlin). 1200: only the Zähringen towns are drawn, not all their land; Bern's founding year 1191 is the traditional date, the HLS canton article gives no year."
 },
 {
  "canton": "LU",
  "name": "Lucerne",
  "summary": "The city of Lucerne joined the Swiss in 1332, built up its rural state from 1380 to 1415, and in 1803 traded Merenschwand for Hitzkirch.",
  "stops": [
   {
    "year": 1150,
    "title": "Murbach's town and Lenzburg's land",
    "text": [
     "The monastery of St. Leodegar in Lucerne belongs to Murbach abbey in Alsace. The town of Lucerne grows next to it, on the abbey's land.",
     "The countryside is part of the Aargau. The counts of Lenzburg are the strongest lords there; they found the monastery of Beromünster. The lords of Wolhusen hold the Entlebuch (about)."
    ],
    "layers": [
     {
      "name": "Lucerne",
      "kind": "lord",
      "lord": "abbey",
      "label": "Lucerne: town of Murbach abbey (monastery of St. Leodegar)",
      "sel": {
       "munis": [
        1061
       ]
      }
     },
     {
      "name": "Entlebuch",
      "kind": "lord",
      "lord": "noble",
      "label": "Entlebuch: lords of Wolhusen (about)",
      "sel": {
       "munis": [
        1001,
        1002,
        1004,
        1005,
        1007,
        1008,
        1009,
        1010,
        1107
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Countryside: counts of Lenzburg and other lords (about; until 1173)",
      "sel": {
       "cantons": [
        "LU"
       ]
      }
     }
    ]
   },
   {
    "year": 1291,
    "title": "Habsburg buys Lucerne",
    "text": [
     "The Lenzburg line dies out in about 1172. The Kyburgs and the Habsburgs then compete for the land and found new towns, such as Sursee, Sempach and Richensee.",
     "When the Kyburg main line ends in 1264, the Habsburgs become the main power. In 1291 they buy Murbach's rights over the town of Lucerne. They rule the land from centres such as Sursee, Sempach, Willisau, Wolhusen, Rothenburg and Lucerne."
    ],
    "layers": [
     {
      "name": "Lucerne",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Town of Lucerne: bought by Habsburg from Murbach abbey in 1291",
      "sel": {
       "munis": [
        1061
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Countryside: Habsburg districts and vassals (about)",
      "sel": {
       "cantons": [
        "LU"
       ]
      }
     }
    ]
   },
   {
    "year": 1332,
    "title": "City joins the forest cantons",
    "text": [
     "In 1332 the city of Lucerne makes a league with Uri, Schwyz and Unterwalden. At this time Lucerne rules almost no land outside the town. The countryside around it belongs to the Habsburgs."
    ],
    "layers": [
     {
      "name": "Lucerne",
      "kind": "core",
      "label": "City of Lucerne: member of the Swiss league since 1332",
      "sel": {
       "munis": [
        1061
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Countryside: Habsburg land (about)",
      "sel": {
       "cantons": [
        "LU"
       ]
      }
     }
    ]
   },
   {
    "year": 1415,
    "title": "A city-state with a large countryside",
    "text": [
     "Lucerne begins to buy land in 1380 with Weggis. Its fastest growth comes after the Sempach War (1386–1389), mostly by purchase and pledge: Merenschwand (1394), the Entlebuch (1395 and 1405), Willisau and others.",
     "In 1415 the Habsburgs lose their lands in the Aargau. Their last rights, also over Sursee and the abbey of Beromünster, go to Lucerne. The countryside is a subject land: bailiffs (governors) from the city rule it.",
     "With the other cantons, Lucerne also rules the Freie Ämter (Free Districts), including Hitzkirch. By about 1480 Lucerne's land is mostly complete."
    ],
    "layers": [
     {
      "name": "Hitzkirch",
      "kind": "shared",
      "label": "Amt Hitzkirch: part of the Freie Ämter, shared with other cantons",
      "sel": {
       "munis": [
        1021,
        1025,
        1030,
        1041
       ]
      }
     },
     {
      "name": "Merenschwand",
      "kind": "subject",
      "label": "Merenschwand: ruled by Lucerne, 1394–1798",
      "sel": {
       "munis": [
        4234
       ]
      }
     },
     {
      "name": "Freie Ämter",
      "kind": "shared",
      "label": "Freie Ämter: shared with other cantons (from 1415)",
      "sel": {
       "districts": [
        1908,
        1903
       ]
      }
     },
     {
      "name": "Lucerne",
      "kind": "core",
      "label": "City of Lucerne",
      "sel": {
       "munis": [
        1061
       ]
      }
     },
     {
      "name": "Lucerne countryside",
      "kind": "subject",
      "label": "Countryside ruled by the city of Lucerne",
      "sel": {
       "cantons": [
        "LU"
       ],
       "munis": [
        1001,
        1002,
        1004,
        1005,
        1007,
        1008,
        1009,
        1010,
        1107,
        1081,
        1082,
        1083,
        1084,
        1085,
        1086,
        1088,
        1089,
        1091,
        1093,
        1094,
        1095,
        1097,
        1098,
        1099,
        1100,
        1102,
        1103,
        1104
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Hitzkirch in, Merenschwand out",
    "text": [
     "In 1798 the old order ends and the countryside gets equal rights. In 1803 Lucerne gets the Amt Hitzkirch from the Helvetic canton of Baden.",
     "In return, Merenschwand goes to the new canton of Aargau. Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Merenschwand",
      "kind": "other",
      "label": "Merenschwand: part of Aargau since 1803",
      "sel": {
       "munis": [
        4234
       ]
      }
     },
     {
      "name": "Lucerne",
      "kind": "core",
      "label": "Canton of Lucerne today, with Hitzkirch since 1803",
      "sel": {
       "cantons": [
        "LU"
       ],
       "munis": [
        1001,
        1002,
        1004,
        1005,
        1007,
        1008,
        1009,
        1010,
        1107,
        1081,
        1082,
        1083,
        1084,
        1085,
        1086,
        1088,
        1089,
        1091,
        1093,
        1094,
        1095,
        1097,
        1098,
        1099,
        1100,
        1102,
        1103,
        1104
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007382/"
  ],
  "notes": "The 1332 city is drawn as today's municipality of Lucerne (which includes Littau since 2010). The 1415 stop shows the state of about 1415–1480 in one picture; some places came a little later. Amt Hitzkirch drawn as Hitzkirch, Aesch, Ermensee and Schongau (about). The Freie Ämter drawn as today's districts of Muri and Bremgarten (about; the towns of Bremgarten and Mellingen had their own status)."
 },
 {
  "canton": "UR",
  "name": "Uri",
  "summary": "Uri grew from the Reuss valley to a pass state on both sides of the Gotthard, then lost the Leventina in 1798 and kept Urseren.",
  "stops": [
   {
    "year": 1200,
    "title": "Abbey land under Zähringen rule",
    "text": [
     "In 853 King Louis the German gives his lands and rights in Uri to the Fraumünster abbey in Zurich. The abbey owns much of the land.",
     "Outside lords hold the right to judge and protect the valley for the king: the counts of Lenzburg from about 976 to 1173, then the dukes of Zähringen until 1218.",
     "Urseren belongs to the lands of Disentis abbey, on the other side of the Oberalp Pass."
    ],
    "layers": [
     {
      "name": "Urseren",
      "kind": "lord",
      "lord": "abbey",
      "label": "Urseren: land of Disentis abbey",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      }
     },
     {
      "name": "Uri",
      "kind": "lord",
      "lord": "zahringen",
      "label": "Uri: Fraumünster abbey land, dukes of Zähringen as the king's governors (until 1218)",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     }
    ]
   },
   {
    "year": 1240,
    "title": "Directly under the Empire",
    "text": [
     "After 1218 the Habsburgs get rights in Uri. In 1231 King Henry (VII) buys these rights back, and Uri comes directly under the Empire (reichsfrei: no lord between the valley and the king).",
     "In 1239 or 1240 Emperor Frederick II makes Urseren an imperial district and gives it to Count Rudolf of Rapperswil."
    ],
    "layers": [
     {
      "name": "Urseren",
      "kind": "lord",
      "lord": "noble",
      "label": "Urseren: Disentis abbey land, counts of Rapperswil as imperial governors",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      }
     },
     {
      "name": "Uri",
      "kind": "lord",
      "lord": "empire",
      "label": "Uri: directly under the Empire since 1231",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     }
    ]
   },
   {
    "year": 1291,
    "title": "Uri in the first league",
    "text": [
     "Uri is the valley of the Reuss from Lake Uri up to the Schöllenen gorge, with its side valleys. It is one of the first members of the Swiss league, around 1291 or 1309, and surely by 1315.",
     "Urseren, the high valley around Andermatt, is not yet part of Uri."
    ],
    "layers": [
     {
      "name": "Urseren",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Urseren: Disentis abbey land, Habsburg as governors since 1283",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      }
     },
     {
      "name": "Uri",
      "kind": "core",
      "label": "Land of Uri: founding member of the Swiss league",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     }
    ]
   },
   {
    "year": 1410,
    "title": "Urseren joins Uri",
    "text": [
     "In 1410 Uri and Urseren make a Landrecht (a treaty of common citizenship). Urseren keeps its own customs and court, but Uri leads it in war, justice and transit.",
     "Uri now controls the road up to the Gotthard Pass. In 1403 Uri and Obwalden had already moved into the Leventina south of the pass, but they lose it again in 1422."
    ],
    "layers": [
     {
      "name": "Urseren",
      "kind": "core",
      "label": "Urseren: linked to Uri by treaty since 1410, with its own court",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      }
     },
     {
      "name": "Uri",
      "kind": "core",
      "label": "Land of Uri",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     }
    ]
   },
   {
    "year": 1503,
    "title": "A pass state across the Gotthard",
    "text": [
     "Uri takes the Leventina again in 1439–1441. After the battle of Giornico in 1478 and peace with Milan in 1480, the valley stays with Uri. It is a subject land: Uri sends a bailiff (a governor) to rule it.",
     "From 1503 Uri also rules Bellinzona, the Riviera and the Blenio valley, together with Schwyz and Nidwalden."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "subject",
      "label": "Leventina: ruled by Uri alone, about 1441–1798",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Bellinzona, Riviera, Blenio",
      "kind": "shared",
      "label": "Bellinzona, Riviera and Blenio: ruled by Uri, Schwyz and Nidwalden, 1503–1798",
      "sel": {
       "districts": [
        2101,
        2102,
        2107
       ]
      }
     },
     {
      "name": "Urseren",
      "kind": "core",
      "label": "Urseren: linked to Uri by treaty",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      }
     },
     {
      "name": "Uri",
      "kind": "core",
      "label": "Land of Uri",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of canton Waldstätten",
    "text": [
     "In 1798 the Helvetic Republic ends the old order. The Leventina is set free and is no longer ruled by Uri.",
     "Uri becomes two districts, Altdorf and Andermatt, of the new canton of Waldstätten. This canton joins Uri, Schwyz, Obwalden, Nidwalden and Zug."
    ],
    "layers": [
     {
      "name": "Uri",
      "kind": "core",
      "label": "Uri: districts Altdorf and Andermatt of canton Waldstätten",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     },
     {
      "name": "Rest of Waldstätten",
      "kind": "other",
      "label": "Other parts of the Helvetic canton Waldstätten (1798–1801)",
      "sel": {
       "cantons": [
        "OW",
        "NW",
        "ZG"
       ],
       "districts": [
        506,
        502,
        504,
        501
       ]
      }
     },
     {
      "name": "Leventina",
      "kind": "other",
      "label": "Leventina: free of Uri since 1798, later part of Ticino",
      "sel": {
       "districts": [
        2103
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Uri as it is today",
    "text": [
     "In 1803 Uri is a canton again. Urseren becomes an equal part of Uri, not a separate valley under a treaty.",
     "Uri tries to get the Leventina back, but it fails. The Leventina stays in the new canton of Ticino. Since then, the borders of Uri have not changed."
    ],
    "layers": [
     {
      "name": "Uri",
      "kind": "core",
      "label": "Canton of Uri, with Urseren (since 1803)",
      "sel": {
       "cantons": [
        "UR"
       ]
      }
     },
     {
      "name": "Leventina",
      "kind": "other",
      "label": "Leventina: part of Ticino since 1803",
      "sel": {
       "districts": [
        2103
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
   "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/"
  ],
  "notes": "Urseren drawn as Andermatt, Hospental and Realp. The bailiwicks of Bellinzona, Riviera and Blenio are drawn as today's districts of Bellinzona, Riviera and Blenio; Biasca is drawn with Riviera. The Val d'Ossola (shared 1410–1418, now in Italy) cannot be drawn."
 },
 {
  "canton": "SZ",
  "name": "Schwyz",
  "summary": "Schwyz added Arth, the March, Einsiedeln, Küssnacht and the Höfe by 1440, shared Gaster and Uznach with Glarus until 1798, gained Gersau in 1817 and was briefly split in 1832–1833.",
  "stops": [
   {
    "year": 1150,
    "title": "Lenzburg and Einsiedeln",
    "text": [
     "Around 1150 the counts of Lenzburg own large estates in the Schwyz valley. The people of Schwyz already argue with Einsiedeln abbey about the border of their pastures. This dispute (the Marchenstreit) goes on for almost 200 years.",
     "Einsiedeln abbey owns the forest land around the monastery and the Höfe on Lake Zurich. The lords of Rapperswil and others hold land in the March."
    ],
    "layers": [
     {
      "name": "Einsiedeln",
      "kind": "lord",
      "lord": "abbey",
      "label": "Einsiedeln abbey and its lands (with the Höfe)",
      "sel": {
       "districts": [
        501,
        503
       ]
      }
     },
     {
      "name": "March",
      "kind": "lord",
      "lord": "noble",
      "label": "March: lords of Rapperswil and other lords (about)",
      "sel": {
       "districts": [
        505
       ]
      }
     },
     {
      "name": "Schwyz",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Schwyz valley: large estates of the counts of Lenzburg (until 1173)",
      "sel": {
       "districts": [
        506
       ]
      }
     }
    ]
   },
   {
    "year": 1240,
    "title": "Schwyz becomes reichsfrei",
    "text": [
     "The Lenzburg line dies out in 1173. Their lands go to the Kyburgs, the Frohburgs, the lords of Rapperswil and the Habsburgs.",
     "In 1240 Emperor Frederick II puts the valley of Schwyz directly under the Empire, as thanks for its help. The Habsburgs do not accept this, and the conflict goes on.",
     "Küssnacht is ruled by a family of knights who serve the Habsburgs."
    ],
    "layers": [
     {
      "name": "Einsiedeln",
      "kind": "lord",
      "lord": "abbey",
      "label": "Einsiedeln abbey and its lands (with the Höfe)",
      "sel": {
       "districts": [
        501,
        503
       ]
      }
     },
     {
      "name": "March",
      "kind": "lord",
      "lord": "noble",
      "label": "March: lords of Rapperswil and other lords (about)",
      "sel": {
       "districts": [
        505
       ]
      }
     },
     {
      "name": "Küssnacht",
      "kind": "lord",
      "lord": "noble",
      "label": "Küssnacht: knights of Küssnacht, vassals of Habsburg",
      "sel": {
       "districts": [
        504
       ]
      }
     },
     {
      "name": "Schwyz",
      "kind": "lord",
      "lord": "empire",
      "label": "Valley of Schwyz: directly under the Empire since 1240",
      "sel": {
       "districts": [
        506
       ]
      }
     }
    ]
   },
   {
    "year": 1291,
    "title": "Old Land Schwyz",
    "text": [
     "The Land of Schwyz is the valley around the village of Schwyz, from Lake Lucerne to the Muota valley and Rothenthurm. It is one of the first members of the Swiss league, around 1291 or 1309, and surely by 1315.",
     "Arth, Küssnacht, Einsiedeln, the March and the Höfe are not yet part of Schwyz.",
     "Einsiedeln abbey still rules its own lands, with the Habsburgs as protectors since 1283. Küssnacht is held by knights who serve the Habsburgs."
    ],
    "layers": [
     {
      "name": "Arth",
      "kind": "other",
      "label": "Arth: joined Schwyz in the 14th century",
      "sel": {
       "munis": [
        1362
       ]
      }
     },
     {
      "name": "Einsiedeln",
      "kind": "lord",
      "lord": "abbey",
      "label": "Einsiedeln abbey and the Höfe (Habsburg protectors since 1283)",
      "sel": {
       "districts": [
        501,
        503
       ]
      }
     },
     {
      "name": "Küssnacht",
      "kind": "lord",
      "lord": "noble",
      "label": "Küssnacht: knights of Küssnacht, vassals of Habsburg",
      "sel": {
       "districts": [
        504
       ]
      }
     },
     {
      "name": "Land Schwyz",
      "kind": "core",
      "label": "Old Land of Schwyz: founding member of the Swiss league",
      "sel": {
       "districts": [
        506
       ]
      }
     }
    ]
   },
   {
    "year": 1440,
    "title": "Schwyz and its outer lands",
    "text": [
     "Schwyz grows quickly. It takes Einsiedeln in 1386 and becomes protector (Kastvogt) of the abbey in 1424. It makes treaties with the March from 1386 and holds all of it by 1436. It buys the rights over Küssnacht in 1402. In 1440, after the Old Zurich War, it takes Wollerau and Pfäffikon (the Höfe).",
     "These outer lands belong to Schwyz, but their people have fewer rights than the people of old Schwyz. Together with Glarus, Schwyz also rules Gaster (from 1438) and Uznach (pledged 1437, bought 1469).",
     "Gersau stays a tiny free republic and an ally of the Swiss."
    ],
    "layers": [
     {
      "name": "Gersau",
      "kind": "other",
      "label": "Gersau: small free republic, ally of the Swiss",
      "sel": {
       "districts": [
        502
       ]
      }
     },
     {
      "name": "Gaster and Uznach",
      "kind": "shared",
      "label": "Gaster and Uznach: ruled by Schwyz and Glarus together until 1798",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        3338,
        3339,
        3341,
        3342
       ]
      }
     },
     {
      "name": "Einsiedeln",
      "kind": "subject",
      "label": "Einsiedeln and abbey lands: under Schwyz since 1386–1424",
      "sel": {
       "districts": [
        501
       ],
       "munis": [
        1345
       ]
      }
     },
     {
      "name": "March",
      "kind": "subject",
      "label": "March: under Schwyz, fully by 1436",
      "sel": {
       "districts": [
        505
       ]
      }
     },
     {
      "name": "Höfe",
      "kind": "subject",
      "label": "Höfe (Wollerau, Pfäffikon): taken by Schwyz in 1440",
      "sel": {
       "districts": [
        503
       ]
      }
     },
     {
      "name": "Küssnacht",
      "kind": "subject",
      "label": "Küssnacht: rights bought by Schwyz in 1402",
      "sel": {
       "districts": [
        504
       ]
      }
     },
     {
      "name": "Land Schwyz",
      "kind": "core",
      "label": "Land of Schwyz, now with Arth",
      "sel": {
       "districts": [
        506
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Split between two cantons",
    "text": [
     "In 1798 the Helvetic Republic divides the land of Schwyz. Schwyz, Gersau, Küssnacht and Einsiedeln go to the new canton of Waldstätten.",
     "The March and the Höfe go to the canton of Linth, together with Glarus. Gaster and Uznach are no longer ruled by Schwyz."
    ],
    "layers": [
     {
      "name": "Schwyz in Waldstätten",
      "kind": "core",
      "label": "Schwyz, Gersau, Küssnacht, Einsiedeln: part of canton Waldstätten",
      "sel": {
       "districts": [
        506,
        502,
        504,
        501
       ]
      }
     },
     {
      "name": "March and Höfe",
      "kind": "other",
      "label": "March and Höfe: part of canton Linth (1798–1803)",
      "sel": {
       "districts": [
        505,
        503
       ]
      }
     },
     {
      "name": "Rest of Waldstätten",
      "kind": "other",
      "label": "Other parts of canton Waldstätten",
      "sel": {
       "cantons": [
        "UR",
        "OW",
        "NW",
        "ZG"
       ]
      }
     }
    ]
   },
   {
    "year": 1817,
    "title": "Gersau joins for good",
    "text": [
     "In 1803 Schwyz is a canton again, with the March, the Höfe, Einsiedeln and Küssnacht. All its people now have equal rights in law.",
     "Gersau and Reichenburg are added in 1803. Gersau becomes part of Schwyz for good in 1817."
    ],
    "layers": [
     {
      "name": "Gersau",
      "kind": "core",
      "label": "Gersau: part of Schwyz for good since 1817",
      "sel": {
       "districts": [
        502
       ]
      }
     },
     {
      "name": "Schwyz",
      "kind": "core",
      "label": "Canton of Schwyz",
      "sel": {
       "cantons": [
        "SZ"
       ]
      }
     }
    ]
   },
   {
    "year": 1832,
    "title": "Outer Schwyz breaks away",
    "text": [
     "The outer districts want equal seats in the cantonal council. In 1832 the March, Einsiedeln, Küssnacht and Pfäffikon form their own half-canton, Ausserschwyz (Outer Schwyz).",
     "Old Schwyz, Gersau and Wollerau stay with the old canton."
    ],
    "layers": [
     {
      "name": "Ausserschwyz",
      "kind": "other",
      "label": "Ausserschwyz: breakaway half-canton, 1832–1833",
      "sel": {
       "districts": [
        505,
        501,
        504
       ],
       "munis": [
        1322
       ]
      }
     },
     {
      "name": "Inner Schwyz",
      "kind": "core",
      "label": "Canton of Schwyz (inner part), 1832–1833",
      "sel": {
       "cantons": [
        "SZ"
       ]
      }
     }
    ]
   },
   {
    "year": 1833,
    "title": "Schwyz reunited",
    "text": [
     "In August 1833 federal troops occupy the canton. A new constitution in 1833 joins the two parts again and gives all districts equal rights.",
     "Since then, the borders have not changed. In 1848 Wollerau and Pfäffikon join to form the district of Höfe."
    ],
    "layers": [
     {
      "name": "Schwyz",
      "kind": "core",
      "label": "Canton of Schwyz today",
      "sel": {
       "cantons": [
        "SZ"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007385/",
   "https://hls-dhs-dss.ch/de/articles/007415/",
   "https://hls-dhs-dss.ch/de/articles/007644/"
  ],
  "notes": "Old Land Schwyz drawn as today's district of Schwyz without Arth; the Iberg and Alpthal area was long disputed with Einsiedeln abbey and is drawn as Schwyz. Reichenburg is drawn with the Einsiedeln abbey lands in 1440. Ausserschwyz is drawn with Freienbach (Pfäffikon) only; Feusisberg is drawn with Wollerau (about). Gaster and Uznach drawn as today's See-Gaster without Rapperswil-Jona. The shared Italian bailiwicks (Bellinzona, Riviera, Blenio) and Gams are not drawn because they do not touch Schwyz."
 },
 {
  "canton": "OW",
  "name": "Obwalden",
  "summary": "Obwalden, the upper half of Unterwalden, kept the same valley from the Middle Ages and gained the Engelberg valley in 1815.",
  "stops": [
   {
    "year": 1150,
    "title": "Lenzburg and the new abbey",
    "text": [
     "Around 1150 the counts of Lenzburg are strong in Obwalden. They build a castle above Sarnen and give much land to their monastery of Beromünster. Lucerne's monastery (part of Murbach abbey) owns farms in Sarnen, Giswil and Alpnach.",
     "In 1120 a monastery is founded at Engelberg. The abbey becomes the lord of the high valley."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "lord": "abbey",
      "label": "Engelberg: valley of the abbey (founded 1120)",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Obwalden: counts of Lenzburg with church lands (about; until 1173)",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     },
     {
      "name": "Nidwalden",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Nidwalden: many lords; Lenzburg probably among them (about)",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     }
    ]
   },
   {
    "year": 1257,
    "title": "Habsburg rule",
    "text": [
     "After 1173 the Habsburgs become the strongest lords in Unterwalden. In 1257 they give their lands there as fiefs to local followers.",
     "Around 1247 the people of Sarnen appear for the first time as a valley community. In 1291 the Habsburgs also buy Murbach abbey's rights in Obwalden."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "lord": "abbey",
      "label": "Engelberg: valley of the abbey",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Unterwalden",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Unterwalden: rights held mainly by the counts of Habsburg",
      "sel": {
       "cantons": [
        "OW",
        "NW"
       ]
      }
     }
    ]
   },
   {
    "year": 1291,
    "title": "Unterwalden in the first league",
    "text": [
     "Unterwalden has two halves: Obwalden (above the forest) around Sarnen, and Nidwalden (below the forest) around Stans. Unterwalden is one of the first members of the Swiss league, probably soon after 1291 and before 1309.",
     "The Engelberg valley belongs to the abbey of Engelberg. It is a separate small lordship."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "label": "Engelberg: valley of the abbey (Habsburg protectors since 1274)",
      "sel": {
       "munis": [
        1402
       ]
      },
      "lord": "abbey"
     },
     {
      "name": "Hergiswil",
      "kind": "other",
      "label": "Hergiswil: not yet part of Nidwalden (joined 1378)",
      "sel": {
       "munis": [
        1507
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Obwalden: upper half of Unterwalden",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     },
     {
      "name": "Nidwalden",
      "kind": "core",
      "label": "Nidwalden: lower half of Unterwalden",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "District of canton Waldstätten",
    "text": [
     "Obwalden is the first of the old forest cantons to accept the Helvetic constitution, on 1 April 1798.",
     "It becomes the district of Sarnen in the new canton of Waldstätten. Engelberg goes with Nidwalden into the district of Stans."
    ],
    "layers": [
     {
      "name": "Rest of Waldstätten",
      "kind": "other",
      "label": "Other parts of canton Waldstätten, with Engelberg",
      "sel": {
       "cantons": [
        "UR",
        "NW",
        "ZG"
       ],
       "districts": [
        506,
        502,
        504,
        501
       ],
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Obwalden: district Sarnen of canton Waldstätten",
      "sel": {
       "cantons": [
        "OW"
       ],
       "except": [
        1402
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Half-canton again",
    "text": [
     "In 1803 Obwalden is a half-canton again, as Unterwalden ob dem Wald. The split of Unterwalden into two halves is now official.",
     "Engelberg is given to Nidwalden."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "other",
      "label": "Engelberg: part of Nidwalden, 1803–1815",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Half-canton Obwalden",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Engelberg joins Obwalden",
    "text": [
     "In 1815 Nidwalden refuses the new Federal Treaty. Federal troops enter Nidwalden, and Engelberg is given to Obwalden.",
     "Engelberg is an exclave (land cut off from the rest of the canton) and becomes Obwalden's seventh commune. Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Canton of Obwalden today, with the Engelberg exclave",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007410/",
   "https://hls-dhs-dss.ch/de/articles/000741/",
   "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/"
  ],
  "notes": "Obwalden before 1815 drawn as today's canton without Engelberg. The Leventina (with Uri 1403–1422), Bellinzona (1419–1422) and the Val d'Ossola (1410–1422) were short-lived and are mentioned only here, not drawn."
 },
 {
  "canton": "NW",
  "name": "Nidwalden",
  "summary": "Nidwalden, the lower half of Unterwalden, added Hergiswil in 1378, held Engelberg from 1798 to 1815 and has kept the same borders since.",
  "stops": [
   {
    "year": 1150,
    "title": "Many lords and monasteries",
    "text": [
     "Around 1150 many nobles and monasteries hold land in Nidwalden, probably also the counts of Lenzburg. Lordship is weak, and local knights often act alone.",
     "In 1120 a monastery is founded at Engelberg. Over time it gets much land in Nidwalden, for example around Buochs."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "lord": "abbey",
      "label": "Engelberg: valley of the abbey (founded 1120)",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Nidwalden",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Nidwalden: many lords; Lenzburg probably among them (about; until 1173)",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Obwalden: counts of Lenzburg with church lands (about)",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     }
    ]
   },
   {
    "year": 1257,
    "title": "Habsburg, Engelberg and Murbach",
    "text": [
     "In the 1200s three lords count most in Nidwalden. The Habsburgs hold the right to judge and protect (Vogtei). Murbach-Lucerne owns a large manor in Stans. Engelberg abbey buys up land from 1260.",
     "In 1274 King Rudolf of Habsburg becomes protector of Engelberg abbey. In 1291 he buys the rights of Murbach-Lucerne."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "lord": "abbey",
      "label": "Engelberg: valley of the abbey",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Unterwalden",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Unterwalden: Vogtei of the counts of Habsburg, with abbey lands",
      "sel": {
       "cantons": [
        "OW",
        "NW"
       ]
      }
     }
    ]
   },
   {
    "year": 1291,
    "title": "Unterwalden in the first league",
    "text": [
     "Unterwalden has two halves: Nidwalden (below the forest) around Stans, and Obwalden around Sarnen. Unterwalden is one of the first members of the Swiss league, around 1291 or 1309.",
     "Hergiswil on Lake Lucerne belongs to other lords. The Engelberg valley belongs to its abbey."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "label": "Engelberg: valley of the abbey (Habsburg protectors since 1274)",
      "sel": {
       "munis": [
        1402
       ]
      },
      "lord": "abbey"
     },
     {
      "name": "Hergiswil",
      "kind": "other",
      "label": "Hergiswil: not yet part of Nidwalden",
      "sel": {
       "munis": [
        1507
       ]
      }
     },
     {
      "name": "Nidwalden",
      "kind": "core",
      "label": "Nidwalden: lower half of Unterwalden",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Obwalden: upper half of Unterwalden",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     }
    ]
   },
   {
    "year": 1378,
    "title": "Hergiswil joins",
    "text": [
     "In 1378 the people of Hergiswil buy the local rights from their lady for 700 guilders. Soon after, Hergiswil joins Nidwalden as its eleventh commune.",
     "From the early 1500s Nidwalden also rules Bellinzona, the Riviera and the Blenio valley, together with Uri and Schwyz, until 1798."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "lord",
      "label": "Engelberg: valley of the abbey (Habsburg protectors since 1274)",
      "sel": {
       "munis": [
        1402
       ]
      },
      "lord": "abbey"
     },
     {
      "name": "Nidwalden",
      "kind": "core",
      "label": "Nidwalden, with Hergiswil since 1378",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     },
     {
      "name": "Obwalden",
      "kind": "core",
      "label": "Obwalden: upper half of Unterwalden",
      "sel": {
       "cantons": [
        "OW"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "District Stans with Engelberg",
    "text": [
     "In 1798 Nidwalden becomes the district of Stans in the Helvetic canton of Waldstätten. Engelberg is added to this district.",
     "Nidwalden fights against the new order. French troops crush it in September 1798."
    ],
    "layers": [
     {
      "name": "District Stans",
      "kind": "core",
      "label": "District Stans (Nidwalden and Engelberg) of canton Waldstätten",
      "sel": {
       "cantons": [
        "NW"
       ],
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Rest of Waldstätten",
      "kind": "other",
      "label": "Other parts of canton Waldstätten",
      "sel": {
       "cantons": [
        "UR",
        "OW",
        "ZG"
       ],
       "districts": [
        506,
        502,
        504,
        501
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Half-canton with Engelberg",
    "text": [
     "In 1803 Nidwalden is a half-canton again, as Unterwalden nid dem Wald. It keeps Engelberg."
    ],
    "layers": [
     {
      "name": "Nidwalden",
      "kind": "core",
      "label": "Half-canton Nidwalden, with Engelberg (1803–1815)",
      "sel": {
       "cantons": [
        "NW"
       ],
       "munis": [
        1402
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Engelberg is lost",
    "text": [
     "In 1815 Nidwalden refuses the new Federal Treaty. Federal troops enter on 18 August. Nidwalden must join, and it loses Engelberg to Obwalden.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Engelberg",
      "kind": "other",
      "label": "Engelberg: part of Obwalden since 1815",
      "sel": {
       "munis": [
        1402
       ]
      }
     },
     {
      "name": "Nidwalden",
      "kind": "core",
      "label": "Canton of Nidwalden today",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
   "https://hls-dhs-dss.ch/de/articles/000753/",
   "https://hls-dhs-dss.ch/de/articles/000741/"
  ],
  "notes": "Nidwalden in 1291 drawn as today's canton without Hergiswil. Alpine pastures that Nidwalden took from Engelberg in 1435 are not drawn. The shared Italian bailiwicks are mentioned but not drawn, because they do not touch Nidwalden."
 },
 {
  "canton": "GL",
  "name": "Glarus",
  "summary": "Glarus joined the Swiss in 1352, ruled Gaster and Uznach with Schwyz and bought Werdenberg in 1517, but lost all its outer lands in 1798–1803.",
  "stops": [
   {
    "year": 1150,
    "title": "Säckingen abbey's valley",
    "text": [
     "In the 700s a noble family gives its land and rights in the Linth valley to the abbey of Säckingen on the Rhine. The abbey stays the main landowner of Glarus for centuries.",
     "In the 1000s and 1100s the counts of Lenzburg protect the abbey's valley and judge for the king. They also hold the high justice in Gaster."
    ],
    "layers": [
     {
      "name": "Gaster",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Gaster: high justice of the counts of Lenzburg",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Glarus: Säckingen abbey land, counts of Lenzburg as protectors (until 1173)",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   },
   {
    "year": 1200,
    "title": "Kyburg as governors",
    "text": [
     "After 1173 the king's son Otto of Burgundy holds the right to rule Glarus. After his death in 1200 it goes to the counts of Kyburg.",
     "The Kyburgs also hold the high justice in Gaster."
    ],
    "layers": [
     {
      "name": "Gaster",
      "kind": "lord",
      "lord": "kyburg",
      "label": "Gaster: high justice of the counts of Kyburg",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "lord",
      "lord": "kyburg",
      "label": "Glarus: Säckingen abbey land, counts of Kyburg as governors (1200–1264)",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   },
   {
    "year": 1288,
    "title": "Habsburg takes control",
    "text": [
     "The Kyburg line ends in 1264. Their rights in Glarus go to Rudolf of Habsburg.",
     "In 1288 the abbess of Säckingen also gives the castles, courts and the office of steward (Meieramt) to King Rudolf's sons. Now Habsburg holds all power in the valley. Gaster is Habsburg land too."
    ],
    "layers": [
     {
      "name": "Gaster",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Gaster: Habsburg land",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Glarus: Säckingen abbey land under Habsburg rule (1264/1288)",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   },
   {
    "year": 1352,
    "title": "Glarus joins the Swiss",
    "text": [
     "In 1352 Zurich and the forest cantons make a league with Glarus. At first Glarus is more a protected land than an equal member, and Habsburg soon gets it back.",
     "Glarus beats a Habsburg army at Näfels in 1388. In 1395 it buys the old rights of Säckingen abbey. In 1393 it is named as an equal partner of the league."
    ],
    "layers": [
     {
      "name": "Glarus",
      "kind": "core",
      "label": "Land of Glarus: linked to the Swiss since 1352",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Gaster",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Gaster: Habsburg land until 1438",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ]
      }
     }
    ]
   },
   {
    "year": 1469,
    "title": "Gaster and Uznach with Schwyz",
    "text": [
     "During the Old Zurich War, Glarus and Schwyz take Uznach as a pledge in 1437 and Gaster in 1438. Gaster becomes a shared bailiwick of the two cantons. They buy Uznach outright in 1469.",
     "Glarus also takes the whole Kerenzerberg above Lake Walen in 1460."
    ],
    "layers": [
     {
      "name": "Gaster and Uznach",
      "kind": "shared",
      "label": "Gaster (from 1438) and Uznach (from 1437/1469): shared with Schwyz",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        3338,
        3339,
        3341,
        3342
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "core",
      "label": "Land of Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   },
   {
    "year": 1517,
    "title": "Werdenberg and Sargans",
    "text": [
     "In 1517 Glarus buys the county of Werdenberg in the Rhine valley for 21,500 guilders. It rules Werdenberg alone as a bailiwick until 1798.",
     "Glarus and Schwyz also buy Gams in 1497. From about 1500, Glarus shares the rule of Sargans with six other cantons."
    ],
    "layers": [
     {
      "name": "Werdenberg",
      "kind": "subject",
      "label": "Werdenberg: ruled by Glarus alone, 1517–1798",
      "sel": {
       "munis": [
        3271,
        3273,
        3275
       ]
      }
     },
     {
      "name": "Gams",
      "kind": "shared",
      "label": "Gams: shared with Schwyz since 1497",
      "sel": {
       "munis": [
        3272
       ]
      }
     },
     {
      "name": "Gaster and Uznach",
      "kind": "shared",
      "label": "Gaster and Uznach: shared with Schwyz",
      "sel": {
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        3338,
        3339,
        3341,
        3342
       ]
      }
     },
     {
      "name": "Sargans",
      "kind": "shared",
      "label": "Sargans: shared with six other cantons",
      "sel": {
       "districts": [
        1725
       ],
       "munis": [
        3276
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "core",
      "label": "Land of Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Canton of Linth",
    "text": [
     "In spring 1798 the old cantons set their bailiwicks free. In May 1798 the French join Glarus with its old subject lands and nearby areas into the canton of Linth. Its capital is the town of Glarus."
    ],
    "layers": [
     {
      "name": "Glarus",
      "kind": "core",
      "label": "Glarus: part of the Helvetic canton Linth",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Rest of Linth",
      "kind": "other",
      "label": "Other parts of canton Linth (1798–1803)",
      "sel": {
       "districts": [
        1724,
        1725,
        1726,
        505,
        503
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Glarus alone",
    "text": [
     "In 1803 Glarus is a canton again, but without its old subject lands. Werdenberg, Sargans, Gaster and Uznach go to the new canton of St. Gallen.",
     "Since then, the outer borders have not changed. In 2011 the 25 communes merge into three."
    ],
    "layers": [
     {
      "name": "To St. Gallen",
      "kind": "other",
      "label": "Former Glarus lands: part of St. Gallen since 1803",
      "sel": {
       "munis": [
        3271,
        3272,
        3273,
        3275,
        3311,
        3312,
        3313,
        3315,
        3316,
        3338,
        3339,
        3341,
        3342
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "core",
      "label": "Canton of Glarus today",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007374/",
   "https://hls-dhs-dss.ch/de/articles/007646/",
   "https://hls-dhs-dss.ch/de/articles/007644/"
  ],
  "notes": "Glarus is drawn as today's whole canton from 1352, because today's commune of Glarus Nord cannot be split; Bilten, Niederurnen, Oberurnen and Filzbach came in the early 1400s and the Kerenzerberg in 1460. Werdenberg drawn as Buchs, Grabs and Sevelen; Wartau is drawn with Sargans. Gaster and Uznach drawn as today's See-Gaster without Rapperswil-Jona. Canton Linth drawn only roughly (Werdenberg, Sargans, See-Gaster, March, Höfe)."
 },
 {
  "canton": "ZG",
  "name": "Zug",
  "summary": "Zug joined the Swiss in 1352 as a town and a rural Amt; the town bought bailiwicks in the west and south, and since 1803 all communes are equal.",
  "stops": [
   {
    "year": 1150,
    "title": "Loose rule of distant lords",
    "text": [
     "Around 1150 the counts of Lenzburg hold loose count rights over the Zug area, but they own little land there. Fraumünster abbey of Zurich has a manor in Cham since at least 858.",
     "Monasteries from outside own much land: Einsiedeln in Ägeri, Kappel and Schänis in Baar, Muri and St. Blasien in the west. Local knights build castles."
    ],
    "layers": [
     {
      "name": "Cham",
      "kind": "lord",
      "lord": "abbey",
      "label": "Cham: manor of Fraumünster abbey, Zurich",
      "sel": {
       "munis": [
        1702
       ]
      }
     },
     {
      "name": "Zug area",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Zug area: count rights of Lenzburg (until 1173), many abbey lands",
      "sel": {
       "cantons": [
        "ZG"
       ]
      }
     }
    ]
   },
   {
    "year": 1273,
    "title": "Habsburg and Hünenberg",
    "text": [
     "After 1240 the counts of Kyburg try to rule Baar and the town of Zug. They may have founded the town. The Kyburg line ends in 1263/1264, and Rudolf of Habsburg takes much of their land.",
     "In 1273 Habsburg gets Zug (about). The town and the outer communities form the Habsburg Amt Zug. In the west, the lords of Hünenberg build their own lordship over Steinhausen, Cham, Hünenberg and Risch."
    ],
    "layers": [
     {
      "name": "Hünenberg lordship",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Hünenberg: Steinhausen, Cham, Hünenberg, Risch",
      "sel": {
       "munis": [
        1708,
        1702,
        1703,
        1707
       ]
      }
     },
     {
      "name": "Amt Zug",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Amt Zug: town and outer communities under Habsburg (from about 1273)",
      "sel": {
       "cantons": [
        "ZG"
       ]
      }
     }
    ]
   },
   {
    "year": 1352,
    "title": "Town and Amt join",
    "text": [
     "In 1352 Zurich besieges Zug. The town and the Amt (the rural communities of Baar, Ägeri and Menzingen) must join the Swiss league.",
     "Habsburg still claims Zug. From 1370 to 1404 Schwyz leads it in practice."
    ],
    "layers": [
     {
      "name": "Town of Zug",
      "kind": "core",
      "label": "Town of Zug: member since 1352",
      "sel": {
       "munis": [
        1711
       ]
      }
     },
     {
      "name": "Outer Amt",
      "kind": "core",
      "label": "Outer Amt: Baar, Ägeri, Menzingen with Neuheim",
      "sel": {
       "munis": [
        1701,
        1704,
        1705,
        1706,
        1709
       ]
      }
     },
     {
      "name": "Hünenberg lordship",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Hünenberg: Steinhausen, Cham, Hünenberg, Risch (about)",
      "sel": {
       "munis": [
        1708,
        1702,
        1703,
        1707
       ]
      }
     },
     {
      "name": "Walchwil",
      "kind": "lord",
      "lord": "noble",
      "label": "Walchwil: held by private lords until the town bought it in 1379",
      "sel": {
       "munis": [
        1710
       ]
      }
     }
    ]
   },
   {
    "year": 1500,
    "title": "The town's bailiwicks",
    "text": [
     "The town of Zug buys Walchwil in 1379. In the 15th century it buys more land: Cham, Steinhausen, Risch and Oberrüti. Hünenberg comes under the town by a citizenship treaty.",
     "These are bailiwicks (land ruled by a governor) of the town only. The rural Amt stays free and equal to the town.",
     "Zug also shares the rule of the Freie Ämter with other cantons."
    ],
    "layers": [
     {
      "name": "Freie Ämter",
      "kind": "shared",
      "label": "Freie Ämter: shared with other cantons",
      "sel": {
       "districts": [
        1908,
        1903
       ],
       "munis": [
        1021,
        1025,
        1030,
        1041
       ],
       "except": [
        4237
       ]
      }
     },
     {
      "name": "Town of Zug",
      "kind": "core",
      "label": "Town of Zug",
      "sel": {
       "munis": [
        1711
       ]
      }
     },
     {
      "name": "Town bailiwicks",
      "kind": "subject",
      "label": "Bailiwicks of the town of Zug (Walchwil from 1379, the rest in the 1400s)",
      "sel": {
       "munis": [
        1710,
        1702,
        1708,
        1703,
        1707,
        4237
       ]
      }
     },
     {
      "name": "Outer Amt",
      "kind": "core",
      "label": "Outer Amt: Baar, Ägeri, Menzingen with Neuheim",
      "sel": {
       "munis": [
        1701,
        1704,
        1705,
        1706,
        1709
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "District of canton Waldstätten",
    "text": [
     "In February 1798 the town gives up its bailiwicks. In May 1798 Zug becomes a district of the new canton of Waldstätten.",
     "From 1799 to 1801 the town of Zug is the capital of Waldstätten."
    ],
    "layers": [
     {
      "name": "Zug",
      "kind": "core",
      "label": "Zug: district of canton Waldstätten",
      "sel": {
       "cantons": [
        "ZG"
       ]
      }
     },
     {
      "name": "Rest of Waldstätten",
      "kind": "other",
      "label": "Other parts of canton Waldstätten",
      "sel": {
       "cantons": [
        "UR",
        "OW",
        "NW"
       ],
       "districts": [
        506,
        502,
        504,
        501
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Canton of equal communes",
    "text": [
     "In 1803 Zug is a canton again. The old bailiwicks are now equal communes. Oberrüti goes to the new canton of Aargau.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Oberrüti",
      "kind": "other",
      "label": "Oberrüti: part of Aargau since 1803",
      "sel": {
       "munis": [
        4237
       ]
      }
     },
     {
      "name": "Zug",
      "kind": "core",
      "label": "Canton of Zug today",
      "sel": {
       "cantons": [
        "ZG"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007373/",
   "https://hls-dhs-dss.ch/de/articles/000797/2020-05-05/"
  ],
  "notes": "The year 1500 stands for the end of the 15th century; the exact purchase years of Cham, Steinhausen, Risch and Oberrüti are not given here. Hünenberg had a special status (citizenship treaty) but is drawn as a bailiwick. The Freie Ämter drawn as today's districts of Muri and Bremgarten plus the Hitzkirch area (about)."
 },
 {
  "canton": "FR",
  "name": "Fribourg",
  "summary": "Fribourg was founded by the Zähringen in 1157, came under Kyburg, Habsburg and Savoy, then grew by buying and conquering Savoyard and Gruyère land until 1555, shared Murten, Schwarzenburg, Orbe-Echallens and Grandson with Bern until 1798, and got Murten alone in 1803.",
  "stops": [
   {
    "year": 1157,
    "title": "Zähringen found the town",
    "text": [
     "In 1157 Duke Berchtold IV of Zähringen founds the town of Fribourg in a bend of the Saane river. The Zähringen are the strongest lords in this part of the Empire.",
     "The land around belongs to many lords. The Bishop of Lausanne holds Bulle, Riaz and La Roche. The counts of Gruyère rule the upper Saane valley. Small noble families hold most villages. Murten and Kerzers are old estates of the Burgundian kings."
    ],
    "layers": [
     {
      "name": "Town of Fribourg",
      "kind": "lord",
      "lord": "zahringen",
      "label": "Town of Fribourg: founded 1157 by the dukes of Zähringen",
      "sel": {
       "munis": [
        2196
       ]
      }
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Bulle, Riaz, La Roche",
      "sel": {
       "munis": [
        2125,
        2148,
        2149
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Gruyère",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123
       ]
      }
     },
     {
      "name": "Royal estates",
      "kind": "lord",
      "lord": "empire",
      "label": "Murten and Kerzers: old estates of the Burgundian kings",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391
       ]
      }
     },
     {
      "name": "Local nobles",
      "kind": "lord",
      "lord": "noble",
      "label": "Small noble families (for example Glâne, Montagny, Oltigen)",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   },
   {
    "year": 1277,
    "title": "Habsburg buys Fribourg",
    "text": [
     "In 1218 the Zähringen family dies out. The counts of Kyburg inherit Fribourg. When they die out in 1263, the town puts itself under Count Rudolf of Habsburg.",
     "In 1277 Rudolf, now king, makes the Kyburg heirs sell the town to his sons. Fribourg stays under Habsburg until 1452.",
     "In the west, Peter II of Savoy takes Romont, Moudon and Payerne in the years after 1240. About 1255 Murten also comes under Savoy."
    ],
    "layers": [
     {
      "name": "Fribourg",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Town of Fribourg and its land: Habsburg town from 1277",
      "sel": {
       "districts": [
        1004,
        1006
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272
       ]
      }
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Bulle, Riaz, La Roche",
      "sel": {
       "munis": [
        2125,
        2148,
        2149
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Gruyère",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123,
        2138
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Savoy: Romont, Murten (about 1255) and other western land",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   },
   {
    "year": 1452,
    "title": "Under Savoy overlordship",
    "text": [
     "Fribourg now rules its own Old Countryside. In 1423 it buys Grasburg (Schwarzenburg) together with Bern.",
     "In 1452 Fribourg breaks with Austria (Habsburg) and accepts the Duke of Savoy as its overlord. In 1477 Savoy gives up its rights. Fribourg becomes a free imperial city and joins the Confederation in 1481."
    ],
    "layers": [
     {
      "name": "Shared with Bern",
      "kind": "shared",
      "label": "Grasburg (Schwarzenburg): bought with Bern in 1423",
      "sel": {
       "munis": [
        855,
        852,
        853
       ]
      }
     },
     {
      "name": "Fribourg",
      "kind": "core",
      "label": "Fribourg and its Old Countryside: under Savoy overlordship 1452–1477",
      "sel": {
       "districts": [
        1004,
        1006
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272
       ]
      }
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Bulle, Riaz, La Roche",
      "sel": {
       "munis": [
        2125,
        2148,
        2149
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Gruyère",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123,
        2138
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Duchy of Savoy",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   },
   {
    "year": 1481,
    "title": "Fribourg joins the Confederation",
    "text": [
     "In 1481 Fribourg becomes a member of the Confederation. Its land is the city and the 'Old Countryside' (Alte Landschaft) around it. It also owns Montagny, bought in 1478, and Illens and Plaffeien, taken in the Burgundian Wars.",
     "Fribourg rules some land together with Bern. These are common lordships (land ruled by two or more cantons, through a governor). Grasburg (Schwarzenburg) is shared since 1423. Murten, Grandson, Orbe and Echallens are shared since the Burgundian Wars of 1476.",
     "Most of the south and west of today's canton still belongs to Savoy, to the Bishop of Lausanne or to the Count of Gruyère."
    ],
    "layers": [
     {
      "name": "Shared with Bern",
      "kind": "shared",
      "label": "Shared with Bern: Murten, Schwarzenburg (Grasburg), Orbe, Echallens, Grandson",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391,
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     },
     {
      "name": "Montagny",
      "kind": "subject",
      "label": "Montagny: bought by Fribourg in 1478",
      "sel": {
       "munis": [
        2029
       ]
      }
     },
     {
      "name": "Fribourg",
      "kind": "core",
      "label": "Fribourg: the city and its Old Countryside",
      "sel": {
       "districts": [
        1004,
        1006,
        1005
       ]
      }
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Bulle, Riaz, La Roche",
      "sel": {
       "munis": [
        2125,
        2148,
        2149
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Gruyère",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123,
        2138
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Duchy of Savoy",
      "sel": {
       "districts": [
        1001,
        1002,
        1003,
        1007
       ]
      }
     }
    ]
   },
   {
    "year": 1537,
    "title": "Conquests in Savoyard Vaud",
    "text": [
     "Fribourg buys more lordships, for example Pont in 1483 and Jaun from 1502.",
     "In 1536 Bern conquers Vaud from Savoy. Fribourg takes the eastern part: Estavayer, Surpierre, Romont, Rue, Châtel-Saint-Denis, Attalens and Vaulruz. In 1537 it takes Bulle, La Roche and Riaz from the Bishop of Lausanne.",
     "Fribourg rules the new land as bailiwicks (land ruled by a governor sent from the city)."
    ],
    "layers": [
     {
      "name": "Shared with Bern",
      "kind": "shared",
      "label": "Shared with Bern: Murten, Schwarzenburg, Orbe, Echallens, Grandson",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391,
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     },
     {
      "name": "County of Gruyère",
      "kind": "lord",
      "label": "County of Gruyère: until 1555",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123
       ]
      },
      "lord": "noble"
     },
     {
      "name": "Bailiwicks of 1536–1537",
      "kind": "subject",
      "label": "Bailiwicks taken from Savoy and the Bishop of Lausanne in 1536–1537",
      "sel": {
       "districts": [
        1001,
        1002,
        1007,
        1003
       ],
       "except": [
        2029,
        2138
       ]
      }
     },
     {
      "name": "Fribourg",
      "kind": "core",
      "label": "Fribourg: city, Old Countryside and earlier lordships",
      "sel": {
       "districts": [
        1004,
        1006,
        1005
       ],
       "munis": [
        2029,
        2138
       ]
      }
     }
    ]
   },
   {
    "year": 1555,
    "title": "Gruyère divided with Bern",
    "text": [
     "In 1555 the last Count of Gruyère goes bankrupt. Fribourg and Bern divide his county.",
     "Fribourg gets the lower part, from Montbovon to La Tour-de-Trême. Bern gets the upper part (Saanen and the Pays-d'Enhaut).",
     "Now Fribourg has almost the size of today's canton. It has 19 bailiwicks until 1798."
    ],
    "layers": [
     {
      "name": "Shared with Bern",
      "kind": "shared",
      "label": "Shared with Bern: Murten, Schwarzenburg, Orbe, Echallens, Grandson",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391,
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     },
     {
      "name": "Gruyère",
      "kind": "subject",
      "label": "Gruyère: Fribourg bailiwick since 1555",
      "sel": {
       "munis": [
        2135,
        2121,
        2162,
        2134,
        2145,
        2124,
        2163,
        2128,
        2130,
        2123
       ]
      }
     },
     {
      "name": "Fribourg",
      "kind": "core",
      "label": "Fribourg state (city, Old Countryside and bailiwicks)",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Helvetic canton of Fribourg",
    "text": [
     "In 1798 the French army ends the old order. Fribourg becomes a canton of the Helvetic Republic. The bailiwicks are gone, and all people have the same rights.",
     "The common lordships are divided. Murten goes to Fribourg, Schwarzenburg to Bern, and Orbe, Echallens and Grandson to the canton of Léman (Vaud).",
     "Fribourg also gets the districts of Payerne and Avenches until 1802."
    ],
    "layers": [
     {
      "name": "Payerne and Avenches",
      "kind": "core",
      "label": "Payerne and Avenches: part of Fribourg 1798–1802",
      "sel": {
       "munis": [
        5822,
        5451,
        5458,
        5816
       ]
      }
     },
     {
      "name": "Murten",
      "kind": "core",
      "label": "Murten: now part of Fribourg",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391
       ]
      }
     },
     {
      "name": "Canton of Fribourg",
      "kind": "core",
      "label": "Helvetic canton of Fribourg",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     },
     {
      "name": "Former shared land",
      "kind": "other",
      "label": "No longer shared: Schwarzenburg to Bern; Orbe, Echallens, Grandson to Léman",
      "sel": {
       "munis": [
        855,
        852,
        853,
        5757,
        5518,
        5561
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Canton in its present form",
    "text": [
     "In 1802 Payerne and Avenches go back to Vaud. With the Act of Mediation of 1803, Fribourg is a canton again with the borders it has almost today.",
     "Murten stays with Fribourg. Clavaleyres, a small village near Murten, belongs to Fribourg from 1798 but goes back to Bern in 1807."
    ],
    "layers": [
     {
      "name": "Murten",
      "kind": "core",
      "label": "Murten: Fribourg since 1798/1803",
      "sel": {
       "munis": [
        2275,
        2250,
        2258,
        2261,
        2265,
        2271,
        2274,
        2276,
        2284,
        2391
       ]
      }
     },
     {
      "name": "Canton of Fribourg",
      "kind": "core",
      "label": "Canton of Fribourg",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   },
   {
    "year": 2022,
    "title": "Clavaleyres joins Fribourg",
    "text": [
     "In 2022 the Bernese village of Clavaleyres merges with Murten. With this, it changes from the canton of Bern to the canton of Fribourg.",
     "This is the last change to the borders of Fribourg."
    ],
    "layers": [
     {
      "name": "Murten with Clavaleyres",
      "kind": "core",
      "label": "Murten: includes Clavaleyres since 2022",
      "sel": {
       "munis": [
        2275
       ]
      }
     },
     {
      "name": "Canton of Fribourg",
      "kind": "core",
      "label": "Canton of Fribourg today",
      "sel": {
       "cantons": [
        "FR"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007379/2023-03-09/",
   "https://hls-dhs-dss.ch/de/articles/007395/",
   "https://hls-dhs-dss.ch/de/articles/008631/"
  ],
  "notes": "Old Countryside drawn as today's districts Sarine, Sense and the non-Murten part of Lac; parts of Sarine (e.g. Pont, bought 1483) were added slightly later. Murten common lordship drawn as Murten, Courgevaux, Greng, Meyriez, Muntelier, Kerzers, Fräschels, Ried, Mont-Vully and Galm; Orbe, Echallens and Grandson as the towns only. Jaun (from 1502) shown with the core in 1537. County of Gruyère drawn as Gruyères, Intyamon, Grandvillard, Le Pâquier, Broc, Charmey area; Bulle includes La Tour-de-Trême, which really came in 1555. Payerne and Avenches districts 1798–1802 drawn as Payerne, Avenches, Faoug and Corcelles-près-Payerne only. Clavaleyres cannot be drawn alone (now part of Murten). Early stops: lord areas are approximate; the 1157 'small noble families' layer simply covers the rest of today's canton. Habsburg Fribourg in 1277 drawn as the later Old Countryside, which the town only built up in the 14th–15th centuries."
 },
 {
  "canton": "SO",
  "name": "Solothurn",
  "summary": "The city of Solothurn bought and conquered land on both sides of the Jura between 1344 and 1532; since then its borders have hardly changed.",
  "stops": [
   {
    "year": 1200,
    "title": "Under the Zähringen",
    "text": [
     "About 1200 the dukes of Zähringen rule the town of Solothurn and the St. Ursus church (St. Ursen) as rectors (governors) for the king.",
     "In 1218 the last duke dies. Step by step Solothurn becomes a free imperial town."
    ],
    "layers": [
     {
      "name": "Solothurn",
      "kind": "lord",
      "lord": "zahringen",
      "label": "Solothurn: ruled by the dukes of Zähringen",
      "sel": {
       "munis": [
        2601
       ]
      }
     }
    ]
   },
   {
    "year": 1250,
    "title": "Many small lords",
    "text": [
     "About 1250 Solothurn is an imperial town, but it owns no land outside its walls. The land around it belongs to many noble families.",
     "The counts of Buchegg hold the Bucheggberg, and the Strassberg lords hold the area of Grenchen. The counts of Frohburg rule the Hauenstein passes and Olten. The lords of Bechburg and Falkenstein hold the Thal, and the counts of Thierstein hold the land north of the Passwang.",
     "Much of this land is a fief (land lent) of the bishop of Basel. From 1344 Solothurn buys these lordships one by one."
    ],
    "layers": [
     {
      "name": "Buchegg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Buchegg",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Strassberg",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Strassberg (later Neuenburg-Nidau): Grenchen area",
      "sel": {
       "munis": [
        2546,
        2556,
        2543
       ]
      }
     },
     {
      "name": "Frohburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Frohburg: Olten and the Hauenstein passes",
      "sel": {
       "districts": [
        1101,
        1108
       ]
      }
     },
     {
      "name": "Bechburg and Falkenstein",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Bechburg and Falkenstein (fiefs of the bishop of Basel)",
      "sel": {
       "districts": [
        1102
       ]
      }
     },
     {
      "name": "Gösgen",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Gösgen and Wartenfels",
      "sel": {
       "districts": [
        1105
       ]
      }
     },
     {
      "name": "Thierstein",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Thierstein and other nobles north of the Passwang",
      "sel": {
       "districts": [
        1110,
        1104
       ]
      }
     },
     {
      "name": "Solothurn",
      "kind": "lord",
      "lord": "empire",
      "label": "Solothurn: imperial town",
      "sel": {
       "munis": [
        2601
       ]
      }
     }
    ]
   },
   {
    "year": 1393,
    "title": "First land around the city",
    "text": [
     "In the 1300s the city of Solothurn starts to get land around it. In 1386, after the battle of Sempach, it takes Grenchen and Altreu together with Bern.",
     "In 1391 it buys the lordship of Buchegg (the Bucheggberg). From 1393 Grenchen and Altreu form the bailiwick of Lebern (land ruled by a governor from the city)."
    ],
    "layers": [
     {
      "name": "Lebern",
      "kind": "subject",
      "label": "Lebern (Grenchen, Altreu): Solothurn's since 1386/1393",
      "sel": {
       "munis": [
        2546,
        2556,
        2543
       ]
      }
     },
     {
      "name": "Buchegg",
      "kind": "subject",
      "label": "Buchegg: bought by Solothurn in 1391",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "City of Solothurn",
      "kind": "core",
      "label": "City of Solothurn",
      "sel": {
       "munis": [
        2601
       ]
      }
     }
    ]
   },
   {
    "year": 1481,
    "title": "Solothurn joins the Confederation",
    "text": [
     "In the 1400s Solothurn gets much more land south of the Jura: Falkenstein (1402), the Buchsgau with Bern (1426), Olten as a pledge (1426), Gösgen (1458), Bechburg (1463) and Kriegstetten (1466).",
     "In 1481 Solothurn becomes a member of the Confederation. Its land north of the Jura is still missing."
    ],
    "layers": [
     {
      "name": "Solothurn",
      "kind": "core",
      "label": "City-state of Solothurn and its bailiwicks",
      "sel": {
       "districts": [
        1101,
        1102,
        1103,
        1105,
        1106,
        1107,
        1108,
        1109
       ],
       "except": [
        2492
       ]
      }
     }
    ]
   },
   {
    "year": 1532,
    "title": "Land north of the Jura",
    "text": [
     "Between 1485 and 1527 Solothurn gets Dorneck, Seewen, Rotberg, Thierstein, Kienberg, Kleinlützel and Gilgenberg. This land lies north of the Jura, near Basel. Some parts are exclaves (pieces of land cut off from the rest).",
     "In 1532 Solothurn's rule over Olten and Dorneck becomes final. Then its territory is complete.",
     "Since then, the borders have hardly changed. Until 1798 Bern kept the high court in the Bucheggberg."
    ],
    "layers": [
     {
      "name": "North of the Jura",
      "kind": "subject",
      "label": "Dorneck and Thierstein: Solothurn's since 1485–1527",
      "sel": {
       "districts": [
        1104,
        1110
       ],
       "munis": [
        2492
       ]
      }
     },
     {
      "name": "Solothurn",
      "kind": "core",
      "label": "Canton of Solothurn",
      "sel": {
       "cantons": [
        "SO"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007386/"
  ],
  "notes": "1393: Lebern drawn as Grenchen, Selzach (Altreu) and Bettlach; Buchegg drawn as today's district Bucheggberg. 1481: drawn as today's districts south of the Jura without Kienberg; Olten was only a pledge and the Buchsgau was shared with Bern until 1463. Small later steps (Lüsslingen 1539, Wisen 1826) are not drawn. 1250: the noble lands are drawn by today's districts and are only a rough picture; the Wasseramt and Lebern outside Grenchen are not drawn."
 },
 {
  "canton": "BS",
  "name": "Basel-Stadt",
  "summary": "The city of Basel, long ruled by its bishop, built a territory in the Baselbiet from 1400, got Birseck in 1815, and in 1833 kept only the city and two villages when Basel-Landschaft split away.",
  "stops": [
   {
    "year": 1260,
    "title": "The bishop and the counts",
    "text": [
     "About 1260 the bishop of Basel rules the city of Basel. He also holds Birseck and the Laufen valley.",
     "The counts of Frohburg and their Homberg branch hold much of the land in the hills to the south-east: Waldenburg, Liestal and Homburg. Other nobles hold the rest."
    ],
    "layers": [
     {
      "name": "Bishop's land",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: Birseck and Laufen",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Frohburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Frohburg and Homberg, and other nobles",
      "sel": {
       "districts": [
        1303,
        1304,
        1305
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "lord",
      "lord": "bishop",
      "label": "City of Basel under its bishop",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1305,
    "title": "The bishop buys the hills",
    "text": [
     "The Frohburg counts sell Waldenburg (1265), Homburg (1303) and Liestal (1305) to the bishop of Basel.",
     "Between 1360 and 1390 the city buys many rights from the bishop, for example taxes and coins. In 1392 it buys Kleinbasel, the town on the other side of the Rhine. In 1400 it gets Liestal, Waldenburg and Homburg from the bishop as a pledge."
    ],
    "layers": [
     {
      "name": "Bishop's land",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: Liestal, Waldenburg, Homburg, Birseck, Laufen",
      "sel": {
       "districts": [
        1302,
        1303,
        1305
       ],
       "munis": [
        2852,
        2859,
        2843,
        2847,
        2867,
        2850,
        2845,
        2863,
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Other nobles",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Thierstein and other nobles",
      "sel": {
       "districts": [
        1304
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "lord",
      "lord": "bishop",
      "label": "City of Basel under its bishop",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1501,
    "title": "Basel joins the Confederation",
    "text": [
     "In 1400 the city of Basel gets Liestal, Waldenburg and Homburg as a pledge from the bishop. In 1461 it buys Farnsburg, and in 1470 it takes Muttenz and Münchenstein as a pledge.",
     "In 1501 Basel joins the Confederation. The Prince-Bishopric of Basel (land of the bishop) still holds Birseck and the Laufen valley."
    ],
    "layers": [
     {
      "name": "Prince-Bishopric",
      "kind": "other",
      "label": "Prince-Bishopric of Basel (not Swiss)",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Bailiwicks",
      "kind": "subject",
      "label": "Bailiwicks of the city: Liestal, Waldenburg, Homburg, Farnsburg, Münchenstein",
      "sel": {
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2769,
        2770,
        2766
       ],
       "except": [
        2831,
        2821,
        2883
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1534,
    "title": "Territory almost complete",
    "text": [
     "Between 1513 and 1534 Basel buys more villages: Bettingen, Ramstein, Riehen, Pratteln, Biel-Benken, Arisdorf, Binningen and Bottmingen.",
     "In 1640 Kleinhüningen follows. In 1798 the land becomes the Helvetic canton of Basel, with the same borders."
    ],
    "layers": [
     {
      "name": "Prince-Bishopric",
      "kind": "other",
      "label": "Prince-Bishopric of Basel (not Swiss)",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "subject",
      "label": "Countryside ruled by the city",
      "sel": {
       "cantons": [
        "BL",
        "BS"
       ],
       "except": [
        2701
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Basel gets Birseck",
    "text": [
     "In 1815 the Congress of Vienna gives Basel nine villages of the old Prince-Bishopric: the Birseck area with Arlesheim, Reinach, Aesch and Allschwil.",
     "The Laufen valley goes to Bern."
    ],
    "layers": [
     {
      "name": "Laufen",
      "kind": "other",
      "label": "Laufen valley: to Bern in 1815",
      "sel": {
       "districts": [
        1302
       ]
      }
     },
     {
      "name": "Birseck",
      "kind": "subject",
      "label": "Birseck: to Basel in 1815",
      "sel": {
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "subject",
      "label": "Countryside ruled by the city",
      "sel": {
       "cantons": [
        "BL",
        "BS"
       ],
       "except": [
        2701
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1833,
    "title": "Split into two half-cantons",
    "text": [
     "The people of the countryside want equal rights with the city. After fights in 1831–1833, the canton splits on 26 August 1833.",
     "Basel-Stadt keeps only the city and the villages Riehen, Bettingen and Kleinhüningen on the right bank of the Rhine. Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Basel-Stadt",
      "kind": "core",
      "label": "Basel-Stadt since 1833",
      "sel": {
       "cantons": [
        "BS"
       ]
      }
     },
     {
      "name": "Basel-Landschaft",
      "kind": "other",
      "label": "Basel-Landschaft: separate half-canton since 1833",
      "sel": {
       "cantons": [
        "BL"
       ],
       "exceptDistricts": [
        1302
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007387/",
   "https://hls-dhs-dss.ch/de/articles/007478/",
   "https://hls-dhs-dss.ch/de/articles/049333/"
  ],
  "notes": "Kleinbasel (1392) and Kleinhüningen (1640) are part of today's municipality of Basel and cannot be drawn alone. 1501: Birsfelden is drawn with Muttenz; Pratteln, Arisdorf and Bretzwil (Ramstein) are left out; Diegten and Eptingen (1482/1487) are drawn with Waldenburg. 1260 and 1305: the noble lands are drawn by today's districts Liestal, Sissach and Waldenburg; Homburg is drawn as the western villages of the Sissach district. Muttenz, Münchenstein and Pratteln belonged to other nobles and are drawn with them only roughly."
 },
 {
  "canton": "BL",
  "name": "Basel-Landschaft",
  "summary": "The Baselbiet passed from nobles and the bishop to the city of Basel from 1400, got Birseck in 1815, became its own half-canton in 1833 and got the Laufen valley in 1994.",
  "stops": [
   {
    "year": 1260,
    "title": "The bishop and the counts",
    "text": [
     "About 1260 the bishop of Basel rules the city of Basel. He also holds Birseck and the Laufen valley.",
     "The counts of Frohburg and their Homberg branch hold much of the land in the hills to the south-east: Waldenburg, Liestal and Homburg. Other nobles hold the rest."
    ],
    "layers": [
     {
      "name": "Bishop's land",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: Birseck and Laufen",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Frohburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Frohburg and Homberg, and other nobles",
      "sel": {
       "districts": [
        1303,
        1304,
        1305
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "lord",
      "lord": "bishop",
      "label": "City of Basel under its bishop",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1305,
    "title": "The bishop buys the hills",
    "text": [
     "The Frohburg counts sell Waldenburg (1265), Homburg (1303) and Liestal (1305) to the bishop of Basel.",
     "Between 1360 and 1390 the city buys many rights from the bishop, for example taxes and coins. In 1392 it buys Kleinbasel, the town on the other side of the Rhine. In 1400 it gets Liestal, Waldenburg and Homburg from the bishop as a pledge."
    ],
    "layers": [
     {
      "name": "Bishop's land",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: Liestal, Waldenburg, Homburg, Birseck, Laufen",
      "sel": {
       "districts": [
        1302,
        1303,
        1305
       ],
       "munis": [
        2852,
        2859,
        2843,
        2847,
        2867,
        2850,
        2845,
        2863,
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Other nobles",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Thierstein and other nobles",
      "sel": {
       "districts": [
        1304
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "lord",
      "lord": "bishop",
      "label": "City of Basel under its bishop",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1501,
    "title": "Countryside of the city of Basel",
    "text": [
     "In 1400 the city of Basel gets Liestal, Waldenburg and Homburg as a pledge from the bishop. In 1461 it buys Farnsburg, and in 1470 it takes Muttenz and Münchenstein as a pledge.",
     "In 1501 Basel joins the Confederation. The countryside is ruled by the city; its people have no vote. Birseck and the Laufen valley still belong to the Prince-Bishopric of Basel."
    ],
    "layers": [
     {
      "name": "Prince-Bishopric",
      "kind": "other",
      "label": "Prince-Bishopric of Basel (not Swiss)",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Bailiwicks",
      "kind": "subject",
      "label": "Bailiwicks of the city: Liestal, Waldenburg, Homburg, Farnsburg, Münchenstein",
      "sel": {
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2769,
        2770,
        2766
       ],
       "except": [
        2831,
        2821,
        2883
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1534,
    "title": "Territory almost complete",
    "text": [
     "Between 1513 and 1534 Basel buys more villages: Bettingen, Ramstein, Riehen, Pratteln, Biel-Benken, Arisdorf, Binningen and Bottmingen.",
     "In 1798 the city and the countryside become the Helvetic canton of Basel, with the same borders."
    ],
    "layers": [
     {
      "name": "Prince-Bishopric",
      "kind": "other",
      "label": "Prince-Bishopric of Basel (not Swiss)",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "subject",
      "label": "Countryside ruled by the city",
      "sel": {
       "cantons": [
        "BL",
        "BS"
       ],
       "except": [
        2701
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Birseck joins Basel",
    "text": [
     "In 1815 the Congress of Vienna gives Basel nine villages of the old Prince-Bishopric: the Birseck area with Arlesheim, Reinach, Aesch and Allschwil.",
     "The Laufen valley goes to Bern."
    ],
    "layers": [
     {
      "name": "Laufen",
      "kind": "other",
      "label": "Laufen valley: to Bern in 1815",
      "sel": {
       "districts": [
        1302
       ]
      }
     },
     {
      "name": "Birseck",
      "kind": "subject",
      "label": "Birseck: to Basel in 1815",
      "sel": {
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     },
     {
      "name": "Countryside",
      "kind": "subject",
      "label": "Countryside ruled by the city",
      "sel": {
       "cantons": [
        "BL",
        "BS"
       ],
       "except": [
        2701
       ]
      }
     },
     {
      "name": "City of Basel",
      "kind": "core",
      "label": "City of Basel",
      "sel": {
       "munis": [
        2701
       ]
      }
     }
    ]
   },
   {
    "year": 1833,
    "title": "A canton of its own",
    "text": [
     "The people of the countryside want equal rights with the city. After fights in 1831–1833, the canton of Basel splits on 26 August 1833.",
     "Basel-Landschaft becomes a half-canton with Liestal as its capital. It gets all the countryside left of the Rhine."
    ],
    "layers": [
     {
      "name": "Laufen",
      "kind": "other",
      "label": "Laufen valley: part of Bern",
      "sel": {
       "districts": [
        1302
       ]
      }
     },
     {
      "name": "Basel-Landschaft",
      "kind": "core",
      "label": "Basel-Landschaft since 1833",
      "sel": {
       "cantons": [
        "BL"
       ]
      }
     },
     {
      "name": "Basel-Stadt",
      "kind": "other",
      "label": "Basel-Stadt: the city, Riehen and Bettingen",
      "sel": {
       "cantons": [
        "BS"
       ]
      }
     }
    ]
   },
   {
    "year": 1994,
    "title": "The Laufen valley joins",
    "text": [
     "In 1979 the canton of Jura is made, and the Laufen district of Bern is cut off from the rest of Bern.",
     "In 1989 Laufen votes to join Basel-Landschaft. It moves on 1 January 1994."
    ],
    "layers": [
     {
      "name": "Laufen",
      "kind": "core",
      "label": "Laufen district: part of Basel-Landschaft since 1994",
      "sel": {
       "districts": [
        1302
       ]
      }
     },
     {
      "name": "Basel-Landschaft",
      "kind": "core",
      "label": "Basel-Landschaft",
      "sel": {
       "cantons": [
        "BL"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007387/",
   "https://hls-dhs-dss.ch/de/articles/049333/",
   "https://hls-dhs-dss.ch/de/articles/007556/"
  ],
  "notes": "1501: Birsfelden is drawn with Muttenz; Pratteln, Arisdorf and Bretzwil (Ramstein) are left out; Diegten and Eptingen (1482/1487) are drawn with Waldenburg. The stops before 1833 are the same as for Basel-Stadt, because it was one canton. 1260 and 1305: the noble lands are drawn by today's districts Liestal, Sissach and Waldenburg; Homburg is drawn as the western villages of the Sissach district. Muttenz, Münchenstein and Pratteln belonged to other nobles and are drawn with them only roughly."
 },
 {
  "canton": "SH",
  "name": "Schaffhausen",
  "summary": "The city of Schaffhausen built its land north of the Rhine bit by bit from the 1400s to 1723, and gained Stein am Rhein and nearby villages in 1798.",
  "stops": [
   {
    "year": 1092,
    "title": "Town of an abbey",
    "text": [
     "In 1049 Count Eberhard of Nellenburg founds the abbey of All Saints (Allerheiligen) at Schaffhausen. Between 1080 and 1092 his son gives the abbey the lordship over the town.",
     "So the abbey is the lord of the young town. The land around it belongs to many other lords."
    ],
    "layers": [
     {
      "name": "Schaffhausen",
      "kind": "lord",
      "lord": "abbey",
      "label": "Town ruled by the abbey of All Saints",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1218,
    "title": "An imperial town",
    "text": [
     "From 1197 to 1218 the dukes of Zähringen hold the bailiff rights over the town. After the Zähringen family dies out in 1218, the rights go back to the Empire.",
     "Schaffhausen is now a town directly under the Emperor. The citizens slowly take power from the abbey."
    ],
    "layers": [
     {
      "name": "Schaffhausen",
      "kind": "lord",
      "lord": "empire",
      "label": "Schaffhausen: imperial town from 1218",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1330,
    "title": "Pledged to Habsburg",
    "text": [
     "In 1330 the Emperor pledges (gives as security for a loan) the town to Habsburg. Until 1415 the town cannot build its own territory.",
     "Since 1302 the Bishop of Constance rules Neunkirch and Hallau in the Klettgau. In 1415 the town becomes free again, and later it buys land from these lords."
    ],
    "layers": [
     {
      "name": "Neunkirch and Hallau",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Constance: lordship of Neunkirch-Hallau since 1302",
      "sel": {
       "munis": [
        2904,
        2971,
        2972
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Schaffhausen: pledged to Habsburg 1330–1415",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1501,
    "title": "The city joins the Swiss",
    "text": [
     "In 1501 Schaffhausen becomes the twelfth member of the Confederation. The city has been free under the Emperor again since 1415.",
     "At this time it rules little land. It holds Thayngen since 1460, but Austria keeps the high court there."
    ],
    "layers": [
     {
      "name": "Thayngen",
      "kind": "subject",
      "label": "Thayngen: city bailiwick since 1460 (high court still Austrian)",
      "sel": {
       "munis": [
        2920
       ]
      }
     },
     {
      "name": "City of Schaffhausen",
      "kind": "core",
      "label": "City of Schaffhausen: member of the Confederation since 1501",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1530,
    "title": "Land from churches and the bishop",
    "text": [
     "Between 1520 and 1530 the city gets much land. Rüdlingen and Buchberg come in 1520. In 1524 the abbey of All Saints gives up Merishausen, Neuhausen and other places.",
     "In 1525 the city buys Neunkirch and Hallau from the Bishop of Constance. In 1529 the convent of Paradies sells Löhningen, Lohn, Büttenhardt and other villages. Schleitheim and Beggingen follow in 1530.",
     "In many villages the high court (the right to judge serious crimes) still belongs to German lords."
    ],
    "layers": [
     {
      "name": "Rüdlingen and Buchberg",
      "kind": "subject",
      "label": "Rüdlingen and Buchberg: Schaffhausen since 1520",
      "sel": {
       "munis": [
        2938,
        2933
       ]
      }
     },
     {
      "name": "Abbey lands",
      "kind": "subject",
      "label": "Merishausen and Neuhausen: from the abbey of All Saints, 1524",
      "sel": {
       "munis": [
        2936,
        2937
       ]
      }
     },
     {
      "name": "Neunkirch and Hallau",
      "kind": "subject",
      "label": "Neunkirch and Hallau: bought from the Bishop of Constance, 1525",
      "sel": {
       "munis": [
        2904,
        2971,
        2972
       ]
      }
     },
     {
      "name": "Paradies villages",
      "kind": "subject",
      "label": "Löhningen, Lohn, Büttenhardt: bought from the convent of Paradies, 1529",
      "sel": {
       "munis": [
        2903,
        2917,
        2914
       ]
      }
     },
     {
      "name": "Schleitheim",
      "kind": "subject",
      "label": "Schleitheim and Beggingen: Schaffhausen since 1530",
      "sel": {
       "munis": [
        2952,
        2951
       ]
      }
     },
     {
      "name": "Thayngen",
      "kind": "subject",
      "label": "Thayngen: city bailiwick since 1460",
      "sel": {
       "munis": [
        2920
       ]
      }
     },
     {
      "name": "City of Schaffhausen",
      "kind": "core",
      "label": "City of Schaffhausen",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1723,
    "title": "Full rule over the countryside",
    "text": [
     "In 1657 the city buys the high court in its Klettgau villages. In 1723 it buys the high court in the Reiat from Austria.",
     "Now the city fully rules its countryside. Stein am Rhein and Dörflingen nearby belong to Zurich. Later attempts to buy more land, such as Gailingen, fail."
    ],
    "layers": [
     {
      "name": "Ruled by Zurich",
      "kind": "other",
      "label": "Stein am Rhein, Hemishofen, Dörflingen: ruled by Zurich",
      "sel": {
       "munis": [
        2964,
        2962,
        2915
       ]
      }
     },
     {
      "name": "Schaffhausen countryside",
      "kind": "subject",
      "label": "Schaffhausen countryside: bailiwicks ruled by the city",
      "sel": {
       "cantons": [
        "SH"
       ],
       "except": [
        2939,
        2964,
        2962,
        2963,
        2915
       ]
      }
     },
     {
      "name": "City of Schaffhausen",
      "kind": "core",
      "label": "City of Schaffhausen",
      "sel": {
       "munis": [
        2939
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Stein am Rhein joins",
    "text": [
     "In 1798 the Helvetic Republic gives Stein am Rhein, Hemishofen and Ramsen to Schaffhausen. Zurich also gives Dörflingen in exchange for Ellikon am Rhein.",
     "From 1798 to 1800 the Diessenhofen area of Thurgau is also part of the canton."
    ],
    "layers": [
     {
      "name": "Diessenhofen",
      "kind": "other",
      "label": "Diessenhofen area: part of Schaffhausen 1798–1800, then back to Thurgau",
      "sel": {
       "munis": [
        4545,
        4536,
        4546
       ]
      }
     },
     {
      "name": "Gained 1798",
      "kind": "core",
      "label": "Stein am Rhein, Hemishofen, Ramsen, Dörflingen: part of Schaffhausen since 1798",
      "sel": {
       "munis": [
        2964,
        2962,
        2963,
        2915
       ]
      }
     },
     {
      "name": "Canton of Schaffhausen",
      "kind": "core",
      "label": "Canton of Schaffhausen",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     }
    ]
   },
   {
    "year": 1967,
    "title": "Today's borders",
    "text": [
     "In 1967 a treaty with Germany gives the small farm area of Verenahof to Schaffhausen. Büsingen stays a German enclave inside Swiss land.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Canton of Schaffhausen",
      "kind": "core",
      "label": "Canton of Schaffhausen",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007388/",
   "https://hls-dhs-dss.ch/de/articles/001280/",
   "https://hls-dhs-dss.ch/fr/articles/001276/",
   "https://hls-dhs-dss.ch/de/articles/001268/"
  ],
  "notes": "1501 shows only the city and Thayngen; the city's hospital and citizens also held smaller rights in other villages. In 1530 some villages are left blank because their date of purchase was not confirmed (e.g. Beringen, Siblingen, Stetten, Bargen, Gächlingen, Wilchingen, Trasadingen). The 1723 layer draws all of today's canton except the 1798 gains, so it may include a few places bought later. Diessenhofen area drawn as Diessenhofen, Basadingen-Schlattingen and Schlatt. Ramsen was Austrian until 1770, then under Zurich; it is left blank in 1723."
 },
 {
  "canton": "AR",
  "name": "Appenzell Ausserrhoden",
  "summary": "Ausserrhoden is the Protestant outer part of the land of Appenzell, which joined the Swiss in 1513 and split in two in 1597.",
  "stops": [
   {
    "year": 1300,
    "title": "Land of the abbot",
    "text": [
     "The valley of Appenzell belongs to the Abbey of St. Gallen. The name Appenzell means 'cell of the abbot'. The abbot's officials rule the farmers.",
     "In the Appenzell Wars (1401–1429) the people throw off the abbot's rule. Herisau and the Vorderland join their land in this time."
    ],
    "layers": [
     {
      "name": "Abbey lands",
      "kind": "lord",
      "lord": "abbey",
      "label": "Appenzell valley: ruled by the Abbey of St. Gallen (about 1300)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     }
    ]
   },
   {
    "year": 1513,
    "title": "Appenzell joins the Swiss",
    "text": [
     "The people of Appenzell free themselves from the Abbot of St. Gallen in the Appenzell Wars (from 1401). By 1429 their land includes Herisau and the Vorderland.",
     "Appenzell is an ally of the Swiss from 1411. In 1513 it becomes the thirteenth full member.",
     "Since 1500 Appenzell also shares the rule of the Rhine valley (Rheintal) with the other cantons."
    ],
    "layers": [
     {
      "name": "Rheintal",
      "kind": "shared",
      "label": "Rheintal: ruled together with other cantons since 1500",
      "sel": {
       "districts": [
        1723
       ]
      }
     },
     {
      "name": "Land of Appenzell",
      "kind": "core",
      "label": "Land of Appenzell: member of the Confederation since 1513",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     }
    ]
   },
   {
    "year": 1597,
    "title": "The land splits in two",
    "text": [
     "After the Reformation, the people disagree about religion. In 1597 the land splits into two half-cantons.",
     "The Protestant outer parts form Ausserrhoden: the Hinterland, the Mittelland and the Vorderland. Both halves keep a share in the rule of the Rheintal."
    ],
    "layers": [
     {
      "name": "Rheintal",
      "kind": "shared",
      "label": "Rheintal: ruled together with other cantons",
      "sel": {
       "districts": [
        1723
       ]
      }
     },
     {
      "name": "Innerrhoden",
      "kind": "other",
      "label": "Appenzell Innerrhoden: the Catholic half since 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Ausserrhoden",
      "kind": "core",
      "label": "Appenzell Ausserrhoden: half-canton since 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of the canton of Säntis",
    "text": [
     "In 1798 the Helvetic Republic joins both Appenzells with the lands of the Abbey of St. Gallen, the town of St. Gallen, the Rheintal and the lower Toggenburg. Together they form the canton of Säntis."
    ],
    "layers": [
     {
      "name": "Canton of Säntis",
      "kind": "core",
      "label": "Canton of Säntis (1798–1803)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ],
       "districts": [
        1721,
        1722,
        1723,
        1727,
        1728
       ],
       "except": [
        3360,
        3359,
        3352
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Ausserrhoden restored",
    "text": [
     "In 1803 the Act of Mediation restores Ausserrhoden as a half-canton. The Rheintal goes to the new canton of St. Gallen.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Innerrhoden",
      "kind": "other",
      "label": "Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Ausserrhoden",
      "kind": "core",
      "label": "Appenzell Ausserrhoden",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007389/",
   "https://hls-dhs-dss.ch/de/articles/008634/",
   "https://www.ai.ch/land-und-leute/geschichte/1597-die-landteilung"
  ],
  "notes": "In 1513 the land of Appenzell is drawn as today's two half-cantons together. Lower Toggenburg in Säntis drawn as Toggenburg without Nesslau, Wildhaus-Alt St. Johann and Ebnat-Kappel (approximate line)."
 },
 {
  "canton": "AI",
  "name": "Appenzell Innerrhoden",
  "summary": "Innerrhoden is the Catholic inner part of the land of Appenzell, which joined the Swiss in 1513; it became a half-canton in 1597, with Oberegg as a separate piece.",
  "stops": [
   {
    "year": 1300,
    "title": "Land of the abbot",
    "text": [
     "The valley of Appenzell belongs to the Abbey of St. Gallen. The name Appenzell means 'cell of the abbot'. The abbot's officials rule the farmers.",
     "In the Appenzell Wars (1401–1429) the people throw off the abbot's rule. Herisau and the Vorderland join their land in this time."
    ],
    "layers": [
     {
      "name": "Abbey lands",
      "kind": "lord",
      "lord": "abbey",
      "label": "Appenzell valley: ruled by the Abbey of St. Gallen (about 1300)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     }
    ]
   },
   {
    "year": 1513,
    "title": "Appenzell joins the Swiss",
    "text": [
     "The people of Appenzell free themselves from the Abbot of St. Gallen in the Appenzell Wars (from 1401).",
     "Appenzell is an ally of the Swiss from 1411. In 1513 it becomes the thirteenth full member. Since 1500 it shares the rule of the Rheintal."
    ],
    "layers": [
     {
      "name": "Rheintal",
      "kind": "shared",
      "label": "Rheintal: ruled together with other cantons since 1500",
      "sel": {
       "districts": [
        1723
       ]
      }
     },
     {
      "name": "Land of Appenzell",
      "kind": "core",
      "label": "Land of Appenzell: member of the Confederation since 1513",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     }
    ]
   },
   {
    "year": 1597,
    "title": "The land splits in two",
    "text": [
     "In 1597 the land splits into two half-cantons because of religion. The Catholic inner part around the village of Appenzell forms Innerrhoden.",
     "The Catholic villages of Hirschberg and Oberegg near the Rhine valley also join Innerrhoden. So Oberegg is a separate piece of the canton (an exclave)."
    ],
    "layers": [
     {
      "name": "Rheintal",
      "kind": "shared",
      "label": "Rheintal: ruled together with other cantons",
      "sel": {
       "districts": [
        1723
       ]
      }
     },
     {
      "name": "Ausserrhoden",
      "kind": "other",
      "label": "Appenzell Ausserrhoden: the Protestant half since 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Innerrhoden",
      "kind": "core",
      "label": "Appenzell Innerrhoden: half-canton since 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of the canton of Säntis",
    "text": [
     "In 1798 the Helvetic Republic joins both Appenzells with the lands of the Abbey of St. Gallen, the town of St. Gallen, the Rheintal and the lower Toggenburg. Together they form the canton of Säntis."
    ],
    "layers": [
     {
      "name": "Canton of Säntis",
      "kind": "core",
      "label": "Canton of Säntis (1798–1803)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ],
       "districts": [
        1721,
        1722,
        1723,
        1727,
        1728
       ],
       "except": [
        3360,
        3359,
        3352
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Innerrhoden restored",
    "text": [
     "In 1803 the Act of Mediation restores Innerrhoden as a half-canton, with Oberegg.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Ausserrhoden",
      "kind": "other",
      "label": "Appenzell Ausserrhoden",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Innerrhoden",
      "kind": "core",
      "label": "Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007389/",
   "https://hls-dhs-dss.ch/de/articles/001318/",
   "https://hls-dhs-dss.ch/de/articles/008634/",
   "https://www.ai.ch/land-und-leute/geschichte/1597-die-landteilung"
  ],
  "notes": "In 1513 the land of Appenzell is drawn as today's two half-cantons together. Lower Toggenburg in Säntis drawn as Toggenburg without Nesslau, Wildhaus-Alt St. Johann and Ebnat-Kappel (approximate line)."
 },
 {
  "canton": "SG",
  "name": "St. Gallen",
  "summary": "St. Gallen was made in 1803 from the abbey's lands, the town of St. Gallen and lordships ruled by other cantons; its borders have not changed since.",
  "stops": [
   {
    "year": 1400,
    "title": "Abbot, town and counts",
    "text": [
     "About 1400 the Abbot of St. Gallen rules the old abbey lands around St. Gallen, Rorschach and Wil. The town of St. Gallen is becoming free from the abbot.",
     "The counts of Toggenburg rule the Toggenburg until they die out in 1436. Rapperswil belongs to Habsburg. Other parts belong to many noble families.",
     "Later the abbot buys the Toggenburg (1468), and Swiss cantons take the other lordships one by one."
    ],
    "layers": [
     {
      "name": "Town of St. Gallen",
      "kind": "lord",
      "lord": "empire",
      "label": "Town of St. Gallen: imperial town, freeing itself from the abbot",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Abbey lands",
      "kind": "lord",
      "lord": "abbey",
      "label": "Abbey of St. Gallen: old abbey lands",
      "sel": {
       "districts": [
        1721,
        1722,
        1728
       ]
      }
     },
     {
      "name": "Toggenburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Toggenburg (until 1436)",
      "sel": {
       "districts": [
        1727
       ]
      }
     },
     {
      "name": "Rapperswil",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Rapperswil: Habsburg town",
      "sel": {
       "munis": [
        3340
       ]
      }
     }
    ]
   },
   {
    "year": 1797,
    "title": "Many lords before 1798",
    "text": [
     "Before 1798 there is no canton of St. Gallen. The Prince-Abbot of St. Gallen rules the old abbey lands and, since 1468, the Toggenburg. The town of St. Gallen is a small free city-state. Both are allies of the Swiss, but not full members.",
     "Other lands are bailiwicks (lands ruled by a governor) of Swiss cantons. Several cantons rule the Rheintal and Sargans together. Glarus rules Werdenberg, Zurich rules Sax, and Schwyz and Glarus rule Gaster, Uznach and Gams."
    ],
    "layers": [
     {
      "name": "Town of St. Gallen",
      "kind": "lord",
      "label": "Town of St. Gallen: free imperial city, ally of the Swiss (not a member)",
      "sel": {
       "munis": [
        3203
       ]
      },
      "lord": "empire"
     },
     {
      "name": "Abbey lands",
      "kind": "lord",
      "label": "Prince-Abbey of St. Gallen: old abbey lands, ally of the Swiss (not a member)",
      "sel": {
       "districts": [
        1721,
        1722,
        1728
       ],
       "except": [
        3203
       ]
      },
      "lord": "abbey"
     },
     {
      "name": "Toggenburg",
      "kind": "lord",
      "label": "Toggenburg: ruled by the Abbey of St. Gallen since 1468",
      "sel": {
       "districts": [
        1727
       ]
      },
      "lord": "abbey"
     },
     {
      "name": "Rheintal",
      "kind": "shared",
      "label": "Rheintal: common lordship of several cantons and Appenzell",
      "sel": {
       "districts": [
        1723
       ]
      }
     },
     {
      "name": "Sax",
      "kind": "other",
      "label": "Sax-Forstegg: ruled by Zurich since 1615",
      "sel": {
       "munis": [
        3274
       ]
      }
     },
     {
      "name": "Sargans",
      "kind": "shared",
      "label": "Sargans: common lordship of several cantons since 1483",
      "sel": {
       "districts": [
        1725
       ],
       "munis": [
        3276
       ]
      }
     },
     {
      "name": "Gams",
      "kind": "other",
      "label": "Gams: ruled by Schwyz and Glarus",
      "sel": {
       "munis": [
        3272
       ]
      }
     },
     {
      "name": "Werdenberg",
      "kind": "other",
      "label": "Werdenberg: ruled by Glarus since 1517",
      "sel": {
       "districts": [
        1724
       ]
      }
     },
     {
      "name": "Rapperswil",
      "kind": "other",
      "label": "Rapperswil: town under the protection of other cantons",
      "sel": {
       "munis": [
        3340
       ]
      }
     },
     {
      "name": "Gaster and Uznach",
      "kind": "other",
      "label": "Gaster and Uznach: ruled by Schwyz and Glarus",
      "sel": {
       "districts": [
        1726
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Cantons of Säntis and Linth",
    "text": [
     "In 1798 the Helvetic Republic ends the rule of the abbot and of the old cantons. It divides the land between two new cantons.",
     "The canton of Säntis has the abbey lands, the town, the Rheintal, the lower Toggenburg and both Appenzells. The canton of Linth has Glarus, Werdenberg, Sax, Sargans, Gaster, Uznach, Rapperswil and the upper Toggenburg."
    ],
    "layers": [
     {
      "name": "Canton of Linth",
      "kind": "core",
      "label": "Canton of Linth (1798–1803), with Glarus",
      "sel": {
       "districts": [
        1724,
        1725,
        1726
       ],
       "munis": [
        3360,
        3359,
        3352
       ]
      }
     },
     {
      "name": "Canton of Säntis",
      "kind": "core",
      "label": "Canton of Säntis (1798–1803), with both Appenzells",
      "sel": {
       "districts": [
        1721,
        1722,
        1723,
        1727,
        1728
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "A new canton",
    "text": [
     "In 1803 the Act of Mediation creates the canton of St. Gallen. It joins the abbey lands, the town and the former bailiwicks. Appenzell and Glarus become separate cantons again.",
     "The abbey is closed in 1805. Since 1803, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Canton of St. Gallen",
      "kind": "core",
      "label": "Canton of St. Gallen",
      "sel": {
       "cantons": [
        "SG"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/008634/",
   "https://hls-dhs-dss.ch/de/articles/001407/",
   "https://hls-dhs-dss.ch/de/articles/007389/"
  ],
  "notes": "In 1797 the town and the abbey are drawn as 'lord' layers: they were allies (zugewandte Orte), not members. In 1400 the Rheintal, Sargans, Werdenberg, Gaster and Uznach are left blank (many changing lords). Abbey lands = Wahlkreise St. Gallen (without the town), Rorschach and Wil; Toggenburg = Wahlkreis Toggenburg; Sargans = Sarganserland + Wartau; Werdenberg = Wahlkreis Werdenberg without Sennwald (Sax), Wartau and Gams; Gaster/Uznach = See-Gaster without Rapperswil-Jona. The line between lower and upper Toggenburg in 1798 is approximate (upper = Nesslau, Wildhaus-Alt St. Johann, Ebnat-Kappel). Glarus, March and Höfe (also in Linth) are not drawn."
 },
 {
  "canton": "GR",
  "name": "Graubünden",
  "summary": "Three free leagues in the Alps joined into one state, ruled the Valtellina until 1797, and became the canton of Graubünden in 1803, with Tarasp in 1803 and Rhäzüns in 1819.",
  "stops": [
   {
    "year": 960,
    "title": "Churrätia in the Empire",
    "text": [
     "The land is Churrätia (Rhaetia around Chur), a part of the Empire. Counts rule it for the king, and from the 10th century it belongs to the Duchy of Swabia.",
     "The Bishop of Chur is the strongest lord. In 960 Emperor Otto I confirms to him the royal estate in Chur and the county rights in the Bergell valley. He already has Zizers since 955.",
     "The abbey of Disentis owns much land in the upper Vorderrhein valley."
    ],
    "layers": [
     {
      "name": "Bishop of Chur",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Chur: Chur, Zizers and the Bergell (about)",
      "sel": {
       "munis": [
        3901,
        3947,
        3792
       ]
      }
     },
     {
      "name": "Abbey of Disentis",
      "kind": "lord",
      "lord": "abbey",
      "label": "Abbey of Disentis: land in the upper Vorderrhein valley (about)",
      "sel": {
       "munis": [
        3982,
        3986,
        3983,
        3985,
        3987,
        3981
       ]
      }
     },
     {
      "name": "Churrätia",
      "kind": "lord",
      "lord": "empire",
      "label": "Churrätia: imperial land ruled by counts for the king (about; the Misox and Poschiavo looked south to Como)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     }
    ]
   },
   {
    "year": 1365,
    "title": "Many lords, one bishop",
    "text": [
     "By about 1365 many lords share the land. The Bishop of Chur rules Chur, the Four Villages, the Engadine, the Bergell, the Oberhalbstein and part of the Domleschg. Since 1137–1139 he has bought much of the Upper Engadine.",
     "The barons of Vaz die out. In 1338 the Counts of Toggenburg get most of their land (Davos, Prättigau, Belfort, Churwalden). They also buy Maienfeld (1355–1359) and the Schanfigg (1363). The Counts of Werdenberg-Sargans get Schams, Rheinwald, Safien and the Heinzenberg.",
     "The abbey of Disentis rules the Cadi (upper Vorderrhein). The Sax-Misox family rules the Misox. Small noble families (Rhäzüns, Belmont) hold the land around Rhäzüns, Ems and Flims. Poschiavo joins the bishop only in 1408. Later, the subjects of these lords form the three leagues."
    ],
    "layers": [
     {
      "name": "Abbey of Disentis",
      "kind": "lord",
      "lord": "abbey",
      "label": "Abbey of Disentis: the Cadi",
      "sel": {
       "munis": [
        3982,
        3986,
        3983,
        3985,
        3987,
        3981
       ]
      }
     },
     {
      "name": "Sax-Misox",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Sax-Misox: Misox and Calanca",
      "sel": {
       "districts": [
        1847
       ]
      }
     },
     {
      "name": "Rhäzüns and Belmont",
      "kind": "lord",
      "lord": "noble",
      "label": "Barons of Rhäzüns and of Belmont: Rhäzüns, Bonaduz, Ems, Flims, Obersaxen and parts of the Gruob and Lugnez (about)",
      "sel": {
       "munis": [
        3723,
        3721,
        3722,
        3732,
        3988,
        3619,
        3618,
        3603,
        3575,
        3572,
        3581,
        3582,
        3731,
        3733,
        3734
       ]
      }
     },
     {
      "name": "Werdenberg-Sargans",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Werdenberg-Sargans: Schams, Rheinwald, Safien, Heinzenberg, Obervaz, Ortenstein (about)",
      "sel": {
       "munis": [
        3701,
        3713,
        3715,
        3714,
        3695,
        3712,
        3711,
        3672,
        3661,
        3662,
        3663,
        3668,
        3669,
        3670,
        3673,
        3506
       ]
      }
     },
     {
      "name": "Toggenburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Toggenburg (heirs of Vaz): Davos, Prättigau, Schanfigg, Churwalden, Belfort, Maienfeld (the Matsch hold parts of outer Prättigau)",
      "sel": {
       "districts": [
        1849
       ],
       "munis": [
        3921,
        3911,
        3513,
        3514,
        3542,
        3953,
        3951,
        3952,
        3954
       ]
      }
     },
     {
      "name": "Poschiavo",
      "kind": "lord",
      "lord": "milan",
      "label": "Poschiavo and Brusio: under Como and Milan (Poschiavo joins the bishop in 1408; about)",
      "sel": {
       "districts": [
        1842
       ]
      }
     },
     {
      "name": "Bishop of Chur",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Chur: Chur, Four Villages, Engadine, Bergell, Oberhalbstein, Bergün, Avers, Fürstenau",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     }
    ]
   },
   {
    "year": 1436,
    "title": "Three leagues in the mountains",
    "text": [
     "Valley communities in the Rhaetian Alps make alliances to keep peace and protect their rights against the lords.",
     "The League of God's House (around the Bishop of Chur and the city of Chur) forms in 1367. The Grey League (Vorderrhein and Hinterrhein valleys) forms in 1395 and is renewed in 1424. The League of the Ten Jurisdictions forms in Davos in 1436, after the last Count of Toggenburg dies.",
     "From about 1450 the three leagues act more and more together. The Misox valley is not yet a member."
    ],
    "layers": [
     {
      "name": "Misox",
      "kind": "lord",
      "lord": "noble",
      "label": "Misox and Calanca: lords of Sax-Misox, not yet in the Grey League (joined 1480 and 1496)",
      "sel": {
       "districts": [
        1847
       ]
      }
     },
     {
      "name": "League of the Ten Jurisdictions",
      "kind": "core",
      "label": "League of the Ten Jurisdictions (founded 1436): Prättigau, Davos, Schanfigg, Churwalden, Belfort, Maienfeld",
      "sel": {
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3921,
        3911,
        3513,
        3514,
        3953,
        3951,
        3952,
        3954
       ]
      }
     },
     {
      "name": "Grey League",
      "kind": "core",
      "label": "Grey League (1395, renewed 1424): Surselva, Hinterrhein valleys, Imboden",
      "sel": {
       "districts": [
        1850,
        1847,
        1851
       ],
       "munis": [
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ],
       "except": [
        3681,
        3673,
        3633,
        3638,
        3640,
        3637
       ]
      }
     },
     {
      "name": "League of God's House",
      "kind": "core",
      "label": "League of God's House (1367): Chur, the Engadine and other valleys of the bishop",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     }
    ]
   },
   {
    "year": 1499,
    "title": "Allied with the Swiss",
    "text": [
     "The Misox joins the Grey League (Mesocco and Soazza in 1480, the whole valley in 1496).",
     "The Grey League makes an alliance with the Swiss Confederation in 1497, the League of God's House in 1498. They become 'associates' (allies, not full members) of the Swiss.",
     "In 1499 the leagues and the Swiss fight Austria in the Swabian War and win at Calven. Austria still holds the lordship of Rhäzüns (from 1497), Tarasp in the Lower Engadine (from 1464), and lordship rights in most of the Ten Jurisdictions (bought in the 1470s)."
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Lordship of Rhäzüns: Austrian since 1497, but its people sit in the Grey League",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      }
     },
     {
      "name": "League of the Ten Jurisdictions",
      "kind": "core",
      "label": "League of the Ten Jurisdictions: most courts under Austrian lords",
      "sel": {
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3921,
        3911,
        3513,
        3514,
        3953,
        3951,
        3952,
        3954
       ]
      }
     },
     {
      "name": "Grey League",
      "kind": "core",
      "label": "Grey League: allied with the Swiss since 1497, with the Misox since 1496",
      "sel": {
       "districts": [
        1850,
        1847,
        1851
       ],
       "munis": [
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ],
       "except": [
        3681,
        3673,
        3633,
        3638,
        3640,
        3637
       ]
      }
     },
     {
      "name": "League of God's House",
      "kind": "core",
      "label": "League of God's House: allied with the Swiss since 1498 (Tarasp, now part of Scuol, is Austrian)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     }
    ]
   },
   {
    "year": 1524,
    "title": "Free State of the Three Leagues",
    "text": [
     "In 1509 the three leagues buy the lordship of Maienfeld. It becomes a bailiwick (land ruled by a governor) of the leagues, but its people stay members of the Ten Jurisdictions.",
     "In 1512 the leagues conquer the Valtellina, Chiavenna and Bormio, south of the Alps in today's Italy. They rule these lands as subjects until 1797. The map cannot show them.",
     "On 23 September 1524 the three leagues give themselves a common constitution (the Bundesbrief). They are now one republic, the Free State of the Three Leagues. In 1649 and 1652 the Ten Jurisdictions buy most of the Austrian rights."
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Lordship of Rhäzüns: Austrian",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      }
     },
     {
      "name": "Bündner Herrschaft",
      "kind": "subject",
      "label": "Lordship of Maienfeld: bailiwick of the Three Leagues since 1509",
      "sel": {
       "munis": [
        3953,
        3951,
        3952,
        3954
       ]
      }
     },
     {
      "name": "League of the Ten Jurisdictions",
      "kind": "core",
      "label": "League of the Ten Jurisdictions",
      "sel": {
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3921,
        3911,
        3513,
        3514,
        3953,
        3951,
        3952,
        3954
       ]
      }
     },
     {
      "name": "Grey League",
      "kind": "core",
      "label": "Grey League",
      "sel": {
       "districts": [
        1850,
        1847,
        1851
       ],
       "munis": [
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ],
       "except": [
        3681,
        3673,
        3633,
        3638,
        3640,
        3637
       ]
      }
     },
     {
      "name": "League of God's House",
      "kind": "core",
      "label": "League of God's House (Tarasp, now part of Scuol, is Austrian)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     }
    ]
   },
   {
    "year": 1799,
    "title": "Canton Rätien in the Helvetic Republic",
    "text": [
     "In 1797 the Valtellina, Chiavenna and Bormio leave and join the Cisalpine Republic, a state made by France in northern Italy. The leagues lose all their land south of the Alps.",
     "In 1799 French troops occupy the land. From 1799 to 1803 it is the canton of Rätien in the Helvetic Republic (the central state made by France in Switzerland). The leagues stop working as a government."
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Lordship of Rhäzüns: still claimed by Austria",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      }
     },
     {
      "name": "Rätien",
      "kind": "core",
      "label": "Canton Rätien of the Helvetic Republic (1799–1803)",
      "sel": {
       "cantons": [
        "GR"
       ],
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Canton of Graubünden",
    "text": [
     "In 1803 the Act of Mediation makes Graubünden a full canton of the Swiss Confederation.",
     "In the same year the Austrian lordship of Tarasp comes to Graubünden. Tarasp is now part of the municipality of Scuol, so the map cannot show it alone.",
     "Austria still keeps the lordship of Rhäzüns."
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Lordship of Rhäzüns: still Austrian",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "core",
      "label": "Canton of Graubünden (since 1803), with Tarasp",
      "sel": {
       "cantons": [
        "GR"
       ],
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ]
      }
     }
    ]
   },
   {
    "year": 1819,
    "title": "Rhäzüns joins, borders fixed",
    "text": [
     "In 1819 Austria gives up the lordship of Rhäzüns, and it becomes part of Graubünden.",
     "Since then, the borders of the canton have not changed."
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "core",
      "label": "Rhäzüns: part of Graubünden since 1819",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "core",
      "label": "Canton of Graubünden",
      "sel": {
       "cantons": [
        "GR"
       ],
       "munis": [
        3851,
        3861,
        3862,
        3863,
        3871,
        3881,
        3882,
        3891,
        3961,
        3962,
        3972,
        3721,
        3722,
        3723,
        3731,
        3732,
        3733,
        3734
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007391/",
   "https://hls-dhs-dss.ch/de/articles/017154/",
   "https://hls-dhs-dss.ch/de/articles/017158/",
   "https://hls-dhs-dss.ch/de/articles/017163/",
   "https://hls-dhs-dss.ch/de/articles/026840/",
   "https://hls-dhs-dss.ch/de/articles/015287/",
   "https://hls-dhs-dss.ch/de/articles/001524/",
   "https://hls-dhs-dss.ch/de/articles/001513/",
   "https://hls-dhs-dss.ch/de/articles/008080/",
   "https://hls-dhs-dss.ch/de/articles/008066/",
   "https://hls-dhs-dss.ch/de/articles/008076/"
  ],
  "notes": "The three leagues are drawn approximately with today's regions and municipalities. Ten Jurisdictions = Region Prättigau/Davos, Arosa, Churwalden, Lantsch/Lenz, Schmitten and the Bündner Herrschaft (Maienfeld, Fläsch, Jenins, Malans). Grey League = Regions Surselva, Moesa, Imboden and Viamala, except Avers and the Domleschg (Domleschg, Fürstenau, Scharans, Sils i.D., Rothenbrunnen), which are drawn with God's House. God's House = everything else. Albula/Alvra is drawn with God's House, but its villages Alvaneu, Brienz and Surava belonged to Belfort (Ten Jurisdictions). Haldenstein (a free lordship, now part of Chur) is not shown. The lordship of Rhäzüns is drawn as Rhäzüns, Bonaduz and Domat/Ems. Tarasp lies inside today's Scuol and is mentioned in text only. Valtellina, Chiavenna and Bormio are outside Switzerland (text only). Before 1436 (stops 960 and 1365) the lordships are drawn very roughly with whole municipalities: the land of Rhäzüns and Belmont (with Tamins, Trin, Felsberg and the Gruob) and of Werdenberg-Sargans is an estimate; the county of Laax (Habsburg from 1283) and the Matsch lands in outer Prättigau are not drawn separately; the Vinschgau (now Italy) is not shown."
 },
 {
  "canton": "AG",
  "name": "Aargau",
  "summary": "The Aargau was ruled by the Lenzburg, Kyburg and then Habsburg families, was conquered by the Swiss in 1415 and split between Bern and lands shared by several cantons; with the Austrian Fricktal it became one canton in 1803.",
  "stops": [
   {
    "year": 1172,
    "title": "The counts of Lenzburg",
    "text": [
     "In the 1000s and 1100s the counts of Lenzburg are the strongest lords in the Aargau. They rule the Seetal and the area around Baden.",
     "The Habsburg family builds its castle near Brugg about 1030 and founds the abbey of Muri. The counts of Frohburg hold Zofingen. The Zähringen found Rheinfelden.",
     "In 1172/1173 the Lenzburg family dies out. The emperor divides its land; the Habsburg family gets part of it."
    ],
    "layers": [
     {
      "name": "Habsburg",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Habsburg family land: castle Habsburg and Muri",
      "sel": {
       "munis": [
        4099,
        4123,
        4092,
        4104,
        4100,
        4093,
        4107,
        4236
       ]
      }
     },
     {
      "name": "Rheinfelden",
      "kind": "lord",
      "lord": "zahringen",
      "label": "Rheinfelden: town of the Zähringen",
      "sel": {
       "munis": [
        4258
       ]
      }
     },
     {
      "name": "Frohburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Frohburg: Zofingen",
      "sel": {
       "districts": [
        1910
       ]
      }
     },
     {
      "name": "Homberg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Homberg-Thierstein: Fricktal",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      }
     },
     {
      "name": "Lenzburg",
      "kind": "lord",
      "lord": "lenzburg",
      "label": "Counts of Lenzburg: Seetal and Baden",
      "sel": {
       "districts": [
        1907,
        1905,
        1902
       ]
      }
     }
    ]
   },
   {
    "year": 1264,
    "title": "Habsburg takes almost all",
    "text": [
     "After 1200 the counts of Kyburg get the Lenzburg land and found towns such as Baden, Aarau and Mellingen. The Habsburg family gets the Fricktal from the Homberg counts after 1223.",
     "About 1264 the Kyburg family dies out. Count Rudolf of Habsburg, later king, takes their land. Now Habsburg rules almost all of today's Aargau.",
     "About 1300 Habsburg also buys Zofingen and Aarburg, and in 1330 Rheinfelden. Lenzburg and Baden become centres of Habsburg rule, until the Swiss conquer the land in 1415."
    ],
    "layers": [
     {
      "name": "Rheinfelden",
      "kind": "lord",
      "lord": "empire",
      "label": "Rheinfelden: imperial town",
      "sel": {
       "munis": [
        4258
       ]
      }
     },
     {
      "name": "Frohburg",
      "kind": "lord",
      "lord": "noble",
      "label": "Counts of Frohburg: Zofingen and Aarburg (to Habsburg about 1300)",
      "sel": {
       "districts": [
        1910
       ]
      }
     },
     {
      "name": "Habsburg",
      "kind": "lord",
      "lord": "habsburg",
      "label": "House of Habsburg (Fricktal: Habsburg-Laufenburg line)",
      "sel": {
       "cantons": [
        "AG"
       ],
       "exceptDistricts": [
        1911
       ]
      }
     }
    ]
   },
   {
    "year": 1415,
    "title": "The Swiss conquer the Aargau",
    "text": [
     "In 1415 the Swiss conquer the Aargau from Austria. Bern takes the west part, the Bernese Aargau. It is not a canton, but land ruled by Bern.",
     "The County of Baden and the Freie Ämter (Free Bailiwicks) become common lordships (land ruled together by several cantons). The Fricktal stays Austrian."
    ],
    "layers": [
     {
      "name": "Merenschwand",
      "kind": "other",
      "label": "Merenschwand: ruled by Lucerne",
      "sel": {
       "munis": [
        4234
       ]
      }
     },
     {
      "name": "County of Baden",
      "kind": "shared",
      "label": "County of Baden: ruled by several cantons",
      "sel": {
       "districts": [
        1902,
        1911
       ],
       "munis": [
        243,
        247,
        87,
        246
       ]
      }
     },
     {
      "name": "Freie Ämter",
      "kind": "shared",
      "label": "Freie Ämter: ruled by several cantons",
      "sel": {
       "districts": [
        1903,
        1908
       ],
       "munis": [
        1030
       ]
      }
     },
     {
      "name": "Fricktal",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Fricktal: stays with Habsburg (Austria)",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      }
     },
     {
      "name": "Bernese Aargau",
      "kind": "other",
      "label": "Bernese Aargau: ruled by Bern from 1415",
      "sel": {
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Two Helvetic cantons",
    "text": [
     "In 1798 the Helvetic Republic makes the Bernese Aargau east of the Wigger river into the canton of Aargau, with Aarau as capital.",
     "The County of Baden, the Freie Ämter and the Kelleramt become the canton of Baden. The Fricktal stays Austrian until 1801 and becomes a Helvetic canton in 1802."
    ],
    "layers": [
     {
      "name": "West of the Wigger",
      "kind": "other",
      "label": "West of the Wigger: still part of Bern",
      "sel": {
       "munis": [
        4274,
        4279,
        4282,
        4287
       ]
      }
     },
     {
      "name": "Merenschwand",
      "kind": "other",
      "label": "Merenschwand: part of Lucerne",
      "sel": {
       "munis": [
        4234
       ]
      }
     },
     {
      "name": "Canton of Baden",
      "kind": "other",
      "label": "Helvetic canton of Baden (1798–1803)",
      "sel": {
       "districts": [
        1902,
        1903,
        1908,
        1911
       ],
       "munis": [
        243,
        247,
        87,
        246,
        1030
       ]
      }
     },
     {
      "name": "Fricktal",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Fricktal: Austrian until 1801",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      }
     },
     {
      "name": "Canton of Aargau",
      "kind": "core",
      "label": "Helvetic canton of Aargau",
      "sel": {
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "One canton of Aargau",
    "text": [
     "In 1803 the Act of Mediation joins the cantons of Aargau, Baden and Fricktal into one canton of Aargau. It becomes a full member of the Confederation.",
     "Aargau gets Merenschwand from Lucerne and gives Hitzkirch to Lucerne. Dietikon, Schlieren, Hüttikon and Oetwil an der Limmat go to Zurich.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Aargau",
      "kind": "core",
      "label": "Canton of Aargau since 1803",
      "sel": {
       "cantons": [
        "AG"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007392/",
   "https://hls-dhs-dss.ch/de/articles/008635/"
  ],
  "notes": "Bernese Aargau drawn as today's districts Aarau, Brugg, Kulm, Lenzburg and Zofingen; County of Baden as Baden and Zurzach (plus Dietikon, Schlieren, Hüttikon, Oetwil an der Limmat); Freie Ämter as Bremgarten and Muri (plus Hitzkirch); Fricktal as Laufenburg and Rheinfelden. 1798: the part west of the Wigger is drawn as Brittnau, Murgenthal, Rothrist and Vordemwald (approximate). The 1712 change (who ruled the shared lands) is not drawn. 1172: Lenzburg land drawn as today's districts Lenzburg, Kulm and Baden; Habsburg land as the Eigenamt around the castle plus Muri; the other districts are not drawn. 1264: the Zurzach district is not drawn (several lords, e.g. the bishop of Constance); Fricktal drawn as Habsburg, but it was the Habsburg-Laufenburg line."
 },
 {
  "canton": "TG",
  "name": "Thurgau",
  "summary": "Thurgau was land ruled together by the Swiss cantons from 1460 to 1798, and became a free canton with the same borders in 1803.",
  "stops": [
   {
    "year": 1094,
    "title": "County of the Kyburg counts",
    "text": [
     "From 1094 the counts of Dillingen-Kyburg hold the county of Thurgau. They also own large estates there. In 1178 they make Diessenhofen a town.",
     "Abbeys such as St. Gallen and Reichenau, and the Bishop of Constance, also own much land in Thurgau."
    ],
    "layers": [
     {
      "name": "County of Thurgau",
      "kind": "lord",
      "lord": "kyburg",
      "label": "County of Thurgau: held by the counts of Kyburg from 1094",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     }
    ]
   },
   {
    "year": 1264,
    "title": "Habsburg takes over",
    "text": [
     "The counts of Kyburg die out in 1264. Rudolf of Habsburg inherits their rights in Thurgau. Habsburg rules the land from Frauenfeld.",
     "The Bishop of Constance keeps the high court in Arbon and Bischofszell. From 1417 the city of Constance holds the land court (Landgericht) as a pledge."
    ],
    "layers": [
     {
      "name": "Arbon and Bischofszell",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Constance: high court in Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      }
     },
     {
      "name": "Landgraviate of Thurgau",
      "kind": "lord",
      "lord": "habsburg",
      "label": "Landgraviate of Thurgau: Habsburg 1264–1460",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     }
    ]
   },
   {
    "year": 1460,
    "title": "Conquered by the Swiss",
    "text": [
     "In 1460 seven Swiss cantons take Thurgau from Habsburg. It becomes a common lordship (land ruled together by several cantons). A governor in Frauenfeld rules it in turn for each canton.",
     "The people of Thurgau have no vote. Bern joins the ruling cantons in 1712. The town of Diessenhofen keeps special rights.",
     "The Bishop of Constance keeps the high court in Arbon and Bischofszell. The land court stays with the city of Constance until 1499. In 1460 the land already has almost today's shape."
    ],
    "layers": [
     {
      "name": "Arbon and Bischofszell",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Constance: high court in Arbon and Bischofszell until 1798",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      }
     },
     {
      "name": "Diessenhofen",
      "kind": "shared",
      "label": "Diessenhofen: town with own courts, ruled by the Swiss cantons",
      "sel": {
       "munis": [
        4545
       ]
      }
     },
     {
      "name": "Landgraviate of Thurgau",
      "kind": "shared",
      "label": "Thurgau: common lordship of the Swiss cantons, not a member",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "A free canton",
    "text": [
     "In 1798 Thurgau declares itself free. It becomes a canton of the Helvetic Republic.",
     "From 1798 to 1800 the Diessenhofen area belongs to the canton of Schaffhausen."
    ],
    "layers": [
     {
      "name": "Diessenhofen area",
      "kind": "other",
      "label": "Diessenhofen area: part of Schaffhausen 1798–1800",
      "sel": {
       "munis": [
        4545,
        4536,
        4546
       ]
      }
     },
     {
      "name": "Canton of Thurgau",
      "kind": "core",
      "label": "Helvetic canton of Thurgau",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Full member of the Confederation",
    "text": [
     "In 1803 the Act of Mediation makes Thurgau a full canton of the Confederation, with Frauenfeld as capital.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Canton of Thurgau",
      "kind": "core",
      "label": "Canton of Thurgau",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007393/",
   "https://hls-dhs-dss.ch/de/articles/001891/",
   "https://hls-dhs-dss.ch/de/articles/007388/"
  ],
  "notes": "From 1460 to 1798 Thurgau is drawn as 'shared' (ruled land, not a member). Inside Thurgau, many lower courts belonged to the Bishop of Constance, abbeys or Zurich (e.g. Weinfelden 1614); these are not drawn. Diessenhofen area drawn as Diessenhofen, Basadingen-Schlattingen and Schlatt."
 },
 {
  "canton": "TI",
  "name": "Ticino",
  "summary": "Swiss cantons conquered the valleys south of the Gotthard between 1439 and 1521 and ruled them as subject lands until 1798; in 1803 they became the canton of Ticino.",
  "stops": [
   {
    "year": 1200,
    "title": "Milan, Como and the Empire",
    "text": [
     "Around 1200 the land south of the Gotthard is part of the Empire, but the Lombard cities Milan and Como have the most power.",
     "The cathedral chapter of Milan (the clergy of Milan's main church) rules the Leventina, Blenio and the Riviera. It got this land from a bishop's gift in 948. The Bishop of Como rules Bellinzona, which an emperor gave to his diocese in 1002–1004.",
     "In 1186 Emperor Frederick Barbarossa puts the Locarno area directly under the Empire. Lugano and Mendrisio belong to the area of Como. Lugano gets wide self-government in 1191."
    ],
    "layers": [
     {
      "name": "Cathedral chapter of Milan",
      "kind": "lord",
      "lord": "milan",
      "label": "Leventina, Blenio, Riviera: ruled by the cathedral chapter of Milan",
      "sel": {
       "districts": [
        2103,
        2102,
        2107
       ]
      }
     },
     {
      "name": "Bishop of Como",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bellinzona: ruled by the Prince-Bishop of Como",
      "sel": {
       "districts": [
        2101
       ]
      }
     },
     {
      "name": "Locarno",
      "kind": "lord",
      "lord": "empire",
      "label": "Locarno and the Vallemaggia: directly under the Empire since 1186",
      "sel": {
       "districts": [
        2104,
        2108
       ]
      }
     },
     {
      "name": "Como",
      "kind": "lord",
      "lord": "milan",
      "label": "Lugano and Mendrisio: land of the city of Como",
      "sel": {
       "districts": [
        2105,
        2106
       ]
      }
     }
    ]
   },
   {
    "year": 1342,
    "title": "The Visconti of Milan",
    "text": [
     "The Visconti family takes power in Milan in 1277. Milan conquers Como in 1335, and with it Lugano and Mendrisio.",
     "In 1340 Milanese troops take Bellinzona, and in 1342 Locarno submits. From 1344 the Visconti also control the Leventina and Blenio. Now all of today's Ticino belongs to the state of Milan."
    ],
    "layers": [
     {
      "name": "Duchy of Milan",
      "kind": "lord",
      "lord": "milan",
      "label": "State of the Visconti of Milan",
      "sel": {
       "cantons": [
        "TI"
       ]
      }
     }
    ]
   },
   {
    "year": 1419,
    "title": "First Swiss steps south",
    "text": [
     "Uri wants control of the road over the Gotthard Pass. In 1403 Uri and Obwalden make an alliance with the Leventina and take control of it.",
     "In 1419 Uri and Obwalden buy Bellinzona from the lords of Sax. But Milan attacks. At the battle of Arbedo in 1422 the Swiss lose, and they give up all land south of the Alps."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "core",
      "label": "Leventina: controlled by Uri and Obwalden from 1403 (lost 1422)",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Bellinzona",
      "kind": "core",
      "label": "Bellinzona: bought by Uri and Obwalden in 1419 (lost 1422)",
      "sel": {
       "districts": [
        2101
       ]
      }
     },
     {
      "name": "Duchy of Milan",
      "kind": "lord",
      "lord": "milan",
      "label": "Duchy of Milan",
      "sel": {
       "cantons": [
        "TI"
       ]
      }
     }
    ]
   },
   {
    "year": 1480,
    "title": "Uri takes the Leventina",
    "text": [
     "After Arbedo, Uri tries again.",
     "In 1439–1441 Milan pledges the Leventina valley to Uri. In 1478 the Swiss defeat Milan at Giornico. In 1480 the Leventina becomes a lasting possession of Uri.",
     "The rest of today's Ticino still belongs to the Duchy of Milan."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "core",
      "label": "Leventina: ruled by Uri alone (pledged 1439–1441, owned since 1480)",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Duchy of Milan",
      "kind": "lord",
      "lord": "milan",
      "label": "Duchy of Milan (not Swiss)",
      "sel": {
       "cantons": [
        "TI"
       ]
      }
     }
    ]
   },
   {
    "year": 1503,
    "title": "Bellinzona, Riviera and Blenio",
    "text": [
     "In 1499–1500, while France fights Milan, Uri, Schwyz and Nidwalden take the Blenio valley and the Riviera, and occupy Bellinzona.",
     "In 1503 France accepts Swiss rule over these lands. The three cantons rule them together as common lordships (land shared by several cantons, with a governor each canton sends in turn)."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "core",
      "label": "Leventina: ruled by Uri alone",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Bellinzona, Riviera, Blenio",
      "kind": "core",
      "label": "Bellinzona, Riviera, Blenio: ruled by Uri, Schwyz and Nidwalden since 1500–1503",
      "sel": {
       "districts": [
        2101,
        2107,
        2102
       ]
      }
     },
     {
      "name": "Duchy of Milan",
      "kind": "lord",
      "lord": "milan",
      "label": "Duchy of Milan (not Swiss)",
      "sel": {
       "cantons": [
        "TI"
       ]
      }
     }
    ]
   },
   {
    "year": 1513,
    "title": "Twelve cantons take Lugano and Locarno",
    "text": [
     "In 1512–1513 the Swiss take the castles of Lugano and Locarno. Twelve cantons rule Lugano, Locarno and the Vallemaggia as common lordships. These are the 'bailiwicks beyond the mountains'.",
     "The Swiss also hold the Val d'Ossola (now in Italy) from 1512, but lose it in 1515. The map cannot show it.",
     "Mendrisio and Balerna are still disputed with Milan."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "core",
      "label": "Leventina: ruled by Uri alone",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Bellinzona, Riviera, Blenio",
      "kind": "core",
      "label": "Bellinzona, Riviera, Blenio: ruled by Uri, Schwyz and Nidwalden",
      "sel": {
       "districts": [
        2101,
        2107,
        2102
       ]
      }
     },
     {
      "name": "Lugano, Locarno, Vallemaggia",
      "kind": "core",
      "label": "Lugano, Locarno, Vallemaggia: ruled by twelve cantons since 1512–1513",
      "sel": {
       "districts": [
        2105,
        2104,
        2108
       ]
      }
     },
     {
      "name": "Mendrisio",
      "kind": "lord",
      "lord": "milan",
      "label": "Mendrisio and Balerna: still disputed with Milan (Swiss from 1521)",
      "sel": {
       "districts": [
        2106
       ]
      }
     }
    ]
   },
   {
    "year": 1521,
    "title": "All of today's Ticino Swiss",
    "text": [
     "In 1521 Mendrisio and Balerna also go to the twelve cantons. Now all of today's Ticino is under Swiss rule.",
     "The people have no vote. Governors from the ruling cantons run the bailiwicks (land ruled by a governor). This stays so for almost 300 years. In 1755 the Leventina revolts against Uri, but it fails."
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "core",
      "label": "Leventina: ruled by Uri alone",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Bellinzona, Riviera, Blenio",
      "kind": "core",
      "label": "Bellinzona, Riviera, Blenio: ruled by Uri, Schwyz and Nidwalden",
      "sel": {
       "districts": [
        2101,
        2107,
        2102
       ]
      }
     },
     {
      "name": "Lugano, Locarno, Mendrisio, Vallemaggia",
      "kind": "core",
      "label": "Lugano, Locarno, Mendrisio, Vallemaggia: ruled by twelve cantons",
      "sel": {
       "districts": [
        2105,
        2104,
        2106,
        2108
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Two Helvetic cantons",
    "text": [
     "In February to April 1798 the bailiwicks become free, one after the other. Uri frees the Leventina on 14 March 1798.",
     "In the Helvetic Republic (the central state made by France) the land forms two cantons. The canton of Bellinzona has Bellinzona, the Leventina, the Riviera and Blenio. The canton of Lugano has Lugano, Mendrisio, Locarno and the Vallemaggia."
    ],
    "layers": [
     {
      "name": "Canton of Bellinzona",
      "kind": "core",
      "label": "Helvetic canton of Bellinzona (1798–1803)",
      "sel": {
       "districts": [
        2101,
        2102,
        2103,
        2107
       ]
      }
     },
     {
      "name": "Canton of Lugano",
      "kind": "core",
      "label": "Helvetic canton of Lugano (1798–1803)",
      "sel": {
       "districts": [
        2105,
        2104,
        2106,
        2108
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Canton of Ticino",
    "text": [
     "In 1803 the Act of Mediation joins the two Helvetic cantons into the new canton of Ticino, a full member of the Confederation. Its eight districts follow the old bailiwicks.",
     "Since then, the borders of the canton have not changed."
    ],
    "layers": [
     {
      "name": "Ticino",
      "kind": "core",
      "label": "Canton of Ticino (since 1803)",
      "sel": {
       "cantons": [
        "TI"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007394/",
   "https://hls-dhs-dss.ch/de/articles/046979/",
   "https://hls-dhs-dss.ch/de/articles/006632/",
   "https://hls-dhs-dss.ch/de/articles/024649/",
   "https://hls-dhs-dss.ch/de/articles/008540/",
   "https://hls-dhs-dss.ch/de/articles/008548/",
   "https://hls-dhs-dss.ch/de/articles/008899/",
   "https://hls-dhs-dss.ch/de/articles/024649/"
  ],
  "notes": "Before 1803 there was no canton of Ticino, so the Swiss-ruled lands are drawn as 'core' with labels that say who ruled them (Uri alone; Uri, Schwyz and Nidwalden; twelve cantons). In fact they were subject lands. The bailiwicks are drawn as today's districts: Leventina = 2103; Bellinzona, Riviera, Blenio = 2101, 2107, 2102; Lugano, Locarno, Mendrisio, Vallemaggia = 2105, 2104, 2106, 2108. Borders between the old bailiwicks and today's districts are not exact. The Val d'Ossola (1512–1515) is outside Switzerland (text only). Medieval stops (1200, 1342) use whole districts; the real borders of the Milan cathedral valleys, Como and Locarno were not the same as today's districts."
 },
 {
  "canton": "VD",
  "name": "Vaud",
  "summary": "Vaud was given to the Bishop of Lausanne in 1011 and taken over by Savoy in the 13th century; Bern conquered it step by step (Aigle 1475, most of Vaud 1536, Pays-d'Enhaut 1555), shared Orbe-Echallens and Grandson with Fribourg, and Vaud became a free canton in 1798–1803.",
  "stops": [
   {
    "year": 1011,
    "title": "County of Vaud to the bishop",
    "text": [
     "Vaud is part of the Kingdom of Burgundy. In 1011 King Rudolf III gives the county of Vaud to the Bishop of Lausanne. The bishop gets the rights of a count (judge and ruler) in the region.",
     "After 1032 the kingdom goes to the German emperors. Many noble families and monasteries also hold land in Vaud."
    ],
    "layers": [
     {
      "name": "Chablais",
      "kind": "lord",
      "lord": "empire",
      "label": "Aigle and the Chablais: Burgundian royal land (Abbey of Saint-Maurice nearby)",
      "sel": {
       "districts": [
        2221
       ]
      }
     },
     {
      "name": "County of Vaud",
      "kind": "lord",
      "lord": "bishop",
      "label": "County of Vaud: Bishop of Lausanne from 1011",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   },
   {
    "year": 1260,
    "title": "Savoy takes over Vaud",
    "text": [
     "In the 13th century the counts of Savoy come into Vaud. In 1219 the bishop gives Moudon to Savoy as a fief (land held from a higher lord).",
     "From 1240 to 1260 Peter II of Savoy wins the loyalty of most lords of Vaud. He also gets Payerne. Savoy already holds the Chablais around Aigle.",
     "The bishop keeps Lausanne, Lavaux, Lucens and Avenches. Other lords keep their land as Savoyard fiefs, for example the lords of Grandson and the counts of Gruyère in the Pays-d'Enhaut."
    ],
    "layers": [
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Lausanne, Lavaux, Lucens, Avenches",
      "sel": {
       "munis": [
        5586,
        5606,
        5613,
        5601,
        5607,
        5609,
        5610,
        5675,
        5451
       ]
      }
     },
     {
      "name": "Lords of Grandson",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords of Grandson",
      "sel": {
       "munis": [
        5561
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Pays-d'Enhaut: counts of Gruyère",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Savoy: Pays de Vaud and the Chablais",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   },
   {
    "year": 1476,
    "title": "Burgundian Wars: first Swiss conquests",
    "text": [
     "Most of Vaud belongs to the Duke of Savoy. The Bishop of Lausanne rules Lausanne and Lavaux.",
     "In the Burgundian Wars (1474–1476) Bern takes Aigle and Bex. Bern and Fribourg take Grandson, Orbe and Echallens. They rule them together as common lordships (land ruled by two cantons through a governor). This lasts until 1798."
    ],
    "layers": [
     {
      "name": "Shared Bern and Fribourg",
      "kind": "shared",
      "label": "Grandson, Orbe, Echallens: ruled by Bern and Fribourg together",
      "sel": {
       "munis": [
        5561,
        5757,
        5518
       ]
      }
     },
     {
      "name": "Aigle",
      "kind": "subject",
      "label": "Aigle, Bex, Ollon, Ormonts: ruled by Bern since 1475",
      "sel": {
       "districts": [
        2221
       ]
      }
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Lausanne: Lausanne and Lavaux",
      "sel": {
       "munis": [
        5586,
        5606,
        5613,
        5601,
        5607,
        5609,
        5610
       ]
      }
     },
     {
      "name": "Counts of Gruyère",
      "kind": "lord",
      "lord": "noble",
      "label": "Pays-d'Enhaut: counts of Gruyère",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Pays de Vaud: Duchy of Savoy",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   },
   {
    "year": 1555,
    "title": "Bernese Vaud",
    "text": [
     "In 1536 Bern conquers Vaud from Savoy. It also takes Lausanne from the bishop and brings the Reformation. Fribourg takes the eastern part (today in the canton of Fribourg).",
     "Bern divides Vaud into bailiwicks (land ruled by a governor sent from Bern). In 1555 Bern adds the Pays-d'Enhaut from the bankrupt Count of Gruyère.",
     "Bern also holds Gex and land south of Lake Geneva, but gives it back to Savoy in 1564–1567. Vaud stays under Bern until 1798."
    ],
    "layers": [
     {
      "name": "Shared Bern and Fribourg",
      "kind": "shared",
      "label": "Grandson, Orbe, Echallens: ruled by Bern and Fribourg together",
      "sel": {
       "munis": [
        5561,
        5757,
        5518
       ]
      }
     },
     {
      "name": "Aigle",
      "kind": "subject",
      "label": "Aigle: ruled by Bern since 1475",
      "sel": {
       "districts": [
        2221
       ]
      }
     },
     {
      "name": "Pays-d'Enhaut",
      "kind": "subject",
      "label": "Pays-d'Enhaut: Bernese bailiwick since 1555",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Pays de Vaud",
      "kind": "core",
      "label": "Pays de Vaud: Bernese bailiwicks since 1536 (not a canton yet)",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Lemanic Republic and canton Léman",
    "text": [
     "In January 1798 Vaud breaks free from Bern and declares the Lemanic Republic. Soon after, it becomes the canton of Léman in the Helvetic Republic.",
     "The common lordships and Aigle join the new canton. But the districts of Payerne and Avenches go to the canton of Fribourg until 1802."
    ],
    "layers": [
     {
      "name": "Payerne and Avenches",
      "kind": "other",
      "label": "Payerne and Avenches: part of canton Fribourg 1798–1802",
      "sel": {
       "munis": [
        5822,
        5451,
        5458,
        5816
       ]
      }
     },
     {
      "name": "Canton of Léman",
      "kind": "core",
      "label": "Canton of Léman (Helvetic Republic)",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   },
   {
    "year": 1803,
    "title": "Canton of Vaud",
    "text": [
     "In 1802 Payerne and Avenches come back. With the Act of Mediation of 1803, Vaud becomes a full canton of the Confederation.",
     "Since then, the borders have almost not changed. Only in 1862 a treaty with France changes the border in the Vallée des Dappes, a small valley in the Jura."
    ],
    "layers": [
     {
      "name": "Canton of Vaud",
      "kind": "core",
      "label": "Canton of Vaud: member since 1803",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007395/",
   "https://hls-dhs-dss.ch/de/articles/008631/",
   "https://hls-dhs-dss.ch/de/articles/007568/2017-01-06/",
   "https://hls-dhs-dss.ch/de/articles/007587/",
   "https://hls-dhs-dss.ch/de/articles/007379/2023-03-09/"
  ],
  "notes": "Before 1798 Vaud was not a canton; its main body is drawn as 'core' only so the map has a base, and the label says who ruled it. Grandson, Orbe and Echallens drawn as the towns only (the lordships were larger). Lausanne in 1476 drawn as the city only (the bishop also held Lavaux and other land). Payerne and Avenches districts 1798–1802 drawn as Payerne, Avenches, Faoug and Corcelles-près-Payerne. The 1862 Dappes change is too small to draw. Early stops: Lavaux drawn as Lutry, Bourg-en-Lavaux, Chexbres, Puidoux, Rivaz and Saint-Saphorin; lords of Grandson drawn as the town only. The 1011 stop simplifies: the bishop had count's rights, but much land was held by other lords and monasteries."
 },
 {
  "canton": "VS",
  "name": "Valais",
  "summary": "Valais was given to the Bishop of Sion in 999 and divided with Savoy in 1392; the seven Zenden of Upper Valais then conquered Lower Valais in 1475 and 1536 and ruled it until 1798, and after Helvetic, independent and French years Valais joined the Confederation as a canton in 1815.",
  "stops": [
   {
    "year": 999,
    "title": "Bishop of Sion becomes count",
    "text": [
     "In 999 King Rudolf III of Burgundy gives the county of Valais to the Bishop of Sion. So the bishop is also the lord of the land. From 1032 he is directly under the emperor.",
     "In the west, the old Abbey of Saint-Maurice holds much land. From the 12th century the counts of Savoy are its protectors and rule the Chablais."
    ],
    "layers": [
     {
      "name": "Abbey of Saint-Maurice",
      "kind": "lord",
      "lord": "abbey",
      "label": "Abbey of Saint-Maurice and the Chablais (later Savoy)",
      "sel": {
       "districts": [
        2310,
        2308
       ]
      }
     },
     {
      "name": "Bishop of Sion",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Sion: county of Valais from 999",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1392,
    "title": "Bishop and Savoy divide Valais",
    "text": [
     "In the 13th century Savoy pushes up the valley towards Sion. The village communities grow strong and become the Zenden (dizains).",
     "In 1384 Savoy takes Martigny and Ardon-Chamoson. The peace of 1392 divides Valais: above the Morge stream near Conthey is the bishop and the Zenden, below it is Savoy.",
     "In 1403 the bishop and the Zenden make a permanent alliance with Lucerne, Uri and Unterwalden."
    ],
    "layers": [
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Lower Valais: Savoy (border at the Morge of Conthey)",
      "sel": {
       "districts": [
        2302,
        2307,
        2303,
        2310,
        2308
       ]
      }
     },
     {
      "name": "Bishop of Sion and Zenden",
      "kind": "lord",
      "lord": "bishop",
      "label": "Upper Valais: Bishop of Sion and the Zenden",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1416,
    "title": "Upper Valais allies with Swiss",
    "text": [
     "Upper Valais is a land of seven communities, the Zenden (dizains), under the Bishop of Sion. In 1416–1417 they make an alliance with Lucerne, Uri and Unterwalden. So Valais becomes an ally (zugewandter Ort) of the Confederation, not a full member.",
     "Lower Valais, west of the Morge stream near Sion, belongs to the Duke of Savoy."
    ],
    "layers": [
     {
      "name": "Seven Zenden",
      "kind": "core",
      "label": "Upper Valais: the seven Zenden and the Bishop of Sion",
      "sel": {
       "districts": [
        2304,
        2301,
        2313,
        2309,
        2306,
        2311,
        2312,
        2305
       ]
      }
     },
     {
      "name": "Savoyard Lower Valais",
      "kind": "lord",
      "label": "Lower Valais: Savoy",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "lord": "savoy"
     }
    ]
   },
   {
    "year": 1475,
    "title": "Conquest of Lower Valais",
    "text": [
     "In the Burgundian Wars, the Upper Valaisans beat the Savoyard army at the Planta near Sion in 1475. They take Lower Valais down to Saint-Maurice.",
     "The Zenden rule this land as a subject land (land with no vote, ruled by governors). Also in 1475 Valais makes an alliance with Bern."
    ],
    "layers": [
     {
      "name": "Monthey",
      "kind": "lord",
      "label": "Monthey area: still Savoy",
      "sel": {
       "districts": [
        2308
       ]
      },
      "lord": "savoy"
     },
     {
      "name": "Lower Valais",
      "kind": "subject",
      "label": "Lower Valais to Saint-Maurice: ruled by the Zenden since 1475",
      "sel": {
       "districts": [
        2302,
        2307,
        2303,
        2310
       ]
      }
     },
     {
      "name": "Seven Zenden",
      "kind": "core",
      "label": "Upper Valais: the seven Zenden",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1569,
    "title": "Monthey kept, Chablais returned",
    "text": [
     "In 1536 the Upper Valaisans take the rest of the Savoyard Chablais, south of Lake Geneva, as far as Evian.",
     "In the Treaty of Thonon of 1569 Valais gives Evian and the Aulps valley back to Savoy. It keeps Monthey. The border is now at the Morge stream at Saint-Gingolph. Since then, the outer border of Valais has hardly changed."
    ],
    "layers": [
     {
      "name": "Lower Valais",
      "kind": "subject",
      "label": "Lower Valais with Monthey: ruled by the Zenden",
      "sel": {
       "districts": [
        2302,
        2307,
        2303,
        2310,
        2308
       ]
      }
     },
     {
      "name": "Seven Zenden",
      "kind": "core",
      "label": "Upper Valais: the seven Zenden",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Lower Valais free, Helvetic canton",
    "text": [
     "In early 1798 Lower Valais declares itself free, and Upper Valais accepts this. Then Valais becomes a canton of the Helvetic Republic. All its people now have the same rights."
    ],
    "layers": [
     {
      "name": "Canton of Valais",
      "kind": "core",
      "label": "Canton of Valais (Helvetic Republic)",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1810,
    "title": "French département of Simplon",
    "text": [
     "In 1802 Napoleon makes Valais a separate state, the Rhodanic Republic. He wants the road over the Simplon Pass.",
     "In 1810 France annexes Valais. It becomes the French département (province) of Simplon until 1813."
    ],
    "layers": [
     {
      "name": "Département du Simplon",
      "kind": "core",
      "label": "Valais: French département of Simplon 1810–1813",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Valais joins as a canton",
    "text": [
     "In 1815 Valais joins the Confederation as a full canton, together with Neuchâtel and Geneva.",
     "Since then, the borders have not changed."
    ],
    "layers": [
     {
      "name": "Canton of Valais",
      "kind": "core",
      "label": "Canton of Valais: member since 1815",
      "sel": {
       "cantons": [
        "VS"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/articles/007396",
   "https://hls-dhs-dss.ch/de/articles/008408/2011-02-02/",
   "https://hls-dhs-dss.ch/de/articles/008412/2017-03-13/",
   "https://hls-dhs-dss.ch/textes/d/D24651.php",
   "https://hls-dhs-dss.ch/articles/008414/2010-07-21/"
  ],
  "notes": "The seven Zenden drawn as today's districts Goms, Brig, Visp, Raron, Leuk, Sierre, Sion and Hérens (Hérens counted with the Sion Zenden). Savoyard Lower Valais before 1475 drawn as districts Conthey, Martigny, Entremont, Saint-Maurice and Monthey; the real border at the Morge near Sion and the status of Martigny (episcopal but Savoyard-held) are simplified. The Chablais land 1536–1569 (Evian, Aulps) is outside Switzerland and is in the text only. The 999 stop simplifies: Savoy's rule in the Chablais grew only from the 12th century. In 1392 Martigny is drawn whole with Savoy."
 },
 {
  "canton": "NE",
  "name": "Neuchâtel",
  "summary": "Neuchâtel was a castle of the Burgundian kings, then a county of its own noble family allied with the Swiss; it united with Valangin in 1592, came under the King of Prussia in 1707, joined the Confederation as a canton in 1814/1815 and became a republic in 1848.",
  "stops": [
   {
    "year": 1011,
    "title": "Castle in the Kingdom of Burgundy",
    "text": [
     "In 1011 Neuchâtel ('new castle') is named for the first time. King Rudolf III of Burgundy gives it, with other royal estates, to his bride Irmingard.",
     "After 1032 the land belongs to the Empire."
    ],
    "layers": [
     {
      "name": "Kingdom of Burgundy",
      "kind": "lord",
      "lord": "empire",
      "label": "Kingdom of Burgundy, from 1032 the Empire",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     }
    ]
   },
   {
    "year": 1250,
    "title": "Lords of Neuchâtel and Valangin",
    "text": [
     "A noble family takes the name of Neuchâtel and rules the land. In 1214 the town of Neuchâtel gets a charter of freedoms. About 1218 the family divides its land.",
     "Valangin, with the Val-de-Ruz and later the mountains, goes to a related branch (Aarberg). It is first named in 1242. In 1288 the counts lose their direct link to the emperor and come under the Chalon family."
    ],
    "layers": [
     {
      "name": "Lordship of Valangin",
      "kind": "lord",
      "lord": "noble",
      "label": "Lordship of Valangin (Aarberg-Valangin family)",
      "sel": {
       "munis": [
        6487,
        6421,
        6436,
        6423,
        6422,
        6437,
        6433,
        6435
       ]
      }
     },
     {
      "name": "Le Cerneux-Péquignot",
      "kind": "other",
      "label": "Le Cerneux-Péquignot: County of Burgundy (Franche-Comté)",
      "sel": {
       "munis": [
        6434
       ]
      }
     },
     {
      "name": "County of Neuchâtel",
      "kind": "lord",
      "lord": "noble",
      "label": "Lords (later counts) of Neuchâtel",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     }
    ]
   },
   {
    "year": 1406,
    "title": "County allied with Bern",
    "text": [
     "Neuchâtel is a county. From 1395 it belongs to the counts of Freiburg (in Breisgau). The count has alliances of citizenship (Burgrecht) with Swiss cities: with Bern since 1406 as a permanent alliance, and with Fribourg and Solothurn. So it is an ally of the Swiss, not a member.",
     "The mountains and the Val-de-Ruz form a separate lordship, Valangin."
    ],
    "layers": [
     {
      "name": "Lordship of Valangin",
      "kind": "lord",
      "label": "Lordship of Valangin (Aarberg-Valangin family)",
      "sel": {
       "munis": [
        6487,
        6421,
        6436,
        6423,
        6422,
        6437,
        6433,
        6435
       ]
      },
      "lord": "noble"
     },
     {
      "name": "Le Cerneux-Péquignot",
      "kind": "other",
      "label": "Le Cerneux-Péquignot: part of Franche-Comté (later France)",
      "sel": {
       "munis": [
        6434
       ]
      }
     },
     {
      "name": "County of Neuchâtel",
      "kind": "lord",
      "label": "County of Neuchâtel: counts of Freiburg from 1395 (ally of the Swiss)",
      "sel": {
       "cantons": [
        "NE"
       ]
      },
      "lord": "noble"
     }
    ]
   },
   {
    "year": 1592,
    "title": "Valangin joins the county",
    "text": [
     "From 1458 the Hochberg family rules, and from 1504 the Orléans-Longueville family. From 1512 to 1529 the Swiss cantons occupy Neuchâtel and rule it together through governors. Then they give it back.",
     "In 1592 the lordship of Valangin is united with the county. Now the state has almost its present size."
    ],
    "layers": [
     {
      "name": "Le Cerneux-Péquignot",
      "kind": "other",
      "label": "Le Cerneux-Péquignot: part of Franche-Comté",
      "sel": {
       "munis": [
        6434
       ]
      }
     },
     {
      "name": "County of Neuchâtel",
      "kind": "lord",
      "lord": "noble",
      "label": "County (later Principality) of Neuchâtel: Orléans-Longueville family, with Valangin since 1592",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Canton and principality",
    "text": [
     "In 1707 the King of Prussia becomes Prince of Neuchâtel. From 1806 to 1814 Napoleon gives the principality to his marshal Berthier.",
     "In 1814 Neuchâtel gets Le Cerneux-Péquignot from France. The Swiss Diet accepts Neuchâtel as a canton in September 1814, and it joins under the Federal Treaty of 1815. In 1815 it also gets all of Lignières.",
     "Neuchâtel is now a Swiss canton and, at the same time, a principality of the King of Prussia."
    ],
    "layers": [
     {
      "name": "Le Cerneux-Péquignot",
      "kind": "core",
      "label": "Le Cerneux-Péquignot: from France in 1814",
      "sel": {
       "munis": [
        6434
       ]
      }
     },
     {
      "name": "Canton of Neuchâtel",
      "kind": "core",
      "label": "Canton and Principality of Neuchâtel (Prussian king)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     }
    ]
   },
   {
    "year": 1857,
    "title": "Republic, Prussia gives up",
    "text": [
     "In 1848 a revolution ends the rule of the prince. Neuchâtel becomes a republic. In 1857 the King of Prussia gives up his claim.",
     "Since then, the borders have almost not changed. In 1894, after the Jura water correction, the small area of Thielle goes to Bern."
    ],
    "layers": [
     {
      "name": "Republic and canton of Neuchâtel",
      "kind": "core",
      "label": "Republic and canton of Neuchâtel",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/articles/007397/2017-05-30/"
  ],
  "notes": "Valangin drawn as Val-de-Ruz, La Chaux-de-Fonds, Le Locle, La Sagne, Les Planchettes, Les Ponts-de-Martel, Brot-Plamboz and La Chaux-du-Milieu (approximate; La Brévine shown with the county). Lignières (partly outside Neuchâtel before 1815) is not drawn separately. The 1894 Thielle change is too small to draw. Valangin in 1250 drawn with the mountains, which were settled from Valangin mostly in the 14th–15th centuries."
 },
 {
  "canton": "GE",
  "name": "Geneva",
  "summary": "Geneva was a bishop's city in the Empire surrounded by the counts of Geneva and later Savoy; it became an independent city-republic with scattered rural lands in 1536, was French from 1798 to 1813, and in 1815–1816 got communes from France and Savoy that link it to Switzerland.",
  "stops": [
   {
    "year": 1032,
    "title": "Bishop's city in the Empire",
    "text": [
     "Geneva belongs to the Kingdom of Burgundy. In 1032 the last king dies, and his land goes to the German emperor.",
     "The bishop rules the city. From the 11th century the counts of Geneva are the strongest lords in the land around it."
    ],
    "layers": [
     {
      "name": "Bishop of Geneva",
      "kind": "lord",
      "lord": "bishop",
      "label": "City of Geneva: ruled by the Bishop of Geneva",
      "sel": {
       "munis": [
        6621
       ]
      }
     },
     {
      "name": "Counts of Geneva",
      "kind": "lord",
      "lord": "noble",
      "label": "Land around: counts of Geneva and other lords",
      "sel": {
       "cantons": [
        "GE"
       ]
      }
     }
    ]
   },
   {
    "year": 1402,
    "title": "Savoy buys the county",
    "text": [
     "The bishop holds the city and rural districts (mandements) such as Peney and Jussy. The priory of Saint-Victor and the cathedral chapter hold other villages. The lords of Gex rule the land to the north-west.",
     "The counts of Geneva die out in 1394. In 1402 Amadeus VIII of Savoy buys their county (some sources say 1401; he settles all claims by 1424). Now Savoy surrounds Geneva and tries to control the city."
    ],
    "layers": [
     {
      "name": "Bishop of Geneva",
      "kind": "lord",
      "lord": "bishop",
      "label": "Bishop of Geneva: city and mandements of Peney and Jussy",
      "sel": {
       "munis": [
        6621,
        6638,
        6620,
        6637,
        6626,
        6624,
        6610
       ]
      }
     },
     {
      "name": "Saint-Victor and chapter",
      "kind": "lord",
      "lord": "abbey",
      "label": "Villages of the priory of Saint-Victor and the cathedral chapter",
      "sel": {
       "munis": [
        6609,
        6603,
        6611,
        6622,
        6617,
        6642,
        6612
       ]
      }
     },
     {
      "name": "Pays de Gex",
      "kind": "lord",
      "lord": "noble",
      "label": "Pays de Gex (lords of Gex, under Savoy)",
      "sel": {
       "munis": [
        6644,
        6615,
        6606,
        6623,
        6634,
        6643,
        6630
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "County of Savoy, with the Genevois bought in 1402",
      "sel": {
       "cantons": [
        "GE"
       ]
      }
     }
    ]
   },
   {
    "year": 1536,
    "title": "Independent city-republic",
    "text": [
     "In 1526 Geneva makes an alliance (Burgrecht) with Bern and Fribourg. In 1536 the bishop leaves, the city takes the Reformation and becomes an independent republic, an ally of the Swiss.",
     "Geneva takes the bishop's rural lands: the mandements (districts) of Peney and Jussy, and Céligny. It also has rights in villages of the Saint-Victor priory and the cathedral chapter, but Savoy claims many of them.",
     "The lands around them belong to Savoy or, from 1601, to France (Pays de Gex). Many Genevan villages are enclaves."
    ],
    "layers": [
     {
      "name": "Mixed-rights villages",
      "kind": "other",
      "label": "Villages where Geneva shares rights with Savoy (Saint-Victor, chapter)",
      "sel": {
       "munis": [
        6609,
        6603,
        6611,
        6622,
        6617,
        6642,
        6612
       ]
      }
     },
     {
      "name": "Rural mandements",
      "kind": "subject",
      "label": "Rural mandements of Peney and Jussy, and Céligny: ruled by the city",
      "sel": {
       "munis": [
        6638,
        6620,
        6637,
        6626,
        6624,
        6610
       ]
      }
     },
     {
      "name": "City of Geneva",
      "kind": "core",
      "label": "City-republic of Geneva (ally of the Swiss)",
      "sel": {
       "munis": [
        6621
       ]
      }
     },
     {
      "name": "Pays de Gex",
      "kind": "other",
      "label": "Pays de Gex: Bern 1536–1564, then Savoy, French from 1601",
      "sel": {
       "munis": [
        6644,
        6615,
        6606,
        6623,
        6634,
        6643,
        6630
       ]
      }
     },
     {
      "name": "Savoy",
      "kind": "lord",
      "lord": "savoy",
      "label": "Duchy of Savoy",
      "sel": {
       "cantons": [
        "GE"
       ]
      }
     }
    ]
   },
   {
    "year": 1798,
    "title": "Annexed by France",
    "text": [
     "In 1749 and 1754 treaties with France and Sardinia (Savoy) exchange land. Geneva's rural lands become a little more compact.",
     "In 1798 France annexes Geneva. The city becomes the capital of the French département (province) of Léman until 1813. The land around it is also French."
    ],
    "layers": [
     {
      "name": "Geneva",
      "kind": "core",
      "label": "Geneva: French, capital of the département of Léman",
      "sel": {
       "munis": [
        6621,
        6609,
        6603,
        6611,
        6622,
        6617,
        6642,
        6612,
        6638,
        6620,
        6637,
        6626,
        6624,
        6610
       ]
      }
     },
     {
      "name": "Gex and Savoy",
      "kind": "other",
      "label": "Pays de Gex and Savoy: also French at this time",
      "sel": {
       "cantons": [
        "GE"
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "Canton, with communes from France",
    "text": [
     "Geneva is free again at the end of 1813. In 1815 it joins the Confederation as a canton.",
     "By the Second Treaty of Paris of 20 November 1815, France gives Geneva all or part of Versoix, Collex-Bossy, Le Grand-Saconnex, Pregny, Vernier and Meyrin. Now Geneva touches Vaud and Switzerland by land."
    ],
    "layers": [
     {
      "name": "Communes from France",
      "kind": "core",
      "label": "Communes from the Pays de Gex (France), 1815",
      "sel": {
       "munis": [
        6644,
        6615,
        6606,
        6623,
        6634,
        6643,
        6630
       ]
      }
     },
     {
      "name": "Old Geneva",
      "kind": "core",
      "label": "Old Genevan territory",
      "sel": {
       "munis": [
        6621,
        6609,
        6603,
        6611,
        6622,
        6617,
        6642,
        6612,
        6638,
        6620,
        6637,
        6626,
        6624,
        6610
       ]
      }
     },
     {
      "name": "Savoyard communes",
      "kind": "lord",
      "label": "Still Savoy (Kingdom of Sardinia) until 1816",
      "sel": {
       "cantons": [
        "GE"
       ]
      },
      "lord": "savoy"
     }
    ]
   },
   {
    "year": 1816,
    "title": "Communes from Savoy",
    "text": [
     "By the Treaty of Turin of 16 March 1816, the King of Sardinia gives Geneva 24 communes, all or in part, for example Carouge, Lancy, Bernex, Chêne-Thônex and Hermance.",
     "Together, the new communes from France and Savoy are called the 'communes réunies' (joined communes). Since then, the borders of the canton have not changed."
    ],
    "layers": [
     {
      "name": "Communes from France",
      "kind": "core",
      "label": "Communes réunies from France (1815)",
      "sel": {
       "munis": [
        6644,
        6615,
        6606,
        6623,
        6634,
        6643,
        6630
       ]
      }
     },
     {
      "name": "Old Geneva",
      "kind": "core",
      "label": "Old Genevan territory",
      "sel": {
       "munis": [
        6621,
        6609,
        6603,
        6611,
        6622,
        6617,
        6642,
        6612,
        6638,
        6620,
        6637,
        6626,
        6624,
        6610
       ]
      }
     },
     {
      "name": "Communes from Savoy",
      "kind": "core",
      "label": "Communes réunies from Savoy (1816)",
      "sel": {
       "cantons": [
        "GE"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007398/2017-05-30/",
   "https://hls-dhs-dss.ch/fr/articles/030186/",
   "https://statistique.ge.ch/tel/publications/1958/hors_collection/documents_historiques/hc-ocstat-1958-02.pdf",
   "https://hls-dhs-dss.ch/de/articles/008568/2007-07-11/",
   "https://hls-dhs-dss.ch/textes/d/D6641.php"
  ],
  "notes": "Old Genevan territory drawn as Genève, Satigny, Dardagny, Russin, Jussy, Gy, Céligny, Genthod, Cologny, Vandoeuvres, Chêne-Bougeries, Cartigny, Avully and Chancy; several communes réunies were ceded only in part, so whole communes are approximate. The 1536 split between the mandements and the mixed-rights villages (Saint-Victor and chapter lands) is simplified; the 1749/1754 exchanges are not drawn separately. Bellevue (split from Collex-Bossy in 1855) counted with the French communes. In 1402 the bishop's mandements and the Saint-Victor/chapter villages are drawn with the same communes as in 1536."
 },
 {
  "canton": "JU",
  "name": "Jura",
  "summary": "The Jura was the land of the Prince-Bishop of Basel, became French in 1793–1797, went to Bern in 1815 and became its own canton in 1979, with Moutier joining in 2026.",
  "stops": [
   {
    "year": 999,
    "title": "The bishop gets Moutier-Grandval",
    "text": [
     "In 999 Rudolf III, the last king of Burgundy, gives the abbey of Moutier-Grandval and its land to the bishop of Basel. This is the start of the bishop's state in the Jura.",
     "The rest of the Jura is part of the Kingdom of Burgundy. Porrentruy and the Ajoie belong to the church of Besançon."
    ],
    "layers": [
     {
      "name": "Moutier-Grandval",
      "kind": "lord",
      "lord": "bishop",
      "label": "Abbey land of Moutier-Grandval: given to the bishop of Basel",
      "sel": {
       "munis": [
        6831,
        681,
        683,
        687,
        690,
        691,
        692,
        694,
        701,
        716,
        704,
        706,
        707,
        708,
        709,
        711,
        696,
        703,
        713,
        717,
        715
       ]
      }
     },
     {
      "name": "Kingdom of Burgundy",
      "kind": "lord",
      "lord": "empire",
      "label": "Kingdom of Burgundy",
      "sel": {
       "cantons": [
        "JU"
       ],
       "districts": [
        241
       ]
      }
     }
    ]
   },
   {
    "year": 1283,
    "title": "The bishop takes Porrentruy",
    "text": [
     "In the 1100s and 1200s the bishop gets more land: Saint-Ursanne in the early 1100s, the Hasenburg lands in 1241 and the lands of the counts of Pfirt (Ferrette) in 1271.",
     "In 1283, with help from King Rudolf of Habsburg, the bishop takes Porrentruy and the Ajoie from the count of Montbéliard. The bishop gets the Franches-Montagnes about 1360."
    ],
    "layers": [
     {
      "name": "Franches-Montagnes",
      "kind": "other",
      "label": "Franches-Montagnes: to the bishop about 1360",
      "sel": {
       "districts": [
        2602
       ]
      }
     },
     {
      "name": "Prince-Bishopric",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel",
      "sel": {
       "cantons": [
        "JU"
       ],
       "districts": [
        241,
        1302
       ],
       "munis": [
        371,
        372
       ]
      }
     }
    ]
   },
   {
    "year": 1792,
    "title": "The Prince-Bishopric before 1792",
    "text": [
     "For many centuries the Jura belongs to the Prince-Bishopric of Basel (a state ruled by the bishop of Basel). The bishop lives in Porrentruy.",
     "The north is part of the Holy Roman Empire. The south has alliances with Bern, Fribourg and Solothurn and is linked to the Swiss. In April 1792 the bishop flees from the French army."
    ],
    "layers": [
     {
      "name": "Southern part",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: southern part, allied with Swiss cantons",
      "sel": {
       "districts": [
        241
       ],
       "munis": [
        6831,
        371,
        372
       ]
      }
     },
     {
      "name": "Northern part",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: northern part (today's canton of Jura)",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: Laufen and Birseck",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     }
    ]
   },
   {
    "year": 1793,
    "title": "France takes the north",
    "text": [
     "In December 1792 the Rauracian Republic is declared in the north. On 23 March 1793 France annexes it as the department of Mont-Terrible.",
     "In 1797 France also takes the south and Biel. In 1800 the land becomes part of the department of Haut-Rhin."
    ],
    "layers": [
     {
      "name": "Southern part",
      "kind": "lord",
      "lord": "bishop",
      "label": "Prince-Bishop of Basel: southern part, until 1797",
      "sel": {
       "districts": [
        241
       ],
       "munis": [
        6831,
        371,
        372
       ]
      }
     },
     {
      "name": "Mont-Terrible",
      "kind": "other",
      "label": "French department of Mont-Terrible",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "other",
      "label": "Laufen and Birseck: also French",
      "sel": {
       "districts": [
        1302
       ],
       "munis": [
        2761,
        2762,
        2763,
        2768,
        2771,
        2772,
        2773,
        2774,
        2775
       ]
      }
     }
    ]
   },
   {
    "year": 1815,
    "title": "The Jura goes to Bern",
    "text": [
     "In 1815 the Congress of Vienna gives most of the old Prince-Bishopric to the canton of Bern. Bern takes it over on 21 December 1815.",
     "Birseck goes to Basel. For more than 150 years the Jura is a part of Bern."
    ],
    "layers": [
     {
      "name": "Jura",
      "kind": "core",
      "label": "North Jura: part of Bern",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     },
     {
      "name": "South and Laufen",
      "kind": "other",
      "label": "Bernese Jura, Biel and Laufen: also part of Bern",
      "sel": {
       "districts": [
        241,
        242,
        1302
       ]
      }
     }
    ]
   },
   {
    "year": 1979,
    "title": "The new canton of Jura",
    "text": [
     "Many people in the north want to leave Bern. On 23 June 1974 the north votes for its own canton. In 1975 the three southern districts vote to stay with Bern.",
     "On 1 January 1979 the canton of Jura starts. It is the 26th canton. It has the districts of Delémont, Porrentruy and Franches-Montagnes."
    ],
    "layers": [
     {
      "name": "Moutier",
      "kind": "other",
      "label": "Moutier: stays with Bern",
      "sel": {
       "munis": [
        6831
       ]
      }
     },
     {
      "name": "Jura",
      "kind": "core",
      "label": "Canton of Jura since 1979",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     }
    ]
   },
   {
    "year": 2026,
    "title": "Moutier joins Jura",
    "text": [
     "In 1996 the small village of Vellerat moves from Bern to Jura. Today it is part of Courrendlin.",
     "On 28 March 2021 the town of Moutier votes to join Jura. It moves on 1 January 2026."
    ],
    "layers": [
     {
      "name": "Moutier",
      "kind": "core",
      "label": "Moutier: part of Jura since 2026",
      "sel": {
       "munis": [
        6831
       ]
      }
     },
     {
      "name": "Jura",
      "kind": "core",
      "label": "Canton of Jura",
      "sel": {
       "cantons": [
        "JU"
       ]
      }
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/007399/"
  ],
  "notes": "The line between the north (Empire, French from 1793) and the south (Swiss allies, French from 1797) is drawn along today's canton border; in reality some villages of the Moutier area south of today's border and some of today's Jura villages (e.g. around Courrendlin) were on the other side. Biel is drawn with the southern part. Vellerat (1996) cannot be drawn alone. 999: the abbey land is drawn as Moutier and the valleys of the old Prévôté (Grandval, Tavannes valley); its real extent is not known exactly. 1283: the whole later Prince-Bishopric is drawn, although some parts (e.g. Erguel, Laufen) came to the bishop at dates not checked."
 }
];
