/**
 * Created by Administrator on 2014/11/10.
 */

var restify = require('restify'),
    server = restify.createServer({
        name: 'api_app',
        version: '0.1.0'
    });

server.use(restify.queryParser());
server.use(restify.jsonp());

server.get('/foo', function (req, res, next) {

    res.send({'hello': 'world'});

});

server.listen(1111, 'localhost', function () {

    console.log('%s listening at %s', server.name, server.url);

});
