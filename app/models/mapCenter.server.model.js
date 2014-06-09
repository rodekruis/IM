/**
 * The map center objects specifies a map location where the map can be centered on
 *
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * MapCenter Schema
 */
var MapCenterSchema = new Schema({
    name: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Naam'},
	    list:true
    },
    description: {
            type: String,
            trim: true,
            default: '',
	    required:true,
	    form:  {label:'Beschrijving'},
    },
    lat: {
            type: String,
            trim: true,
            default: '52.0809819',
	    required:true,
	    form:  {label:'Latitude'},
    },
    lng: {
            type: String,
            trim: true,
            default: '5.1060363',
	    required:true,
	    form:  {label:'Longitude'},
    },
    zoom: {
            type: String,
            trim: true,
            default: '8',
	    required:true,
	    form:  {label:'Zoom'},
    }
});

var MapCenter;

try {
  MapCenter = mongoose.model('MapCenter');
} catch (e) {
  MapCenter = mongoose.model('MapCenter', MapCenterSchema);
}