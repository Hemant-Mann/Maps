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


	$mapster.mapster('removeMarkers', function (marker) {
		return marker.id === 1;
	});

	console.log($mapster.mapster('markers'));
}(window, jQuery));