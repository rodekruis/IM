'use strict';

//Maps service used for communicating with the Maps REST endpoints
angular.module('maps')

.factory('Maps', ['$resource', function($resource) {
    return $resource('maps/:mapId', {
        mapsId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}])

.factory('Proxy', ['$resource', function($resource) {
    return $resource('proxy/:url', {
        url: '@_id'
    });
}])

.factory('CartoDB', ['$resource', function($resource) {
    return $resource('cartodb/:table', {
        table: '@_id'
    });
}])

.factory('layerService', ['$rootScope', function($rootScope) {

    return { 
        baseLayers: function() {
            return $rootScope.baseLayers;
        },    
        setBaseLayers: function(layers) {
            $rootScope.baseLayers = layers;
        },
        layers: function() {
            return $rootScope.layers;
        },
        setLayers: function(layers){
            $rootScope.layers = layers;
        }
    };

}]);