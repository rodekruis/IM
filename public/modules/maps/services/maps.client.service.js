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
}]);