/**
 * Created by Administrator on 14-11-11.
 */


var fs=require("fs");
var moduleJsons=fs.readFileSync(__dirname+"/configfiles/route.json","utf-8");
var moduleJsonObjs=JSON.parse(moduleJsons);

function routeInit(server){
    for(var i=0;i<moduleJsonObjs.length;i++){
        var module=require("./routemodule/"+moduleJsonObjs[i].module);
        var method=moduleJsonObjs[i].method;
        server.get(moduleJsonObjs[i].action,module[method]);
    }
}
exports.routeInit=routeInit;



