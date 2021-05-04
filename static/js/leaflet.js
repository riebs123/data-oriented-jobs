console.log("leaflet.js loaded");

// Creating map object
var myMap = L.map("leafmap", {
    center: [38.92, -97],
    zoom: 5,
 //   layers: [grayscale, cities]
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  //marker example
  var marker = L.marker([47.80, -88.183], {
    draggable: true,
    title: "big lake"
  }).addTo(myMap);
  
  // marker popup example
  marker.bindPopup("this is a lake");