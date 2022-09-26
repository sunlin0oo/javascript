/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'
import Swiper , { Navigation, Pagination }from 'swiper'
import '../../../node_modules/swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination]);

export default class KSwiper extends Component {
    componentDidMount() {
        new Swiper(".swiper",{
             // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 开启衔接滑动
            loop:this.props.loop
        })
    }
    
    render() {
        return (
            <div>
                <div className="swiper" style={{height:"200px",background:"yellow"}}>
                    <div className="swiper-wrapper">
                        {console.log("this.props.children:", this.props)}
                        {this.props.children}
                    </div>

                    <div className="swiper-pagination"></div>

                </div>
            </div>
        )
    }
}
