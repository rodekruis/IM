'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	monitors = require('../../app/controllers/monitors');

module.exports = function(app) {
	// Article Routes
	app.route('/monitors')
		.get(users.requiresLogin, monitors.list)
		.post(users.requiresLogin, monitors.hasAuthorization, monitors.create);
	
	app.route('/monitors/:monitorId')
		.get(users.requiresLogin, monitors.read)
		.put(users.requiresLogin, monitors.hasAuthorization, monitors.update)
	    .delete(users.requiresLogin, monitors.hasAuthorization, monitors.delete);

	// Finish by binding the article middleware
	app.param('monitorId', monitors.monitorByID);
};