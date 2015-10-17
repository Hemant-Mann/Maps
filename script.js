(function (window, google) {
	// map options
	var options = {
		center: {
			lat: 21,
			lng: 78
		},
		zoom: 10
	},
	element = document.getElementById('map-canvas'),

	map = new google.maps.Map(element, options);
}(window, google));