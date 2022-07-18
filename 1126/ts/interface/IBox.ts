export default interface IBox{
    // 不可以设置初始值==>这样写就规定死数据类型
    a:number;
    b:string;
    //只读类型
    readonly EVENT_ID:string;
    // 对象中使用中括号是规定key:进行额外属性添加(可以随意设置属性)有什么添加什么，不可以使用any!
    [key:string]:number|string|boolean|undefined|null|object|Array<number>;
}