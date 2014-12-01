/**
 * Created by Administrator on 2014/11/3.
 */
/**
 * Created by Administrator on 2014/11/3.
 */
var restify=require('restify');//restful
var url= require('url');

var server=restify.createServer(
//    {
//        name: 'myapp',
//        version: '1.0.0'
//    }
);
//server.use(restify.acceptParser(server.acceptable));
//server.use(restify.queryParser());
//server.use(restify.bodyParser());
server.get('/controller?a=/:name&b=/:value', function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    console.log(query); //{Object}
    res.send(req.params);
//    return next();
});
//server.get('/controller/:name/:value', function (req, res, next) {
//    res.send(req.params);
////    return next();
//});
server.listen(1111,function(){
    console.log('%s listening at %s', server.name, server.url);
});