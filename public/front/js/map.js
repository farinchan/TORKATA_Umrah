function initMap() {

// Specify features and elements to define styles.
var styleArray = [
{
  featureType: "all",
  stylers: [
  { saturation: -90 }
  ]
}, {
  featureType: "road.arterial",
  elementType: "geometry",
  stylers: [
  { hue: "#4DB7FE" },
  { saturation: 50 }
  ]
}, {
  featureType: "poi.business",
  elementType: "labels",
  stylers: [
  { visibility: "off" }
  ]
}
];

// Create a map object and specify the DOM element for display.
var latlng = new google.maps.LatLng(40.713355, -74.005535);// Change a map coordinate here!
var map = new google.maps.Map(document.getElementById("map"), {
  center: latlng, 
  scrollwheel: false,
// Apply the map style array to the map.
styles: styleArray,
zoom: 13
});
}