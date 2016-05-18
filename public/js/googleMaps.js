var map;
var marker;
var home = {lat:32.860579, lng:-117.2243106};
function initMap() {

  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: home,
    zoom: 15
  });

  marker = new google.maps.Marker({
      position: home,
      map: map,
      title: 'HOME'
  });
}

function refreshMap(){
  google.maps.event.trigger(map, 'resize');
  map.setCenter(marker.getPosition());
  console.log("pressed");

}

$('#mapsButton').on('click',initialize);

function initialize() {
  google.maps.event.trigger(map, 'resize');
  map.setCenter(marker.getPosition());
  console.log("pressed");
}
