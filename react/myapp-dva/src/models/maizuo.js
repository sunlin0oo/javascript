export default {
// 聚合reducer 和 action
    namespace: 'maizuo',
  
    state: {
        isShow:true
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
        }
    }

  
};
  