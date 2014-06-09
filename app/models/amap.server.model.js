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
    },
    tableName: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Naam tabel', size:'large'},
    },
    tableColumns: {
            type: String,
            trim: true,
	    required:true,
	    form:  {label:'Kolommen uit tabel', size:'large'},
    },
    groups: {
	    type: String,
            trim: true,
	    required:true,
	    form:  {label:'Groepen', size:'large'},
    }
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
	baseMap: {
		type: Schema.Types.ObjectId,
		ref: 'TileServer',
		form:  {label:'Achtergrondkaart'}
	},
	mapCenter: {
		type: Schema.Types.ObjectId,
		ref: 'MapCenter',
		form:  {label:'Kaart centreren op'}
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	visualisation: {
		type: [VisualisationSchema]
	},

});

// the model is registered as AMap instead of Map. The Map object is dedicated to the framework itself
var AMap;

try {
  AMap = mongoose.model('AMap');
} catch (e) {
  AMap = mongoose.model('AMap', MapSchema);
}
