var map;
var marker;
var home = {lat:32.860579, lng:-117.2243106};
var centerHome = {lat:32.8705718, lng:-117.2329398}; 
function initMap() {
  // Create a map object and specify the DOM element for display.
  map = new google.maps.Map(document.getElementById('map'), {
    center: centerHome,
    zoom: 15
  });

  marker = new google.maps.Marker({
      position: home,
      map: map,
      title: 'HOME'
  });
}

function refreshMap(){

setTimeout(function(){
        google.maps.event.trigger(map, 'resize');
    }, 1000);
  console.log("pressed");
}

$('#mapsButton').on('click',refreshMap);
