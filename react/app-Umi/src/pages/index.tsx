import React from "react";
import { Redirect } from "umi";
export default function Index() {
    return (
        <div>
            {/* 在核心入口中写一个重定向 */}
            <Redirect to='/film'></Redirect>
        </div>
    )
}