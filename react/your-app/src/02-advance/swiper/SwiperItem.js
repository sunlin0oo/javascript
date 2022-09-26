/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React, { Component } from 'react'

export default class KSwiperItem extends Component {
    render() {
        return (
            <div className="swiper-slide">
                {console.log(this.props.children)}
                {/* 插槽的用法 */}
                {this.props.children}
            </div>
        )
    }
}
