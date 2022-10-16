// 这里相当于dva中的models===>这里相当于是中转站
export default {
    namespace:'city',//命名空间
    state :{
        cityName:'北京',
        cityId:'110100'
    },
    // reducers吃了老状态，吐出来新状态
    reducers:{
        changeCity(prevState:any,action:any){
            console.log('action', action);
            // https://fuhanghang.blog.csdn.net/article/details/123870392?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123870392-blog-100746116.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-2-123870392-blog-100746116.pc_relevant_default&utm_relevant_index=3
            return {
                ...prevState,//展开老状态
                // 将新状态返回出去进行覆盖进行覆盖
                cityName:action.payload.cityName,
                cityId:action.payload.cityId
            }
        }
    }
}