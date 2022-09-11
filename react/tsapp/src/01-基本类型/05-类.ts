/* eslint-disable import/no-anonymous-default-export */
class Bus{
    // 私有属性
    public name:string = 'sunlin'
    private _list:any = [];//私有变量
    protected  age = 100;//受保护的，可以共享给孩子的
    public subscribe(cb:any){
        this._list.push(cb)//加下滑线==>_ 指内部属性
    }

    public dispatch(){
        this._list.forEach((cb:any)=>{
            cb&&cb()
        })
    }
}
// protected孩子可以访问到
class Child extends Bus{
    aaa(){
        console.log(this.name,this.age);
    }
}

const obj = new Bus();
// console.log(obj._list);//外部无法访问
console.log(obj.name);
// console.log(obj.age);//外部无法访问
export default {}