(function (window, google, List) {
	var Mapster = (function (){
		function Mapster(element, opts) {
			this.gMap = new google.maps.Map(element, opts);
			this.markers = List.create();
			if (opts.cluster) {
				this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster.options);	
			}

			if (opts.geocoder) {
				this.geocoder = new google.maps.Geocoder();
			}
			
		}

		Mapster.prototype = {
			zoom: function (level) {
				if (level) {
					this.gMap.setZoom(level);
				} else {
					return this.gMap.getZoom();
				}
			},
			_on: function (opts) {
				var self = this;
				google.maps.event.addListener(opts.obj, opts.event, function (e) {
					opts.callback.call(self, e, opts.obj);
				});
			},
			setPano: function (element, opts) {
				var panorama = new google.maps.StreetViewPanorama(element, opts);
				if (opts.events) {
					this._attachEvents(panorama, opts.events);
				}
				this.gMap.setStreetView(panorama);
			},
			geocode: function (opts) {
				this.geocoder.geocode({
					address: opts.address
				}, function (result, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						opts.success.call(this, result, status);
					} else {
						opts.error.call(this, status);
					}
				});
			},
			getCurrentPosition: function (callback) {
				if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(function (position) {
						callback.call(this, position);
					});
				}
			},
			_attachEvents: function (obj, events) {
				var self = this;
				events.forEach(function (event) {
					self._on({
						obj: obj,
						event: event.name,
						callback: event.callback
					});
				});
			},
			addMarker: function (opts) {
				var marker;
				opts.position = {
					lat: opts.lat,
					lng: opts.lng
				};
				marker = this._createMarker(opts);
				if (this.markerClusterer) {
					this.markerClusterer.addMarker(marker);	
				}
				this.markers.add(marker);

				if (opts.events) {
					this._attachEvents(marker, opts.events);
				}
				if (opts.content) {
					this._on({
						obj: marker,
						event: 'click',
						callback: function () {
							var infoWindow = new google.maps.InfoWindow({
								content: opts.content
							});

							infoWindow.open(this.gMap, marker);
						}
					});
				}
				return marker;
			},
			findBy: function (callback) {
				return this.markers.find(callback);
			},
			removeBy: function (callback) {
				var self = this;
				self.markers.find(callback, function (markers) {
					markers.forEach(function (marker) {
						if (self.markerClusterer) {
							self.markerClusterer.removeMarker(marker);
						} else {
							marker.setMap(null);
						}
						self.markers.remove(marker);
					});
				});
			},
			_createMarker: function (opts) {
				opts.map = this.gMap;
				return new google.maps.Marker(opts);
			}
		};

		return Mapster;
	}());

	// Factory function
	Mapster.create = function (element, opts) {
		return new Mapster(element, opts);
	};

	window.Mapster = Mapster;

}(window, google, List));
