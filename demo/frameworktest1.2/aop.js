/**
 * Created by Administrator on 14-11-24.
 */
var aop=require("../../clmframework1.2/aop");
this.test=function (){
    console.log("test");
}
aop.before(this,"test",function(){
   console.log("before");
});
this.test();
aop.cancel(this,"test");

aop.after(this,"test",function(){
    console.log("after");
});
this.test();
aop.cancel(this,"test");

aop.around(this,"test",function(){
    console.log("around");
});
this.test();
aop.cancel(this,"test");

this.test();


