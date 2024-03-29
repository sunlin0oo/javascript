export default class Model{
    list=new Set();
    _data;
    static _instance;
// 静态方法：单例==>获得new Model属性
    static getInstance(){
        // 获取_instance是否有这个属性，起初静态是undefined，创建好了就不是undefined
        if(!Model._instance){
            Model._instance=new Model();
        }
        return Model._instance;
    }
    add(box){
        this.list.add(box);
    }
    remove(box){
        this.list.delete(box);
    }
    set data(v){
        this._data=v;
        // list里面都是box
        this.list.forEach(t=>{
            t.update(v);
        })
    }
    get data(){
        if(!this._data) return [];
        return this._data;
    }
}
