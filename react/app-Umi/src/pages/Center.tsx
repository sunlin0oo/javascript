import React from "react";

function Center() {
    return (
        <div>
            Center
        </div>
    )
}
// @指的是src下的绝对路径
// 给Center组件创建一个父组件==>/wrappers/Auth
Center.wrappers = ['@/wrappers/Auth']
export default Center