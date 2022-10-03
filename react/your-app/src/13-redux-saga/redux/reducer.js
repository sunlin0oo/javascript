function reducer(prevState = {
    list1:[]
},action={}){
    const newState = {...prevState};
    switch(action.type){
        case 'change-list1':
            console.log(action)
            newState.list1 = action.payload;
            return newState
        default:
            return prevState
    }
    // return prevState;
}

export default reducer