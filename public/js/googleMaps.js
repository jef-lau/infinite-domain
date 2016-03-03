var map;
var marker;
var ucsd_cicc = {lat:32.885078, lng:-117.241314};
var test = {lat:32.8850091, lng:-117.243509};
function initMap() {

  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_cicc,
    zoom: 14
  });

  marker = new google.maps.Marker({
      position: ucsd_cicc,
      map: map,
      title: 'UCSD CICC'
  });
}

function refreshMap(){
  google.maps.event.trigger(map, 'resize');
  map.setCenter(marker.getPosition());
  // console.log("pressed");

}
