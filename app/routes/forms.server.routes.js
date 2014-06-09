'use strict';

/**
 * Module dependencies.
 */

var users = require('../../app/controllers/users'),
	forms = require('../../app/controllers/forms');
	
var mongoose = require('mongoose'),
	AMap = mongoose.model('AMap'),
	User = mongoose.model('User'),
	Visualisation = mongoose.model('Visualisation'),
	MapCenter = mongoose.model('MapCenter'),
	TileServer = mongoose.model('TileServer'),
	_ = require('lodash');
	
var formsAngular = require('forms-angular');

module.exports = function(app) {	
	// Add form handler
	var secureOptions = {authentication: [forms.hasAuthorization(['admin'])]};
	var DataFormHandler = new (formsAngular)(app ,secureOptions);
	DataFormHandler.addResource('amap', AMap);
	DataFormHandler.addResource('User', User);
	DataFormHandler.addResource('visualisation', Visualisation);
	DataFormHandler.addResource('MapCenter', MapCenter);
	DataFormHandler.addResource('TileServer', TileServer);
};