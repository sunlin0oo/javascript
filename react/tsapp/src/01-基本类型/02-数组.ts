/* eslint-disable import/no-anonymous-default-export */
const list:string[] = ['1','2','3'];//数组中只能存放字符串类型
list.push('a');
// list.push(4);错误
const listNumber:number[] = [1,2,3];//数组中只能存放数值类型
listNumber.push(6);

const listNumberOrString:(number | string)[] = ['1','2',3,4];
listNumberOrString.push('1');
listNumberOrString.push(2);
// listNumberOrString.push(false);报错
// ------------------------------
// 写法2：
const mylist1:Array<string> = ['1','2','3'];
mylist1.push('3');

const mylist2:Array<string|number> = [1,'2'];
mylist2.push('3');
mylist2.push(2);
export default {}