var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ host:'localhost', port: 8080 });

server.route({

    method: 'GET',
    path: '/',
    handler:function(request, reply){
        reply('server is running')
    }
});

server.start( function(){
        server.log('info', 'Server running at: ' + server.info.uri);
});