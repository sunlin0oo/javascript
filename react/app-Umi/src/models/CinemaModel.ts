export default{
    namespace:'cinema',
    state:{
        list:[]
    },
    // 副作用函数处理异步操作==>dva会去找reducer及effects是否有对应的函数
    effects:{
        // action是dispatch的数据;obj是对于saga的封装
        *getList(action:any,obj:any){
            // console.log('action,obj', action,obj)
        }
    }
}