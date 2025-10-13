var vg_1 = "map.json";
vegaEmbed("#map", vg_1, { actions: false }).then(function(result) {
  // Vega view instance available as result.view
}).catch(console.error);

var vg_2 = "precipitation.json";
vegaEmbed("#precipitation", vg_2, { actions: false }).then(function(result) {
  // Vega view instance available as result.view
}).catch(console.error);
