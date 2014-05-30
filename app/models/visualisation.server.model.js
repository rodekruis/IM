'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Visualisation Schema
 */
var VisualisationSchema = new Schema({
    name: {
            type: String,
            trim: true,
            default: '',
    },
    description: {
            type: String,
            trim: true,
            default: '',
    },
    tableName: {
            type: String,
            trim: true,
            default: '',
    },
    tableColumns: [{
            type: String,
            trim: true,
            default: '',
    }],
    apiUrl: {
            type: String,
            trim: true,
            default: '',
    },
    groups: [{
            type: String,
            trim: true,
            default: '',
    }],
});

mongoose.model('Visualisation', VisualisationSchema);