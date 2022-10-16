export default {
    namespace: 'cinema',
    state: {
        list: []
    },
    reducers:{
        clearList(prevState:any,action:any){
            console.log('action', action, 'prevState', prevState)
            return{
                ...prevState,
                list:[]
            }
        },
        changeList(prevState:any,action:any){
            console.log('action', action, 'prevState', prevState)
            return{
                ...prevState,
                list:action.payload
            }
        }
    },
    // 副作用函数处理异步操作==>dva会去找reducer及effects是否有对应的函数
    effects: {
        // 生成器函数
        // action是dispatch的数据;obj是对于saga的封装
        *getList(action: any, obj: any):any {
            console.log('action,obj', action,obj)
            const { put, call } = obj;
            // 等待异步的返回值
            let res = yield call(getListForCinema,action.payload.cityId);
            // 传给reducer
            yield put({
                type:'changeList',
                payload:res
            });
        }
    }
}
// 数据请求函数
async function getListForCinema(cityId:String) {
    let res = await fetch(`https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=7406159`, {
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    }).then(res=>res.json())
    return res.data.cinemas
}