import {observable,autorun, configure, action} from 'mobx'
configure({
    enforceActions:'never' // always --开启严格模式
})
// const store = observable({
//     isTabbarShow:true,
//     list:[],
//     cityName:"北京",
//     // 规定可观察值只能在这里进行修改
//     changeShow(){
//         this.isTabbarShow = true;
//     },
//     changeHide(){
//         this.isTabbarShow = false;
//     }
// },{
//     // 规定action行为
//     changeHide:action,
//     changeShow:action//标记两个方法是action，专门修改可观测的value
// })
// 修饰器没配好
class Store{
    @observable isTabbarShow = true
    @observable list = []

    @action changeShow(){
        this.isTabbarShow = true;
    }
    @action changeHide(){
        this.isTabbarShow = false;
    }
}

// 类初始化
const store = new Store()

export default store