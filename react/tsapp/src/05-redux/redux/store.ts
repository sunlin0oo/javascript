// 回头看关于redux的知识
// 使用configureStore 进行替换
import {createStore} from 'redux'
// 写接口，约束action
interface IAction {
    type:string,
    payload?:any
}
interface IState{
    isShow:boolean
}
const reducer = (prevState:IState={
    isShow:true
},action:IAction)=>{
    const {type} = action;
    const newState = {...prevState};
    switch(type){
        case 'show':
            newState.isShow = true;
            return newState
        case 'hide':
            newState.isShow = false;
            return newState
        default :
            return prevState
    }
}

const store = createStore(reducer);

export default store