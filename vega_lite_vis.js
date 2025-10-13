var vg_1 = "map.json";
vegaEmbed("#map", vg_1, { actions: false }).then(function(result) {
  console.log("Map loaded");
}).catch(function(error) {
  console.error("Error loading map.json:", error);
});

var vg_2 = "two.json";
vegaEmbed("#precipitation", vg_2, { actions: false }).then(function(result) {
  console.log("Scatterplot and bar charts loaded");
}).catch(function(error) {
  console.error("Error loading two.json:", error);
});

var vg_3 = "metrics.json";
vegaEmbed("#metrics", vg_3, { actions: false }).then(function(result) {
  console.log("Metrics loaded");
}).catch(function(error) {
  console.error("Error loading metrics.json:", error);
});
