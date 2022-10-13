import { getCinemaListService } from "../services/maizuo";

export default {
// 聚合reducer 和 action
    namespace: 'maizuo',
  
    state: {
        isShow:true,
        list:[]
    },

    reducers:{
        // action
        hide(prevState,action){
            // ... 在属性中同名的会进行覆盖，不重名的则不会覆盖
            console.log('prevState',prevState)
            // {展开老对象，输入新对象}
            return {...prevState,isShow:false}
        },
        show(prevState,action){
            // ... 在属性中同名的会进行覆盖，不重名的则不会覆盖
            return {...prevState,isShow:true}
        },
        changeCinemaList(prevState,{payload}){
            // ... 在属性中同名的会进行覆盖，不重名的则不会覆盖
            return {...prevState,list:payload}
        }
    },
    // 订阅函数
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            console.log('初始化')
        },
      },
      
    // effect- redux-saga
    effects:{
        // *getCinemaList(action,obj){
        //     console.log(obj)
        // }
        //  结构出常用对象 call是取异步，put是推理下一个reducer
        *getCinemaList(action,{call,put}){
            // yield call(Promise对象)==>封装在services文件夹中
            const res = yield call(getCinemaListService);
            console.log(res.data.data.cinemas);
            yield put({
                type:'changeCinemaList',
                // 将数据附带上
                payload:res.data.data.cinemas
            })
        }
    }
};
  