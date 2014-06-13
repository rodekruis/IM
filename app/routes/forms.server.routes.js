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
	MapBounds = mongoose.model('MapBounds'),
	MapCenter = mongoose.model('MapCenter'),
	TileServer = mongoose.model('TileServer'),
	WmsLayer = mongoose.model('WmsLayer'),
	_ = require('lodash');
	
var formsAngular = require('forms-angular');

module.exports = function(app) {	
	// Add form handler
	var secureOptions = {authentication: [users.requiresLogin, forms.hasAuthorization]};
	var DataFormHandler = new (formsAngular)(app ,secureOptions);
	DataFormHandler.addResource('amap', AMap);
	DataFormHandler.addResource('User', User);
	DataFormHandler.addResource('visualisation', Visualisation);
	DataFormHandler.addResource('MapBounds', MapBounds);
	DataFormHandler.addResource('MapCenter', MapCenter);
	DataFormHandler.addResource('TileServer', TileServer);
	DataFormHandler.addResource('WmsLayer', WmsLayer);
};