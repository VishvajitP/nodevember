var Hapi = require('hapi');
var Routes = require('./lib/routes');

var server = new Hapi.Server(8080);

server.route(Routes);
server.start();
