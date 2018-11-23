/* USES NON-STATIC MAP */
const API_KEY = "AIzaSyDuF95maYZ_HJh7cWkwaSimg7cPILT_pxs";
let latitude = document.getElementById("txtlatitude");
let longitude = document.getElementById("txtlongitude");
let errors = document.getElementById("errors");
let locationSelectButton = document.getElementById("location");

latitude.hidden = true;
longitude.hidden = true;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
        errors.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var map;
var markers = [];
function showPosition(position) {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
    var latlon = position.coords.latitude + "," + position.coords.longitude;

     // The location of Uluru
  var userLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
  // The map, centered at Uluru
   map = new google.maps.Map(
      document.getElementById('mapHolder'), {zoom: 15, center: userLocation});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: userLocation, map: map});

  reverseGeoencoding(position.coords.latitude, position.coords.longitude);
  markers.push(marker);

  //Adding Marker upon click
  map.addListener('click', function(e) {
    placeMarkerAndPanTo(e.latLng, map);
    //console.log(e.latLng.lat());
    //console.log(e.latLng.lng());
    latitude.value = e.latLng.lat();
    longitude.value = e.latLng.lng();
  }); 
}

 // Sets the map on all markers in the array.
 function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

function placeMarkerAndPanTo(latLng, map) {
    setMapOnAll(null);
    markers = [];
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng);
    markers.push(marker);

    reverseGeoencoding(latLng.lat(), latLng.lng());
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
  }
  function removeOptions(selectbox)
  {
      var i;
      for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
      {
          selectbox.remove(i);
      }
  }

  function reverseGeoencoding(lat, lng) {
    removeOptions(locationSelectButton);
  fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyDuF95maYZ_HJh7cWkwaSimg7cPILT_pxs' , {
    method: 'GET'
  })
    .then((resp) => resp.json())
    .then((data) => {
      let obj = JSON.parse(JSON.stringify(data));
      obj.results.forEach(element => {
          //console.log(element.formatted_address);
          let option = document.createElement('option');
          option.text = element.formatted_address;
          locationSelectButton.add(option);
      });
      
    })
    .catch((err) => console.log(err))
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            errors.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            errors.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            errors.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            errors.innerHTML = "An unknown error occurred."
            break;
    }
}

//https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=14&size=400x400&key=YOUR_API_KEY

let createRedFlag = () =>{
    window.location.href = 'profile.html'  
  }

  let createIntervention = () =>{
    window.location.href = 'profile.html'  
  }