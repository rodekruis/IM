'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	wmsLayer = require('../../app/models/wmsLayer'),
	wfsLayer = require('../../app/models/wfsLayer'),
	Schema = mongoose.Schema;

/**
 * Visualisation Schema
 */
var VisualisationSchema = new Schema({
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
    apiUrl: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'CartoDB API url', size:'large'},
    },
    created: {
	    type: Date,
	    form:  {label:'Datum aangemaakt', size:'large'},
    },
    active: {
	    type: Boolean,
	    form:  {label:'Actief', size:'large'},
	    default: false,
    },
    visible: {
	    type: Boolean,
	    form:  {label:'Zichtbaar bij laden kaart', size:'large'},
	    default: false,
    },
    zindex: {
            type: String,
            trim: true,
            default: '10',
	    required:true,
	    form:  {label:'Z-Index (volgorde)'},
    },
    /*,
    tableName: {
            type: String,
            trim: true,
            default: '',
	    required:false,
	    form:  {label:'Naam tabel', size:'large'},
    },
    tableColumns: {
            type: String,
            trim: true,
	    required:false,
	    form:  {label:'Kolommen uit tabel', size:'large'},
    },
    groups: {
	    type: String,
            trim: true,
	    required:false,
	    form:  {label:'Groepen', size:'large'},
    }*/
});

var Visualisation;

try {
  Visualisation = mongoose.model('Visualisation');
} catch (e) {
  Visualisation = mongoose.model('Visualisation', VisualisationSchema);
}

/**
 * Map Schema
 *
 */
var MapSchema = new Schema({
	created: {
		type: Date,
		default: Date.now,
		form: { hidden: true }
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: true,
		form:  {label:'Naam kaart'},
		list:true
	},
	description: {
		type: String,
		default: '',
		trim: true,
		required: true
	},
	isPublic: {
	    type: Boolean,
	    required:true,
	    default: false,
	    form:  {label:'Publiek voor iedereen', size:'large'},
	},
	baseMap: {
		type: Schema.Types.ObjectId,
		ref: 'TileServer',
		form:  {label:'Achtergrondkaart'}
	},
	icon: {
		type: String,
		default: 'glyphicon glyphicon-map-marker',
		trim: true,
		required: true
	},
	mapCenter: {
		type: Schema.Types.ObjectId,
		ref: 'MapCenter',
		form:  {label:'Kaart centreren op'},
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	visualisation: {
		type: [VisualisationSchema]
	},
	wmsLayer: [{
		type: Schema.Types.ObjectId,
		ref: 'WmsLayer'
	}],
	wfsLayer: [{
		type: Schema.Types.ObjectId,
		ref: 'WfsLayer'
	}],

});

// the model is registered as AMap instead of Map. The Map object is dedicated to the framework itself
var AMap;

try {
  AMap = mongoose.model('AMap');
} catch (e) {
  AMap = mongoose.model('AMap', MapSchema);
}
