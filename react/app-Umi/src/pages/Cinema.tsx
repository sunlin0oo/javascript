import React, { useEffect } from "react";
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { DotLoading } from 'antd-mobile'
import { connect } from "umi";
/**
 * // back={props.cityName}是要显示城市名称，所以要当到dva中进行管理
 * 1.City组件中props.dispatch(城市信息)==>CityModel.reducer.(指定的纯函数)
 * 2.CityModel中修改组件状态
 * 3.connect()(Cinema)==>创建高阶组件==>可以监听到models中的状态
 */
function Cinema(props: any) {
    console.log('props', props);
    useEffect(() => {
        if (props.list.length === 0) {
            // 取数据==>异步操作==?dispatch到CinemaModel
            props.dispatch({
                type: 'cinema/getList',
                payload: {
                    cityId: props.cityId
                }
            })
        } else {
            console.log('缓存')
        }
    }, [])
    return (
        <div>
            {/* 搜索栏进行城市的切换 */}
            <NavBar onBack={() => {
                // console.log('Click')

                // 在点击切换城市的时候清空cinema list的数据
                props.dispatch({
                    type: 'cinema/clearList'
                })
                props.history.push('/city')
            }} back={props.cityName} backArrow={false} right={<SearchOutline></SearchOutline>}>标题</NavBar>
            {
                props.loading && <div style={{ fontSize: 14, textAlign: 'center' }}>
                    <DotLoading color='red' />
                </div>
            }
            <ul>
                {
                    props.list.map((item: any) => <li key={item.cinemaId}>{item.name} </li>)
                }
            </ul>
        </div>
    )
}

// connect 帮cinema创建父组件，订阅发布等功能==>只要被包装就可以获取到所有的命名空间
export default connect((state: any) => {
    console.log(state)
    // 获取到models中的数据
    return {
        a: 1,
        // dva中自带的加载属性==>异步流程未走完是false，加载完成是true
        loading: state.loading.global,
        // state.(命名空间).(空间中的属性)
        cityName: state.city.cityName,
        cityId: state.city.cityId,
        list: state.cinema.list
    }
})(Cinema)