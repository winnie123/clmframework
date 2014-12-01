/**
 * Created by Administrator on 2014/11/14.
 */
var url = require('url');
/**
 * 设置路由规则
 * 测试用例：http://localhost:1010/hellonode/getHellonode?a=1&b=2&c=3
 * @param files
 * controller文件
 * @param server
 * server对象
 */
var unityFactory = function (files, server) {
    //获取方法参数
    var getActonArgs = function (fun) {
        var argStr = '';
                var start = fun.toString().indexOf('(');
            var end = fun.toString().indexOf(')');
            if (start >= 0 && end >= 0 && start < end) {
                var args = fun.toString().substring(start + 1, end).split(',');
                if (args.length > 0)
                    argStr = '?';
                for (var i = 0, len = args.length; i < len; i++) {
                    argStr += args[i] + '=/:' + args[i] + '&';
                }
                if (argStr.lastIndexOf('&') === argStr.length - 1)
                argStr = argStr.substring(0, argStr.length - 1);
        }
        return argStr;
    };
    //route类型
    var getRouteType = function (action, type) {
        if (action.indexOf(type) !== 0)
            type = '';
        return type;
    };
    //设置url
    var setUrlRoutes = function (controller, action, file) {
        var args = getActonArgs(controller[action]);
        var routeType = getRouteType(action, 'get')
            || getRouteType(action, 'post')
            || getRouteType(action, 'put')
            || getRouteType(action, 'del');
        var urlPath = '/' + file.replace('Controller.js', '') + '/' + action + args;
        server[routeType](urlPath, function (req, res, next) {
            var url_parts = url.parse(req.url, true);
            var query = url_parts.query;
            console.log(query);
            var arg = [];
            for (var attr in query) {
                if (query.hasOwnProperty(attr)) {
                    arg.push(query[attr]);
                }
            }
            controller[action].apply(controller, arg);
        });

    };
    //设置每个action
    for (var i = 0, len = files.length; i < len; i++) {
        var controller = require('../controller/' + files[i]);

        for (var action in controller) {
            if (controller.hasOwnProperty(action)) {
                setUrlRoutes(controller, action, files[i]);
            }
        }
    }
};

exports.unityFactory = unityFactory;