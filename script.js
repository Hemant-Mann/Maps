(function (window, mapster) {
	// map options
	var options = mapster.MAP_OPTIONS
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);
	map.zoom(13);

	map._on('click', function (e) {
		// do something with the event
		console.log(e);
	});
	// similarly we can add more events
	
}(window, window.Mapster || (window.Mapster = {})));