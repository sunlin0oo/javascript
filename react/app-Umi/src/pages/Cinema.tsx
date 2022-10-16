import React, { useEffect } from "react";
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { connect } from "umi";
/**
 * // back={props.cityName}是要显示城市名称，所以要当到dva中进行管理
 * 1.City组件中props.dispatch(城市信息)==>CityModel.reducer.(指定的纯函数)
 * 2.CityModel中修改组件状态
 * 3.connect()(Cinema)==>创建高阶组件==>可以监听到models中的状态
 */
function Cinema(props:any) {
    console.log('props', props);
    useEffect(()=>{
        if(props.list.length === 0){
            // 取数据==>异步操作
            props.dispatch({
                type:'cinema/getList',
                payload:{

                }
            })
        }else{
            console.log('缓存')
        }
    },[])
    return (
        <div>
            {/* 搜索栏进行城市的切换 */}
            <NavBar onBack={() => {
                // console.log('Click')
                props.history.push('/city')
            }} back={props.cityName} backArrow={false} right={<SearchOutline></SearchOutline>}>标题</NavBar>
            Cinema
        </div>
    )
}

// connect 帮cinema创建父组件，订阅发布等功能==>只要被包装就可以获取到所有的命名空间
export default connect((state:any)=>{
    console.log(state)
    // 获取到models中的数据
    return{
        a:1,
        // state.(命名空间).(空间中的属性)
        cityName:state.city.cityName,
        list:state.cinema.list
    }
})(Cinema)