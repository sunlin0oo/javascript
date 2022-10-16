import React from "react";
import { NavBar } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
export default function Cinema() {
    return (
        <div>
            <NavBar onBack={() => {
                console.log('Click')
            }} back='北京' backArrow={false} right={<SearchOutline></SearchOutline>}>标题</NavBar>
            Cinema
        </div>
    )
}   