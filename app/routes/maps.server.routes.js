'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	maps = require('../../app/controllers/maps');
	
var mongoose = require('mongoose'),
	_ = require('lodash');

module.exports = function(app) {
	// Maps Routes
	app.route('/maps')
		.get(maps.list)
		.post(users.requiresLogin, maps.create);
	
	app.route('/maps/:mapId')
		.get(maps.read)
		.put(users.requiresLogin, maps.hasAuthorization, maps.update)
	    .delete(users.requiresLogin, maps.hasAuthorization, maps.delete);

	// Finish by binding the article middleware
	app.param('mapId', maps.mapByID);
};