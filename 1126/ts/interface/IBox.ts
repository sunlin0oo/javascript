export default interface IBox{
    a:number;
    b:string;
    readonly EVENT_ID:string;
    [key:string]:number|string|boolean|undefined|null|object|Array<number>;
}