// 1.引入redux
// 2.createStore(reducer)
import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
// 拆分变整体==>Store是大空间==>里面两个子空间CityReducer;TabbarReducer==>访问需要多访问一层
import CityReducer from './reducers/CityReducer';
import TabbarReducer from './reducers/TabbarReducer';
import CinemaListReducer from './reducers/CinemaListReducer';
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
const reducer = combineReducers({
    CityReducer,
    TabbarReducer,
    CinemaListReducer
})
// 作为中间件，不进行状态的修改，状态的修改交给reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)));

// 整体部分未拆分
// const reducer = (prevState={
//     show:true,//赋值初始值
//     cityName:"北京",
// },action)=>{
//     console.log("action::",action);
//     let newState = {...prevState};
//     switch(action.type){
//         case "kerwinhide-tabbar":
//             newState.show = false;
//             return newState;
//         case "kerwinshow-tabbar":
//             newState.show = true;
//             return newState;
//         case "change-city":
//             newState.cityName = action.payload;
//             return newState;
//         default:
//             return prevState
//     }
// }
// const store = createStore(reducer);

export default store;
/**Redux整体流程：
 * 1.(App.js) 进行 store.subsribe订阅
 * 2.当(Detail)创建时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinhide-tabbar" 
 *   当(Detail)销毁时时，触发useEffect==>store.dispatch==>actionCreator 获取：type:"kerwinshow-tabbar" 
 * 3.由store.js进行处理,发送到reducer
 * 4.通过reducer返回新状态出去
 * 5.通知订阅者*/ 

// 原理
// function sunlinStore(reducer){
//     var list = [];
//     // 存储初始状态
//     var state = reducer();
//     function subscribe(callback){
//         // 将订阅者push进list
//         list.push(callback)
//     }
//     function dispatch(action){
//         state = reducer(state,action)//覆盖之前状态，保持最新状态
//         for(var i in list){
//             // 前者包括能够拿到list[i] 然后对 回调函数进行执行
//             list[i] && list[i]()
//         }
//     }
//     function getState(){
//         return state;
//     }
//     return subscribe,dispatch,getState
// }

// var obj = {
//     myname:'sunlin'
// };
// 传的是地址，浅复制
// function test(obj2){
// var newobj = {...obj2};//进行深复制
//     newobj.myname = 'xiaoming';
//     return newobj;
// };

// test(obj);
/**
 * 纯函数的定义:
 * 1.对外界没有副作用
 * 2.同样的输入得到同样的输出
 */