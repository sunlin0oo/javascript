/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
// 字符串，数字，布尔
// 在初始值设置成字符串，以后无法改变
var myname:string = 'sulnin';
// myname = 100;//报错
myname.substring(0,1);

const myage:number = 100;
myage.toFixed(1);

let myshow:boolean = true;
myshow = false;
// myshow = test();//报错

const my:string|number = 'sunlin';
const myany:any = 100;//不建议
export default {}