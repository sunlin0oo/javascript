import{fromJS} from 'immutable'
const CityReducer = (prevState={
    cityName:"北京",
},action)=>{
    console.log("action::",action);
    // let newState = {...prevState};
    // 仅在操作的这一步进行immutable处理，输出都是普通JS
    let newState = fromJS(prevState);
    switch(action.type){
        case "change-city":
            // newState.cityName = action.payload;
            newState.set('cityName',action.payload)
            return newState.toJS();
        default:
            return prevState
    }
}

export default CityReducer