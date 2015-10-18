(function (window, $) {
	/******* Initializing the Map ******/
	var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);

	/***** Adding a marker on map through geocoding *******/	
	$mapster.mapster('addMarker', {
		id: 1,
		location: 'DTU, New Delhi'
	});

	/***** Adding a marker on map through lat, lng *******/
	$mapster.mapster('addMarker', {
		id: 2,
		lat: 28.5471,
		lng: 77.2040,
		content: 'Hauz Khas Village',
		draggable: true,
	});

	/***** Finding markers on the map *******/
	var matches = $mapster.mapster('findMarkers', function (marker) {
		return marker.id === 1;
	});

	// $mapster.mapster('removeMarkers', function (marker) {
	// 	return marker.id === 1;
	// });
	
	/**** Setting a Panorama on map *****/
	$mapster.mapster('setPano', '#pip-pano', {
		position: {
			lat: 28.749473598668043,
			lng: 77.11773633956909
		},
		pov: {
			heading: 115,
			pitch: 8
		},
		events: [{
			name: 'position_changed',
			callback: function () {
				// alert('changed');
			}
		}, {
			name: 'pov_changed',
			callback: function () {
				// console.log('changed');
			}
		}, {
			name: 'links_changed',
			callback: function (e, panorama) {
				console.log(panorama.getLinks());
			}
		}]
	});


	console.log($mapster.mapster('markers'));
}(window, jQuery));