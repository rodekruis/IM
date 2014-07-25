'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Source Schema
 */
var SourceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Spreadsheet source name',
		trim: true
	},
	url: {
		type: String,
		default: '',
		required: 'Google spreadsheet url',
		trim: true
	},
	active: {
		type: Boolean,
		form:  {label:'Active', size:'large'},
	},
	showMenu: {
	    type: Boolean,
	    form:  {label:'Show google spreadsheet menu', size:'large'},
	}
});

mongoose.model('Source', SourceSchema);