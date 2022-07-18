export default interface IEvent{
    // 可以存储多个事件函数，进行多个调用
    [key:string]:Array<Function>;
}