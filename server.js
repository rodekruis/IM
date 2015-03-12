'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	https = require('https'),
        http  = require('http'),
	fs = require('fs'),
        secrets = require('./config/secrets'),
        path = require('path'),
        constants = require('constants'),
        tls = require('tls');
        

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db);

// Init the express application
var app = require('./config/express')(db);

// print all routers
/*for (var key in app._router.stack) {
   var obj = app._router.stack[key];
   if(obj.route !== undefined){
        console.log(obj.route.path);
   }
   
}
*/
// Bootstrap passport config
require('./config/passport')();

// Start the app on http by listening on <port>
if (config.usehttp) {
    var server  = http.createServer(app);
    
    server.on('listening',function(){
        console.log('ok, http server is running on port ' + config.port);
    });
    
    server.listen(config.port);    
    
}

// set certicicates and start SSL server
if (config.usessl) {
    
    var sslconfig = {};
    if(config.hasOwnProperty('pfx_file')){
        sslconfig.pfx = fs.readFileSync(path.resolve(__dirname, config.pfx_file), 'UTF-8');
    }
    else if (config.hasOwnProperty('key_file') && config.hasOwnProperty('cert_file')){
        sslconfig.key = fs.readFileSync(path.resolve(__dirname, config.key_file), 'UTF-8');
        sslconfig.cert = fs.readFileSync(path.resolve(__dirname, config.cert_file), 'UTF-8');
    }
    
    if(config.hasOwnProperty('ca_file') && config.hasOwnProperty('ca2_file')){
              sslconfig.ca = [
			      fs.readFileSync(path.resolve(__dirname, config.ca_file), 'UTF-8'),
			      fs.readFileSync(path.resolve(__dirname, config.ca2_file), 'UTF-8')
			     ];
    } else if(config.hasOwnProperty('ca_file')){
                sslconfig.ca = fs.readFileSync(path.resolve(__dirname, config.ca_file), 'UTF-8');
    }
    
    if(secrets.certificate.passphrase) {
      sslconfig.passphrase = secrets.certificate.passphrase;
    }
    
    sslconfig.secureProtocol = 'SSLv23_method';
    sslconfig.secureOptions = constants.SSL_OP_NO_SSLv3;
    
    var sslServer = https.createServer(sslconfig, app);
    
    sslServer.on('listening',function(){
        console.log('ok, https server is running on port ' + config.sslport);
    });
    
    sslServer.listen(config.sslport);
}

// Expose app
exports = module.exports = app;
