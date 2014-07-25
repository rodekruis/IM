'use strict';

// Sources controller
angular.module('sources').controller('SourcesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Sources',
    function($scope, $stateParams, $location, Authentication, Sources) {
        $scope.authentication = Authentication;

        // Create new Source
        $scope.create = function() {
        	// Create new Source object
            var source = new Sources({
                name: this.name
            });

            // Redirect after save
            source.$save(function(response) {
                $location.path('sources/' + response._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});

            // Clear form fields
            this.name = '';
        };

        // Remove existing Source
        $scope.remove = function(source) {
            if (source) {
                source.$remove();

                for (var i in $scope.sources) {
                    if ($scope.sources[i] === source) {
                        $scope.sources.splice(i, 1);
                    }
                }
            } else {
                $scope.source.$remove(function() {
                    $location.path('sources');
                });
            }
        };

        // Update existing Source
        $scope.update = function() {
            var source = $scope.source;

            source.$update(function() {
                $location.path('sources/' + source._id);
            }, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
        };

        // Find a list of Sources
        $scope.find = function() {
            $scope.sources = Sources.query();
        };

        // Find existing Source
        $scope.findOne = function() {
            $scope.source = Sources.get({
                sourceId: $stateParams.sourceId
            });
        };
    }
]);