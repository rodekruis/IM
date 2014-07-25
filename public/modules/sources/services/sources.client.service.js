'use strict';

//Sources service used to communicate Sources REST endpoints
angular.module('sources').factory('Sources', ['$resource', function($resource) {
    return $resource('sources/:sourceId', {
        sourceId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);