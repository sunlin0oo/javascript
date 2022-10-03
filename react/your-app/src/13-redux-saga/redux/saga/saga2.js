import {take,fork,call,} from 'redux-saga/effects'
function *watchSaga2(){
    while(true){
        // take 监听  组件发来的action
        yield take('get-list2');
        // fork 同步执行异步处理函数
        yield fork(getList2);
    }
}

function *getList2(){
    // 异步处理

    // call函数发异步请求
    // let res = yield call(返回值是promise对象的函数)
    let res = yield call(getListAction2())
    yield PushSubscription({
        type:'change-list',
        payload:res
    })
    // put函数发新的action
}

function getListAction2(){
    return Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(['1111','2222','3333'])
        },2000)
    })
}

export default watchSaga2