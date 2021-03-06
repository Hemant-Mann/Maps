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
		events: [{
			name: 'click',
			callback: function (e, marker) {
				console.log(e, marker);
			}
		}, {
			name: 'dragend',
			callback: function () {
				alert('Marker was dragged to a new locaation');
			}
		}],
		// },
		content: 'This is my college DTU'
		// icon: 'http://path.to.map.icon'
	});
	// console.log(map.markers);

	// we get the marker we are looking for
	// var found = map.findBy(function (marker) {
	// 	return marker.id === 2;
	// });
	// console.log(found);

	// map.removeBy(function (marker) {
	// 	console.log(marker);
	// 	return marker.id === 2;
	// });
	
	/****** Code for Adding Multiple Random Markers *********
	for (var i = 0; i < 40; ++i) {
		var id = i + 1;
		map.addMarker({
			id: id,
			lat: 28.7499867 + Math.random(),
			lng: 77.11831370000004 + Math.random(),
			content: 'This is Marker no: ' + id
		});

		var marker = map.addMarker({
			id: id,
			lat: 28.5471 + Math.random(),
			lng: 77.2040 + Math.random(),
			content: 'This is Marker no: ' + id
		});		
	}*/
	
}(window, window.Mapster || (window.Mapster = {})));
