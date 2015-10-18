(function (window, google, mapster) {

	var styles = [{
		featureType: 'water',
		elementType: 'geometry',
		stylers: [
			{color: '#3498db'}
		]
	}, {
		featureType: 'road.highway',
		elementType: 'geometry',
		stylers: [
			{color: '#34495e'}
		]
	}];

	mapster.MAP_OPTIONS = {
		center: {
			lat: 28.7,
			lng: 77
		},
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: true,
		draggable: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoomControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM,
			style: google.maps.ZoomControlStyle.DEFAULT
		},
		panControlOptions: {
			position: google.maps.ControlPosition.LEFT_BOTTOM
		},
		cluster: {
			options: {
				// style: [{
				// }]
			}
		},
		geocoder: true,
		styles: styles
	};

}(window, google, window.Mapster || (window.Mapster = {})));
