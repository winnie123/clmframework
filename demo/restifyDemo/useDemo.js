/**
 * Created by Administrator on 2014/11/3.
 */
var restify=require('restify');
var server=restify.createServer();
server.listen(1111,function(){
    console.log('%s listening at %s', server.name, server.url);
});
var count = 0;

server.use(function foo(req, res, next) {
    console.log(1);
    count++;
    next();
});

server.get('/foo/:id', function (req, res, next) {
    console.log(2);
    next('foo2');

});

server.get({
    name: 'foo2',
    path: '/foo/:id'
}, function (req, res, next) {
//    assert.equal(count, 1);
    console.log(3);
    console.log('count:%s',count);
    res.send(200);
    next();
});

