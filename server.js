'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	https = require('https'),
	fs = require('fs'),
        secrets = require('./config/secrets'),
        path = require('path');

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
    app.listen(config.port);
    
    // Logging initialization
    console.log('Application started on port ' + config.port);
}

if (config.usessl) {
    // set certicicates and start SSL server
    var sslconfig = { 
        key : fs.readFileSync(path.resolve(__dirname, config.key_file), 'UTF-8'),
        cert : fs.readFileSync(path.resolve(__dirname, config.cert_file), 'UTF-8'),
    };
    
    if(secrets.certificate.passphrase) {
      sslconfig.passphrase = secrets.certificate.passphrase;
    }
    
    https.createServer(sslconfig, app).listen(config.sslport);
    
    // Logging initialization
    console.log('Application started on port ' + config.sslport);
}

// Expose app
exports = module.exports = app;
