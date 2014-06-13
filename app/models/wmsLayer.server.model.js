'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * WMS Layer Schema
 */
var WmsLayerSchema = new Schema({
    name: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Naam', size:'large'},
	    list:true
    },
    description: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Beschrijving', size:'large'},
    },
    url: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Tileserver url (WMS)', size:'large'},
    },
    active: {
	    type: Boolean,
	    form:  {label:'Actief', size:'large'},
    },
    layers: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Comma-separated list of WMS layers to show', size:'large'},
    },
    styles: {
            type: String,
            trim: true,
            default: '',
	    form:  {label:'Comma-separated list of WMS styles', size:'large'},
    },
    format: {
            type: String,
            trim: true,
            default: 'image/jpeg',
	    form:  {label:'WMS image format', size:'large'},
    },
    transparent: {
            type: Boolean,
            default: true,
	    form:  {label:'WMS images transparant', size:'large'},
    },
    crs: {
		type: [{
			type: String,
			enum: ['EPSG3857', 'EPSG4326', 'EPSG3395', 'Simple']
		}],
		default: ['EPSG3857']
	},
});

var WmsLayer;

try {
  var WmsLayer = mongoose.model('WmsLayer');
} catch (e) {
  var WmsLayer = mongoose.model('WmsLayer', WmsLayerSchema);
}