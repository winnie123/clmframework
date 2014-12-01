/**
 * Created by Administrator on 14-11-11.
 */
exports.hellonode = function(req, res){
   res.writeHead(200,{"Content-Type":"text/plain"});
   res.end("hello node ");
};

exports.helloworld = function(req, res){
   res.writeHead(200,{"Content-Type":"text/plain"});
   res.end("hello world ");
};