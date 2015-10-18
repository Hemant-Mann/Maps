(function (window, google, mapster) {
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
		}
	};

}(window, google, window.Mapster || (window.Mapster = {})));
