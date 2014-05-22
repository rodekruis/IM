'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users'),
	dataObjects = require('../../app/controllers/dataObjects');

module.exports = function(app) {
	// Article Routes
	app.route('/dataObjects')
		.get(dataObjects.list)
		.post(users.requiresLogin, dataObjects.create);
	
	app.route('/dataObjects/:dataObjectId')
		.get(dataObjects.read)
		.put(users.requiresLogin, dataObjects.hasAuthorization, dataObjects.update)
	    .delete(users.requiresLogin, dataObjects.hasAuthorization, dataObjects.delete);

	// Finish by binding the article middleware
	app.param('dataObjectId', dataObjects.dataObjectByID);
};