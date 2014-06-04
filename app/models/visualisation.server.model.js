'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
/**
 * Visualisation Schema
 */
/*
var VisualisationSchema = new Schema({
    name: {
            type: String,
            trim: true,
            default: '',
	    required:true,
    },
    description: {
            type: String,
            trim: true,
            default: '',
	    required:true,
    },
    tableName: {
            type: String,
            trim: true,
            default: '',
	    required:true,
    },
    tableColumns: [{
            type: String,
            trim: true,
            default: '',
	    required:true,
    }],
    apiUrl: {
            type: String,
            trim: true,
            default: '',
	    required:true,
    },
    groups: [{
            type: String,
            trim: true,
            default: '',
	    required:true,
    }],
});


var Visualisation;

try {
  Visualisation = mongoose.model('Visualisation');
} catch (e) {
  Visualisation = mongoose.model('Visualisation', VisualisationSchema);
}
*/