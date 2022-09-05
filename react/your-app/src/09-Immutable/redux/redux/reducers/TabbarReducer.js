import{fromJS} from 'immutable'
// 一开始将所有的数据结构改成immutable数据对象进行处理，页面操作及数据传输利用immutable进行操作
const TabbarReducer = (prevState=fromJS({
    show:true,//赋值初始值
}),action)=>{
    console.log("action::",action);
    // let newState = {...prevState};
    switch(action.type){
        case "kerwinhide-tabbar":
            // newState.show = false;
            return prevState.set('show',false);
        case "kerwinshow-tabbar":
            // newState.show = true;
            return prevState.set('show',true);
        default:
            return prevState
    }
}

export default TabbarReducer