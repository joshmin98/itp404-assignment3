let getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
	let lat = position.coords.latitude;
	let long = position.coords.longitude;

	let map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 20,
	    center: new google.maps.LatLng(lat, long)
	});

	let geocoder = new google.maps.Geocoder();
	geocoder.geocode({
	    'location': {lat: lat,
			 lng: long}
	}, (results) => {
	    marker = new google.maps.Marker({
		map: map,
		position: new google.maps.LatLng(lat, long),
		animation: google.maps.Animation.DROP
	    });

	    infoWindow = new google.maps.InfoWindow({
		position: new google.maps.LatLng(lat, long),
		content: `Approximate Location: <strong>${results[0].formatted_address}</strong>`
	    });
	    google.maps.event.addListener(marker, 'click', () => {
		infoWindow.open(map);
	    });

	});
    }, (error) => {
	console.log(error);
    }, {});
};

