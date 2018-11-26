"use strict";

/* USE STATIC MAP */
var API_KEY = "AIzaSyDuF95maYZ_HJh7cWkwaSimg7cPILT_pxs";
var latitude = document.getElementById("txtlatitude");
var longitude = document.getElementById("txtlongitude");
var errors = document.getElementById("errors");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        errors.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    latitude.value = position.coords.latitude;
    longitude.value = position.coords.longitude;
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&markers=color:red|label:X|" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false&key=" + API_KEY;
    document.getElementById("mapHolder").innerHTML = "<img src='" + img_url + "'>";
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errors.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errors.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errors.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errors.innerHTML = "An unknown error occurred.";
            break;
    }
}

//https://maps.googleapis.com/maps/api/staticmap?center=40.714728,-73.998672&zoom=14&size=400x400&key=YOUR_API_KEY