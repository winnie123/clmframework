/**
 * Created by Administrator on 2014/11/13.
 */
var unity=require("./ioc/unity");
var fs=require("fs");
//controller路径
var normalizedPath = (__dirname+"/controller");
//加载所有controller
var initRoute=function(server) {
    fs.readdir(normalizedPath, function (err, files) {
        if(err){
            console.log(err.message);
            throw err;
        }
        //设置路由规则
        unity.unityFactory(files,server);
    })
};

exports.initRoute=initRoute;