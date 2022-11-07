// 选项卡reducer
const TabbarReducer = (prevState={
    show:true,//赋值初始值
},action)=>{
    console.log("TabbarReducer-action::",action);
    let newState = {...prevState};
    switch(action.type){
        case "kerwinhide-tabbar":
            newState.show = false;
            return newState;
        case "kerwinshow-tabbar":
            newState.show = true;
            return newState;
        default:
            return prevState
    }
}

export default TabbarReducer