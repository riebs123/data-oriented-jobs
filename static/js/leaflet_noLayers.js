console.log('leaflet js loaded');


function drawLeafMap(selectValue) {
console.log(selectValue);
//define arrays to hold circles
var busAnalMarkers = [];
var dataAnalMarkers = [];
var dataSciMarkers = [];
var dataEngMarkers = [];


d3.json("/jobbubbles").then(function (job_counts) {

  // ... and dump that JSON to the console for inspection
  console.log(job_counts); 

// Loop through the job counts marker for each city object
for (var i = 0; i < job_counts.length; i++) {//6; i++){//
// console.log(job_counts[i])
  var color = "";
  var lat = job_counts[i].lat;
  var long = job_counts[i].long;
  var markerRadius = job_counts[i].job_count * 1000;
  var jobLoc = job_counts[i].location;
  var jobCount = job_counts[i].job_count;
  var jobCategory = job_counts[i].job_category;
  var popUpText = jobLoc + "<br>Total Jobs: " + jobCount;

  if (jobCategory == 'Business Analyst') {
    color = "yellow";
    busAnalMarkers.push(
      L.circle([lat, long], {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        radius: markerRadius
      }).bindPopup(popUpText)
    );
  }
  else if (jobCategory  == 'Data Science') {
    color = "blue";
    dataSciMarkers.push(
      L.circle([lat, long], {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        radius: markerRadius
      }).bindPopup(popUpText)
    );

  }
  else if (jobCategory  == 'Data Engineer') {
    color = "green";
    dataEngMarkers.push(
      L.circle([lat, long], {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        radius: markerRadius
      }).bindPopup(popUpText)
    );
  }
  else {
    color = "red";
    dataAnalMarkers.push(
      L.circle([lat, long], {
        fillOpacity: 0.75,
        color: color,
        fillColor: color,
        radius: markerRadius
      }).bindPopup(popUpText)
    );
  }
}


  var dataSciLayer = L.layerGroup(dataSciMarkers);
  var busAnalyLayer = L.layerGroup(busAnalMarkers);
  var dataEngLayer = L.layerGroup(dataEngMarkers);
  var dataAnalyLayer = L.layerGroup(dataAnalMarkers);

  var overlayMaps = {
    "Data Scientist": dataSciLayer,
    "Business Analyst": busAnalyLayer,
    "Data Engineer" : dataEngLayer,
    "Data Analyst" : dataAnalyLayer
  };
  
//   // Add circles to map
//   L.circle([job_counts[i].LAT, job_counts[i].LONG], {
//     fillOpacity: 0.75,
//     color: color,
//     fillColor: color,
//     // Adjust radius
//     radius: job_counts[i].JOB_COUNT * 1500
//   }).bindPopup("<h2>" + job_counts[i].LOCATION + "</h2> <hr> <h3>Total Jobs: " + job_counts[i].JOB_COUNT + "</h3>").addTo(myMap);
// }

var myMap = L.map("leafmap", {
  center: [39, -97],
  zoom: 4,
  layers: [dataSciLayer,busAnalyLayer, dataEngLayer, dataAnalyLayer]
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

//only want checkboxes in the control, not radio buttons hence first variable passed as NULL
//L.control.layers(null, overlayMaps, {collapsed: false}).addTo(myMap);

});
};

console.log("am I here?")
drawLeafMap("TestSelection");
// Set up the legend
// var legend = L.control({ position: "topright" });
// legend.onAdd = function () {  //when add legend to map need to calculate few things
//   var div = L.DomUtil.create("div", "info legend");   //creates a div with class of info legend

//   var labels = [];
//   // Add min & max
//   //populates stuff in legend
//   var legendInfo = "<h1>Legend</h1>" +
//     "<div class=\"labels\">" +
//     "<div class=\"min\">  Data Analyst <BR>" +
//     " Data Sceintist  </div>" +
//     "</div>";
//   //modify html to add legend info
//   div.innerHTML = legendInfo;
//   // limits.forEach(function(limit, index) {
//   //   labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//   // });
//   div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//   return div;
// };
// // Adding legend to the map
// legend.addTo(myMap);