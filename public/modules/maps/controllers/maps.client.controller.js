'use strict';

angular.module('maps').controller('MapsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Maps', '$window', 'leafletData', //'L', 'cartodb',
	function($scope, $stateParams, $location, Authentication, Maps, $window, leafletData) { //, 
		$scope.authentication = Authentication;
		$scope.L = $window.L;
		$scope.cartodb = $window.cartodb;
		$scope.LMap = leafletData.getMap();
					
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

		angular.extend($scope, {
			defaults: {
			    tileLayer: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
			}
		});
		
		angular.extend($scope, {
			layers: {
				baselayers: {
				    osm: {
					name: 'OpenStreetMap',
					url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
					type: 'xyz'
				    },
				}
			}
		});

		angular.extend($scope, {
		    center: {
			lat: 52.0809819, 
			lng: 5.1060363,
			zoom: 8
		    }
		});

		
		
		$scope.loadLayers = function() {	

			var sql_statement = 'select visualisations.group from visualisations WHERE name = \'Vrijwilligers\' OR name = \'Basisscholen\' GROUP BY visualisations.group';
			$.getJSON('http://rodekruis.cartodb.com/api/v2/sql/?q='+sql_statement+'',
				  function(dataGroup) {
					leafletData.getMap().then(function(cartomap) {
						
						$.each(dataGroup.rows, function(keyGroup, valGroup) {
						       // Create control and add to list
							
							var layercontrol = $scope.L.control.activeLayers({}, {}, {collapsed:false}).addTo(cartomap);
							
							var sql_statement = 'select name, description, visualisation, table_columns, table_name from visualisations WHERE visualisations.group = \'' + valGroup.group + '\'';
							$.getJSON('http://rodekruis.cartodb.com/api/v2/sql/?q='+sql_statement+'',
								function(data) {
									$.each(data.rows, function(key, val) {
								  
									// set columns to be able to display in the table
									//tableColumns[val['table_name']] = val['table_columns'];
									var table = val.table_name;
								
									$scope.cartodb.createLayer(cartomap, val.visualisation)
										//.addTo(map)
									.on('done', function(layer) {
						      
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
										 layercontrol.addOverlay(layer, val.name);
						      
										 layer.on('featureOver', function(e, pos, latlng, data) {
										   $scope.cartodb.log.log(e, pos, latlng, data);
										 });
						      
										 layer.on('error', function(err) {
										   $scope.cartodb.log.log('error: ' + err);
										 });
									}).on('error', function() {
										 $scope.cartodb.log.log('some error occurred');
									});
								});
							});
						
							// add layers and sublayers to arrayp
							//layerControls.push(layercontrol);
						    
						});
					});
			  });
		};
		
	}
]);