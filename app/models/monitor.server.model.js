'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema
 */
var MonitorSchema = new Schema({
	name: {
		type: String,
		default: '',
		trim: true,
		required: 'Name cannot be blank'
	},
	description: {
		type: String,
		default: '',
		trim: true,
		form:  {label:'Description', type:'textarea', size:'large', rows:5},
		required: 'Title cannot be blank'
	},
	content: {
		type: String,
		default: '',
		trim: true,
		form:  {label:'Iframe code', type:'textarea', size:'large', rows:5},
		required: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	
});

mongoose.model('Monitor', MonitorSchema);