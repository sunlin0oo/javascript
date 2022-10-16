import React from "react";
import { Redirect } from "umi";

export default function Auth(props: any) {
    // 校验组件==>如果没有通过则跳转到login中
    if (localStorage.getItem('token')) {
        return (
            <div>
                {props.children}
            </div>
        )
    }
    return <Redirect to='/login'></Redirect>
}