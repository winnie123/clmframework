/**
 * Created by Administrator on 14-11-24.
 */
var aopUtil={
    //方法调用前
    before:function(context,targetMethod,fn){
        var target=context[targetMethod];
        context[targetMethod] = function() {
            return target.apply(context, fn.apply(context, arguments));
        };
        if(!context[targetMethod]["clmAopOrignal"]){
            context[targetMethod]["clmAopOrignal"]=target;
        }

    },
    //方法调用后
    after:function(context,targetMethod,fn){
        var target=context[targetMethod];
        context[targetMethod]=function(){
            return fn.apply(context,target.apply(context,arguments));
        };
        if(!context[targetMethod]["clmAopOrignal"]){
            context[targetMethod]["clmAopOrignal"]=target;
        }
    },
    //方法调用前，调用后
    around:function(context,targetMethod,fn){
        var target=context[targetMethod];
        context[targetMethod]=function(){
            return fn.apply(context,target.apply(context,fn.apply(context,arguments)));
        }
        if(!context[targetMethod]["clmAopOrignal"]){
            context[targetMethod]["clmAopOrignal"]=target;
        }
    },
    //还原方法
    cancel:function(context,targetMethod){
        if(context[targetMethod]["clmAopOrignal"]){
            context[targetMethod]=context[targetMethod]["clmAopOrignal"];
            delete context[targetMethod]["clmAopOrignal"];
        }
    }
};
    module.exports=aopUtil;