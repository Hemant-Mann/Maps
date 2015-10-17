(function (window, mapster) {
	// map options
	var options = mapster.MAP_OPTIONS
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);
	map.zoom(13);
}(window, window.Mapster || (window.Mapster = {})));