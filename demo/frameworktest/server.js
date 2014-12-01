/**
 * Created by Administrator on 14-11-11.
 */
var restify=require('restify');
var server=restify.createServer();
var clmframework=require('../../clmframework');
var routeInit=clmframework.routeInit;
routeInit(server);
server.listen(1111,function(){
    console.log('server listening at 1111');
});