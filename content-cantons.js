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
     "The Emperor then takes the rights back. Zurich becomes an imperial city (a city directly under the Emperor). The Fraumünster and Grossmünster abbeys are also directly under the Emperor.",
     "The countryside belongs to many noble families. Among the strongest are the counts of Kyburg and the barons of Regensberg."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Zwar schied 1098 die Reichsvogtei Zürich aus dem Herzogtum aus und gelangte in den Besitz der Zähringer",
      "supports": "From 1098 the Zähringen hold the Reichsvogtei over Zurich"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Nach dem Aussterben der Zähringer zog Friedrich II. als deutscher König 1218 die Reichsvogtei Zürich wieder an sich",
      "supports": "The Zähringen die out in 1218 and the king takes the rights back"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "galt als reichsfrei (Reichsunmittelbarkeit), ebenso die Stifte Grossmünster und Fraumünster",
      "supports": "Zurich and the two abbeys are directly under the Empire (map layer imperial city)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "die Herzoge von Zähringen 1218, die Grafen von Kyburg 1264",
      "supports": "Counts of Kyburg among the noble families (map layer Kyburg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die rund 25 Freiherrenfamilien wie die von Regensberg, von Eschenbach, von Wädenswil, von Sellenbüren und von Teufen",
      "supports": "Many noble families, among them the barons of Regensberg (map layer Regensberg)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die Habsburger sicherten sich nach 1264 das Erbe der Kyburger und besiegten 1267-1268 zusammen mit der Stadt Zürich die Regensberger.",
      "supports": "Kyburgs die out 1264, Habsburg takes their lands; 1267–1268 Habsburg and Zurich defeat Regensberg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Um 1300 verfügte Habsburg in weiten Teilen des späteren Kantons über die wichtigen Herrschaftsrechte",
      "supports": "By about 1300 Habsburg holds the main rights in most of the later canton (map layer Habsburg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Mit Ausnahme des 1415 eroberten zürcherischen Freiamts wurde das Gebiet durch Kauf oder Pfandschaft erworben.",
      "supports": "Later Zurich buys these lands one by one"
     }
    ]
   },
   {
    "year": 1351,
    "title": "The city joins the Swiss",
    "text": [
     "In 1351 the city of Zurich makes an alliance with Uri, Schwyz and Unterwalden (and Lucerne). At this time Zurich rules almost no land outside its walls.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "verbündete sich 1351 mit den Waldstätten Uri, Schwyz und Unterwalden sowie Luzern",
      "supports": "In 1351 Zurich makes an alliance with Uri, Schwyz, Unterwalden and Lucerne (map layer City)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die Reichsstadt Zürich sicherte sich von 1350 bis zur Reformation ein Territorium, das im Wesentlichen dem späteren Kanton entsprach.",
      "supports": "Zurich builds its territory only after 1350"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Bis um 1400 gelangten vor allem Vogteien in der Umgebung der Stadt und am See in Zürichs Hand: 1358 Zollikon",
      "supports": "Zurich buys Zollikon in 1358"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1402 Greifensee von den Grafen von Toggenburg, 1408 Grüningen von den habsburgischen Dienstleuten Gessler, 1409 Regensberg (mit Bülach) von den Habsburgern",
      "supports": "Greifensee 1402, Grüningen 1408, Regensberg and Bülach 1409 (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1424-1442 und erneut 1452 Kyburg von den Habsburgern, 1434 Andelfingen von den Landenbergern",
      "supports": "Kyburg 1424, lost, back for good in 1452 (map layer Kyburg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Mit Ausnahme des 1415 eroberten zürcherischen Freiamts",
      "supports": "Zurich takes the Knonauer Amt (its Freiamt) in 1415 (map layer Knonauer Amt)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1385 Thalwil, 1393-1440 die Höfe, 1400 Erlenbach",
      "supports": "Zurich holds the Höfe until 1440; villages near the city and on the lake (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1405 Männedorf und 1406 Horgen",
      "supports": "Villages on the lake bought up to 1406"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001268/",
      "title": "HLS: Dörflingen",
      "quote": "1434 an die Stadt Zürich verpfändet",
      "supports": "Dörflingen is ruled by Zurich since 1434 (map layer Dörflingen)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die fehlenden staatspolitischen Rechte wurden erst nach der Französischen Revolution zum Problem.",
      "supports": "The people of the bailiwicks have no vote"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008296/",
      "title": "HLS: Baden (Grafschaft)",
      "quote": "Als gemeine Herrschaft wurde die Grafschaft Baden von den sieben an der Eroberung beteiligten Orten",
      "supports": "Since 1415 Zurich shares the County of Baden with other cantons (map layer)"
     }
    ]
   },
   {
    "year": 1615,
    "title": "Zurich at its largest",
    "text": [
     "Zurich buys Winterthur in 1467, Stein am Rhein in 1484, Eglisau in 1496 and Wädenswil in 1549. In 1615 it buys Sax-Forstegg in the Rhine valley.",
     "From 1460 Zurich shares the rule of Thurgau with other cantons. In Rheinau, with its abbey, the governor of Thurgau holds the high court.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Winterthur und Stein am Rhein wurden 1467 und 1484 zürcherisch",
      "supports": "Winterthur 1467, Stein am Rhein 1484 (map layer Stein am Rhein)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1434 Andelfingen von den Landenbergern und 1496 Eglisau von den Gradnern",
      "supports": "Eglisau 1496"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "1549 die Herrschaft Wädenswil",
      "supports": "Wädenswil 1549"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007647/",
      "title": "HLS: Sax-Forstegg",
      "quote": "1615-1798 Zürcher Landvogtei",
      "supports": "Sax-Forstegg ruled by Zurich from 1615 (map layer Sax-Forstegg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "1460-1798 gemeine Herrschaft der sieben bzw. acht alten Orte Zürich, Luzern, Uri, Schwyz, Unterwalden, Zug, Glarus",
      "supports": "From 1460 Zurich shares Thurgau (map layer Thurgau)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000032/",
      "title": "HLS: Rheinau (Gemeinde)",
      "quote": "Die Blutgerichtsbarkeit wurde allerdings von den Schirmvögten des Klosters bzw. ab 1460 vom eidgenössischen Landvogt im Thurgau ausgeübt.",
      "supports": "In Rheinau the governor of Thurgau holds the high court (map layer Rheinau)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die fehlenden staatspolitischen Rechte wurden erst nach der Französischen Revolution zum Problem.",
      "supports": "The country people have no vote"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Die Stadt Stein am Rhein und die Dörfer Hemishofen und Ramsen im oberen Kantonsteil kamen 1798 zu Schaffhausen, wie auch das bisher zürcherische Dörflingen",
      "supports": "In 1798 Stein am Rhein and Dörflingen go to Schaffhausen (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007647/",
      "title": "HLS: Sax-Forstegg",
      "quote": "1798-1803 Teil des Kt. Linth, 1803-31 des Bez. Sargans im Kt. St. Gallen",
      "supports": "Sax goes to Linth in 1798 and to St. Gallen in 1803 (map layer Sax)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "während die katholische Gemeinde Rheinau und das paritätische Dietikon dazustiessen",
      "supports": "In 1803 Zurich gets Rheinau and Dietikon (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008296/",
      "title": "HLS: Baden (Grafschaft)",
      "quote": "dafür mussten Hüttikon, Oetwil an der Limmat, Dietikon und Schlieren an den Kanton Zürich abgetreten werden",
      "supports": "Dietikon and nearby villages come from the old County of Baden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Die Mediationsakte mit der Zürcher Kantonsverfassung (19. Kapitel) von 1803 stellt die Basis des modernen Kantons Zürich dar.",
      "supports": "In 1803 the Act of Mediation fixes the canton (map layer Canton of Zurich)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Februar 1798 anerkannten der Kleine und Grosse Rat die Freiheit und Gleichheit zwischen Stadt und Landschaft.",
      "supports": "In 1798 the country people get equal rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Ab 1351 eidgenössischer Ort, 1798-1803 Kanton der Helvetischen Republik",
      "supports": "In 1798 the old city-state ends"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Zurich have changed only by very small corrections."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Durch Paktieren mit Anwärtern auf den deutschen Königsthron erhielten sie 1127 das Rektorat (Stellvertretung des Königs) in Burgund.",
      "supports": "The dukes of Zähringen rule much of the land between the Jura and the Alps (as the king's rectors in Burgundy)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "erfolgten im Aareraum die Stadtgründungen von Burgdorf, Murten, Thun und Bern, vermutlich alle unter dem letzten Zähringer, Berchtold V.",
      "supports": "The Zähringen found towns such as Burgdorf, Thun and Bern (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000209/",
      "title": "HLS: Bern (Gemeinde)",
      "quote": "Die ältesten Quellen zur Stadtgründung um 1191 (?) sind die Cronica de Berno (erste Hälfte 14. Jh.) und die Chronik Konrad Justingers",
      "supports": "The usual (traditional) date for the founding of Bern is 1191"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000209/",
      "title": "HLS: Bern (Gemeinde)",
      "quote": "Die Aareschleife, auf der Bern entstand, gehörte zum Königshof Bümpliz.",
      "supports": "Bern stands on a bend of the Aare river"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "die Eigengüter gingen an die Kyburger, die Ämter und Lehen fielen zurück an das Reich",
      "supports": "In 1218 the last duke of Zähringen dies; the Kyburg counts get his own lands, the rest goes back to the Empire"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Bern erwarb mit Burgdorf und Thun die Zentren des kyburgischen Besitzes",
      "supports": "Burgdorf and Thun are Kyburg land (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "das von 1218/1220 an dem deutschen König unmittelbar unterstellte Bern",
      "supports": "Bern now stands directly under the king (imperial town)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Nach der königlichen Bestätigung der Reichspfandschaften Laupen und Hasli 1348",
      "supports": "Laupen is imperial land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "aber auch bei Savoyen (Schirmherrschaft in Vertretung des Reichs 1256, 1268, 1291)",
      "supports": "From 1256 the counts of Savoy protect Bern for some years"
     }
    ]
   },
   {
    "year": 1353,
    "title": "A small city-state joins",
    "text": [
     "In 1353 Bern makes a permanent alliance with Uri, Schwyz and Unterwalden. This links Bern to the Confederation.",
     "At this time Bern rules only a small area: the city, four parishes around it, Laupen and the Hasli valley (Oberhasli). Bern holds Laupen and Hasli as a pledge (land given as security for a loan) from the king.",
     "Bern also has strong ties with nearby lords and towns. For example, it is the overlord of Thun, but it does not rule the town directly yet."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "das erste unbefristete Bündnis Berns mit Uri, Schwyz und Unterwalden von 1353",
      "supports": "In 1353 Bern makes a permanent alliance with Uri, Schwyz and Unterwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Die Stadt erwarb um 1300 die vier umliegenden Kirchspiele Bolligen, Vechigen, Stettlen und Muri",
      "supports": "Bern rules the city and four parishes around it (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "1334 wandte sich Bern gegen die Freiherren von Weissenburg (Streit um Mülenen, Besetzung von Wimmis und Unspunnen), erwarb deren Pfandherrschaft Hasli (Oberhasli)",
      "supports": "Bern holds Hasli as a pledge since 1334"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Nach der königlichen Bestätigung der Reichspfandschaften Laupen und Hasli 1348",
      "supports": "Bern holds Laupen and Hasli as pledges of the Empire (confirmed 1348)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Es nötigte Eberhard II. von Kyburg nach dem Thuner Brudermord ins bernische Burgrecht und erwarb die Oberlehensherrschaft über Thun.",
      "supports": "Bern has ties with nearby lords and is the overlord of Thun"
     }
    ]
   },
   {
    "year": 1415,
    "title": "Fast growth and the Aargau",
    "text": [
     "After 1384 Bern grows very fast. It takes Burgdorf and Thun in 1384, the upper Simmental, Unterseen, Nidau and Büren in 1389, Frutigen in 1400 and the Emmental in 1406–1408.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Ein eidgenössischer Schiedsspruch beendete 1384 den Burgdorferkrieg: Bern erwarb mit Burgdorf und Thun die Zentren des kyburgischen Besitzes",
      "supports": "Bern takes Burgdorf and Thun in 1384"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Im Frieden von 1389 erhielt Bern das Obersimmental, Unterseen, Oberhofen mit Balm, Unspunnen, Nidau, Tessenberg, Ligerz, Twann und Büren an der Aare.",
      "supports": "In 1389 Bern gets the upper Simmental, Unterseen, Nidau and Büren"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "1400 Frutigen, 1407 Wangen an der Aare, 1408 Trachselwald und Huttwil, 1412 Oltigen, 1413 (gemeinsam mit Solothurn) Bipp und Bechburg",
      "supports": "Frutigen 1400; Trachselwald (Emmental) 1408; Bipp with Solothurn 1413"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "die Bern 1406 rechts der Aare, 1408 im Emmental und 1426 im Buchsgau erworben hatte",
      "supports": "Bern gets the Emmental in 1406–1408"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "besetzte den grössten Teil des Aargaus und errichtete Vogteien (Berner Aargau)",
      "supports": "In 1415 Bern conquers most of the Aargau and rules it as bailiwicks"
     }
    ]
   },
   {
    "year": 1536,
    "title": "Bern takes Vaud",
    "text": [
     "In the 1400s Bern adds more land, for example Gümmenen in 1467. In 1463 Bern gets Bipp alone. In the Burgundian Wars (1474–1476) Bern takes Erlach and Aigle, and, together with Fribourg, Murten, Grandson, Orbe and Echallens.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "1467 kam das freiburgische Gümmenen an Bern",
      "supports": "Gümmenen comes to Bern in 1467"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "1463 teilten Bern und Solothurn die 1413 erworbenen Herrschaften Bipp und Bechburg samt der Landgrafschaft Buchsgau; Bipp fiel an Bern.",
      "supports": "In 1463 Bern gets Bipp alone"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "So erlangte Bern 1474-1476 in den Burgunderkriegen die Herrschaften Erlach und Aigle, gemeinsam mit Freiburg zudem Murten, Grandson, Orbe und Echallens.",
      "supports": "In the Burgundian Wars Bern takes Erlach and Aigle, and with Fribourg Murten, Grandson, Orbe and Echallens"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "zusammen mit Bern 1423 die gemeine Herrschaft Grasburg zu erwerben",
      "supports": "Schwarzenburg (Grasburg) is shared with Fribourg (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "durch die militärische, aber kampflose Angliederung der Waadt (1536)",
      "supports": "In 1536 Bern takes Vaud without a fight"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Zum Stadtstaat Bern gehörten ab 1415 Teile des heutigen Kantons Aargau (Berner Aargau) und ab 1536 der heutige Kanton Waadt.",
      "supports": "Vaud is Bernese subject land from 1536; Bernese Aargau since 1415 (map layers)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008148/",
      "title": "HLS: Greyerz (Grafschaft, Bezirk)",
      "quote": "Aufgrund der Verschuldung des Grafen sprach die eidgenössische Tagsatzung 1554 den Konkurs der Grafschaft aus, Freiburg und Bern teilten sie 1555 unter sich auf.",
      "supports": "The last count of Gruyère cannot pay his debts; Bern and Fribourg divide his county in 1555"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008148/",
      "title": "HLS: Greyerz (Grafschaft, Bezirk)",
      "quote": "Die Gemeinden Saanen, Rougemont, Château-d'Œx und Rossinière gingen an Bern",
      "supports": "Bern gets the upper part: Saanen and the Pays-d'Enhaut"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "die Position Berns – des grössten Stadtstaats nördlich der Alpen –",
      "supports": "Bern is the largest city-state north of the Alps"
     }
    ]
   },
   {
    "year": 1798,
    "title": "The Helvetic Republic splits Bern",
    "text": [
     "In 1798 France conquers Switzerland and makes the Helvetic Republic. Bern loses Vaud and the Aargau. Both become their own cantons.",
     "The Oberland also becomes a separate canton, with Thun as its capital. Bern keeps only its middle part.",
     "France had already taken the north of the old Prince-Bishopric of Basel in 1793 and the south in 1797. In February 1798 French troops also take Biel."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Mit dem Franzoseneinfall im Frühjahr 1798 brach die alte Republik Bern zusammen.",
      "supports": "In 1798 France conquers Bern (and Switzerland)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "mit der Waadt und dem Aargau verlor Bern grosse Teile des bisherigen Territoriums",
      "supports": "Bern loses Vaud and the Aargau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "1798-1803 die helvetischen Kantone Baden und Aargau",
      "supports": "The Aargau becomes its own canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008631/",
      "title": "HLS: Léman (Kanton)",
      "quote": "Er bestand aus der von Bern abgetrennten Waadt",
      "supports": "Vaud becomes its own canton (Léman)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "das bis 1803 als helvetischer Kanton Oberland mit der Hauptstadt Thun bestand",
      "supports": "The Oberland becomes a separate canton with Thun as capital"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "liess sie sich am 23. März 1793 den Anschluss an Frankreich aufzwingen",
      "supports": "France takes the north of the Prince-Bishopric in 1793"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "im Dezember um die nun ebenfalls besetzten südlichen Gebiete des Fürstbistums erweitert",
      "supports": "France takes the south of the Prince-Bishopric in (December) 1797"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000222/",
      "title": "HLS: Biel/Bienne",
      "quote": "Am 6. Februar 1798 erfolgte der Einmarsch der französischen Truppen durch das offene Obertor",
      "supports": "French troops take Biel in February 1798"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Im Februar 1803 trat die Mediationsakte in Kraft",
      "supports": "In 1803 the Act of Mediation comes into force (end of the Helvetic Republic)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "den Verlust der Waadt und des Aargaus, vereinigte ihn aber wieder mit dem Oberland",
      "supports": "The Oberland goes back to Bern; Bern does not get Vaud and Aargau back"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "1815 musste der Kanton Bern endgültig auf die Waadt und den Aargau verzichten.",
      "supports": "Bern finally gives up Vaud and the Aargau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Dafür wies ihm der Wiener Kongress den grössten Teil des einstigen Fürstbistums Basel zu (Berner Jura)",
      "supports": "The Congress of Vienna gives most of the old Prince-Bishopric of Basel to Bern, as a replacement"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000222/",
      "title": "HLS: Biel/Bienne",
      "quote": "als Biel schliesslich 1815 dem Kanton Bern als Teil des Oberamts Nidau angegliedert wurde",
      "supports": "Biel comes to Bern in 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008482/",
      "title": "HLS: Laufen (BL, Bezirk)",
      "quote": "Von 1815 an war das Laufental bernisch",
      "supports": "The Laufen valley comes to Bern in 1815"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Am 23. Juni 1974 votierte er mit 74% Ja-Stimmen für die Schaffung des Kantons Jura.",
      "supports": "In 1974 the north of the Jura votes for its own canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Mit der Abstimmung vom 16. März 1975, in dem sich die drei südjurassischen Amtsbezirke für den Verbleib bei Bern entschieden",
      "supports": "In 1975 the three southern districts vote to stay with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Seit dem 1. Januar 1979 an bildet der Kanton Jura den 26. souveränen Teilstaat der Eidgenossenschaft.",
      "supports": "On 1 January 1979 the canton of Jura starts"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Die Grenzen des heutigen Kantons entsprechen mit geringen Abweichungen jenen der Amtsbezirke Pruntrut, Delsberg und der Freiberge in der Zeit 1815-1978.",
      "supports": "Bern loses the districts of Porrentruy, Delémont and Franches-Montagnes"
     }
    ]
   },
   {
    "year": 2026,
    "title": "Laufen and Moutier leave",
    "text": [
     "The Laufen district was cut off from the rest of Bern by the new canton of Jura. In 1989 it voted to join Basel-Landschaft, and it moved in 1994.",
     "In 1996 the small village of Vellerat moved to Jura. In 2021 the town of Moutier voted to join Jura, and it moved in 2026."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "Durch die Gründung des Kantons Jura wurde das Laufental zu einer bernischen Exklave.",
      "supports": "The Laufen district is cut off from the rest of Bern by the canton of Jura"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "die Ende 1989 knapp zugunsten eines Anschlusses an das Baselbiet ausfiel, sodass der Amtsbezirk Laufen auf den 1. Januar 1994 aus dem Kanton Bern ausschied",
      "supports": "In 1989 Laufen votes to join Basel-Landschaft and moves in 1994"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "die Gemeinden Vellerat (1996) und Moutier (2026) zum Kanton Jura",
      "supports": "Vellerat moves to Jura in 1996, Moutier in 2026"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "am 28. März 2021 wiederholt, wobei die Bevölkerung von Moutier mit 54,9% einem Wechsel von Bern zum Kanton Jura erneut zustimmte (ab 2026 in Kraft)",
      "supports": "In 2021 Moutier votes to join Jura"
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
     "The monastery of St. Leodegar in Lucerne depends on Murbach abbey in Alsace. The town of Lucerne grows next to it; it is founded by the abbot of Murbach or by the lords of Rothenburg.",
     "The countryside is part of the Aargau. The counts of Lenzburg are the strongest lords there; their family founded the monastery of Beromünster. The lords of Wolhusen hold the Entlebuch (about)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Das Kloster St. Leodegar zu Luzern, von regionalen Grundherren im Frühmittelalter reich ausgestattet, war mittlerweile in die Abhängigkeit der Abtei Murbach",
      "supports": "St. Leodegar in Lucerne depends on Murbach abbey (map layer Lucerne)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "stehen lediglich zwei andere Gründungen gegenüber: Luzern (Abt von Murbach bzw. Vögte von Rothenburg)",
      "supports": "The town is founded by the abbot of Murbach or the lords of Rothenburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Im Hochmittelalter lag das Gebiet des späteren luzernischen Territorialstaats grösstenteils innerhalb der historischen Landschaft Aargau.",
      "supports": "The countryside is part of the Aargau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Als bedeutendste Herren treten die Grafen von Lenzburg hervor",
      "supports": "The counts of Lenzburg are the strongest lords (map layer Countryside)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Ihre aargauischen Vorfahren hatten das Stift Beromünster, ihre rätischen Ahnen das Kloster Schänis gegründet.",
      "supports": "Their family founded Beromünster"
     }
    ],
    "uncertain": [
     "The lords of Wolhusen hold the Entlebuch around 1150."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "die sich schnell auflöste, als beide Linien um 1172 fast gleichzeitig erloschen",
      "supports": "The Lenzburg line dies out in about 1172"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Richensee und Sursee im heutigen Kanton Luzern) und vier habsburgischen (Bremgarten, Brugg, Meienberg im Kanton Aargau und Sempach im Kanton Luzern)",
      "supports": "Kyburgs and Habsburgs found towns such as Sursee, Richensee and Sempach"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Nach dem Aussterben der kyburgischen Hauptlinie (1264) blieben die Habsburger als einzige Vormacht zurück",
      "supports": "After 1264 the Habsburgs are the main power (map layer Countryside)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "kauften 1291 die Rechte des Klosters Murbach an der Stadt Luzern sowie an den grundherrschaftlichen Höfen rund um die Stadt",
      "supports": "In 1291 they buy Murbach's rights over the town of Lucerne (map layer Town of Lucerne)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Herrschaftliche Mittelpunkte waren Sursee, Sempach, Willisau, Kasteln, Wolhusen, Beromünster, Richensee, Meienberg, Rothenburg, Luzern und Neu-Habsburg.",
      "supports": "They rule from centres such as Sursee, Sempach, Willisau, Wolhusen, Rothenburg and Lucerne"
     }
    ]
   },
   {
    "year": 1332,
    "title": "City joins the forest cantons",
    "text": [
     "In 1332 the city of Lucerne makes a league with Uri, Schwyz and Unterwalden. At this time Lucerne does not yet rule land outside the town; it buys its first lordship, Weggis, only in 1380. The countryside around it belongs to the Habsburgs."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Der Bund mit den drei Waldstätten von 1332, der Luzerns Zukunft bestimmen sollte",
      "supports": "In 1332 Lucerne makes a league with Uri, Schwyz and Unterwalden (map layer City of Lucerne)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Der Erwerb von Herrschaftsrechten setzte 1380 mit dem Kauf der Vogtei Weggis ein.",
      "supports": "Lucerne rules no land outside the town before 1380"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Nach dem Aussterben der kyburgischen Hauptlinie (1264) blieben die Habsburger als einzige Vormacht zurück",
      "supports": "The countryside belongs to the Habsburgs (map layer Countryside)"
     }
    ]
   },
   {
    "year": 1415,
    "title": "A city-state with a large countryside",
    "text": [
     "Lucerne begins to buy land in 1380 with Weggis. Its fastest growth comes after the Sempach War (1386–1389), mostly by purchase and pledge, for example Merenschwand (1394) and the Entlebuch (1395 and 1405).",
     "In 1415 the Habsburgs lose their lands in the Aargau. Their last rights, also over the abbey of Beromünster, go to Lucerne. The countryside is a subject land: bailiffs (governors) from the city rule it. Only the small towns of Sursee and Sempach keep much self-rule.",
     "With other cantons, Lucerne also rules the Freie Ämter (Free Districts). Hitzkirch is part of them from 1425. By about 1480 Lucerne's land is mostly complete."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "1380 begann die territoriale Ausdehnung mit dem Erwerb des Amtes Weggis. Der grösste Expansionsschub erfolgte 1386-1415.",
      "supports": "Lucerne starts with Weggis in 1380; fastest growth from 1386"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "In Einzelfällen schloss Luzern mit den Bewohnern der Landschaft eigentliche Herrschaftsverträge (1394 mit den Vertretern des Amtes Merenschwand, 1395 und 1405 mit den Entlebuchern).",
      "supports": "Merenschwand (1394), the Entlebuch (1395 and 1405) (map layer Merenschwand)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Die übrigen Rechte des Hauses Habsburg, inklusive diejenigen über das Stift Beromünster",
      "supports": "In 1415 the last Habsburg rights, also over Beromünster, go to Lucerne"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Nur die Städte Sursee und Sempach blieben weitgehend autonom",
      "supports": "Bailiffs rule the countryside; Sursee and Sempach keep much self-rule (map layer Countryside)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008298/",
      "title": "HLS: Freie Ämter",
      "quote": "an die sechs Orte Zürich, Luzern, Schwyz, Unterwalden, Zug und Glarus",
      "supports": "Lucerne rules the Freie Ämter together with other cantons from 1415 (map layer Freie Ämter)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/009319/",
      "title": "HLS: Hitzkirch (Amt)",
      "quote": "1425 wurde der nördl. Teil, der zur Pfarrei H. gehörte, als ehemaliges österr. Amt den Gemeinen Orten und damit den Freien Ämtern zugesprochen.",
      "supports": "Hitzkirch is part of the Freie Ämter from 1425 (map layer Amt Hitzkirch)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Um 1480 war die Bildung des späteren Kantonsgebiets weitgehend abgeschlossen.",
      "supports": "By about 1480 Lucerne's land is mostly complete"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Jeder Bürger hatte fortan von Rechts wegen Zugang zu allen Ämtern und Berufen",
      "supports": "In 1798 the countryside gets equal rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "1803 erhielt Luzern das Amt Hitzkirch, das zum helvetischen Kanton Baden gehört hatte, und trat das Amt Merenschwand an den neu gebildeten Kanton Aargau ab.",
      "supports": "In 1803 Lucerne gets Hitzkirch from canton Baden; Merenschwand goes to Aargau (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007382/",
      "title": "HLS: Luzern (Kanton)",
      "quote": "Das seit 1803 unveränderte Kantonsgebiet unterteilt sich in fünf Ämter.",
      "supports": "Since then, the borders have not changed"
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
     "In 853 King Louis the German gives his lands and rights in Uri to the Fraumünster abbey in Zurich. It is not clear if the whole valley goes to the abbey.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "mit welcher der ostfränkische König Ludwig der Deutsche seine Güter sowie seine Herrschaftsrechte im pagellus Uroniae dem Fraumünster vermachte",
      "supports": "In 853 Louis the German gives his lands and rights in Uri to the Fraumünster"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Unklar bleibt, ob das ganze Tal damals in den Besitz des Zürcher Klosters überging",
      "supports": "It is not clear if the whole valley goes to the abbey"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Als Reichsvögte amtierten von ca. 920 bis 976 die Herzöge von Schwaben, von ca. 976 bis 1173 die Lenzburger, dann bis 1218 die Zähringer.",
      "supports": "Lenzburg about 976–1173, then Zähringen until 1218, as the king's governors (map layer Uri)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Ursern zählte grundherrschaftlich zum Kloster Disentis.",
      "supports": "Urseren belongs to the lands of Disentis abbey (map layer Urseren)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/",
      "title": "HLS: Urseren",
      "quote": "Von Ursern führt der Gotthardpass nach Süden, der Oberalppass nach Osten und der Furkapass nach Westen.",
      "supports": "Disentis lies on the other side of the Oberalp Pass"
     }
    ]
   },
   {
    "year": 1240,
    "title": "Directly under the Empire",
    "text": [
     "Later the counts of Habsburg hold rights over the people of Uri. King Henry (VII) buys these rights back from Count Rudolf of Habsburg. He puts Uri directly under the Empire (reichsfrei: no lord between the valley and the king). The charter is known only from a copy, and some historians doubt it.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "verlieh König Heinrich (VII.), der Sohn Kaiser Friedrichs II., den in Uri lebenden Leuten die Reichsunmittelbarkeit.",
      "supports": "King Henry (VII) puts Uri directly under the Empire (map layer Uri)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Er löste sie durch Kauf aus dem Besitz des Grafen Rudolf von Habsburg und versprach, sie in Zukunft beim Reich zu behalten.",
      "supports": "He buys the rights back from Count Rudolf of Habsburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Gemäss einer von Aegidius Tschudi kopial überlieferten Urkunde, deren Echtheit von der neueren Forschung zum Teil angefochten wird",
      "supports": "The charter is known only from a copy, and some historians doubt it"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "1239/1240 richtete Kaiser Friedrich II. auch in Ursern eine Reichsvogtei ein, die er einem Grafen Rudolf von Rapperswil übertrug",
      "supports": "In 1239 or 1240 Frederick II makes Urseren an imperial district under Count Rudolf of Rapperswil (map layer Urseren)"
     }
    ],
    "uncertain": [
     "King Henry (VII) gives this charter in 1231 (the HLS article on Uri gives no year)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Uri umfasste im Hoch- und Spätmittelalter das Reusstal vom Urnersee, dem südöstlichen Arm des Vierwaldstättersees, bis zur Schöllenen.",
      "supports": "Uri is the Reuss valley from Lake Uri to the Schöllenen gorge (map layer Uri)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Eine der vier Waldstätten, vielleicht schon 1291 oder 1309, sicher ab 1315 Ort der alten Eidgenossenschaft.",
      "supports": "One of the first members, around 1291 or 1309, surely by 1315"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/",
      "title": "HLS: Urseren",
      "quote": "1239/1240 bildete Kaiser Friedrich II. die Reichsvogtei Ursern, die von den Grafen von Rapperswil und ab 1283 von denen von Habsburg eingenommen wurde",
      "supports": "Urseren is not part of Uri; Habsburg are its governors since 1283 (map layer Urseren)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/",
      "title": "HLS: Urseren",
      "quote": "Urner Hochtal im Quellgebiet der Reuss mit den Gemeinden Andermatt, Hospental (mit Weiler Zumdorf) und Realp.",
      "supports": "Urseren is the high valley around Andermatt"
     }
    ]
   },
   {
    "year": 1410,
    "title": "Urseren joins Uri",
    "text": [
     "In 1410 Uri and Urseren make a Landrecht (a treaty of common citizenship). Urseren keeps its old customs and partly its own court, but Uri leads it in war, justice and transit.",
     "Uri now controls the road up to the Gotthard Pass. In 1403 Uri and Obwalden had already made a treaty of protection with the Leventina south of the pass, but they lose the valley again in 1422."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/",
      "title": "HLS: Urseren",
      "quote": "Ursern erkannte in dem Vertrag die Oberhoheit Uris in Krieg, Gericht und Verkehrsfragen an und behielt dafür die alten rechtlichen Gewohnheiten, teilweise das eigene Gericht",
      "supports": "1410 Landrecht: Uri leads in war, justice and transit; Urseren keeps customs and partly its court (map layer Urseren)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "damit wurde es zum eigentlichen Passstaat, der die Nord- wie der Südseite des Gotthardpasses kontrollierte",
      "supports": "Uri controls the road to the Gotthard Pass"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "1403 schlossen Uri und Obwalden mit der Leventina (Livinen) einen Schutzvertrag, was zum Konflikt mit Mailand führte.",
      "supports": "In 1403 Uri and Obwalden make a treaty with the Leventina"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Die Niederlage in der Schlacht bei Arbedo 1422 brachte die Urner wie die eidgenössische Expansion gegen Süden für Jahrzehnte zum Stillstand",
      "supports": "They lose the Leventina in 1422"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "die Leventina unterstand danach wieder Mailand, bis Uri sie 1439/1441 wiedererwerben konnte.",
      "supports": "Uri takes the Leventina again in 1439–1441"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Erst der Sieg in der Schlacht bei Giornico 1478 bzw. der Friede mit Mailand von 1480 sicherten Uri die Leventina langfristig",
      "supports": "After Giornico 1478 and peace with Milan 1480 the valley stays with Uri"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Im 15. Jahrhundert erwarb Uri die Leventina, die bis 1798 als Untertanengebiet urnerisch blieb",
      "supports": "The Leventina is a subject land of Uri until 1798 (map layer Leventina)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Uri stellte den Landvogt.",
      "supports": "Uri sends a bailiff to rule it"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Uri hatte von 1503 an mit Schwyz und Nidwalden die Vogteien Blenio, Riviera und Bellinzona inne",
      "supports": "From 1503 Uri rules Bellinzona, Riviera and Blenio with Schwyz and Nidwalden (map layer)"
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of canton Waldstätten",
    "text": [
     "In 1798 the Helvetic Republic ends the old order. Already in March 1798 Uri sets the Leventina free, and it is no longer ruled by Uri.",
     "Uri becomes two districts, Altdorf and Andermatt, of the new canton of Waldstätten. This canton joins Uri, the inner parts of Schwyz, Obwalden, Nidwalden and Zug."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "zur Vorbereitung dieser Gespräche entliess die Landsgemeinde am 14. März die Leventina aus dem Untertanenverhältnis.",
      "supports": "The Leventina is set free in March 1798"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "In der Helvetischen Republik bildete Uri mit Zug, Ob- und Nidwalden sowie den inneren Teilen von Schwyz den Kanton Waldstätten.",
      "supports": "Canton Waldstätten joins Uri, inner Schwyz, Obwalden, Nidwalden and Zug (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Sein Gebiet war aufgeteilt in die Distrikte Altdorf und Andermatt. Die Landvogtei Leventina wurde dem Kanton Tessin zugeschlagen.",
      "supports": "Districts Altdorf and Andermatt; the Leventina later goes to Ticino (map layer Leventina)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Seit 1803 Kanton der Eidgenossenschaft.",
      "supports": "In 1803 Uri is a canton again"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007467/2014-01-14/",
      "title": "HLS: Urseren",
      "quote": "sicherten den Ursnern 1803 den gleichberechtigten Zutritt zur Urner Landsgemeinde und Vertretungen in Landrat und Kantonsgericht",
      "supports": "Urseren becomes an equal part of Uri in 1803 (map layer Canton of Uri)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Bemühungen um eine Wiedergewinnung der Leventina blieben auch jetzt erfolglos.",
      "supports": "Uri tries to get the Leventina back, but fails (map layer Leventina)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "Die Wiederangliederung der Leventina, um die sich Uri bemühte, misslang erneut.",
      "supports": "Uri fails again to get the Leventina back after 1813"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Uri have not changed."
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
     "Around 1150 the counts of Lenzburg own large estates in the Schwyz valley. The people of Schwyz already argue with Einsiedeln abbey about the border of their pastures. This dispute (the Marchenstreit) goes on into the 14th century.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Im inneren Kantonsteil verfügten zunächst die Grafen von Lenzburg bis zu ihrem Aussterben 1173 über grossen Grundbesitz.",
      "supports": "The counts of Lenzburg own large estates in the Schwyz valley until 1173 (map layer Schwyz valley)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Im Marchenstreit mit dem Kloster Einsiedeln sind die cives de villa Svites bzw. cives de Suites in der ersten Hälfte des 12. Jahrhunderts bezeugt.",
      "supports": "The people of Schwyz already argue with Einsiedeln abbey in the first half of the 1100s"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007415/",
      "title": "HLS: Schwyz (Bezirk)",
      "quote": "bis zu der im Marchenstreit des 14. Jahrhunderts mit dem Kloster Einsiedeln errungenen Grenze",
      "supports": "The Marchenstreit goes on into the 14th century"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "zwei ehemals grundherrlichen Höfen des Klosters Einsiedeln",
      "supports": "Einsiedeln abbey owns the Höfe (map layer Einsiedeln abbey)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "Die Höfe bildeten zusammen mit der March eine klösterliche Verwaltungseinheit.",
      "supports": "The Höfe and the March belong to the abbey's lands"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "während die Grafen von Habsburg und Toggenburg und die Herren von Rapperswil ebenfalls über Güter und Rechte verfügten",
      "supports": "The lords of Rapperswil and others hold land in the outer part (March) (map layer March)"
     }
    ]
   },
   {
    "year": 1240,
    "title": "Schwyz becomes reichsfrei",
    "text": [
     "The Lenzburg line dies out in 1173. Their lands go to the Kyburgs, the Frohburgs, the lords of Rapperswil and the Habsburgs.",
     "In 1240 Emperor Frederick II puts the valley of Schwyz directly under the Empire, as thanks for its help. The Habsburgs still try to rule the area, and the conflict goes on.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Als wichtigste weltliche Herrschaftsträger agierten die Kyburger, die Frohburger, die Herren von Rapperswil und die Habsburger",
      "supports": "Lenzburg lands go to the Kyburgs, Frohburgs, Rapperswil and Habsburgs"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "in der Talschaft Schwyz, der Kaiser Friedrich II. 1240 aufgrund erwiesener Dienste die Reichsfreiheit zugestand",
      "supports": "In 1240 Frederick II puts Schwyz directly under the Empire for its help (map layer Valley of Schwyz)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "traten die Habsburger als deren Erben an und versuchten, ihre Herrschaftsansprüche im Gebiet der Innerschweiz durchzusetzen",
      "supports": "The Habsburgs still try to rule the area"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "der ritteradligen, Habsburg verpflichteten Familie von Küssnacht",
      "supports": "Küssnacht is ruled by knights who serve the Habsburgs (map layer Küssnacht)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "Die 1114 erstmals genannten Schirmvögte über die beiden Höfe (wie auch über das Kloster Einsiedeln) waren die Herren und späteren Grafen von Rapperswil",
      "supports": "Einsiedeln abbey and the Höfe; lords of Rapperswil (map layers)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007415/",
      "title": "HLS: Schwyz (Bezirk)",
      "quote": "der das Gebiet vom Vierwaldstätter- und Zugersee bis zu der im Marchenstreit des 14. Jahrhunderts mit dem Kloster Einsiedeln errungenen Grenze",
      "supports": "The Land of Schwyz reaches from Lake Lucerne to the border with Einsiedeln (map layer Old Land of Schwyz)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007415/",
      "title": "HLS: Schwyz (Bezirk)",
      "quote": "vom Ybrig über das Alpthal zur Hochebene von Rothenthurm",
      "supports": "The land reaches to Rothenthurm"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Eine der vier Waldstätten, vielleicht schon ab 1291 oder 1309, sicher ab 1315 Ort der Alten Eidgenossenschaft.",
      "supports": "Schwyz is a first member, around 1291 or 1309, surely by 1315"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Die Angliederung von Arth im 14. Jahrhundert an das Land Schwyz",
      "supports": "Arth joins Schwyz in the 14th century (map layer Arth)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "erlangten 1283 die Schirmvogtei über das Kloster Einsiedeln",
      "supports": "The Habsburgs are protectors of Einsiedeln abbey since 1283 (map layer Einsiedeln)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "der ritteradligen, Habsburg verpflichteten Familie von Küssnacht",
      "supports": "Küssnacht is held by knights who serve the Habsburgs (map layer Küssnacht)"
     }
    ]
   },
   {
    "year": 1440,
    "title": "Schwyz and its outer lands",
    "text": [
     "Schwyz grows quickly. It takes Einsiedeln in 1386 and becomes protector (Kastvogt) of the abbey in 1424. It makes treaties with the March from 1386 and holds all of it by 1436. It buys the rights over Küssnacht in 1402. In 1440, during the Old Zurich War, it takes Wollerau and Pfäffikon (the Höfe).",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Die Waldstatt Einsiedeln wurde 1386 militärisch besetzt",
      "supports": "Schwyz takes Einsiedeln in 1386 (map layer Einsiedeln)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1424 wurde die Schwyzer Kastvogtei über das Kloster errichtet",
      "supports": "Schwyz becomes Kastvogt of the abbey in 1424"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1386 erfolgte die Aufnahme von Märchler Landleuten ins Schwyzer Landrecht, 1414 der Abschluss eines Landrechts mit der Mittelmarch und 1436 derjenige mit der Obermarch.",
      "supports": "Treaties with the March from 1386; all of it by 1436 (map layer March)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1402 kaufte es die Vogtei- und Gerichtsgewalt",
      "supports": "Schwyz buys the rights over Küssnacht in 1402 (map layer Küssnacht)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "Im Alten Zürichkrieg waren die Höfe zwischen den Zürchern und Schwyzern umkämpft. 1440 zogen die Zürcher kampflos aus Pfäffikon ab",
      "supports": "In 1440, during the Old Zurich War, Schwyz takes the Höfe (map layer Höfe)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "welche gegenüber allen Bewohnern der Angehörigen Landschaften in verschiedenen Bereichen privilegiert waren",
      "supports": "The people of the outer lands have fewer rights than the people of old Schwyz"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "die Herrschaft über Uznach (1437 Verpfändung, 1469 Kauf) und Gaster (1436 Landrecht, 1438 Verpfändung)",
      "supports": "With Glarus, Schwyz rules Gaster (from 1438) and Uznach (1437, 1469) (map layer Gaster and Uznach)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "das bereits 1359 zugewandter Ort der Eidgenossenschaft war, kaufte sich 1390 aus habsburgischer Pfandschaft frei",
      "supports": "Gersau is a small free land and an ally of the Swiss (map layer Gersau)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "ab ca. 1450 entsprach das Schwyzer Territorium im Wesentlichen dem heutigen Kantonsgebiet",
      "supports": "By about 1450 the land of Schwyz is mostly complete"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "auf die Kantone Waldstätten (die späteren Bezirke Schwyz, Gersau, Küssnacht und Einsiedeln) und Linth (die späteren Bezirke March, Wollerau und Pfäffikon) aufgeteilt",
      "supports": "Schwyz, Gersau, Küssnacht and Einsiedeln go to Waldstätten; the March and the Höfe go to Linth (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Während der Helvetik (1798-1803) Teil des Kantons Linth.",
      "supports": "Canton Linth includes Glarus"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Mittelalterliche Herrschaft, 1798-1803 Teil des Kantons Linth",
      "supports": "Gaster is no longer ruled by Schwyz"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Die Mediationsakte von 1803 stellte den Kanton im alten Umfang wieder her, wobei die früheren Untertanengebiete abgeschafft und in Bezirke umgewandelt",
      "supports": "In 1803 Schwyz is a canton again with its outer lands as districts (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "sowie Gersau und Reichenburg eingegliedert wurden",
      "supports": "Gersau and Reichenburg are added in 1803"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Alle Landleute waren gleichberechtigt.",
      "supports": "All its people now have equal rights in law"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1817 kam Gersau, das sich 1814 wieder als Freistaat konstituiert hatte, endgültig zum Kanton Schwyz.",
      "supports": "Gersau becomes part of Schwyz for good in 1817 (map layer Gersau)"
     }
    ]
   },
   {
    "year": 1832,
    "title": "Outer Schwyz breaks away",
    "text": [
     "The outer districts want seats in the cantonal government in proportion to their size. In 1831 the March, Einsiedeln, Küssnacht and Pfäffikon break away. In 1832 they adopt their own constitution as the half-canton Ausserschwyz (Outer Schwyz).",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "forderten die vier äusseren Bezirke March, Einsiedeln, Küssnacht und Pfäffikon eine neue Verfassung, die unter anderem die proportionale Vertretung der Bezirke in den Behörden garantierte.",
      "supports": "The outer districts want proportional seats"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "Daraufhin trennten sich die äusseren Bezirke 1831 vom Alten Land Schwyz.",
      "supports": "In 1831 the outer districts break away"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1832 folgte die Annahme einer Verfassung.",
      "supports": "In 1832 Ausserschwyz adopts a constitution (map layer Ausserschwyz)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "1831 schloss sich Pfäffikon dem bis 1833 existierenden Halbkanton Ausserschwyz an, Wollerau hielt Schwyz die Treue.",
      "supports": "Pfäffikon joins the half-canton Ausserschwyz; Wollerau stays with Schwyz (map layers)"
     }
    ],
    "uncertain": [
     "Gersau stays with the old canton in 1831–1833."
    ]
   },
   {
    "year": 1833,
    "title": "Schwyz reunited",
    "text": [
     "In August 1833 federal troops occupy the canton. A new constitution in 1833 joins the two parts again and gives all people of the canton equal rights.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "ordnete die militärische Besetzung des Kantons Schwyz durch eidgenössische Truppen an, die im August vollzogen wurde.",
      "supports": "In August 1833 federal troops occupy the canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "eine neue Verfassung aus, welche die volle Rechtsgleichheit aller Kantonseinwohner festschrieb. Mit deren Annahme wurde auch die Wiedervereinigung der beiden Kantonsteile vollzogen.",
      "supports": "A new constitution joins the two parts again and gives equal rights (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007418/",
      "title": "HLS: Höfe",
      "quote": "Bezirk des Kantons Schwyz, entstand 1848 aus dem Zusammenschluss der Bezirke Pfäffikon und Wollerau.",
      "supports": "In 1848 Wollerau and Pfäffikon form the district of Höfe"
     }
    ],
    "uncertain": [
     "Since 1833 the borders of Schwyz have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Mit dem Bau der Burg auf dem Landenberg durch die Grafen von Lenzburg",
      "supports": "The counts of Lenzburg are strong in Obwalden and build a castle above Sarnen (map layer Obwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Im frühen 12. Jahrhundert übertrugen die Grafen von Lenzburg einen grossen Teil der Güter an ihr Hauskloster Beromünster.",
      "supports": "They give much land to their monastery of Beromünster"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Die grundherrliche Organisation des Klosters St. Leodegar, das Höfe in Sarnen, Giswil und Alpnach besass",
      "supports": "Lucerne's monastery owns farms in Sarnen, Giswil and Alpnach"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Neben den Klöstern und Stiften (v.a. das von Murbach abhängige St. Leodegar in Luzern und Beromünster)",
      "supports": "Lucerne's monastery is part of Murbach abbey"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000741/",
      "title": "HLS: Engelberg (Gemeinde)",
      "quote": "Die Talleute standen bis zur Erlangung der politischen Selbstständigkeit 1798 unter der Klosterherrschaft.",
      "supports": "The abbey is lord of the Engelberg valley (map layer Engelberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000741/",
      "title": "HLS: Engelberg (Gemeinde)",
      "quote": "Die Urbarisierung und dauernde Besiedlung des Talbodens setzte wohl erst mit der Klostergründung 1120 ein",
      "supports": "The monastery at Engelberg is founded in 1120"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Spätere Besitztraditionen lassen vermuten, dass die grossen Geschlechter Lenzburg, Sellenbüren-Regensberg, Brienz-Ringgenberg-Raron und Habsburg",
      "supports": "Nidwalden: many lords, Lenzburg probably among them (map layer Nidwalden)"
     }
    ]
   },
   {
    "year": 1257,
    "title": "Habsburg rule",
    "text": [
     "In the 1200s the Habsburgs are the main lords in Unterwalden, next to the abbeys. In 1257 they give their lands there as fiefs to local followers.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Als grössere Herrschaftsträger blieben somit nur die Klöster Engelberg und Murbach-Luzern sowie die Habsburger.",
      "supports": "The Habsburgs are the main lords in Unterwalden, next to the abbeys (map layer Unterwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "1257 veräusserten die Grafen Gottfried, Rudolf und Eberhard von Habsburg unter lehensrechtlichen Bedingungen ihr Besitztum in Unterwalden an die Getreuen",
      "supports": "In 1257 the Habsburgs give their lands as fiefs to local followers"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "In der Bulle erscheinen die Leute von Sarnen überdies erstmals als Talgemeinde im Sinne der kirchenrechtlichen universitas.",
      "supports": "Around 1247 the people of Sarnen appear as a valley community"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Dank des Kaufs der verschiedenen Murbacher Herrschaftstitel in den «oberen Landen» 1291 durch die Habsburger",
      "supports": "In 1291 the Habsburgs buy Murbach's rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000741/",
      "title": "HLS: Engelberg (Gemeinde)",
      "quote": "Die Talleute standen bis zur Erlangung der politischen Selbstständigkeit 1798 unter der Klosterherrschaft.",
      "supports": "Engelberg is the valley of the abbey (map layer Engelberg)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Eine der vier Waldstätten, vielleicht schon kurz nach 1291, wohl vor 1309 als Teil Unterwaldens Ort der Eidgenossenschaft",
      "supports": "Unterwalden is a first member, probably soon after 1291 and before 1309"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Das Kernterritorium umfasste das Tal der Sarner Aa vom Brünigpass bis zum Alpnachersee sowie dessen Seitentäler",
      "supports": "Obwalden around Sarnen (map layer Obwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "bis 1798 unter der Bezeichnung \"Unterwalden nit dem Kernwald\".",
      "supports": "Nidwalden is the half below the forest (map layer Nidwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "König Rudolf I. von Habsburg wurde 1274 Kastvogt über Engelberg",
      "supports": "Engelberg is a separate lordship of the abbey, with Habsburg protectors since 1274 (map layer Engelberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000753/",
      "title": "HLS: Hergiswil (NW)",
      "quote": "Die autonom gewordene Ürte schloss sich unmittelbar danach als elfte Gemeinde Nidwalden an.",
      "supports": "Hergiswil is not yet part of Nidwalden; it joins after 1378 (map layer Hergiswil)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "nahm Obwalden als erster Urkanton am 1. April 1798 die helvetische Verfassung an",
      "supports": "Obwalden is the first forest canton to accept the Helvetic constitution, on 1 April 1798"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Nach der Niederlage und der Zusammenlegung der Urkantone und Zugs zum Kanton Waldstätten bildete Obwalden nur noch den Distrikt Sarnen.",
      "supports": "Obwalden becomes the district of Sarnen in canton Waldstätten (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "1798-1803 bildete Nidwalden mit Engelberg den Distrikt Stans im helvetischen Kanton Waldstätten.",
      "supports": "Engelberg goes with Nidwalden into the district of Stans"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "1803-1999 unter der Bezeichnung Unterwalden ob dem Wald Halbkanton der Eidgenossenschaft.",
      "supports": "In 1803 Obwalden is a half-canton as Unterwalden ob dem Wald (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "anerkannte die Teilung des Kantons Unterwalden in die Halbkantone ob dem Wald und nid dem Wald",
      "supports": "The split of Unterwalden is now official"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000741/",
      "title": "HLS: Engelberg (Gemeinde)",
      "quote": "Politische Gemeinde des Kantons Obwalden (1803-1815 Nidwalden).",
      "supports": "Engelberg is given to Nidwalden, 1803–1815 (map layer Engelberg)"
     }
    ]
   },
   {
    "year": 1815,
    "title": "Engelberg joins Obwalden",
    "text": [
     "In 1815 Nidwalden refuses the new Federal Treaty. Federal troops enter Nidwalden, and Engelberg is given to Obwalden.",
     "Engelberg is an exclave (land cut off from the rest of the canton). Since then, the borders have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Erst nach dem Einmarsch von Bundestruppen am 18. August 1815 lenkte Nidwalden ein",
      "supports": "Federal troops enter Nidwalden in 1815, and Engelberg goes to Obwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "bezahlte seinen Widerstand jedoch mit dem Verlust des eidgenössisch gesinnten Engelberg an Obwalden",
      "supports": "Federal troops enter Nidwalden in 1815, and Engelberg goes to Obwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Nidwalden verweigerte dem eidgenössischen Bundesvertrag von 1815 die Zustimmung",
      "supports": "Nidwalden refuses the Federal Treaty of 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "1815 kam die Talschaft und ehemalige Klosterherrschaft Engelberg als Exklave dazu.",
      "supports": "Engelberg joins Obwalden in 1815 as an exclave (map layer)"
     }
    ],
    "uncertain": [
     "Since 1815 the borders of Obwalden have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Spätere Besitztraditionen lassen vermuten, dass die grossen Geschlechter Lenzburg, Sellenbüren-Regensberg, Brienz-Ringgenberg-Raron und Habsburg sowie die Klöster Muri und Murbach-Luzern Güter und Rechte innehatten.",
      "supports": "Many nobles and monasteries hold land in Nidwalden, probably also Lenzburg (map layer Nidwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Die Herrschaftsstrukturen waren jedoch schwach ausgeprägt, die neuen Herrschaften blieben meist blosse Ansprüche und die lokalen Dienstadligen handelten selbstständig.",
      "supports": "Lordship is weak, and local knights often act alone"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000741/",
      "title": "HLS: Engelberg (Gemeinde)",
      "quote": "Die Urbarisierung und dauernde Besiedlung des Talbodens setzte wohl erst mit der Klostergründung 1120 ein",
      "supports": "A monastery is founded at Engelberg in 1120 (map layer Engelberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Bis 1360 erwarb es in beträchtlichem Umfang Güter in Stans, Buochs und Wolfenschiessen",
      "supports": "Over time Engelberg gets much land in Nidwalden, for example around Buochs"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "Mit dem Bau der Burg auf dem Landenberg durch die Grafen von Lenzburg",
      "supports": "Obwalden: counts of Lenzburg (map layer Obwalden)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Als grössere Herrschaftsträger blieben somit nur die Klöster Engelberg und Murbach-Luzern sowie die Habsburger.",
      "supports": "Three lords count most in Nidwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Habsburg stützte seine Herrschaft auf Vogteirechte, während die Klöster Murbach-Luzern und Engelberg grundherrliche Rechte auf einen grossen Dinghof in Stans",
      "supports": "The Habsburgs hold the Vogtei; Murbach-Lucerne owns a large manor in Stans (map layer Unterwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Engelberg baute ab 1260 seinen Besitz durch Kauf, Tausch und Schenkungen zu einer geschlossenen Herrschaft aus.",
      "supports": "Engelberg abbey buys up land from 1260 (map layer Engelberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "König Rudolf I. von Habsburg wurde 1274 Kastvogt über Engelberg und erwarb 1291 die grundherrlichen Rechte Murbach-Luzerns in Unterwalden.",
      "supports": "1274 Rudolf protector of Engelberg; 1291 he buys the rights of Murbach-Lucerne"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Vielleicht schon ab 1291 oder 1309, sicher nach dem Auseinanderfallen Unterwaldens im zweiten Viertel des 14. Jahrhunderts Ort der Eidgenossenschaft",
      "supports": "Unterwalden is a first member, around 1291 or 1309"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "bis 1798 unter der Bezeichnung \"Unterwalden nit dem Kernwald\".",
      "supports": "Nidwalden is the half below the forest (map layer Nidwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "bis 1798 unter der Bezeichnung Unterwalden ob dem (Kern-)Wald",
      "supports": "Obwalden is the upper half (map layer Obwalden)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000753/",
      "title": "HLS: Hergiswil (NW)",
      "quote": "Um 1285 ging die Herrschaft an die Habsburger über.",
      "supports": "Hergiswil belongs to other lords (map layer Hergiswil)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "König Rudolf I. von Habsburg wurde 1274 Kastvogt über Engelberg",
      "supports": "The Engelberg valley belongs to its abbey, Habsburg protectors since 1274 (map layer Engelberg)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000753/",
      "title": "HLS: Hergiswil (NW)",
      "quote": "dessen Tochter Cäcilia Twing und Bann 1378 den Hergiswilern für 700 Gulden abtrat.",
      "supports": "In 1378 the people of Hergiswil buy the local rights from their lady for 700 guilders"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000753/",
      "title": "HLS: Hergiswil (NW)",
      "quote": "Die autonom gewordene Ürte schloss sich unmittelbar danach als elfte Gemeinde Nidwalden an.",
      "supports": "Soon after, Hergiswil joins Nidwalden as its eleventh commune (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "wo Nidwalden mit Uri und Schwyz die Vogteien Bellinzona, Blenio und Riviera vom frühen 16. Jahrhundert bis 1798 als gemeine Herrschaften verwaltete",
      "supports": "From the early 1500s to 1798 Nidwalden rules Bellinzona, Riviera and Blenio with Uri and Schwyz"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "1798-1803 bildete Nidwalden mit Engelberg den Distrikt Stans im helvetischen Kanton Waldstätten.",
      "supports": "Nidwalden with Engelberg is the district of Stans in canton Waldstätten (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "am 9. September 1798 stürzten sich, aufgestachelt durch Geistliche wie den Kapuzinerpater Paul Styger, die Nidwaldner Truppen in eine aussichtslose Schlacht gegen die französische Armee",
      "supports": "Nidwalden fights the new order; French troops crush it in September 1798"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "erkannte die Teilung in Nid- und Obwalden an und setzte dem Zweidrittelsvorrang Obwaldens ein Ende. Sie beliess Engelberg bei Nidwalden",
      "supports": "In 1803 Nidwalden is a half-canton again and keeps Engelberg (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007410/",
      "title": "HLS: Obwalden",
      "quote": "anerkannte die Teilung des Kantons Unterwalden in die Halbkantone ob dem Wald und nid dem Wald",
      "supports": "Nidwalden is a half-canton as Unterwalden nid dem Wald"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Nidwalden verweigerte dem eidgenössischen Bundesvertrag von 1815 die Zustimmung",
      "supports": "Nidwalden refuses the Federal Treaty in 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "Erst nach dem Einmarsch von Bundestruppen am 18. August 1815 lenkte Nidwalden ein",
      "supports": "Federal troops enter on 18 August; Nidwalden must join and loses Engelberg to Obwalden (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007411/2017-05-11/",
      "title": "HLS: Nidwalden",
      "quote": "bezahlte seinen Widerstand jedoch mit dem Verlust des eidgenössisch gesinnten Engelberg an Obwalden",
      "supports": "Federal troops enter on 18 August; Nidwalden must join and loses Engelberg to Obwalden (map layers)"
     }
    ],
    "uncertain": [
     "Since 1815 the borders of Nidwalden have not changed."
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
     "In the 700s a noble family probably gives large lands and rights in the Linth valley to the abbey of Säckingen on the Rhine. The abbey stays the main power in Glarus for centuries.",
     "In the 1000s and 1100s the counts of Lenzburg protect the abbey's valley and judge for the king. In Gaster they protect the abbey of Schänis."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "wahrscheinlicher aber durch die Übertragung von bedeutendem Grundbesitz und Hoheitsrechten im Tal an Säckingen durch die Beata-Sippe in der Mitte des 8. Jahrhunderts",
      "supports": "In the 700s a noble family probably gives lands and rights to Säckingen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Sie übten die Hochvogtei über Glarus als Kastvögte von Säckingen oder - in ihrer Funktion als Grafen im Zürichgau - als Reichsvögte aus.",
      "supports": "The counts of Lenzburg protect the abbey's valley and judge for the king (map layer Glarus)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Jahrhundert war Säckingen die massgebende Macht im Land Glarus.",
      "supports": "The abbey stays the main power in Glarus"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Unter der Schirmherrschaft der Edlen von Schänis und deren Verwandten, den Grafen von Lenzburg",
      "supports": "In Gaster the counts of Lenzburg protect the abbey of Schänis (map layer Gaster)"
     }
    ]
   },
   {
    "year": 1200,
    "title": "Kyburg as governors",
    "text": [
     "After 1173 the Emperor's son Otto of Burgundy holds the right to rule Glarus. After his death in 1200 it goes to the counts of Kyburg.",
     "The Kyburgs are also the protectors of Gaster."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "in den Händen von Pfalzgraf Otto von Burgund, dem vierten Sohn Friedrich Barbarossas",
      "supports": "After 1173 Otto of Burgundy, son of the Emperor, holds Glarus"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Nach dem Tod Ottos 1200 ging die Vogtei an die Kyburger über",
      "supports": "After 1200 it goes to the Kyburgs (map layer Glarus)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Nach dem Aussterben der Lenzburger 1173 kam das Gaster bis 1264 unter die Schirmherrschaft der Kyburger",
      "supports": "The Kyburgs protect Gaster until 1264 (map layer Gaster)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Nach dem Erlöschen der Kyburger im gleichen Jahr kam sie an Rudolf von Habsburg",
      "supports": "The Kyburg line ends in 1264; their rights go to Rudolf of Habsburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "April 1288 die Söhne König Rudolfs von Habsburg mit den Burgen, Gerichtsbarkeiten und dem Meieramt im Tal Glarus.",
      "supports": "In 1288 the abbess gives castles, courts and the Meieramt to Rudolf's sons"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "vereinigte Habsburg in Glarus wie in keinem anderen Gebiet der künftigen Eidgenossenschaft die volle Gerichtsbarkeit und die öffentlich-rechtliche Gewalt in einer Hand",
      "supports": "Habsburg holds all power in the valley (map layer Glarus)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "dann unterstand es bis 1438 den Habsburgern",
      "supports": "Gaster is Habsburg land (map layer Gaster)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Juni 1352 schlossen Zürich und die Waldstätte (ohne Luzern) einen Bund mit Ammann und Landleuten von Glarus, allerdings nicht auf gleichberechtigter Basis.",
      "supports": "In 1352 Zurich and the forest cantons make an unequal league with Glarus (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Bereits im September 1352 kam Glarus wieder an Österreich (Brandenburger Frieden).",
      "supports": "Habsburg soon gets it back"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Insbesondere symbolisierten nach dem Sieg von Näfels 1388",
      "supports": "Glarus beats a Habsburg army at Näfels in 1388"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Im Sempacherbrief von 1393 wird Glarus jedenfalls erstmals als gleichberechtigter Partner genannt.",
      "supports": "In 1393 Glarus is named as an equal partner"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "nachdem Glarus sich 1395 von der säckingischen Grundherrschaft losgekauft hatte",
      "supports": "In 1395 Glarus buys the old rights of Säckingen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "dann unterstand es bis 1438 den Habsburgern",
      "supports": "Gaster is Habsburg land until 1438 (map layer Gaster)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "die Herrschaft über Uznach (1437 Verpfändung, 1469 Kauf) und Gaster (1436 Landrecht, 1438 Verpfändung)",
      "supports": "Glarus and Schwyz take Uznach as a pledge in 1437 and Gaster in 1438; they buy Uznach in 1469"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Das Gaster war 1438-1798 Herrschaft der Orte Schwyz und Glarus",
      "supports": "Gaster is a shared bailiwick of the two cantons (map layer Gaster and Uznach)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "in den Auseinandersetzungen des Alten Zürichkriegs (1436-1450)",
      "supports": "This happens during the Old Zurich War"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "1460 verleibte sich Glarus den ganzen Kerenzerberg ein.",
      "supports": "Glarus takes the whole Kerenzerberg in 1460 (map layer Land of Glarus)"
     }
    ]
   },
   {
    "year": 1517,
    "title": "Werdenberg and Sargans",
    "text": [
     "In 1517 Glarus buys the county of Werdenberg in the Rhine valley for 21,500 guilders. It rules Werdenberg alone as a bailiwick until 1798.",
     "Glarus and Schwyz also buy Gams in 1497. Since 1483 Glarus shares the rule of Sargans with six other cantons."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007646/",
      "title": "HLS: Werdenberg",
      "quote": "1517 erwarb Glarus die stark verschuldete Grafschaft für 21'500 rheinische Gulden und verwaltete sie bis 1798 als Landvogtei.",
      "supports": "In 1517 Glarus buys Werdenberg for 21,500 guilders and rules it until 1798 (map layer Werdenberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1497 gelangten beide Orte durch Kauf überdies in den Besitz der Herrschaft Gams",
      "supports": "Glarus and Schwyz buy Gams in 1497 (map layer Gams)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007645/",
      "title": "HLS: Sarganserland",
      "quote": "die 1483 von den sieben Orten für 15'000 rheinische Gulden erworbene Grafschaft Sargans",
      "supports": "Since 1483 Glarus shares Sargans with six other cantons (map layer Sargans)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Das Gaster war 1438-1798 Herrschaft der Orte Schwyz und Glarus",
      "supports": "Gaster and Uznach shared with Schwyz (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "bequemten sich aber erst unter dem Druck der herannahenden französischen Armee zum gleichen Schritt",
      "supports": "In spring 1798 Glarus also sets its bailiwicks free"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Am 4. Mai 1798 vereinigte ein französisches Dekret Glarus mit den ehemaligen Untertanengebieten Uznach, Gaster und Werdenberg",
      "supports": "In May 1798 the French join Glarus with its old subject lands into canton Linth (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007646/",
      "title": "HLS: Werdenberg",
      "quote": "dem Kanton Linth zugeteilt, dessen Hauptort ausgerechnet Glarus war",
      "supports": "The capital of canton Linth is Glarus"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Das Land wurde wiederum ein souveräner Ort im Rahmen der Eidgenossenschaft, allerdings ohne die Untertanengebiete.",
      "supports": "In 1803 Glarus is a canton again, without its subject lands (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007646/",
      "title": "HLS: Werdenberg",
      "quote": "1803 erfolgte die Eingliederung in den neuen Kanton St. Gallen und in dessen Bezirk Sargans",
      "supports": "Werdenberg and Sargans go to St. Gallen (map layer Former Glarus lands)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "gelangte 1803 an den Kanton St. Gallen, wo es zum Bezirk Uznach geschlagen wurde",
      "supports": "Gaster and Uznach go to St. Gallen"
     },
     {
      "url": "https://www.gl.ch/public/upload/assets/2052/Schlussbericht_ueber_die_Umsetzung_der_Gemeindestrukturreform_GL2011.pdf",
      "title": "Kanton Glarus: Schlussbericht Gemeindestrukturreform GL2011 (2011)",
      "quote": "Fusion der 25 Einheitsgemeinden zu drei Einheitsgemeinden",
      "supports": "The 25 communes merge into three"
     },
     {
      "url": "https://www.gl.ch/public/upload/assets/2052/Schlussbericht_ueber_die_Umsetzung_der_Gemeindestrukturreform_GL2011.pdf",
      "title": "Kanton Glarus: Schlussbericht Gemeindestrukturreform GL2011 (2011)",
      "quote": "Am 1. Januar 2011 ist die Gemeindestrukturreform formell abgeschlossen.",
      "supports": "The merger takes effect in 2011"
     }
    ],
    "uncertain": [
     "Since 1803 the outer borders of Glarus have not changed."
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
     "Around 1150 the counts of Lenzburg hold loose count rights over the Zug area, but no land of their own there is known. Fraumünster abbey of Zurich has a manor in Cham since at least 858.",
     "Monasteries from outside own much land: Einsiedeln in Ägeri, Kappel and Schänis in Baar, Muri and St. Blasien in the west. Local nobles build castles."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "nach dem Investiturstreit bis zu ihrem Aussterben 1173 von den Grafen von Lenzburg wahrgenommen",
      "supports": "The counts of Lenzburg hold count rights until 1173 (map layer Zug area)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Die gräflichen Hoheitsrechte überlagerten die zersplitterten Herrschafts- und Besitzkomplexe und hielten diese lediglich lose zusammen.",
      "supports": "The count rights are loose"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Lenzburger Eigenbesitz auf Zuger Gebiet ist nicht nachweisbar",
      "supports": "No Lenzburg land of their own is known there"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "eine 858 von König Ludwig dem Deutschen für das Fraumünster in Zürich ausgestellte Schenkungsurkunde, nennt einen grundherrlichen Hof in Cham",
      "supports": "Fraumünster has a manor in Cham since 858 (map layer Cham)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "So waren Schänis und Kappel in Baar, Muri in Gangolfswil (Gemeinde Risch), Einsiedeln in Ägeri",
      "supports": "Einsiedeln in Ägeri, Kappel and Schänis in Baar, Muri in the west"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Blasien in Steinhausen sowie Neuheim begütert",
      "supports": "St. Blasien owns land in Steinhausen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Andreas, Zug und Hünenberg datieren ins 11. und 12. Jahrhundert.",
      "supports": "Local nobles build castles (11th and 12th century)"
     }
    ]
   },
   {
    "year": 1273,
    "title": "Habsburg and Hünenberg",
    "text": [
     "After 1240 the counts of Kyburg try to rule Baar and the town of Zug. They may have founded the town. The Kyburg line ends in 1263/1264, and Rudolf of Habsburg takes much of their land.",
     "In 1273 Habsburg gets Zug (about). The town and the outer communities form the Habsburg Amt Zug. In the west, the lords of Hünenberg build their own lordship over Steinhausen, Cham, Hünenberg and Risch; it is complete by about 1350."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "dass die Grafen von Kyburg spätestens nach 1240 im Raum Baar und in der vielleicht von ihnen gegründeten Stadt Zug versuchten, Herrschaftsansprüche",
      "supports": "After 1240 the Kyburgs try to rule Baar and Zug, and may have founded the town"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "1264 übernahm Graf Rudolf IV. von Habsburg einen grossen Teil des mutmasslichen Erbes.",
      "supports": "The Kyburg line ends in 1263/1264 and Rudolf of Habsburg takes much of their land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "1273 soll er nebst zahlreichen kyburgischen Städten auch Zug erworben haben",
      "supports": "In 1273 Habsburg gets Zug (about)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Mit dem habsburgischen Amt Zug wird um 1300 ein erster Kern des späteren Kantons Zug fassbar",
      "supports": "Town and outer communities form the Habsburg Amt Zug (map layer Amt Zug)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "einer nahezu geschlossenen Gerichtsherrschaft, die um 1350 Steinhausen, Cham, Hünenberg und Risch",
      "supports": "The lords of Hünenberg build a lordship over Steinhausen, Cham, Hünenberg and Risch (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "führte 1352 unter Führung Zürichs zur Belagerung der Stadt Zug und zum erzwungenen Bündnis",
      "supports": "In 1352 Zurich besieges Zug, and the town and Amt must join the league (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "zu dem in vogteilicher Hinsicht neben der Stadt das Ägerital, das Berggebiet (Menzingen inklusive Neuheim) und Baar gehört haben dürften",
      "supports": "The Amt is Baar, Ägeri and Menzingen with Neuheim (map layer Outer Amt)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Ab 1352 eidgenössischer Ort (unter Vorbehalt der habsburgischen Rechte)",
      "supports": "Habsburg still claims Zug"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Schwyz stellte zwischen 1370 und 1404, zunächst mit dem Einverständnis der Herzöge (Thorberger Friede), den Ammann in Zug.",
      "supports": "From 1370 to 1404 Schwyz leads Zug in practice"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Dazu kamen die bereits 1379 erworbene Vogtei Walchwil",
      "supports": "Walchwil is held by others until the town buys it in 1379 (map layer Walchwil)"
     }
    ]
   },
   {
    "year": 1500,
    "title": "The town's bailiwicks",
    "text": [
     "The town of Zug buys Walchwil in 1379. Between then and 1498 it buys more land: Cham, Steinhausen, Risch and Oberrüti. Hünenberg comes under the town by a citizenship treaty.",
     "These are bailiwicks (land ruled by a governor) of the town only. The rural Amt does not become a subject land of the town.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Sukzessive kaufte die Stadt Zug deren Gerichtsherrschaften in Cham, Risch, Steinhausen und Oberrüti.",
      "supports": "The town buys Cham, Steinhausen, Risch and Oberrüti (map layer Bailiwicks)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Dazu kamen die bereits 1379 erworbene Vogtei Walchwil und das verburgrechtete, eine Sonderstellung geniessende Hünenberg.",
      "supports": "Walchwil 1379; Hünenberg by a citizenship treaty"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Die Stadt allein erwarb zwischen 1379 und 1498 ein eigenes Untertanengebiet um den Zugersee.",
      "supports": "These are bailiwicks of the town only, bought 1379–1498"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Das Äussere Amt verhinderte dadurch nicht nur, städtisches Untertanengebiet zu werden",
      "supports": "The rural Amt does not become a subject land of the town (map layer Outer Amt)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008298/",
      "title": "HLS: Freie Ämter",
      "quote": "an die sechs Orte Zürich, Luzern, Schwyz, Unterwalden, Zug und Glarus",
      "supports": "Zug shares the rule of the Freie Ämter (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Die Stadt Zug gab am 11. Februar 1798 notgedrungen ihre Vogteien frei.",
      "supports": "In February 1798 the town gives up its bailiwicks"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Am 2. Mai wurde Zug mit der Urschweiz zum neu geschaffenen Kanton Waldstätten zusammengefasst. Darin bildete Zug einen Distrikt.",
      "supports": "In May 1798 Zug becomes a district of canton Waldstätten (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "wurde die loyal gebliebene Stadt Zug neuer Kantonshauptort",
      "supports": "From 1799 the town of Zug is the capital of Waldstätten"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "1798-1801 Distrikt des helvetischen Kantons Waldstätten, 1801-1803 helvetischer Kanton",
      "supports": "Waldstätten lasts until 1801"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Seit 1803 Kanton der Eidgenossenschaft.",
      "supports": "In 1803 Zug is a canton again (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007373/",
      "title": "HLS: Zug (Kanton)",
      "quote": "Wegen der nun gleichberechtigten Gemeinden Cham, Hünenberg, Steinhausen, Risch und Walchwil",
      "supports": "The old bailiwicks are now equal communes"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001792/",
      "title": "HLS: Oberrüti",
      "quote": "1498-1798 lagen Herrschaft und Kirchenpatronat bei der Stadt Zug. 1803 kam O. zum Kt. Aargau.",
      "supports": "Oberrüti goes to the new canton of Aargau (map layer Oberrüti)"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Zug have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "in einer Saaneschleife gründete er 1157 die Stadt Freiburg.",
      "supports": "In 1157 Berchtold IV of Zähringen founds Fribourg in a bend of the Saane"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Durch Paktieren mit Anwärtern auf den deutschen Königsthron erhielten sie 1127 das Rektorat (Stellvertretung des Königs) in Burgund.",
      "supports": "The Zähringen are the strongest lords in this part of the Empire (rectors of Burgundy)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "ebenso die bischöflichen Orte Bulle, Riaz und La Roche",
      "supports": "The Bishop of Lausanne holds Bulle, Riaz and La Roche"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008148/",
      "title": "HLS: Greyerz (Grafschaft, Bezirk)",
      "quote": "umfasste 1228 die Pfarreien Albeuve, Broc, Château-d'Œx, Grandvillard, Rougemont und Saanen",
      "supports": "The counts of Gruyère rule the upper Saane valley"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "der sich den umliegenden Adel (Greyerz, Aarberg/Arconciel, Montagny, Corbières, Englisberg) und die befestigten Plätze Moudon, Romont und Payerne gefügig gemacht hatte",
      "supports": "Small noble families hold most villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "in Font, Payerne, Cudrefin, Murten/Muntelier, Kerzers und Bümpliz",
      "supports": "Murten and Kerzers are old estates of the Burgundian kings"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "erbte Ulrich III. von Kyburg als Schwestersohn dessen Rechte und Güter in der Westschweiz",
      "supports": "In 1218 the Zähringen die out; the Kyburg counts inherit Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Nach dem Tod Hartmanns V. von Kyburg 1263 stellte sich Freiburg unter den Schutz des Grafen Rudolf von Habsburg, des künftigen Königs.",
      "supports": "In 1263 the town puts itself under Rudolf of Habsburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "drängte Rudolf von Habsburg die überschuldeten kyburgischen Erben 1277 zum Verkauf von Freiburg an seine Söhne",
      "supports": "In 1277 Rudolf, now king, makes the Kyburg heirs sell the town to his sons"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Während der langen Zeit der habsburgischen Stadtherrschaft (1277-1452)",
      "supports": "Fribourg stays under Habsburg until 1452"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Mit dem Erwerb der Vogtei Payerne schuf sich Peter II. 1240 ein ansehnliches Obereigentum, bestehend aus den Kastlaneien Moudon, Romont, Rue, Yverdon und Les Clées.",
      "supports": "Peter II of Savoy takes Romont, Moudon and Payerne after 1240"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001014/",
      "title": "HLS: Murten (Gemeinde)",
      "quote": "1255 stellte sich die Stadt unter den Schutz von Graf Peter II. von Savoyen.",
      "supports": "About 1255 Murten comes under Savoy"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "die Alte Landschaft durch den Kauf der thiersteinischen Lehen 1418/1442 zu ergänzen und zusammen mit Bern 1423 die gemeine Herrschaft Grasburg zu erwerben",
      "supports": "Fribourg rules its Old Countryside; in 1423 it buys Grasburg with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1452 sagte sich Freiburg von Österreich los und unterwarf sich Savoyen",
      "supports": "In 1452 Fribourg breaks with Austria and accepts Savoy as overlord"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1477 verzichtete Herzogin Jolanda von Savoyen auf ihre Rechte über Freiburg, das damit reichsfrei wurde (Reichsunmittelbarkeit)",
      "supports": "In 1477 Savoy gives up its rights; Fribourg becomes a free imperial city"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1481 durch das Stanser Verkommnis – mit Berner Unterstützung und trotz des Widerstands der Länderorte – der Eidgenossenschaft beitreten konnte",
      "supports": "Fribourg joins the Confederation in 1481"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Ab 1481 Ort, seit der Helvetischen Republik (1798-1803) Kanton der Eidgenossenschaft.",
      "supports": "In 1481 Fribourg becomes a member of the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "welche die Stadt Freiburg und die Alte Landschaft umfasste",
      "supports": "Its land is the city and the Old Countryside"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Durch Kauf erwarb Freiburg 1478 Montagny, 1483 Pont",
      "supports": "Montagny bought in 1478"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "als Freiburg die Herrschaften Everdes und Arconciel-Illens (mit Plaffeien) und, mit Bern, die späteren gemeinen Vogteien Murten, Grandson, Echallens und Orbe eroberte",
      "supports": "Illens and Plaffeien taken in the Burgundian Wars; Murten, Grandson, Orbe and Echallens shared with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "zusammen mit Bern 1423 die gemeine Herrschaft Grasburg zu erwerben",
      "supports": "Grasburg (Schwarzenburg) is shared since 1423"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1537 folgten La Roche, Riaz, Bulle und Albeuve, ehemalige Besitzungen des Bischofs von Lausanne",
      "supports": "Bulle, Riaz and La Roche still belong to the Bishop of Lausanne"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Ab 1536 bzw. 1555 Lehnsherrin eines mit savoyischen, bischöflichen und gräflichen Herrschaften durchsetzten Territoriums",
      "supports": "Most of the south and west belongs to Savoy, the bishop or the Count of Gruyère"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Durch Kauf erwarb Freiburg 1478 Montagny, 1483 Pont, 1488 ein Drittel von Estavayer, 1502/1504 Jaun",
      "supports": "Pont 1483, Jaun from 1502"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Dieses gemeinsame Interesse führte 1536 zur militärischen Besetzung der Waadt durch die beiden Orte, die das eroberte Gebiet unter sich aufteilten",
      "supports": "In 1536 Bern (with Fribourg) conquers Vaud"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "kam Freiburg in den Besitz von Estavayer, La Molière, Vallon, Delley, Saint-Aubin und Surpierre, Romont, Rue, Châtel-Saint-Denis, Attalens und Bossonnens sowie Vaulruz",
      "supports": "Fribourg takes Estavayer, Surpierre, Romont, Rue, Châtel-Saint-Denis, Attalens and Vaulruz"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1537 folgten La Roche, Riaz, Bulle und Albeuve, ehemalige Besitzungen des Bischofs von Lausanne",
      "supports": "In 1537 it takes Bulle, La Roche and Riaz from the Bishop of Lausanne"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "ordnete Freiburg das Gebiet neu in 19 Vogteien",
      "supports": "Fribourg rules the new land as bailiwicks"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008148/",
      "title": "HLS: Greyerz (Grafschaft, Bezirk)",
      "quote": "Aufgrund der Verschuldung des Grafen sprach die eidgenössische Tagsatzung 1554 den Konkurs der Grafschaft aus, Freiburg und Bern teilten sie 1555 unter sich auf.",
      "supports": "In 1555 the bankrupt county of Gruyère is divided by Fribourg and Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1555 schliesslich erhielt Freiburg aus der Konkursmasse des letzten Grafen von Greyerz das Gebiet von Montbovon bis La Tour-de-Trême.",
      "supports": "Fribourg gets the lower part, from Montbovon to La Tour-de-Trême"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008148/",
      "title": "HLS: Greyerz (Grafschaft, Bezirk)",
      "quote": "Die Gemeinden Saanen, Rougemont, Château-d'Œx und Rossinière gingen an Bern",
      "supports": "Bern gets the upper part (Saanen and the Pays-d'Enhaut)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "sicherte sich ihr Gebiet hauptsächlich im 15. und 16. Jahrhundert durch Käufe, Eroberungen und Verträge (u.a. Grafschaft Greyerz)",
      "supports": "Now Fribourg has almost the size of today's canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "ordnete Freiburg das Gebiet neu in 19 Vogteien",
      "supports": "It has 19 bailiwicks until 1798"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Ab 1481 Ort, seit der Helvetischen Republik (1798-1803) Kanton der Eidgenossenschaft.",
      "supports": "Fribourg becomes a canton of the Helvetic Republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Damit brach das Ancien Régime zusammen",
      "supports": "The old order (with its bailiwicks) ends in 1798"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "1798 und 1803 wurde der Grundsatz der Rechtsgleichheit eingeführt.",
      "supports": "All people have the same rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Einige Wochen später stand sie einem Gebiet vor, welches das Murtenbiet und die gesamte waadtländisch-freiburgische Broyeregion umfasste.",
      "supports": "Murten and the Payerne/Avenches area go to Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Dafür erhielt der helvetische Kanton Bern die zuvor gemeinsam mit Freiburg verwaltete Herrschaft Schwarzenburg zugeteilt.",
      "supports": "Schwarzenburg goes to Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007592/",
      "title": "HLS: Echallens (Vogtei, Bezirk)",
      "quote": "dann gemeine Vogtei Berns und Freiburgs, seit 1798 Bezirk des Kantons Waadt",
      "supports": "Orbe-Echallens goes to the canton of Léman (Vaud)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007574/",
      "title": "HLS: Grandson (Herrschaft, Bezirk)",
      "quote": "bis 1798 gemeine Herrschaft von Bern und Freiburg, seit 1798 Bezirk des Kantons Waadt",
      "supports": "Grandson goes to the canton of Léman (Vaud)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008631/",
      "title": "HLS: Léman (Kanton)",
      "quote": "mit Ausnahme der Distrikte Avenches und Payerne, die bis am 16.10.1802 Freiburg angegliedert waren",
      "supports": "Fribourg has the districts of Payerne and Avenches until 1802"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008631/",
      "title": "HLS: Léman (Kanton)",
      "quote": "mit Ausnahme der Distrikte Avenches und Payerne, die bis am 16.10.1802 Freiburg angegliedert waren",
      "supports": "In 1802 Payerne and Avenches go back to Vaud"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Murten gelangte als Gemeinde erst 1803 endgültig an Freiburg.",
      "supports": "With the Act of Mediation of 1803 Murten stays with Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Clavaleyres gehörte 1527 zum Kanton Bern, kam 1798 an Freiburg sowie 1807 zurück an Bern",
      "supports": "Clavaleyres belongs to Fribourg from 1798 and goes back to Bern in 1807"
     }
    ],
    "uncertain": [
     "Payerne and Avenches return to Vaud in 1802 (one HLS article gives 16 October 1802; the HLS article on Fribourg says the split came already in 1801)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "und wurde mit der Eingemeindung nach Murten im Jahr 2022 wieder freiburgisch",
      "supports": "In 2022 Clavaleyres merges with Murten and changes to the canton of Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "Clavaleyres infolge einer Fusion 2022 zum Kanton Freiburg",
      "supports": "This is the last change to the borders of Fribourg (latest change listed)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Gleichzeitig wurden sie von König Lothar von Supplinburg als Rektoren von Burgund eingesetzt",
      "supports": "The dukes of Zähringen are rectors (governors) for the king"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "sodass sie bis zu ihrem Aussterben 1218 als Herren der Stadt Solothurn und des St. Ursenstifts fungierten",
      "supports": "The Zähringen rule the town of Solothurn and the St. Ursus church until they die out in 1218"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "entwickelte sich die Stadt Solothurn über mehrere Schritte von der königlichen Untertanenstadt zur freien Reichsstadt",
      "supports": "Step by step Solothurn becomes a free imperial town"
     }
    ]
   },
   {
    "year": 1250,
    "title": "Many small lords",
    "text": [
     "About 1250 Solothurn is a town under the king, but it owns no land outside its walls. The land around it belongs to many noble families.",
     "The counts of Buchegg hold the Bucheggberg, and the Strassberg lords hold the area of Grenchen. The counts of Frohburg rule the Hauenstein passes and Olten. The lords of Bechburg and Falkenstein hold the Thal, and the counts of Thierstein hold the land north of the Passwang.",
     "Much of this land is a fief (land lent) of the bishop of Basel. From 1344 Solothurn gets these lands step by step, by purchase, treaty and war."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "entwickelte sich die Stadt Solothurn über mehrere Schritte von der königlichen Untertanenstadt zur freien Reichsstadt",
      "supports": "Solothurn is a town under the king, on its way to becoming a free imperial town"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Die Territorialpolitik der Stadt Solothurn begann 1344 mit dem Erwerb des Schultheissenamts von den Grafen von Buchegg.",
      "supports": "Solothurn owns no land outside the town before 1344; from 1344 it starts to get land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "die Grafen von Buchegg, die ihren Herrschaftsschwerpunkt im Bucheggberg hatten",
      "supports": "The counts of Buchegg hold the Bucheggberg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "über ein geschlossenes Herrschaftsgebiet, das um die Mitte des 12. Jahrhunderts an die Herren von Strassberg ging",
      "supports": "The Strassberg lords hold the Grenchen area (between Lengnau and Selzach)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Am Oberen und Unteren Hauenstein bauten die Grafen von Frohburg ihre Machtstellung aus.",
      "supports": "The counts of Frohburg rule the Hauenstein passes"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "jene über den Unteren Hauenstein durch Olten und die Frohburg als Stammsitz",
      "supports": "The Frohburg counts hold Olten"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "über die gräflichen Rechte als Lehen der Basler Bischöfe",
      "supports": "Much of this land is a fief of the bishop of Basel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "unter anderen an die um Oensingen und Balsthal begüterten Herren von Bechburg und Falkenstein",
      "supports": "The lords of Bechburg and Falkenstein hold the Thal (Balsthal area)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Oberhalb Lostorf und in Gösgen hatten die Freiherren von Wartenfels und Gösgen ihre Stammburgen.",
      "supports": "Lords of Gösgen and Wartenfels (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Nördlich des Passwangs dehnten die Grafen von Thierstein als Inhaber der Landgrafschaft Sisgau ihre Herrschaft aus.",
      "supports": "The counts of Thierstein hold the land north of the Passwang"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Durch Käufe, Burgrechtsverträge und militärische Eroberungen erwarb der Stadtstaat ein Territorium",
      "supports": "Solothurn gets its land by purchase, treaty and war"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Die Territorialpolitik der Stadt Solothurn begann 1344 mit dem Erwerb des Schultheissenamts von den Grafen von Buchegg.",
      "supports": "In the 1300s the city starts to get land around it"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "der Eidgenossen über die Habsburger 1386 bei Sempach eroberten Solothurn und Bern unter anderem auch deshalb Grenchen, Altreu und Büren",
      "supports": "In 1386, after Sempach, Solothurn takes Grenchen and Altreu together with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Bereits 1391 hatte Solothurn die Herrschaft Buchegg gekauft und aus ihr ebenfalls eine Vogtei gemacht.",
      "supports": "In 1391 Solothurn buys the lordship of Buchegg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "In der Teilung von 1393 verzichtete Solothurn auf Büren und vereinigte die beiden anderen ihm ganz überlassenen Herrschaften zur Vogtei Lebern.",
      "supports": "From 1393 Grenchen and Altreu form the bailiwick of Lebern"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "So erwarb Solothurn 1402 die Herrschaft Falkenstein und 1411 die Herrschaft Bipp",
      "supports": "Falkenstein 1402"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "1426 kauften die beiden Städte gemeinsam von den Herren von Falkenstein die Landgrafschaft Buchsgau als Lehen des Fürstbischofs von Basel.",
      "supports": "The Buchsgau with Bern 1426"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "erhielt Solothurn 1426 vom Bischof von Basel die Stadt Olten samt Hochgerichtsbarkeit als Pfand",
      "supports": "Olten as a pledge 1426"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "1458 erwarb die Stadt von den Herren von Falkenstein die Herrschaften Frohburg und Gösgen",
      "supports": "Gösgen 1458"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "1463 zur Aufteilung der restlichen Besitzungen zwischen Jurasüdfuss und Aare kam, verzichtete Solothurn auf Bipp und erhielt dafür die zur Vogtei Bechburg",
      "supports": "Bechburg 1463"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "1466 die Herrschaft Halten und weitere Gerichte, die Solothurn mit dem Stiftsgebiet südlich der Aare zur Vogtei Kriegstetten zusammenfasste",
      "supports": "Kriegstetten 1466"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Ab 1481 eidgenössischer Ort",
      "supports": "In 1481 Solothurn becomes a member of the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Nach ersten vergeblichen Eroberungszügen um die Mitte des 15. Jahrhunderts wurde bei Solothurns Aufnahme in den eidgenössischen Bund von 1481 ein eidgenössischer Hilfskreis festgeschrieben",
      "supports": "Its land north of the Jura is still missing in 1481"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Zwischen 1485 und 1522 kaufte Solothurn von den Grafen von Thierstein die Herrschaften Seewen und Büren sowie die Burg Dorneck",
      "supports": "Dorneck and Seewen 1485–1522"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Mit der 1515 gekauften Herrschaft Rotberg entstand aus diesem Gebiet die Vogtei Dorneck.",
      "supports": "Rotberg 1515"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "die Vogtei Thierstein bildete und diese 1527 um Bärschwil und Kleinlützel erweiterte",
      "supports": "Thierstein and Kleinlützel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "1490 durch die Hälfte des Gerichts Oltingen und 1523 durch Kienberg ergänzt",
      "supports": "Kienberg 1523"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Aus der 1527 erworbenen Herrschaft Gilgenberg wurde die Vogtei gleichen Namens geschaffen.",
      "supports": "Gilgenberg 1527"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Die Exklaven Kleinlützel und Hofstetten-Flüh, Metzerlen, Rodersdorf stossen an den französischen Sundgau",
      "supports": "Some parts are exclaves"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "mit dem Anspruch auf die Hochgerichtsbarkeit, den die Stadt Basel 1532 schliesslich anerkannte",
      "supports": "In 1532 Solothurn's rule over Dorneck becomes final"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Es folgten noch Ablösungen von Pfandschaften des Basler Fürstbischofs, namentlich von Olten 1532",
      "supports": "In 1532 Solothurn's rule over Olten becomes final"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Damit war die Territorialbildung im Wesentlichen abgeschlossen.",
      "supports": "Then its territory is complete"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "kam Wisen 1826 als letzte Gemeinde vollständig zu Solothurn",
      "supports": "Since then the borders have hardly changed (only small later steps)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007386/",
      "title": "HLS: Solothurn (Kanton)",
      "quote": "Einzig im Bucheggberg behielt Bern die Hochgerichtsbarkeit bis 1798.",
      "supports": "Until 1798 Bern kept the high court in the Bucheggberg"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "trat neben den Vogt, der den Fürstbischof als Stadtherrn vertrat",
      "supports": "The bishop of Basel rules the city of Basel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1245 wurden die Grafen gezwungen, die Herrschaft Birseck an den Fürstbischof abzutreten.",
      "supports": "The bishop holds Birseck (since 1245)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Im Birstal stützte sich die landesherrliche Macht des Fürstbischofs auf Laufen",
      "supports": "The bishop holds the Laufen valley"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Die Grafen von Frohburg, die im Sisgau Waldenburg, Liestal und Neu-Homberg angelegt hatten",
      "supports": "The Frohburg counts hold Waldenburg, Liestal and Homburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Sicher edelfreien Ranges waren die Herren von Ramstein und von Rotberg",
      "supports": "Other nobles hold the rest"
     }
    ],
    "uncertain": [
     "The bishop already holds the Laufen valley about 1260 (the source names Laufen as his base in the Birs valley in the 13th–14th centuries and dates the town to about 1295)."
    ]
   },
   {
    "year": 1305,
    "title": "The bishop buys the hills",
    "text": [
     "The Frohburg counts sell Waldenburg to the bishop of Basel in 1265. In 1303 their Homberg branch sells Liestal and Homburg to him.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1265 verkauften die Frohburger die Herrschaft Waldenburg",
      "supports": "The Frohburg counts sell Waldenburg in 1265"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1303 veräusserte der Homberger Zweig der Frohburger die Herrschaften Liestal und Homberg an den Fürstbischof",
      "supports": "In 1303 the Homberg branch sells Liestal and Homburg to the bishop (corrects 'Liestal 1305')"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "Zwischen 1360 und 1390 brachte die Stadt Basel durch Pfand oder Kauf die wichtigsten Herrschaftsrechte an sich (u.a. Steuer, Zoll, Münze, Judensteuer, Vogtei, Schultheissenamt)",
      "supports": "Between 1360 and 1390 the city buys rights from the bishop, e.g. taxes and coins"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Nachdem sie bereits 1392 die rechtsrheinische Stadt Kleinbasel gekauft hatte, erwarb sie 1400 pfandweise die Ämter Liestal, Waldenburg und Homberg.",
      "supports": "1392 Kleinbasel; 1400 Liestal, Waldenburg and Homburg as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "ein um die Farnsburg gruppierter Herrschaftsverband der Grafen von Thierstein",
      "supports": "Counts of Thierstein and other nobles (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Nachdem sie bereits 1392 die rechtsrheinische Stadt Kleinbasel gekauft hatte, erwarb sie 1400 pfandweise die Ämter Liestal, Waldenburg und Homberg.",
      "supports": "In 1400 the city gets Liestal, Waldenburg and Homburg as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Erst 1461 erzielte Basel mit dem Kauf der Herrschaft Farnsburg",
      "supports": "In 1461 Basel buys Farnsburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Pfandweise erwarb Basel 1470 von den Münch die Herrschaft Muttenz-Münchenstein (1515 in festen Besitz umgewandelt).",
      "supports": "In 1470 Basel takes Muttenz and Münchenstein as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1501, beim Eintritt Basels in den Bund der Eidgenossen, war die Territorialbildung Basels noch nicht abgeschlossen.",
      "supports": "In 1501 Basel joins the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008558/",
      "title": "HLS: Basel (Fürstbistum)",
      "quote": "In der frühen Neuzeit umfasste das Fürstbistum den heutigen Kanton Jura, den Berner Jura, Teile des Kantons Basel-Landschaft (Birseck, Laufen)",
      "supports": "The Prince-Bishopric still holds Birseck and the Laufen valley"
     }
    ]
   },
   {
    "year": 1534,
    "title": "Territory almost complete",
    "text": [
     "Between 1513 and 1534 Basel buys more villages: Bettingen, Ramstein, Riehen, Pratteln, Biel-Benken, Arisdorf, Binningen and Bottmingen.",
     "In 1640 Kleinhüningen follows. In 1798 the land becomes the Helvetic canton of Basel."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Bettingen 1513, die Herrschaft Ramstein mit Bretzwil 1518, Riehen 1522, Biel und Benken 1526, Arisdorf 1532, Binningen und Bottmingen 1534, Kleinhüningen 1640",
      "supports": "Between 1513 and 1534 Basel buys Bettingen, Ramstein, Riehen, Biel-Benken, Arisdorf, Binningen and Bottmingen; Kleinhüningen in 1640"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Vor allem fehlte bis zum Erwerb von Pratteln 1525 eine direkte Verbindung",
      "supports": "Pratteln (1525)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1501-1833 Ort der Eidgenossenschaft bzw. Kanton der Helvetischen Republik",
      "supports": "In 1798 the land becomes the Helvetic canton of Basel"
     }
    ]
   },
   {
    "year": 1815,
    "title": "Basel gets Birseck",
    "text": [
     "In 1815 the Congress of Vienna gives Basel nine villages of the old Prince-Bishopric: the old bailiwicks of Birseck and Pfeffingen, for example Arlesheim, Reinach, Aesch and Allschwil.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "nahm der Kanton Basel per 28. Dezember die ehemaligen fürstbischöflichen Vogteien Pfeffingen und Birseck «in Besitz»",
      "supports": "In 1815 Basel gets the old bailiwicks of Birseck and Pfeffingen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Mit Vertretern der betroffenen neun Gemeinden war am 7. November die Vereinigungsurkunde besiegelt worden.",
      "supports": "Nine villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007560/",
      "title": "HLS: Birseck",
      "quote": "zu welcher der Twing und Bann über die Dörfer Arlesheim, Reinach, Oberwil, Allschwil, Hochwald und Füllinsdorf",
      "supports": "Arlesheim, Reinach and Allschwil are Birseck villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008482/",
      "title": "HLS: Laufen (BL, Bezirk)",
      "quote": "Von 1815 an war das Laufental bernisch",
      "supports": "The Laufen valley goes to Bern"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "das Begehren nach einer Verfassungsrevision im Sinne von Freiheit und Gleichheit enthielt",
      "supports": "The people of the countryside want equal rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "führten erneute gewaltsame Auseinandersetzungen im August 1831 zur nunmehr militärischen Intervention der Tagsatzung",
      "supports": "Fights in 1831–1833"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Am 26. August 1833 beschloss die eidgenössische Tagsatzung die Totaltrennung des Kantons Basel",
      "supports": "The canton splits on 26 August 1833"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "Ihm wurden neben der Stadt nur die rechtsrheinischen Gemeinden Riehen, Bettingen und Kleinhüningen zugeschlagen.",
      "supports": "Basel-Stadt keeps only the city and Riehen, Bettingen and Kleinhüningen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "Seit der Trennung des Kantons Basel in die beiden Halbkantone Basel-Stadt und Basel-Landschaft 1833 Halbkanton der Eidgenossenschaft.",
      "supports": "Basel-Landschaft: separate half-canton since 1833 (map layer)"
     }
    ],
    "uncertain": [
     "Since 1833 the borders of Basel-Stadt have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "trat neben den Vogt, der den Fürstbischof als Stadtherrn vertrat",
      "supports": "The bishop of Basel rules the city of Basel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1245 wurden die Grafen gezwungen, die Herrschaft Birseck an den Fürstbischof abzutreten.",
      "supports": "The bishop holds Birseck (since 1245)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Im Birstal stützte sich die landesherrliche Macht des Fürstbischofs auf Laufen",
      "supports": "The bishop holds the Laufen valley"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Die Grafen von Frohburg, die im Sisgau Waldenburg, Liestal und Neu-Homberg angelegt hatten",
      "supports": "The Frohburg counts hold Waldenburg, Liestal and Homburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Sicher edelfreien Ranges waren die Herren von Ramstein und von Rotberg",
      "supports": "Other nobles hold the rest"
     }
    ],
    "uncertain": [
     "The bishop already holds the Laufen valley about 1260 (the source names Laufen as his base in the Birs valley in the 13th–14th centuries and dates the town to about 1295)."
    ]
   },
   {
    "year": 1305,
    "title": "The bishop buys the hills",
    "text": [
     "The Frohburg counts sell Waldenburg to the bishop of Basel in 1265. In 1303 their Homberg branch sells Liestal and Homburg to him.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1265 verkauften die Frohburger die Herrschaft Waldenburg",
      "supports": "The Frohburg counts sell Waldenburg in 1265"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1303 veräusserte der Homberger Zweig der Frohburger die Herrschaften Liestal und Homberg an den Fürstbischof",
      "supports": "In 1303 the Homberg branch sells Liestal and Homburg to the bishop (corrects 'Liestal 1305')"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "Zwischen 1360 und 1390 brachte die Stadt Basel durch Pfand oder Kauf die wichtigsten Herrschaftsrechte an sich (u.a. Steuer, Zoll, Münze, Judensteuer, Vogtei, Schultheissenamt)",
      "supports": "Between 1360 and 1390 the city buys rights from the bishop, e.g. taxes and coins"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Nachdem sie bereits 1392 die rechtsrheinische Stadt Kleinbasel gekauft hatte, erwarb sie 1400 pfandweise die Ämter Liestal, Waldenburg und Homberg.",
      "supports": "1392 Kleinbasel; 1400 Liestal, Waldenburg and Homburg as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "ein um die Farnsburg gruppierter Herrschaftsverband der Grafen von Thierstein",
      "supports": "Counts of Thierstein and other nobles (map layer)"
     }
    ]
   },
   {
    "year": 1501,
    "title": "Countryside of the city of Basel",
    "text": [
     "In 1400 the city of Basel gets Liestal, Waldenburg and Homburg as a pledge from the bishop. In 1461 it buys Farnsburg, and in 1470 it takes Muttenz and Münchenstein as a pledge.",
     "In 1501 Basel joins the Confederation. The people of the countryside are subjects of the city. Birseck and the Laufen valley still belong to the Prince-Bishopric of Basel."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Nachdem sie bereits 1392 die rechtsrheinische Stadt Kleinbasel gekauft hatte, erwarb sie 1400 pfandweise die Ämter Liestal, Waldenburg und Homberg.",
      "supports": "In 1400 the city gets Liestal, Waldenburg and Homburg as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Erst 1461 erzielte Basel mit dem Kauf der Herrschaft Farnsburg",
      "supports": "In 1461 Basel buys Farnsburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Pfandweise erwarb Basel 1470 von den Münch die Herrschaft Muttenz-Münchenstein (1515 in festen Besitz umgewandelt).",
      "supports": "In 1470 Basel takes Muttenz and Münchenstein as a pledge"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1501, beim Eintritt Basels in den Bund der Eidgenossen, war die Territorialbildung Basels noch nicht abgeschlossen.",
      "supports": "In 1501 Basel joins the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008558/",
      "title": "HLS: Basel (Fürstbistum)",
      "quote": "In der frühen Neuzeit umfasste das Fürstbistum den heutigen Kanton Jura, den Berner Jura, Teile des Kantons Basel-Landschaft (Birseck, Laufen)",
      "supports": "The Prince-Bishopric still holds Birseck and the Laufen valley"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Landvögte aus dem städtischen, auch zünftischen Bürgertum, denen die Untertanen den Huldigungseid zu leisten hatten",
      "supports": "The countryside is ruled by the city through governors; its people are subjects"
     }
    ]
   },
   {
    "year": 1534,
    "title": "Territory almost complete",
    "text": [
     "Between 1513 and 1534 Basel buys more villages: Bettingen, Ramstein, Riehen, Pratteln, Biel-Benken, Arisdorf, Binningen and Bottmingen.",
     "In 1798 the city and the countryside become the Helvetic canton of Basel."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Bettingen 1513, die Herrschaft Ramstein mit Bretzwil 1518, Riehen 1522, Biel und Benken 1526, Arisdorf 1532, Binningen und Bottmingen 1534, Kleinhüningen 1640",
      "supports": "Between 1513 and 1534 Basel buys Bettingen, Ramstein, Riehen, Biel-Benken, Arisdorf, Binningen and Bottmingen; Kleinhüningen in 1640"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Vor allem fehlte bis zum Erwerb von Pratteln 1525 eine direkte Verbindung",
      "supports": "Pratteln (1525)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "1501-1833 Ort der Eidgenossenschaft bzw. Kanton der Helvetischen Republik",
      "supports": "In 1798 the land becomes the Helvetic canton of Basel"
     }
    ]
   },
   {
    "year": 1815,
    "title": "Birseck joins Basel",
    "text": [
     "In 1815 the Congress of Vienna gives Basel nine villages of the old Prince-Bishopric: the old bailiwicks of Birseck and Pfeffingen, for example Arlesheim, Reinach, Aesch and Allschwil.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "nahm der Kanton Basel per 28. Dezember die ehemaligen fürstbischöflichen Vogteien Pfeffingen und Birseck «in Besitz»",
      "supports": "In 1815 Basel gets the old bailiwicks of Birseck and Pfeffingen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Mit Vertretern der betroffenen neun Gemeinden war am 7. November die Vereinigungsurkunde besiegelt worden.",
      "supports": "Nine villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007560/",
      "title": "HLS: Birseck",
      "quote": "zu welcher der Twing und Bann über die Dörfer Arlesheim, Reinach, Oberwil, Allschwil, Hochwald und Füllinsdorf",
      "supports": "Arlesheim, Reinach and Allschwil are Birseck villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008482/",
      "title": "HLS: Laufen (BL, Bezirk)",
      "quote": "Von 1815 an war das Laufental bernisch",
      "supports": "The Laufen valley goes to Bern"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "das Begehren nach einer Verfassungsrevision im Sinne von Freiheit und Gleichheit enthielt",
      "supports": "The people of the countryside want equal rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "führten erneute gewaltsame Auseinandersetzungen im August 1831 zur nunmehr militärischen Intervention der Tagsatzung",
      "supports": "Fights in 1831–1833"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007387/",
      "title": "HLS: Basel (Kanton)",
      "quote": "Am 26. August 1833 beschloss die eidgenössische Tagsatzung die Totaltrennung des Kantons Basel",
      "supports": "The canton splits on 26 August 1833"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "Seit der Trennung des Kantons Basel in die beiden Halbkantone Basel-Stadt und Basel-Landschaft 1833 Halbkanton der Eidgenossenschaft.",
      "supports": "Basel-Landschaft becomes a half-canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "Amtssprache ist Deutsch, Hauptort Liestal.",
      "supports": "Liestal is its capital"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007478/",
      "title": "HLS: Basel-Stadt",
      "quote": "Ihm wurden neben der Stadt nur die rechtsrheinischen Gemeinden Riehen, Bettingen und Kleinhüningen zugeschlagen.",
      "supports": "Basel-Landschaft gets all the countryside left of the Rhine (Basel-Stadt keeps only the right-bank villages)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008482/",
      "title": "HLS: Laufen (BL, Bezirk)",
      "quote": "Von 1815 an war das Laufental bernisch",
      "supports": "Laufen valley: part of Bern (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "Durch die Gründung des Kantons Jura wurde das Laufental zu einer bernischen Exklave.",
      "supports": "In 1979 the Laufen district is cut off from the rest of Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007477/",
      "title": "HLS: Basel-Landschaft",
      "quote": "in der erneuten Abstimmung von 1989 knapp für einen Wechsel zu Basel-Landschaft, wo es seit 1994 den fünften Bezirk bildet",
      "supports": "In 1989 Laufen votes to join Basel-Landschaft; part of it since 1994"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007383/",
      "title": "HLS: Bern (Kanton)",
      "quote": "sodass der Amtsbezirk Laufen auf den 1. Januar 1994 aus dem Kanton Bern ausschied",
      "supports": "It moves on 1 January 1994"
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
     "In 1049 Count Eberhard of Nellenburg founds the abbey of All Saints (Allerheiligen) at Schaffhausen. Later his son, Count Burkhard, gives the town to the abbey and gives up his lordship over it.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "1049 stiftete Graf Eberhard die Benediktinerabtei Allerheiligen als Eigenkloster.",
      "supports": "In 1049 Count Eberhard of Nellenburg founds All Saints abbey"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Auch übergab er dem Kloster die villa Scafhusa",
      "supports": "Count Burkhard gives the town to the abbey"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Damit wurde Allerheiligen Stadtherrin mit Münz- und Marktrecht sowie allen anderen Gerechtigkeiten.",
      "supports": "The abbey is the lord of the town (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Die Benediktinerabteien St. Gallen, St. Blasien, St. Georgen, Reichenau, Rheinau, Petershausen, das Kloster Öhningen und der Bischof von Konstanz erwarben",
      "supports": "The land around belongs to many other lords"
     }
    ],
    "uncertain": [
     "Count Burkhard gives the town to the abbey between 1080 and 1092."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Doch schon 1197 verlieh Philipp von Schwaben die Vogtei und Herrschaft über Schaffhausen an Herzog Berchtold V. von Zähringen.",
      "supports": "From 1197 the dukes of Zähringen hold the bailiff rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Mit dessen Tod 1218 endete die Zähringer Herrschaft über Schaffhausen und die Stadt fiel an das Reich zurück.",
      "supports": "In 1218 the rights go back to the Empire (map layer imperial town)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "1250 machte die aufstrebende Bürgerschaft der Stadt Schaffhausen dem Kloster Allerheiligen die Herrschaft streitig.",
      "supports": "The citizens slowly take power from the abbey"
     }
    ]
   },
   {
    "year": 1330,
    "title": "Pledged to Habsburg",
    "text": [
     "In 1330 the town is pledged (given as security for a loan) to Habsburg. Until 1415 the town cannot build its own territory.",
     "The Bishop of Constance rules Neunkirch and Hallau in the Klettgau. In 1415 the town becomes free again, and later it buys land from these lords."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Während der österreichischen Pfandschaft (1330-1415) war eine eigene Territorialpolitik nicht möglich.",
      "supports": "Pledged to Habsburg 1330–1415; no own territory (map layer Schaffhausen)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "in der dem Bischof von Konstanz gehörenden Kleinstadt Neunkirch",
      "supports": "The Bishop of Constance rules Neunkirch (map layer Bishop)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "in dem unter der Herrschaft des Bischofs von Konstanz stehenden Dorf Hallau",
      "supports": "The Bishop of Constance rules Hallau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "da Schaffhausen 1415 wieder reichsfrei wurde",
      "supports": "In 1415 the town becomes free again"
     }
    ],
    "uncertain": [
     "The Bishop of Constance rules Neunkirch and Hallau since 1302."
    ]
   },
   {
    "year": 1501,
    "title": "The city joins the Swiss",
    "text": [
     "In 1501 Schaffhausen becomes the twelfth member of the Confederation. The city has been free under the Emperor again since 1415.",
     "At this time it rules little land. It holds Thayngen, but Austria keeps the high court there."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "1501 trat die Stadt als zwölfter Ort der Eidgenossenschaft bei.",
      "supports": "In 1501 Schaffhausen becomes the twelfth member (map layer City)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "da Schaffhausen 1415 wieder reichsfrei wurde",
      "supports": "Free under the Emperor since 1415"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007547/",
      "title": "HLS: Reiat",
      "quote": "Die zur Landgrafschaft Nellenburg (Österreich) gehörende Hochgerichtsbarkeit gelangte erst 1723 an Schaffhausen.",
      "supports": "In the Reiat (with Thayngen) Austria keeps the high court (map layer Thayngen)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007547/",
      "title": "HLS: Reiat",
      "quote": "Distrikt und umfasste zusätzlich die Dörfer Barzheim, Buch und Dörflingen sowie Thayngen als Hauptort",
      "supports": "Thayngen belongs to the Reiat area"
     }
    ],
    "uncertain": [
     "Schaffhausen holds Thayngen since 1460."
    ]
   },
   {
    "year": 1530,
    "title": "Land from churches and the bishop",
    "text": [
     "Between 1520 and 1530 the city gets much land. Rüdlingen and Buchberg come in 1520. In 1524 the abbey of All Saints gives up parts of Merishausen, Neuhausen and other places.",
     "In 1525 the city buys Neunkirch and Hallau from the Bishop of Constance. In 1529 the convent of Paradies sells Löhningen (half), Lohn, Büttenhardt and other villages. Schleitheim and Beggingen follow in 1530.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/001276/",
      "title": "DHS: Buchberg",
      "quote": "B. échut à la ville de Schaffhouse en 1520 et constitua jusqu'en 1798 un bailliage avec Rüdlingen et Ellikon am Rhein",
      "supports": "Buchberg and Rüdlingen come to the city in 1520 (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001280/",
      "title": "HLS: Rüdlingen",
      "quote": "1520 erwarb die Stadt Schaffhausen die niedere Gerichtsbarkeit",
      "supports": "Rüdlingen comes in 1520"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "1524 trat das säkularisierte Kloster Allerheiligen Teile von Merishausen, Neuhausen, Hemmental, Reuthe im Hegau und Grafenhausen im Schwarzwald ab.",
      "supports": "In 1524 All Saints gives up parts of Merishausen, Neuhausen and others (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "eroberte Schaffhausen das dem Bischof von Konstanz gehörende Hallau und kaufte 1525 zusammen mit Neunkirch die Herrschaft mit allen Rechten",
      "supports": "In 1525 the city buys Neunkirch and Hallau from the bishop (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "1529 verkaufte das von der Säkularisation bedrohte Klarissenkloster Paradies der Stadt Schaffhausen Guntmadingen, halb Löhningen, Lohn, Opfertshofen, Altdorf und Büttenhardt.",
      "supports": "In 1529 Paradies sells Löhningen (half), Lohn, Büttenhardt and others (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "deren Niedergerichtsbarkeit und teilweise auch das Hochgericht bei der Stadt Schaffhausen lag",
      "supports": "In many villages the city holds only the lower court"
     }
    ],
    "uncertain": [
     "Schleitheim and Beggingen come to Schaffhausen in 1530."
    ]
   },
   {
    "year": 1723,
    "title": "Full rule over the countryside",
    "text": [
     "In 1657 the city buys the high court in its Klettgau villages. In 1723 it gets the high court in the Reiat from Austria.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007545/",
      "title": "HLS: Klettgau",
      "quote": "Indem sie die Grafen von Sulz zu ihren Schuldnern machte, gelangte sie 1657 durch Kauf auch in den Besitz der Hochgerichte.",
      "supports": "In 1657 the city buys the high court in the Klettgau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007547/",
      "title": "HLS: Reiat",
      "quote": "Die zur Landgrafschaft Nellenburg (Österreich) gehörende Hochgerichtsbarkeit gelangte erst 1723 an Schaffhausen.",
      "supports": "In 1723 it gets the high court in the Reiat from Austria (map layer countryside)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007381/",
      "title": "HLS: Zürich (Kanton)",
      "quote": "Winterthur und Stein am Rhein wurden 1467 und 1484 zürcherisch",
      "supports": "Stein am Rhein belongs to Zurich (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001268/",
      "title": "HLS: Dörflingen",
      "quote": "1434 an die Stadt Zürich verpfändet",
      "supports": "Dörflingen belongs to Zurich"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "wie 1638 denjenigen von Gailingen und Randegg, scheiterte der Abschluss am Veto Österreichs",
      "supports": "The purchase of Gailingen fails"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Die Stadt Stein am Rhein und die Dörfer Hemishofen und Ramsen im oberen Kantonsteil kamen 1798 zu Schaffhausen",
      "supports": "In 1798 Stein am Rhein, Hemishofen and Ramsen go to Schaffhausen (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "wie auch das bisher zürcherische Dörflingen, das mit dem Kanton Zürich 1798 gegen Ellikon am Rhein getauscht wurde",
      "supports": "Zurich gives Dörflingen in exchange for Ellikon am Rhein"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001891/",
      "title": "HLS: Diessenhofen",
      "quote": "Der Bezirk Diessenhofen wurde 1798 als Verwaltungsdistrikt dem Kanton Schaffhausen, 1800 definitiv dem Kanton Thurgau zugeordnet.",
      "supports": "The Diessenhofen area is part of the canton 1798–1800 (map layer)"
     }
    ]
   },
   {
    "year": 1967,
    "title": "Today's borders",
    "text": [
     "In 1967 a border settlement with Germany gives the small hamlet of Verenahof, until then a German enclave, to Schaffhausen. Büsingen stays a German enclave inside Swiss land.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Die letzte grosse Grenzbereinigung mit Deutschland erfolgte 1967, als der Weiler Verenahof, bisher eine deutsche Enklave, an Schaffhausen gelangte.",
      "supports": "In 1967 Verenahof goes to Schaffhausen (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007388/",
      "title": "HLS: Schaffhausen (Kanton)",
      "quote": "Das Dorf Büsingen vor den Toren der Stadt Schaffhausen blieb deutsch",
      "supports": "Büsingen stays a German enclave"
     }
    ],
    "uncertain": [
     "Since 1967 the borders of Schaffhausen have not changed."
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
     "The valley of Appenzell belongs to the Abbey of St. Gallen. The old Latin name Abbacella means 'cell of the abbot'. The abbot's officials (Meier) collect his dues and judge the farmers.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "In der Gründungsurkunde der Kirche Appenzell (Abbacella) aus dem Jahr 1071",
      "supports": "The old name Abbacella"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Die Funktion der Meier dürfte sich auf den Einzug der grundherrlichen Abgaben und die Ausübung der Niedergerichtsbarkeit beschränkt haben.",
      "supports": "The abbot's officials collect dues and judge the farmers"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Das faktische Ende der äbtischen Landesherrschaft in Appenzell brachten die eidgenössischen Schiedssprüche, mit denen 1429 die Appenzeller Kriege ihren Abschluss fanden.",
      "supports": "The abbey rules until the Appenzell Wars end in 1429 (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "1379 Appenzell daz lant (noch ohne Trogen, Herisau und das Vorderland); eventuell ab 1403, sicher 1429-1597 im Umfang der beiden nachfolgenden Halbkantone",
      "supports": "Herisau and the Vorderland join between 1403 and 1429"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Januar 1401 zum Schutz der vorgeblich alten Rechte",
      "supports": "The Appenzell Wars begin in 1401"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "vorerst 1411 durch das Burg- und Landrecht mit den sieben eidgenössischen Orten (ohne Bern)",
      "supports": "Appenzell is an ally of the Swiss from 1411"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Dezember 1513 in den Bund aufzunehmen.",
      "supports": "In 1513 it becomes a full member (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "durch die bis 1513 die dreizehnörtige Eidgenossenschaft entstand",
      "supports": "Appenzell is the thirteenth member"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "vor allem mit der Mitregierung der Landvogtei Rheintal ab 1500",
      "supports": "Since 1500 Appenzell shares the rule of the Rheintal (map layer Rheintal)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "eventuell ab 1403, sicher 1429-1597 im Umfang der beiden nachfolgenden Halbkantone",
      "supports": "By 1429 the land includes Herisau and the Vorderland"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "wachsende Bedeutung konfessioneller Fragen nach der Glaubensspaltung",
      "supports": "After the Reformation the people disagree about religion"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "1597 Trennung in Appenzell Ausserrhoden und Appenzell Innerrhoden.",
      "supports": "In 1597 the land splits into two half-cantons (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007476/",
      "title": "HLS: Appenzell Ausserrhoden",
      "quote": "Das 1599 im Gefolge des sogenannten Tannerhandels proklamierte Selbstverständnis als einheitliches reformiertes Staatswesen",
      "supports": "Ausserrhoden is the Protestant half"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "das Hinter-, Mittel- und Vorderland des heutigen Halbkantons Appenzell Ausserrhoden",
      "supports": "Ausserrhoden: Hinterland, Mittelland and Vorderland"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007476/",
      "title": "HLS: Appenzell Ausserrhoden",
      "quote": "Als mitregierender Ort der Herrschaft Rheintal stellte Appenzell Ausserrhoden 1597-1798 sechs Landvögte.",
      "supports": "Ausserrhoden keeps a share in the rule of the Rheintal (map layer Rheintal)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "wählte sie Landammann, Säckelmeister, Landschreiber, Landweibel, Gerichtsschreiber (bis 1617) und den Landvogt für das Rheintal",
      "supports": "Innerrhoden also keeps a share in the Rheintal"
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of the canton of Säntis",
    "text": [
     "In 1798 the Helvetic Republic joins both Appenzells with the lands of the Abbey of St. Gallen, the town of St. Gallen, the northern Rheintal and the lower Toggenburg. Together they form the canton of Säntis."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "gebildet aus der ehemaligen Fürstabtei St. Gallen mit den Territorialherrschaften Alte Landschaft und unteres Toggenburg",
      "supports": "Säntis includes the abbey lands and the lower Toggenburg (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "Appenzell Ausserrhoden und Appenzell Innerrhoden und der ehemaligen Landvogtei Rheintal (Gebiet nördlich des Hirschensprungs)",
      "supports": "Säntis includes both Appenzells and the northern Rheintal"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007476/",
      "title": "HLS: Appenzell Ausserrhoden",
      "quote": "Zwischen 1798 und 1803, als beide Appenzell im helvetischen Kanton Säntis aufgingen",
      "supports": "Both Appenzells are part of Säntis 1798–1803"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "welche die beiden appenzellischen Halbkantone (zusammen eine Stimme an der Tagsatzung) wieder erstehen liess",
      "supports": "In 1803 the Act of Mediation restores both half-cantons (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007648/",
      "title": "HLS: Rheintal",
      "quote": "bildete das gesamte Rheintal 1803-1831 einen Distrikt mit dem Hauptort Altstätten",
      "supports": "The Rheintal goes to the new canton of St. Gallen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007476/",
      "title": "HLS: Appenzell Ausserrhoden",
      "quote": "Nachdem der Kanton mit der Mediationsakte von 1803 restituiert war",
      "supports": "Ausserrhoden is restored in 1803"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Appenzell Ausserrhoden have not changed."
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
     "The valley of Appenzell belongs to the Abbey of St. Gallen. The old Latin name Abbacella means 'cell of the abbot'. The abbot's officials (Meier) collect his dues and judge the farmers.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "In der Gründungsurkunde der Kirche Appenzell (Abbacella) aus dem Jahr 1071",
      "supports": "The old name Abbacella"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Die Funktion der Meier dürfte sich auf den Einzug der grundherrlichen Abgaben und die Ausübung der Niedergerichtsbarkeit beschränkt haben.",
      "supports": "The abbot's officials collect dues and judge the farmers"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Das faktische Ende der äbtischen Landesherrschaft in Appenzell brachten die eidgenössischen Schiedssprüche, mit denen 1429 die Appenzeller Kriege ihren Abschluss fanden.",
      "supports": "The abbey rules until the Appenzell Wars end in 1429 (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "1379 Appenzell daz lant (noch ohne Trogen, Herisau und das Vorderland); eventuell ab 1403, sicher 1429-1597 im Umfang der beiden nachfolgenden Halbkantone",
      "supports": "Herisau and the Vorderland join between 1403 and 1429"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Januar 1401 zum Schutz der vorgeblich alten Rechte",
      "supports": "The Appenzell Wars begin in 1401"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "vorerst 1411 durch das Burg- und Landrecht mit den sieben eidgenössischen Orten (ohne Bern)",
      "supports": "Appenzell is an ally of the Swiss from 1411"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "Dezember 1513 in den Bund aufzunehmen.",
      "supports": "In 1513 it becomes a full member (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007384/2021-01-15/",
      "title": "HLS: Uri",
      "quote": "durch die bis 1513 die dreizehnörtige Eidgenossenschaft entstand",
      "supports": "Appenzell is the thirteenth member"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "vor allem mit der Mitregierung der Landvogtei Rheintal ab 1500",
      "supports": "Since 1500 Appenzell shares the rule of the Rheintal (map layer Rheintal)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "wachsende Bedeutung konfessioneller Fragen nach der Glaubensspaltung",
      "supports": "The land splits because of religion"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007389/",
      "title": "HLS: Appenzell (Kanton)",
      "quote": "1597 Trennung in Appenzell Ausserrhoden und Appenzell Innerrhoden.",
      "supports": "In 1597 the land splits into two half-cantons (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "die inneren fünf Rhoden Schwende, Rüte, Lehn, Schlatt und Gonten",
      "supports": "The inner part around the village of Appenzell forms Innerrhoden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001318/",
      "title": "HLS: Oberegg",
      "quote": "Mit der Teilung des Landes Appenzell 1597 gelangten Hirschberg und Oberegg zu den katholischen inneren Rhoden",
      "supports": "Hirschberg and Oberegg join the Catholic Innerrhoden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "die nach der Abtrennung von Trogen als zwei Halbrhoden innerrhodische Exklaven bildeten",
      "supports": "Oberegg is an exclave"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "und den Landvogt für das Rheintal (alle 32 Jahre)",
      "supports": "Innerrhoden keeps a share in the Rheintal (map layer Rheintal)"
     }
    ]
   },
   {
    "year": 1798,
    "title": "Part of the canton of Säntis",
    "text": [
     "In 1798 the Helvetic Republic joins both Appenzells with the lands of the Abbey of St. Gallen, the town of St. Gallen, the northern Rheintal and the lower Toggenburg. Together they form the canton of Säntis."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "gebildet aus der ehemaligen Fürstabtei St. Gallen mit den Territorialherrschaften Alte Landschaft und unteres Toggenburg",
      "supports": "Säntis includes the abbey lands and the lower Toggenburg (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "Appenzell Ausserrhoden und Appenzell Innerrhoden und der ehemaligen Landvogtei Rheintal (Gebiet nördlich des Hirschensprungs)",
      "supports": "Säntis includes both Appenzells and the northern Rheintal"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007476/",
      "title": "HLS: Appenzell Ausserrhoden",
      "quote": "Zwischen 1798 und 1803, als beide Appenzell im helvetischen Kanton Säntis aufgingen",
      "supports": "Both Appenzells are part of Säntis 1798–1803"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "welche die beiden appenzellischen Halbkantone (zusammen eine Stimme an der Tagsatzung) wieder erstehen liess",
      "supports": "In 1803 the Act of Mediation restores both half-cantons (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007648/",
      "title": "HLS: Rheintal",
      "quote": "bildete das gesamte Rheintal 1803-1831 einen Distrikt mit dem Hauptort Altstätten",
      "supports": "The Rheintal goes to the new canton of St. Gallen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001318/",
      "title": "HLS: Oberegg",
      "quote": "Der durch die Ausserrhoder Gemeinde Reute zweigeteilte Bezirk ist auch eine innerrhodische Exklave.",
      "supports": "Innerrhoden is restored with Oberegg"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Appenzell Innerrhoden have not changed."
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
     "About 1400 the Abbot of St. Gallen rules the old abbey lands around St. Gallen. By the end of the 1400s they reach from Wil to Rorschach. The town of St. Gallen frees itself from the abbot and becomes an imperial city in the early 1400s.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "Die fürstäbtische Landesherrschaft umfasste Ende des 15. Jahrhunderts das Gebiet von Wil bis Rorschach (Alte Landschaft)",
      "supports": "The abbot rules the old abbey lands from Wil to Rorschach (map layer Abbey)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "die sich von der Fürstabtei gelöst hatte und bis Anfang des 15. Jahrhunderts zur Reichsstadt aufgestiegen war",
      "supports": "The town frees itself from the abbot and becomes an imperial city (map layer Town)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007642/",
      "title": "HLS: Toggenburg",
      "quote": "Unter Friedrich VII., dem letzten Grafen von Toggenburg (1400-1436), bildete das Geschlecht eine bedeutende politische Kraft in der Region",
      "supports": "The counts of Toggenburg rule until 1436 (map layer Toggenburg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001371/",
      "title": "HLS: Rapperswil (SG)",
      "quote": "1354 erwarb Herzog Albrecht II. von Habsburg die Herrschaft",
      "supports": "Rapperswil belongs to Habsburg (map layer Rapperswil)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "Hauptsächliche Akteure waren die Grafenhäuser der Kyburger, Habsburger, Toggenburger, Montforter und Werdenberger, Rapperswiler und Vazer sowie die Freien von Sax.",
      "supports": "Other parts belong to many noble families"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007642/",
      "title": "HLS: Toggenburg",
      "quote": "Petermann von Raron verkaufte die Grafschaft 1468 für 14'500 rheinische Gulden an Fürstabt Ulrich Rösch",
      "supports": "The abbot buys the Toggenburg in 1468"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "des Alten Zürichkriegs und des Plappartkriegs 1458 alle Herrschaftsrechte im Gebiet von Rapperswil über den Walensee bis ins Rheintal",
      "supports": "Habsburg loses its lordships one by one"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "die Herrschaftsgebiete der Fürstabtei St. Gallen, nämlich die Alte Landschaft (Fürstenland) und die Grafschaft Toggenburg als sogenannte Neue Landschaft",
      "supports": "The Prince-Abbot rules the old abbey lands and the Toggenburg (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "1451 wurden die Fürstabtei St. Gallen und 1454 die Stadt St. Gallen zugewandte Orte der Eidgenossenschaft.",
      "supports": "Abbey and town are allies of the Swiss, not full members (map layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "zudem die freie Reichsstadt St. Gallen",
      "supports": "The town of St. Gallen is a small free city-state"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007648/",
      "title": "HLS: Rheintal",
      "quote": "Diese verwalteten es bis 1798 als gemeine Herrschaft mit Hauptort Rheineck, an der ab 1491 Uri, Unterwalden und Zug, ab 1500 Appenzell",
      "supports": "The Rheintal is a common lordship of several cantons and Appenzell (map layer Rheintal)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007645/",
      "title": "HLS: Sarganserland",
      "quote": "die 1483 von den sieben Orten für 15'000 rheinische Gulden erworbene Grafschaft Sargans",
      "supports": "Sargans is a common lordship since 1483 (map layer Sargans)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007646/",
      "title": "HLS: Werdenberg",
      "quote": "1517 erwarb Glarus die stark verschuldete Grafschaft",
      "supports": "Glarus rules Werdenberg (map layer Werdenberg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007647/",
      "title": "HLS: Sax-Forstegg",
      "quote": "1615-1798 Zürcher Landvogtei",
      "supports": "Zurich rules Sax (map layer Sax-Forstegg)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007644/",
      "title": "HLS: Gaster",
      "quote": "Das Gaster war 1438-1798 Herrschaft der Orte Schwyz und Glarus",
      "supports": "Schwyz and Glarus rule Gaster (map layer Gaster and Uznach)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "die Herrschaft über Uznach (1437 Verpfändung, 1469 Kauf)",
      "supports": "Schwyz and Glarus rule Uznach"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007385/",
      "title": "HLS: Schwyz (Kanton)",
      "quote": "1497 gelangten beide Orte durch Kauf überdies in den Besitz der Herrschaft Gams",
      "supports": "Schwyz and Glarus rule Gams (map layer Gams)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001371/",
      "title": "HLS: Rapperswil (SG)",
      "quote": "Ehemalige Herrschaft, 1464-1798 zugewandter Ort der Eidgenossenschaft",
      "supports": "Rapperswil is a town under the protection of other cantons (map layer Rapperswil)"
     }
    ]
   },
   {
    "year": 1798,
    "title": "Cantons of Säntis and Linth",
    "text": [
     "In 1798 the Helvetic Republic ends the rule of the abbot and of the old cantons. It divides the land between two new cantons.",
     "The canton of Säntis has the abbey lands, the town, the northern Rheintal, the lower Toggenburg and both Appenzells. The canton of Linth has Glarus, Werdenberg, Sax, Sargans, Gaster, Uznach, Rapperswil, the southern Rheintal and the upper Toggenburg."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "gebildet aus der ehemaligen Fürstabtei St. Gallen mit den Territorialherrschaften Alte Landschaft und unteres Toggenburg",
      "supports": "Säntis has the abbey lands and the lower Toggenburg (map layer Säntis)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008634/",
      "title": "HLS: Säntis (Kanton)",
      "quote": "Appenzell Ausserrhoden und Appenzell Innerrhoden und der ehemaligen Landvogtei Rheintal (Gebiet nördlich des Hirschensprungs)",
      "supports": "Säntis has both Appenzells and the northern Rheintal"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008632/",
      "title": "HLS: Linth (Kanton)",
      "quote": "gebildet aus dem Land Glarus, der Stadt Rapperswil mit Untertanengebiet, den ehemaligen Landvogteien Rheintal (Gebiet südlich des Hirschensprungs mit Rüthi und Lienz), Sax, Gams",
      "supports": "Linth has Glarus, Rapperswil, the southern Rheintal and Sax (map layer Linth)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008632/",
      "title": "HLS: Linth (Kanton)",
      "quote": "Werdenberg, Sargans, Gaster, Uznach, dem oberen Toggenburg (Gebiet östlich der Linie Hemberg-Hummelwald)",
      "supports": "Linth has Werdenberg, Sargans, Gaster, Uznach and the upper Toggenburg"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "Die Mediationsakte von 1803 schuf neu den Kanton St. Gallen.",
      "supports": "In 1803 the Act of Mediation creates the canton (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "und weiter die Landvogtei Rheintal, die Freiherrschaft Sax-Forstegg, die Herrschaft Gams, die Grafschaften Werdenberg und Sargans",
      "supports": "It joins the abbey lands, the town and the former bailiwicks"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007475/",
      "title": "HLS: Appenzell Innerrhoden",
      "quote": "welche die beiden appenzellischen Halbkantone (zusammen eine Stimme an der Tagsatzung) wieder erstehen liess",
      "supports": "Appenzell becomes separate again"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007374/",
      "title": "HLS: Glarus (Kanton)",
      "quote": "Seit 1803 wieder Kanton der Eidgenossenschaft.",
      "supports": "Glarus becomes a separate canton again"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007390/",
      "title": "HLS: St. Gallen (Kanton)",
      "quote": "Der Grosse Rat folgte deshalb 1805 der Regierung und beschloss mit knappem Mehr die Aufhebung der Fürstabtei",
      "supports": "The abbey is closed in 1805"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of St. Gallen have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "960 den Königshof in Chur mit den dazugehörenden fiskalisch nutzbaren Rechten sowie die Zolleinkünfte und die Grafenrechte im Bergell.",
      "supports": "In 960 Otto I confirms to the Bishop of Chur the royal estate in Chur and the county rights in the Bergell"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "951 erhielt Hartpert die Fiskaleinkünfte der Grafschaft Chur, 952 die Zollrechte (Zölle) in Chur, 955 den Königshof Zizers",
      "supports": "The bishop is the strongest lord; he has Zizers since 955"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Einführung der Grafschaftsverfassung (Grafschaft) zerschlagen. Erster Graf war Hunfrid, Markgraf von Istrien (Hunfride).",
      "supports": "Counts rule Churrätia for the king"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "sein Sohn Burchard II. erlangte, gestützt auf seine gräflichen Rechte in Rätien, 917 die Herzogswürde. Unter seinen Nachfolgern blieb die Verbindung Rätiens mit Schwaben gewahrt",
      "supports": "From the 10th century Churrätia belongs to the Duchy of Swabia"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "stützten sich auf umfassenden Grundbesitz, so Disentis im Vorderrheintal (Tellotestament von 765)",
      "supports": "The abbey of Disentis owns much land in the upper Vorderrhein valley"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017154/",
      "title": "HLS: Gotteshausbund",
      "quote": "Der Bischof war im 14. Jahrhundert Landesherr und übte die hohe Gerichtsbarkeit in den Vier Dörfern (Fünf Dörfer), der Stadt Chur, im Oberhalbstein, Oberengadin",
      "supports": "The Bishop of Chur rules Chur, the Four Villages, the Oberhalbstein and the Engadine"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017154/",
      "title": "HLS: Gotteshausbund",
      "quote": "die grossen Talgemeinden Domleschg und Schams (6 Boten), Oberhalbstein (4), Bergell (6), Oberengadin (3) und Unterengadin (2)",
      "supports": "The bishop's valleys include the Domleschg, Oberhalbstein, Bergell and Engadine"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "wo der Bischof umfangreichen Grundbesitz durch Kauf von den Grafen von Gamertingen (1137/1139) erwarb.",
      "supports": "Since 1137–1139 the bishop has bought much of the Upper Engadine"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Den grössten Teil des Vazer Allodialbesitzes hatten 1338 nicht die Sarganser geerbt, sondern die Grafen von Toggenburg.",
      "supports": "The Vaz die out; in 1338 the Counts of Toggenburg get most of their land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Sie übernahmen das Landwasser- und das mittlere Albulatal, das innere Prättigau und Churwalden.",
      "supports": "Toggenburg gets Davos (Landwasser valley), Belfort (middle Albula valley), Prättigau and Churwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "kauften die Toggenburger 1355 bzw. 1359 die Herrschaft Maienfeld.",
      "supports": "Toggenburg buys Maienfeld (1355–1359)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Schliesslich erwarben die Toggenburger 1363 die Vogtei im Schanfigg.",
      "supports": "Toggenburg buys the Schanfigg (1363)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Die Grafen von Werdenberg-Sargans erhielten 1338 aus dem Erbe der Herren von Vaz bischöfliche Lehen, nämlich die Grafschaft Schams samt Rheinwald sowie die Vogtei über Safien.",
      "supports": "Werdenberg-Sargans get Schams, Rheinwald and Safien"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Als Eigen übernahmen sie die Herrschaften Obervaz und Heinzenberg",
      "supports": "Werdenberg-Sargans get the Heinzenberg (and Obervaz, as on the map)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Im Vorderrheintal errichtete Disentis eine Territorialherrschaft, Cadi (Casa Dei) genannt",
      "supports": "The abbey of Disentis rules the Cadi"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Den von Sax blieb noch das Misox, ihre angestammte Herrschaft",
      "supports": "The Sax-Misox family rules the Misox"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Die Güter der Herren von Belmont, die vom Bischof mit der Burg Ems belehnt worden waren, lagen in den Gebieten Flims, Gruob und Lugnez.",
      "supports": "Small noble families (Belmont, Rhäzüns) hold land around Ems and Flims"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Erst 1408 unterstellte sich die Puschlaver Talgemeinde endgültig der bischöflichen Herrschaft in Chur.",
      "supports": "Poschiavo joins the bishop only in 1408"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/026840/",
      "title": "HLS: Drei Bünde",
      "quote": "in den sich im ehemaligen Churrätien ab 1450 der Gotteshausbund (1367), der Graue Bund (1395/1424) und der Zehngerichtenbund (1436) integrierten.",
      "supports": "The three leagues and their dates; from about 1450 they act more and more together"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017154/",
      "title": "HLS: Gotteshausbund",
      "quote": "versammelten sich Vertreter des Domkapitels, der Talschaften und der Stadt Chur 1365 in Zernez und darauf in revolutionärer Absicht am 29. Januar 1367 in Chur.",
      "supports": "The League of God's House forms in 1367 around the bishop's church and the city of Chur"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "entstand im Wesentlichen durch den Zusammenschluss von 21 Gerichtsgemeinden aus den Talschaften des Vorder- und Hinterrheintals.",
      "supports": "The Grey League is formed by the Vorderrhein and Hinterrhein valleys"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "Mit dem Ilanzer Bund sollte die Sicherheit auf den Strassen und der freie Handel und Wandel wieder hergestellt",
      "supports": "The alliances are made to keep peace"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "Der Obere Bund erfuhr am 16. März 1424 eine Neubeschwörung, Vertiefung und Erweiterung zu Trun",
      "supports": "The Grey League is renewed in 1424"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017163/",
      "title": "HLS: Zehngerichtenbund",
      "quote": "Der Zehngerichtenbund wurde als jüngster der drei rätischen Bünde am 8. Juni 1436 in Davos gegründet",
      "supports": "The League of the Ten Jurisdictions forms in Davos in 1436"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Nach dem Aussterben der Toggenburger 1436 schlossen sich die zehn Gerichtsgemeinden",
      "supports": "It forms after the last Count of Toggenburg dies"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "Am 23. April 1480 trat das obere Misoxertal mit Erlaubnis des Grafen Johann Peter von Sax und 1496 der übrige Teil des Tals dem Grauen Bund bei.",
      "supports": "The Misox is not yet a member (it joins in 1480 and 1496)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "Am 23. April 1480 trat das obere Misoxertal mit Erlaubnis des Grafen Johann Peter von Sax und 1496 der übrige Teil des Tals dem Grauen Bund bei.",
      "supports": "The Misox joins the Grey League (upper valley 1480, the rest 1496)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "1497 Bündnis mit der Eidgenossenschaft",
      "supports": "The Grey League allies with the Swiss in 1497"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017154/",
      "title": "HLS: Gotteshausbund",
      "quote": "1498 verbündete sich der Gotteshausbund als zugewandter Ort mit der Eidgenossenschaft.",
      "supports": "The League of God's House allies with the Swiss in 1498 as an associate (zugewandter Ort)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "nahmen eidgenössische und bündnerische Truppen in der Schlacht an der Calven am 22. Mai 1499 eine Talsperre und besiegten ein tirolisches Heer.",
      "supports": "In 1499 the leagues and the Swiss win at Calven"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "bis sie die Herrschaft 1497 König Maximilian von Österreich abtraten.",
      "supports": "Austria holds the lordship of Rhäzüns from 1497"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001524/",
      "title": "HLS: Tarasp (Herrschaft, Gemeinde)",
      "quote": "1464-1803 war Tarasp im Besitz Österreichs.",
      "supports": "Austria holds Tarasp from 1464"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017163/",
      "title": "HLS: Zehngerichtenbund",
      "quote": "Die Montforter verkauften ihre Gerichte 1470 und die Matscher die ihren 1477 an die Herzöge von Österreich.",
      "supports": "Austria buys lordship rights in most of the Ten Jurisdictions in the 1470s"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/015287/",
      "title": "HLS: Maienfeld (Herrschaft)",
      "quote": "So ging die Herrschaft 1509 von den Erben durch Kauf an die Drei Bünde.",
      "supports": "In 1509 the three leagues buy the lordship of Maienfeld"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/015287/",
      "title": "HLS: Maienfeld (Herrschaft)",
      "quote": "wie auch die Mitgliedschaft im Zehngerichtenbund – bestehen. Dadurch wurden die Herrschäftler Herren und Untertanen in Einem. Ein Landvogt der Drei Bünde",
      "supports": "Maienfeld becomes a bailiwick of the leagues, but its people stay members of the Ten Jurisdictions"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Auf ihrem Auszug besetzten sie Bormio, das Veltlin, Chiavenna und die Drei Pleven am Comersee und eigneten sich diese Gebiete in der Folge als Untertanenlande an.",
      "supports": "In 1512 the leagues conquer the Valtellina, Chiavenna and Bormio and rule them as subjects"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "1512-1797 gehörten das Veltlin, Chiavenna und Bormio als Untertanengebiete den Drei Bünden.",
      "supports": "They rule these lands until 1797"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/026840/",
      "title": "HLS: Drei Bünde",
      "quote": "Mit dem Bundesbrief vom 23. September 1524 gaben sich die Drei Bünde eine gemeinsame Verfassung. Dadurch erlangten sie den Status eines republikanischen Freistaates",
      "supports": "On 23 September 1524 the leagues give themselves a common constitution and become one republic (Free State)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017163/",
      "title": "HLS: Zehngerichtenbund",
      "quote": "Erst in den Jahren 1649-1652 gelang es den zehn Gerichten, sich von den österreichischen Rechten freizukaufen",
      "supports": "In 1649 and 1652 the Ten Jurisdictions buy the Austrian rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Die verbleibenden habsburgischen Rechte wurden 1649 und 1652 teilweise ausgekauft.",
      "supports": "The Austrian rights are bought out in 1649 and 1652 (partly)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001524/",
      "title": "HLS: Tarasp (Herrschaft, Gemeinde)",
      "quote": "1464-1803 war Tarasp im Besitz Österreichs.",
      "supports": "Tarasp is Austrian (layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "dass sich die Veltliner Bevölkerung im März 1797 für den Anschluss an die Cisalpinische Republik aussprach.",
      "supports": "In 1797 the Valtellina leaves and joins the Cisalpine Republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "1512-1797 gehörten das Veltlin, Chiavenna und Bormio als Untertanengebiete den Drei Bünden.",
      "supports": "The leagues lose the Valtellina, Chiavenna and Bormio in 1797"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Während der ersten Okkupation durch die Franzosen wurde am 21. April 1799 der Vertrag über die Eingliederung Graubündens als Kanton Rätien in die Helvetische Republik unterzeichnet",
      "supports": "In 1799 French troops occupy the land and it becomes the canton of Rätien in the Helvetic Republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "1799-1803 als Kanton Rätien Teil der Helvetischen Republik, seit 1803 Kanton der Eidgenossenschaft.",
      "supports": "Canton Rätien from 1799 to 1803"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017158/",
      "title": "HLS: Grauer Bund",
      "quote": "Als Teil des alten Freistaats der Drei Bünde ging der Graue Bund 1798 unter",
      "supports": "The leagues stop working as a government"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007391/",
      "title": "HLS: Graubünden",
      "quote": "Die föderalistische Mediationsverfassung von 1803, die aus Graubünden einen Kanton der Eidgenossenschaft machte, befriedete das Land.",
      "supports": "In 1803 the Act of Mediation makes Graubünden a canton of the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001524/",
      "title": "HLS: Tarasp (Herrschaft, Gemeinde)",
      "quote": "Der Reichsdeputationshauptschluss zu Regensburg überliess die Herrschaft Tarasp 1803 der Helvetischen Republik",
      "supports": "In 1803 the Austrian lordship of Tarasp comes to Switzerland"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001524/",
      "title": "HLS: Tarasp (Herrschaft, Gemeinde)",
      "quote": "Noch im selben Jahr wurde Tarasp in den Kanton Graubünden integriert.",
      "supports": "Tarasp comes to Graubünden in 1803"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001524/",
      "title": "HLS: Tarasp (Herrschaft, Gemeinde)",
      "quote": "seit 2015 mit Ardez, Ftan, Guarda und Sent Teil der Gemeinde Scuol.",
      "supports": "Tarasp is now part of Scuol"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001513/",
      "title": "HLS: Bonaduz",
      "quote": "Mit der Herrschaft Rhäzüns kam B. 1819 an den Kt. Graubünden.",
      "supports": "Rhäzüns is not yet part of Graubünden in 1803 (it comes in 1819)"
     }
    ],
    "uncertain": [
     "Austria still keeps the lordship of Rhäzüns in 1803. HLS (Bonaduz) says Rhäzüns came to Graubünden only in 1819, but HLS (Graubünden) says the 1803 constitution already included Rhäzüns."
    ]
   },
   {
    "year": 1819,
    "title": "Rhäzüns joins, borders fixed",
    "text": [
     "After a decision of the Congress of Vienna, the lordship of Rhäzüns becomes part of Graubünden in 1819.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001515/",
      "title": "HLS: Rhäzüns (Gemeinde)",
      "quote": "Durch einen Beschluss des Wiener Kongresses ging die Herrschaft R. 1819 an den Kt. Graubünden über.",
      "supports": "After a decision of the Congress of Vienna, Rhäzüns becomes part of Graubünden in 1819"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001513/",
      "title": "HLS: Bonaduz",
      "quote": "Mit der Herrschaft Rhäzüns kam B. 1819 an den Kt. Graubünden.",
      "supports": "In 1819 the lordship of Rhäzüns becomes part of Graubünden"
     }
    ],
    "uncertain": [
     "Since 1819 the borders of the canton have not changed (no source found that says this directly)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Als bedeutendste Machthaber des 11. und 12. Jahrhunderts haben die Grafen von Lenzburg zu gelten",
      "supports": "The counts of Lenzburg are the strongest lords in the Aargau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Ihre hauptsächlichen Machtbereiche erstreckten sich im Aargau einerseits auf die Schirmvogtei über Beromünster und andererseits auf das Seetal und das Gebiet um Baden",
      "supports": "They rule the Seetal and the area around Baden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "der sich um die 1030/1040 gegründete Habsburg sowie um das habsburgische Hauskloster Muri gruppierte",
      "supports": "The Habsburg castle (about 1030) and Muri"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Die Abtei Muri, um 1020/1030 als Benediktinerniederlassung gegründet, war neben Murbach und Ottmarsheim im Elsass das wichtigste Hauskloster der Habsburger.",
      "supports": "The Habsburg family founds the abbey of Muri"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Westlich des lenzburgischen Machtbereichs, im Wiggertal, begann das Einflussgebiet der Grafen von Frohburg.",
      "supports": "The counts of Frohburg hold Zofingen (Wigger valley)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Die Zähringer wurden bei Rheinfelden aktiv.",
      "supports": "The Zähringen found Rheinfelden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Im Fricktal sassen die Grafen von Homberg-Thierstein.",
      "supports": "Counts of Homberg-Thierstein: Fricktal (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Als 1172 bzw. 1173 beide Linien (Baden, Lenzburg) des Geschlechts im Mannesstamm erloschen, regelte Kaiser Friedrich I. Barbarossa die Erbfolge",
      "supports": "In 1172/1173 the Lenzburg family dies out; the emperor divides its land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Den Habsburgern wurden ausser der Kastvogtei über Säckingen die Grafschaftsrechte sowie sonstige Güter im Aargau überlassen.",
      "supports": "The Habsburg family gets part of the land"
     }
    ],
    "uncertain": [
     "The Habsburg castle stands near Brugg."
    ]
   },
   {
    "year": 1264,
    "title": "Habsburg takes almost all",
    "text": [
     "After 1200 the counts of Kyburg get the Lenzburg land and found towns such as Baden, Aarau and Mellingen. The Habsburg family gets the Fricktal from the Homberg counts after 1223.",
     "About 1264 the Kyburg family dies out. Count Rudolf of Habsburg, later king, takes their land. Now Habsburg rules almost all of today's Aargau.",
     "About 1300 Habsburg also buys Zofingen and Aarburg, and in 1330 Rheinfelden. Lenzburg becomes the centre of Habsburg rule, until the Swiss conquer the land in 1415."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "gelang es den Grafen von Kyburg, ihre Erbansprüche auf die Lenzburger Güter durchzusetzen und die Staufer aus dem Aargau zu verdrängen",
      "supports": "After 1200 the Kyburg counts get the Lenzburg land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "in der Gründung bzw. Erweiterung von Städten (u.a. Baden, Aarau, Richensee und Mellingen)",
      "supports": "Kyburg towns Baden, Aarau and Mellingen"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Durch die Beerbung der Grafen von Homberg im Fricktal (nach 1223)",
      "supports": "Habsburg gets the Fricktal from the Homberg counts after 1223"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Nach dem Erlöschen des Grafenhauses Kyburg um 1264 vermochte Graf Rudolf IV. von Habsburg, der spätere König Rudolf I.",
      "supports": "About 1264 Kyburg dies out; Rudolf of Habsburg takes their land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Gegen 1300 erwarben sie von den Frohburgern die Stadt Zofingen mit der Münzstätte sowie die Feste Aarburg",
      "supports": "About 1300 Habsburg buys Zofingen and Aarburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "1330 brachten sie Rheinfelden in ihren Besitz.",
      "supports": "Rheinfelden 1330"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001803/",
      "title": "HLS: Rheinfelden (Gemeinde)",
      "quote": "Nach deren Aussterben wurde die Stadt 1218 reichsfrei, schliesslich 1330 an Habsburg verpfändet.",
      "supports": "Rheinfelden: imperial town until 1330 (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "sondern die für eine landesherrliche Hofhaltung besser geeignete Lenzburg",
      "supports": "Lenzburg is the centre of Habsburg rule"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Eine Besitzteilung um 1240 zwischen den Brüdern Albrecht IV. und Rudolf III. führte zur Ausgliederung des Fricktals, das an die Linie Habsburg-Laufenburg gelangte",
      "supports": "Fricktal: Habsburg-Laufenburg line (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "schritten die Eidgenossen (ohne Uri) im April 1415 zur Eroberung",
      "supports": "In 1415 the Swiss conquer the Aargau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Bern behielt die Hoheitsrechte über den Unteraargau",
      "supports": "Bern takes the west part, the Bernese Aargau, as land ruled by Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Die übrigen eroberten Territorien bildeten die gemeinen Herrschaften Grafschaft Baden und Freie Ämter.",
      "supports": "The County of Baden and the Freie Ämter become common lordships"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Das Fricktal blieb bei Vorderösterreich.",
      "supports": "The Fricktal stays Austrian"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Gleichzeitig kam im Tausch mit dem Amt Hitzkirch das bisher luzernische Amt Merenschwand hinzu",
      "supports": "Merenschwand: ruled by Lucerne (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "umfasste vorerst den ehemals bernischen Unteraargau östlich der Wigger",
      "supports": "The Helvetic canton of Aargau is the Bernese Aargau east of the Wigger"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Kantonshauptstadt war Aarau",
      "supports": "Aarau is the capital"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Aus den Freien Ämtern, der Grafschaft Baden und dem Kelleramt wurde am 11. April 1798",
      "supports": "The County of Baden, the Freie Ämter and the Kelleramt become the canton of Baden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Am 9. Februar 1802 konstituierte sich das bis 1801 österreichische Fricktal als Kanton",
      "supports": "The Fricktal is Austrian until 1801 and becomes a canton in 1802"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Der westliche Teil des Amtes Aarburg kam formell 1802, faktisch aber erst 1803 dazu.",
      "supports": "West of the Wigger: still part of Bern (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "das bisher luzernische Amt Merenschwand",
      "supports": "Merenschwand: part of Lucerne (map layer)"
     }
    ]
   },
   {
    "year": 1803,
    "title": "One canton of Aargau",
    "text": [
     "In 1803 the Act of Mediation joins the cantons of Aargau, Baden and Fricktal into one canton of Aargau. It becomes a full member of the Confederation.",
     "Aargau gets Merenschwand from Lucerne and gives Hitzkirch to Lucerne. Dietikon, Schlieren, Hüttikon and Oetwil an der Limmat go to Zurich.",
     "Since then, the canton has kept this shape."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Doch erst die Mediationsakte 1803 liess durch den",
      "supports": "The Act of Mediation of 1803 makes the canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Zusammenschluss der helvetischen Kantone Aargau, Baden und Fricktal den Kanton Aargau in seiner heutigen Gestalt entstehen",
      "supports": "Aargau, Baden and Fricktal join into one canton, in the shape it still has today"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "Seit 1803 Kanton der Eidgenossenschaft.",
      "supports": "A full member of the Confederation since 1803"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "im Tausch mit dem Amt Hitzkirch das bisher luzernische Amt Merenschwand hinzu",
      "supports": "Aargau gets Merenschwand from Lucerne and gives Hitzkirch"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007392/",
      "title": "HLS: Aargau",
      "quote": "die Gemeinden Schlieren, Dietikon, Hüttikon und Oetwil an der Limmat wurden an Zürich abgetreten",
      "supports": "Dietikon, Schlieren, Hüttikon and Oetwil an der Limmat go to Zurich"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Ab 1094 sind die Grafen von Dillingen-Kyburg als Grafen im Thurgau und gleichzeitig als örtliche Besitzer bedeutender Güter belegt.",
      "supports": "From 1094 the counts of Dillingen-Kyburg hold the county and large estates (map layer County of Thurgau)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Graf Hartmann III. von Kyburg hatte bereits 1178 das schon im Frühmittelalter bezeugte Diessenhofen in den Rang einer Stadt erhoben.",
      "supports": "In 1178 they make Diessenhofen a town"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Die geografische Streuung der Besitzurkunden des Klosters St. Gallen (8.-10. Jh.) zeigt starke regionale Verdichtungen im Hinterthurgau",
      "supports": "St. Gallen abbey owns much land in Thurgau"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "das Unterseeufer als Besitzlandschaft des Klosters Reichenau sowie über den zentralen Seerücken und Bischofszell mit seinem Hinterland als Zentren bischöflichen Grundbesitzes",
      "supports": "Reichenau and the Bishop of Constance also own much land"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "1264, nach dem Tod von Graf Hartmann IV., erbte Graf Rudolf IV. von Habsburg",
      "supports": "The Kyburgs die out in 1264; Rudolf of Habsburg inherits their rights (map layer Landgraviate)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "während die Hofmeister von Frauenfeld die Landvogtei verwalteten",
      "supports": "Habsburg rules the land from Frauenfeld"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "für seine beiden Städtchen Bischofszell und Arbon, in denen er bis 1798 die hohe Gerichtsbarkeit innehatte",
      "supports": "The Bishop of Constance holds the high court in Arbon and Bischofszell (map layer Bishop)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Oktober 1417 verschrieb Sigismund das Landgericht, den Wildbann und die Vogtei Frauenfeld",
      "supports": "From 1417 the land court is pledged"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "gegen die Pfandsumme von 3100 Gulden an die Reichsstadt Konstanz",
      "supports": "The pledge goes to the city of Constance"
     }
    ]
   },
   {
    "year": 1460,
    "title": "Conquered by the Swiss",
    "text": [
     "In 1460 seven Swiss cantons take Thurgau from Habsburg. It becomes a common lordship (land ruled together by several cantons). A governor (Landvogt) in Frauenfeld rules it for these cantons; a new governor comes every two years.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "1460-1798 gemeine Herrschaft der sieben bzw. acht alten Orte Zürich, Luzern, Uri, Schwyz, Unterwalden, Zug, Glarus und ab 1712 Bern",
      "supports": "Seven cantons rule Thurgau from 1460 as a common lordship; Bern joins in 1712 (map layer Thurgau)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001891/",
      "title": "HLS: Diessenhofen",
      "quote": "die Stadt hatte lediglich alle zwei Jahre dem thurgauischen Landvogt zu huldigen, wenn dieser bei Amtsantritt die Lehen feierlich erneuerte",
      "supports": "A new governor comes every two years"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001891/",
      "title": "HLS: Diessenhofen",
      "quote": "es behielt jedoch wie Frauenfeld gewisse Privilegien in der gemeinen Herrschaft Thurgau",
      "supports": "Diessenhofen keeps special rights (map layer Diessenhofen)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Im Rahmen des Friedens von Basel 1499 erhielten die Eidgenossen das Landgericht schliesslich zugesprochen.",
      "supports": "The land court stays with Constance until 1499"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "für seine beiden Städtchen Bischofszell und Arbon, in denen er bis 1798 die hohe Gerichtsbarkeit innehatte",
      "supports": "The bishop keeps the high court in Arbon and Bischofszell until 1798 (map layer Bishop)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "1460 hatte der von der Thur durchflossene Thurgau praktisch seine heutige Ausdehnung",
      "supports": "In 1460 the land already has almost today's shape"
     }
    ],
    "uncertain": [
     "The people of Thurgau have no vote in the government of the land."
    ]
   },
   {
    "year": 1798,
    "title": "A free canton",
    "text": [
     "In February 1798 the people of Thurgau ask the ruling cantons to set them free. The cantons agree, and the charter of freedom is dated 3 March 1798. Thurgau becomes a canton of the Helvetic Republic.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "ersuchte am 8. Februar die acht regierenden bzw. zehn am Hochgericht partizipierenden Orte, den Thurgau für frei zu erklären",
      "supports": "In February 1798 Thurgau asks the ruling cantons to set it free"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "die Freilassungsurkunde der acht Orte, der Solothurn und Freiburg schriftlich zugestimmt hatten, wurde am 10. März ausgefertigt, jedoch auf den 3. März zurückdatiert",
      "supports": "The charter of freedom is dated 3 March 1798"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "1798-1803 Kanton der Helvetischen Republik",
      "supports": "Thurgau is a canton of the Helvetic Republic (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/001891/",
      "title": "HLS: Diessenhofen",
      "quote": "Der Bezirk Diessenhofen wurde 1798 als Verwaltungsdistrikt dem Kanton Schaffhausen, 1800 definitiv dem Kanton Thurgau zugeordnet.",
      "supports": "The Diessenhofen area belongs to Schaffhausen 1798–1800 (map layer Diessenhofen area)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "erlangte der Kanton Thurgau die politische Selbstständigkeit und die Gleichstellung gegenüber den übrigen Kantonen",
      "supports": "In 1803 the Act of Mediation makes Thurgau a full canton (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007393/",
      "title": "HLS: Thurgau",
      "quote": "Amtssprache ist Deutsch, Hauptort Frauenfeld.",
      "supports": "Frauenfeld is the capital"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of Thurgau have not changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Da die Region zunehmend in lokale Kleinherrschaften zerfiel, nahm der Einfluss von Como und Mailand auf das ganze Tessiner Gebiet zu.",
      "supports": "Around 1200 Milan and Como have the most power"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "948 schenkte der aus einer adligen langobardischen Familie stammende Bischof Atto von Vercelli seine Besitzungen",
      "supports": "A bishop's gift in 948 is the base of Milan's rule in the Leventina and Blenio"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "der Mailänder Kirche und legte damit den Grundstein zur Herrschaft des Domkapitels über die Ambrosianischen Täler.",
      "supports": "The cathedral chapter of Milan rules the Ambrosian valleys (Leventina, Blenio, Riviera)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008540/",
      "title": "HLS: Bellinzona (Pieve, Vogtei, Bezirk)",
      "quote": "wonach die Pieve Bellinzona zusammen mit den Pieven Locarno und Agno zwischen 1002 und 1004 dem Bischof von Como übergeben wurde.",
      "supports": "Bellinzona is given to the Bishop of Como in 1002–1004"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "1186 erhielt die Landschaft Locarno von Barbarossa die Reichsunmittelbarkeit, während Lugano 1191 eine weitgehende Selbstverwaltung gegenüber den Gerichtsbeamten Comos zugestanden wurde.",
      "supports": "In 1186 Barbarossa puts Locarno directly under the Empire; Lugano (land of Como) gets wide self-government in 1191"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Mit dessen Hilfe riss 1277 der Mailänder Erzbischof Ottone Visconti die Herrschaft über Mailand an sich.",
      "supports": "The Visconti take power in Milan in 1277"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Das Sottoceneri, das der Stadt Como unterstand, ging damals an die Visconti über",
      "supports": "Milan conquers Como in 1335, and with it Lugano and Mendrisio (the Sottoceneri)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "1340 brachen Mailänder Truppen den letzten Widerstand der Rusca, die sich in Bellinzona verschanzt hatten.",
      "supports": "In 1340 Milanese troops take Bellinzona"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "1342 beugte sich Locarno den Truppen der Visconti",
      "supports": "In 1342 Locarno submits"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Das Domkapitel Mailand betraute die Visconti 1344 mit dem Podestatenamt in der Leventina und wenig später auch mit demjenigen im Bleniotal.",
      "supports": "From 1344 the Visconti also control the Leventina and Blenio"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "stand im Früh- und Hochmittelalter unter der Herrschaft von Como und Mailand, gehörte im 14. und 15. Jahrhundert zum Herzogtum Mailand",
      "supports": "All of today's Ticino belongs to the state of Milan"
     }
    ]
   },
   {
    "year": 1419,
    "title": "First Swiss steps south",
    "text": [
     "Uri wants control of the road over the Gotthard Pass. In 1403 Uri and Obwalden make an alliance with the Leventina and take control of it.",
     "In 1419 the lords of Sax-Misox must give Bellinzona to Uri and Obwalden. But Milan attacks. At the battle of Arbedo in 1422 the Swiss lose, and they lose all land south of the Alps."
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
      "label": "Bellinzona: given to Uri and Obwalden in 1419 (lost 1422)",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008543/",
      "title": "HLS: Leventina",
      "quote": "1403 schloss die Leventina mit Uri und Obwalden, die fest entschlossen waren, den Süden des Gotthards unter ihre Kontrolle zu bringen, einen Schutzvertrag.",
      "supports": "Uri wants control south of the Gotthard; in 1403 Uri and Obwalden make an alliance with the Leventina"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008543/",
      "title": "HLS: Leventina",
      "quote": "Dieser war Grundlage für das Protektorat der beiden Innerschweizer Orte über die Leventina",
      "supports": "Uri and Obwalden take control of the Leventina"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/024649/",
      "title": "HLS: Ennetbirgische Feldzüge",
      "quote": "1419 mussten die Sax-Misox die Herrschaft über Bellinzona an Uri und Obwalden abtreten.",
      "supports": "In 1419 the Sax-Misox must give Bellinzona to Uri and Obwalden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/024649/",
      "title": "HLS: Ennetbirgische Feldzüge",
      "quote": "Durch die Rückeroberung Bellinzonas durch Mailand und die eidgenössische Niederlage in der Schlacht bei Arbedo 1422 gingen alle ennetbirgischen Territorien verloren.",
      "supports": "Milan attacks; the Swiss lose at Arbedo in 1422 and lose all land south of the Alps"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008543/",
      "title": "HLS: Leventina",
      "quote": "Nach der Niederlage Uris in der Schlacht bei Arbedo (1422) brachte der Herzog von Mailand das Tal wieder unter seine Herrschaft. 1439/1441 erlangte Uri erneut die Kontrolle über die Leventina.",
      "supports": "After Arbedo Uri tries again and gets the Leventina back in 1439–1441"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Nach der Niederlage des mailändischen Heers in der Schlacht bei Giornico 1478 fiel die Leventina 1480 den Urnern, denen sie bereits 1439/1441 verpfändet worden war, als Herrschaft zu.",
      "supports": "Milan pledges the Leventina to Uri in 1439–1441; the Swiss win at Giornico in 1478; in 1480 the Leventina becomes Uri's"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Als 1499-1500 ein Eroberungszug von König Ludwig XII. von Frankreich das Herzogtum Mailand erschütterte",
      "supports": "The rest of today's Ticino still belongs to Milan until 1499–1500"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "annektierten Uri, Schwyz und Unterwalden das Bleniotal und die Riviera und nahmen Bellinzona ein.",
      "supports": "In 1499–1500, while France fights Milan, Uri, Schwyz and Nidwalden take Blenio and the Riviera and occupy Bellinzona"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "1503 anerkannte Frankreich die eidgenössische Herrschaft über diese Gebiete, worauf diese dort die ersten gemeinen Herrschaften südlich der Alpen errichteten.",
      "supports": "In 1503 France accepts Swiss rule; the lands become common lordships"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008540/",
      "title": "HLS: Bellinzona (Pieve, Vogtei, Bezirk)",
      "quote": "im Turnus von einem Vertreter der neuen Herrschaft verwaltet, dem Landvogt oder Kommissar, der aus einem der drei regierenden Orte stammte",
      "supports": "Uri, Schwyz and Nidwalden rule together, with a governor each canton sends in turn"
     }
    ]
   },
   {
    "year": 1513,
    "title": "Twelve cantons take Lugano and Locarno",
    "text": [
     "In 1512–1513 the Swiss take the castles of Lugano and Locarno. Twelve cantons rule Lugano, Locarno and the Vallemaggia as common lordships. These are the 'bailiwicks beyond the mountains'.",
     "The Swiss also take the Val d'Ossola (now in Italy) in 1512. In the peace of 1516 it goes back to Milan. The map cannot show it.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Die eidgenössischen Truppen bemächtigten sich der Festungen Lugano und Locarno, besetzten deren Umland und schufen im eroberten Gebiet die gemeinen Herrschaften der zwölf Orte.",
      "supports": "In 1512–1513 the Swiss take the castles of Lugano and Locarno; twelve cantons rule them as common lordships"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/046979/",
      "title": "HLS: Ennetbirgische Vogteien",
      "quote": "die vier Gemeinen Herrschaften, Eigentum der 12 Kantone (die 13 ohne Appenzell), von der Eroberung 1512 bis zur Revolution 1798.",
      "supports": "The 'bailiwicks beyond the mountains': four common lordships of twelve cantons (with the Vallemaggia)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/024649/",
      "title": "HLS: Ennetbirgische Feldzüge",
      "quote": "Das Eschental wurde erneut unterworfen.",
      "supports": "The Swiss take the Val d'Ossola in 1512"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/024649/",
      "title": "HLS: Ennetbirgische Feldzüge",
      "quote": "Im Ewigen Frieden von 1516 gestand König Franz I. den Eidgenossen und den Bündnern ihre Eroberungen zu, das Eschental kam wieder zu Mailand.",
      "supports": "In the peace of 1516 the Val d'Ossola goes back to Milan"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "die Landvogtei Mendrisio mit der Pieve Balerna, die den zwölf Orten erst 1521 zugesprochen wurde",
      "supports": "Mendrisio and Balerna are not yet finally Swiss (until 1521)"
     }
    ]
   },
   {
    "year": 1521,
    "title": "All of today's Ticino Swiss",
    "text": [
     "In 1521 Mendrisio and Balerna also go to the twelve cantons. Now all of today's Ticino is under Swiss rule.",
     "The people are subjects of the ruling cantons. Governors from these cantons run the bailiwicks (land ruled by a governor). This stays so for almost 300 years. In 1755 the Leventina revolts against Uri, but it fails."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Locarno, das Vallemaggia, Lugano und ab 1521 Mendrisio von den zwölf Orten (13 Orte ohne Appenzell).",
      "supports": "In 1521 Mendrisio goes to the twelve cantons; all of today's Ticino is under Swiss rule"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "wurde zwischen 1439 und 1521 in acht Vogteien unterteilt: Die Leventina hing von Uri ab, Blenio, die Riviera und Bellinzona von Uri, Schwyz und Nidwalden",
      "supports": "Who rules each bailiwick (layers)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008543/",
      "title": "HLS: Leventina",
      "quote": "In seiner dreihundertjährigen Herrschaft veränderte Uri die Verwaltung nur behutsam, dennoch kam es mehrmals zu Spannungen mit den untertänigen Leventinern",
      "supports": "The people are subjects; this lasts almost 300 years"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008540/",
      "title": "HLS: Bellinzona (Pieve, Vogtei, Bezirk)",
      "quote": "1501-1798 wurden die Stadt und Grafschaft Bellinzona im Turnus von einem Vertreter der neuen Herrschaft verwaltet, dem Landvogt oder Kommissar",
      "supports": "Governors from the ruling cantons run the bailiwicks"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/017207/",
      "title": "HLS: Livineraufstand",
      "quote": "Daraufhin besetzten die Urner mit Hilfe von eidgenössischen Truppen umgehend das Tal und unterdrückten den Aufstand mit harter Hand.",
      "supports": "In 1755 the Leventina revolts against Uri, but it fails"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "rief die Stadt am 15. Februar 1798 ihre Unabhängigkeit aus, die von den regierenden Orten anerkannt wurde.",
      "supports": "In February 1798 the bailiwicks begin to become free (Lugano first)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "am 4. April Bellinzona, Blenio sowie der Riviera die Unabhängigkeit zu, während Uri am 14. März die Leventina aus dem Untertanenverhältnis entliess.",
      "supports": "Up to April 1798 the bailiwicks become free; Uri frees the Leventina on 14 March 1798"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "1798 wurde das Gebiet der Helvetischen Republik angegliedert.",
      "supports": "In 1798 the land becomes part of the Helvetic Republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008636/",
      "title": "HLS: Bellinzona (Kanton)",
      "quote": "Der am 14.4.1798 geschaffene Verwaltungsbezirk der Helvetischen Republik umfasste die ehemaligen Vogteien B., Leventina, Riviera und Blenio",
      "supports": "The Helvetic canton of Bellinzona has Bellinzona, the Leventina, the Riviera and Blenio"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008637/",
      "title": "HLS: Lugano (Kanton)",
      "quote": "die ehemaligen Vogteien Lugano, Locarno, Mendrisio und Vallemaggia umfasste und gleichzeitig mit dem Kanton Bellinzona gebildet wurde.",
      "supports": "The Helvetic canton of Lugano has Lugano, Mendrisio, Locarno and the Vallemaggia; the land forms two cantons"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Erst mit der Mediationsakte von 1803 erfolgte die Gründung des Kantons Tessin",
      "supports": "In 1803 the Act of Mediation creates the canton of Ticino"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007394/",
      "title": "HLS: Tessin (Kanton)",
      "quote": "Der Kanton Tessin wurde in acht Bezirke, die den ehemaligen Vogteien entsprachen",
      "supports": "Its eight districts follow the old bailiwicks"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008540/",
      "title": "HLS: Bellinzona (Pieve, Vogtei, Bezirk)",
      "quote": "seit 1803 Bezirk des Kantons Tessin.",
      "supports": "The old bailiwick of Bellinzona is a district of Ticino since 1803"
     }
    ],
    "uncertain": [
     "Since 1803 the borders of the canton have not changed (no source found that says this directly)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "1011 erhielt der Bischof von Lausanne vom König von Burgund die comté de Vaud, faktisch die Regalien über das Gebiet.",
      "supports": "In 1011 Rudolf III gives the county of Vaud to the Bishop of Lausanne; the bishop gets a count's rights"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Das Aussterben der Rudolfinger 1032 brachte die Angliederung an das Heilige Römische Reich.",
      "supports": "After 1032 the kingdom goes to the German emperors"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Das Fehlen einer zentralen, anerkannten Gewalt förderte ab Mitte des 11. Jahrhunderts den Aufstieg des regionalen und lokalen Adels.",
      "supports": "Many noble families also hold land in Vaud"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "der König gab der Abtei 1018 alle ihre Güter im Wallis zurück und gewährleistete so, dass es ihm direkt unterstand",
      "supports": "Abbey of Saint-Maurice near the Chablais (map layer)"
     }
    ]
   },
   {
    "year": 1260,
    "title": "Savoy takes over Vaud",
    "text": [
     "In the 13th century the counts of Savoy come into Vaud. In 1219 the bishop gives Moudon to Savoy as a fief (land held from a higher lord).",
     "From 1240 to 1260 Peter II of Savoy wins the loyalty of most lords of Vaud. He also gets Payerne. Savoy already holds the Chablais around Aigle.",
     "The bishop keeps Lausanne, Lavaux, Lucens and Avenches. Other lords keep their own land, for example the lords of Grandson and, in the Pays-d'Enhaut, the counts of Gruyère. From the 14th century these lands count as fiefs of Savoy."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Im Vertrag von Burier von 1219 gab der Bischof von Lausanne Graf Thomas I. Moudon zu Lehen.",
      "supports": "In 1219 the bishop gives Moudon to Savoy as a fief"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Aber erst dessen Sohn Peter II. nahm die Waadt eigentlich in Besitz, indem er 1240-1260 systematisch Feudalrechte erwarb",
      "supports": "From 1240 to 1260 Peter II wins the loyalty of the lords of Vaud"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Mit dem Erwerb der Vogtei Payerne schuf sich Peter II. 1240 ein ansehnliches Obereigentum",
      "supports": "He gets Payerne"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Diese waren ab dem 12. Jahrhundert im Chablais ansässig, 1207 erlangten sie Rechte in der Waadt.",
      "supports": "Savoy already holds the Chablais"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Neben Lausanne und dem Lavaux besassen die Bischöfe Lucens, Bulle, Avenches und La Roche.",
      "supports": "The bishop keeps Lausanne, Lavaux, Lucens and Avenches"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007574/",
      "title": "HLS: Grandson (Herrschaft, Bezirk)",
      "quote": "Die grosse Herrschaft Grandson, die im Besitz der gleichnamigen Familie war",
      "supports": "The lords of Grandson"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "die von Greyerz im Pays-d'Enhaut",
      "supports": "The counts of Gruyère in the Pays-d'Enhaut"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Ab dem zweiten Viertel des 14. Jahrhunderts galten deren Rechte jedoch stets als Lehen der Savoyer.",
      "supports": "From the 14th century these lands count as Savoyard fiefs (corrects: not yet in 1260)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Neben Lausanne und dem Lavaux besassen die Bischöfe Lucens, Bulle, Avenches und La Roche.",
      "supports": "The Bishop of Lausanne rules Lausanne and Lavaux"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Als Folge der Burgunderkriege 1474-1476 wurden Teile der Waadt und 1536 das gesamte Gebiet Untertanenland von Bern bzw. von Bern und Freiburg",
      "supports": "Most of Vaud is Savoyard until the Burgundian Wars, when parts become subject land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Bern riss des Weiteren den Teil des Chablais rechts der Rhone (Bex und Aigle) an sich.",
      "supports": "Bern takes Aigle and Bex"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "ebnete den Bernern und Freiburgern den Weg zur Annexion des Waadtländer Besitzes der de Chalon (Grandson, Orbe, Echallens)",
      "supports": "Bern and Fribourg take Grandson, Orbe and Echallens"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007574/",
      "title": "HLS: Grandson (Herrschaft, Bezirk)",
      "quote": "bis 1798 gemeine Herrschaft von Bern und Freiburg",
      "supports": "They rule them together as common lordships until 1798"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Im Frühling 1536 eroberten Berner Truppen, angeführt von Hans Franz Nägeli, unter Berufung auf den Vertrag von Saint-Julien (1530) die Waadt.",
      "supports": "In 1536 Bern conquers Vaud from Savoy"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Nach der Flucht des Bischofs Sébastien de Montfalcon wurde dessen Besitz konfisziert.",
      "supports": "Bern takes Lausanne from the bishop"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Das reformatorische Gedankengut verbreitete sich in der Waadt erst, als Bern nach der Lausanner Disputation vom Oktober 1536 den neuen Glauben einführte.",
      "supports": "Bern brings the Reformation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007379/",
      "title": "HLS: Freiburg (Kanton)",
      "quote": "Dieses gemeinsame Interesse führte 1536 zur militärischen Besetzung der Waadt durch die beiden Orte, die das eroberte Gebiet unter sich aufteilten",
      "supports": "Fribourg takes the eastern part"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Die der Waadt am 13. Mai 1536 verliehenen Satzungen teilten das Land in Landvogteien ein",
      "supports": "Bern divides Vaud into bailiwicks"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "nach dem Bankrott des Grafen von Greyerz 1555 mit dem Pays d'Enhaut noch eine weitere dazukam",
      "supports": "In 1555 Bern adds the Pays-d'Enhaut"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Im Vertrag von Lausanne 1564 musste Bern die Landvogteien Gex, Ternier-Gaillard und Thonon dem Herzog von Savoyen zurückgeben",
      "supports": "Bern gives Gex and land south of Lake Geneva back to Savoy (1564)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "gab Bern dem Herzog das Pays de Gex und die Dörfer des Genevois zurück, ein Vorgang, der 1567 in die Tat umgesetzt wurde",
      "supports": "The return is carried out by 1567"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "erst die Waadtländer Revolution 1798 beendete die Fremdherrschaft",
      "supports": "Vaud stays under Bern until 1798"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "rief eine Handvoll Patrioten in Lausanne und Vevey in der Nacht vom 24. Januar 1798 die Lemanische Republik aus",
      "supports": "In January 1798 the Lemanic Republic is declared"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Während der Helvetischen Republik hiess die Waadt Kanton Léman",
      "supports": "Vaud becomes the canton of Léman in the Helvetic Republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007592/",
      "title": "HLS: Echallens (Vogtei, Bezirk)",
      "quote": "dann gemeine Vogtei Berns und Freiburgs, seit 1798 Bezirk des Kantons Waadt",
      "supports": "The common lordships join the new canton (Echallens)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007574/",
      "title": "HLS: Grandson (Herrschaft, Bezirk)",
      "quote": "bis 1798 gemeine Herrschaft von Bern und Freiburg, seit 1798 Bezirk des Kantons Waadt",
      "supports": "The common lordships join the new canton (Grandson)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Der neue Kanton Léman umfasste die von Bern abgetrennte Waadt mit Ausnahme der Distrikte Avenches und Payerne, die zum Kanton Freiburg kamen.",
      "supports": "Aigle (Bernese Vaud) joins; Payerne and Avenches go to Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008631/",
      "title": "HLS: Léman (Kanton)",
      "quote": "mit Ausnahme der Distrikte Avenches und Payerne, die bis am 16.10.1802 Freiburg angegliedert waren",
      "supports": "Payerne and Avenches are part of Fribourg until 1802"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Avenches und Payerne waren zwischen 1798 und 1802 freiburgische Distrikte",
      "supports": "In 1802 Payerne and Avenches come back"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "vom Erlass der Mediationsakte (1803) an Kanton Waadt",
      "supports": "With the Act of Mediation of 1803 Vaud becomes a canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Kanton der Eidgenossenschaft seit 1803.",
      "supports": "A full canton of the Confederation since 1803"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "Seine Grenzen sind seit dem 16. Jahrhundert unverändert, ausser im Broyetal",
      "supports": "Since then the borders have almost not changed"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007395/",
      "title": "HLS: Waadt",
      "quote": "im Dappental, wo 1862 der Grenzverlauf mit Frankreich bereinigt wurde",
      "supports": "In 1862 the border with France changes in the Vallée des Dappes"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Zwar erhielt der Bischof von Sitten von Rudolph III. 999 die Grafschaftsrechte über das Wallis",
      "supports": "In 999 Rudolf III gives the county of Valais to the Bishop of Sion"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Er begründete damit das Fürstbistum Sitten, das 1032 reichsunmittelbar wurde.",
      "supports": "From 1032 the bishop is directly under the emperor"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "der König gab der Abtei 1018 alle ihre Güter im Wallis zurück",
      "supports": "The Abbey of Saint-Maurice holds much land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "die im Chablais etablierten Grafen von Savoyen, Kastvögte der Abtei Saint-Maurice, ab dem 12. Jahrhundert das Gebiet zwischen Rhoneknie und Genfersee dominierten",
      "supports": "From the 12th century the counts of Savoy are its protectors and rule the Chablais"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Im 13. Jahrhundert stiessen die Grafen von Savoyen ins mittlere Wallis vor",
      "supports": "In the 13th century Savoy pushes up the valley towards Sion"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "sieben Gemeinden oder Zenden (lateinisch decima; desenus)",
      "supports": "The village communities become the Zenden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Martigny und Ardon-Chamoson (ab 1384 Savoyen)",
      "supports": "In 1384 Savoy takes Martigny and Ardon-Chamoson"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Der Friedensvertrag von 1392 legte die Morge von Conthey als Grenze fest und beseitigte die jeweiligen Enklaven.",
      "supports": "The peace of 1392 divides Valais at the Morge of Conthey"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "1403 schlossen Bischof und Zenden ein ewiges Burg- und Landrecht mit Luzern, Uri und Unterwalden",
      "supports": "In 1403 the bishop and the Zenden make a permanent alliance with Lucerne, Uri and Unterwalden"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Spätestens mit der Erneuerung des Bündnisses 1416 und 1417 galt das Wallis als zugewandter Ort der Eidgenossenschaft.",
      "supports": "In 1416–1417 the alliance is renewed; Valais becomes an ally (zugewandter Ort), not a member"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "sieben Gemeinden oder Zenden (lateinisch decima; desenus)",
      "supports": "Upper Valais is a land of seven Zenden"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Der Friedensvertrag von 1392 legte die Morge von Conthey als Grenze fest",
      "supports": "Lower Valais, west of the Morge, belongs to Savoy"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "im November 1475 Conthey und besiegte mit eidgenössischen Hilfstruppen das savoyische Heer auf der Planta in Sitten.",
      "supports": "In 1475 the Upper Valaisans beat Savoy at the Planta near Sion"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "1475 kam mit der Landvogtei Saint-Maurice (bis 1536 Landvogtei nid der Mors) ein weiteres hinzu",
      "supports": "They take Lower Valais down to Saint-Maurice and rule it as subject land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "als es 1475 in der Waadt einfiel und sich mit Bischof und Zenden gegen Savoyen verbündete",
      "supports": "In 1475 Valais makes an alliance with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "im Zug der Eroberung der Waadt und des Chablais durch Bern 1536 Monthey und Evian",
      "supports": "The Monthey area is still Savoyard until 1536 (map layer)"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "im Zug der Eroberung der Waadt und des Chablais durch Bern 1536 Monthey und Evian",
      "supports": "In 1536 the Upper Valaisans take the Chablais as far as Evian"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Seit dem Vertrag von Thonon 1569, in dem die Morge von Saint-Gingolph als Grenze zwischen dem Fürstbistum und dem Herzogtum Savoyen festgelegt wurde",
      "supports": "Treaty of Thonon 1569; the border is at the Morge at Saint-Gingolph"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "gingen Evian und das Vallée d'Aulps an Savoyen zurück und die Morge bei Saint-Gingolph wurde als Westgrenze festgelegt",
      "supports": "In 1569 Valais gives Evian and the Aulps valley back; border at the Morge at Saint-Gingolph"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "blieben die politischen Grenzen des Wallis, abgesehen von kleineren Bereinigungen, unverändert",
      "supports": "Since then the outer border has hardly changed"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/008412/",
      "title": "HLS: Saint-Maurice (Kastlanei, Bezirk)",
      "quote": "Die Herrschaft der Zenden über die Landvogtei S., die neben S. acht weitere Kastlaneien umfasste, wurde mit dem Vertrag von Thonon 1569 bestätigt.",
      "supports": "Lower Valais (with Monthey) stays under the Zenden"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Nachdem sich Monthey und weitere Gemeinden der Bewegung angeschlossen hatten, gestand der Landrat dem Unterwallis am 22. Februar Freiheit und Unabhängigkeit zu.",
      "supports": "In early 1798 Lower Valais declares itself free and Upper Valais accepts this"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "1798-1802 Kanton der Helvetischen Republik",
      "supports": "Valais becomes a canton of the Helvetic Republic"
     }
    ],
    "uncertain": [
     "All people of Valais now have the same rights."
    ]
   },
   {
    "year": 1810,
    "title": "French département of Simplon",
    "text": [
     "In 1802 Valais becomes a separate state, the independent Republic of Valais. Napoleon builds a military road over the Simplon Pass (1805).",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "Es bildete vom 30. August 1802 bis 1810 eine unabhängige Republik",
      "supports": "From 1802 to 1810 Valais is an independent republic (corrects 'Rhodanic Republic')"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "1805 napoleonische Militärstrasse über den Simplon",
      "supports": "Napoleon's military road over the Simplon (1805)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "1810-1813 Departement Simplon im französischen Kaiserreich",
      "supports": "In 1810 France annexes Valais as the département of Simplon until 1813"
     }
    ]
   },
   {
    "year": 1815,
    "title": "Valais joins as a canton",
    "text": [
     "In 1815 Valais joins the Confederation as a full canton. Neuchâtel and Geneva also join in 1814–1815.",
     "Since then, the borders have hardly changed."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "ab 1815 Republik und Kanton der Schweizerischen Eidgenossenschaft",
      "supports": "In 1815 Valais joins the Confederation as a canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Kanton der Eidgenossenschaft seit 1815.",
      "supports": "Geneva also joins in 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "hatten am 12. September 1814 von der Tagsatzung die Aufnahme Neuenburgs als 21. Kanton erreicht",
      "supports": "Neuchâtel is accepted as a canton in 1814"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007396/",
      "title": "HLS: Wallis",
      "quote": "blieben die politischen Grenzen des Wallis, abgesehen von kleineren Bereinigungen, unverändert",
      "supports": "Since then the borders have hardly changed"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Letzteres wurde offensichtlich kurz vor 1011, dem Jahr seiner Ersterwähnung, gebaut.",
      "supports": "In 1011 Neuchâtel is named for the first time"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Die königlichen Güter, mit denen 1011 Irmingard, die Verlobte des Burgunderkönigs Rudolf III. ausgestattet wurde, umfassten Neuenburg (novum castellum)",
      "supports": "Rudolf III gives it, with other royal estates, to his bride Irmingard"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Ab 1033 gelangte das neuenburgische Gebiet nach und nach mit dem Königreich Burgund ans Reich.",
      "supports": "After 1032 the land belongs to the Empire"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Die schon 1185 erwähnten Bürger von Neuenburg erhielten 1214 einen dem Gewohnheitsrecht von Besançon folgenden Freiheitsbrief.",
      "supports": "In 1214 the town gets a charter of freedoms"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Als die gemeinsame Herrschaft um 1218 zu Ende ging, teilten Ulrich III. und sein Neffe Berchtold das Territorium unter sich auf",
      "supports": "About 1218 the family divides its land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Nach der Teilung zogen die von Aarberg, ein Zweig der Neuenburg-Nidau, die 1242 erstmals erwähnte Herrschaft Valangin an sich.",
      "supports": "Valangin goes to the Aarberg branch; first named in 1242"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "1288 wurde die Reichsunmittelbarkeit der geschwächten und zu einfachen Herren herabgesunkenen von Neuenburg aufgehoben",
      "supports": "In 1288 they lose their direct link to the emperor"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Rudolf I. von Habsburg unterstellte sie der Oberlehensherrschaft der von Chalon",
      "supports": "They come under the Chalon family"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "1814 die im Pariser Frieden beschlossene Angliederung des Dorfs Le Cerneux-Péquignot",
      "supports": "Le Cerneux-Péquignot is outside Neuchâtel until 1814 (map layer)"
     }
    ]
   },
   {
    "year": 1406,
    "title": "County allied with Bern",
    "text": [
     "Neuchâtel is a county. From 1395 it belongs to the counts of Freiburg (in Breisgau). The count has alliances of citizenship (Burgrecht) with Swiss cities: with Bern since 1308 (renewed in 1406), with Fribourg since 1290 and with Solothurn since 1369. So it is an ally of the Swiss, not a member.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Als das lokale Geschlecht der Herren von Neuenburg 1395 erlosch, ging die Grafschaft an die aus Süddeutschland stammenden Familien von Freiburg und von Hochberg über.",
      "supports": "From 1395 the county belongs to the counts of Freiburg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "insbesondere mit Freiburg (1290), Bern (1308), Solothurn (1369) und Luzern (1501)",
      "supports": "Burgrecht alliances with Fribourg (1290), Bern (1308) and Solothurn (1369)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Der Graf von Neuenburg und sein Sohn leisten vor dem Schultheiss und dem Rat von Bern den Eid anlässlich des Burgrechtsvertrags von 1406.",
      "supports": "The alliance with Bern is renewed in 1406"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Obgleich Neuenburg ein zugewandter Ort der Eidgenossenschaft war, besass es keinen Sitz in der Tagsatzung.",
      "supports": "It is an ally of the Swiss, not a member"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Die Herren von Valangin, die sich mit ihrer Lehensabhängigkeit schwertaten, behielten allerdings bis zum Ende des 16. Jahrhunderts eine eigenständige Verwaltung.",
      "supports": "Valangin is a separate lordship"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "die von Freiburg (Ende 1395-1458) und die von Hochberg (1458-1503)",
      "supports": "From 1458 the Hochberg family rules"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Die d'Orléans-Longueville (1504-1707)",
      "supports": "From 1504 the Orléans-Longueville family"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "die Grafschaft während der Mailänderkriege vorsorglich zu besetzen und sie 1512-1529 durch Vögte verwalten zu lassen",
      "supports": "From 1512 to 1529 the Swiss occupy Neuchâtel and rule it through governors"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Nach einem langen Prozess vereinigte sich 1592 die Herrschaft Valangin mit der Grafschaft.",
      "supports": "In 1592 Valangin is united with the county"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "an der Spitze eines Staats, dessen Grenzen fast mit jenen des heutigen Kantons übereinstimmten",
      "supports": "The state now has almost its present size"
     }
    ]
   },
   {
    "year": 1815,
    "title": "Canton and principality",
    "text": [
     "In 1707 the King of Prussia becomes Prince of Neuchâtel. From 1806 to 1814 Napoleon gives the principality to his marshal Berthier.",
     "In 1814 Neuchâtel gets Le Cerneux-Péquignot from France. On 12 September 1814 the Swiss Diet accepts Neuchâtel as the 21st canton. In 1815 it also gets all of Lignières.",
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Nach dem Tod von Marie de Nemours 1707 wurde das Fürstentum dem preussischen Königshaus der Hohenzollern zugesprochen",
      "supports": "In 1707 the King of Prussia becomes Prince of Neuchâtel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "als Marschall Louis-Alexandre Berthier 1806-1814 Fürst von Neuenburg war",
      "supports": "From 1806 to 1814 Berthier is prince"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "1814 die im Pariser Frieden beschlossene Angliederung des Dorfs Le Cerneux-Péquignot, 1815 die im Vertrag von Wien (Vereinigungsurkunden) geregelte Übernahme des gesamten Allods Lignières",
      "supports": "Le Cerneux-Péquignot in 1814, all of Lignières in 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "hatten am 12. September 1814 von der Tagsatzung die Aufnahme Neuenburgs als 21. Kanton erreicht",
      "supports": "The Swiss Diet accepts Neuchâtel as a canton in September 1814"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "vom 17. Jahrhundert bis 1848 Fürstentum, ab 1814 Kanton",
      "supports": "Neuchâtel is both a canton and a principality"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "seit 1848 Republik und Kanton Neuenburg (amtlicher Name)",
      "supports": "In 1848 Neuchâtel becomes a republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "bis zur Revolution von 1848 behielten",
      "supports": "A revolution in 1848 ends the rule of the prince"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "Darin verzichtete der preussische König auf Neuenburg",
      "supports": "In 1857 (Treaty of Paris) the King of Prussia gives up his claim"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007397/",
      "title": "HLS: Neuenburg (Kanton)",
      "quote": "1894 die Abtretung des Schlosses Thielle an den Kanton Bern nach der Juragewässerkorrektion",
      "supports": "In 1894, after the Jura water correction, Thielle goes to Bern"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Der letzte Burgunderkönig starb 1032 und vermachte seine Besitzungen Konrad II., dem Kaiser des Heiligen Römischen Reichs.",
      "supports": "In 1032 the last king of Burgundy dies; his land goes to the emperor"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "der Bischof verteidigte seine Herrschaft über die Stadt",
      "supports": "The bishop rules the city"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Ab dem 11. Jahrhundert setzte sich das Geschlecht der Grafen von Genf in diesen Auseinandersetzungen durch",
      "supports": "From the 11th century the counts of Geneva are the strongest lords around the city"
     }
    ]
   },
   {
    "year": 1402,
    "title": "Savoy buys the county",
    "text": [
     "The bishop holds the city and rural districts (mandements) such as Peney and Jussy. The priory of Saint-Victor and the cathedral chapter hold other villages. The lords of Gex rule the land to the north-west.",
     "The counts of Geneva die out in 1394. In 1402 Amadeus VIII of Savoy buys their county. By 1424 he also buys the rights of all other heirs. Now Savoy surrounds Geneva and tries to control the city."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Dem Bischof, der Herr der Stadt Genf und ihrer Vorstädte war, unterstanden ab dem 12. Jahrhundert auch Güter, die bald als Mandements bezeichnet wurden",
      "supports": "The bishop holds the city and rural mandements"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "nämlich Peney und Jussy, im heutigen Kantonsgebiet",
      "supports": "Peney and Jussy"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Zwischen 1260 und 1304 erkannten die Grafen dem Priorat sämtliche Herrschaftsrechte (mit Ausnahme der Durchführung der Hinrichtungen) über 20 Dörfer",
      "supports": "The priory of Saint-Victor holds villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Ein weiterer wichtiger Lehnsherr war das Domkapitel.",
      "supports": "The cathedral chapter holds villages"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "die Grafen von Genf, die Herren von Gex, die Freiherren de Faucigny, die Grafen von Maurienne-Savoyen",
      "supports": "The lords of Gex"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/019515/",
      "title": "HLS: Genf, von",
      "quote": "Ab dem 11. Jahrhundert bezeugte Genfer Dynastie, die im Mannesstamm 1394 ausgestorben ist.",
      "supports": "The counts of Geneva die out in 1394"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/019515/",
      "title": "HLS: Genf, von",
      "quote": "der die Rechte 1402 für 45'000 Francs d'or an Amadeus VIII. von Savoyen veräusserte",
      "supports": "In 1402 Amadeus VIII buys the county"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/019515/",
      "title": "HLS: Genf, von",
      "quote": "1402-1424 gelang es diesem mittels zahlreicher Prozesse und Kämpfe, die Rechte aller Erbschaftsanwärter der Grafen von Genf zu kaufen.",
      "supports": "By 1424 he buys the rights of all other heirs"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/002903/",
      "title": "HLS: Genf (Gemeinde)",
      "quote": "rissen die Grafen von Savoyen auf Kosten des Bischofs immer mehr Machtbefugnisse an sich und drohten sich zu den Herrschern der Stadt aufzuschwingen",
      "supports": "Savoy tries to control the city"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Nach Abschluss des Burgrechts mit Bern und Freiburg von 1526",
      "supports": "In 1526 Geneva makes an alliance with Bern and Fribourg"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "trat die Nachfolge des Bischofs Pierre de La Baume an, der die Stadt verliess",
      "supports": "The bishop leaves"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Mit der Einführung der Reformation 1536 vollzog Genf eine sowohl politische als auch religiöse Revolution",
      "supports": "In 1536 the city takes the Reformation"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "eine unabhängige und souveräne reformierte Republik wurde",
      "supports": "Geneva becomes an independent republic"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Dagegen scheiterten mehrere Versuche der Genfer, Mitglied der Eidgenossenschaft zu werden.",
      "supports": "An ally of the Swiss, not a member"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Die Seigneurie schuf in den ehemaligen bischöflichen Mandements Kastlaneien",
      "supports": "Geneva takes the bishop's mandements of Peney and Jussy"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/002892/",
      "title": "HLS: Céligny",
      "quote": "1536 leisteten die Vertreter der Bürger von Céligny Genf als Lehensherrin und Nachfolgerin des Bischofs den Treueeid.",
      "supports": "Geneva takes Céligny"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "sich die Stadt Bern bis 1564/1567 und dann der Herzog von Savoyen die Hoch- und Appellationsgerichtsbarkeit sicherten",
      "supports": "Geneva has only some rights in the Saint-Victor and chapter villages; others claim the rest"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Der französisch-savoyische Krieg, der im Kontext des Konflikts zwischen Frankreich und Spanien zu sehen ist, wurde 1601 mit dem Vertrag von Lyon beendet.",
      "supports": "From 1601 the Pays de Gex is French"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "dass die Genfer Exklaven in den französischen und savoyischen Gebieten ständig Gefahr liefen",
      "supports": "Many Genevan villages are enclaves"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Im Lausanner Vertrag 1564 gab Bern dem Herzog das Pays de Gex",
      "supports": "Pays de Gex: Bern 1536–1564, then Savoy (map layer)"
     }
    ],
    "uncertain": [
     "Savoy claims many of the villages where Geneva has rights."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Mandements Peney (Pariser Vertrag vom 15. August 1749) und Jussy sowie in einem Teil der Champagne (Turiner Vertrag vom 30. Mai 1754)",
      "supports": "In 1749 and 1754 treaties with France and Sardinia exchange land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Im 18. Jahrhundert brachte der Austausch von Gebieten und Gerichtsbarkeiten mit Frankreich und dem Königreich Sardinien",
      "supports": "Geneva's rural lands become a little more compact"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "wurde mit dem Vereinigungsvertrag vom 26. April 1798 besiegelt",
      "supports": "In 1798 France annexes Geneva"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Im August 1798 wurde Genf Hauptort des Departements Léman und blieb dies für fünfzehn Jahre.",
      "supports": "Geneva is the capital of the département of Léman until 1813"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "das im September 1792 zum französischen Departement wurde",
      "supports": "Savoy is also French at this time"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Die Regierungskommission, die im Dezember 1813 nach dem Abzug der kaiserlichen Truppen",
      "supports": "Geneva is free again at the end of 1813"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "Kanton der Eidgenossenschaft seit 1815.",
      "supports": "In 1815 Geneva joins the Confederation"
     },
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/030186/",
      "title": "HLS: Communes réunies (French)",
      "quote": "au second traité de Paris (20 novembre 1815) tout ou partie des communes de Versoix, Collex-Bossy, Le Grand-Saconnex, Pregny, Vernier et Meyrin",
      "supports": "By the Second Treaty of Paris of 20 November 1815 France gives these communes"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "musste sie aus der Umklammerung durch fremdes Territorium gelöst und mit der Eidgenossenschaft verbunden werden, an das ihr Gebiet bis dahin nirgends direkt angrenzte",
      "supports": "Now Geneva touches Vaud and Switzerland by land"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007398/",
      "title": "HLS: Genf (Kanton)",
      "quote": "seit 1815 und 1816 die Communes réunies, die von Frankreich und Piemont-Sardinien dem neuen Kanton abgetreten wurden",
      "supports": "The Savoy communes stay Sardinian until 1816 (map layer)"
     }
    ]
   },
   {
    "year": 1816,
    "title": "Communes from Savoy",
    "text": [
     "By the Treaty of Turin of 16 March 1816, the King of Sardinia gives Geneva 24 communes, all or in part, for example Carouge, Lancy, Bernex, Chêne-Thônex and Hermance.",
     "Together, the new communes from France and Savoy are called the 'communes réunies' (joined communes). Since then, the borders of the canton have changed only in small details, for example with Vaud in 1953 and 1971."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/030186/",
      "title": "HLS: Communes réunies (French)",
      "quote": "Par le traité de Turin (16 mars 1816), Victor-Emmanuel Ier, roi de Sardaigne, cédait tout ou partie d'Avusy, Laconnex, Soral",
      "supports": "Treaty of Turin, 16 March 1816 (the list names 24 communes)"
     },
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/030186/",
      "title": "HLS: Communes réunies (French)",
      "quote": "Chêne-Thônex, Puplinge, Presinge, Choulex, Meinier, Collonge-Bellerive, Corsier, Hermance, Anières et Carouge",
      "supports": "For example Carouge, Chêne-Thônex and Hermance"
     },
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/030186/",
      "title": "HLS: Communes réunies (French)",
      "quote": "Lancy, Bardonnex, Compesières, Troinex",
      "supports": "For example Lancy (and Bernex, also in the list)"
     },
     {
      "url": "https://hls-dhs-dss.ch/fr/articles/030186/",
      "title": "HLS: Communes réunies (French)",
      "quote": "On appelle \"communes réunies\" les territoires de confession catholique cédés à Genève",
      "supports": "They are called the 'communes réunies'"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/002892/",
      "title": "HLS: Céligny",
      "quote": "Die heutigen Grenzen zwischen den Kantonen Waadt und Genf wurden durch das Genfer Gesetz von 1953 festgelegt und 1971 nach dem Bau der Autobahn modifiziert.",
      "supports": "Borders changed in small details with Vaud in 1953 and 1971 (corrects 'have not changed')"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "999 vergabte Rudolf III., der letzte König von Burgund, dem Bischofsstuhl in Basel die Abtei Moutier-Grandval mit allen ihren Besitzungen.",
      "supports": "In 999 Rudolf III gives the abbey of Moutier-Grandval to the bishop of Basel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Mit dieser Schenkung, durch die der weltliche Herrschaftsbereich des Bischofs erheblich vergrössert wurde, setzte der Aufstieg des Fürstbistums Basel ein.",
      "supports": "This is the start of the bishop's state"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Das grosse Gebiet des Elsgaus, der die heutige Ajoie umfasste, blieb der Diözese Besançon und dem Königreich Burgund angegliedert.",
      "supports": "The Ajoie belongs to the church of Besançon and the Kingdom of Burgundy"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Zu Beginn des 12. Jahrhunderts fiel die Propstei Saint-Ursanne, die zur Diözese Besançon gehörte, in den weltlichen und geistlichen Hoheitsbereich der Bischöfe von Basel.",
      "supports": "Saint-Ursanne in the early 1100s"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "1241 kamen die Güter des Herrn von Hasenburg dazu. 1271 erwarb der Bischof den Besitz des Grafen von Pfirt.",
      "supports": "Hasenburg lands 1241, Pfirt lands 1271"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "1283 übernahm er vom besiegten Grafen de Montbéliard, der von Rudolf I. von Habsburg unterstützt worden war, die Hoheitsrechte über Pruntrut und die Ajoie.",
      "supports": "In 1283 the bishop takes Porrentruy and the Ajoie from the count of Montbéliard (with help from King Rudolf)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Das Fürstbistum hatte dieses auch als Herrschaft von Muriaux (Spiegelberg) bezeichnete Territorium gegen 1360 erworben",
      "supports": "The bishop gets the Franches-Montagnes about 1360"
     }
    ],
    "uncertain": [
     "King Rudolf of Habsburg helped the bishop in 1283 (the source sentence does not say clearly whom Rudolf supported)."
    ]
   },
   {
    "year": 1792,
    "title": "The Prince-Bishopric before 1792",
    "text": [
     "For many centuries the Jura belongs to the Prince-Bishopric of Basel (a state ruled by the bishop of Basel). The bishop lives in Porrentruy.",
     "The bishop is a prince of the Holy Roman Empire, but he rules fully only in the north. The south has alliances with Bern, Fribourg and Solothurn and is linked to the Swiss. In April 1792 the bishop flees from the French army."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Schon 1528 hatte der Fürstbischof von Basel seine Residenz nach Pruntrut verlegt",
      "supports": "The bishop lives in Porrentruy (from 1528)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "konnte der Fürstbischof als Reichsfürst seine Herrschaft aber nur in den Kastlaneien Ajoie, Delsberg und Saint-Ursanne (mit Freibergen) sowie im Laufental",
      "supports": "The bishop is a prince of the Empire and rules fully only in the north"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "vom Schutz profitierte, den die mit Bern, Freiburg oder Solothurn geschlossenen Burgrechtsverträge boten",
      "supports": "The south has alliances with Bern, Fribourg and Solothurn"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Kurz vor der Besetzung des Landes durch französische Freiwilligenbataillone im April 1792 entschloss sich der Fürstbischof zur Flucht.",
      "supports": "In April 1792 the bishop flees from the French army"
     }
    ]
   },
   {
    "year": 1793,
    "title": "France takes the north",
    "text": [
     "In December 1792 the Rauracian Republic is declared in the north. On 23 March 1793 France annexes it as the department of Mont-Terrible.",
     "In December 1797 France also takes the south. Biel follows in February 1798. In 1800 the land becomes part of the department of Haut-Rhin."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Am 17. Dezember 1792 wurde die Raurachische Republik ausgerufen.",
      "supports": "In December 1792 the Rauracian Republic is declared"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "liess sie sich am 23. März 1793 den Anschluss an Frankreich aufzwingen. Das neu geschaffene Departement Mont-Terrible",
      "supports": "On 23 March 1793 France annexes it as the department of Mont-Terrible"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "mit dem ganzen Delsberger Tal und dem Laufental",
      "supports": "Laufen is also French (map layer)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "im Dezember um die nun ebenfalls besetzten südlichen Gebiete des Fürstbistums erweitert",
      "supports": "In December 1797 France takes the south"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000222/",
      "title": "HLS: Biel/Bienne",
      "quote": "Am 6. Februar 1798 erfolgte der Einmarsch der französischen Truppen durch das offene Obertor",
      "supports": "Biel becomes French in February 1798 (corrects 1797)"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "das Departement Mont-Terrible aufgehoben (1800) und dem Departement Haut-Rhin mit Hauptort Colmar angegliedert wurde",
      "supports": "In 1800 the land becomes part of Haut-Rhin"
     }
    ],
    "uncertain": [
     "Birseck was also French at this time (map layer)."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "1815 sprach der Wiener Kongress das verwaiste Fürstbistum Basel der Eidgenossenschaft zu und schloss es dem Kanton Bern an",
      "supports": "In 1815 the Congress of Vienna gives most of the old Prince-Bishopric to Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "mit Ausnahme der ehemaligen Vogtei Birseck und von Teilen der ehemaligen Vogtei Pfeffingen, die zum Kanton Basel kamen",
      "supports": "Birseck goes to Basel"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Am 21. Dezember übergab der eidgenössische General-Kommissar Johann Conrad Escher in Delsberg das Land den Repräsentanten der wiederhergestellten Patrizierrepublik Bern.",
      "supports": "Bern takes it over on 21 December 1815"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "jenen der Amtsbezirke Pruntrut, Delsberg und der Freiberge in der Zeit 1815-1978",
      "supports": "For more than 150 years the Jura is part of Bern"
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Am 23. Juni 1974 stimmte die jurassische Bevölkerung der sieben Amtsbezirke bei einer Stimmbeteiligung von 90% der Schaffung eines Kantons Jura",
      "supports": "On 23 June 1974 the Jura votes for its own canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Am 23. Juni 1974 votierte er mit 74% Ja-Stimmen für die Schaffung des Kantons Jura.",
      "supports": "The north votes clearly for its own canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Mit der Abstimmung vom 16. März 1975, in dem sich die drei südjurassischen Amtsbezirke für den Verbleib bei Bern entschieden",
      "supports": "In 1975 the three southern districts vote to stay with Bern"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "Seit dem 1. Januar 1979 an bildet der Kanton Jura den 26. souveränen Teilstaat der Eidgenossenschaft.",
      "supports": "On 1 January 1979 the canton of Jura starts; it is the 26th canton"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "auf die drei Bezirke mit separatistischer Mehrheit (Pruntrut, Delsberg und Freiberge)",
      "supports": "It has the districts of Delémont, Porrentruy and Franches-Montagnes"
     }
    ]
   },
   {
    "year": 2026,
    "title": "Moutier joins Jura",
    "text": [
     "In 1996 the small village of Vellerat moves from Bern to Jura. Today it is part of Courrendlin.",
     "On 28 March 2021 the town of Moutier votes to join Jura. It moves in 2026."
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
    ],
    "sources": [
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "1996 wurde Vellerat Teil des Kantons.",
      "supports": "In 1996 Vellerat moves to Jura"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/000427/",
      "title": "HLS: Vellerat",
      "quote": "seit 2019 mit Rebeuvelier Teil der Gemeinde Courrendlin",
      "supports": "Vellerat is today part of Courrendlin"
     },
     {
      "url": "https://hls-dhs-dss.ch/de/articles/007399/",
      "title": "HLS: Jura (Kanton)",
      "quote": "am 28. März 2021 wiederholt, wobei die Bevölkerung von Moutier mit 54,9% einem Wechsel von Bern zum Kanton Jura erneut zustimmte (ab 2026 in Kraft)",
      "supports": "On 28 March 2021 Moutier votes to join Jura; it moves in 2026"
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
