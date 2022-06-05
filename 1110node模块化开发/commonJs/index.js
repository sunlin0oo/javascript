var obj=require("./a");
// 导入：相当于import obj from "./a.js";  必须要有./==>指当前路径下
// var fn=require("./b");

//导入多项
var {fn,obj:obj1,a}=require("./b");
// 这里就是解构赋值， 这里使用:用来取别名 (obj:obj1)
// 在ES6模块化中，取别名使用 as 


// ./ 相对当前文件路径，不需要扩展
console.log(obj);
obj.c();
var arr=[1,2,3,4,5];
// 如果没有./路径，会认为是系统的node路径中的模块或者node_modules路径下
// var _=require("lodash");
// console.log(_.chunk(arr,3));
var lodash=require("lodash");
console.log(lodash.chunk(arr,3));
fn();
console.log(obj1,a);