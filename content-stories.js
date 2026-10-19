// Map stories (lords, Reformation, wars). Built by scripts/build_stories.py from research/stories-*.json
window.MAP_STORIES = [
 {
  "id": "church-lords",
  "title": "Bishops and abbeys as lords",
  "card": "Between 950 and 1300, kings gave counties to bishops and abbeys, who ruled much of today's Switzerland before Savoy and Habsburg pushed them back.",
  "stops": [
   {
    "year": 950,
    "tick": "about 950",
    "title": "Two realms meet",
    "text": [
     "About 950 today's Switzerland is split between two realms. The west belongs to the Kingdom of Burgundy. Its kings, the Rudolfings, began in 888 with Rudolf I, who was chosen king at Saint-Maurice.",
     "The east belongs to the Duchy of Swabia, a part of the German kingdom. Its land reaches from the Upper Rhine and the Aare to the Lech river, and includes Rhaetia (today's Grisons). Zurich is one of the dukes' main seats. The border between the two realms runs roughly along the Aare.",
     "The south (today's Ticino) belongs to the Kingdom of Italy."
    ],
    "view": [
     [
      43.2,
      3.8
     ],
     [
      49.4,
      12.0
     ]
    ],
    "layers": [
     {
      "name": "Burgundy (Swiss part)",
      "kind": "burgundy",
      "label": "Kingdom of Burgundy (border with Swabia about the Aare)",
      "sel": {
       "cantons": [
        "VD",
        "VS",
        "GE",
        "NE",
        "FR",
        "JU",
        "SO",
        "BS",
        "BL"
       ],
       "districts": [
        241,
        242,
        243,
        246,
        247,
        248,
        249
       ]
      },
      "regions": [
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5262",
       "FRA-5341",
       "FRA-5302",
       "FRA-5311",
       "FRA-5288",
       "FRA-5338",
       "FRA-5352",
       "FRA-5274",
       "FRA-5351",
       "FRA-5265",
       "FRA-5304",
       "FRA-5266",
       "ITA-5442"
      ],
      "countries": []
     },
     {
      "name": "Swabia",
      "kind": "empire",
      "label": "Duchy of Swabia, part of the German kingdom (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "GL",
        "ZG",
        "SH",
        "AR",
        "AI",
        "SG",
        "GR",
        "AG",
        "TG"
       ],
       "districts": [
        244,
        245,
        250
       ]
      },
      "regions": [
       "DEU-1573",
       "FRA-5296",
       "FRA-5273",
       "AUT-2320"
      ],
      "countries": [
       "LIE"
      ]
     },
     {
      "name": "Italy",
      "kind": "other",
      "label": "Kingdom of Italy",
      "sel": {
       "cantons": [
        "TI"
       ]
      },
      "regions": [
       "ITA-5452",
       "ITA-5451",
       "ITA-5450",
       "ITA-5444",
       "ITA-5437"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Saint-Maurice",
      "lat": 46.2183,
      "lon": 7.0034,
      "kind": "place",
      "year": 888,
      "note": "Rudolf I chosen king"
     },
     {
      "name": "Zurich",
      "lat": 47.3698,
      "lon": 8.5414,
      "kind": "town",
      "note": "Seat of the dukes of Swabia"
     },
     {
      "name": "Winterthur",
      "lat": 47.4997,
      "lon": 8.7241,
      "kind": "battle",
      "year": 919,
      "note": "Swabia beats Burgundy"
     }
    ]
   },
   {
    "year": 960,
    "tick": "960",
    "title": "The bishop of Chur",
    "text": [
     "Kings like to give power to bishops. A bishop cannot pass land to a son, so the land stays with the church, and the king can choose the next bishop.",
     "Between 951 and 960 King Otto I gives Bishop Hartbert of Chur income from the county, the tolls of Chur, the right to make coins (958) and rights in the Bergell. This is the start of the bishop's rule over Chur and the roads to the Alpine passes.",
     "The abbey of Disentis, founded in the 700s, holds the upper Rhine valley below the Lukmanier and Oberalp passes."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bishop of Chur",
      "kind": "bishop",
      "label": "Bishop of Chur: Chur, Zizers, the Bergell (about)",
      "sel": {
       "munis": [
        3901,
        3947,
        3792
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Disentis",
      "kind": "abbey",
      "label": "Abbey of Disentis: upper Vorderrhein valley (about)",
      "sel": {
       "munis": [
        3982,
        3986,
        3983,
        3985,
        3987,
        3981
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Rhaetia",
      "kind": "empire",
      "label": "Rhaetia: royal land ruled by counts for the king (about)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Chur cathedral",
      "lat": 46.8497,
      "lon": 9.5348,
      "kind": "place",
      "year": 958,
      "note": "Bishop gets the right to mint coins"
     },
     {
      "name": "Disentis abbey",
      "lat": 46.7036,
      "lon": 8.8556,
      "kind": "place"
     },
     {
      "name": "Vicosoprano",
      "lat": 46.3533,
      "lon": 9.6267,
      "kind": "place",
      "year": 960,
      "note": "Bergell rights to the bishop"
     }
    ]
   },
   {
    "year": 999,
    "tick": "999",
    "title": "Sion and Basel get counties",
    "text": [
     "King Rudolf III of Burgundy is weak against his nobles. To build a counterweight, he gives counties to the church. In 999 he gives the bishop of Sion the County of Valais with all its rights.",
     "In the same year he gives the old abbey of Moutier-Grandval to the bishop of Basel. Before this, the bishop ruled little outside his city. Now he holds land in the Jura from Lake Biel to Alsace. This is the start of the Prince-Bishopric of Basel."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Saint-Maurice",
      "kind": "abbey",
      "label": "Abbey of Saint-Maurice and the Chablais",
      "sel": {
       "districts": [
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Bishop of Sion: County of Valais from 999",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Moutier-Grandval",
      "kind": "bishop",
      "label": "Moutier-Grandval: given to the bishop of Basel in 999",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Basel",
      "kind": "bishop",
      "label": "City of Basel: its bishop",
      "sel": {
       "munis": [
        2701
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Burgundy",
      "kind": "burgundy",
      "label": "Rest of the Kingdom of Burgundy",
      "sel": {
       "cantons": [
        "VD",
        "VS",
        "GE",
        "NE",
        "FR",
        "JU",
        "SO",
        "BS",
        "BL"
       ],
       "districts": [
        241,
        242,
        243,
        246,
        247,
        248,
        249
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Sion (Valère)",
      "lat": 46.2338,
      "lon": 7.3638,
      "kind": "place",
      "year": 999,
      "note": "Bishop gets the county"
     },
     {
      "name": "Moutier",
      "lat": 47.2792,
      "lon": 7.37,
      "kind": "place",
      "year": 999,
      "note": "Abbey given to Basel"
     },
     {
      "name": "Basel cathedral",
      "lat": 47.5565,
      "lon": 7.5925,
      "kind": "place"
     }
    ]
   },
   {
    "year": 1011,
    "tick": "1011",
    "title": "Lausanne gets the Vaud",
    "text": [
     "In 1011 Rudolf III gives the County of Vaud to Bishop Henry of Lausanne. The bishop already ruled the city of Lausanne itself.",
     "So by 1011 three bishops in the west — Sion, Basel and Lausanne — are also counts. They judge, collect taxes and call men to arms, like a noble lord."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Saint-Maurice",
      "kind": "abbey",
      "label": "Abbey of Saint-Maurice and the Chablais",
      "sel": {
       "districts": [
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
      "label": "Bishop of Lausanne: County of Vaud from 1011",
      "sel": {
       "cantons": [
        "VD"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Bishop of Sion: County of Valais",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Basel",
      "kind": "bishop",
      "label": "Bishop of Basel: city and Moutier-Grandval",
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
        715,
        2701
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Burgundy",
      "kind": "burgundy",
      "label": "Rest of the Kingdom of Burgundy",
      "sel": {
       "cantons": [
        "VD",
        "VS",
        "GE",
        "NE",
        "FR",
        "JU",
        "SO",
        "BS",
        "BL"
       ],
       "districts": [
        241,
        242,
        243,
        246,
        247,
        248,
        249
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Lausanne cathedral",
      "lat": 46.5226,
      "lon": 6.6355,
      "kind": "place",
      "year": 1011,
      "note": "Bishop gets the county"
     }
    ]
   },
   {
    "year": 1033,
    "tick": "1033",
    "title": "Burgundy joins the Empire",
    "text": [
     "Rudolf III dies in 1032 without a son. Emperor Conrad II takes over the kingdom. He is crowned king of Burgundy at Payerne in 1033. By 1038 Burgundy is joined with Germany and Italy.",
     "Now all of today's Switzerland is part of the Holy Roman Empire. The bishops who hold counties now hold them from the emperor. The bishop of Sion, for example, becomes a prince of the Empire."
    ],
    "view": [
     [
      43.2,
      3.8
     ],
     [
      49.4,
      12.0
     ]
    ],
    "layers": [
     {
      "name": "Former Burgundy",
      "kind": "empire",
      "label": "Kingdom of Burgundy: part of the Empire from 1032/1033",
      "sel": {
       "cantons": [
        "VD",
        "VS",
        "GE",
        "NE",
        "FR",
        "JU",
        "SO",
        "BS",
        "BL"
       ],
       "districts": [
        241,
        242,
        243,
        246,
        247,
        248,
        249
       ]
      },
      "regions": [
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5262",
       "FRA-5341",
       "FRA-5302",
       "FRA-5311",
       "FRA-5288",
       "FRA-5338",
       "FRA-5352",
       "FRA-5274",
       "FRA-5351",
       "FRA-5265",
       "FRA-5304",
       "FRA-5266",
       "ITA-5442"
      ],
      "countries": []
     },
     {
      "name": "Swabia",
      "kind": "empire",
      "label": "Duchy of Swabia (Empire)",
      "sel": {
       "cantons": [
        "ZH",
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "GL",
        "ZG",
        "SH",
        "AR",
        "AI",
        "SG",
        "GR",
        "AG",
        "TG"
       ],
       "districts": [
        244,
        245,
        250
       ]
      },
      "regions": [
       "DEU-1573",
       "FRA-5296",
       "FRA-5273",
       "AUT-2320"
      ],
      "countries": [
       "LIE"
      ]
     },
     {
      "name": "Italy",
      "kind": "empire",
      "label": "Kingdom of Italy (Empire)",
      "sel": {
       "cantons": [
        "TI"
       ]
      },
      "regions": [
       "ITA-5452",
       "ITA-5451",
       "ITA-5450",
       "ITA-5444",
       "ITA-5437"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Payerne abbey",
      "lat": 46.8219,
      "lon": 6.9381,
      "kind": "place",
      "year": 1033,
      "note": "Conrad II crowned"
     },
     {
      "name": "Solothurn",
      "lat": 47.2088,
      "lon": 7.5323,
      "kind": "place",
      "year": 1038,
      "note": "Henry III chosen king of Burgundy"
     }
    ]
   },
   {
    "year": 1200,
    "tick": "1200",
    "title": "Bishops as lords",
    "text": [
     "About 1200 the bishops are among the biggest lords in the land. In Geneva the treaty of Seyssel (1124) makes the bishop the only lord of the city; the count of Geneva is only his protector.",
     "The bishop of Constance rules Arbon and Bischofszell south of the lake. In the south, the bishop of Como rules Bellinzona.",
     "But bishops need lay protectors (called 'Vögte'), and these nobles often take power for themselves."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bishop of Geneva",
      "kind": "bishop",
      "label": "Bishop of Geneva: the city",
      "sel": {
       "munis": [
        6621
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
      "label": "Bishop of Lausanne: Lausanne, Lavaux, Lucens, Avenches; Bulle, Riaz, La Roche",
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
        5451,
        2125,
        2148,
        2149
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Bishop of Sion: Valais",
      "sel": {
       "cantons": [
        "VS"
       ],
       "exceptDistricts": [
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Basel",
      "kind": "bishop",
      "label": "Bishop of Basel: city and Jura lands (about)",
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
        715,
        2701
       ],
       "cantons": [
        "JU"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Chur",
      "kind": "bishop",
      "label": "Bishop of Chur: Chur, Zizers, the Bergell (about)",
      "sel": {
       "munis": [
        3901,
        3947,
        3792
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Como",
      "kind": "bishop",
      "label": "Bishop of Como: Bellinzona",
      "sel": {
       "districts": [
        2101
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Geneva cathedral",
      "lat": 46.2011,
      "lon": 6.1486,
      "kind": "place",
      "year": 1124,
      "note": "Bishop lord of the city"
     },
     {
      "name": "Constance cathedral",
      "lat": 47.6633,
      "lon": 9.176,
      "kind": "place"
     },
     {
      "name": "Lausanne cathedral",
      "lat": 46.5226,
      "lon": 6.6355,
      "kind": "place"
     },
     {
      "name": "Sion (Valère)",
      "lat": 46.2338,
      "lon": 7.3638,
      "kind": "place"
     },
     {
      "name": "Chur cathedral",
      "lat": 46.8497,
      "lon": 9.5348,
      "kind": "place"
     },
     {
      "name": "Basel cathedral",
      "lat": 47.5565,
      "lon": 7.5925,
      "kind": "place"
     }
    ]
   },
   {
    "year": 1250,
    "tick": "1250",
    "title": "Abbeys as lords",
    "text": [
     "Abbeys also rule land and people. St. Gallen (founded in the 700s) holds land around the town and in Appenzell. Einsiedeln (934) owns much of the valley around it. Engelberg (1120) owns its own valley. Disentis holds the upper Rhine valley and Urseren.",
     "Other abbeys own manors far away. The Fraumünster in Zurich owned land in Uri and at Cham. Murbach abbey in Alsace owned the town of Lucerne.",
     "Like bishops, abbeys need protectors. Kyburg, Habsburg and others take these posts and use them to build their own power."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Urseren",
      "kind": "abbey",
      "label": "Urseren: land of Disentis abbey",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Disentis",
      "kind": "abbey",
      "label": "Abbey of Disentis",
      "sel": {
       "munis": [
        3982,
        3986,
        3983,
        3985,
        3987,
        3981
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Engelberg",
      "kind": "abbey",
      "label": "Engelberg abbey and its valley",
      "sel": {
       "munis": [
        1402
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Einsiedeln",
      "kind": "abbey",
      "label": "Einsiedeln abbey and its lands",
      "sel": {
       "districts": [
        501,
        503
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Lucerne",
      "kind": "abbey",
      "label": "Lucerne: town of Murbach abbey",
      "sel": {
       "munis": [
        1061
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Cham",
      "kind": "abbey",
      "label": "Cham: manor of the Fraumünster, Zurich",
      "sel": {
       "munis": [
        1702
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Pfäfers",
      "kind": "abbey",
      "label": "Pfäfers abbey",
      "sel": {
       "munis": [
        3294
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "St. Gallen",
      "kind": "abbey",
      "label": "Abbey of St. Gallen: lands around the town and Appenzell (about)",
      "sel": {
       "districts": [
        1721,
        1722,
        1728
       ],
       "cantons": [
        "AR",
        "AI"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Saint-Maurice",
      "kind": "abbey",
      "label": "Abbey of Saint-Maurice",
      "sel": {
       "munis": [
        6217
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "St. Gallen abbey",
      "lat": 47.4233,
      "lon": 9.377,
      "kind": "place"
     },
     {
      "name": "Einsiedeln abbey",
      "lat": 47.1265,
      "lon": 8.7517,
      "kind": "place",
      "year": 934,
      "note": "Founded 934"
     },
     {
      "name": "Engelberg abbey",
      "lat": 46.8206,
      "lon": 8.4011,
      "kind": "place",
      "year": 1120,
      "note": "Founded 1120"
     },
     {
      "name": "Disentis abbey",
      "lat": 46.7036,
      "lon": 8.8556,
      "kind": "place"
     },
     {
      "name": "Fraumünster, Zurich",
      "lat": 47.3698,
      "lon": 8.5414,
      "kind": "place"
     },
     {
      "name": "Murbach abbey",
      "lat": 47.9233,
      "lon": 7.1611,
      "kind": "place",
      "note": "Owner of Lucerne"
     },
     {
      "name": "Saint-Maurice abbey",
      "lat": 46.2183,
      "lon": 7.0034,
      "kind": "place"
     }
    ]
   },
   {
    "year": 1300,
    "tick": "1300",
    "title": "Church land under pressure",
    "text": [
     "By 1300 big lay lords press the church lords. Savoy takes most of the Vaud from the bishop of Lausanne and the Lower Valais from the bishop of Sion. Habsburg protects Einsiedeln (1283) and Engelberg (1274) and buys Lucerne from Murbach (1291).",
     "Some church lords stay strong. The bishop of Basel buys land in today's Baselland (about 1305), the abbey of St. Gallen rules Appenzell, and the bishop of Chur is the biggest lord in the Grisons. Several of these church states last until 1798."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Engelberg",
      "kind": "abbey",
      "label": "Engelberg abbey (Habsburg protectors since 1274)",
      "sel": {
       "munis": [
        1402
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Einsiedeln",
      "kind": "abbey",
      "label": "Einsiedeln abbey (Habsburg protectors since 1283)",
      "sel": {
       "districts": [
        501,
        503
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Disentis",
      "kind": "abbey",
      "label": "Abbey of Disentis",
      "sel": {
       "munis": [
        3982,
        3986,
        3983,
        3985,
        3987,
        3981
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "St. Gallen",
      "kind": "abbey",
      "label": "Abbey of St. Gallen with Appenzell",
      "sel": {
       "districts": [
        1721,
        1722,
        1728
       ],
       "cantons": [
        "AR",
        "AI"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Geneva",
      "kind": "bishop",
      "label": "Bishop of Geneva: the city",
      "sel": {
       "munis": [
        6621
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
      "label": "Bishop of Lausanne: Lausanne, Lavaux, Lucens, Avenches; Bulle",
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
        5451,
        2125,
        2148,
        2149
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Basel",
      "kind": "bishop",
      "label": "Prince-Bishop of Basel (about 1305)",
      "sel": {
       "cantons": [
        "JU"
       ],
       "districts": [
        241,
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
        2775,
        2701,
        371,
        372
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon, Bischofszell; Neunkirch-Hallau (1302)",
      "sel": {
       "munis": [
        4401,
        4471,
        2904,
        2971,
        2972
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Chur",
      "kind": "bishop",
      "label": "Bishop of Chur: biggest lord in the Grisons (about)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "Savoy: Vaud and Lower Valais",
      "sel": {
       "cantons": [
        "VD"
       ],
       "districts": [
        2302,
        2307,
        2303,
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Bishop of Sion: Upper Valais",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Lucerne",
      "kind": "habsburg",
      "label": "Lucerne: bought by Habsburg from Murbach in 1291",
      "sel": {
       "munis": [
        1061
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Lucerne",
      "lat": 47.0502,
      "lon": 8.3093,
      "kind": "town",
      "year": 1291,
      "note": "Sold to Habsburg"
     },
     {
      "name": "Chillon castle",
      "lat": 46.4142,
      "lon": 6.9275,
      "kind": "castle",
      "note": "Savoy power on the lake"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/006620/",
   "https://hls-dhs-dss.ch/de/articles/006642/",
   "https://hls-dhs-dss.ch/de/articles/008560/",
   "https://hls-dhs-dss.ch/de/articles/008558/",
   "https://hls-dhs-dss.ch/de/articles/008559/",
   "https://hls-dhs-dss.ch/de/articles/011403/",
   "https://hls-dhs-dss.ch/de/articles/011399/"
  ],
  "notes": "The Burgundy–Swabia border is drawn along today's Bernese districts as a rough Aare line; Basel is counted as Burgundian about 950 (it belonged to Burgundy for part of the 10th century). Outside Switzerland Burgundy is drawn as whole French départements from the Franche-Comté to Provence plus Aosta; Swabia as Baden-Württemberg, Alsace and Vorarlberg (Bavarian Swabia not drawn). The Lausanne county of 1011 is drawn as all of today's Vaud. Bishop of Basel lands about 1200 drawn as all of Jura plus Moutier-Grandval (rough). St. Gallen and Chur lands are approximate. Foundation dates: St. Gallen and Disentis given only as 'the 700s'."
 },
 {
  "id": "zahringen-kyburg",
  "title": "The Zähringen and the Kyburg: lords who built towns",
  "card": "Two families founded many Swiss towns, then died out within fifty years and left their land to Habsburg and the free towns.",
  "stops": [
   {
    "year": 1098,
    "tick": "1098",
    "title": "Dukes from the Breisgau",
    "text": [
     "The Zähringen family are counts in the Breisgau, the land around today's Freiburg in Germany. From 1092 to 1098 they fight the Staufer family for the Duchy of Swabia.",
     "In 1098 they make peace. Berchtold II gives up Swabia. In return he keeps the castle of Zähringen and gets the king's rights in Zurich. From now on the family calls itself dukes of Zähringen.",
     "Around this time the counts of Dillingen, from the Danube, gain land in the Thurgau and around Winterthur. They will later call themselves counts of Kyburg."
    ],
    "view": [
     [
      46.6,
      6.6
     ],
     [
      48.4,
      10.6
     ]
    ],
    "layers": [
     {
      "name": "Zurich",
      "kind": "zahringen",
      "label": "Zurich: imperial rights of the Zähringen from 1098",
      "sel": {
       "munis": [
        261
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Rheinfelden",
      "kind": "zahringen",
      "label": "Rheinfelden: inherited by the Zähringen (about)",
      "sel": {
       "munis": [
        4258
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Dillingen-Kyburg",
      "kind": "kyburg",
      "label": "Counts of Dillingen (later Kyburg): Thurgau and Winterthur area (about)",
      "sel": {
       "cantons": [
        "TG"
       ],
       "districts": [
        110
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Zähringen castle",
      "lat": 48.0275,
      "lon": 7.8711,
      "kind": "castle",
      "note": "Home of the family"
     },
     {
      "name": "Freiburg im Breisgau",
      "lat": 47.9959,
      "lon": 7.8522,
      "kind": "town",
      "year": 1120,
      "note": "Market town founded 1120"
     },
     {
      "name": "Kyburg castle",
      "lat": 47.4578,
      "lon": 8.7436,
      "kind": "castle"
     }
    ]
   },
   {
    "year": 1127,
    "tick": "1127",
    "title": "Rectors of Burgundy",
    "text": [
     "In 1127 King Lothar III makes Duke Konrad rector of Burgundy. A rector rules a land in the king's name. The area lies between the Jura, Lake Geneva and the Alps.",
     "In practice the dukes are strong only in parts of it. The local nobles and bishops often resist. In 1156 the emperor lets the duke invest (formally install) the bishops of Geneva, Lausanne and Sion, but the duke can enforce this only in Lausanne."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Zurich",
      "kind": "zahringen",
      "label": "Zurich: imperial rights of the Zähringen",
      "sel": {
       "munis": [
        261
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Rheinfelden",
      "kind": "zahringen",
      "label": "Rheinfelden",
      "sel": {
       "munis": [
        4258
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Rectorate",
      "kind": "zahringen",
      "label": "Rectorate of Burgundy: the area the dukes claim (rough)",
      "sel": {
       "cantons": [
        "VD",
        "FR",
        "SO"
       ],
       "districts": [
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Lausanne",
      "lat": 46.5226,
      "lon": 6.6355,
      "kind": "town",
      "year": 1156,
      "note": "The duke installs the bishop"
     }
    ]
   },
   {
    "year": 1157,
    "tick": "1157",
    "title": "Fribourg is founded",
    "text": [
     "In 1157 Duke Berchtold IV founds the town of Fribourg on the Saane river. It has the same name as the family's town in the Breisgau.",
     "A new town gives a lord a safe base, markets and taxes. It also gives him soldiers in a region where nobles do not obey him. Fribourg lies on the language border and close to the bishop of Lausanne."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Fribourg",
      "kind": "zahringen",
      "label": "Fribourg: founded 1157 by the Zähringen",
      "sel": {
       "munis": [
        2196
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Zurich",
      "kind": "zahringen",
      "label": "Zurich: imperial rights of the Zähringen",
      "sel": {
       "munis": [
        261
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Rheinfelden",
      "kind": "zahringen",
      "label": "Rheinfelden",
      "sel": {
       "munis": [
        4258
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
      "label": "Bishop of Lausanne: Lausanne; Bulle, Riaz, La Roche",
      "sel": {
       "munis": [
        5586,
        2125,
        2148,
        2149
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "town",
      "year": 1157,
      "note": "Founded by Berchtold IV"
     }
    ]
   },
   {
    "year": 1191,
    "tick": "1191",
    "title": "Bern and a ring of towns",
    "text": [
     "In 1173 the counts of Lenzburg die out. The Zähringen, the Kyburg and the Habsburg all gain from it. The Kyburg get land near Baden and around the Walensee.",
     "In 1190–1191 Duke Berchtold V beats nobles who rise against him, at Payerne and Grindelwald. In 1191 he finishes the founding of Bern. He also builds up Burgdorf, Thun and Murten, and holds Moudon and castles such as Laupen. From 1198 he is protector of Schaffhausen.",
     "Historians think that only Fribourg and Bern were real towns before 1218."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Zähringen",
      "kind": "zahringen",
      "label": "Towns and castles of the Zähringen: Bern, Fribourg, Burgdorf, Thun, Murten, Moudon, Laupen",
      "sel": {
       "munis": [
        351,
        2196,
        404,
        942,
        2275,
        5678,
        667
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial rights",
      "kind": "zahringen",
      "label": "Zähringen as the king's officers: Zurich, Solothurn, Schaffhausen, Uri (about)",
      "sel": {
       "munis": [
        261,
        2601,
        2939,
        4258
       ],
       "cantons": [
        "UR"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kyburg",
      "kind": "kyburg",
      "label": "Counts of Kyburg: Thurgau, Winterthur area, Baden, Gaster, Glarus (about)",
      "sel": {
       "cantons": [
        "TG",
        "GL"
       ],
       "districts": [
        110,
        108
       ],
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        4021
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Bern",
      "lat": 46.948,
      "lon": 7.4474,
      "kind": "town",
      "year": 1191,
      "note": "Founding completed"
     },
     {
      "name": "Burgdorf",
      "lat": 47.0591,
      "lon": 7.6271,
      "kind": "castle"
     },
     {
      "name": "Thun",
      "lat": 46.758,
      "lon": 7.628,
      "kind": "castle"
     },
     {
      "name": "Payerne",
      "lat": 46.8219,
      "lon": 6.9381,
      "kind": "battle",
      "year": 1190,
      "note": "Duke beats rebel nobles"
     },
     {
      "name": "Grindelwald",
      "lat": 46.6242,
      "lon": 8.0414,
      "kind": "battle",
      "year": 1191,
      "note": "Duke beats rebel nobles"
     }
    ]
   },
   {
    "year": 1218,
    "tick": "1218",
    "title": "The Zähringen die out",
    "text": [
     "Duke Berchtold V dies in 1218 without a son. Emperor Frederick II takes back the title of duke and most of the imperial rights.",
     "Bern, Zurich, Solothurn and Schaffhausen now stand directly under the Empire. The family's own lands are split. The counts of Urach get the land north of the Rhine. The counts of Kyburg get Fribourg, Burgdorf, Thun and land in the Aargau and around Zurich. Count Ulrich III of Kyburg had married Anna of Zähringen, of the duke's family."
    ],
    "view": [
     [
      46.3,
      6.5
     ],
     [
      48.3,
      9.8
     ]
    ],
    "layers": [
     {
      "name": "Kyburg (Zähringen inheritance)",
      "kind": "kyburg",
      "label": "Zähringen inheritance to Kyburg: Fribourg, Burgdorf, Thun",
      "sel": {
       "munis": [
        2196,
        404,
        942
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial towns",
      "kind": "empire",
      "label": "Imperial towns from 1218: Bern, Zurich, Solothurn, Schaffhausen, Rheinfelden; Laupen and Murten",
      "sel": {
       "munis": [
        351,
        261,
        2601,
        2939,
        4258,
        667,
        2275
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kyburg",
      "kind": "kyburg",
      "label": "Counts of Kyburg: Thurgau, Winterthur area, Baden, Gaster, Glarus (about)",
      "sel": {
       "cantons": [
        "TG",
        "GL"
       ],
       "districts": [
        110,
        108
       ],
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        4021
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Freiburg im Breisgau",
      "lat": 47.9959,
      "lon": 7.8522,
      "kind": "town",
      "year": 1218,
      "note": "Berchtold V dies; to the counts of Urach"
     },
     {
      "name": "Kyburg castle",
      "lat": 47.4578,
      "lon": 8.7436,
      "kind": "castle"
     }
    ]
   },
   {
    "year": 1250,
    "tick": "1250",
    "title": "Kyburg at its height",
    "text": [
     "The counts of Kyburg now rule a broad belt of land from Lake Constance to Fribourg. Like the Zähringen, they found towns to hold it: Winterthur and Diessenhofen about 1180, Zug and Baden about 1230, later Frauenfeld, Aarau, Mellingen and Lenzburg, and about 1250 Sursee and Weesen.",
     "About 1250 the family splits its land. Hartmann IV keeps the east. His nephew Hartmann V gets the west, with Burgdorf, Thun and Fribourg. Neither has a son."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Western Kyburg",
      "kind": "kyburg",
      "label": "Hartmann V: western lands with Fribourg, Burgdorf, Thun",
      "sel": {
       "munis": [
        2196,
        404,
        942,
        954
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kyburg towns",
      "kind": "kyburg",
      "label": "Kyburg towns: Zug, Baden, Mellingen, Aarau, Lenzburg, Sursee",
      "sel": {
       "munis": [
        1711,
        4021,
        4033,
        4001,
        4201,
        1103
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial towns",
      "kind": "empire",
      "label": "Imperial towns: Bern, Zurich, Solothurn, Schaffhausen",
      "sel": {
       "munis": [
        351,
        261,
        2601,
        2939
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Eastern Kyburg",
      "kind": "kyburg",
      "label": "Hartmann IV: eastern lands, Thurgau, Winterthur, Gaster, Glarus (about)",
      "sel": {
       "cantons": [
        "TG",
        "GL"
       ],
       "districts": [
        110,
        108
       ],
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Winterthur",
      "lat": 47.4997,
      "lon": 8.7241,
      "kind": "town",
      "year": 1180,
      "note": "Kyburg town"
     },
     {
      "name": "Diessenhofen",
      "lat": 47.6893,
      "lon": 8.7495,
      "kind": "town",
      "year": 1180,
      "note": "Kyburg town"
     },
     {
      "name": "Frauenfeld",
      "lat": 47.5536,
      "lon": 8.8987,
      "kind": "town",
      "note": "Kyburg town"
     },
     {
      "name": "Zug",
      "lat": 47.1662,
      "lon": 8.5155,
      "kind": "town",
      "year": 1230,
      "note": "Kyburg town"
     },
     {
      "name": "Baden",
      "lat": 47.4733,
      "lon": 8.3059,
      "kind": "town",
      "year": 1230,
      "note": "Kyburg town"
     },
     {
      "name": "Aarau",
      "lat": 47.3925,
      "lon": 8.0444,
      "kind": "town",
      "note": "Kyburg town"
     },
     {
      "name": "Sursee",
      "lat": 47.1714,
      "lon": 8.1111,
      "kind": "town",
      "year": 1250,
      "note": "Kyburg town"
     },
     {
      "name": "Weesen",
      "lat": 47.134,
      "lon": 9.096,
      "kind": "town",
      "year": 1250,
      "note": "Kyburg town"
     }
    ]
   },
   {
    "year": 1264,
    "tick": "1264",
    "title": "Habsburg takes the Kyburg land",
    "text": [
     "Hartmann V dies in 1263 and Hartmann IV about a year later. Count Rudolf of Habsburg is a nephew of Hartmann IV. He becomes guardian of Hartmann V's young daughter Anna and takes over all Kyburg land.",
     "About 1273 Anna marries Eberhard of Habsburg-Laufenburg. Their line, called Neu-Kyburg, holds Burgdorf and Thun. It sells them to Bern in 1384 and dies out in 1417. Rudolf buys Fribourg in 1277. The rest of the Kyburg land becomes the base of Habsburg power in Switzerland."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Neu-Kyburg",
      "kind": "kyburg",
      "label": "Burgdorf and Thun: Neu-Kyburg line from about 1273 (to Bern 1384)",
      "sel": {
       "munis": [
        404,
        942
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fribourg",
      "kind": "habsburg",
      "label": "Fribourg: Rudolf as guardian, bought by Habsburg in 1277",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial towns",
      "kind": "empire",
      "label": "Imperial towns: Bern, Zurich, Solothurn, Schaffhausen",
      "sel": {
       "munis": [
        351,
        261,
        2601,
        2939
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kyburg land to Habsburg",
      "kind": "habsburg",
      "label": "Former Kyburg land, now Habsburg (about)",
      "sel": {
       "cantons": [
        "TG",
        "GL",
        "ZG"
       ],
       "districts": [
        110,
        108
       ],
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316,
        4021,
        4033,
        4001,
        4201,
        1103
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Habsburg own land",
      "kind": "habsburg",
      "label": "Old Habsburg land in the Aargau (about)",
      "sel": {
       "cantons": [
        "AG"
       ],
       "exceptDistricts": [
        1911
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Kyburg castle",
      "lat": 47.4578,
      "lon": 8.7436,
      "kind": "castle",
      "year": 1264,
      "note": "Last Kyburg count dies"
     },
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle"
     },
     {
      "name": "Burgdorf",
      "lat": 47.0591,
      "lon": 7.6271,
      "kind": "castle",
      "year": 1384,
      "note": "Sold to Bern"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/019504/2020-06-03/",
   "https://hls-dhs-dss.ch/de/articles/019520/2024-02-20/",
   "https://hls-dhs-dss.ch/de/articles/019506/"
  ],
  "notes": "The Breisgau home of the Zähringen is shown only by points, because Germany can only be drawn by whole states. The Rectorate of Burgundy is a claim, drawn very roughly. HLS warns that older research overstates the Zähringen 'town-founding plan'; only Fribourg and Bern were clearly towns before 1218. Kyburg lands are drawn as whole districts or cantons (Thurgau, Winterthur, Pfäffikon, Glarus) and are approximate; Glarus is Säckingen abbey land with Kyburg as governors (1200–1264). Kyburg town dates are those in HLS (several only 'later' or 'about'). Hartmann IV's death year (1264) follows from HLS 'one year after' Hartmann V (1263). The Kyburg split of about 1250 is simplified."
 },
 {
  "id": "habsburg",
  "title": "Habsburg: from a castle in the Aargau to an empire",
  "card": "How a noble family from the Aargau became kings, lost its Swiss lands to the Confederates, and ruled half of Europe.",
  "stops": [
   {
    "year": 1020,
    "tick": "1020",
    "title": "A castle above the Aare",
    "text": [
     "About 1020 a noble family builds a castle on a hill above the Aare river, in today's Aargau. The builder was Radbot or his brother Werner. The castle is called Habsburg, and the family takes its name.",
     "Soon after, Radbot founds the abbey of Muri. The family owns farms and rights around the castle and Muri. At first it is one noble family among many in the region."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Habsburg home land",
      "kind": "habsburg",
      "label": "Habsburg family land: the castle and Muri abbey (about)",
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
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle",
      "year": 1020,
      "note": "Built about 1020"
     },
     {
      "name": "Muri abbey",
      "lat": 47.2747,
      "lon": 8.3389,
      "kind": "place",
      "note": "Founded by Radbot after 1020"
     }
    ]
   },
   {
    "year": 1173,
    "tick": "1173",
    "title": "Count rights after Lenzburg",
    "text": [
     "In 1172–1173 the counts of Lenzburg die out. The Habsburgs get part of their rights: the county (high court) in the Aargau and in the western Zürichgau, which includes Schwyz and Unterwalden. They also become protectors of Säckingen abbey.",
     "The counts of Kyburg get another part. Kyburg and Habsburg are now neighbours and rivals in northern Switzerland."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Home land",
      "kind": "habsburg",
      "label": "Habsburg own land: castle and Muri",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Count rights",
      "kind": "habsburg",
      "label": "Habsburg count rights from 1173: Aargau and western Zürichgau with Schwyz and Unterwalden (about)",
      "sel": {
       "districts": [
        1901,
        1902,
        1903,
        1904,
        1905,
        1907,
        1908,
        1910,
        101,
        111,
        506
       ],
       "cantons": [
        "OW",
        "NW"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kyburg",
      "kind": "kyburg",
      "label": "Counts of Kyburg: Winterthur area and Thurgau (about)",
      "sel": {
       "districts": [
        110,
        108
       ],
       "cantons": [
        "TG"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Zurich",
      "kind": "zahringen",
      "label": "Zurich: imperial rights held by the dukes of Zähringen",
      "sel": {
       "munis": [
        261
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle"
     },
     {
      "name": "Lenzburg castle",
      "lat": 47.3846,
      "lon": 8.1806,
      "kind": "castle",
      "year": 1173,
      "note": "Lenzburg counts die out"
     }
    ]
   },
   {
    "year": 1264,
    "tick": "1264",
    "title": "The Kyburg inheritance",
    "text": [
     "In 1263 and 1264 the last two counts of Kyburg die. Count Rudolf of Habsburg is their nearest heir. He takes over their lands: the Winterthur area, the Thurgau, Baden, Glarus and Zug, and in the west Burgdorf and Thun.",
     "Rudolf is now the strongest lord between the Rhine and the Alps. Only a few towns and valleys stand directly under the king: for example Zurich, Bern, Uri and Schwyz."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Western Kyburg land",
      "kind": "kyburg",
      "label": "Western Kyburg land (Burgdorf, Thun, Fribourg): Rudolf rules it for the young heiress Anna",
      "sel": {
       "munis": [
        404,
        942,
        2196
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial towns and valleys",
      "kind": "empire",
      "label": "Directly under the king: Zurich, Bern, Solothurn, Schaffhausen, Uri, Schwyz",
      "sel": {
       "munis": [
        261,
        351,
        2601,
        2939
       ],
       "cantons": [
        "UR"
       ],
       "districts": [
        506
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg after 1264: own land, old count rights and the Kyburg inheritance (about)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "GL",
        "ZG",
        "OW",
        "NW"
       ],
       "districts": [
        110,
        108,
        101,
        111,
        109,
        105
       ],
       "munis": [
        3311,
        3312,
        3313,
        3315,
        3316
       ],
       "exceptDistricts": [
        1911
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle"
     },
     {
      "name": "Kyburg castle",
      "lat": 47.4578,
      "lon": 8.7436,
      "kind": "castle",
      "year": 1264,
      "note": "Last Kyburg count dies"
     }
    ]
   },
   {
    "year": 1282,
    "tick": "1282",
    "title": "A king and a duchy",
    "text": [
     "In 1273 the princes elect Count Rudolf as king of the Romans (the German king). In 1278 he defeats King Ottokar of Bohemia at Dürnkrut, near Vienna.",
     "In 1282 Rudolf gives the duchies of Austria and Styria to his sons. From now on the Habsburgs are dukes of Austria. Their centre of power moves east to Vienna, but they keep their old lands in Switzerland and in Alsace."
    ],
    "view": "europe",
    "layers": [
     {
      "name": "Austria and Styria",
      "kind": "habsburg",
      "label": "Duchies of Austria and Styria: Habsburg from 1282 (borders rough)",
      "sel": {},
      "regions": [
       "AUT-2330",
       "AUT-2331",
       "AUT-2326",
       "AUT-2323"
      ],
      "countries": []
     },
     {
      "name": "Alsace",
      "kind": "habsburg",
      "label": "Upper Alsace: Habsburg landgraves (drawn as Haut-Rhin)",
      "sel": {},
      "regions": [
       "FRA-5296"
      ],
      "countries": []
     },
     {
      "name": "Swiss lands",
      "kind": "habsburg",
      "label": "Old Habsburg lands in today's Switzerland (about)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "GL",
        "ZG"
       ],
       "districts": [
        110,
        108,
        101,
        111,
        109,
        105
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272,
        2196
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Aachen",
      "lat": 50.7753,
      "lon": 6.0839,
      "kind": "place",
      "year": 1273,
      "note": "Rudolf crowned king"
     },
     {
      "name": "Dürnkrut",
      "lat": 48.4722,
      "lon": 16.8483,
      "kind": "battle",
      "year": 1278,
      "note": "Rudolf defeats Ottokar"
     },
     {
      "name": "Vienna",
      "lat": 48.2082,
      "lon": 16.3738,
      "kind": "town",
      "year": 1282,
      "note": "New centre of Habsburg power"
     },
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle"
     }
    ]
   },
   {
    "year": 1291,
    "tick": "1291",
    "title": "Habsburg and the forest valleys",
    "text": [
     "Rudolf and his sons want to join their Swiss lands into one territory. In 1291 they buy the town of Lucerne from Murbach abbey. They also protect the abbeys of Engelberg and Einsiedeln.",
     "Uri and Schwyz have letters from earlier kings that put them directly under the Empire. They fear Habsburg rule. After Rudolf dies in July 1291, Uri, Schwyz and Unterwalden renew their alliance."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Urseren",
      "kind": "habsburg",
      "label": "Urseren: Habsburg as governors since 1283",
      "sel": {
       "munis": [
        1202,
        1210,
        1212
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Lucerne",
      "kind": "habsburg",
      "label": "Lucerne: bought by Habsburg in 1291",
      "sel": {
       "munis": [
        1061
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Imperial towns",
      "kind": "empire",
      "label": "Imperial towns: Zurich, Bern, Solothurn, Schaffhausen",
      "sel": {
       "munis": [
        261,
        351,
        2601,
        2939
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Uri and Schwyz",
      "kind": "empire",
      "label": "Uri and Schwyz: directly under the Empire",
      "sel": {
       "cantons": [
        "UR"
       ],
       "districts": [
        506
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Neu-Kyburg",
      "kind": "kyburg",
      "label": "Burgdorf and Thun: Neu-Kyburg, a Habsburg side line",
      "sel": {
       "munis": [
        404,
        942
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg land and rights about 1291 (about)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "GL",
        "ZG",
        "LU",
        "ZH",
        "OW",
        "NW"
       ],
       "districts": [
        1004,
        1006,
        501,
        503,
        504
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272,
        3311,
        3312,
        3313,
        3315,
        3316
       ],
       "exceptDistricts": [
        1911
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Lucerne",
      "lat": 47.0502,
      "lon": 8.3093,
      "kind": "town",
      "year": 1291,
      "note": "Bought by Habsburg"
     },
     {
      "name": "Schwyz",
      "lat": 47.0207,
      "lon": 8.653,
      "kind": "town",
      "year": 1291,
      "note": "Alliance renewed"
     }
    ]
   },
   {
    "year": 1386,
    "tick": "1386",
    "title": "Morgarten, Sempach, Näfels",
    "text": [
     "The Habsburgs try several times to force the valleys and towns under their rule. In 1315 the men of Schwyz beat a Habsburg army at Morgarten. Historians today argue about how big this battle really was.",
     "Lucerne (1332), Zurich (1351), Glarus and Zug (1352) and Bern (1353) join the alliance. In 1386 the Confederates beat Duke Leopold III at Sempach. He dies in the battle. In 1388 Glarus wins at Näfels.",
     "Habsburg loses Lucerne, Zug and Glarus. It keeps the Aargau, the Thurgau and much of the countryside."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Schaffhausen",
      "kind": "habsburg",
      "label": "Schaffhausen: pledged to Habsburg 1330–1415",
      "sel": {
       "munis": [
        2939
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Members of the Confederation (Zurich, Bern, Lucerne drawn as their towns only)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "GL"
       ],
       "munis": [
        261,
        351,
        1061
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg land about 1386 (about)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "LU",
        "ZH"
       ],
       "districts": [
        1004,
        1006
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272,
        3311,
        3312,
        3313,
        3315,
        3316,
        3340
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Morgarten",
      "lat": 47.106,
      "lon": 8.633,
      "kind": "battle",
      "year": 1315,
      "note": "Schwyz beats Habsburg"
     },
     {
      "name": "Sempach",
      "lat": 47.1457,
      "lon": 8.2081,
      "kind": "battle",
      "year": 1386,
      "note": "Duke Leopold III killed"
     },
     {
      "name": "Näfels",
      "lat": 47.1003,
      "lon": 9.061,
      "kind": "battle",
      "year": 1388,
      "note": "Glarus wins"
     }
    ]
   },
   {
    "year": 1415,
    "tick": "1415",
    "title": "The Aargau is lost",
    "text": [
     "In 1415 Duke Frederick IV of Austria helps Pope John XXIII flee from the Council of Constance. King Sigismund puts the duke under the ban of the Empire and asks his neighbours to take his lands.",
     "The Confederates conquer the Aargau in a few weeks. Bern, Lucerne and Zurich each take a part. Baden and the Free Offices become common lordships (land ruled jointly by several cantons). The old Habsburg castle is now Swiss.",
     "Habsburg keeps the Fricktal, the Thurgau, Rapperswil and Fribourg."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: stays Austrian",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Aargau",
      "kind": "confederates",
      "label": "Aargau: conquered by the Confederates in 1415",
      "sel": {
       "districts": [
        1901,
        1902,
        1903,
        1904,
        1905,
        1907,
        1908,
        1910,
        1911
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg still: Thurgau, Rapperswil, Fribourg, Gaster",
      "sel": {
       "cantons": [
        "TG"
       ],
       "districts": [
        1004,
        1006
       ],
       "munis": [
        2254,
        2257,
        2262,
        2266,
        2272,
        3311,
        3312,
        3313,
        3315,
        3316,
        3340
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Schaffhausen",
      "kind": "empire",
      "label": "Schaffhausen: imperial town again from 1415",
      "sel": {
       "munis": [
        2939
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "The eight cantons (about)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "GL",
        "LU",
        "ZH",
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle",
      "year": 1415,
      "note": "Taken by Bern"
     },
     {
      "name": "Baden",
      "lat": 47.4733,
      "lon": 8.3059,
      "kind": "town",
      "year": 1415,
      "note": "Stein castle taken"
     },
     {
      "name": "Constance",
      "lat": 47.6603,
      "lon": 9.1758,
      "kind": "place",
      "year": 1415,
      "note": "Council of Constance"
     }
    ]
   },
   {
    "year": 1460,
    "tick": "1460",
    "title": "The Thurgau is lost",
    "text": [
     "Duke Sigismund of Tyrol quarrels with the pope, who puts him under the ban of the church. In 1460 the Confederates use this and take the Thurgau. It becomes a common lordship of seven cantons.",
     "Fribourg leaves Habsburg in 1452, Rapperswil in 1458, and Winterthur is pledged to Zurich in 1467. South of the Rhine, only the Fricktal stays with Austria."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Winterthur",
      "kind": "habsburg",
      "label": "Winterthur: Habsburg until 1467",
      "sel": {
       "munis": [
        230
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: Austrian",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Constance",
      "kind": "bishop",
      "label": "Bishop of Constance: Arbon and Bischofszell",
      "sel": {
       "munis": [
        4401,
        4471
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Thurgau",
      "kind": "confederates",
      "label": "Thurgau: taken by the Confederates in 1460",
      "sel": {
       "cantons": [
        "TG"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Aargau",
      "kind": "confederates",
      "label": "Aargau: Swiss since 1415",
      "sel": {
       "districts": [
        1901,
        1902,
        1903,
        1904,
        1905,
        1907,
        1908,
        1910,
        1911
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "The eight cantons (about)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "GL",
        "LU",
        "ZH",
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Frauenfeld",
      "lat": 47.5536,
      "lon": 8.8987,
      "kind": "town",
      "year": 1460,
      "note": "Thurgau taken"
     },
     {
      "name": "Diessenhofen",
      "lat": 47.6893,
      "lon": 8.7495,
      "kind": "town",
      "year": 1460,
      "note": "Taken after a siege"
     }
    ]
   },
   {
    "year": 1474,
    "tick": "1474",
    "title": "Peace: the Ewige Richtung",
    "text": [
     "In 1469 Sigismund pledges his lands in Alsace and on the Upper Rhine to Charles the Bold, Duke of Burgundy. Soon Charles becomes a danger to both Austria and the Swiss.",
     "In 1474 Sigismund and the Confederates make the Ewige Richtung (perpetual settlement) at Constance. Austria accepts that the Aargau and Thurgau belong to the Swiss. Old enemies become partners against Burgundy."
    ],
    "view": [
     [
      46.0,
      5.5
     ],
     [
      48.6,
      10.6
     ]
    ],
    "layers": [
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: Austrian",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Upper Alsace",
      "kind": "habsburg",
      "label": "Upper Alsace: back to Austria in 1474 (drawn as Haut-Rhin)",
      "sel": {},
      "regions": [
       "FRA-5296"
      ],
      "countries": []
     },
     {
      "name": "Tyrol and Vorarlberg",
      "kind": "habsburg",
      "label": "Tyrol and Vorarlberg: Sigismund's lands (borders rough)",
      "sel": {},
      "regions": [
       "AUT-2329",
       "AUT-2320"
      ],
      "countries": []
     },
     {
      "name": "Burgundy",
      "kind": "burgundy",
      "label": "Franche-Comté: Duke Charles the Bold of Burgundy",
      "sel": {},
      "regions": [
       "FRA-5287",
       "FRA-5312",
       "FRA-5301"
      ],
      "countries": []
     },
     {
      "name": "Swiss lands",
      "kind": "confederates",
      "label": "Confederates and their common lordships (about)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "GL",
        "LU",
        "ZH",
        "BE",
        "TG",
        "AG"
       ],
       "exceptDistricts": [
        241,
        242,
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Constance",
      "lat": 47.6603,
      "lon": 9.1758,
      "kind": "treaty",
      "year": 1474,
      "note": "Ewige Richtung"
     },
     {
      "name": "Nancy",
      "lat": 48.6921,
      "lon": 6.1844,
      "kind": "battle",
      "year": 1477,
      "note": "Charles the Bold killed"
     }
    ]
   },
   {
    "year": 1499,
    "tick": "1499",
    "title": "The Swabian War",
    "text": [
     "King Maximilian I wants the Swiss to accept new imperial taxes and courts. The Swiss refuse. In 1499 war breaks out between the Confederates with the Grisons on one side, and Maximilian with the Swabian League (an alliance of south German lords and towns) on the other.",
     "The Swiss win at Calven and at Dornach. In the Peace of Basel (September 1499) the borders do not change. But after 1499 the Empire's courts and taxes no longer reach the Swiss in practice.",
     "In 1511 Austria and the Swiss sign a hereditary union (Erbeinung). They promise to respect each other's land."
    ],
    "view": [
     [
      46.0,
      5.5
     ],
     [
      48.6,
      11.5
     ]
    ],
    "layers": [
     {
      "name": "Rhäzüns",
      "kind": "habsburg",
      "label": "Rhäzüns: Austrian since 1497",
      "sel": {
       "munis": [
        3723,
        3721,
        3722
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: Austrian",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Austrian lands",
      "kind": "habsburg",
      "label": "Maximilian's lands: Tyrol, Vorarlberg, Upper Alsace (borders rough)",
      "sel": {},
      "regions": [
       "AUT-2329",
       "AUT-2320",
       "ITA-5459",
       "FRA-5296"
      ],
      "countries": []
     },
     {
      "name": "Swabian League",
      "kind": "enemy",
      "label": "Swabian League: allied with Maximilian (drawn as Baden-Württemberg, rough)",
      "sel": {},
      "regions": [
       "DEU-1573"
      ],
      "countries": []
     },
     {
      "name": "Allies",
      "kind": "ally",
      "label": "Allies of the Swiss: Three Leagues (Grisons), Valais, St. Gallen, Appenzell, Schaffhausen",
      "sel": {
       "cantons": [
        "GR",
        "VS",
        "SG",
        "AR",
        "AI",
        "SH"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "The ten cantons and their common lordships (about)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "GL",
        "LU",
        "ZH",
        "BE",
        "TG",
        "AG",
        "FR",
        "SO"
       ],
       "exceptDistricts": [
        241,
        242,
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Calven",
      "lat": 46.665,
      "lon": 10.52,
      "kind": "battle",
      "year": 1499,
      "note": "Grisons win"
     },
     {
      "name": "Dornach",
      "lat": 47.4824,
      "lon": 7.6187,
      "kind": "battle",
      "year": 1499,
      "note": "Confederates win"
     },
     {
      "name": "Basel",
      "lat": 47.5596,
      "lon": 7.5886,
      "kind": "treaty",
      "year": 1499,
      "note": "Peace of Basel"
     }
    ]
   },
   {
    "year": 1500,
    "tick": "1500",
    "title": "From Austria to Burgundy",
    "text": [
     "The Habsburgs grow most by marriage. In 1477 Maximilian marries Mary, the heiress of Burgundy. After her father Charles the Bold dies, the Habsburgs get the Netherlands and later the Franche-Comté.",
     "About 1500 Maximilian rules the Austrian lands, Tyrol, and the Burgundian Netherlands. The Swiss now have a much stronger neighbour on two sides."
    ],
    "view": "europe",
    "layers": [
     {
      "name": "Austrian lands",
      "kind": "habsburg",
      "label": "Austrian hereditary lands (borders rough)",
      "sel": {},
      "regions": [
       "AUT-2330",
       "AUT-2331",
       "AUT-2326",
       "AUT-2323",
       "AUT-2325",
       "AUT-2329",
       "AUT-2320",
       "ITA-5459",
       "ITA-5457",
       "ITA-5458",
       "FRA-5296"
      ],
      "countries": [
       "SVN"
      ]
     },
     {
      "name": "Burgundian inheritance",
      "kind": "habsburg",
      "label": "Burgundian inheritance: Netherlands, Artois, Franche-Comté (borders rough)",
      "sel": {},
      "regions": [
       "FRA-5330",
       "FRA-5334",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301"
      ],
      "countries": [
       "BEL",
       "LUX",
       "NLD"
      ]
     },
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: Austrian",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Vienna",
      "lat": 48.2082,
      "lon": 16.3738,
      "kind": "town"
     },
     {
      "name": "Innsbruck",
      "lat": 47.2692,
      "lon": 11.4041,
      "kind": "town",
      "note": "Maximilian's favourite seat"
     },
     {
      "name": "Brussels",
      "lat": 50.8467,
      "lon": 4.3525,
      "kind": "town",
      "note": "Centre of the Netherlands"
     }
    ]
   },
   {
    "year": 1550,
    "tick": "1550",
    "title": "An empire around Switzerland",
    "text": [
     "Maximilian's grandson Charles V becomes king of Spain in 1516 and emperor in 1519. With Spain come Naples, Sicily, Sardinia and lands in America. In 1535 he also takes the Duchy of Milan. In 1526 his brother Ferdinand becomes king of Bohemia and Hungary.",
     "About 1550 Habsburg land lies north, east and south of the Swiss. In 1556 the family splits into a Spanish line and an Austrian line. The family that began at a small castle in the Aargau is now one of the great powers of Europe."
    ],
    "view": "europe",
    "layers": [
     {
      "name": "Spanish line",
      "kind": "habsburg",
      "label": "Charles V: Spain, Netherlands, Franche-Comté, Milan, Naples, Sicily, Sardinia (borders rough)",
      "sel": {},
      "regions": [
       "FRA-5330",
       "FRA-5334",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "ITA-5418",
       "ITA-5419",
       "ITA-5420",
       "ITA-5421",
       "ITA-5401",
       "ITA-5402",
       "ITA-5396",
       "ITA-5397",
       "ITA-5398",
       "ITA-5399",
       "ITA-5400",
       "ITA-5403",
       "ITA-5404",
       "ITA-5405",
       "ITA-5406",
       "ITA-5407",
       "ITA-5408",
       "ITA-5389",
       "ITA-5390",
       "ITA-5391",
       "ITA-5392",
       "ITA-5393",
       "ITA-5394",
       "ITA-5395",
       "ITA-5409",
       "ITA-5410",
       "ITA-5411",
       "ITA-5412",
       "ITA-5413",
       "ITA-5414",
       "ITA-5415",
       "ITA-5416",
       "ITA-5417",
       "ITA-5371",
       "ITA-5372",
       "ITA-5373",
       "ITA-5374",
       "ITA-5375",
       "ITA-5376",
       "ITA-5377",
       "ITA-5378",
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5451",
       "ITA-5453",
       "ITA-5447",
       "ITA-5438"
      ],
      "countries": [
       "ESP",
       "BEL",
       "LUX",
       "NLD"
      ]
     },
     {
      "name": "Austrian line",
      "kind": "habsburg",
      "label": "Ferdinand: Austrian lands, Bohemia, and part of Hungary (borders rough)",
      "sel": {},
      "regions": [
       "AUT-2330",
       "AUT-2331",
       "AUT-2326",
       "AUT-2323",
       "AUT-2325",
       "AUT-2329",
       "AUT-2320",
       "ITA-5459",
       "ITA-5457",
       "ITA-5458",
       "FRA-5296"
      ],
      "countries": [
       "SVN",
       "CZE",
       "SVK"
      ]
     },
     {
      "name": "Fricktal",
      "kind": "habsburg",
      "label": "Fricktal: Austrian until 1802/1803",
      "sel": {
       "districts": [
        1906,
        1909
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Habsburg castle",
      "lat": 47.4625,
      "lon": 8.1856,
      "kind": "castle",
      "note": "Where it began"
     },
     {
      "name": "Vienna",
      "lat": 48.2082,
      "lon": 16.3738,
      "kind": "town"
     },
     {
      "name": "Milan",
      "lat": 45.4642,
      "lon": 9.19,
      "kind": "town",
      "year": 1535,
      "note": "Habsburg from 1535"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/019506/",
   "https://hls-dhs-dss.ch/de/articles/029461/",
   "https://hls-dhs-dss.ch/de/articles/019520/2024-02-20/",
   "https://hls-dhs-dss.ch/de/articles/001692/2007-10-16/"
  ],
  "notes": "Lands inside Switzerland are drawn from today's cantons and districts and are approximate; Habsburg rights were often scattered rights, not closed territories. 1291 and 1386 maps simplify (Zurich, Bern, Lucerne drawn as towns only in 1386; the whole of today's Lucerne and Zurich countryside drawn as Habsburg). Austria 1282 drawn as today's Lower Austria, Vienna, Upper Austria and Styria (Lower Styria in Slovenia left out). Upper Alsace drawn as Haut-Rhin. Around 1500/1550: Slovenia drawn whole (Carniola, Lower Styria); Netherlands drawn whole although the northern provinces came 1524–1543; Hungary and Croatia left out because most was Ottoman or contested; Milan drawn as several Lombard provinces plus Novara; Further Austria in Baden-Württemberg (Breisgau) not drawn because only whole German states exist. Morgarten and Calven coordinates are approximate. Swabian War allies grouped roughly."
 },
 {
  "id": "savoy",
  "title": "Savoy: masters of the Alpine passes and the Vaud",
  "card": "How the counts of Savoy took the Vaud and the passes, lost them to Bern and the Valais, and became kings in Turin.",
  "stops": [
   {
    "year": 1050,
    "tick": "about 1050",
    "title": "Counts of the Alpine passes",
    "text": [
     "The house of Savoy begins in the early 1000s with Count Humbert. His lands lie south-west of Lake Geneva, around Bugey and the Isère valley.",
     "His son Odo marries Adelaide of Turin. This brings the Susa valley and Piedmont. Now Savoy holds both sides of the passes, for example Mont-Cenis and the Great St Bernard. Tolls and travellers on these roads bring money and power.",
     "In the 1000s the counts also gain influence in the Chablais, around the old abbey of Saint-Maurice."
    ],
    "view": [
     [
      44.3,
      4.8
     ],
     [
      47.2,
      9.0
     ]
    ],
    "layers": [
     {
      "name": "Chablais",
      "kind": "savoy",
      "label": "Chablais around Saint-Maurice: Savoy influence (about)",
      "sel": {
       "districts": [
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "Lands of the counts of Savoy (about, borders rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5262",
       "FRA-5311",
       "ITA-5442",
       "ITA-5434"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Great St Bernard pass",
      "lat": 45.8689,
      "lon": 7.1706,
      "kind": "place",
      "note": "Pass between Valais and Aosta"
     },
     {
      "name": "Saint-Maurice abbey",
      "lat": 46.2183,
      "lon": 7.0034,
      "kind": "place"
     },
     {
      "name": "Turin",
      "lat": 45.0703,
      "lon": 7.6869,
      "kind": "town"
     },
     {
      "name": "Susa",
      "lat": 45.1381,
      "lon": 7.0486,
      "kind": "town"
     }
    ]
   },
   {
    "year": 1260,
    "tick": "1260",
    "title": "Peter II and the Vaud",
    "text": [
     "Peter of Savoy (about 1203–1268) is a younger son. He gets little land at home, so he builds his own power north of Lake Geneva. Between 1240 and 1260 he forces many nobles of the Vaud to hold their land from him as a fief (land held in return for loyalty).",
     "He beats the count of Geneva and pushes back the bishop of Lausanne. In 1260 the bishop of Sion lets him have the Valais down to the Morge stream near Conthey. Bern and Murten seek his protection in the 1250s.",
     "Peter becomes count of Savoy in 1263. People later call him the 'little Charlemagne'."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
      "label": "Bishop of Lausanne: Lausanne, Lavaux, Lucens, Avenches; Bulle",
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
        5451,
        2125,
        2148,
        2149
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Gruyère",
      "kind": "noble",
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
        2138,
        5841,
        5842,
        5843
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Grandson",
      "kind": "noble",
      "label": "Lords of Grandson",
      "sel": {
       "munis": [
        5561
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fribourg",
      "kind": "kyburg",
      "label": "Fribourg: Kyburg, then Habsburg (1277)",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Lower Valais",
      "kind": "savoy",
      "label": "Lower Valais to the Morge: Savoy from 1260",
      "sel": {
       "districts": [
        2302,
        2307,
        2303,
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Vaud",
      "kind": "savoy",
      "label": "Savoy: Pays de Vaud, Chablais, Romont, Murten",
      "sel": {
       "cantons": [
        "VD",
        "FR"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Upper Valais: Bishop of Sion",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Chillon castle",
      "lat": 46.4142,
      "lon": 6.9275,
      "kind": "castle",
      "note": "Savoy castle on the lake"
     },
     {
      "name": "Moudon",
      "lat": 46.6683,
      "lon": 6.7975,
      "kind": "town",
      "note": "Savoy centre in the Vaud"
     },
     {
      "name": "Yverdon",
      "lat": 46.7784,
      "lon": 6.6413,
      "kind": "castle",
      "note": "Castle built by Peter II"
     },
     {
      "name": "Romont",
      "lat": 46.6966,
      "lon": 6.9183,
      "kind": "town"
     },
     {
      "name": "Conthey",
      "lat": 46.2236,
      "lon": 7.3039,
      "kind": "treaty",
      "year": 1260,
      "note": "Border at the Morge"
     },
     {
      "name": "Bern",
      "lat": 46.948,
      "lon": 7.4474,
      "kind": "town",
      "note": "Under Savoy protection for some years"
     }
    ]
   },
   {
    "year": 1416,
    "tick": "1416",
    "title": "The Duchy of Savoy",
    "text": [
     "From 1285 to 1359 a side line of the family rules the Vaud as a barony. In 1359 Count Amadeus VI takes it back.",
     "Savoy keeps growing. It gets Nice and access to the sea in 1388 and the Genevois (the land around Geneva) in 1401–1402. In 1416 the emperor makes Amadeus VIII a duke. The city of Geneva itself stays under its bishop.",
     "The duchy now reaches from the Swiss plateau to the Mediterranean."
    ],
    "view": [
     [
      43.3,
      4.5
     ],
     [
      47.3,
      9.0
     ]
    ],
    "layers": [
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Geneva",
      "kind": "bishop",
      "label": "City of Geneva: its bishop",
      "sel": {
       "munis": [
        6621
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Gruyère",
      "kind": "noble",
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
        2138,
        5841,
        5842,
        5843
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fribourg",
      "kind": "habsburg",
      "label": "Fribourg: Habsburg town until 1452",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Swiss Savoy",
      "kind": "savoy",
      "label": "Duchy of Savoy: Vaud, Lower Valais, Romont, Murten, land around Geneva",
      "sel": {
       "cantons": [
        "VD",
        "FR",
        "GE"
       ],
       "districts": [
        2302,
        2307,
        2303,
        2310,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Sion",
      "kind": "bishop",
      "label": "Upper Valais: Bishop of Sion and the Zenden",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Duchy of Savoy",
      "kind": "savoy",
      "label": "Duchy of Savoy: Savoy, Bresse and Bugey, Aosta, Piedmont, Nice (borders rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5302",
       "FRA-5262",
       "FRA-5266",
       "ITA-5442",
       "ITA-5434",
       "ITA-5435",
       "ITA-5436",
       "ITA-5441"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Chambéry",
      "lat": 45.5646,
      "lon": 5.9178,
      "kind": "town",
      "note": "Capital of Savoy"
     },
     {
      "name": "Nice",
      "lat": 43.7102,
      "lon": 7.262,
      "kind": "town",
      "year": 1388,
      "note": "Savoy from 1388"
     },
     {
      "name": "Turin",
      "lat": 45.0703,
      "lon": 7.6869,
      "kind": "town"
     },
     {
      "name": "Geneva",
      "lat": 46.2011,
      "lon": 6.1486,
      "kind": "town"
     }
    ]
   },
   {
    "year": 1476,
    "tick": "1476",
    "title": "Losses in the Burgundian Wars",
    "text": [
     "In 1475 Duchess Yolande of Savoy sides with Charles the Bold of Burgundy. Bern and the Valais attack Savoy land. The Swiss beat Charles at Grandson and Murten in 1476.",
     "In the Treaty of Fribourg (1476) Bern gets Aigle. The Valais gets the Lower Valais down to Massongex. Bern and Fribourg together take Murten, Grandson, Orbe and Echallens as shared lordships (1476 and 1484).",
     "Savoy keeps most of the Vaud, but it is weaker now."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bern and Fribourg",
      "kind": "confederates",
      "label": "Murten, Grandson, Orbe, Echallens: shared by Bern and Fribourg",
      "sel": {
       "munis": [
        2275,
        5561,
        5757,
        5518
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Aigle",
      "kind": "confederates",
      "label": "Aigle: Bernese from 1475/1476",
      "sel": {
       "districts": [
        2221
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Lower Valais",
      "kind": "ally",
      "label": "Lower Valais to Massongex: taken by the Upper Valais (Zenden) in 1475",
      "sel": {
       "districts": [
        2302,
        2307,
        2303,
        2310
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bishop of Lausanne",
      "kind": "bishop",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Gruyère",
      "kind": "noble",
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
        2138,
        5841,
        5842,
        5843
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fribourg",
      "kind": "confederates",
      "label": "Fribourg (Swiss member from 1481)",
      "sel": {
       "districts": [
        1004,
        1006,
        1005
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Geneva",
      "kind": "bishop",
      "label": "City of Geneva: its bishop",
      "sel": {
       "munis": [
        6621
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "Duchy of Savoy",
      "sel": {
       "cantons": [
        "VD",
        "GE"
       ],
       "districts": [
        1001,
        1002,
        1003,
        1007,
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Valais",
      "kind": "ally",
      "label": "Valais: Bishop of Sion and Zenden, allies of the Swiss",
      "sel": {
       "cantons": [
        "VS"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bern",
      "kind": "confederates",
      "label": "Bern",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241,
        242
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Grandson",
      "lat": 46.85,
      "lon": 6.68,
      "kind": "battle",
      "year": 1476,
      "note": "Swiss beat Charles the Bold"
     },
     {
      "name": "Murten",
      "lat": 46.9333,
      "lon": 7.1333,
      "kind": "battle",
      "year": 1476,
      "note": "Swiss beat Charles the Bold"
     },
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "treaty",
      "year": 1476,
      "note": "Treaty of Fribourg"
     },
     {
      "name": "Massongex",
      "lat": 46.2427,
      "lon": 6.9887,
      "kind": "place",
      "note": "New border in the Valais"
     }
    ]
   },
   {
    "year": 1536,
    "tick": "1536",
    "title": "Bern takes the Vaud",
    "text": [
     "Geneva wants to be free from the duke and the bishop. Bern helps the city. In 1536 Bern conquers the Vaud, the Pays de Gex and land south of Lake Geneva. Fribourg takes Romont and other places. The Valais takes the Chablais east of the Dranse river.",
     "At the same time France occupies Savoy and most of Piedmont. In spring 1536 the duke holds only Nice, Vercelli and Aosta. Geneva becomes an independent city."
    ],
    "view": [
     [
      43.3,
      4.5
     ],
     [
      47.6,
      9.0
     ]
    ],
    "layers": [
     {
      "name": "Geneva",
      "kind": "ally",
      "label": "Geneva: independent city, ally of Bern",
      "sel": {
       "munis": [
        6621
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Gruyère",
      "kind": "noble",
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
        2123,
        2138,
        5841,
        5842,
        5843
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Fribourg's share",
      "kind": "confederates",
      "label": "Taken by Fribourg in 1536",
      "sel": {
       "districts": [
        1001,
        1002,
        1003,
        1007
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Valais's share",
      "kind": "ally",
      "label": "Monthey area: taken by the Valais in 1536",
      "sel": {
       "districts": [
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Vaud",
      "kind": "confederates",
      "label": "Vaud: conquered by Bern in 1536",
      "sel": {
       "cantons": [
        "VD"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Bernese land around Geneva",
      "kind": "confederates",
      "label": "Land around Geneva: Bern 1536–1567",
      "sel": {
       "cantons": [
        "GE"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "What the duke still holds: Nice, Aosta, Vercelli (rough)",
      "sel": {},
      "regions": [
       "FRA-5266",
       "ITA-5442",
       "ITA-5436"
      ],
      "countries": []
     },
     {
      "name": "France",
      "kind": "france",
      "label": "Occupied by France from 1536 (rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5262",
       "ITA-5434",
       "ITA-5441",
       "ITA-5435"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Lausanne",
      "lat": 46.5226,
      "lon": 6.6355,
      "kind": "town",
      "year": 1536,
      "note": "Taken by Bern"
     },
     {
      "name": "Chillon castle",
      "lat": 46.4142,
      "lon": 6.9275,
      "kind": "castle",
      "year": 1536,
      "note": "Taken by Bern"
     },
     {
      "name": "Geneva",
      "lat": 46.2011,
      "lon": 6.1486,
      "kind": "town"
     },
     {
      "name": "Nice",
      "lat": 43.7102,
      "lon": 7.262,
      "kind": "town",
      "note": "Still Savoy"
     }
    ]
   },
   {
    "year": 1569,
    "tick": "1569",
    "title": "A new state around Turin",
    "text": [
     "Duke Emmanuel Philibert gets most of his lands back in 1559. In 1563 he makes Turin his capital. The duchy now looks south, to Italy.",
     "In the Treaty of Lausanne (1564) and at Thonon (1569) he makes peace with Bern and the Valais. He gets back the land south of Lake Geneva. In return, the Vaud stays Bernese, and the Valais keeps the Monthey area. These borders still hold today."
    ],
    "view": [
     [
      43.3,
      4.5
     ],
     [
      47.6,
      9.0
     ]
    ],
    "layers": [
     {
      "name": "Geneva",
      "kind": "ally",
      "label": "Geneva: independent city with its villages Peney and Jussy",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Valais",
      "kind": "ally",
      "label": "Monthey area: stays with the Valais",
      "sel": {
       "districts": [
        2308
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Vaud",
      "kind": "confederates",
      "label": "Vaud: stays with Bern (Fribourg holds its part)",
      "sel": {
       "cantons": [
        "VD"
       ],
       "districts": [
        1001,
        1002,
        1003,
        1007
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy around Geneva",
      "kind": "savoy",
      "label": "Land around Geneva: back to Savoy",
      "sel": {
       "cantons": [
        "GE"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Duchy of Savoy",
      "kind": "savoy",
      "label": "Duchy of Savoy: Savoy, Bresse, Bugey and Gex (until 1601), Aosta, Piedmont, Nice (rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5302",
       "FRA-5262",
       "FRA-5266",
       "ITA-5442",
       "ITA-5434",
       "ITA-5435",
       "ITA-5436",
       "ITA-5441"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Turin",
      "lat": 45.0703,
      "lon": 7.6869,
      "kind": "town",
      "year": 1563,
      "note": "New capital"
     },
     {
      "name": "Lausanne",
      "lat": 46.5226,
      "lon": 6.6355,
      "kind": "treaty",
      "year": 1564,
      "note": "Treaty with Bern"
     },
     {
      "name": "Thonon",
      "lat": 46.3705,
      "lon": 6.4797,
      "kind": "treaty",
      "year": 1569,
      "note": "Treaty with the Valais"
     }
    ]
   },
   {
    "year": 1720,
    "tick": "1720",
    "title": "Kings of Sardinia",
    "text": [
     "In 1601 Savoy gives Bresse, Bugey and Gex to France. In 1602 an attack on Geneva fails (the 'Escalade'). In 1603 Savoy accepts that Geneva is independent.",
     "In 1713 the duke becomes king of Sicily. In 1720 he swaps Sicily for Sardinia. His state is now called the Kingdom of Sardinia, but its centre is still Turin and Piedmont."
    ],
    "view": [
     [
      38.5,
      4.5
     ],
     [
      47.3,
      10.5
     ]
    ],
    "layers": [
     {
      "name": "Geneva",
      "kind": "ally",
      "label": "Geneva: independent city with Peney and Jussy, ally of the Swiss",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Pays de Gex",
      "kind": "france",
      "label": "Villages of the Pays de Gex: French from 1601",
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
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Savoy around Geneva",
      "kind": "savoy",
      "label": "Villages around Geneva: Savoy (later partly to Geneva)",
      "sel": {
       "cantons": [
        "GE"
       ]
      },
      "regions": [],
      "countries": []
     },
     {
      "name": "Kingdom of Sardinia",
      "kind": "savoy",
      "label": "Kingdom of Sardinia: Savoy, Nice, Aosta, Piedmont, Sardinia (rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5302",
       "FRA-5266",
       "ITA-5442",
       "ITA-5434",
       "ITA-5435",
       "ITA-5436",
       "ITA-5441",
       "ITA-5440",
       "ITA-5439",
       "ITA-5371",
       "ITA-5372",
       "ITA-5373",
       "ITA-5374",
       "ITA-5375",
       "ITA-5376",
       "ITA-5377",
       "ITA-5378"
      ],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Geneva",
      "lat": 46.2011,
      "lon": 6.1486,
      "kind": "town",
      "year": 1602,
      "note": "Escalade fails"
     },
     {
      "name": "Turin",
      "lat": 45.0703,
      "lon": 7.6869,
      "kind": "town",
      "note": "Capital"
     },
     {
      "name": "Cagliari",
      "lat": 39.2238,
      "lon": 9.1217,
      "kind": "town",
      "year": 1720,
      "note": "Sardinia to Savoy"
     }
    ]
   },
   {
    "year": 1860,
    "tick": "1860",
    "title": "Savoy becomes French",
    "text": [
     "In 1815 and 1816 the treaties of Paris and Turin give Geneva several Savoy villages, for example Carouge. Now Geneva's land touches the rest of Switzerland.",
     "In 1860 Savoy and Nice become French. In return, France helps the House of Savoy unite Italy. From 1861 the family rules the Kingdom of Italy, until 1946."
    ],
    "view": "europe",
    "layers": [
     {
      "name": "Savoy and Nice",
      "kind": "france",
      "label": "Savoy and Nice: French since 1860 (Nice drawn as Alpes-Maritimes, rough)",
      "sel": {},
      "regions": [
       "FRA-5341",
       "FRA-5302",
       "FRA-5266"
      ],
      "countries": []
     },
     {
      "name": "Kingdom of Italy",
      "kind": "savoy",
      "label": "Kingdom of Italy, ruled by the House of Savoy from 1861",
      "sel": {},
      "regions": [],
      "countries": [
       "ITA"
      ]
     },
     {
      "name": "Geneva",
      "kind": "confederates",
      "label": "Geneva with the former Savoy villages (Swiss since 1815)",
      "sel": {
       "cantons": [
        "GE"
       ]
      },
      "regions": [],
      "countries": []
     }
    ],
    "places": [
     {
      "name": "Carouge",
      "lat": 46.1814,
      "lon": 6.1392,
      "kind": "town",
      "year": 1816,
      "note": "To Geneva"
     },
     {
      "name": "Chambéry",
      "lat": 45.5646,
      "lon": 5.9178,
      "kind": "town",
      "year": 1860,
      "note": "French"
     },
     {
      "name": "Turin",
      "lat": 45.0703,
      "lon": 7.6869,
      "kind": "town",
      "year": 1861,
      "note": "First capital of Italy"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/006641/",
   "https://hls-dhs-dss.ch/de/articles/017867/",
   "https://hls-dhs-dss.ch/de/articles/008560/"
  ],
  "notes": "Early Savoy (about 1050) is very rough: the exact date when Savoy took the Chablais and Saint-Maurice is not given; Humbert's lands drawn as today's Savoie and Ain plus Turin and Aosta. Outside Switzerland the duchy is drawn by whole French départements and Italian provinces (for example all of Ain for Bresse and Bugey, Cuneo whole, Alpes-Maritimes for the County of Nice). 1536–1720: the Geneva countryside is drawn roughly (Geneva's own villages Peney and Jussy and the Gex villages shown only from 1569/1720). 1536: Bern's land south of Lake Geneva (Gex, Chablais west of the Dranse) and Valais's Chablais east of the Dranse are in France today and are not drawn separately. 1720: Montferrat drawn as Asti and Alessandria (rough). Peter II's protection of Bern is given as 'in the 1250s'."
 },
 {
  "id": "wars-founding",
  "title": "The first wars: from Morgarten to the Stoss",
  "card": "How small valleys and towns beat Habsburg armies and nobles between 1315 and 1405.",
  "stops": [
   {
    "year": 1315,
    "tick": "1315",
    "title": "Morgarten: ambush at the lake",
    "text": [
     "Schwyz quarrelled with Habsburg for years. One cause was a long fight over pasture land with the abbey of Einsiedeln, which Habsburg protected.",
     "In November 1315 Duke Leopold I of Habsburg led an army towards Schwyz. Near the upper end of Lake Ägeri, men from Schwyz attacked the army on a narrow path and beat it.",
     "Three weeks later, Uri, Schwyz and Unterwalden renewed their alliance at Brunnen. For centuries people saw this pact of 1315 as the start of the Confederation."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Uri, Schwyz, Unterwalden",
      "kind": "confederates",
      "label": "The three valleys (today's cantons, rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW"
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land nearby (rough)",
      "sel": {
       "cantons": [
        "ZG",
        "LU",
        "AG",
        "GL"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Morgarten (Schornen)",
      "lat": 47.1265,
      "lon": 8.6383,
      "kind": "battle",
      "year": 1315,
      "note": "Schwyz beats Duke Leopold I of Habsburg"
     },
     {
      "name": "Brunnen",
      "lat": 46.995,
      "lon": 8.606,
      "kind": "treaty",
      "year": 1315,
      "note": "Pact of Brunnen, 9 December 1315"
     }
    ]
   },
   {
    "year": 1339,
    "tick": "1339",
    "title": "Laupen: Bern against the nobles",
    "text": [
     "Bern grew fast and took land from noble families. The nobles and the town of Fribourg joined forces and laid siege to the small town of Laupen, which belonged to Bern.",
     "On 21 June 1339 Bern, helped by troops from the forest valleys (Uri, Schwyz, Unterwalden), beat the nobles' army on the Bramberg hill near Neuenegg.",
     "The victory made Bern the strongest power in the western Swiss plateau. In 1353 Bern made a lasting alliance with the forest valleys."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bern",
      "kind": "confederates",
      "label": "Bern and its helpers from the forest valleys (rough)",
      "sel": {
       "districts": [
        246,
        247,
        250
       ],
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW"
       ]
      }
     },
     {
      "name": "Fribourg and nobles",
      "kind": "enemy",
      "label": "Fribourg and its noble allies (rough)",
      "sel": {
       "districts": [
        1004,
        1006,
        1005
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Laupen (Bramberg)",
      "lat": 46.9065,
      "lon": 7.2717,
      "kind": "battle",
      "year": 1339,
      "note": "Bern and the forest valleys win"
     },
     {
      "name": "Laupen town",
      "lat": 46.902,
      "lon": 7.239,
      "kind": "town"
     }
    ]
   },
   {
    "year": 1386,
    "tick": "1386",
    "title": "Sempach: the duke is killed",
    "text": [
     "By 1353 eight places were allied: Uri, Schwyz, Unterwalden, Lucerne, Zurich, Zug, Glarus and Bern. Lucerne took Habsburg towns and land around it.",
     "Duke Leopold III of Habsburg marched against Lucerne. On 9 July 1386 the Confederates beat his army near Sempach. The duke died in the battle, with many nobles.",
     "Habsburg lost its strength south of the Rhine. Step by step, it lost its land in this area to the Confederates."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Eight places",
      "kind": "confederates",
      "label": "The eight allied places (today's cantons, rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land (rough)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "SH"
       ],
       "districts": [
        1723,
        1724,
        1725
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Sempach",
      "lat": 47.1453,
      "lon": 8.2167,
      "kind": "battle",
      "year": 1386,
      "note": "Confederates win; Duke Leopold III killed"
     }
    ]
   },
   {
    "year": 1388,
    "tick": "1388",
    "title": "Näfels: Glarus frees itself",
    "text": [
     "The war went on. In February 1388 Habsburg troops took the small town of Weesen by surprise.",
     "On 9 April 1388 a Habsburg army broke into the valley of Glarus. About 400 men from Glarus, with a few dozen from Schwyz and Uri, attacked the army while it plundered. The army fled, and the bridge at Weesen broke under the fleeing men.",
     "Glarus was now free of Habsburg rule. People in Glarus still walk to the battle site each year (the 'Näfelser Fahrt')."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Glarus",
      "kind": "confederates",
      "label": "Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Eight places",
      "kind": "confederates",
      "label": "The other allied places (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land (rough)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "SH"
       ],
       "districts": [
        1723,
        1724,
        1725,
        1726
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Näfels",
      "lat": 47.1016,
      "lon": 9.061,
      "kind": "battle",
      "year": 1388,
      "note": "Glarus wins against Habsburg"
     },
     {
      "name": "Sempach",
      "lat": 47.1453,
      "lon": 8.2167,
      "kind": "battle",
      "year": 1386,
      "note": "Confederates win"
     }
    ]
   },
   {
    "year": 1393,
    "tick": "1393",
    "title": "The Sempach Letter",
    "text": [
     "In 1393 the eight places agreed on common rules for war, the 'Sempacherbrief' (Sempach Letter). For example, soldiers must not attack churches, and they must not run away from a battle.",
     "In this letter Glarus is named for the first time as an equal partner. The letter was one of the few laws that all places shared."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Eight places",
      "kind": "confederates",
      "label": "The eight places of the Sempach Letter (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land (rough)",
      "sel": {
       "cantons": [
        "AG",
        "TG",
        "SH"
       ],
       "districts": [
        1723,
        1724,
        1725
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Sempach",
      "lat": 47.1453,
      "lon": 8.2167,
      "kind": "battle",
      "year": 1386,
      "note": "Confederates win"
     },
     {
      "name": "Näfels",
      "lat": 47.1016,
      "lon": 9.061,
      "kind": "battle",
      "year": 1388,
      "note": "Glarus wins"
     }
    ]
   },
   {
    "year": 1403,
    "tick": "1403",
    "title": "Vögelinsegg: Appenzell rises",
    "text": [
     "The farmers of Appenzell had to pay taxes to the abbot of St. Gallen. They refused and made an alliance with Schwyz.",
     "On 15 May 1403, near Speicher, the men of Appenzell, led by captains from Schwyz, beat the army of the abbot and the towns around Lake Constance. After this, the town of St. Gallen took the side of Appenzell."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Appenzell",
      "kind": "ally",
      "label": "Appenzell (ally of Schwyz)",
      "sel": {
       "cantons": [
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Abbey of St. Gallen",
      "kind": "abbey",
      "label": "Land of the abbot of St. Gallen (rough)",
      "sel": {
       "districts": [
        1721,
        1722,
        1728,
        1727
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land (rough)",
      "sel": {
       "cantons": [
        "TG"
       ],
       "districts": [
        1723,
        1724,
        1725
       ]
      }
     },
     {
      "name": "Eight places",
      "kind": "confederates",
      "label": "The eight places (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Vögelinsegg",
      "lat": 47.4185,
      "lon": 9.43,
      "kind": "battle",
      "year": 1403,
      "note": "Appenzell beats the abbot of St. Gallen"
     }
    ]
   },
   {
    "year": 1405,
    "tick": "1405",
    "title": "Stoss: Habsburg is beaten again",
    "text": [
     "The abbot asked Duke Frederick IV of Habsburg for help. On 17 June 1405 an Austrian army climbed towards Appenzell over the Stoss pass above Altstätten.",
     "The men of Appenzell waited above the path. They threw stones and attacked with halberds, and the army fled. The story of the hero Uli Rotach comes from later times and is probably not true.",
     "After the victory Appenzell and its friends founded the 'League above the Lake' (Bund ob dem See). It broke up in 1408. In 1411 Appenzell made a treaty of protection with the Confederates."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Appenzell",
      "kind": "ally",
      "label": "Appenzell (ally of the Confederates)",
      "sel": {
       "cantons": [
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Abbey of St. Gallen",
      "kind": "abbey",
      "label": "Land of the abbot of St. Gallen (rough)",
      "sel": {
       "districts": [
        1721,
        1722,
        1728,
        1727
       ]
      }
     },
     {
      "name": "Habsburg land",
      "kind": "habsburg",
      "label": "Habsburg land (rough)",
      "sel": {
       "cantons": [
        "TG"
       ],
       "districts": [
        1723,
        1724,
        1725
       ]
      }
     },
     {
      "name": "Eight places",
      "kind": "confederates",
      "label": "The eight places (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Stoss",
      "lat": 47.366,
      "lon": 9.484,
      "kind": "battle",
      "year": 1405,
      "note": "Appenzell beats an Austrian army"
     },
     {
      "name": "Vögelinsegg",
      "lat": 47.4185,
      "lon": 9.43,
      "kind": "battle",
      "year": 1403,
      "note": "Appenzell wins"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/008726/",
   "https://hls-dhs-dss.ch/de/articles/008871/2012-12-18/",
   "https://hls-dhs-dss.ch/de/articles/008873/2021-01-15/",
   "https://hls-dhs-dss.ch/de/articles/000400/2010-09-07/",
   "https://hls-dhs-dss.ch/de/articles/008875/",
   "https://hls-dhs-dss.ch/de/articles/008876/2013-10-22/",
   "https://hls-dhs-dss.ch/de/articles/008874/2001-08-14/"
  ],
  "notes": "Areas are today's cantons and districts; the real territories of 1315-1405 were smaller and patchy. Habsburg land is shown only roughly. The exact place of the Morgarten battle is debated; the point is at the memorial at Schornen. Laupen point: Bramberg memorial near Neuenegg. The Sempach Letter step (1393) is context, not a battle."
 },
 {
  "id": "wars-15th",
  "title": "The 15th century: civil war, Burgundy and the Empire",
  "card": "From the Old Zurich War to Charles the Bold and the Swabian War: the century that made the Swiss feared soldiers.",
  "stops": [
   {
    "year": 1443,
    "tick": "1443 Sihl",
    "title": "Old Zurich War: St. Jakob an der Sihl",
    "text": [
     "In 1436 the last Count of Toggenburg died without heirs. Zurich and Schwyz both wanted his land. The quarrel became a war between the Confederates.",
     "Zurich made an alliance with Habsburg against the others. On 22 July 1443 the Confederates beat the Zurich troops at St. Jakob an der Sihl, just outside the town. The mayor of Zurich, Rudolf Stüssi, was killed."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Zurich",
      "kind": "habsburg",
      "label": "Zurich, now allied with Habsburg",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Schwyz and the other Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZG",
        "GL",
        "BE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "St. Jakob an der Sihl",
      "lat": 47.376,
      "lon": 8.524,
      "kind": "battle",
      "year": 1443,
      "note": "Confederates beat Zurich"
     }
    ]
   },
   {
    "year": 1444,
    "tick": "1444 Birs",
    "title": "St. Jakob an der Birs",
    "text": [
     "Habsburg asked the King of France for help. He sent a large army of mercenaries, the 'Armagnacs', led by the Dauphin Louis.",
     "On 26 August 1444 a small Confederate force attacked them near Basel. After a long fight almost all the Confederates were killed. HLS gives about 1,200 Confederate dead and about 2,000 Armagnac dead.",
     "But the French army did not march on. In October 1444 the Dauphin made peace at Ensisheim. In 1450 Zurich left the alliance with Habsburg and returned to the Confederates."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "France and Armagnacs",
      "kind": "france",
      "label": "Kingdom of France",
      "sel": {},
      "countries": [
       "FRA"
      ]
     },
     {
      "name": "Zurich",
      "kind": "habsburg",
      "label": "Zurich, allied with Habsburg",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZG",
        "GL",
        "BE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "St. Jakob an der Birs",
      "lat": 47.54,
      "lon": 7.62,
      "kind": "battle",
      "year": 1444,
      "note": "Armagnacs win, but turn back"
     },
     {
      "name": "St. Jakob an der Sihl",
      "lat": 47.376,
      "lon": 8.524,
      "kind": "battle",
      "year": 1443,
      "note": "Confederates win"
     }
    ]
   },
   {
    "year": 1474,
    "tick": "1474",
    "title": "Charles the Bold of Burgundy",
    "text": [
     "Duke Charles the Bold of Burgundy ruled a rich state from the Netherlands to the Jura. He wanted to join his lands into one kingdom. In 1469 Habsburg gave him land in Alsace as a pledge.",
     "Bern and the King of France, Louis XI, feared him. In 1474 the Confederates and Austria made peace, and the Confederates declared war on Burgundy. The fighting started at Héricourt, west of Basel."
    ],
    "view": [
     [
      45.5,
      1.5
     ],
     [
      53.8,
      10.5
     ]
    ],
    "layers": [
     {
      "name": "Duchy of Burgundy",
      "kind": "burgundy",
      "label": "Lands of Charles the Bold (rough)",
      "sel": {},
      "regions": [
       "FRA-5282",
       "FRA-5339",
       "FRA-5356",
       "FRA-5329",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5296",
       "FRA-5348"
      ],
      "countries": [
       "BEL",
       "NLD",
       "LUX"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates and allies (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "France",
      "kind": "france",
      "label": "Kingdom of France",
      "sel": {},
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Héricourt",
      "lat": 47.577,
      "lon": 6.762,
      "kind": "battle",
      "year": 1474,
      "note": "Confederates and allies win"
     }
    ]
   },
   {
    "year": 1476,
    "tick": "1476 Grandson",
    "title": "Grandson: the duke flees",
    "text": [
     "In February 1476 Charles took the town and castle of Grandson. He had the Bernese garrison hanged or drowned in the lake.",
     "On 2 March 1476 the Confederate army met his army near Concise. The Burgundian troops panicked and ran away. The Confederates took his camp with a huge booty: tents, cannons, gold and tapestries."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Duchy of Burgundy",
      "kind": "burgundy",
      "label": "Burgundy (rough)",
      "sel": {},
      "regions": [
       "FRA-5282",
       "FRA-5339",
       "FRA-5356",
       "FRA-5329",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5296",
       "FRA-5348"
      ]
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "Savoy, ally of Burgundy (rough)",
      "sel": {
       "cantons": [
        "VD"
       ]
      },
      "regions": [
       "FRA-5341",
       "FRA-5302"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates and allies (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Grandson",
      "lat": 46.85,
      "lon": 6.71,
      "kind": "battle",
      "year": 1476,
      "note": "Confederates win; Charles flees"
     }
    ]
   },
   {
    "year": 1476,
    "tick": "1476 Murten",
    "title": "Murten: the great victory",
    "text": [
     "Charles came back with a new army. He laid siege to Murten. Soldiers from Bern and Fribourg held the town.",
     "On 22 June 1476 the Confederates and their allies attacked his camp. Many Burgundian soldiers were driven into the lake. HLS gives 8,000 to 20,000 Burgundian dead, and a few hundred Confederate dead or wounded."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Duchy of Burgundy",
      "kind": "burgundy",
      "label": "Burgundy (rough)",
      "sel": {},
      "regions": [
       "FRA-5282",
       "FRA-5339",
       "FRA-5356",
       "FRA-5329",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5296",
       "FRA-5348"
      ]
     },
     {
      "name": "Savoy",
      "kind": "savoy",
      "label": "Savoy, ally of Burgundy (rough)",
      "sel": {
       "cantons": [
        "VD"
       ]
      },
      "regions": [
       "FRA-5341",
       "FRA-5302"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates and allies (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Murten",
      "lat": 46.918,
      "lon": 7.11,
      "kind": "battle",
      "year": 1476,
      "note": "Confederates win"
     },
     {
      "name": "Grandson",
      "lat": 46.85,
      "lon": 6.71,
      "kind": "battle",
      "year": 1476,
      "note": "Confederates win"
     }
    ]
   },
   {
    "year": 1477,
    "tick": "1477",
    "title": "Nancy: the end of Charles",
    "text": [
     "Charles now tried to take Lorraine. Duke René II of Lorraine hired more than 8,000 Confederate soldiers.",
     "On 5 January 1477 René's army beat Charles near Nancy. Charles was killed after the battle. His lands were split: France took the Duchy of Burgundy, and Habsburg won the Netherlands by marriage.",
     "After these wars the princes of Europe wanted Swiss soldiers. Hiring out soldiers (mercenary service) became a big business for the Confederates."
    ],
    "view": [
     [
      45.5,
      1.5
     ],
     [
      53.8,
      10.5
     ]
    ],
    "layers": [
     {
      "name": "Lorraine",
      "kind": "ally",
      "label": "Lorraine of René II, with Swiss soldiers (rough)",
      "sel": {},
      "regions": [
       "FRA-5325",
       "FRA-5355",
       "FRA-5326",
       "FRA-5328"
      ]
     },
     {
      "name": "Duchy of Burgundy",
      "kind": "burgundy",
      "label": "Lands of Charles the Bold (rough)",
      "sel": {},
      "regions": [
       "FRA-5282",
       "FRA-5339",
       "FRA-5356",
       "FRA-5329",
       "FRA-5287",
       "FRA-5312",
       "FRA-5301",
       "FRA-5296",
       "FRA-5348"
      ],
      "countries": [
       "BEL",
       "NLD",
       "LUX"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Nancy",
      "lat": 48.683,
      "lon": 6.188,
      "kind": "battle",
      "year": 1477,
      "note": "Lorraine and Swiss win; Charles killed"
     },
     {
      "name": "Murten",
      "lat": 46.918,
      "lon": 7.11,
      "kind": "battle",
      "year": 1476,
      "note": "Confederates win"
     },
     {
      "name": "Grandson",
      "lat": 46.85,
      "lon": 6.71,
      "kind": "battle",
      "year": 1476,
      "note": "Confederates win"
     }
    ]
   },
   {
    "year": 1478,
    "tick": "1478",
    "title": "Giornico: Uri in the south",
    "text": [
     "Uri wanted the Leventina valley south of the Gotthard pass. Milan refused to give it up. In November 1478 the Confederates crossed the Gotthard.",
     "On 28 December 1478 a small force stayed behind at Giornico. With a trick, it beat a much larger army from Milan. People there call it the 'battle of the big stones'.",
     "Milan gave up the Leventina, and Uri ruled it. Bellinzona stayed with Milan for now."
    ],
    "view": [
     [
      45.6,
      7.8
     ],
     [
      47.2,
      9.8
     ]
    ],
    "layers": [
     {
      "name": "Leventina",
      "kind": "confederates",
      "label": "Leventina, ruled by Uri",
      "sel": {
       "districts": [
        2103
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE"
       ]
      }
     },
     {
      "name": "Milan",
      "kind": "milan",
      "label": "Duchy of Milan (rough)",
      "sel": {
       "districts": [
        2101,
        2107,
        2102,
        2104,
        2105,
        2106,
        2108
       ]
      },
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447",
       "ITA-5437",
       "ITA-5444"
      ]
     }
    ],
    "places": [
     {
      "name": "Giornico",
      "lat": 46.401,
      "lon": 8.873,
      "kind": "battle",
      "year": 1478,
      "note": "Confederates beat Milan"
     },
     {
      "name": "Gotthard Pass",
      "lat": 46.559,
      "lon": 8.5617,
      "kind": "place"
     }
    ]
   },
   {
    "year": 1499,
    "tick": "1499 Calven",
    "title": "Swabian War: Calven",
    "text": [
     "Emperor Maximilian I wanted the Confederates to pay imperial taxes and obey the imperial court. They refused. In 1499 war broke out with Habsburg and the Swabian League, an alliance of south German princes and towns.",
     "The Three Leagues of Graubünden were allies of the Confederates. On 22 May 1499 their army beat a Tyrolean army at the Calven gorge near Glurns. Their captain Benedikt Fontana was killed."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Three Leagues",
      "kind": "ally",
      "label": "Three Leagues of Graubünden (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates and allies (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "AG",
        "TG",
        "SH",
        "AI",
        "AR",
        "SG"
       ]
      }
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg: Tyrol and Vorarlberg",
      "sel": {},
      "regions": [
       "AUT-2329",
       "AUT-2320"
      ]
     },
     {
      "name": "Swabian League",
      "kind": "empire",
      "label": "Swabian League and Empire (rough)",
      "sel": {},
      "regions": [
       "DEU-1573",
       "DEU-1591"
      ]
     }
    ],
    "places": [
     {
      "name": "Calven",
      "lat": 46.66,
      "lon": 10.52,
      "kind": "battle",
      "year": 1499,
      "note": "Graubünden beats Tyrol"
     }
    ]
   },
   {
    "year": 1499,
    "tick": "1499 Dornach",
    "title": "Dornach and the Peace of Basel",
    "text": [
     "On 22 July 1499 troops from Bern, Zurich, Lucerne, Zug and Solothurn attacked an imperial army at Dornach. They won, and the army's commander, Heinrich von Fürstenberg, was killed.",
     "Maximilian had to make peace. The Peace of Basel (September 1499) ended the war. The Confederates did not leave the Empire on paper, but in practice imperial law no longer applied to them.",
     "Basel and Schaffhausen joined the Confederation in 1501, and Appenzell in 1513."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Three Leagues",
      "kind": "ally",
      "label": "Three Leagues of Graubünden (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates and allies (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "AG",
        "TG",
        "SH",
        "AI",
        "AR",
        "SG"
       ]
      }
     },
     {
      "name": "Habsburg",
      "kind": "habsburg",
      "label": "Habsburg: Tyrol and Vorarlberg",
      "sel": {},
      "regions": [
       "AUT-2329",
       "AUT-2320"
      ]
     },
     {
      "name": "Swabian League",
      "kind": "empire",
      "label": "Swabian League and Empire (rough)",
      "sel": {},
      "regions": [
       "DEU-1573",
       "DEU-1591"
      ]
     }
    ],
    "places": [
     {
      "name": "Dornach",
      "lat": 47.4815,
      "lon": 7.617,
      "kind": "battle",
      "year": 1499,
      "note": "Confederates win"
     },
     {
      "name": "Basel",
      "lat": 47.5596,
      "lon": 7.5886,
      "kind": "treaty",
      "year": 1499,
      "note": "Peace of Basel"
     },
     {
      "name": "Calven",
      "lat": 46.66,
      "lon": 10.52,
      "kind": "battle",
      "year": 1499,
      "note": "Graubünden wins"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/008877",
   "https://hls-dhs-dss.ch/de/articles/008878/2009-09-14/",
   "https://hls-dhs-dss.ch/de/articles/008879/",
   "https://hls-dhs-dss.ch/de/articles/008881/",
   "https://hls-dhs-dss.ch/de/articles/008883/2007-07-17/",
   "https://hls-dhs-dss.ch/de/articles/008884/",
   "https://hls-dhs-dss.ch/de/articles/008885/2010-04-20/",
   "https://hls-dhs-dss.ch/textes/d/D8900.php",
   "https://hls-dhs-dss.ch/de/articles/008888/2015-02-24/",
   "https://hls-dhs-dss.ch/de/articles/008889/2006-03-15/",
   "https://hls-dhs-dss.ch/de/articles/008891/2004-04-14/"
  ],
  "notes": "Areas are today's cantons; the Confederate territories were smaller, and many areas were subject lands or allies. Burgundy is drawn with French départements plus Belgium, the Netherlands and Luxembourg: very rough; Charles's lands also covered parts of northern France and Germany not shown. Savoy is shown as Vaud plus Savoie: rough. Swabian League shown as Baden-Württemberg and Bavaria: very rough. Grandson point is near Concise/Corcelles where the battle was fought. Calven point is approximate (gorge near Glurns/Taufers). Dead counts are from HLS and are estimates."
 },
 {
  "id": "wars-italy",
  "title": "The Italian Wars: Swiss soldiers in Lombardy",
  "card": "From 1500 to 1525 Swiss armies fought for Milan, beat France at Novara and lost at Marignano and Pavia.",
  "stops": [
   {
    "year": 1500,
    "tick": "1500",
    "title": "Milan, France and Swiss soldiers",
    "text": [
     "Around 1500 the Kings of France and the Dukes of Milan fought over Milan. Both sides hired Swiss soldiers.",
     "In April 1500, at Novara, Swiss soldiers stood on both sides and refused to fight each other. Duke Ludovico Sforza fell into French hands. France ruled Milan.",
     "In the same year Uri, Schwyz and Nidwalden took Bellinzona. France accepted this in 1503."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "Bellinzona and valleys",
      "kind": "confederates",
      "label": "Bellinzona, Riviera, Blenio: taken by Uri, Schwyz, Nidwalden",
      "sel": {
       "districts": [
        2101,
        2107,
        2102,
        2103
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "ally",
      "label": "Three Leagues of Graubünden (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Milan under France",
      "kind": "france",
      "label": "Duchy of Milan, ruled by France (rough)",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108
       ]
      },
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447",
       "ITA-5437",
       "ITA-5444"
      ]
     }
    ],
    "places": [
     {
      "name": "Novara",
      "lat": 45.446,
      "lon": 8.622,
      "kind": "battle",
      "year": 1500,
      "note": "Swiss on both sides; Ludovico Sforza captured"
     },
     {
      "name": "Bellinzona",
      "lat": 46.195,
      "lon": 9.017,
      "kind": "town",
      "year": 1500,
      "note": "Taken by Uri, Schwyz, Nidwalden"
     }
    ]
   },
   {
    "year": 1512,
    "tick": "1512",
    "title": "The Pavia campaign",
    "text": [
     "In 1512 the Confederates joined the Pope and his allies (the Holy League). A large Swiss army marched into Lombardy and drove the French out of Milan.",
     "The Confederates made Massimiliano Sforza Duke of Milan and protected him. In return they took Lugano, Locarno, Mendrisio and the Ossola valley. Graubünden took the Valtellina, Chiavenna and Bormio."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "New Swiss lands",
      "kind": "confederates",
      "label": "Lugano, Locarno, Mendrisio, Ossola: new Confederate lands",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      },
      "regions": [
       "ITA-5437"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "Milan",
      "kind": "milan",
      "label": "Duchy of Milan under Swiss protection (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447"
      ]
     }
    ],
    "places": [
     {
      "name": "Pavia",
      "lat": 45.1847,
      "lon": 9.1582,
      "kind": "town",
      "year": 1512,
      "note": "Swiss army takes Lombardy"
     },
     {
      "name": "Domodossola",
      "lat": 45.1167,
      "lon": 8.2917,
      "kind": "town",
      "year": 1512,
      "note": "Ossola under the Confederates"
     }
    ]
   },
   {
    "year": 1513,
    "tick": "1513",
    "title": "Novara: the high point",
    "text": [
     "In 1513 King Louis XII of France sent an army to take Milan back. Swiss troops held Novara.",
     "On 6 June 1513 the Swiss attacked the French army near Novara and beat it. HLS calls this the high point of Swiss military power.",
     "In the same year a Swiss army marched into France as far as Dijon. The town paid money, and the army went home."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "New Swiss lands",
      "kind": "confederates",
      "label": "Confederate lands south of the Alps",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      },
      "regions": [
       "ITA-5437"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "Milan",
      "kind": "milan",
      "label": "Duchy of Milan under Swiss protection (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447"
      ]
     },
     {
      "name": "France",
      "kind": "france",
      "label": "Kingdom of France",
      "sel": {},
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Novara",
      "lat": 45.446,
      "lon": 8.622,
      "kind": "battle",
      "year": 1513,
      "note": "Swiss beat the French"
     }
    ]
   },
   {
    "year": 1515,
    "tick": "1515",
    "title": "Marignano: the turning point",
    "text": [
     "In 1515 the new King of France, Francis I, came with a strong army with cavalry and many cannons. Some Swiss troops went home after an offer of money. The others fought.",
     "On 13 and 14 September 1515 the armies met at Marignano (today Melegnano), south-east of Milan. On the second morning Venetian troops came to help the French, and the Swiss lost. HLS gives 9,000 to 10,000 Swiss dead.",
     "France took Milan. The defeat showed that pikes alone could not beat cavalry and guns."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "New Swiss lands",
      "kind": "confederates",
      "label": "Confederate lands south of the Alps",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      },
      "regions": [
       "ITA-5437"
      ]
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "France",
      "kind": "france",
      "label": "France, now also ruling Milan (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447"
      ],
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Marignano",
      "lat": 45.378,
      "lon": 9.295,
      "kind": "battle",
      "year": 1515,
      "note": "France and Venice beat the Swiss"
     },
     {
      "name": "Novara",
      "lat": 45.446,
      "lon": 8.622,
      "kind": "battle",
      "year": 1513,
      "note": "Swiss win"
     }
    ]
   },
   {
    "year": 1516,
    "tick": "1516",
    "title": "The Perpetual Peace",
    "text": [
     "On 29 November 1516 the Confederates and France signed the 'Perpetual Peace' at Fribourg. The Swiss gave up their protection of Milan.",
     "They kept Bellinzona, Lugano, Locarno, Mendrisio and the Maggia valley. These lands are today the canton of Ticino. Graubünden kept the Valtellina. The Ossola valley went back to Milan.",
     "In 1521 the Confederates made an alliance with France. From now on France hired many Swiss soldiers."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "Swiss lands in the south",
      "kind": "confederates",
      "label": "Lands the Confederates kept (today Ticino)",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "France",
      "kind": "france",
      "label": "France, ruling Milan and the Ossola (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447",
       "ITA-5437"
      ],
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "treaty",
      "year": 1516,
      "note": "Perpetual Peace with France"
     },
     {
      "name": "Marignano",
      "lat": 45.378,
      "lon": 9.295,
      "kind": "battle",
      "year": 1515,
      "note": "French win"
     }
    ]
   },
   {
    "year": 1522,
    "tick": "1522",
    "title": "Bicocca: guns beat pikes",
    "text": [
     "Now the Swiss fought for France against Emperor Charles V, who wanted Milan.",
     "On 27 April 1522 the Swiss attacked the imperial army at Bicocca, north of Milan. The enemy waited behind a ditch and a wall and fired with handguns (arquebuses). The Swiss lost many men and did not win."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "Swiss lands in the south",
      "kind": "confederates",
      "label": "Confederate lands south of the Alps",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "Milan",
      "kind": "empire",
      "label": "Milan, held by the Emperor's side (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447",
       "ITA-5437"
      ]
     },
     {
      "name": "France",
      "kind": "france",
      "label": "Kingdom of France",
      "sel": {},
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Bicocca",
      "lat": 45.518,
      "lon": 9.212,
      "kind": "battle",
      "year": 1522,
      "note": "Imperial army beats French and Swiss"
     }
    ]
   },
   {
    "year": 1525,
    "tick": "1525",
    "title": "Pavia: the end of expansion",
    "text": [
     "King Francis I tried again. From October 1524 he laid siege to Pavia. About 8,000 Swiss served in his army.",
     "On 24 February 1525 an imperial army attacked and won. The king himself was taken prisoner.",
     "Bicocca and Pavia ended Swiss plans to rule in northern Italy. The Reformation now divided the Confederates. From here on they no longer made war to win land abroad, but many Swiss still served as mercenaries."
    ],
    "view": [
     [
      44.7,
      6.4
     ],
     [
      47.4,
      10.9
     ]
    ],
    "layers": [
     {
      "name": "Swiss lands in the south",
      "kind": "confederates",
      "label": "Confederate lands south of the Alps",
      "sel": {
       "districts": [
        2104,
        2105,
        2106,
        2108,
        2101,
        2107,
        2102,
        2103
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "Confederates (rough)",
      "sel": {
       "cantons": [
        "UR",
        "SZ",
        "OW",
        "NW",
        "LU",
        "ZH",
        "ZG",
        "GL",
        "BE",
        "FR",
        "SO",
        "BS",
        "SH",
        "AI",
        "AR"
       ]
      }
     },
     {
      "name": "Graubünden",
      "kind": "ally",
      "label": "Three Leagues with Valtellina (ally)",
      "sel": {
       "cantons": [
        "GR"
       ]
      },
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "Milan",
      "kind": "empire",
      "label": "Milan, held by the Emperor's side (rough)",
      "sel": {},
      "regions": [
       "ITA-5450",
       "ITA-5454",
       "ITA-5448",
       "ITA-5449",
       "ITA-5452",
       "ITA-5453",
       "ITA-5451",
       "ITA-5438",
       "ITA-5447",
       "ITA-5437"
      ]
     },
     {
      "name": "France",
      "kind": "france",
      "label": "Kingdom of France",
      "sel": {},
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Pavia",
      "lat": 45.205,
      "lon": 9.147,
      "kind": "battle",
      "year": 1525,
      "note": "Imperial army wins; Francis I captured"
     },
     {
      "name": "Bicocca",
      "lat": 45.518,
      "lon": 9.212,
      "kind": "battle",
      "year": 1522,
      "note": "Imperial army wins"
     },
     {
      "name": "Marignano",
      "lat": 45.378,
      "lon": 9.295,
      "kind": "battle",
      "year": 1515,
      "note": "French win"
     },
     {
      "name": "Novara",
      "lat": 45.446,
      "lon": 8.622,
      "kind": "battle",
      "year": 1513,
      "note": "Swiss win"
     }
    ]
   }
  ],
  "sources": [
   "http://www.hls-dhs-dss.ch/textes/d/D8894.php",
   "https://hls-dhs-dss.ch/de/articles/024649/2016-04-21/",
   "https://hls-dhs-dss.ch/de/articles/008893/2024-02-05/",
   "https://hls-dhs-dss.ch/de/articles/008896/",
   "https://hls-dhs-dss.ch/de/articles/008898/",
   "http://www.hls-dhs-dss.ch/textes/d/D8902.php",
   "https://hls-dhs-dss.ch/de/articles/008897/2009-11-24/",
   "https://hls-dhs-dss.ch/de/articles/008895/"
  ],
  "notes": "Duchy of Milan drawn with today's Italian provinces (Milano, Monza, Lodi, Pavia, Como, Lecco, Varese, Novara, Cremona): rough. Ossola = province Verbano-Cusio-Ossola, which is larger than the old Ossola. Valtellina = province of Sondrio (Chiavenna and Bormio included). Swiss core shown as today's cantons; Basel, Schaffhausen and Appenzell joined only 1501/1513. Ticino districts are grouped; Blenio and Riviera details simplified. Marignano point is at Zivido/San Giuliano, where most fighting took place (approximate)."
 },
 {
  "id": "reformation",
  "title": "Reformation: one Confederation, two faiths",
  "card": "From Zwingli's Zurich to the Peace of Aarau: how each place in Switzerland became Reformed, Catholic or both, and why it led to four wars.",
  "stops": [
   {
    "year": 1525,
    "tick": "1519–1525",
    "title": "Zwingli changes Zurich",
    "text": [
     "On 1 January 1519 Huldrych Zwingli starts to preach at the Grossmünster in Zurich. He says that only the Bible is the rule for faith. In 1522 friends of Zwingli eat sausages in Lent, which the Church forbids. This becomes a public dispute.",
     "The city council supports Zwingli against the bishop of Constance. After public debates (disputations) in 1523, the council removes the images from the churches in June 1524 and closes the monasteries. In April 1525 Zurich stops the Catholic Mass.",
     "The five inner cantons (Lucerne, Uri, Schwyz, Unterwalden, Zug) promise in 1524 to keep the old faith. In Appenzell, the Landsgemeinde (assembly of all men) decides in 1525 that each parish chooses its own faith."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed from 1525 (Mass ended in April)",
      "sel": {
       "cantons": [
        "ZH"
       ],
       "except": [
        243,
        247,
        246,
        87,
        38
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Five inner cantons",
      "kind": "catholic",
      "label": "Five inner cantons: keep the old faith (Beckenried 1524)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Zurich, Grossmünster",
      "lat": 47.3701,
      "lon": 8.5439,
      "kind": "town",
      "year": 1519,
      "note": "Zwingli preaches here from 1519"
     }
    ]
   },
   {
    "year": 1528,
    "tick": "1528",
    "title": "Bern joins the Reformation",
    "text": [
     "In January 1528 Bern holds a large public debate. A few days later the council decides to introduce the Reformation. Bern is the largest city-state north of the Alps, so this decision is a turning point.",
     "Bern's lands follow, from the Aargau to the Oberland. In the Hasli valley people rebel, but Bern stops the revolt. Biel also becomes Reformed in 1528. The French preacher Guillaume Farel works in Aigle, a Bernese land.",
     "In the east the town of St. Gallen under Vadian and the Toggenburg are already Reformed. In Thurgau a Landsgemeinde declares freedom of faith in December 1528. In Graubünden the Ilanz Articles (1524, 1526) let each commune choose its pastor."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Toggenburg",
      "kind": "reformed",
      "label": "Toggenburg: Reformed from 1524 (Zwingli's home valley)",
      "sel": {
       "districts": [
        1727
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau: freedom of faith declared, December 1528",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: both faiths; images destroyed in some churches 1528",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its pastor (1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "reformed",
      "label": "Bern and its lands: Reformed (February 1528); Biel too",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221
       ]
      }
     },
     {
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ],
       "except": [
        243,
        247,
        246,
        87,
        38
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic: five inner cantons, Fribourg, Valais, Ticino bailiwicks",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS",
        "TI"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Bern Minster",
      "lat": 46.9472,
      "lon": 7.4511,
      "kind": "town",
      "year": 1528,
      "note": "Disputation of Bern, January 1528"
     },
     {
      "name": "Biel",
      "lat": 47.1368,
      "lon": 7.2468,
      "kind": "town",
      "year": 1528,
      "note": "Reformed 1528"
     },
     {
      "name": "St. Gallen",
      "lat": 47.4233,
      "lon": 9.3772,
      "kind": "town",
      "year": 1527,
      "note": "Vadian leads the Reformation"
     },
     {
      "name": "Aigle",
      "lat": 46.3185,
      "lon": 6.9706,
      "kind": "town",
      "year": 1528,
      "note": "Farel preaches here (Bernese land)"
     },
     {
      "name": "Zurich, Grossmünster",
      "lat": 47.3701,
      "lon": 8.5439,
      "kind": "town",
      "year": 1519,
      "note": "Zwingli preaches here from 1519"
     }
    ]
   },
   {
    "year": 1529,
    "tick": "1529",
    "title": "Basel, Schaffhausen, First Kappel War",
    "text": [
     "In 1529 Basel (February) and Schaffhausen also become Reformed. In Glarus the Landsgemeinde lets each commune decide. The Reformed towns make an alliance (Christian Burgrecht); the five Catholic cantons ally with King Ferdinand of Habsburg.",
     "Schwyz burns the Reformed pastor Jakob Kaiser. Zurich declares war on 8 June 1529 and marches to Kappel on the Zug border. Neutral cantons find a compromise, and there is no battle. The story says that soldiers from both sides ate milk soup together.",
     "The First Land Peace (26 June 1529) helps the Reformed side. In the common lordships (lands ruled together by several cantons) each parish now decides by majority. Many parishes in Thurgau, Rheintal, the Freie Ämter and the abbot's lands turn Reformed."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Bremgarten and Mellingen",
      "kind": "reformed",
      "label": "Bremgarten and Mellingen: Reformed 1529–1531",
      "sel": {
       "munis": [
        4063,
        4033
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Gaster and Weesen",
      "kind": "reformed",
      "label": "Gaster and Weesen: side with Zurich",
      "sel": {
       "districts": [
        1726
       ],
       "except": [
        3340
       ]
      }
     },
     {
      "name": "Freie Ämter and Baden",
      "kind": "mixed",
      "label": "Freie Ämter and County of Baden: many parishes turn Reformed",
      "sel": {
       "districts": [
        1902,
        1903,
        1908,
        1911
       ]
      }
     },
     {
      "name": "Abbey lands and Sargans",
      "kind": "mixed",
      "label": "St. Gallen abbey lands and Sargans: many parishes turn Reformed",
      "sel": {
       "districts": [
        1721,
        1722,
        1728,
        1725
       ]
      }
     },
     {
      "name": "Thurgau, Rheintal, Toggenburg",
      "kind": "reformed",
      "label": "Thurgau, Rheintal, Toggenburg: mostly Reformed (Thurgau synod under Zwingli, Dec 1529)",
      "sel": {
       "cantons": [
        "TG"
       ],
       "districts": [
        1723,
        1727
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: each commune decides (May 1529)",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525)",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Solothurn",
      "kind": "mixed",
      "label": "Solothurn: undecided, both faiths",
      "sel": {
       "cantons": [
        "SO"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (February 1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ],
       "except": [
        2963
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "reformed",
      "label": "Bern and its lands: Reformed",
      "sel": {
       "cantons": [
        "BE"
       ],
       "exceptDistricts": [
        241
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221
       ]
      }
     },
     {
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ],
       "except": [
        243,
        38
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic: five inner cantons, Fribourg, Valais, Ticino bailiwicks",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS",
        "TI"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Kappel milk soup stone",
      "lat": 47.2215,
      "lon": 8.5452,
      "kind": "treaty",
      "year": 1529,
      "note": "Armies meet, no battle; First Land Peace 26 June 1529"
     },
     {
      "name": "Basel Minster",
      "lat": 47.5566,
      "lon": 7.5927,
      "kind": "town",
      "year": 1529,
      "note": "Reformed February 1529 (Oecolampadius)"
     },
     {
      "name": "Schaffhausen",
      "lat": 47.6969,
      "lon": 8.6339,
      "kind": "town",
      "year": 1529,
      "note": "Reformed 1529"
     },
     {
      "name": "Zurich, Grossmünster",
      "lat": 47.3701,
      "lon": 8.5439,
      "kind": "town",
      "year": 1519,
      "note": "Zwingli preaches here from 1519"
     },
     {
      "name": "Bern Minster",
      "lat": 46.9472,
      "lon": 7.4511,
      "kind": "town",
      "year": 1528,
      "note": "Disputation of Bern, January 1528"
     }
    ]
   },
   {
    "year": 1531,
    "tick": "1531",
    "title": "Second Kappel War",
    "text": [
     "Zurich wants Reformed preaching in the five inner cantons too. In May 1531 Zurich and Bern stop the sale of grain and salt to them. The five cantons answer with war. On 11 October 1531 they defeat Zurich at Kappel. Zwingli dies in the battle. A second Catholic victory follows at the Gubel on 24 October.",
     "The Second Land Peace (20 November 1531) fixes faith by place: each canton keeps its own faith. In the common lordships, parishes may go back to the Catholic faith, but not the other way. The Freie Ämter, Bremgarten and Mellingen become Catholic again at once; so do Sargans and most of the abbot's lands.",
     "Thurgau, the Rheintal and the County of Baden get mixed parishes, often with one church for both faiths. Solothurn decides for the Catholic side in 1532–1533. This map shows the order that lasts, with small changes, until 1712."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Orbe and Grandson",
      "kind": "mixed",
      "label": "Orbe and Grandson (ruled by Bern and Fribourg): parishes vote one by one",
      "sel": {
       "munis": [
        5757,
        5561
       ]
      }
     },
     {
      "name": "Pays-d'Enhaut",
      "kind": "catholic",
      "label": "Pays-d'Enhaut: county of Gruyère, Catholic until Bern takes it in 1555",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525); outer parts Reformed, inner parts Catholic",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands: Reformed",
      "sel": {
       "cantons": [
        "BE"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic cantons",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "mixed",
      "label": "Laufen and Birseck (bishop of Basel): partly Reformed",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands, Vaud under Savoy",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "VD"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Kappel (Zwingli memorial)",
      "lat": 47.2323,
      "lon": 8.5269,
      "kind": "battle",
      "year": 1531,
      "note": "11 Oct 1531: Catholics win, Zwingli killed"
     },
     {
      "name": "Gubel",
      "lat": 47.1619,
      "lon": 8.5745,
      "kind": "battle",
      "year": 1531,
      "note": "24 Oct 1531: second Catholic victory"
     },
     {
      "name": "Solothurn",
      "lat": 47.2088,
      "lon": 7.5323,
      "kind": "town",
      "year": 1533,
      "note": "Stays Catholic after 1531"
     }
    ]
   },
   {
    "year": 1536,
    "tick": "1536",
    "title": "Farel, Vaud and Geneva",
    "text": [
     "After 1531 the Reformation grows in the west. Guillaume Farel preaches in French-speaking lands with Bern's support. Neuchâtel becomes Reformed in 1530; only Le Landeron and Cressier stay Catholic.",
     "Geneva has fought for its freedom from Savoy and its bishop. On 21 May 1536 its citizens vote to live by the Gospel. In the same year Bern conquers Vaud from Savoy. After a debate in Lausanne in October 1536, Bern orders the Reformation in all of Vaud.",
     "In the lands that Bern and Fribourg rule together (Orbe, Echallens, Grandson) each parish votes on the Mass. Some villages around Echallens stay Catholic until today. Fribourg's own new lands stay Catholic."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Orbe and Grandson",
      "kind": "mixed",
      "label": "Orbe and Grandson (ruled by Bern and Fribourg): parishes vote one by one",
      "sel": {
       "munis": [
        5757,
        5561
       ]
      }
     },
     {
      "name": "Pays-d'Enhaut",
      "kind": "catholic",
      "label": "Pays-d'Enhaut: county of Gruyère, Catholic until Bern takes it in 1555",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex (Bernese)",
      "kind": "reformed",
      "label": "Pays de Gex: ruled by Bern 1536–1564, Reformed",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525); outer parts Reformed, inner parts Catholic",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic cantons",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "mixed",
      "label": "Laufen and Birseck (bishop of Basel): partly Reformed",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Neuchâtel",
      "lat": 46.9921,
      "lon": 6.9289,
      "kind": "town",
      "year": 1530,
      "note": "Reformed 1530 (Farel)"
     },
     {
      "name": "Lausanne Cathedral",
      "lat": 46.5225,
      "lon": 6.6355,
      "kind": "town",
      "year": 1536,
      "note": "Disputation of Lausanne, October 1536"
     },
     {
      "name": "Geneva, St-Pierre",
      "lat": 46.2011,
      "lon": 6.1484,
      "kind": "town",
      "year": 1536,
      "note": "Citizens vote for the Reformation, 21 May 1536"
     },
     {
      "name": "Bern Minster",
      "lat": 46.9472,
      "lon": 7.4511,
      "kind": "town",
      "year": 1528,
      "note": "Disputation of Bern, January 1528"
     }
    ]
   },
   {
    "year": 1541,
    "tick": "1541",
    "title": "Calvin's Geneva",
    "text": [
     "The French lawyer John Calvin flees France. In 1536 he comes to Geneva, and Farel asks him to stay. The council does not support them, and in 1538 both must leave. Calvin works in Strasbourg with Martin Bucer.",
     "In September 1541 the council asks Calvin to return. In November it accepts his church order (Ordonnances ecclésiastiques). Pastors and a church court (consistory) teach and control how people live.",
     "Bern rules Vaud and, until the 1560s, lands south and west of the lake (Chablais, Gex). In 1549 Zurich and Geneva agree on the Lord's Supper (Consensus Tigurinus). This joins the Zwingli and Calvin lines into one Reformed church family."
    ],
    "view": [
     [
      45.95,
      5.85
     ],
     [
      47.15,
      7.35
     ]
    ],
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Orbe and Grandson",
      "kind": "mixed",
      "label": "Orbe and Grandson (ruled by Bern and Fribourg): parishes vote one by one",
      "sel": {
       "munis": [
        5757,
        5561
       ]
      }
     },
     {
      "name": "Pays-d'Enhaut",
      "kind": "catholic",
      "label": "Pays-d'Enhaut: county of Gruyère, Catholic until Bern takes it in 1555",
      "sel": {
       "munis": [
        5841,
        5842,
        5843
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex (Bernese)",
      "kind": "reformed",
      "label": "Pays de Gex: ruled by Bern 1536–1564, Reformed",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525); outer parts Reformed, inner parts Catholic",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic cantons",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "mixed",
      "label": "Laufen and Birseck (bishop of Basel): partly Reformed",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Geneva, St-Pierre",
      "lat": 46.2011,
      "lon": 6.1484,
      "kind": "town",
      "year": 1536,
      "note": "Citizens vote for the Reformation, 21 May 1536"
     },
     {
      "name": "Lausanne Cathedral",
      "lat": 46.5225,
      "lon": 6.6355,
      "kind": "town",
      "year": 1536,
      "note": "Disputation of Lausanne, October 1536"
     },
     {
      "name": "Thonon",
      "lat": 46.3705,
      "lon": 6.4793,
      "kind": "town",
      "year": 1536,
      "note": "Bernese 1536 until the late 1560s"
     },
     {
      "name": "Gex",
      "lat": 46.3333,
      "lon": 6.0578,
      "kind": "town",
      "year": 1536,
      "note": "Bernese 1536–1564"
     },
     {
      "name": "Neuchâtel",
      "lat": 46.9921,
      "lon": 6.9289,
      "kind": "town",
      "year": 1530,
      "note": "Reformed 1530 (Farel)"
     }
    ]
   },
   {
    "year": 1559,
    "tick": "1559 Europe",
    "title": "The Swiss Reformation in Europe",
    "text": [
     "The Reformation starts in 1517 with Martin Luther in Wittenberg. Zwingli in Zurich and Calvin in Geneva start a second line, the Reformed churches. Strasbourg, with Martin Bucer, links both lines.",
     "In 1559 Geneva opens its Academy, a school for pastors from all of Europe. About 30 printers in Geneva print Reformed books, many for France. Reformed churches grow in France, the Netherlands, Scotland, Hungary and Poland. In 1559 the French Reformed churches hold their first national synod in Paris.",
     "The Peace of Augsburg (1555) protects only Lutherans in the Empire, not the Reformed. The map shows Europe about 1560 only roughly: German states and whole countries are coloured as one."
    ],
    "view": "europe",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex (Bernese)",
      "kind": "reformed",
      "label": "Pays de Gex: ruled by Bern 1536–1564, Reformed",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525); outer parts Reformed, inner parts Catholic",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Catholic cantons",
      "kind": "catholic",
      "label": "Catholic cantons",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "mixed",
      "label": "Laufen and Birseck (bishop of Basel): partly Reformed",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     },
     {
      "name": "Protestant Europe",
      "kind": "reformed",
      "label": "Mostly Protestant (Lutheran, Reformed or Anglican) about 1560 — rough",
      "sel": {},
      "regions": [
       "DEU-1601",
       "DEU-1600",
       "DEU-1577",
       "DEU-3487",
       "DEU-1599",
       "DEU-3488",
       "DEU-1579",
       "DEU-1578",
       "DEU-1575",
       "DEU-1576",
       "DEU-1574"
      ],
      "countries": [
       "GBR",
       "DNK",
       "NOR",
       "SWE",
       "FIN",
       "EST",
       "LVA"
      ]
     },
     {
      "name": "Divided Europe",
      "kind": "mixed",
      "label": "Divided: Catholic rulers or lands next to strong Protestant groups (rough)",
      "sel": {},
      "regions": [
       "DEU-1591",
       "DEU-1573",
       "DEU-1580",
       "DEU-1572",
       "DEU-1581"
      ],
      "countries": [
       "NLD",
       "BEL",
       "AUT",
       "CZE",
       "HUN",
       "POL",
       "LTU",
       "SVK"
      ]
     },
     {
      "name": "Catholic Europe",
      "kind": "catholic",
      "label": "Mostly Catholic (France with a growing Reformed minority)",
      "sel": {},
      "countries": [
       "FRA",
       "ESP",
       "PRT",
       "ITA",
       "IRL",
       "SVN",
       "HRV",
       "LUX",
       "MCO",
       "SMR",
       "AND",
       "MLT"
      ]
     }
    ],
    "places": [
     {
      "name": "Wittenberg",
      "lat": 51.8664,
      "lon": 12.6464,
      "kind": "town",
      "year": 1517,
      "note": "Luther's theses, 31 Oct 1517"
     },
     {
      "name": "Strasbourg",
      "lat": 48.5818,
      "lon": 7.7509,
      "kind": "town",
      "year": 1538,
      "note": "Bucer; Calvin lives here 1538–1541"
     },
     {
      "name": "Zurich, Grossmünster",
      "lat": 47.3701,
      "lon": 8.5439,
      "kind": "town",
      "year": 1519,
      "note": "Zwingli preaches here from 1519"
     },
     {
      "name": "Geneva, St-Pierre",
      "lat": 46.2011,
      "lon": 6.1484,
      "kind": "town",
      "year": 1536,
      "note": "Citizens vote for the Reformation, 21 May 1536"
     },
     {
      "name": "Augsburg",
      "lat": 48.3668,
      "lon": 10.8987,
      "kind": "treaty",
      "year": 1555,
      "note": "Peace of Augsburg 1555 (Lutherans only)"
     },
     {
      "name": "Paris",
      "lat": 48.8566,
      "lon": 2.3522,
      "kind": "town",
      "year": 1559,
      "note": "First synod of French Reformed churches 1559"
     },
     {
      "name": "Edinburgh",
      "lat": 55.9533,
      "lon": -3.1883,
      "kind": "town",
      "year": 1560,
      "note": "Knox, back from Geneva, leads the Scottish Reformation"
     }
    ]
   },
   {
    "year": 1586,
    "tick": "1586",
    "title": "Catholic reform, Golden League",
    "text": [
     "After the Council of Trent (1545–1563) the Catholic Church reforms itself. Cardinal Charles Borromeo, archbishop of Milan, is protector of the Swiss Catholics. In 1579 he founds the Collegium Helveticum in Milan to train Swiss priests.",
     "Jesuits open colleges in Lucerne (1577) and Fribourg (1582), where Petrus Canisius works. Capuchin friars settle in Altdorf (1581) and many other towns. From 1586 a papal envoy (nuncio) lives in Lucerne.",
     "On 5 October 1586 the seven Catholic cantons sign the Golden League in Lucerne. They promise to keep the Catholic faith and to help each other. The bishop of Basel brings Laufen and Birseck back to the Catholic faith. Bern now rules the Pays-d'Enhaut (1555), which becomes Reformed."
    ],
    "view": [
     [
      45.35,
      5.9
     ],
     [
      47.9,
      10.6
     ]
    ],
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex",
      "kind": "mixed",
      "label": "Pays de Gex: Savoy, then France from 1601; Reformed still tolerated",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell",
      "kind": "mixed",
      "label": "Appenzell: each parish chooses (1525); outer parts Reformed, inner parts Catholic",
      "sel": {
       "cantons": [
        "AR",
        "AI"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Golden League",
      "kind": "catholic",
      "label": "Seven Catholic cantons (Golden League 1586)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "mixed",
      "label": "Laufen and Birseck (bishop of Basel): brought back to the Catholic faith from the 1580s",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Lucerne",
      "lat": 47.0505,
      "lon": 8.3064,
      "kind": "treaty",
      "year": 1586,
      "note": "Golden League signed 5 Oct 1586; Jesuit college 1577"
     },
     {
      "name": "Milan, Collegium Helveticum",
      "lat": 45.4703,
      "lon": 9.1982,
      "kind": "town",
      "year": 1579,
      "note": "Borromeo trains Swiss priests here"
     },
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.162,
      "kind": "town",
      "year": 1580,
      "note": "Petrus Canisius comes in 1580; Jesuit college 1582"
     },
     {
      "name": "Altdorf",
      "lat": 46.8806,
      "lon": 8.6444,
      "kind": "town",
      "year": 1581,
      "note": "First Capuchin friary north of the Alps in Switzerland, 1581"
     }
    ]
   },
   {
    "year": 1597,
    "tick": "1597",
    "title": "Appenzell splits in two",
    "text": [
     "Since 1525 Appenzell has two faiths: the outer parishes are Reformed, the inner parishes Catholic. After 1580 the conflict grows, for example about the Capuchins and a Catholic alliance with Spain.",
     "In 1597 the land splits. Catholic Innerrhoden has its seat in Appenzell; Reformed Ausserrhoden meets in Trogen and Hundwil. Each half has its own Landsgemeinde. Innerrhoden joins the Golden League in 1600.",
     "Glarus does not split. Its Catholics and Reformed share some offices and the church in Glarus. From 1623 each side holds its own Landsgemeinde, the Reformed in Schwanden and the Catholics in Näfels."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex",
      "kind": "mixed",
      "label": "Pays de Gex: Savoy, then France from 1601; Reformed still tolerated",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell Innerrhoden",
      "kind": "catholic",
      "label": "Appenzell Innerrhoden: Catholic half-canton from 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Appenzell Ausserrhoden",
      "kind": "reformed",
      "label": "Appenzell Ausserrhoden: Reformed half-canton from 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Three Leagues",
      "kind": "mixed",
      "label": "Three Leagues (Graubünden): each commune chooses its faith (Ilanz Articles 1526)",
      "sel": {
       "cantons": [
        "GR"
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Golden League",
      "kind": "catholic",
      "label": "Seven Catholic cantons (Golden League 1586)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "catholic",
      "label": "Laufen and Birseck (bishop of Basel): brought back to the Catholic faith from the 1580s",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Appenzell",
      "lat": 47.331,
      "lon": 9.4091,
      "kind": "town",
      "year": 1597,
      "note": "Capital of Catholic Innerrhoden"
     },
     {
      "name": "Trogen",
      "lat": 47.4078,
      "lon": 9.4646,
      "kind": "town",
      "year": 1597,
      "note": "Seat of Reformed Ausserrhoden"
     },
     {
      "name": "Hundwil",
      "lat": 47.3651,
      "lon": 9.3176,
      "kind": "town",
      "year": 1597,
      "note": "Ausserrhoden Landsgemeinde"
     },
     {
      "name": "Näfels",
      "lat": 47.0985,
      "lon": 9.0636,
      "kind": "town",
      "year": 1623,
      "note": "Catholic Landsgemeinde of Glarus from 1623"
     },
     {
      "name": "Schwanden",
      "lat": 46.9963,
      "lon": 9.0757,
      "kind": "town",
      "year": 1623,
      "note": "Reformed Landsgemeinde of Glarus from 1623"
     }
    ]
   },
   {
    "year": 1639,
    "tick": "1620–1639",
    "title": "Graubünden: faith by commune",
    "text": [
     "In the Three Leagues there is no ruler who decides the faith. Since the Ilanz Articles (1526) each commune elects its pastor and so chooses its faith. Chur, the Prättigau, the Schams and the Heinzenberg turn Reformed first; the Engadine follows after 1550.",
     "In the Thirty Years' War (1618–1648) Graubünden is fought over by Spain, Austria and France. In July 1620 Catholics in the Valtellina kill hundreds of Reformed. Austrian troops try to make the Prättigau and the Lower Engadine Catholic again, without success.",
     "By about 1640 the map is fixed and stays almost the same until 1803. The Surselva, the Oberhalbstein and the Misox are Catholic. Some communes have both faiths, for example Poschiavo, Brusio, the Vier Dörfer near Chur and Val Müstair."
    ],
    "view": [
     [
      45.95,
      8.55
     ],
     [
      47.15,
      10.6
     ]
    ],
    "layers": [
     {
      "name": "Valtellina",
      "kind": "catholic",
      "label": "Valtellina (subject land of the Three Leagues, today Italy): Catholic only from 1620/1639",
      "sel": {},
      "regions": [
       "ITA-5444"
      ]
     },
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex",
      "kind": "mixed",
      "label": "Pays de Gex: Savoy, then France from 1601; Reformed still tolerated",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell Innerrhoden",
      "kind": "catholic",
      "label": "Appenzell Innerrhoden: Catholic half-canton from 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Appenzell Ausserrhoden",
      "kind": "reformed",
      "label": "Appenzell Ausserrhoden: Reformed half-canton from 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Graubuenden: mixed communes",
      "kind": "mixed",
      "label": "Graubünden: commune with both faiths or with Catholic and Reformed villages (about 1640)",
      "sel": {
       "munis": [
        3543,
        3551,
        3561,
        3752,
        3847,
        3946,
        3947,
        3945,
        3911,
        3981,
        3619,
        3988,
        3661,
        3673
       ]
      }
     },
     {
      "name": "Graubuenden: Catholic communes",
      "kind": "catholic",
      "label": "Graubünden: Catholic commune (about 1640)",
      "sel": {
       "munis": [
        3542,
        3513,
        3514,
        3506,
        3721,
        3722,
        3723,
        3982,
        3572,
        3575,
        3618,
        3983,
        3581,
        3582,
        3985,
        3987,
        3986,
        3603
       ],
       "districts": [
        1847
       ]
      }
     },
     {
      "name": "Graubuenden: Reformed communes",
      "kind": "reformed",
      "label": "Graubünden: Reformed commune (about 1640)",
      "sel": {
       "munis": [
        3544,
        3762,
        3764,
        3746,
        3731,
        3732,
        3733,
        3734,
        3951,
        3952,
        3953,
        3954,
        3955,
        3781,
        3792,
        3782,
        3785,
        3783,
        3784,
        3788,
        3786,
        3789,
        3790,
        3787,
        3791,
        3901,
        3921,
        3851,
        3861,
        3862,
        3961,
        3863,
        3871,
        3881,
        3882,
        3891,
        3962,
        3972,
        3672,
        3701,
        3681,
        3713,
        3662,
        3633,
        3663,
        3715,
        3714,
        3711,
        3637,
        3638,
        3640,
        3695,
        3668,
        3669,
        3670,
        3712
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Golden League",
      "kind": "catholic",
      "label": "Seven Catholic cantons (Golden League 1586)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "catholic",
      "label": "Laufen and Birseck (bishop of Basel): brought back to the Catholic faith from the 1580s",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Ilanz",
      "lat": 46.7742,
      "lon": 9.2044,
      "kind": "town",
      "year": 1526,
      "note": "Ilanz Articles 1524 and 1526"
     },
     {
      "name": "Chur",
      "lat": 46.8508,
      "lon": 9.532,
      "kind": "town",
      "year": 1527,
      "note": "Reformed under Comander; seat of the Catholic bishop"
     },
     {
      "name": "Tirano",
      "lat": 46.2157,
      "lon": 10.1732,
      "kind": "place",
      "year": 1620,
      "note": "Valtellina massacre, July 1620"
     }
    ]
   },
   {
    "year": 1656,
    "tick": "1656",
    "title": "First Villmergen War",
    "text": [
     "In Arth (Schwyz) some families secretly keep the Reformed faith. In September 1655 a group flees to Zurich. Schwyz executes four Reformed who stay. Zurich and Bern declare war on 6 January 1656.",
     "Zurich besieges Rapperswil but cannot take it. On 24 January 1656 troops from Lucerne and Zug surprise the Bernese army at Villmergen and win. The Reformed plan to take the Freie Ämter, which separate Zurich from Bern, fails.",
     "The Third Land Peace (7 March 1656) restores the old order of 1531. Each canton stays master of the faith in its own land. The Catholic cantons keep their lead in the common lordships."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex",
      "kind": "mixed",
      "label": "Pays de Gex: Savoy, then France from 1601; Reformed still tolerated",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell Innerrhoden",
      "kind": "catholic",
      "label": "Appenzell Innerrhoden: Catholic half-canton from 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Appenzell Ausserrhoden",
      "kind": "reformed",
      "label": "Appenzell Ausserrhoden: Reformed half-canton from 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Graubuenden: mixed communes",
      "kind": "mixed",
      "label": "Graubünden: commune with both faiths or with Catholic and Reformed villages (about 1640)",
      "sel": {
       "munis": [
        3543,
        3551,
        3561,
        3752,
        3847,
        3946,
        3947,
        3945,
        3911,
        3981,
        3619,
        3988,
        3661,
        3673
       ]
      }
     },
     {
      "name": "Graubuenden: Catholic communes",
      "kind": "catholic",
      "label": "Graubünden: Catholic commune (about 1640)",
      "sel": {
       "munis": [
        3542,
        3513,
        3514,
        3506,
        3721,
        3722,
        3723,
        3982,
        3572,
        3575,
        3618,
        3983,
        3581,
        3582,
        3985,
        3987,
        3986,
        3603
       ],
       "districts": [
        1847
       ]
      }
     },
     {
      "name": "Graubuenden: Reformed communes",
      "kind": "reformed",
      "label": "Graubünden: Reformed commune (about 1640)",
      "sel": {
       "munis": [
        3544,
        3762,
        3764,
        3746,
        3731,
        3732,
        3733,
        3734,
        3951,
        3952,
        3953,
        3954,
        3955,
        3781,
        3792,
        3782,
        3785,
        3783,
        3784,
        3788,
        3786,
        3789,
        3790,
        3787,
        3791,
        3901,
        3921,
        3851,
        3861,
        3862,
        3961,
        3863,
        3871,
        3881,
        3882,
        3891,
        3962,
        3972,
        3672,
        3701,
        3681,
        3713,
        3662,
        3633,
        3663,
        3715,
        3714,
        3711,
        3637,
        3638,
        3640,
        3695,
        3668,
        3669,
        3670,
        3712
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Golden League",
      "kind": "catholic",
      "label": "Seven Catholic cantons (Golden League 1586)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "catholic",
      "label": "Laufen and Birseck (bishop of Basel): brought back to the Catholic faith from the 1580s",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Arth",
      "lat": 47.0634,
      "lon": 8.5239,
      "kind": "town",
      "year": 1655,
      "note": "Secret Reformed flee to Zurich, 1655"
     },
     {
      "name": "Villmergen",
      "lat": 47.3471,
      "lon": 8.2438,
      "kind": "battle",
      "year": 1656,
      "note": "24 Jan 1656: Lucerne and Zug beat Bern"
     },
     {
      "name": "Rapperswil",
      "lat": 47.2267,
      "lon": 8.8184,
      "kind": "town",
      "year": 1656,
      "note": "Zurich besieges it in vain"
     }
    ]
   },
   {
    "year": 1712,
    "tick": "1712",
    "title": "Villmergen and the Peace of Aarau",
    "text": [
     "The Toggenburg, mostly Reformed, rises against its lord, the Catholic abbot of St. Gallen. Zurich and Bern support the Toggenburg; the five inner cantons support the abbot. In 1712 Zurich and Bern occupy Thurgau, take Wil and win near Bremgarten on 26 May.",
     "On 25 July 1712 the Bernese defeat the inner cantons at Villmergen. More than 3000 men die. The Fourth Land Peace, signed in Aarau on 11 August 1712, ends the war.",
     "Both faiths are now equal in the common lordships, with clear rules for shared churches. The Catholic cantons lose their part in the County of Baden and the lower Freie Ämter; Bern joins the rule of Thurgau, the Rheintal, Sargans and the upper Freie Ämter. The map of faiths stays, but the Catholic lead ends."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Echallens villages",
      "kind": "mixed",
      "label": "Echallens and nearby villages (ruled by Bern and Fribourg): Catholic or shared",
      "sel": {
       "munis": [
        5518,
        5511,
        5514,
        5537,
        5533,
        5535
       ]
      }
     },
     {
      "name": "Geneva",
      "kind": "reformed",
      "label": "Geneva and its villages: Reformed from 1536",
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
      "name": "Gex",
      "kind": "catholic",
      "label": "Pays de Gex: French; Reformed worship forbidden by 1685",
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
      "name": "Le Landeron and Cressier",
      "kind": "catholic",
      "label": "Le Landeron and Cressier: stay Catholic inside Reformed Neuchâtel",
      "sel": {
       "munis": [
        6455,
        6452,
        6434
       ]
      }
     },
     {
      "name": "County of Baden: shared parishes",
      "kind": "mixed",
      "label": "County of Baden: parish with both faiths (shared church)",
      "sel": {
       "munis": [
        4324,
        4048,
        243
       ]
      }
     },
     {
      "name": "County of Baden: Reformed parishes",
      "kind": "reformed",
      "label": "County of Baden: Reformed parish",
      "sel": {
       "munis": [
        4320,
        247,
        246,
        87
       ]
      }
     },
     {
      "name": "Rheinau and Ramsen",
      "kind": "catholic",
      "label": "Rheinau abbey and Ramsen (Austrian): Catholic",
      "sel": {
       "munis": [
        38,
        2963
       ]
      }
     },
     {
      "name": "Werdenberg, Sax, Wartau",
      "kind": "reformed",
      "label": "Werdenberg, Sax and Wartau: Reformed",
      "sel": {
       "munis": [
        3271,
        3273,
        3275,
        3274,
        3276
       ]
      }
     },
     {
      "name": "Toggenburg: upper part",
      "kind": "reformed",
      "label": "Toggenburg, upper part: mostly Reformed",
      "sel": {
       "munis": [
        3359,
        3360,
        3352,
        3379
       ]
      }
     },
     {
      "name": "Toggenburg: mixed",
      "kind": "mixed",
      "label": "Toggenburg: Reformed and Catholic villages side by side",
      "sel": {
       "munis": [
        3374,
        3396,
        3407,
        3408,
        3401
       ]
      }
     },
     {
      "name": "Toggenburg: lower part",
      "kind": "catholic",
      "label": "Toggenburg, lower part: mostly Catholic",
      "sel": {
       "munis": [
        3395,
        3393,
        3394,
        3392,
        3405
       ]
      }
     },
     {
      "name": "Town of St. Gallen",
      "kind": "reformed",
      "label": "Town of St. Gallen: Reformed (Vadian, 1527)",
      "sel": {
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Bucheggberg",
      "kind": "reformed",
      "label": "Bucheggberg: Reformed (Bern holds high justice there)",
      "sel": {
       "districts": [
        1103
       ]
      }
     },
     {
      "name": "Oberriet",
      "kind": "catholic",
      "label": "Upper Rheintal: Catholic",
      "sel": {
       "munis": [
        3254
       ]
      }
     },
     {
      "name": "Rheintal",
      "kind": "mixed",
      "label": "Rheintal (common lordship): both faiths, many shared churches",
      "sel": {
       "districts": [
        1723
       ],
       "munis": [
        3237
       ]
      }
     },
     {
      "name": "Appenzell Innerrhoden",
      "kind": "catholic",
      "label": "Appenzell Innerrhoden: Catholic half-canton from 1597",
      "sel": {
       "cantons": [
        "AI"
       ]
      }
     },
     {
      "name": "Appenzell Ausserrhoden",
      "kind": "reformed",
      "label": "Appenzell Ausserrhoden: Reformed half-canton from 1597",
      "sel": {
       "cantons": [
        "AR"
       ]
      }
     },
     {
      "name": "Glarus",
      "kind": "mixed",
      "label": "Glarus: Reformed majority, Catholic minority (Näfels, Oberurnen); shared church in Glarus",
      "sel": {
       "cantons": [
        "GL"
       ]
      }
     },
     {
      "name": "Thurgau",
      "kind": "mixed",
      "label": "Thurgau (common lordship): mostly Reformed, Catholic parishes, 27 shared churches",
      "sel": {
       "cantons": [
        "TG"
       ]
      }
     },
     {
      "name": "Graubuenden: mixed communes",
      "kind": "mixed",
      "label": "Graubünden: commune with both faiths or with Catholic and Reformed villages (about 1640)",
      "sel": {
       "munis": [
        3543,
        3551,
        3561,
        3752,
        3847,
        3946,
        3947,
        3945,
        3911,
        3981,
        3619,
        3988,
        3661,
        3673
       ]
      }
     },
     {
      "name": "Graubuenden: Catholic communes",
      "kind": "catholic",
      "label": "Graubünden: Catholic commune (about 1640)",
      "sel": {
       "munis": [
        3542,
        3513,
        3514,
        3506,
        3721,
        3722,
        3723,
        3982,
        3572,
        3575,
        3618,
        3983,
        3581,
        3582,
        3985,
        3987,
        3986,
        3603
       ],
       "districts": [
        1847
       ]
      }
     },
     {
      "name": "Graubuenden: Reformed communes",
      "kind": "reformed",
      "label": "Graubünden: Reformed commune (about 1640)",
      "sel": {
       "munis": [
        3544,
        3762,
        3764,
        3746,
        3731,
        3732,
        3733,
        3734,
        3951,
        3952,
        3953,
        3954,
        3955,
        3781,
        3792,
        3782,
        3785,
        3783,
        3784,
        3788,
        3786,
        3789,
        3790,
        3787,
        3791,
        3901,
        3921,
        3851,
        3861,
        3862,
        3961,
        3863,
        3871,
        3881,
        3882,
        3891,
        3962,
        3972,
        3672,
        3701,
        3681,
        3713,
        3662,
        3633,
        3663,
        3715,
        3714,
        3711,
        3637,
        3638,
        3640,
        3695,
        3668,
        3669,
        3670,
        3712
       ]
      }
     },
     {
      "name": "Vaud and Bernese lands",
      "kind": "reformed",
      "label": "Bern and its lands (Aargau, Vaud from 1536): Reformed",
      "sel": {
       "cantons": [
        "BE",
        "VD"
       ],
       "districts": [
        1901,
        1904,
        1905,
        1907,
        1910,
        2221,
        2604
       ],
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
      "name": "Zurich",
      "kind": "reformed",
      "label": "Zurich: Reformed",
      "sel": {
       "cantons": [
        "ZH"
       ]
      }
     },
     {
      "name": "Basel",
      "kind": "reformed",
      "label": "Basel: Reformed (1529)",
      "sel": {
       "cantons": [
        "BS"
       ],
       "districts": [
        1303,
        1304,
        1305
       ],
       "munis": [
        2770,
        2769,
        2766,
        2765,
        2767,
        2764
       ]
      }
     },
     {
      "name": "Schaffhausen",
      "kind": "reformed",
      "label": "Schaffhausen: Reformed (1529)",
      "sel": {
       "cantons": [
        "SH"
       ]
      }
     },
     {
      "name": "Neuchâtel",
      "kind": "reformed",
      "label": "Neuchâtel: Reformed (1530, Farel)",
      "sel": {
       "cantons": [
        "NE"
       ]
      }
     },
     {
      "name": "Golden League",
      "kind": "catholic",
      "label": "Seven Catholic cantons (Golden League 1586)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO"
       ]
      }
     },
     {
      "name": "Laufen and Birseck",
      "kind": "catholic",
      "label": "Laufen and Birseck (bishop of Basel): brought back to the Catholic faith from the 1580s",
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
      "name": "Other Catholic lands",
      "kind": "catholic",
      "label": "Catholic: Valais, bishopric of Basel, Ticino, Fricktal, Catholic common lordships and abbey lands",
      "sel": {
       "cantons": [
        "VS",
        "TI",
        "JU",
        "AG",
        "SG",
        "ZH",
        "GE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Bremgarten",
      "lat": 47.3519,
      "lon": 8.342,
      "kind": "battle",
      "year": 1712,
      "note": "26 May 1712: Reformed win the 'Staudenschlacht'"
     },
     {
      "name": "Villmergen",
      "lat": 47.3471,
      "lon": 8.2438,
      "kind": "battle",
      "year": 1712,
      "note": "25 July 1712: Bern beats the inner cantons"
     },
     {
      "name": "Aarau",
      "lat": 47.3925,
      "lon": 8.0444,
      "kind": "treaty",
      "year": 1712,
      "note": "Fourth Land Peace, 11 Aug 1712"
     },
     {
      "name": "Wil",
      "lat": 47.4615,
      "lon": 9.0455,
      "kind": "town",
      "year": 1712,
      "note": "Zurich takes the abbot's town"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/013328/",
   "https://hls-dhs-dss.ch/de/articles/008903/",
   "https://hls-dhs-dss.ch/de/articles/009807/",
   "https://hls-dhs-dss.ch/de/articles/030550/",
   "https://hls-dhs-dss.ch/de/articles/017187/",
   "https://hls-dhs-dss.ch/de/articles/017177/",
   "https://hls-dhs-dss.ch/de/articles/017173/",
   "https://hls-dhs-dss.ch/de/articles/008910/",
   "https://hls-dhs-dss.ch/de/articles/008911/",
   "https://hls-dhs-dss.ch/de/articles/007374/",
   "https://hls-dhs-dss.ch/de/articles/007393/",
   "https://hls-dhs-dss.ch/de/articles/007642/",
   "https://hls-dhs-dss.ch/fr/articles/007592/",
   "https://kulturforschung.ch/storage/atlasgr/seiten/32_konfessionen.pdf"
  ],
  "notes": "Areas are today's municipalities; many were merged, so one old village with another faith can colour a whole new municipality 'mixed' (e.g. Ilanz/Glion, Domleschg, Cazis, Breil/Brigels, Obersaxen Mundaun, Scuol shown Reformed although Tarasp was Catholic and Austrian). Graubünden communes follow the Atlas Graubünden map 'Konfessionsverhältnisse um 1640' read by eye; the exact commune shown mixed near Laax/Falera was not identified (both drawn Catholic); Trimmis drawn mixed. Thurgau, Rheintal and Glarus are drawn mixed as a whole (HLS: Thurgau mostly Reformed with 27 shared churches); only Oberriet is singled out as Catholic in the Rheintal. Toggenburg: HLS says upper part mostly Reformed, lower part mostly Catholic; the split by municipality (incl. Oberuzwil, Uzwil, Degersheim, Jonschwil) is an estimate. County of Baden: Zurzach, Würenlos, Dietikon as shared and Tegerfelden, Schlieren, Oetwil, Hüttikon as Reformed are from general knowledge, not checked one by one. 1529 step: extent of Reformed parishes in common lordships and abbey lands is approximate; Gaster/Weesen shown Reformed because they joined Zurich's 1531 blockade. Echallens group: Villars-le-Terroir, Bottens, Assens per HLS; Poliez-Pittet and Saint-Barthélemy assumed. Date for Orbe and Grandson becoming Reformed (here 1554) not checked. Laufen/Birseck: re-Catholicisation by bishop Blarer in the 1580s, drawn Catholic from 1597. Gex: rough (Bernese 1536–1564, tolerated Reformed later, Catholic by 1685). Nuncio in Lucerne 'from 1586' and Calvin's arrival month (HLS: June 1536) may differ in other sources. The Villmergen memorial is used for both battles. Europe step is very rough (whole countries, German federal states)."
 },
 {
  "id": "wars-civil",
  "title": "Civil wars: faith and farmers",
  "card": "After the Reformation the Confederates fought each other four times, and in 1653 the farmers rose against the towns.",
  "stops": [
   {
    "year": 1529,
    "tick": "1529",
    "title": "First Kappel War: the milk soup",
    "text": [
     "The Reformation split the Confederates. Zurich, Bern, Basel and Schaffhausen became Protestant (Reformed). The five inner places, Lucerne, Uri, Schwyz, Unterwalden and Zug, stayed Catholic.",
     "In 1529 Schwyz burned a Reformed pastor, Jakob Kaiser. Zurich went to war. The armies met near Kappel, but they did not fight. A story says that soldiers of both sides ate milk soup together.",
     "The First Peace of Kappel (26 June 1529) favoured the Reformed side."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Reformed",
      "kind": "reformed",
      "label": "Reformed places (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "BS",
        "SH"
       ],
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Catholic",
      "kind": "catholic",
      "label": "Catholic places (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO",
        "VS"
       ]
      }
     },
     {
      "name": "Mixed",
      "kind": "mixed",
      "label": "Mixed or divided areas (rough)",
      "sel": {
       "cantons": [
        "GL",
        "AR",
        "AI",
        "TG",
        "SG",
        "GR",
        "AG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Kappel am Albis",
      "lat": 47.229,
      "lon": 8.5285,
      "kind": "treaty",
      "year": 1529,
      "note": "First Peace of Kappel, no battle"
     }
    ]
   },
   {
    "year": 1531,
    "tick": "1531 Kappel",
    "title": "Kappel: Zwingli is killed",
    "text": [
     "Zurich and Bern blocked food supplies to the Catholic places. In October 1531 the five Catholic places attacked.",
     "On 11 October 1531 they beat the Zurich army at Kappel. About 500 men from Zurich died, among them the reformer Huldrych Zwingli, who went with the army as a preacher.",
     "On 24 October the Catholics beat Zurich troops again at the Gubel, near Menzingen."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Reformed",
      "kind": "reformed",
      "label": "Reformed places (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "BS",
        "SH"
       ],
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Catholic",
      "kind": "catholic",
      "label": "Catholic places (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO",
        "VS"
       ]
      }
     },
     {
      "name": "Mixed",
      "kind": "mixed",
      "label": "Mixed or divided areas (rough)",
      "sel": {
       "cantons": [
        "GL",
        "AR",
        "AI",
        "TG",
        "SG",
        "GR",
        "AG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Kappel am Albis",
      "lat": 47.229,
      "lon": 8.5285,
      "kind": "battle",
      "year": 1531,
      "note": "Catholics win; Zwingli killed"
     },
     {
      "name": "Gubel",
      "lat": 47.18,
      "lon": 8.596,
      "kind": "battle",
      "year": 1531,
      "note": "Catholics win"
     }
    ]
   },
   {
    "year": 1531,
    "tick": "1531 Peace",
    "title": "Second Peace of Kappel",
    "text": [
     "The Second Peace of Kappel (November 1531) said that each place keeps its own faith. In the common subject lands, the Catholic side gained.",
     "The Catholic places now had more power in the Confederation. The border between the faiths stayed almost the same until 1798."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Reformed",
      "kind": "reformed",
      "label": "Reformed places (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "BS",
        "SH"
       ],
       "munis": [
        3203
       ]
      }
     },
     {
      "name": "Catholic",
      "kind": "catholic",
      "label": "Catholic places (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO",
        "VS"
       ]
      }
     },
     {
      "name": "Mixed",
      "kind": "mixed",
      "label": "Mixed or divided areas (rough)",
      "sel": {
       "cantons": [
        "GL",
        "AR",
        "AI",
        "TG",
        "SG",
        "GR",
        "AG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Kappel am Albis",
      "lat": 47.229,
      "lon": 8.5285,
      "kind": "treaty",
      "year": 1531,
      "note": "Second Peace of Kappel"
     },
     {
      "name": "Gubel",
      "lat": 47.18,
      "lon": 8.596,
      "kind": "battle",
      "year": 1531,
      "note": "Catholics win"
     }
    ]
   },
   {
    "year": 1653,
    "tick": "1653 Rising",
    "title": "The Peasants' War",
    "text": [
     "After the Thirty Years' War, prices for farm products fell. Lucerne and Bern also made their coins worth less. The farmers lost money and were angry.",
     "In February 1653 the farmers of the Entlebuch rose against Lucerne. Farmers in the Emmental and in the lands of Solothurn and Basel joined them. In May 1653 they swore an alliance at Huttwil. They wanted to speak to the town governments as equals.",
     "This time Catholic and Reformed farmers fought together, against the town lords."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Rising farmers",
      "kind": "other",
      "label": "Areas where the farmers rose (rough)",
      "sel": {
       "districts": [
        316,
        315,
        314,
        245,
        244,
        1101,
        1102,
        1105,
        1106,
        1108,
        1303,
        1304,
        1305,
        1910,
        1907,
        1901,
        1905
       ]
      }
     },
     {
      "name": "Town governments",
      "kind": "confederates",
      "label": "Lands of Lucerne, Bern, Solothurn and Basel (rough)",
      "sel": {
       "cantons": [
        "LU",
        "BE",
        "SO",
        "BS",
        "BL",
        "AG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Huttwil",
      "lat": 47.115,
      "lon": 7.848,
      "kind": "treaty",
      "year": 1653,
      "note": "Farmers' alliance of Huttwil"
     },
     {
      "name": "Entlebuch",
      "lat": 46.993,
      "lon": 8.064,
      "kind": "place",
      "year": 1653,
      "note": "Start of the rising"
     }
    ]
   },
   {
    "year": 1653,
    "tick": "1653 Defeat",
    "title": "Wohlenschwil and Herzogenbuchsee",
    "text": [
     "The Diet (the meeting of the Confederate places) sent an army. On 3 June 1653 it beat the farmers at Wohlenschwil. A few days later Bernese troops beat the rest of the farmers' army at Herzogenbuchsee, and the village burned.",
     "The farmers' leader, Niklaus Leuenberger, was betrayed and executed in Bern with other leaders. The town lords won, but after this they were more careful with new taxes."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Rising farmers",
      "kind": "other",
      "label": "Areas where the farmers rose (rough)",
      "sel": {
       "districts": [
        316,
        315,
        314,
        245,
        244,
        1101,
        1102,
        1105,
        1106,
        1108,
        1303,
        1304,
        1305,
        1910,
        1907,
        1901,
        1905
       ]
      }
     },
     {
      "name": "Town governments",
      "kind": "confederates",
      "label": "Lands of Lucerne, Bern, Solothurn and Basel (rough)",
      "sel": {
       "cantons": [
        "LU",
        "BE",
        "SO",
        "BS",
        "BL",
        "AG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Wohlenschwil",
      "lat": 47.414,
      "lon": 8.258,
      "kind": "battle",
      "year": 1653,
      "note": "Diet army beats the farmers"
     },
     {
      "name": "Herzogenbuchsee",
      "lat": 47.188,
      "lon": 7.706,
      "kind": "battle",
      "year": 1653,
      "note": "Bern beats the farmers"
     },
     {
      "name": "Huttwil",
      "lat": 47.115,
      "lon": 7.848,
      "kind": "treaty",
      "year": 1653,
      "note": "Farmers' alliance"
     }
    ]
   },
   {
    "year": 1656,
    "tick": "1656",
    "title": "First Villmergen War",
    "text": [
     "In 1655 Schwyz punished Reformed people in Arth, and some fled to Zurich. Zurich and Bern wanted to change the Peace of Kappel by force.",
     "Zurich laid siege to Rapperswil but could not take it. On 24 January 1656 the army of Lucerne and the inner places beat the Bernese army at Villmergen.",
     "The Third Peace of Baden (March 1656) kept the old rules. The Catholic places kept their stronger position."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Reformed",
      "kind": "reformed",
      "label": "Reformed side: Zurich, Bern, Schaffhausen",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "SH"
       ]
      }
     },
     {
      "name": "Catholic",
      "kind": "catholic",
      "label": "Catholic side: the five inner places",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG"
       ]
      }
     },
     {
      "name": "Others",
      "kind": "other",
      "label": "Other places, not fighting (rough)",
      "sel": {
       "cantons": [
        "FR",
        "SO",
        "BS",
        "GL",
        "AR",
        "AI",
        "TG",
        "SG",
        "AG",
        "VS",
        "GR"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Villmergen",
      "lat": 47.348,
      "lon": 8.243,
      "kind": "battle",
      "year": 1656,
      "note": "Catholics beat Bern"
     },
     {
      "name": "Rapperswil",
      "lat": 47.226,
      "lon": 8.818,
      "kind": "town",
      "year": 1656,
      "note": "Zurich siege fails"
     }
    ]
   },
   {
    "year": 1712,
    "tick": "1712",
    "title": "Second Villmergen War",
    "text": [
     "The war started in the Toggenburg, where people rose against their lord, the abbot of St. Gallen. Zurich and Bern supported them. The five Catholic places took the abbot's side.",
     "On 25 July 1712 Bern beat the Catholic army at Villmergen. In the Peace of Aarau (11 August 1712) the Catholics lost their share in ruling the county of Baden and the lower Freie Ämter.",
     "Now Zurich and Bern were the strongest powers in the Confederation. Both faiths had equal rights in the common lands."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Baden and lower Freie Ämter",
      "kind": "reformed",
      "label": "Baden and lower Freie Ämter: now ruled by Zurich, Bern and Glarus (rough)",
      "sel": {
       "districts": [
        1902,
        1903
       ]
      }
     },
     {
      "name": "Toggenburg",
      "kind": "mixed",
      "label": "Toggenburg, where the war began",
      "sel": {
       "districts": [
        1727
       ]
      }
     },
     {
      "name": "Reformed",
      "kind": "reformed",
      "label": "Reformed side: Zurich and Bern",
      "sel": {
       "cantons": [
        "ZH",
        "BE"
       ]
      }
     },
     {
      "name": "Catholic",
      "kind": "catholic",
      "label": "Catholic side: the five inner places",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Villmergen",
      "lat": 47.348,
      "lon": 8.243,
      "kind": "battle",
      "year": 1712,
      "note": "Bern beats the Catholics"
     },
     {
      "name": "Aarau",
      "lat": 47.392,
      "lon": 8.044,
      "kind": "treaty",
      "year": 1712,
      "note": "Peace of Aarau"
     }
    ]
   }
  ],
  "sources": [
   "http://www.hls-dhs-dss.ch/textes/d/D8903.php",
   "https://hls-dhs-dss.ch/de/articles/010447/2014-03-04/",
   "https://hls-dhs-dss.ch/de/articles/007498/2006-03-06/",
   "https://hls-dhs-dss.ch/de/articles/013328/",
   "https://hls-dhs-dss.ch/de/articles/008909/",
   "https://hls-dhs-dss.ch/de/articles/000550/",
   "https://hls-dhs-dss.ch/de/articles/001657/2013-11-20/",
   "https://hls-dhs-dss.ch/de/articles/000565/",
   "https://hls-dhs-dss.ch/de/articles/018844/",
   "https://hls-dhs-dss.ch/de/articles/008910/2014-01-22/",
   "https://hls-dhs-dss.ch/de/articles/008911/2013-02-28/"
  ],
  "notes": "Religion areas are today's cantons and are rough: Glarus, Appenzell, Thurgau, St. Gallen, Graubünden and Aargau were mixed or split; the town of St. Gallen was Reformed. Areas of the 1653 rising are today's districts, rough. The Huttwil oath date differs (4 or 14 May 1653, old and new calendar). The 'milk soup' of 1529 is a traditional story. The exact day of Herzogenbuchsee (June 1653) was not checked in HLS, so the text says 'a few days later'."
 },
 {
  "id": "wars-1798",
  "title": "1798-1799: foreign armies in Switzerland",
  "card": "France ended the old Confederation, and in 1799 French, Austrian and Russian armies fought on Swiss soil.",
  "stops": [
   {
    "year": 1798,
    "tick": "1798 Jan",
    "title": "French troops in Vaud",
    "text": [
     "France had become a republic after the revolution of 1789. In 1797 it took the south of the Bishopric of Basel. Many people in Vaud wanted to be free of Bern's rule.",
     "In January 1798 Vaud declared itself free (the 'Lemanic Republic'). French troops marched in. Other places also freed their subjects. The old order of the Confederation broke down."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "France",
      "kind": "france",
      "label": "France, with the former Bishopric of Basel (rough)",
      "sel": {
       "cantons": [
        "JU"
       ],
       "districts": [
        241,
        242
       ]
      },
      "countries": [
       "FRA"
      ]
     },
     {
      "name": "Vaud",
      "kind": "other",
      "label": "Vaud, now free of Bern, with French troops",
      "sel": {
       "cantons": [
        "VD"
       ]
      }
     },
     {
      "name": "Confederates",
      "kind": "confederates",
      "label": "The old Confederation (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "GL",
        "ZG",
        "FR",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "AI",
        "SG",
        "AG",
        "TG",
        "TI",
        "VS",
        "NE",
        "GR"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Lausanne",
      "lat": 46.5197,
      "lon": 6.6323,
      "kind": "town",
      "year": 1798,
      "note": "Vaud declares itself free"
     }
    ]
   },
   {
    "year": 1798,
    "tick": "1798 March",
    "title": "Grauholz and Neuenegg: Bern falls",
    "text": [
     "Bern decided to fight. French armies attacked from the west and the north.",
     "On 5 March 1798 the French beat the Bernese at Fraubrunnen and then at the Grauholz, north of Bern. On the same day, in the south, Bernese troops beat the French at Neuenegg. But this victory came too late.",
     "Bern gave up, and French troops occupied the town. They took the Bernese state treasure to France."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "France",
      "kind": "france",
      "label": "France, with the former Bishopric of Basel (rough)",
      "sel": {
       "cantons": [
        "JU"
       ],
       "districts": [
        241,
        242
       ]
      },
      "countries": [
       "FRA"
      ]
     },
     {
      "name": "French-held",
      "kind": "france",
      "label": "Land taken by the French (rough)",
      "sel": {
       "cantons": [
        "VD",
        "FR"
       ],
       "districts": [
        243
       ]
      }
     },
     {
      "name": "Bern",
      "kind": "confederates",
      "label": "Bern (rough)",
      "sel": {
       "cantons": [
        "BE"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Fraubrunnen",
      "lat": 47.086,
      "lon": 7.527,
      "kind": "battle",
      "year": 1798,
      "note": "French win"
     },
     {
      "name": "Grauholz",
      "lat": 47.004,
      "lon": 7.505,
      "kind": "battle",
      "year": 1798,
      "note": "French beat Bern"
     },
     {
      "name": "Neuenegg",
      "lat": 46.9,
      "lon": 7.296,
      "kind": "battle",
      "year": 1798,
      "note": "Bern beats the French"
     },
     {
      "name": "Bern",
      "lat": 46.948,
      "lon": 7.4474,
      "kind": "town",
      "year": 1798,
      "note": "Occupied by France"
     }
    ]
   },
   {
    "year": 1798,
    "tick": "1798 April",
    "title": "The Helvetic Republic",
    "text": [
     "On 12 April 1798 the Helvetic Republic was proclaimed in Aarau. It was one state with one constitution, made after the French model. All people now had the same rights; there were no more subject lands.",
     "Schwyz, Uri and Nidwalden refused the new constitution. Their troops, led by Alois Reding of Schwyz, won some fights, for example at Rothenthurm on 2 May 1798. But the French army was too strong, and Schwyz had to accept the constitution."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Resisting",
      "kind": "confederates",
      "label": "Schwyz, Uri, Nidwalden: resisting",
      "sel": {
       "cantons": [
        "SZ",
        "UR",
        "NW"
       ]
      }
     },
     {
      "name": "Helvetic Republic",
      "kind": "france",
      "label": "Helvetic Republic, under French control (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "LU",
        "FR",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "AI",
        "SG",
        "AG",
        "TG",
        "TI",
        "VD",
        "VS",
        "OW",
        "ZG",
        "GL"
       ]
      }
     },
     {
      "name": "France",
      "kind": "france",
      "label": "France (with Geneva and the Jura, rough)",
      "sel": {
       "cantons": [
        "GE",
        "JU"
       ],
       "districts": [
        241,
        242
       ]
      },
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Aarau",
      "lat": 47.392,
      "lon": 8.044,
      "kind": "treaty",
      "year": 1798,
      "note": "Helvetic Republic proclaimed"
     },
     {
      "name": "Rothenthurm",
      "lat": 47.104,
      "lon": 8.676,
      "kind": "battle",
      "year": 1798,
      "note": "Schwyz wins, then gives up"
     },
     {
      "name": "Grauholz",
      "lat": 47.004,
      "lon": 7.505,
      "kind": "battle",
      "year": 1798,
      "note": "French win"
     }
    ]
   },
   {
    "year": 1798,
    "tick": "1798 Sept",
    "title": "Nidwalden: the days of terror",
    "text": [
     "Nidwalden refused to swear an oath to the new state. In September 1798 French troops attacked from the lake and over the Allweg pass.",
     "On 9 September the people of Nidwalden fought hard, but around midday they had to give way. HLS gives about 100 dead fighters from Nidwalden and about as many French. About 300 more men, women and children were killed afterwards. Stans, Stansstad, Buochs and Ennetmoos were burned and destroyed.",
     "People in Nidwalden remembered these days of terror for a long time."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Nidwalden",
      "kind": "confederates",
      "label": "Nidwalden",
      "sel": {
       "cantons": [
        "NW"
       ]
      }
     },
     {
      "name": "Helvetic Republic",
      "kind": "france",
      "label": "Helvetic Republic, under French control (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "LU",
        "FR",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "AI",
        "SG",
        "AG",
        "TG",
        "TI",
        "VD",
        "VS",
        "OW",
        "ZG",
        "GL",
        "SZ",
        "UR"
       ]
      }
     },
     {
      "name": "France",
      "kind": "france",
      "label": "France (rough)",
      "sel": {
       "cantons": [
        "GE",
        "JU"
       ],
       "districts": [
        241,
        242
       ]
      },
      "countries": [
       "FRA"
      ]
     }
    ],
    "places": [
     {
      "name": "Allweg",
      "lat": 46.945,
      "lon": 8.333,
      "kind": "battle",
      "year": 1798,
      "note": "French win against Nidwalden"
     },
     {
      "name": "Stans",
      "lat": 46.958,
      "lon": 8.366,
      "kind": "town",
      "year": 1798,
      "note": "Burned"
     },
     {
      "name": "Stansstad",
      "lat": 46.977,
      "lon": 8.34,
      "kind": "town",
      "year": 1798,
      "note": "Burned"
     },
     {
      "name": "Buochs",
      "lat": 46.974,
      "lon": 8.422,
      "kind": "town",
      "year": 1798,
      "note": "Burned"
     }
    ]
   },
   {
    "year": 1799,
    "tick": "1799 Zurich I",
    "title": "First Battle of Zurich",
    "text": [
     "In 1799 Austria and Russia went to war against France again (the Second Coalition War). Switzerland became a battlefield of foreign armies.",
     "Austrian troops under Archduke Charles came from the east. In early June 1799 they attacked the French under General Masséna at Zurich. The French gave up the town and moved back to a line west of Zurich.",
     "The armies took food, animals and wood from the people. Many villages suffered badly."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Austrian-held",
      "kind": "habsburg",
      "label": "Held by Austria after June 1799 (rough)",
      "sel": {
       "cantons": [
        "GR",
        "SG",
        "AR",
        "AI",
        "TG",
        "SH",
        "GL"
       ],
       "districts": [
        102,
        103,
        104,
        105,
        107,
        108,
        109,
        110,
        112
       ]
      }
     },
     {
      "name": "French-held",
      "kind": "france",
      "label": "Held by France (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO",
        "BS",
        "BL",
        "AG",
        "TI",
        "VD",
        "VS",
        "NE",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Zurich",
      "lat": 47.38,
      "lon": 8.56,
      "kind": "battle",
      "year": 1799,
      "note": "Austrians beat the French"
     }
    ]
   },
   {
    "year": 1799,
    "tick": "1799 Zurich II",
    "title": "Second Battle of Zurich",
    "text": [
     "In late summer most Austrian troops left. A Russian army under General Korsakov took their place at Zurich.",
     "On 25 and 26 September 1799 Masséna attacked and beat the Russians at Zurich. On the same days French troops under General Soult beat the Austrians on the Linth river. The Austrian general Hotze was killed near Schänis.",
     "The plan of the allies was to attack the French together with a second Russian army coming from Italy. That army, under General Suvorov, was still in the mountains."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Allied-held",
      "kind": "habsburg",
      "label": "Held by Austria and Russia before the battle (rough)",
      "sel": {
       "cantons": [
        "GR",
        "SG",
        "AR",
        "AI",
        "TG",
        "SH",
        "GL"
       ],
       "districts": [
        102,
        103,
        104,
        105,
        107,
        108,
        109,
        110,
        112
       ]
      }
     },
     {
      "name": "French-held",
      "kind": "france",
      "label": "Held by France (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "SO",
        "BS",
        "BL",
        "AG",
        "TI",
        "VD",
        "VS",
        "NE",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Zurich",
      "lat": 47.38,
      "lon": 8.56,
      "kind": "battle",
      "year": 1799,
      "note": "French beat the Russians"
     },
     {
      "name": "Schänis (Linth)",
      "lat": 47.16,
      "lon": 9.046,
      "kind": "battle",
      "year": 1799,
      "note": "French beat the Austrians"
     }
    ]
   },
   {
    "year": 1799,
    "tick": "1799 Gotthard",
    "title": "Suvorov crosses the Gotthard",
    "text": [
     "The Russian general Alexander Suvorov had driven the French out of northern Italy. Now he was to join Korsakov at Zurich. His army had about 20,000 men.",
     "On 24 September 1799 he fought his way over the Gotthard pass. On 25 September his troops fought the French at the Devil's Bridge in the Schöllenen gorge. On 26 September he reached Altdorf.",
     "There was no road along Lake Lucerne, and the French held the boats. So Suvorov had to go over the mountains."
    ],
    "view": [
     [
      46.4,
      8.2
     ],
     [
      47.3,
      9.9
     ]
    ],
    "layers": [],
    "places": [
     {
      "name": "Airolo",
      "lat": 46.5285,
      "lon": 8.608,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Gotthard Pass",
      "lat": 46.559,
      "lon": 8.5617,
      "kind": "battle",
      "year": 1799,
      "note": "Russians push the French back"
     },
     {
      "name": "Devil's Bridge",
      "lat": 46.6461,
      "lon": 8.5888,
      "kind": "battle",
      "year": 1799,
      "note": "Russians fight their way through"
     },
     {
      "name": "Altdorf",
      "lat": 46.8806,
      "lon": 8.6444,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     }
    ]
   },
   {
    "year": 1799,
    "tick": "1799 Muotathal",
    "title": "Trapped in the Muota valley",
    "text": [
     "Suvorov led his army over the Kinzig pass into the Muota valley. There he learned that Korsakov had lost at Zurich. He was now cut off.",
     "At the end of September and early October his rear guard fought the French in the Muota valley. The main army crossed the Pragel pass to Glarus, in snow and rain, with little food."
    ],
    "view": [
     [
      46.4,
      8.2
     ],
     [
      47.3,
      9.9
     ]
    ],
    "layers": [],
    "places": [
     {
      "name": "Airolo",
      "lat": 46.5285,
      "lon": 8.608,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Gotthard Pass",
      "lat": 46.559,
      "lon": 8.5617,
      "kind": "battle",
      "year": 1799,
      "note": "Russians push the French back"
     },
     {
      "name": "Devil's Bridge",
      "lat": 46.6461,
      "lon": 8.5888,
      "kind": "battle",
      "year": 1799,
      "note": "Russians fight their way through"
     },
     {
      "name": "Altdorf",
      "lat": 46.8806,
      "lon": 8.6444,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Kinzig Pass",
      "lat": 46.906,
      "lon": 8.777,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Muotathal",
      "lat": 46.9767,
      "lon": 8.7609,
      "kind": "battle",
      "year": 1799,
      "note": "Russians hold off the French"
     },
     {
      "name": "Pragel Pass",
      "lat": 47.0247,
      "lon": 8.8883,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Glarus",
      "lat": 47.0404,
      "lon": 9.0681,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     }
    ]
   },
   {
    "year": 1799,
    "tick": "1799 Panix",
    "title": "Over the Panix pass",
    "text": [
     "The way north was blocked. Suvorov turned south. In early October (HLS: 5 October) his army crossed the Panix pass, about 2,400 metres high, in deep snow. Many soldiers and horses fell to their death.",
     "The army reached Ilanz and Chur and then left Switzerland for the east. The march cost Suvorov many men, but it did not change the war.",
     "For the local people, the march brought hunger and loss. French troops stayed in Switzerland. In 1803 Napoleon gave the country a new order, the Act of Mediation."
    ],
    "view": [
     [
      46.4,
      8.2
     ],
     [
      47.3,
      9.9
     ]
    ],
    "layers": [],
    "places": [
     {
      "name": "Airolo",
      "lat": 46.5285,
      "lon": 8.608,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Gotthard Pass",
      "lat": 46.559,
      "lon": 8.5617,
      "kind": "battle",
      "year": 1799,
      "note": "Russians push the French back"
     },
     {
      "name": "Devil's Bridge",
      "lat": 46.6461,
      "lon": 8.5888,
      "kind": "battle",
      "year": 1799,
      "note": "Russians fight their way through"
     },
     {
      "name": "Altdorf",
      "lat": 46.8806,
      "lon": 8.6444,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Kinzig Pass",
      "lat": 46.906,
      "lon": 8.777,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Muotathal",
      "lat": 46.9767,
      "lon": 8.7609,
      "kind": "battle",
      "year": 1799,
      "note": "Russians hold off the French"
     },
     {
      "name": "Pragel Pass",
      "lat": 47.0247,
      "lon": 8.8883,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Glarus",
      "lat": 47.0404,
      "lon": 9.0681,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Elm",
      "lat": 46.9185,
      "lon": 9.1714,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Panix Pass",
      "lat": 46.876,
      "lon": 9.103,
      "kind": "battle",
      "year": 1799,
      "note": "Crossing in snow"
     },
     {
      "name": "Ilanz",
      "lat": 46.7744,
      "lon": 9.2047,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     },
     {
      "name": "Chur",
      "lat": 46.8508,
      "lon": 9.532,
      "kind": "place",
      "year": 1799,
      "note": "Suvorov's route"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/008915/2021-09-14/",
   "https://hls-dhs-dss.ch/de/articles/017217/",
   "https://hls-dhs-dss.ch/de/articles/000400/2010-09-07/",
   "http://www.hls-dhs-dss.ch/textes/d/D7411.php",
   "https://hls-dhs-dss.ch/de/articles/007480/1998-01-06/",
   "https://hls-dhs-dss.ch/articles/008917",
   "https://hls-dhs-dss.ch/textes/d/D8914.php",
   "http://www.hls-dhs-dss.ch/textes/d/D41517.php",
   "https://hls-dhs-dss.ch/articles/000762/2020-11-19/",
   "https://hls-dhs-dss.ch/en/articles/008796/2011-04-11/"
  ],
  "notes": "Front lines of 1799 are drawn as today's cantons and Zurich districts: very rough; the real line ran along the Limmat, the Lake of Zurich and the Linth and moved during the year. The Helvetic Republic also first had different cantons than today. Dates of Suvorov's march after Altdorf (Muotathal fights about 30 Sept-1 Oct; Panix crossing 5-7 Oct) differ slightly between sources; HLS (Elm) gives 5 October for the Panix pass. Route points are main places on the way, not an exact track. Nidwalden numbers come from the HLS Nidwalden article. Neuenegg point: the 1798 fight was around the Sense bridge and the Bramberg; point placed near Neuenegg."
 },
 {
  "id": "wars-sonderbund",
  "title": "The Sonderbund War and the federal state",
  "card": "In November 1847 the last civil war lasted less than a month, and in 1848 modern Switzerland was born.",
  "stops": [
   {
    "year": 1845,
    "tick": "1845",
    "title": "The Sonderbund",
    "text": [
     "In the 1840s liberals and Catholic conservatives fought over the future of Switzerland. The liberals wanted a stronger central state. The conservatives wanted the cantons to stay free, and they defended the Catholic Church.",
     "In 1844 Lucerne called the Jesuits to its schools. Armed groups of radicals (the 'Freischaren') attacked Lucerne twice, in 1844 and 1845, but failed.",
     "In December 1845 seven Catholic conservative cantons formed a defence league in Lucerne: Lucerne, Uri, Schwyz, Unterwalden (Obwalden and Nidwalden), Zug, Fribourg and Valais. Its opponents called it the 'Sonderbund' (separate league)."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Sonderbund",
      "kind": "catholic",
      "label": "Sonderbund: seven Catholic cantons (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS"
       ]
      }
     },
     {
      "name": "Neutral",
      "kind": "other",
      "label": "Neutral: Neuchâtel and Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "NE",
        "AI"
       ]
      }
     },
     {
      "name": "Diet majority",
      "kind": "confederates",
      "label": "Liberal majority of the Diet (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Lucerne",
      "lat": 47.0502,
      "lon": 8.3093,
      "kind": "treaty",
      "year": 1845,
      "note": "Sonderbund founded"
     }
    ]
   },
   {
    "year": 1847,
    "tick": "1847 July",
    "title": "The Diet decides",
    "text": [
     "The federal treaty did not allow such separate leagues. In 1847 the liberals won a majority in the Diet, the meeting of the cantons.",
     "In July 1847 the Diet ordered the Sonderbund to break up. The Sonderbund refused and called up its troops in October. The Diet made Guillaume-Henri Dufour of Geneva general of the federal army."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Sonderbund",
      "kind": "catholic",
      "label": "Sonderbund: seven Catholic cantons (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS"
       ]
      }
     },
     {
      "name": "Neutral",
      "kind": "other",
      "label": "Neutral: Neuchâtel and Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "NE",
        "AI"
       ]
      }
     },
     {
      "name": "Diet majority",
      "kind": "confederates",
      "label": "Liberal majority of the Diet (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Bern",
      "lat": 46.948,
      "lon": 7.4474,
      "kind": "town",
      "year": 1847,
      "note": "Diet orders the Sonderbund to break up"
     },
     {
      "name": "Lucerne",
      "lat": 47.0502,
      "lon": 8.3093,
      "kind": "town",
      "year": 1845,
      "note": "Centre of the Sonderbund"
     }
    ]
   },
   {
    "year": 1847,
    "tick": "1847 Fribourg",
    "title": "Fribourg gives up",
    "text": [
     "Dufour attacked first in the west, where Fribourg was cut off from the other Sonderbund cantons.",
     "His army surrounded the town. On 14 November 1847 Fribourg gave up almost without a fight."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Sonderbund",
      "kind": "catholic",
      "label": "Sonderbund: seven Catholic cantons (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS"
       ]
      }
     },
     {
      "name": "Neutral",
      "kind": "other",
      "label": "Neutral: Neuchâtel and Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "NE",
        "AI"
       ]
      }
     },
     {
      "name": "Diet majority",
      "kind": "confederates",
      "label": "Liberal majority of the Diet (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "battle",
      "year": 1847,
      "note": "Fribourg gives up to the federal army"
     }
    ]
   },
   {
    "year": 1847,
    "tick": "1847 Gisikon",
    "title": "Gisikon and Lucerne",
    "text": [
     "Then Dufour turned against Lucerne. On 23 November 1847 the federal army fought the Sonderbund troops at Gisikon on the Reuss bridge and at Meierskappel. The federal army won.",
     "On 24 November federal troops entered Lucerne. The leaders of the Sonderbund fled."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Sonderbund",
      "kind": "catholic",
      "label": "Sonderbund: seven Catholic cantons (rough)",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS"
       ]
      }
     },
     {
      "name": "Neutral",
      "kind": "other",
      "label": "Neutral: Neuchâtel and Appenzell Innerrhoden",
      "sel": {
       "cantons": [
        "NE",
        "AI"
       ]
      }
     },
     {
      "name": "Diet majority",
      "kind": "confederates",
      "label": "Liberal majority of the Diet (rough)",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Gisikon",
      "lat": 47.126,
      "lon": 8.403,
      "kind": "battle",
      "year": 1847,
      "note": "Federal army wins"
     },
     {
      "name": "Meierskappel",
      "lat": 47.124,
      "lon": 8.444,
      "kind": "battle",
      "year": 1847,
      "note": "Federal army wins"
     },
     {
      "name": "Lucerne",
      "lat": 47.0502,
      "lon": 8.3093,
      "kind": "town",
      "year": 1847,
      "note": "Occupied by federal troops"
     },
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "battle",
      "year": 1847,
      "note": "Gave up"
     }
    ]
   },
   {
    "year": 1847,
    "tick": "1847 End",
    "title": "The war ends",
    "text": [
     "One after the other, the other Sonderbund cantons gave up. Valais was the last, at the end of November.",
     "The war lasted less than a month, and fairly few people died. Dufour had ordered his troops to treat prisoners and people well. This made peace easier."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Former Sonderbund",
      "kind": "catholic",
      "label": "Former Sonderbund cantons, now occupied",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS"
       ]
      }
     },
     {
      "name": "Others",
      "kind": "confederates",
      "label": "The other cantons",
      "sel": {
       "cantons": [
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU",
        "NE",
        "AI"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Sion",
      "lat": 46.233,
      "lon": 7.36,
      "kind": "town",
      "year": 1847,
      "note": "Valais gives up last"
     },
     {
      "name": "Gisikon",
      "lat": 47.126,
      "lon": 8.403,
      "kind": "battle",
      "year": 1847,
      "note": "Federal army wins"
     },
     {
      "name": "Fribourg",
      "lat": 46.8065,
      "lon": 7.1619,
      "kind": "battle",
      "year": 1847,
      "note": "Gave up"
     }
    ]
   },
   {
    "year": 1848,
    "tick": "1848",
    "title": "The federal state",
    "text": [
     "The winners wrote a new constitution. In September 1848 it came into force. Switzerland was now a federal state with a government (the Federal Council), and a parliament with two chambers. Customs, post and money became federal matters.",
     "Bern became the federal city. The cantons kept many rights. The Catholic conservatives were the losers for a long time; they got a seat in the Federal Council only in 1891.",
     "The Sonderbund War was the last war between Swiss cantons."
    ],
    "view": "ch",
    "layers": [
     {
      "name": "Switzerland 1848",
      "kind": "confederates",
      "label": "The cantons of the federal state",
      "sel": {
       "cantons": [
        "LU",
        "UR",
        "SZ",
        "OW",
        "NW",
        "ZG",
        "FR",
        "VS",
        "ZH",
        "BE",
        "GL",
        "SO",
        "BS",
        "BL",
        "SH",
        "AR",
        "SG",
        "GR",
        "AG",
        "TG",
        "TI",
        "VD",
        "GE",
        "JU",
        "NE",
        "AI"
       ]
      }
     }
    ],
    "places": [
     {
      "name": "Bern",
      "lat": 46.948,
      "lon": 7.4474,
      "kind": "town",
      "year": 1848,
      "note": "Federal city"
     }
    ]
   }
  ],
  "sources": [
   "https://hls-dhs-dss.ch/de/articles/017241/",
   "https://hls-dhs-dss.ch/de/articles/008682/",
   "https://hls-dhs-dss.ch/de/articles/009811/",
   "https://hls-dhs-dss.ch/de/articles/000618/",
   "https://hls-dhs-dss.ch/de/articles/009800/"
  ],
  "notes": "Areas are today's cantons (Jura was part of Bern in 1847; Basel was split into two half-cantons from 1833). No number of dead is given because I did not check one in HLS. The 1891 Federal Council seat (Josef Zemp) is from general knowledge, not checked in this research. Dufour's orders on humane treatment are widely documented but were not checked in HLS for this file."
 }
];
