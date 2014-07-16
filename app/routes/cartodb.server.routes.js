'use strict';

/**
 * Module dependencies.
 */

	
var _ = require('lodash');

var users = require('../../app/controllers/users'),	
    cartodb = require('../../app/controllers/cartodb');

module.exports = function(app) {
	// Cartodb Routes   
	app.route('/cartodb/:table')
		.get(users.requiresLogin, cartodb.getTable);

	// Finish by binding the article middleware
	app.param('table', cartodb.getTable);
};