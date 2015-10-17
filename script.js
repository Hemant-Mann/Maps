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

	var marker1 = map.addMarker({
		lat: 28.7499867,
		lng: 77.11831370000004,
		visible: true,
		draggable: true,
		id: 1,
		// evt: {
		// 	name: 'click',
		// 	callback: function () {
		// 		alert('Marker is clicked'); do something
		// 	}
		// },
		content: 'This is my college DTU'
		// icon: 'http://path.to.map.icon'
	});

	var marker2 = map.addMarker({
		lat: 28.5471,
		lng: 77.2040,
		visible: true,
		draggable: true,
		id: 2,
		content: 'Hauz Khas Village'
	});
	// console.log(map.markers);

	// we get the marker we are looking for
	var found = map.findMarkerByLat(28.7499867);
	console.log(found);
	
}(window, window.Mapster || (window.Mapster = {})));
