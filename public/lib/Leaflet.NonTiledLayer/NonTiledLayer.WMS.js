/*
 * L.NonTiledLayer.WMS is used for putting WMS tile layers on the map.
 */
L.NonTiledLayer.WMS = L.NonTiledLayer.extend({
  
    retreiveFeatureInfo: false,
    
    defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        version: '1.1.1',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: false
    },

    initialize: function (url, options, retreiveFeatureInfo) { // (String, Object, Boolean)
        this._wmsUrl = url;

        var wmsParams = L.extend({}, this.defaultWmsParams);

        for (var i in options) {
            // all keys that are not TileLayer options go to WMS params
            if (!this.options.hasOwnProperty(i)) {
                wmsParams[i] = options[i];
            }
        }

        this.wmsParams = wmsParams;

        L.setOptions(this, options);
	
	this.retreiveFeatureInfo = retreiveFeatureInfo;
    },

    onAdd: function (map) {
        var projectionKey = parseFloat(this.wmsParams.version) >= 1.3 ? 'crs' : 'srs';
        this.wmsParams[projectionKey] = map.options.crs.code;

        L.NonTiledLayer.prototype.onAdd.call(this, map);
	
	if (this.retreiveFeatureInfo) {
	    // Register a click listener, then do all the upstream WMS things
	    map.on('click', this.getFeatureInfo, this);
	}
    },

    // Triggered when the layer is removed from a map.
    onRemove: function (map) {

	L.NonTiledLayer.prototype.onRemove.call(this, map);
	
	if (this.retreiveFeatureInfo) {
	    // Unregister a click listener, then do all the upstream WMS things
	    map.off('click', this.getFeatureInfo, this);
	}
    },
    
    getImageUrl: function (world1, world2, width, height) {
        var wmsParams = this.wmsParams;
        wmsParams.width = width;
        wmsParams.height = height;

        var crs = this._map.options.crs;
			
        var p1 = crs.project(world1);
        var p2 = crs.project(world2);

        var url = this._wmsUrl + L.Util.getParamString(wmsParams, this._wmsUrl) + '&bbox=' + p1.x + ',' + p2.y + ',' + p2.x + ',' + p1.y;
        return url;
    },

    setParams: function (params, noRedraw) {

        L.extend(this.wmsParams, params);

        if (!noRedraw) {
            this.redraw();
        }

        return this;
    },
    
    getFeatureInfo: function (evt) {
	// Make an AJAX request to the server and hope for the best
	var url = this.getFeatureInfoUrl(evt.latlng),
	    showResults = L.Util.bind(this.showGetFeatureInfo, this);
	$.ajax({
	  url: url,
	  success: function (data, status, xhr) {
	    var err = typeof data === 'string' ? null : data;
	    showResults(err, evt.latlng, data);
	  },
	  error: function (xhr, status, error) {
	    showResults(error);  
	  }
	});
    },
  
    getFeatureInfoUrl: function (latlng) {
	// Construct a GetFeatureInfo request URL given a point
	var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
	    size = this._map.getSize(),
	    
	    params = {
	      request: 'GetFeatureInfo',
	      service: 'WMS',
	      srs: 'EPSG:4326',
	      styles: this.wmsParams.styles,
	      transparent: this.wmsParams.transparent,
	      version: this.wmsParams.version,      
	      format: this.wmsParams.format,
	      bbox: this._map.getBounds().toBBoxString(),
	      height: size.y,
	      width: size.x,
	      layers: this.wmsParams.layers,
	      query_layers: this.wmsParams.layers,
	      info_format: 'text/html'
	    };
	
	params[params.version === '1.3.0' ? 'i' : 'x'] = point.x;
	params[params.version === '1.3.0' ? 'j' : 'y'] = point.y;
	
	return this._url + L.Util.getParamString(params, this._url, true);
    },
  
    showGetFeatureInfo: function (err, latlng, content) {
	if (err) { console.log(err); return; } // do nothing if there's an error
	
	// Otherwise show the content in a popup, or something.
	L.popup({ maxWidth: 800})
	  .setLatLng(latlng)
	  .setContent(content)
	  .openOn(this._map);
    }
  
});

L.nonTiledLayer.wms = function (url, options) {
    return new L.NonTiledLayer.WMS(url, options);
};