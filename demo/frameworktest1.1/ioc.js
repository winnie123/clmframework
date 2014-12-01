/**
 * Created by Administrator on 2014/11/12.
 */
var restify=require('restify');
var route=require('../../clmframework1.1/route');
var server=restify.createServer();
route.initRoute(server);
server.listen('1010',function(){
    console.log('%s listening at %s',server.name,server.url);
});
