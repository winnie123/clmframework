/**
 * Created by Administrator on 2014/11/4.
 */
var restify=require('restify');
var util=require('util');
var server=restify.createServer();
server.listen(1111,function(){
    console.log('%s listening at %s', server.name, server.url);
});

server.get('/hello/:name',function(req,res,next){
    console.log('hello');
    return next(new MyError('error'));
});

//自定义error
function MyError(message) {
    restify.RestError.call(this, {
        restCode: '433',
        statusCode: 418,
        message: message,
        constructorOpt: MyError
    });
    this.name = 'MyError';
}
util.inherits(MyError, restify.RestError);