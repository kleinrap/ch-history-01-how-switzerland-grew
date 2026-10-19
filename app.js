(function () {
  "use strict";

  var topo = window.DATA_GEO, communes = window.DATA_COMMUNES, T = window.Territory, C = window.CONTENT;
  var R = 6371.0088; // Earth radius in km, for areas
  var CANTON_IDS = ["ZH", "BE", "LU", "UR", "SZ", "OW", "NW", "GL", "ZG", "FR", "SO", "BS", "BL",
                    "SH", "AR", "AI", "SG", "GR", "AG", "TG", "TI", "VD", "VS", "NE", "GE", "JU"];
  var BERN_LABEL = { bern: "Bern", oberland: "Oberland", leman: "Léman", aargau: "Aargau", jura: "Jura", laufen: "Laufental", moutier: "Moutier" };
  var KIND_COLOR = { ally: "var(--k-ally)", one: "var(--k-one)", common: "var(--k-common)", foreign: "var(--k-foreign)", old13: "var(--k-old13)", new1803: "var(--w1803)" };

  var W = 960, H = 620;
  var svg = d3.select("#map").attr("viewBox", "0 0 " + W + " " + H);
  var country = topojson.feature(topo, topo.objects.country);
  var outside = window.DATA_OUTSIDE || { type: "FeatureCollection", features: [] };
  var outsideById = {};
  outside.features.forEach(function (f) { outsideById[f.id] = f; });
  // Fit the map to Switzerland plus the land the Swiss held outside today's border.
  var projection = d3.geoMercator().fitExtent([[16, 16], [W - 16, H - 40]],
    { type: "FeatureCollection", features: [country].concat(outside.features) });
  var path = d3.geoPath(projection);

  var muniGeoms = {};
  topo.objects.municipalities.geometries.forEach(function (g) { muniGeoms[g.id] = g; });
  function merge(ids) { return topojson.merge(topo, ids.map(function (id) { return muniGeoms[id]; })); }
  function areaKm2(feature) { return d3.geoArea(feature) * R * R; }
  function idsWhere(test) { return Object.keys(communes).filter(function (id) { return test(communes[id], +id); }).map(Number); }

  // Hatch for land Bern shared with Fribourg.
  var defs = svg.append("defs");
  var hatch = defs.append("pattern").attr("id", "hatch").attr("patternUnits", "userSpaceOnUse")
    .attr("width", 6).attr("height", 6).attr("patternTransform", "rotate(45)");
  hatch.append("rect").attr("width", 6).attr("height", 6).style("fill", "var(--shared)");
  hatch.append("rect").attr("width", 3).attr("height", 6).style("fill", "var(--bern)");

  // White stripes on top of land ruled by a canton: same colour as the ruler, but not a member.
  var stripes = defs.append("pattern").attr("id", "stripes").attr("patternUnits", "userSpaceOnUse")
    .attr("width", 7).attr("height", 7).attr("patternTransform", "rotate(45)");
  stripes.append("rect").attr("width", 2.5).attr("height", 7).style("fill", "var(--panel)").style("fill-opacity", 0.75);

  // No fixed canton lines: every border on the map comes from the territories of the chosen date.
  // Europe: today's countries as a quiet background (Natural Earth). Stories can zoom out to it.
  var EU = window.DATA_EUROPE || { regions: { features: [] }, countries: { features: [] } };
  var euRegion = {}, euCountry = {};
  EU.regions.features.forEach(function (f) { euRegion[f.id] = f; });
  EU.countries.features.forEach(function (f) { euCountry[f.id] = f; });
  svg.append("g").selectAll("path").data(EU.countries.features.filter(function (f) { return f.id !== "CHE"; }))
    .join("path").attr("class", "eu-country").attr("d", path);
  svg.append("path").datum(country).attr("class", "territory empty").attr("d", path);
  svg.append("g").selectAll("path").data(outside.features).join("path").attr("class", "outside-land").attr("d", path);
  var gFill = svg.append("g");
  var gStripes = svg.append("g");
  svg.append("g").selectAll("path").data(topojson.feature(topo, topo.objects.lakes).features)
    .join("path").attr("class", "lake").attr("d", path);
  var gFocus = svg.append("g");
  svg.append("path").datum(country).attr("class", "outline").attr("d", path);
  var gPlaces = svg.append("g");
  var gLabels = svg.append("g");

  var cantonFeatures = topojson.feature(topo, topo.objects.cantons).features;
  function cantonFeature(abbr) {
    return cantonFeatures.filter(function (c) { return c.id === CANTON_IDS.indexOf(abbr) + 1; })[0];
  }
  var BERN_CITY = projection(d3.geoCentroid(topojson.feature(topo, muniGeoms[351])));
  function cantonPoint(abbr) {
    return abbr === "BE" ? [BERN_CITY[0], BERN_CITY[1] + 12] : projection(d3.geoCentroid(cantonFeature(abbr)));
  }

  // Put a label on the largest polygon of a territory.
  function largestPoint(geom) {
    var best = null, bestA = -1;
    var polys = geom.type === "MultiPolygon" ? geom.coordinates : [geom.coordinates];
    polys.forEach(function (p) {
      var g = { type: "Polygon", coordinates: p }, a = d3.geoArea(g);
      if (a > bestA) { bestA = a; best = g; }
    });
    return projection(d3.geoCentroid(best));
  }

  // Zoom: move the viewBox; strokes do not scale (CSS), labels are resized to stay readable.
  var view = [0, 0, W, H];
  function zoomTo(feature) {
    var next = [0, 0, W, H];
    if (feature) {
      var b = path.bounds(feature), pad = 40;
      var w = b[1][0] - b[0][0] + 2 * pad, h = b[1][1] - b[0][1] + 2 * pad;
      var s = Math.max(w / W, h / H);
      var cx = (b[0][0] + b[1][0]) / 2, cy = (b[0][1] + b[1][1]) / 2;
      next = [cx - W * s / 2, cy - H * s / 2, W * s, H * s];
    }
    var from = svg.attr("viewBox"), to = next.join(" ");
    view = next;
    svg.interrupt();
    var still = document.hidden || (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
    if (still || from === to) { svg.attr("viewBox", to); return next[2] / W; }
    svg.transition().duration(700).attrTween("viewBox", function () { return d3.interpolateString(from, to); });
    // Animation frames stop in background tabs; make sure the map still ends at the right place.
    setTimeout(function () { if (view.join(" ") === to) { svg.interrupt(); svg.attr("viewBox", to); } }, 900);
    return next[2] / W;
  }

  function drawLabels(items, k) {
    gLabels.selectAll("text").data(items, function (d) { return d.key; })
      .join("text")
      .attr("class", function (d) { return "label" + (d.cls ? " " + d.cls : ""); })
      .attr("x", function (d) { return d.at[0]; })
      .attr("y", function (d) { return d.at[1] + 4 * k; })
      .style("font-size", function (d) { return ((d.cls === "big" ? 13 : d.cls === "minor" ? 9.5 : 11) * k) + "px"; })
      .style("stroke-width", (3 * k) + "px")
      .text(function (d) { return d.text; });
  }

  function fillTerritories(feats, fill, cls) {
    gFill.selectAll("path").data(feats, function (d) { return d.properties.key; })
      .join("path").attr("d", path)
      .attr("class", function (d) { return "territory" + (cls && cls(d) ? " " + cls(d) : ""); })
      .style("fill", fill);
    var striped = cls ? feats.filter(function (d) { return cls(d) === "subject"; }) : [];
    gStripes.selectAll("path").data(striped, function (d) { return d.properties.key; })
      .join("path").attr("class", "stripes").attr("d", path).style("fill", "url(#stripes)");
  }

  // Outside areas active in a year, as features ready to fill. props(o) adds properties.
  function outsideFeats(year, props) {
    return T.outsideAt(year).map(function (o) {
      var src = outsideById[o.id];
      if (!src) return null;
      var f = { type: "Feature", geometry: src.geometry, properties: props(o) };
      return f;
    }).filter(Boolean);
  }
  var BERN_OUT_1555 = T.OUTSIDE.filter(function (o) { return o.owner === "BE"; });

  // Precompute Bern's area at each Bern stop for the chart.
  var bernSeries = C.bern.map(function (s) {
    var g = T.bernGroups(communes, s.year);
    var parts = g.bern.concat(s.year === 1555 ? g.shared : []);
    var a = areaKm2(merge(parts));
    if (s.year === 1555) BERN_OUT_1555.forEach(function (o) { if (outsideById[o.id]) a += areaKm2(outsideById[o.id]); });
    return { year: s.year, area: Math.round(a / 10) * 10 };
  });

  var HIST = window.CANTON_HISTORY || [];
  var MAP_STORIES = window.MAP_STORIES || [];
  T.setHistory(HIST);
  T.setAllies(window.ALLIES || []);
  var CANTON_COLOR = { core: "var(--c-core)", subject: "var(--c-core)", shared: "var(--k-common)", other: "var(--c-other)" };
  var LORD_NAMES = {
    habsburg: "Habsburg", kyburg: "Kyburg", zahringen: "Zähringen", lenzburg: "Lenzburg", savoy: "Savoy",
    bishop: "A bishop", abbey: "An abbey", empire: "The Emperor (imperial land)", milan: "Milan or Como", noble: "Other noble families"
  };
  function layerColor(l) { return l.kind === "lord" ? "var(--lord-" + (l.lord || "noble") + ")" : CANTON_COLOR[l.kind]; }

  var state = { mode: "cantons", index: 0, canton: HIST.length ? HIST[0].canton : null };
  function history() { return HIST.filter(function (h) { return h.canton === state.canton; })[0]; }
  var HELV = window.HELVETIC || null;
  if (HELV) C.helvetic = HELV.stops;
  function stops() {
    if (state.mode === "canton") return history().stops;
    if (state.mode === "story") return currentStory().stops;
    return C[state.mode];
  }

  // Stories: guided chapters. Planned ones show as "coming later" cards (see PLAN.md).
  var STORIES = [
    { mode: "six", title: "1803: Six new cantons", text: "What Aargau, Graubünden, St. Gallen, Thurgau, Ticino and Vaud were before 1798, and how they became equal cantons." },
    { mode: "bern", title: "Bern: from very large to large", text: "The largest city-state north of the Alps, cut up by France, and the long Jura question." },
    HELV ? { mode: "helvetic", title: "The Helvetic cantons 1798–1803", text: "Léman, Oberland, Säntis, Linth, Baden and the other short-lived cantons." }
         : { title: "The Helvetic cantons 1798–1803", text: "Léman, Oberland, Säntis, Linth, Baden and the other short-lived cantons.", later: true },
    { title: "Lords before 1291", text: "Habsburg, Kyburg, Zähringen, Savoy, bishops and abbeys.", later: true },
    { title: "The Reformation", text: "Which areas became Protestant or Catholic.", later: true },
    { title: "Wars and battles", text: "From Morgarten to the Sonderbund War.", later: true },
    { title: "Languages", text: "German, French, Italian and Romansh, and how the borders moved.", later: true },
    { title: "Municipalities", text: "From about 3,200 to about 2,100: mergers since 1850.", later: true },
    { title: "Romans and Celts", text: "The Helvetii, Roman roads and towns.", later: true }
  ];
  var STORY_MODES = { six: 1, bern: 1, helvetic: 1, story: 1 };
  // Researched map stories: shown as cards; a planned card is removed once a story of its topic exists.
  var TOPIC_OF = { habsburg: "Lords before 1291", savoy: "Lords before 1291", "zahringen-kyburg": "Lords before 1291", "church-lords": "Lords before 1291",
                   reformation: "The Reformation" };
  MAP_STORIES.forEach(function (st) {
    var topic = TOPIC_OF[st.id] || (st.id.indexOf("wars") === 0 ? "Wars and battles" : null);
    STORIES = STORIES.filter(function (c) { return !(c.later && c.title === topic); });
  });
  var laterIndex = STORIES.findIndex(function (c) { return c.later; });
  var dataCards = MAP_STORIES.map(function (st) { return { mode: "story", story: st.id, title: st.title, text: st.card }; });
  STORIES = laterIndex === -1 ? STORIES.concat(dataCards) : STORIES.slice(0, laterIndex).concat(dataCards, STORIES.slice(laterIndex));
  d3.select("#story-cards").selectAll("li").data(STORIES).join("li").attr("class", function (d) { return "card" + (d.later ? " later" : ""); })
    .html(function (d) {
      return (d.later ? "<span class=\"badge\">Coming later</span>" : "") + "<h3>" + d.title + "</h3><p>" + d.text + "</p>" +
        (d.later ? "" : "<button>Open the story</button>");
    })
    .select("button").on("click", function (e, d) { stopPlay(); if (d.story) state.story = d.story; setMode(d.mode); });

  // Tab 1: the cantons, their ruled lands and allies in a year.
  function drawCantons(year) {
    if (year === 1798 && HELV) return drawHelvetic(HELV.stops[0]);
    var groups = T.territoryGroups(communes, year);
    var feats = Object.keys(groups).map(function (key) {
      var f = merge(groups[key].ids), g = groups[key];
      f.properties = { key: key, kind: g.kind, owner: g.owner, lord: g.lord, layer: g.layer }; return f;
    }).concat(outsideFeats(year, function (o) {
      return { key: "out-" + o.id, kind: o.kind, owner: o.owner, layer: o, outside: true };
    }));
    fillTerritories(feats, function (d) {
      var p = d.properties;
      if (p.kind === "member") return "var(--" + T.waveOf(p.key) + ")";
      if (p.kind === "lord") return "var(--lord-" + p.lord + ")";
      if (p.kind === "subject") return (p.owner === "abbey" || !T.JOINED[p.owner] || T.JOINED[p.owner] > year) ? "var(--k-ally)" : "var(--" + T.waveOf(p.owner) + ")";
      return KIND_COLOR[p.kind];
    }, function (d) { return d.properties.kind === "subject" ? "subject" : ""; });
    gFocus.selectAll("*").remove();
    var k = zoomTo(null);

    var labels = feats.map(function (f) {
      var p = f.properties;
      if (p.kind === "member") return T.UNITED[p.key]
        ? { key: p.key, text: T.UNITED[p.key].name, at: largestPoint(f.geometry || f) }
        : { key: p.key, text: p.key, at: cantonPoint(p.key) };
      if (p.kind === "ally" || p.kind === "common" || p.kind === "lord" || p.outside) return { key: p.key, text: p.layer.name, at: largestPoint(f.geometry || f), cls: "minor" };
      return null;
    }).filter(Boolean);
    drawLabels(labels, k);

    var members = Object.keys(groups).filter(function (key) { return groups[key].kind === "member"; });
    var HALF = { NW: 1, BL: 1, AI: 1 }; // second half of Unterwalden, Basel, Appenzell
    var whole = members.filter(function (key) { return !HALF[key]; }).length;
    var kinds = {};
    Object.keys(groups).forEach(function (key) { kinds[groups[key].kind] = true; });
    var legend = T.WAVES.filter(function (w) { return w.from <= year; })
      .map(function (w) { return { color: "var(--" + w.id + ")", label: w.label }; });
    if (kinds.subject) legend.push({ color: "var(--w1353)", light: true, label: "Stripes: land ruled by that canton (no vote)" });
    if (kinds.common) legend.push({ color: "var(--k-common)", label: T.KINDS.common });
    if (kinds.ally) legend.push({ color: "var(--k-ally)", label: "Ally with its own government" });
    var lordsSeen = {};
    Object.keys(groups).forEach(function (key) { if (groups[key].kind === "lord") lordsSeen[groups[key].lord] = true; });
    Object.keys(LORD_NAMES).forEach(function (l) { if (lordsSeen[l]) legend.push({ color: "var(--lord-" + l + ")", label: LORD_NAMES[l] }); });
    legend.push({ color: "var(--empty)", label: "Not linked to the Swiss" });
    setLegend(legend);
    d3.select("#stat").html(whole + " cantons" + (whole !== members.length ? " <span>(" + members.length + " if you count each half-canton)</span>" : ""));
    d3.select("#map-note").text(year < 1798
      ? "Each canton's land as researched for that date. Small details are approximate."
      : "Borders as they were in " + year + ".");
  }

  // Tab 2: Bern's real borders.
  function drawBern(year) {
    var layers = T.BERN_STOPS[year];
    var groups = T.bernGroups(communes, year);
    var feats = layers.filter(function (l) { return groups[l.id].length; }).map(function (l) {
      var f = merge(groups[l.id]); f.properties = { key: l.id, label: l.label }; return f;
    });
    var savoy = year === 1555 ? BERN_OUT_1555.filter(function (o) { return outsideById[o.id]; }).map(function (o) {
      return { type: "Feature", geometry: outsideById[o.id].geometry, properties: { key: "savoy-" + o.id, label: "Gex, Chablais, Ternier and Gaillard (today France): taken from Savoy in 1536, given back in 1564" } };
    }) : [];
    feats = feats.concat(savoy);
    fillTerritories(feats, function (d) {
      var k = d.properties.key;
      return k === "shared" ? "url(#hatch)" : k.indexOf("savoy-") === 0 ? "var(--bern)" : "var(--" + k + ")";
    }, function (d) { return d.properties.key.indexOf("savoy-") === 0 ? "subject" : ""; });

    var bern = merge(groups.bern.concat(year === 1555 ? groups.shared : []));
    gFocus.selectAll("path").data([bern].concat(savoy)).join("path").attr("class", "focus-line").attr("d", path);
    var k = zoomTo(null);

    drawLabels(feats.filter(function (f) { return BERN_LABEL[f.properties.key]; }).map(function (f) {
      var key = f.properties.key;
      return { key: key, text: BERN_LABEL[key], at: key === "bern" ? BERN_CITY : largestPoint(f.geometry || f), cls: key === "bern" ? "big" : "" };
    }), k);

    var bernLegend = feats.filter(function (f) { return f.properties.key.indexOf("savoy-") !== 0; }).map(function (f) {
      return { color: f.properties.key === "shared" ? "url-hatch" : "var(--" + f.properties.key + ")", label: f.properties.label };
    });
    if (savoy.length) bernLegend.push({ color: "var(--bern)", light: true, label: savoy[0].properties.label });
    setLegend(bernLegend);
    var a = bernSeries.filter(function (s) { return s.year === year; })[0].area;
    d3.select("#stat").html("Bern: about " + a.toLocaleString("en-GB") + " km²" + (year === 1555 ? " <span>with shared lordships</span>" : ""));
    d3.select("#map-note").text("Black line: Bern's border. Built from today's municipalities, so small details are approximate.");
    drawChart(year);
  }

  // Tab 3: the six cantons of 1803, before and after.
  function drawSix(stop) {
    var layers = stop.after ? T.AFTER_1803 : T.BEFORE_1798;
    var groups = T.groupBy(communes, layers);
    var feats = layers.filter(function (l) { return groups[l.id].length; }).map(function (l) {
      var f = merge(groups[l.id]); f.properties = { key: l.id, layer: l }; return f;
    });
    if (!stop.after) feats = feats.concat(outsideFeats(1796, function (o) {
      return { key: "out-" + o.id, layer: { id: o.id, canton: o.owner, kind: o.kind === "ally" ? "ally" : "one", name: o.name, label: o.label } };
    }));
    fillTerritories(feats, function (d) { return KIND_COLOR[d.properties.layer.kind]; });

    var focus = stop.zoom ? merge(idsWhere(function (c) { return c[0] === stop.zoom; })) : null;
    var zoomArea = focus && { type: "FeatureCollection", features: [{ type: "Feature", geometry: focus }].concat(
      feats.filter(function (f) { return f.properties.layer.canton === stop.zoom && f.type === "Feature"; })) };
    gFocus.selectAll("path").data(focus ? [focus] : []).join("path").attr("class", "focus-line").attr("d", path);
    var k = zoomTo(zoomArea);

    var labels;
    if (stop.zoom) {
      labels = feats.filter(function (f) { return f.properties.layer.canton === stop.zoom; })
        .map(function (f) { return { key: f.properties.key, text: f.properties.layer.name, at: largestPoint(f.geometry || f) }; });
      setLegend(feats.filter(function (f) { return f.properties.layer.canton === stop.zoom; })
        .map(function (f) { return { color: KIND_COLOR[f.properties.layer.kind], label: f.properties.layer.label }; }));
    } else {
      labels = T.SIX.map(function (c) { return { key: c, text: c, at: cantonPoint(c), cls: "big" }; });
      var seen = {}, legend = [];
      feats.forEach(function (f) {
        var kind = f.properties.layer.kind;
        if (!seen[kind]) { seen[kind] = true; legend.push({ color: KIND_COLOR[kind], label: T.KINDS[kind] }); }
      });
      setLegend(legend.concat([{ color: "var(--empty)", label: "Not linked to the Swiss" }]));
    }
    drawLabels(labels, k);
    d3.select("#stat").html("");
    d3.select("#map-note").text("Built from today's municipalities and districts, so small details are approximate.");
  }

  // Tab 4: one canton's own history.
  var zoomCache = {};
  function cantonZoom(h) {
    if (zoomCache[h.canton]) return zoomCache[h.canton];
    var ids = {};
    Object.keys(communes).forEach(function (id) { if (communes[id][0] === h.canton) ids[id] = 1; });
    var extra = T.OUTSIDE.filter(function (o) { return o.owner === h.canton && outsideById[o.id]; })
      .map(function (o) { return outsideById[o.id]; });
    h.stops.forEach(function (st) {
      T.stopGroups(communes, st).forEach(function (g, i) { if (st.layers[i].kind !== "other") g.forEach(function (id) { ids[id] = 1; }); });
    });
    var own = { type: "Feature", geometry: merge(Object.keys(ids).map(Number)) };
    return (zoomCache[h.canton] = { type: "FeatureCollection", features: [own].concat(extra) });
  }

  function drawCanton(stop) {
    var h = history();
    var groups = T.stopGroups(communes, stop);
    var feats = stop.layers.map(function (l, i) {
      if (!groups[i].length) return null;
      var f = merge(groups[i]); f.properties = { key: h.canton + "-" + i + "-" + l.name, layer: l }; return f;
    }).filter(Boolean).concat(outsideFeats(stop.year, function (o) {
      return { key: "out-" + o.id, layer: { kind: o.owner === h.canton ? "subject" : "other", name: o.name, label: o.label } };
    }).filter(function (f) { return T.OUTSIDE.some(function (o) { return o.owner === h.canton && "out-" + o.id === f.properties.key; }); }));
    // Several parts of the same kind get different shades, so the reader can tell them apart.
    var shade = {}, SHADES = [1, 0.72, 0.86, 0.6, 0.93, 0.66];
    feats.forEach(function (f) {
      var kind = f.properties.layer.kind === "lord" ? "lord-" + f.properties.layer.lord : f.properties.layer.kind;
      shade[kind] = (shade[kind] || 0);
      f.properties.opacity = SHADES[shade[kind]++ % SHADES.length];
    });
    fillTerritories(feats, function (d) { return layerColor(d.properties.layer); },
      function (d) { return d.properties.layer.kind === "subject" ? "subject" : ""; });
    gFill.selectAll("path").style("fill-opacity", function (d) { return d.properties.opacity || 1; });

    var today = merge(idsWhere(function (c) { return c[0] === h.canton; }));
    gFocus.selectAll("path").data([today]).join("path").attr("class", "today-line").attr("d", path);
    var k = zoomTo(cantonZoom(h));

    drawLabels(feats.map(function (f) {
      return { key: f.properties.key, text: f.properties.layer.name, at: largestPoint(f.geometry || f) };
    }), k);
    setLegend(feats.map(function (f) {
      var kind = f.properties.layer.kind;
      return { color: layerColor(f.properties.layer), light: kind === "subject", opacity: f.properties.opacity, label: f.properties.layer.label };
    }).concat([{ color: "dash", label: "Dashed line: the canton's border today" }]));

    var land = [];
    stop.layers.forEach(function (l, i) { if (l.kind === "core" || l.kind === "subject") land = land.concat(groups[i]); });
    var a = land.length ? Math.round(areaKm2(merge(land)) / 10) * 10 : 0;
    d3.select("#stat").html(a ? "Land of " + h.name + ": about " + a.toLocaleString("en-GB") + " km² <span>(own and ruled land)</span>" : "");
    d3.select("#map-note").text("Built from today's municipalities and districts, so small details are approximate.");
  }

  // Map stories (content-stories.js): areas built from today's municipalities and Europe's regions,
  // points for battles and towns, and a view of Switzerland, all of Europe, or a box.
  var STORY_COLOR = {
    habsburg: "var(--lord-habsburg)", kyburg: "var(--lord-kyburg)", zahringen: "var(--lord-zahringen)", lenzburg: "var(--lord-lenzburg)",
    savoy: "var(--lord-savoy)", bishop: "var(--lord-bishop)", abbey: "var(--lord-abbey)", empire: "var(--lord-empire)",
    milan: "var(--lord-milan)", noble: "var(--lord-noble)", burgundy: "var(--s-burgundy)", france: "var(--s-france)",
    confederates: "var(--w1353)", ally: "var(--k-ally)", enemy: "var(--s-enemy)",
    reformed: "var(--s-reformed)", catholic: "var(--s-catholic)", mixed: "var(--s-mixed)", other: "var(--c-other)"
  };
  var EUROPE_BOX = { type: "MultiPoint", coordinates: [[-9.5, 36], [30, 57]] };
  function storyView(view) {
    if (view === "europe") return EUROPE_BOX;
    if (Array.isArray(view)) return { type: "MultiPoint", coordinates: [[view[0][1], view[0][0]], [view[1][1], view[1][0]]] };
    return null;
  }
  function currentStory() { return MAP_STORIES.filter(function (st) { return st.id === state.story; })[0]; }

  function drawStory(stop) {
    var swiss = T.stopGroups(communes, { layers: stop.layers.map(function (l) { return { sel: l.sel || {} }; }) });
    var feats = [];
    stop.layers.forEach(function (l, i) {
      var parts = [];
      if (swiss[i].length) parts.push({ type: "Feature", geometry: merge(swiss[i]) });
      (l.regions || []).forEach(function (r) { if (euRegion[r]) parts.push(euRegion[r]); });
      (l.countries || []).forEach(function (c) { if (euCountry[c]) parts.push(euCountry[c]); });
      parts.forEach(function (p, j) {
        feats.push({ type: "Feature", geometry: p.geometry, properties: { key: "st-" + i + "-" + j + "-" + (p.id || "ch"), layer: l, first: j === 0 } });
      });
    });
    fillTerritories(feats, function (d) { return STORY_COLOR[d.properties.layer.kind] || "var(--c-other)"; });
    gFocus.selectAll("*").remove();
    var k = zoomTo(storyView(stop.view));
    // One label per layer, on its largest piece.
    var best = {};
    feats.forEach(function (f) {
      var a = d3.geoArea(f), name = f.properties.layer.name;
      if (!best[name] || a > best[name].a) best[name] = { a: a, f: f };
    });
    var labels = Object.keys(best).map(function (n) {
      return { key: "stl-" + n, text: n, at: largestPoint(best[n].f.geometry), cls: "minor" };
    });
    drawLabels(labels, k);
    drawPlaces(stop.places || [], k);
    var seen = {};
    setLegend(stop.layers.filter(function (l) { if (seen[l.label]) return false; seen[l.label] = true; return true; })
      .map(function (l) { return { color: STORY_COLOR[l.kind] || "var(--c-other)", label: l.label }; })
      .concat((stop.places || []).some(function (p) { return p.kind === "battle"; }) ? [{ color: "battle", label: "Battle" }] : []));
    d3.select("#stat").html("");
    d3.select("#map-note").text(stop.view === "europe" || Array.isArray(stop.view)
      ? "Old territories drawn with today's regions of Europe, so borders are approximate (German and Austrian states are large units)."
      : "Old territories drawn with today's municipalities, so small details are approximate.");
  }

  // Points: battles (red with a white cross), towns and others (dark dots), with a short label.
  function drawPlaces(places, k) {
    var g = gPlaces.selectAll("g.place").data(places, function (p) { return p.name + p.lat; })
      .join(function (en) {
        var gg = en.append("g").attr("class", "place");
        gg.append("circle"); gg.append("text");
        return gg;
      });
    g.attr("transform", function (p) { var xy = projection([p.lon, p.lat]); return "translate(" + xy[0] + "," + xy[1] + ")"; })
      .attr("class", function (p) { return "place " + (p.kind || "place"); });
    g.select("circle").attr("r", function (p) { return (p.kind === "battle" ? 5 : 3.5) * k; }).style("stroke-width", (1.5 * k) + "px");
    g.select("text").attr("x", 7 * k).attr("y", 3.5 * k).style("font-size", (10.5 * k) + "px").style("stroke-width", (3 * k) + "px")
      .text(function (p) { return p.name + (p.year ? " " + p.year : ""); })
      .append("title").text(function (p) { return p.note || ""; });
  }

  // The Helvetic Republic: each stop is a full map of its administrative cantons.
  var HELV_COLORS = ["#4e79a7", "#f28e2b", "#e15759", "#76b7b2", "#59a14f", "#edc948", "#b07aa1", "#ff9da7", "#9c755f",
                     "#86bcb6", "#8cd17d", "#b6992d", "#499894", "#d37295", "#a0cbe8", "#ffbe7d", "#d4a6c8", "#f1ce63", "#79706e", "#bab0ac"];
  var helvColor = {};
  (HELV ? HELV.stops : []).forEach(function (st) {
    st.layers.forEach(function (l) {
      if (l.kind !== "foreign" && !(l.id in helvColor)) helvColor[l.id] = HELV_COLORS[Object.keys(helvColor).length % HELV_COLORS.length];
    });
  });
  function drawHelvetic(stop) {
    var groups = T.stopGroups(communes, stop);
    var feats = stop.layers.map(function (l, i) {
      if (!groups[i].length) return null;
      var f = merge(groups[i]); f.properties = { key: "helv-" + l.id, layer: l }; return f;
    }).filter(Boolean);
    fillTerritories(feats, function (d) { return d.properties.layer.kind === "foreign" ? "var(--c-other)" : helvColor[d.properties.layer.id]; });
    gFocus.selectAll("*").remove();
    var k = zoomTo(null);
    drawLabels(feats.filter(function (f) { return f.properties.layer.kind !== "foreign"; }).map(function (f) {
      return { key: f.properties.key, text: f.properties.layer.name, at: largestPoint(f.geometry || f), cls: "minor" };
    }), k);
    setLegend(feats.map(function (f) {
      var l = f.properties.layer;
      return { color: l.kind === "foreign" ? "var(--c-other)" : helvColor[l.id], label: l.label };
    }));
    d3.select("#stat").html(feats.filter(function (f) { return f.properties.layer.kind !== "foreign"; }).length + " Helvetic cantons");
    d3.select("#map-note").text("Helvetic borders drawn with today's municipalities, so small details are approximate.");
  }

  function setLegend(items) {
    d3.select("#legend").selectAll("li").data(items).join("li")
      .html(function (d) {
        if (d.color === "battle") return '<span class="swatch" style="background:#c8281e;border-radius:50%;border:2px solid #fff;box-shadow:0 0 0 1px #c8281e"></span><span>' + d.label + "</span>";
        if (d.color === "dash") return '<span class="swatch" style="border:1.5px dashed var(--ink);background:transparent"></span><span>' + d.label + "</span>";
        var bg = d.color === "url-hatch"
          ? "background: repeating-linear-gradient(45deg, var(--bern) 0 3px, var(--shared) 3px 6px)"
          : d.light ? "background: repeating-linear-gradient(45deg, " + d.color + " 0 4px, var(--panel) 4px 6px)"
          : "background:" + d.color + (d.opacity && d.opacity < 1 ? ";opacity:" + d.opacity : "");
        return '<span class="swatch" style="' + bg + '"></span><span>' + d.label + "</span>";
      });
  }

  function drawChart(year) {
    var cw = 330, ch = 150, pad = 18;
    var chart = d3.select("#chart-svg").attr("viewBox", "0 0 " + cw + " " + ch);
    var x = d3.scaleBand().domain(bernSeries.map(function (d) { return d.year; })).range([0, cw]).padding(0.25);
    var y = d3.scaleLinear().domain([0, d3.max(bernSeries, function (d) { return d.area; })]).range([ch - pad, 16]);
    chart.selectAll("rect").data(bernSeries).join("rect")
      .attr("class", function (d) { return "bar" + (d.year === year ? " on" : ""); })
      .attr("x", function (d) { return x(d.year); }).attr("width", x.bandwidth())
      .attr("y", function (d) { return y(d.area); }).attr("height", function (d) { return y(0) - y(d.area); })
      .attr("rx", 2);
    chart.selectAll("text.bar-label").data(bernSeries).join("text").attr("class", "bar-label")
      .attr("x", function (d) { return x(d.year) + x.bandwidth() / 2; }).attr("y", ch - 4)
      .text(function (d) { return d.year; });
    chart.selectAll("text.bar-value").data(bernSeries).join("text").attr("class", "bar-value")
      .attr("x", function (d) { return x(d.year) + x.bandwidth() / 2; })
      .attr("y", function (d) { return y(d.area) - 4; })
      .text(function (d) { return d3.format(".1f")(d.area / 1000) + "k"; });
  }

  function tickText(s) { return s.tick || String(s.year); }

  function renderTicks() {
    var list = stops();
    // Key by position: two steps can share a year (for example two views of 1883).
    d3.select("#ticks").selectAll("li").data(list, function (d, i) { return state.mode + i + tickText(d); }).join("li")
      .html(function (d) { return "<button>" + tickText(d) + "</button>"; })
      .select("button")
      .attr("aria-current", function (d, i) { return i === state.index ? "true" : "false"; })
      .attr("aria-label", function (d) { return tickText(d) + ": " + d.title; })
      .on("click", function (e, d) { stopPlay(); go(list.indexOf(d)); });
  }

  function render() {
    var s = stops()[state.index];
    var when = s.when || String(s.year);
    d3.select("#year").text(when).classed("long", when.length > 5);
    d3.select("#title").text(s.title);
    d3.select("#text").selectAll("p").data(s.text).join("p").text(function (d) { return d; });
    d3.select("#chart").attr("hidden", state.mode === "bern" ? null : true);
    d3.select("#back-stories").attr("hidden", STORY_MODES[state.mode] ? null : true);
    if (state.mode !== "story") gPlaces.selectAll("*").remove();
    if (state.mode === "cantons") drawCantons(s.year);
    else if (state.mode === "bern") drawBern(s.year);
    else if (state.mode === "canton") drawCanton(s);
    else if (state.mode === "helvetic") drawHelvetic(s);
    else if (state.mode === "story") drawStory(s);
    else drawSix(s);
    var h = state.mode === "canton" ? history() : null;
    d3.select("#picker").attr("hidden", state.mode === "canton" ? null : true);
    if (state.mode === "canton") syncPick();
    d3.select("#summary").attr("hidden", h ? null : true).text(h ? h.name + ": " + h.summary : "");
    // "Uncertain" note on every step: the canton's own notes, or a general note for the main map and stories.
    d3.select("#notes").attr("hidden", null);
    d3.select("#notes-text").text(h && h.notes ? h.notes : state.mode === "cantons"
      ? "Before 1798, each canton's land comes from its researched history (see \"Every canton\"). Most borders are drawn by today's districts, so small places can be on the wrong side."
      : "Old territories are drawn by joining today's municipalities, so small details are approximate.");
    renderTicks();
    var cur = document.querySelector('#ticks [aria-current="true"]');
    if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: "nearest", inline: "nearest" });
    var slug = tickText(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
    if (state.mode === "canton") slug = state.canton.toLowerCase() + "-" + slug;
    if (state.mode === "story") slug = state.story + "--" + slug;
    try { window.history.replaceState(null, "", "#" + state.mode + "-" + slug); } catch (e) { /* file:// in some browsers */ }
  }

  function go(i) {
    var n = stops().length;
    state.index = (i + n) % n;
    render();
  }

  function setMode(mode, slug) {
    if (mode === "story" && slug && slug.indexOf("--") > 0) { state.story = slug.split("--")[0]; slug = slug.split("--")[1]; }
    if (mode === "story" && !currentStory()) mode = "cantons";
    if (mode === "canton" && !HIST.length) mode = "cantons";
    if (mode === "canton" && slug) {
      var cm = /^([a-z]{2})-?(.*)$/.exec(slug);
      if (cm && HIST.some(function (h) { return h.canton === cm[1].toUpperCase(); })) { state.canton = cm[1].toUpperCase(); slug = cm[2]; }
    }
    state.mode = mode;
    var list = stops(), i = 0;
    if (slug) list.forEach(function (s, j) {
      if (tickText(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "") === slug) i = j;
    });
    state.index = i;
    var tab = STORY_MODES[mode] ? "stories" : mode;
    d3.selectAll(".modes button").attr("aria-selected", function () { return this.dataset.mode === tab ? "true" : "false"; });
    showStories(false);
    gLabels.selectAll("*").remove();
    gFill.selectAll("*").remove();
    gPlaces.selectAll("*").remove();
    render();
  }

  var timer = null;
  function stopPlay() { if (timer) { clearInterval(timer); timer = null; d3.select("#play").html("&#9654;").attr("aria-label", "Play"); } }
  d3.select("#play").on("click", function () {
    if (timer) return stopPlay();
    d3.select(this).html("&#10074;&#10074;").attr("aria-label", "Pause");
    if (state.index === stops().length - 1) go(0);
    timer = setInterval(function () {
      if (state.index === stops().length - 1) return stopPlay();
      go(state.index + 1);
    }, 3200);
  });
  d3.select("#prev").on("click", function () { stopPlay(); go(state.index - 1); });
  d3.select("#next").on("click", function () { stopPlay(); go(state.index + 1); });
  // The Stories tab shows the cards instead of the map.
  function showStories(on) {
    d3.select("#stories").attr("hidden", on ? null : true);
    d3.select("#main").attr("hidden", on ? true : null);
    if (on) {
      d3.selectAll(".modes button").attr("aria-selected", function () { return this.dataset.mode === "stories" ? "true" : "false"; });
      try { window.history.replaceState(null, "", "#stories"); } catch (e) { /* file:// */ }
    }
  }
  d3.selectAll(".modes button").on("click", function () {
    stopPlay();
    if (this.dataset.mode === "stories") showStories(true); else setMode(this.dataset.mode);
  });
  d3.select("#back-stories").on("click", function (e) { e.preventDefault(); stopPlay(); showStories(true); });
  document.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === "ArrowRight") { stopPlay(); go(state.index + 1); }
    if (e.key === "ArrowLeft") { stopPlay(); go(state.index - 1); }
  });

  d3.select("#sources").html(
    'Borders: <a href="https://www.bfs.admin.ch/bfs/en/home/services/geostat.html">BFS GEOSTAT</a>, generalised municipality borders, state 1 January 2026, via ' +
    '<a href="https://github.com/interactivethings/swiss-maps">swiss-maps</a> (non-commercial use). ' +
    'Municipality list: <a href="https://www.agvchapp.bfs.admin.ch/">BFS official register of municipalities</a>, 1 January 2026. ' +
    'Europe: <a href="https://www.naturalearthdata.com/">Natural Earth</a> (public domain). ' +
    'History: <a href="https://hls-dhs-dss.ch/">Historisches Lexikon der Schweiz</a>.');

  // Canton picker: a small clickable map of today's cantons.
  var PW = 360, PH = 232;
  var pickProj = d3.geoMercator().fitExtent([[4, 4], [PW - 4, PH - 4]], country);
  var pickPath = d3.geoPath(pickProj);
  var pickSvg = d3.select("#picker-map").attr("viewBox", "0 0 " + PW + " " + PH);
  var hasHist = {};
  HIST.forEach(function (h) { hasHist[h.canton] = h; });
  var pickFeats = cantonFeatures.filter(function (f) { return hasHist[CANTON_IDS[f.id - 1]]; });
  function pickCanton(abbr) {
    stopPlay(); state.canton = abbr; state.index = 0;
    gLabels.selectAll("*").remove(); gFill.selectAll("*").remove(); render();
  }
  pickSvg.selectAll("path").data(pickFeats).join("path")
    .attr("class", "pick").attr("d", pickPath).attr("tabindex", 0).attr("role", "button")
    .attr("aria-label", function (f) { return hasHist[CANTON_IDS[f.id - 1]].name; })
    .on("click", function (e, f) { pickCanton(CANTON_IDS[f.id - 1]); })
    .on("keydown", function (e, f) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pickCanton(CANTON_IDS[f.id - 1]); } })
    .append("title").text(function (f) { return hasHist[CANTON_IDS[f.id - 1]].name; });
  pickSvg.selectAll("text").data(pickFeats).join("text").attr("class", "pick-label")
    .attr("x", function (f) { return pickPath.centroid(f)[0]; })
    .attr("y", function (f) { return pickPath.centroid(f)[1] + 3; })
    .text(function (f) { return CANTON_IDS[f.id - 1]; });
  function syncPick() {
    pickSvg.selectAll(".pick").classed("on", function (f) { return CANTON_IDS[f.id - 1] === state.canton; });
    pickSvg.selectAll(".pick-label").classed("on", function (f) { return CANTON_IDS[f.id - 1] === state.canton; });
  }

  var startHash = location.hash;
  var m = /^#(cantons|six|bern|canton|helvetic|story)-([a-z0-9-]+)$/.exec(startHash);
  setMode(m ? m[1] : "cantons", m ? m[2] : null);
  syncPick();
  if (startHash === "#stories") showStories(true);
})();
