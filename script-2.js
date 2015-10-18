(function (window, $) {
	var $mapster = $('#map-canvas').mapster(Mapster.MAP_OPTIONS);

	$mapster.mapster('addMarker', {
		id: 1,
		lat: 28.7499867,
		lng: 77.11831370000004,
		content: 'Delhi Technological University'
	});

	$mapster.mapster('addMarker', {
		id: 2,
		lat: 28.5471,
		lng: 77.2040,
		content: 'Hauz Khas Village',
		draggable: true,
	});

	var matches = $mapster.mapster('findMarkers', function (marker) {
		return marker.id === 1;
	});

	// $mapster.mapster('removeMarkers', function (marker) {
	// 	return marker.id === 1;
	// });
	
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