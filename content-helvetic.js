// The Helvetic Republic 1798-1803: its administrative cantons. Built by scripts/build_confederation.py
window.HELVETIC = {
 "stops": [
  {
   "date": "1798-04-12",
   "year": 1798,
   "title": "The first Helvetic constitution",
   "text": [
    "On 12 April 1798 delegates in Aarau proclaimed the Helvetic Republic. France had conquered the Old Confederation a few weeks before.",
    "The new state was one central state. The cantons were now only districts for the administration, the courts and the elections. A governor (Regierungsstatthalter) led each canton for the central government.",
    "The constitution planned 21 cantons. The French commissioner changed the plan: he made the Bernese Oberland a canton (28 March) and made Baden with the Freie Ämter a canton (11 April). Bellinzona and Lugano became cantons on 14 April.",
    "On the first day, only ten cantons took part. The cantons of central Switzerland refused the constitution and fought against it. Aarau was the first capital."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (independent)",
     "kind": "foreign",
     "label": "Republic of Geneva: independent, but taken by France later in April 1798",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "leagues",
     "name": "Three Leagues (Graubünden)",
     "kind": "foreign",
     "label": "Free State of the Three Leagues (Graubünden): not part of the Helvetic Republic",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais",
     "kind": "canton",
     "label": "Canton of Valais (capital Sion)",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg (Sarine et Broye)",
     "kind": "canton",
     "label": "Canton of Fribourg, first called Sarine et Broye, with Payerne and Avenches (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ],
      "munis": [
       5451,
       5456,
       5458,
       5464,
       5822,
       5816,
       5817,
       5813,
       5821,
       5827,
       5828
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "oberland",
     "name": "Oberland",
     "kind": "canton",
     "label": "Canton of Oberland, the Bernese highlands (capital Thun)",
     "sel": {
      "districts": [
       248,
       249,
       250
      ],
      "munis": [
       942,
       929,
       934,
       938,
       927,
       932,
       940
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, without the Oberland and the Aargau (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal (Austrian)",
     "kind": "foreign",
     "label": "Fricktal: part of Austria (not Helvetic)",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth-old",
     "name": "Glarus and Sargans (planned)",
     "kind": "canton",
     "label": "Glarus and the planned canton of Sargans: not yet part of the Republic",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis-old",
     "name": "Appenzell and St. Gallen (planned)",
     "kind": "canton",
     "label": "Appenzell and the planned canton of St. Gallen: not yet part of the Republic",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "central-old",
     "name": "Uri, Schwyz, Unterwalden, Zug (planned)",
     "kind": "canton",
     "label": "Uri, Schwyz, Unterwalden and Zug: planned cantons that refused the constitution and fought until May 1798",
     "sel": {
      "cantons": [
       "UR",
       "SZ",
       "OW",
       "NW",
       "ZG"
      ]
     }
    }
   ],
   "tick": "Apr 1798",
   "when": "Apr 1798"
  },
  {
   "date": "1798-05-04",
   "year": 1798,
   "title": "Eighteen cantons",
   "text": [
    "On 4 May 1798 the French commissioner Rapinat joined several small planned cantons into three large ones. Now the Republic had 18 cantons.",
    "Waldstätten joined Uri, Schwyz, Unterwalden and Zug. This took away votes from the cantons that were against the Republic. Linth joined Glarus with the old ruled lands along the Linth and the Rhine. Säntis joined Appenzell, St. Gallen and the Rheintal.",
    "In the same weeks France took Geneva. The new cantons started their work in June 1798. In September 1798 the capital moved from Aarau to Lucerne."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "leagues",
     "name": "Three Leagues (Graubünden)",
     "kind": "foreign",
     "label": "Free State of the Three Leagues (Graubünden): not part of the Helvetic Republic",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais",
     "kind": "canton",
     "label": "Canton of Valais (capital Sion)",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg (Sarine et Broye)",
     "kind": "canton",
     "label": "Canton of Fribourg, first called Sarine et Broye, with Payerne and Avenches (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ],
      "munis": [
       5451,
       5456,
       5458,
       5464,
       5822,
       5816,
       5817,
       5813,
       5821,
       5827,
       5828
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "oberland",
     "name": "Oberland",
     "kind": "canton",
     "label": "Canton of Oberland, the Bernese highlands (capital Thun)",
     "sel": {
      "districts": [
       248,
       249,
       250
      ],
      "munis": [
       942,
       929,
       934,
       938,
       927,
       932,
       940
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, without the Oberland and the Aargau (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal (Austrian)",
     "kind": "foreign",
     "label": "Fricktal: part of Austria (not Helvetic)",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth",
     "name": "Linth",
     "kind": "canton",
     "label": "Canton of Linth: Glarus, March, Höfe, Rapperswil, Gaster, Uznach, Sargans, Werdenberg and upper Toggenburg (capital Glarus)",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis",
     "name": "Säntis",
     "kind": "canton",
     "label": "Canton of Säntis: Appenzell, St. Gallen, the Rheintal and lower Toggenburg (capital St. Gallen)",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "waldstatten",
     "name": "Waldstätten",
     "kind": "canton",
     "label": "Canton of Waldstätten: Uri, Schwyz, Unterwalden and Zug in one canton (capital Schwyz, from May 1799 Zug)",
     "sel": {
      "cantons": [
       "UR",
       "SZ",
       "OW",
       "NW",
       "ZG"
      ]
     }
    }
   ],
   "tick": "May 1798",
   "when": "May 1798"
  },
  {
   "date": "1799-04-21",
   "year": 1799,
   "title": "Rätien joins",
   "text": [
    "On 21 April 1799 the Three Leagues (Graubünden) joined the Helvetic Republic as the canton of Rätien. Most people in Graubünden did not want this, but France put pressure on them.",
    "In 1799 the war between France and Austria was fought on Swiss land. Austrian and Russian troops held the east of the country for some months. French troops took Graubünden back in 1800.",
    "In May 1799 the capital moved from Lucerne to Bern."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "ratien",
     "name": "Rätien",
     "kind": "canton",
     "label": "Canton of Rätien, today Graubünden (capital Chur); Austrian troops held most of it until 1800",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais",
     "kind": "canton",
     "label": "Canton of Valais (capital Sion)",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg (Sarine et Broye)",
     "kind": "canton",
     "label": "Canton of Fribourg, first called Sarine et Broye, with Payerne and Avenches (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ],
      "munis": [
       5451,
       5456,
       5458,
       5464,
       5822,
       5816,
       5817,
       5813,
       5821,
       5827,
       5828
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "oberland",
     "name": "Oberland",
     "kind": "canton",
     "label": "Canton of Oberland, the Bernese highlands (capital Thun)",
     "sel": {
      "districts": [
       248,
       249,
       250
      ],
      "munis": [
       942,
       929,
       934,
       938,
       927,
       932,
       940
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, without the Oberland and the Aargau (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal (Austrian)",
     "kind": "foreign",
     "label": "Fricktal: part of Austria (not Helvetic)",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth",
     "name": "Linth",
     "kind": "canton",
     "label": "Canton of Linth: Glarus, March, Höfe, Rapperswil, Gaster, Uznach, Sargans, Werdenberg and upper Toggenburg (capital Glarus)",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis",
     "name": "Säntis",
     "kind": "canton",
     "label": "Canton of Säntis: Appenzell, St. Gallen, the Rheintal and lower Toggenburg (capital St. Gallen)",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "waldstatten",
     "name": "Waldstätten",
     "kind": "canton",
     "label": "Canton of Waldstätten: Uri, Schwyz, Unterwalden and Zug in one canton (capital Schwyz, from May 1799 Zug)",
     "sel": {
      "cantons": [
       "UR",
       "SZ",
       "OW",
       "NW",
       "ZG"
      ]
     }
    }
   ],
   "tick": "Apr 1799",
   "when": "Apr 1799"
  },
  {
   "date": "1801-11",
   "year": 1801,
   "title": "Central Switzerland divided again",
   "text": [
    "Federalists (people who wanted strong cantons) took power in Bern in October 1801. In November 1801 they divided the canton of Waldstätten again into Uri, Schwyz, Unterwalden and Zug.",
    "In the Peace of Lunéville (February 1801), Austria gave the Fricktal to France. France kept the right to give it to the Helvetic Republic."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "ratien",
     "name": "Rätien",
     "kind": "canton",
     "label": "Canton of Rätien, today Graubünden (capital Chur)",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais",
     "kind": "canton",
     "label": "Canton of Valais (capital Sion)",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg (Sarine et Broye)",
     "kind": "canton",
     "label": "Canton of Fribourg, first called Sarine et Broye, with Payerne and Avenches (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ],
      "munis": [
       5451,
       5456,
       5458,
       5464,
       5822,
       5816,
       5817,
       5813,
       5821,
       5827,
       5828
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "oberland",
     "name": "Oberland",
     "kind": "canton",
     "label": "Canton of Oberland, the Bernese highlands (capital Thun)",
     "sel": {
      "districts": [
       248,
       249,
       250
      ],
      "munis": [
       942,
       929,
       934,
       938,
       927,
       932,
       940
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, without the Oberland and the Aargau (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal (own canton, French protection)",
     "kind": "foreign",
     "label": "Canton of Fricktal: given up by Austria in 1801, under French protection, not yet Helvetic",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth",
     "name": "Linth",
     "kind": "canton",
     "label": "Canton of Linth: Glarus, March, Höfe, Rapperswil, Gaster, Uznach, Sargans, Werdenberg and upper Toggenburg (capital Glarus)",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis",
     "name": "Säntis",
     "kind": "canton",
     "label": "Canton of Säntis: Appenzell, St. Gallen, the Rheintal and lower Toggenburg (capital St. Gallen)",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "uri",
     "name": "Uri",
     "kind": "canton",
     "label": "Canton of Uri (capital Altdorf)",
     "sel": {
      "cantons": [
       "UR"
      ]
     }
    },
    {
     "id": "schwyz",
     "name": "Schwyz",
     "kind": "canton",
     "label": "Canton of Schwyz (capital Schwyz)",
     "sel": {
      "cantons": [
       "SZ"
      ]
     }
    },
    {
     "id": "unterwalden",
     "name": "Unterwalden",
     "kind": "canton",
     "label": "Canton of Unterwalden: Obwalden and Nidwalden (capital Stans)",
     "sel": {
      "cantons": [
       "OW",
       "NW"
      ]
     }
    },
    {
     "id": "zug",
     "name": "Zug",
     "kind": "canton",
     "label": "Canton of Zug (capital Zug)",
     "sel": {
      "cantons": [
       "ZG"
      ]
     }
    }
   ],
   "tick": "Nov 1801",
   "when": "Nov 1801"
  },
  {
   "date": "1802-05-25",
   "year": 1802,
   "title": "The second constitution",
   "text": [
    "A second Helvetic constitution came into force in May 1802. It gave the cantons a little more power, for example over money and schools.",
    "On 25 May 1802 Payerne and Avenches went back from Fribourg to Léman (Vaud).",
    "The Fricktal had been its own small canton since February 1802. It was under French protection and not yet part of the Republic."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "ratien",
     "name": "Rätien",
     "kind": "canton",
     "label": "Canton of Rätien, today Graubünden (capital Chur)",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais",
     "kind": "canton",
     "label": "Canton of Valais (capital Sion)",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud, with Payerne and Avenches again (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg",
     "kind": "canton",
     "label": "Canton of Fribourg (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ]
     }
    },
    {
     "id": "oberland",
     "name": "Oberland",
     "kind": "canton",
     "label": "Canton of Oberland, the Bernese highlands (capital Thun)",
     "sel": {
      "districts": [
       248,
       249,
       250
      ],
      "munis": [
       942,
       929,
       934,
       938,
       927,
       932,
       940
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, without the Oberland and the Aargau (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal (own canton, French protection)",
     "kind": "foreign",
     "label": "Canton of Fricktal: given up by Austria in 1801, under French protection, not yet Helvetic",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth",
     "name": "Linth",
     "kind": "canton",
     "label": "Canton of Linth: Glarus, March, Höfe, Rapperswil, Gaster, Uznach, Sargans, Werdenberg and upper Toggenburg (capital Glarus)",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis",
     "name": "Säntis",
     "kind": "canton",
     "label": "Canton of Säntis: Appenzell, St. Gallen, the Rheintal and lower Toggenburg (capital St. Gallen)",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "uri",
     "name": "Uri",
     "kind": "canton",
     "label": "Canton of Uri (capital Altdorf)",
     "sel": {
      "cantons": [
       "UR"
      ]
     }
    },
    {
     "id": "schwyz",
     "name": "Schwyz",
     "kind": "canton",
     "label": "Canton of Schwyz (capital Schwyz)",
     "sel": {
      "cantons": [
       "SZ"
      ]
     }
    },
    {
     "id": "unterwalden",
     "name": "Unterwalden",
     "kind": "canton",
     "label": "Canton of Unterwalden: Obwalden and Nidwalden (capital Stans)",
     "sel": {
      "cantons": [
       "OW",
       "NW"
      ]
     }
    },
    {
     "id": "zug",
     "name": "Zug",
     "kind": "canton",
     "label": "Canton of Zug (capital Zug)",
     "sel": {
      "cantons": [
       "ZG"
      ]
     }
    }
   ],
   "tick": "May 1802",
   "when": "May 1802"
  },
  {
   "date": "1802-08-27",
   "year": 1802,
   "title": "Fricktal in, Valais out",
   "text": [
    "On 29 July 1802 the government put Bern and the Oberland under one governor. On 13 August 1802 France agreed that the Fricktal could join the Republic.",
    "On 27 August 1802 France made Valais an independent republic. France wanted the road over the Simplon pass under its control.",
    "In August 1802 French troops left the country. Uprisings against the central government began (the 'Stecklikrieg'). Parts of Säntis and Linth broke away. In October 1802 French troops came back."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "ratien",
     "name": "Rätien",
     "kind": "canton",
     "label": "Canton of Rätien, today Graubünden (capital Chur)",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "valais",
     "name": "Valais (independent)",
     "kind": "foreign",
     "label": "Republic of Valais: independent from the Helvetic Republic since August 1802, under French control",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "leman",
     "name": "Léman",
     "kind": "canton",
     "label": "Canton of Léman, today Vaud, with Payerne and Avenches again (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg",
     "kind": "canton",
     "label": "Canton of Fribourg (capital Fribourg)",
     "sel": {
      "cantons": [
       "FR"
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern and Oberland",
     "kind": "canton",
     "label": "Cantons of Bern and Oberland: one governor for both since 29 July 1802 (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn (capital Solothurn)",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel (capital Basel)",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "fricktal",
     "name": "Fricktal",
     "kind": "canton",
     "label": "Canton of Fricktal: part of the Helvetic Republic since August 1802 (capital Rheinfelden)",
     "sel": {
      "districts": [
       1906,
       1909
      ]
     }
    },
    {
     "id": "baden",
     "name": "Baden",
     "kind": "canton",
     "label": "Canton of Baden: the old County of Baden and the Freie Ämter (capital Baden)",
     "sel": {
      "districts": [
       1902,
       1903,
       1908,
       1911
      ],
      "munis": [
       1030,
       1021,
       1025
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau, the former Bernese Aargau (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne (capital Lucerne)",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich (capital Zurich)",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen, with Stein am Rhein (capital Schaffhausen)",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "bellinzona",
     "name": "Bellinzona",
     "kind": "canton",
     "label": "Canton of Bellinzona: Bellinzona, Riviera, Blenio and Leventina (capital Bellinzona)",
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
     "id": "lugano",
     "name": "Lugano",
     "kind": "canton",
     "label": "Canton of Lugano: Lugano, Mendrisio, Locarno and Vallemaggia (capital Lugano)",
     "sel": {
      "districts": [
       2104,
       2105,
       2106,
       2108
      ]
     }
    },
    {
     "id": "linth",
     "name": "Linth",
     "kind": "canton",
     "label": "Canton of Linth: Glarus, March, Höfe, Rapperswil, Gaster, Uznach, Sargans, Werdenberg and upper Toggenburg (capital Glarus)",
     "sel": {
      "cantons": [
       "GL"
      ],
      "districts": [
       503,
       505,
       1724,
       1725,
       1726
      ],
      "munis": [
       3256,
       3360,
       3352,
       3359
      ]
     }
    },
    {
     "id": "santis",
     "name": "Säntis",
     "kind": "canton",
     "label": "Canton of Säntis: Appenzell, St. Gallen, the Rheintal and lower Toggenburg (capital St. Gallen)",
     "sel": {
      "cantons": [
       "AR",
       "AI",
       "SG"
      ]
     }
    },
    {
     "id": "uri",
     "name": "Uri",
     "kind": "canton",
     "label": "Canton of Uri (capital Altdorf)",
     "sel": {
      "cantons": [
       "UR"
      ]
     }
    },
    {
     "id": "schwyz",
     "name": "Schwyz",
     "kind": "canton",
     "label": "Canton of Schwyz (capital Schwyz)",
     "sel": {
      "cantons": [
       "SZ"
      ]
     }
    },
    {
     "id": "unterwalden",
     "name": "Unterwalden",
     "kind": "canton",
     "label": "Canton of Unterwalden: Obwalden and Nidwalden (capital Stans)",
     "sel": {
      "cantons": [
       "OW",
       "NW"
      ]
     }
    },
    {
     "id": "zug",
     "name": "Zug",
     "kind": "canton",
     "label": "Canton of Zug (capital Zug)",
     "sel": {
      "cantons": [
       "ZG"
      ]
     }
    }
   ],
   "tick": "Aug 1802",
   "when": "Aug 1802"
  },
  {
   "date": "1803-03-10",
   "year": 1803,
   "title": "The end of the Helvetic Republic",
   "text": [
    "Napoleon Bonaparte, the ruler of France, gave Switzerland a new order: the Act of Mediation of 19 February 1803. On 10 March 1803 the Helvetic government gave its power to the new Landammann (head of the Confederation).",
    "The cantons were states again. There were 19: the 13 old cantons and 6 new ones (St. Gallen, Graubünden, Aargau, Thurgau, Ticino and Vaud).",
    "Valais, Geneva, Neuchâtel and the Jura stayed outside Switzerland until 1815."
   ],
   "layers": [
    {
     "id": "geneva",
     "name": "Geneva (French)",
     "kind": "foreign",
     "label": "Geneva: part of France since April 1798 (not Helvetic)",
     "sel": {
      "cantons": [
       "GE"
      ]
     }
    },
    {
     "id": "neuchatel",
     "name": "Neuchâtel (Prussian)",
     "kind": "foreign",
     "label": "Principality of Neuchâtel: ruled by the King of Prussia (not Helvetic)",
     "sel": {
      "cantons": [
       "NE"
      ]
     }
    },
    {
     "id": "france-jura",
     "name": "Jura, Biel and Birseck (French)",
     "kind": "foreign",
     "label": "Former lands of the Prince-Bishop of Basel and the town of Biel: part of France (not Helvetic)",
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
       372,
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
     "id": "valais",
     "name": "Valais (independent)",
     "kind": "foreign",
     "label": "Republic of Valais: independent from the Helvetic Republic since August 1802, under French control",
     "sel": {
      "cantons": [
       "VS"
      ]
     }
    },
    {
     "id": "aargau",
     "name": "Aargau",
     "kind": "canton",
     "label": "Canton of Aargau: the Bernese Aargau, Baden, the Freie Ämter and the Fricktal (capital Aarau)",
     "sel": {
      "cantons": [
       "AG"
      ]
     }
    },
    {
     "id": "st-gallen",
     "name": "St. Gallen",
     "kind": "canton",
     "label": "Canton of St. Gallen: new canton (capital St. Gallen)",
     "sel": {
      "cantons": [
       "SG"
      ]
     }
    },
    {
     "id": "graubunden",
     "name": "Graubünden",
     "kind": "canton",
     "label": "Canton of Graubünden: now a full canton (capital Chur)",
     "sel": {
      "cantons": [
       "GR"
      ]
     }
    },
    {
     "id": "thurgau",
     "name": "Thurgau",
     "kind": "canton",
     "label": "Canton of Thurgau: new canton (capital Frauenfeld)",
     "sel": {
      "cantons": [
       "TG"
      ]
     }
    },
    {
     "id": "ticino",
     "name": "Ticino",
     "kind": "canton",
     "label": "Canton of Ticino: Bellinzona and Lugano joined (capital in turn Bellinzona, Locarno, Lugano)",
     "sel": {
      "cantons": [
       "TI"
      ]
     }
    },
    {
     "id": "vaud",
     "name": "Vaud",
     "kind": "canton",
     "label": "Canton of Vaud: new canton (capital Lausanne)",
     "sel": {
      "cantons": [
       "VD"
      ]
     }
    },
    {
     "id": "bern",
     "name": "Bern",
     "kind": "canton",
     "label": "Canton of Bern, with the Oberland again (capital Bern)",
     "sel": {
      "cantons": [
       "BE"
      ]
     }
    },
    {
     "id": "zurich",
     "name": "Zurich",
     "kind": "canton",
     "label": "Canton of Zurich",
     "sel": {
      "cantons": [
       "ZH"
      ]
     }
    },
    {
     "id": "lucerne",
     "name": "Lucerne",
     "kind": "canton",
     "label": "Canton of Lucerne, now with Hitzkirch",
     "sel": {
      "cantons": [
       "LU"
      ]
     }
    },
    {
     "id": "uri",
     "name": "Uri",
     "kind": "canton",
     "label": "Canton of Uri",
     "sel": {
      "cantons": [
       "UR"
      ]
     }
    },
    {
     "id": "schwyz",
     "name": "Schwyz",
     "kind": "canton",
     "label": "Canton of Schwyz, with March, Höfe, Einsiedeln and Küssnacht",
     "sel": {
      "cantons": [
       "SZ"
      ]
     }
    },
    {
     "id": "unterwalden",
     "name": "Unterwalden",
     "kind": "canton",
     "label": "Canton of Unterwalden: Obwalden and Nidwalden",
     "sel": {
      "cantons": [
       "OW",
       "NW"
      ]
     }
    },
    {
     "id": "glarus",
     "name": "Glarus",
     "kind": "canton",
     "label": "Canton of Glarus",
     "sel": {
      "cantons": [
       "GL"
      ]
     }
    },
    {
     "id": "zug",
     "name": "Zug",
     "kind": "canton",
     "label": "Canton of Zug",
     "sel": {
      "cantons": [
       "ZG"
      ]
     }
    },
    {
     "id": "fribourg",
     "name": "Fribourg",
     "kind": "canton",
     "label": "Canton of Fribourg",
     "sel": {
      "cantons": [
       "FR"
      ]
     }
    },
    {
     "id": "solothurn",
     "name": "Solothurn",
     "kind": "canton",
     "label": "Canton of Solothurn",
     "sel": {
      "cantons": [
       "SO"
      ]
     }
    },
    {
     "id": "basel",
     "name": "Basel",
     "kind": "canton",
     "label": "Canton of Basel",
     "sel": {
      "cantons": [
       "BS",
       "BL"
      ]
     }
    },
    {
     "id": "schaffhausen",
     "name": "Schaffhausen",
     "kind": "canton",
     "label": "Canton of Schaffhausen",
     "sel": {
      "cantons": [
       "SH"
      ]
     }
    },
    {
     "id": "appenzell",
     "name": "Appenzell",
     "kind": "canton",
     "label": "Canton of Appenzell (Ausserrhoden and Innerrhoden)",
     "sel": {
      "cantons": [
       "AR",
       "AI"
      ]
     }
    }
   ],
   "tick": "Mar 1803",
   "when": "Mar 1803"
  }
 ],
 "sources": [
  "https://hls-dhs-dss.ch/de/articles/009797/",
  "https://hls-dhs-dss.ch/de/articles/026414/",
  "https://hls-dhs-dss.ch/de/articles/008639/",
  "https://hls-dhs-dss.ch/de/articles/008632/",
  "https://hls-dhs-dss.ch/de/articles/008634/",
  "https://hls-dhs-dss.ch/de/articles/008633/",
  "https://hls-dhs-dss.ch/de/articles/008635/",
  "https://hls-dhs-dss.ch/de/articles/008636/",
  "https://hls-dhs-dss.ch/de/articles/008637/",
  "https://hls-dhs-dss.ch/fr/articles/008638/",
  "https://hls-dhs-dss.ch/de/articles/047667/",
  "https://hls-dhs-dss.ch/de/articles/008297/",
  "https://hls-dhs-dss.ch/de/articles/009319/"
 ],
 "notes": "Borders follow today's municipalities and districts, so they are approximate. Oberland: only Thun, Hilterfingen, Oberhofen, Sigriswil, Heiligenschwendi, Horrenbach-Buchen and Teuffenthal are taken from today's Thun district (HLS: the eastern half of the old Amt Thun, without Steffisburg). Payerne and Avenches: the 1798 districts are approximated by 11 municipalities. Hitzkirch (in canton Baden, district Sarmenstorf, 1798-1803) is approximated by Hitzkirch, Aesch (LU) and Ermensee. Upper Toggenburg (in Linth) is approximated by Nesslau, Ebnat-Kappel and Wildhaus-Alt St. Johann; HLS says it split from Linth in 1801, but not where it went, so the map keeps it in Linth. Rheintal: only Rüthi goes to Linth (Lienz is part of Altstätten today). Biel is Biel/Bienne and Evilard; the Birseck is the Arlesheim district without Binningen, Bottmingen, Birsfelden, Münchenstein, Muttenz and Biel-Benken (which belonged to Basel). Stop 1 shows the plan of April 1798; Glarus, Appenzell, St. Gallen and central Switzerland were not yet in the Republic, and their planned borders are drawn only roughly. Tarasp and Rhäzüns were Austrian until 1803 but cannot be separated from today's municipalities Scuol and Rhäzüns. The second constitution (1802) planned to dissolve Waldstätten, Oberland, Baden, Bellinzona, Lugano, Linth and Säntis, and to join Baden to Aargau; HLS says Baden, Linth, Säntis, Bellinzona and Lugano still existed formally until 1803, so the 1802 stops keep them. The Fricktal was Austrian until the Peace of Lunéville (1801), not until 1802; from 1801 it was French. The date 1801-11 has no day: HLS gives only 'November 1801'. Geneva: French troops came in mid-April 1798; the annexation treaty is dated 26 April 1798 (from general knowledge, not checked in HLS)."
};
