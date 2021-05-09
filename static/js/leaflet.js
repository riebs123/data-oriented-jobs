console.log('leaflet js loaded');
var myMap = L.map("leafmap", {
  center: [39, -97],
  zoom: 4,
});

var dataSciLayer;
var busAnalyLayer;
var dataEngLayer;
var dataAnalyLayer;

function reCircleForSelected(selectedValue) {
  console.log("well this worked.")
  myMap.removeLayer(dataSciLayer);
  myMap.removeLayer(busAnalyLayer);
  myMap.removeLayer(dataAnalyLayer);
  myMap.removeLayer(dataEngLayer);
  if (selectedValue == "All") {
    myMap.addLayer(dataSciLayer);
    myMap.addLayer(busAnalyLayer);
    myMap.addLayer(dataEngLayer);
    myMap.addLayer(dataAnalyLayer);
  } else if (selectedValue == "Data Science") {
    myMap.addLayer(dataSciLayer);
  } else if (selectedValue == "Data Analyst") {
    myMap.addLayer(dataAnalyLayer);
  } else if (selectedValue == "Business Analyst") {
    myMap.addLayer(busAnalyLayer);
  } else if (selectedValue == "Data Engineer") {
    myMap.addLayer(dataEngLayer);
  }
}
function drawLeafMap(selectedValue) {

  console.log(selectedValue);
  //define arrays to hold circles
  var busAnalMarkers = [];
  var dataAnalMarkers = [];
  var dataSciMarkers = [];
  var dataEngMarkers = [];


  d3.json("/jobbubbles").then(function (job_counts) {

    // console.log(job_counts); //test output

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
      else if (jobCategory == 'Data Science') {
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
      else if (jobCategory == 'Data Engineer') {
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

    //declared these outside of function
    dataSciLayer = L.layerGroup(dataSciMarkers);
    busAnalyLayer = L.layerGroup(busAnalMarkers);
    dataEngLayer = L.layerGroup(dataEngMarkers);
    dataAnalyLayer = L.layerGroup(dataAnalMarkers);

    var overlayMaps = {
      "Business Analyst": busAnalyLayer,
      "Data Analyst": dataAnalyLayer,
      "Data Engineer": dataEngLayer,
      "Data Scientist": dataSciLayer
    };


    myMap.addLayer(dataSciLayer);
    myMap.addLayer(busAnalyLayer);
    myMap.addLayer(dataEngLayer);
    myMap.addLayer(dataAnalyLayer);


      L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
      }).addTo(myMap);

      if (selectedValue == 'Business Analyst') {
        console.log("selected BA!")
      }
      //only want checkboxes in the control, not radio buttons hence first variable passed as NULL
      L.control.layers(null, overlayMaps, { collapsed: false }).addTo(myMap);
  });
};

console.log("am I here?")
