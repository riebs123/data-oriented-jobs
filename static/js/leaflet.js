console.log('leaflet js loaded')


// Create a map object
var myMap = L.map("leafmap", {
  center: [39, -97],
  zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Test data
var job_counts = [
  { JOB_CATEGORY:"Business Analyst",
  LOCATION:   "Scotts Valley, CA",
  LAT: 37.0510595,
  LONG: -122.0146841,
  JOB_COUNT:  10},
  { JOB_CATEGORY : "Data Science",
  LOCATION:   "Pasadena, CA",
  LAT: 37.0510595,
  LONG: -118.1444779,
  JOB_COUNT:  10},
  { JOB_CATEGORY:"Business Analyst",
  LOCATION:       "Burbank, CA",
  LAT: 34.1816482,
  LONG: -118.3258554,
  JOB_COUNT:  21},
  { JOB_CATEGORY:"Data Analyst",
  LOCATION:		"Pico Rivera, CA",
  LAT: 33.9830688,
  LONG: -118.096735,
  JOB_COUNT:	5}
  // ,
  // { JOB_CATEGORY:"Data Engineer",
  // LOCATION:		"Monterey Park, CA",
  // LAT: 34.051522,
  // LONG: -118.129807,
  // JOB_COUNT: 3}
  ];

  //define arrays to hold circles
var busAnalMarkers = [];
var dataAnalMarkers = [];
var dataSciMarkers = [];
var dataEngMarkers = [];

// Loop through the cities array and create one marker for each city object
for (var i = 0; i < job_counts.length; i++) {

  var color = "";
  var lat = job_counts[i].LAT;
  var long = job_counts[i].LONG;
  var markerRad = job_counts[i].JOB_COUNT;
  var jobLoc = job_counts[i].LOCATION;
  var jobCount = job_counts[i].JOB_COUNT;

  if (job_counts[i].JOB_CATEGORY == 'Business Analyst') {
    color = "yellow";
  }
  else if (job_counts[i].JOB_CATEGORY == 'Data Science') {
    color = "blue";
  }
  else if (job_counts[i].JOB_CATEGORY == 'Data Engineer') {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle([job_counts[i].LAT,job_counts[i].LONG], {
    fillOpacity: 0.75,
    color: color,
    fillColor: color,
    // Adjust radius
    radius: job_counts[i].JOB_COUNT * 1500
  }).bindPopup("<h2>" + job_counts[i].LOCATION + "</h2> <hr> <h3>Total Jobs: " + job_counts[i].JOB_COUNT + "</h3>").addTo(myMap);
}

// Set up the legend
var legend = L.control({ position: "topright" });
legend.onAdd = function() {  //when add legend to map need to calculate few things
  var div = L.DomUtil.create("div", "info legend");   //creates a div with class of info legend

  var labels = [];
  // Add min & max
  //populates stuff in legend
  var legendInfo = "<h1>Legend</h1>" +
    "<div class=\"labels\">" +
      "<div class=\"min\">  Data Analyst <BR>" +
      " Data Sceintist  </div>" +
    "</div>";
//modify html to add legend info
  div.innerHTML = legendInfo;
  // limits.forEach(function(limit, index) {
  //   labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
  // });
  div.innerHTML += "<ul>" + labels.join("") + "</ul>";
  return div;
};
// Adding legend to the map
legend.addTo(myMap);