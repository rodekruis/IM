'use strict';

//Maps service used for communicating with the Maps REST endpoints
angular.module('maps').factory('Maps', ['$resource', function($resource) {
    return $resource('maps/:mapId', {
        mapsId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}])

.factory('layerService', ['$rootScope', function($rootScope) {

    return { 
        baseLayers: function() {
            $rootScope.baseLayers;
        },    
        setBaseLayers: function(layers) {
            $rootScope.baseLayers = layers;
        },
        layers: function() {
            $rootScope.layers;
        },
        setLayers: function(layers){
            $rootScope.layers = layers;
        }
    };

}]);