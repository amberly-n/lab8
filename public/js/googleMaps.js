function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.8851557, lng:-117.2412031};

  // Create a map object and specify the DOM element for display.
  // replace the div that has the id #map with the google maps view
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      // create a marker on top of UCSD
      map: map,
      title: 'UCSD'
  });
}