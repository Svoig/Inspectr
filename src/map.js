"use strict";

var map, service;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 45.5, lng: -122.7},
          zoom: 10
    });

    service = new google.maps.places.PlacesService(map);
}