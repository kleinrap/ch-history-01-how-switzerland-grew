// Territory rules. Every historical area is a set of today's municipalities.
// A municipality record is [canton, districtBfs, name]; bfs is its BFS number.
// Classic script: attaches to window, and to module.exports for Node tests.
(function () {
  "use strict";

  // Year each of today's cantons became a full member.
  var JOINED = {
    UR: 1291, SZ: 1291, OW: 1291, NW: 1291,
    LU: 1332, ZH: 1351, GL: 1352, ZG: 1352, BE: 1353,
    FR: 1481, SO: 1481, BS: 1501, BL: 1501, SH: 1501, AR: 1513, AI: 1513,
    SG: 1803, GR: 1803, AG: 1803, TG: 1803, TI: 1803, VD: 1803,
    VS: 1815, NE: 1815, GE: 1815, JU: 1979
  };

  // Joining waves, oldest first. The map colours members by wave.
  var WAVES = [
    { id: "w1291", from: 1291, label: "1291 · The three founders" },
    { id: "w1353", from: 1332, label: "1332–1353 · The eight cantons" },
    { id: "w1513", from: 1481, label: "1481–1513 · The thirteen cantons" },
    { id: "w1803", from: 1803, label: "1803 · Six new cantons" },
    { id: "w1815", from: 1815, label: "1815 · Valais, Neuchâtel, Geneva" },
    { id: "w1979", from: 1979, label: "1979 · Jura" }
  ];

  var MOUTIER = 6831;           // Moutier: Bern until 2025, Jura since 1 January 2026
  var LAUFEN = 1302;            // district of Laufen: Bern 1815–1993, Basel-Landschaft since 1994
  var JURA_BERNOIS = 241, BIEL = 242;
  var ENGELBERG = 1402;         // abbey under the protection of the forest cantons; Nidwalden 1803, Obwalden 1815
  var OBERLAND = [247, 248, 249, 250];                // Thun, Obersimmental-Saanen, Frutigen-Niedersimmental, Interlaken-Oberhasli
  var BERN_AARGAU = [1901, 1904, 1905, 1907, 1910];  // Aarau, Brugg, Kulm, Lenzburg, Zofingen
  // Lordships Bern shared with Fribourg until 1798, drawn as today's main municipality of each.
  var SHARED = [2275, 855, 852, 853, 5757, 5518, 5561]; // Murten, Schwarzenburg, Guggisberg, Rüschegg, Orbe, Echallens, Grandson

  function has(list, x) { return list.indexOf(x) !== -1; }

  // Land of the old Bernese state that is still in Bern today (not the former lands of the Prince-Bishop of Basel).
  function oldBern(c) { return c[0] === "BE" && c[1] !== JURA_BERNOIS && c[1] !== BIEL; }
  // Former lands of the Prince-Bishop of Basel that came to Bern in 1815.
  function jura1815(c) { return (c[0] === "BE" && (c[1] === JURA_BERNOIS || c[1] === BIEL)) || c[0] === "JU" || c[1] === LAUFEN; }
  function juraCanton(c, bfs) { return c[0] === "JU" && bfs !== MOUTIER; }

  // Mode 1: which member canton a municipality belongs to in a year, or null.
  // Uses today's canton shapes, plus the border changes of the Jura since 1815.
  function memberCanton(c, bfs, year) {
    var k = c[0];
    if (k === "JU" || c[1] === LAUFEN) {
      if (bfs === MOUTIER && year >= 2026) return "JU";
      if (bfs !== MOUTIER && k === "JU" && year >= 1979) return "JU";
      if (c[1] === LAUFEN && year >= 1994) return "BL";
      return year >= 1815 ? "BE" : null;
    }
    if (k === "BE" && (c[1] === JURA_BERNOIS || c[1] === BIEL) && year < 1815) return null;
    if (bfs === ENGELBERG) return year >= 1815 ? "OW" : year >= 1803 ? "NW" : null;
    return year >= JOINED[k] ? k : null;
  }

  // Cantons that were one before they split: Unterwalden, Appenzell (split 1597), Basel (split 1833).
  var UNITED = {
    UW: { name: "Unterwalden", parts: ["OW", "NW"], until: 1803 },
    AP: { name: "Appenzell", parts: ["AR", "AI"], until: 1597 },
    BA: { name: "Basel", parts: ["BS", "BL"], until: 1833 }
  };
  function historicKey(k, year) {
    for (var u in UNITED) if (UNITED[u].parts.indexOf(k) !== -1 && year < UNITED[u].until) return u;
    return k;
  }

  function waveOf(canton) {
    if (UNITED[canton]) canton = UNITED[canton].parts[0];
    var y = JOINED[canton], w = WAVES[0];
    for (var i = 0; i < WAVES.length; i++) if (y >= WAVES[i].from) w = WAVES[i];
    return w.id;
  }

  // Mode 2: Bern's real borders. Each stop lists layers; the first layer that matches wins.
  var BERN = { id: "bern", label: "Canton of Bern", isBern: true };
  var BERN_STOPS = {
    1555: [
      { id: "shared", label: "Shared with Fribourg (Murten, Schwarzenburg, Orbe-Echallens, Grandson)", test: function (c, b) { return has(SHARED, b); } },
      { id: "bern", label: "Bernese state", isBern: true, test: function (c) { return oldBern(c) || c[0] === "VD" || (c[0] === "AG" && has(BERN_AARGAU, c[1])); } }
    ],
    1798: [
      { id: "oberland", label: "Canton Oberland (1798–1803)", test: function (c) { return c[0] === "BE" && has(OBERLAND, c[1]); } },
      { id: "bern", label: "Helvetic canton of Bern", isBern: true, test: oldBern },
      { id: "leman", label: "Canton Léman, later Vaud", test: function (c) { return c[0] === "VD"; } },
      { id: "aargau", label: "Canton Aargau", test: function (c) { return c[0] === "AG" && has(BERN_AARGAU, c[1]); } }
    ],
    1803: [
      { id: "bern", label: BERN.label, isBern: true, test: oldBern },
      { id: "former", label: "Former Bernese land, now Vaud and Aargau", test: function (c) { return c[0] === "VD" || (c[0] === "AG" && has(BERN_AARGAU, c[1])); } }
    ],
    1815: [
      { id: "bern", label: BERN.label, isBern: true, test: function (c) { return oldBern(c) || jura1815(c); } },
      { id: "former", label: "Former Bernese land, now Vaud and Aargau", test: function (c) { return c[0] === "VD" || (c[0] === "AG" && has(BERN_AARGAU, c[1])); } }
    ],
    1979: [
      { id: "jura", label: "New canton of Jura", test: juraCanton },
      { id: "bern", label: BERN.label, isBern: true, test: function (c) { return oldBern(c) || jura1815(c); } }
    ],
    1994: [
      { id: "laufen", label: "Laufental, now Basel-Landschaft", test: function (c) { return c[1] === LAUFEN; } },
      { id: "jura", label: "Canton of Jura", test: juraCanton },
      { id: "bern", label: BERN.label, isBern: true, test: function (c) { return oldBern(c) || jura1815(c); } }
    ],
    2026: [
      { id: "moutier", label: "Moutier, now Jura", test: function (c, b) { return b === MOUTIER; } },
      { id: "laufen", label: "Laufental, now Basel-Landschaft", test: function (c) { return c[1] === LAUFEN; } },
      { id: "jura", label: "Canton of Jura", test: juraCanton },
      { id: "bern", label: BERN.label, isBern: true, test: function (c) { return c[0] === "BE"; } }
    ]
  };

  // Group municipality ids by layer for one Bern stop. Returns {layerId: [bfs, ...]}.
  function bernGroups(communes, year) {
    var layers = BERN_STOPS[year], out = {};
    layers.forEach(function (l) { out[l.id] = []; });
    Object.keys(communes).forEach(function (id) {
      var c = communes[id], b = +id;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].test(c, b)) { out[layers[i].id].push(b); return; }
      }
    });
    return out;
  }

  // Group municipality ids by member canton for one year. Returns {canton: [bfs, ...]}.
  function memberGroups(communes, year) {
    var out = {};
    Object.keys(communes).forEach(function (id) {
      var k = memberCanton(communes[id], +id, year);
      if (!k) return;
      (out[k] = out[k] || []).push(+id);
    });
    return out;
  }

  // Mode 3: the six cantons of 1803 and what they were before 1798.
  // kind decides the colour; name is the map label; canton is the 1803 canton the piece went to.
  var KINDS = {
    ally: "Ally with its own government (Zugewandter Ort)",
    one: "Ruled by one canton or ally",
    common: "Ruled together by several cantons (gemeine Herrschaft)",
    foreign: "Not Swiss: part of Austria",
    old13: "The 13 cantons",
    new1803: "New canton in 1803"
  };
  function inD(list) { return function (c) { return has(list, c[1]); }; }
  function isB(list) { return function (c, b) { return has(list, b); }; }
  var BEFORE_1798 = [
    // Aargau
    { id: "bernAG", from: 1415, owner: "BE", canton: "AG", kind: "one", name: "Bernese Aargau", label: "Bernese Aargau: ruled by Bern since 1415", test: inD(BERN_AARGAU) },
    { id: "baden", from: 1415, canton: "AG", kind: "common", name: "County of Baden", label: "County of Baden: ruled together by the cantons since 1415", test: inD([1902, 1911]) },
    { id: "freiamt", from: 1415, canton: "AG", kind: "common", name: "Freie Ämter", label: "Freie Ämter: ruled together by the cantons since 1415", test: inD([1903, 1908]) },
    { id: "fricktal", from: 9999, canton: "AG", kind: "foreign", name: "Fricktal", label: "Fricktal: part of Austria until 1802", test: inD([1906, 1909]) },
    // Graubünden
    { id: "leagues", from: 1497, canton: "GR", kind: "ally", name: "Three Leagues", label: "Three Leagues: a free state, ally since 1497–1499", test: function (c) { return c[0] === "GR"; } },
    // St. Gallen (single municipalities first, then districts)
    { id: "sgtown", from: 1454, canton: "SG", kind: "ally", name: "Town of St. Gallen", label: "Town of St. Gallen: a free town and ally", test: isB([3203]) },
    { id: "rapperswil", from: 1464, canton: "SG", kind: "common", name: "Rapperswil", label: "Rapperswil: town under the protection of several cantons", test: isB([3340]) },
    { id: "sax", from: 1615, owner: "ZH", canton: "SG", kind: "one", name: "Sax", label: "Sax-Forstegg: ruled by Zurich", test: isB([3274]) },
    { id: "sargans", from: 1483, canton: "SG", kind: "common", name: "Sargans", label: "Sargans: ruled together by the cantons", test: function (c, b) { return c[1] === 1725 || b === 3276; } },
    { id: "abbey", from: 1451, canton: "SG", kind: "ally", name: "Abbey lands", label: "Prince-Abbey of St. Gallen: an ally, ruled by the abbot", test: inD([1721, 1722, 1728]) },
    { id: "toggenburg", from: 1468, owner: "abbey", canton: "SG", kind: "one", name: "Toggenburg", label: "Toggenburg: ruled by the abbot of St. Gallen", test: inD([1727]) },
    { id: "rheintal", from: 1490, canton: "SG", kind: "common", name: "Rheintal", label: "Rheintal: ruled together by the cantons", test: inD([1723]) },
    { id: "werdenberg", from: 1517, owner: "GL", canton: "SG", kind: "one", name: "Werdenberg", label: "Werdenberg: ruled by Glarus", test: inD([1724]) },
    { id: "gaster", from: 1438, canton: "SG", kind: "common", name: "Gaster & Uznach", label: "Gaster and Uznach: ruled by Schwyz and Glarus", test: inD([1726]) },
    // Thurgau
    { id: "thurgau", from: 1460, canton: "TG", kind: "common", name: "Thurgau", label: "Thurgau: ruled together by the cantons since 1460", test: function (c) { return c[0] === "TG"; } },
    // Ticino
    { id: "leventina", from: 1480, owner: "UR", canton: "TI", kind: "one", name: "Leventina", label: "Leventina: ruled by Uri", test: inD([2103]) },
    { id: "ti3", from: 1500, canton: "TI", kind: "common", name: "Bellinzona, Riviera, Blenio", label: "Bellinzona, Riviera, Blenio: ruled by Uri, Schwyz and Nidwalden", test: inD([2101, 2107, 2102]) },
    { id: "ti12", from: 1512, canton: "TI", kind: "common", name: "Lugano, Locarno, Mendrisio, Vallemaggia", label: "Lugano, Locarno, Mendrisio, Vallemaggia: ruled together by 12 cantons", test: inD([2105, 2104, 2106, 2108]) },
    // Vaud
    { id: "vdshared", from: 1476, canton: "VD", kind: "common", name: "Orbe, Echallens, Grandson", label: "Orbe-Echallens and Grandson: ruled by Bern and Fribourg together", test: isB([5757, 5518, 5561]) },
    { id: "aigle", from: 1475, owner: "BE", canton: "VD", kind: "one", name: "Aigle", label: "Aigle: ruled by Bern since about 1475", test: inD([2221]) },
    // The Pays-d'Enhaut (Château-d'Oex, Rossinière, Rougemont) came to Bern only in 1555: drawn by the allies data.
    { id: "vaud", from: 1536, owner: "BE", canton: "VD", kind: "one", name: "Vaud", label: "Pays de Vaud: ruled by Bern since 1536", test: function (c, b) { return c[0] === "VD" && !has([5841, 5842, 5843], b); } },
    // Everything else that was a full member
    { id: "old13", kind: "old13", label: KINDS.old13, test: function (c, b) { return memberCanton(c, b, 1513) !== null; } }
  ];
  var SIX = ["AG", "GR", "SG", "TG", "TI", "VD"];
  var AFTER_1803 = SIX.map(function (k) {
    return { id: "new" + k, canton: k, kind: "new1803", name: k, label: KINDS.new1803, test: function (c) { return c[0] === k; } };
  }).concat([{ id: "old13", kind: "old13", label: KINDS.old13, test: function (c, b) { return memberCanton(c, b, 1513) !== null; } }]);

  // Land outside today's Switzerland (shapes in data/outside.js, from OpenStreetMap).
  // kind: "subject" = ruled by owner; "ally" = ally with its own government. until = first year it is gone.
  var OUTSIDE = [
    { id: "valtellina", from: 1512, until: 1797, kind: "subject", owner: "GR", name: "Valtellina",
      label: "Valtellina, Chiavenna, Bormio (today Italy): ruled by the Three Leagues 1512–1797" },
    { id: "gex", from: 1536, until: 1564, kind: "subject", owner: "BE", name: "Gex",
      label: "Pays de Gex (today France): ruled by Bern 1536–1564" },
    { id: "thonon", from: 1536, until: 1564, kind: "subject", owner: "BE", name: "Chablais",
      label: "Chablais around Thonon (today France): ruled by Bern 1536–1564" },
    { id: "genevois", from: 1536, until: 1564, kind: "subject", owner: "BE", name: "Ternier",
      label: "Ternier and Gaillard, south of Geneva (today France): ruled by Bern 1536–1564" },
    { id: "annemasse", from: 1536, until: 1564, kind: "subject", owner: "BE", name: "Gaillard",
      label: "Ternier and Gaillard, south of Geneva (today France): ruled by Bern 1536–1564" },
    { id: "evian", from: 1536, until: 1569, kind: "subject", owner: "VS", name: "Évian",
      label: "Évian and Abondance (today France): ruled by Valais, an ally, 1536–1569" },
    { id: "mulhouse", from: 1515, until: 1798, kind: "ally", name: "Mulhouse",
      label: "Mulhouse (today France): an ally 1515–1798" }
  ];
  function outsideAt(year) {
    return OUTSIDE.filter(function (o) { return year >= o.from && year < o.until; });
  }

  // Group municipality ids by layer. The first layer whose test matches wins. Returns {layerId: [bfs, ...]}.
  function groupBy(communes, layers) {
    var out = {};
    layers.forEach(function (l) { out[l.id] = []; });
    Object.keys(communes).forEach(function (id) {
      var c = communes[id], b = +id;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].test(c, b)) { out[layers[i].id].push(b); return; }
      }
    });
    return out;
  }

  // Canton histories (content-cantons.js): each stop has layers with a selector over today's units.
  function selMatch(sel, c, b) {
    sel = sel || {};
    var inc = (sel.cantons || []).indexOf(c[0]) !== -1 || (sel.districts || []).indexOf(c[1]) !== -1 || (sel.munis || []).indexOf(b) !== -1;
    var exc = (sel.except || []).indexOf(b) !== -1 || (sel.exceptDistricts || []).indexOf(c[1]) !== -1;
    return inc && !exc;
  }
  // Index of the first layer of a stop that contains the municipality, or -1.
  function layerIndex(stop, c, b) {
    for (var i = 0; i < stop.layers.length; i++) if (selMatch(stop.layers[i].sel, c, b)) return i;
    return -1;
  }
  // Group municipality ids by layer index for one stop. Returns [[bfs...], ...] in layer order.
  function stopGroups(communes, stop) {
    var out = stop.layers.map(function () { return []; });
    Object.keys(communes).forEach(function (id) {
      var i = layerIndex(stop, communes[id], +id);
      if (i !== -1) out[i].push(+id);
    });
    return out;
  }
  // The latest stop of a canton's history at or before a year, or null.
  var HISTORY = {};
  function setHistory(list) { HISTORY = {}; (list || []).forEach(function (h) { HISTORY[h.canton] = h; }); }
  function stopAt(canton, year) {
    var h = HISTORY[canton], best = null;
    if (!h) return null;
    h.stops.forEach(function (s) { if (s.year <= year) best = s; });
    return best;
  }

  // Mode 1: what each municipality was in a year. Before 1798 this includes the ruled lands and
  // allies; from 1803 on, only full member cantons. Returns {key, kind, owner, layer} or null.
  // Allies and other ruled lands of the Old Confederation (content-allies.js, from research/allies.json).
  // They only fill land that no canton's own history claims at that date.
  var ALLIES = [];
  function setAllies(list) {
    ALLIES = (list || []).filter(function (a) { return a.sel; });
    (list || []).forEach(function (a) {
      if (a.outside_id && a.kind !== "foreign")
        OUTSIDE.push({ id: a.outside_id, from: a.from, until: a.until, kind: a.kind === "subject" ? "subject" : "ally", owner: a.owner, name: a.name, label: a.label });
    });
  }
  function allyAt(c, b, year) {
    if (year >= 1798) return null;
    for (var i = 0; i < ALLIES.length; i++) {
      var a = ALLIES[i];
      if (year < a.from || year >= a.until || !selMatch(a.sel, c, b)) continue;
      if (a.kind === "foreign") return null;
      var layer = { name: a.name, label: a.label };
      if (a.kind === "subject") return { key: "ally-" + a.id, kind: "subject", owner: a.owner || "ally", layer: layer };
      if (a.kind === "common") return { key: "ally-" + a.id, kind: "common", layer: layer };
      return { key: "ally-" + a.id, kind: "ally", layer: layer };
    }
    return null;
  }

  function statusAt(c, b, year) {
    var s = memberStatus(c, b, year);
    return s || allyAt(c, b, year);
  }

  function memberStatus(c, b, year) {
    if (year < 1798) {
      for (var i = 0; i < BEFORE_1798.length - 1; i++) {
        var l = BEFORE_1798[i];
        if (!l.test(c, b)) continue;
        if (year < l.from) return null;          // the land is not linked to the Swiss yet
        if (l.kind === "one") return { key: l.id, kind: "subject", owner: l.owner, layer: l };
        return { key: l.id, kind: l.kind, layer: l };
      }
    }
    // Before 1798, use the canton's researched history when there is one: only its real land is drawn.
    // The history then decides alone (for example Nidau, in today's Biel district, was Bernese from 1389).
    var own = c[0], st = null, k;
    if (year < 1798 && JOINED[own] <= year && (st = stopAt(own, year))) k = own;
    else k = memberCanton(c, b, year);
    if (!k) return null;
    if (st) {
      var i = layerIndex(st, c, b), l = i === -1 ? null : st.layers[i];
      if (!l || l.kind === "other" || l.kind === "lord") return null;
      if (l.kind === "subject") return { key: k + "-sub", kind: "subject", owner: k };
      if (l.kind === "shared") return { key: k + "-shared-" + i, kind: "common", layer: { name: l.name } };
    }
    return { key: historicKey(k, year), kind: "member", owner: k };
  }

  // Group municipality ids by status for one year. Returns {key: {ids, kind, owner, layer}}.
  function territoryGroups(communes, year) {
    var out = {};
    Object.keys(communes).forEach(function (id) {
      var s = statusAt(communes[id], +id, year);
      if (!s) return;
      if (!out[s.key]) out[s.key] = { ids: [], kind: s.kind, owner: s.owner, layer: s.layer };
      out[s.key].ids.push(+id);
    });
    return out;
  }

  var api = {
    JOINED: JOINED, WAVES: WAVES, BERN_STOPS: BERN_STOPS,
    KINDS: KINDS, UNITED: UNITED, OUTSIDE: OUTSIDE, outsideAt: outsideAt, SIX: SIX, BEFORE_1798: BEFORE_1798, AFTER_1803: AFTER_1803,
    memberCanton: memberCanton, waveOf: waveOf,
    memberGroups: memberGroups, bernGroups: bernGroups, groupBy: groupBy,
    statusAt: statusAt, territoryGroups: territoryGroups, setAllies: setAllies,
    selMatch: selMatch, stopGroups: stopGroups, setHistory: setHistory, stopAt: stopAt
  };
  if (typeof window !== "undefined") window.Territory = api;
  if (typeof module !== "undefined") module.exports = api;
})();
