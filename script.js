(function (window, mapster) {
	// map options
	var options = mapster.MAP_OPTIONS
	element = document.getElementById('map-canvas'),

	map = mapster.create(element, options);
	map.zoom(13);

	var obj = map.gMap;
	map._on({
		obj: obj,
		event: 'click',
		callback: function (e) {
			console.log(e);
		}
	});
	// similarly we can add more events

	map.addMarker({
		lat: 28.7499867,
		lng: 77.11831370000004,
		visible: true,
		draggable: true,
		id: 1,
		evt: {
			name: 'click',
			callback: function () {
				alert('Marker is clicked');
			}
		}
		// icon: 'http://path.to.map.icon'
	});
	
}(window, window.Mapster || (window.Mapster = {})));