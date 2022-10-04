import React, { memo } from "react";

// export default function Child(){
//     console.log('重复更新');
//     return <div>Child</div>
// }

const Child = memo((props)=>{
    console.log('重复更新');
    return <div>child-{props.title}</div>
})

export default Child