'use strict';

angular.module('maps').controller('MapsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Maps', '$window', 'leafletData', '$compile', 'layerService', '$parse',//'L', 'cartodb',
	function($scope, $stateParams, $location, Authentication, Maps, $window, leafletData, $compile, layerService, $parse) { //, 
		$scope.authentication = Authentication;
		$scope.L = $window.L;
		$scope.cartodb = $window.cartodb;
		$scope.LMap = null;
				   
		$scope.create = function() {
			var map = new Maps({
				title: this.title,
				//content: this.content
			});
			map.$save(function(response) {
				$location.path('maps/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

			this.title = '';
			//this.content = '';
		};

		$scope.remove = function(map) {
			if (map) {
				map.$remove();

				for (var i in $scope.maps) {
					if ($scope.maps[i] === map) {
						$scope.maps.splice(i, 1);
					}
				}
			} else {
				$scope.map.$remove(function() {
					$location.path('maps');
				});
			}
		};

		$scope.update = function() {
			var map = $scope.map;

			map.$update(function() {
				$location.path('maps/' + map._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.maps = Maps.query();
		};

		$scope.findOne = function() {
			$scope.map = Maps.get({
				mapId: $stateParams.mapId
			});
		};
		
		/*
		angular.extend($scope, {
			defaults: {
			    tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			}
		});
		
		angular.extend($scope, {
			layers: {
				baselayers: {
				    osm: {
					name: 'OSM',
					url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					type: 'xyz'
				    },
				}
			}
		});

		angular.extend($scope, {
		    center: {
			lat: 53.0809819, 
			lng: 5.6060363,
			zoom: 8
		    }
		});
		*/
		
		$scope.$watchCollection('checkModel', function(newValues, oldValues) {
			if ($scope.LMap !== null) {
				var layers = $scope.LMap.layers;
				console.log($scope.LMap);
				// Use newValues to determine active layers
				for (var i in newValues) {
					// detect change
					if (newValues[i] !== oldValues[i]) {
						if (newValues[i] === false) {
							$scope.LMap.removeLayer(layers[i]);
						} else {
							$scope.LMap.addLayer(layers[i]);
						}
					}
				}
			}
			
		}, true);
		
		$scope.loadLayers = function() {
			// set function
			
			var addVisualisation = function(cartomap, visualisation){
				$scope.cartodb.createLayer(cartomap, visualisation.apiUrl)
				.addTo(cartomap)
				.on('done', function(layer) {
					var table = visualisation.tableName;
					
					 //tableNames[val['name']] = val['table_name'];
	      
					 var subLayerOptions = {
						      sql: 'SELECT * FROM ' + table
					 };
	      
					 // get sublayer and store in array
					 var sublayer = layer.getSubLayer(0);
					 sublayer.set(subLayerOptions);
	      
					 //sublayers[table] = sublayer;	
										      
					 layer.setInteraction(true);
	      
					 // Add layer to control
					 $scope.layerControl.addOverlay(layer, visualisation.name);
	      
					 layer.on('featureOver', function(e, pos, latlng, data) {
					   $scope.cartodb.log.log(e, pos, latlng, data);
					 });
	      
					 layer.on('error', function(err) {
					   $scope.cartodb.log.log('error: ' + err);
					 });
				}).on('error', function() {
					 $scope.cartodb.log.log('some error occurred');
				});
			};
				
			var addWmsLayer = function(cartomap, wmsLayer){
				$scope.L.tileLayer.wms(wmsLayer.url, {
						layers: wmsLayer.layers,
						format: wmsLayer.format,
						transparent: wmsLayer.transparent
					    })
				.addTo(cartomap)
				.on('done', function(layer) {									      
					 layer.setInteraction(true);
	      
					 // Add layer to control
					 $scope.layerControl.addOverlay(layer, wmsLayer.name);
				}).on('error', function() {
					 $scope.cartodb.log.log('some error occurred');
				});
			};
			
			// Get leaflet map object
			leafletData.getMap().then(function(cartomap) {
				
				$scope.LMap = cartomap;
				
				// Get map object
				Maps.get({
					mapId: $stateParams.mapId
				}).$promise.then(function(map) {
					var baseMap = map.baseMap;
					
					var baselayers = {};	
					
					if (map.baseMap !== undefined) {
						//var activeBaseLayer = $scope.L.Control.ActiveLayers.getActiveBaseLayer();
						//for(var i in layers.baselayers){
						//	cartomap.removeLayer(layers.baselayers(i)(iLayer));
						//}
							
						// add base layer
						var layer = $scope.L.tileLayer(baseMap.url);
						cartomap.addLayer(layer);
					
						// Set default base layer
						baselayers[baseMap.name] = layer;
					}
					
					// Add layer control with base layers
					$scope.layerControl = $scope.L.control.activeLayers(baselayers, {}, {collapsed:false});
					
					// Set map center
					var mapCenter = map.mapCenter;
					cartomap.setView(new $scope.L.latLng(mapCenter.lat, mapCenter.lng), mapCenter.zoom);
					
					/*
					 * Couldn't get the map bounds to work.
					 * Idea is to fit the map to preset bounds, so that on each resolution the map displays properly
					 * Possibly something to do with asynchronous loading of map
					/*
					var mapBounds = map.mapBounds;
					var 	southWest = $scope.L.latLng(mapBounds.latSW, mapBounds.lngSW),
						northEast = $scope.L.latLng(mapBounds.latNE, mapBounds.lngNE),
						bounds = $scope.L.latLngBounds(southWest, northEast);
						
					var mapCenter = bounds.getCenter();
					var zoom = cartomap.getBoundsZoom(bounds);
					
					cartomap.fitBounds(bounds, {reset: true});
					*/
    
					$scope.radioModel = '';
					$scope.checkModel = {};
		      
					var layers = [];			
					for (var vId in map.visualisation) {
						var visualisation = map.visualisation[vId];
						addVisualisation(cartomap, visualisation);
						
						layers.push({id: visualisation._id, name: visualisation.name});	
					}
					
					for (var wmsId in map.wmsLayer) {
						var wmsLayer = map.wmsLayer[wmsId];
						addWmsLayer(cartomap, wmsLayer);
						
						layers.push({id: wmsLayer._id, name: wmsLayer.name});	
					}
					
					layerService.setLayers(layers);
					
					layerService.setBaseLayers([
								    {id: '1234', name:baseMap.name}
								   ]);
				});
					
				// add layers and sublayers to arrayp
				//layerControls.push(layercontrol);
			});
		};
		
	}
]);