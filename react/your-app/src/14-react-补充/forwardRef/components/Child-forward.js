import React, { Component, forwardRef } from 'react';
// 适用于单个不适合多个
// 由于通过使用forwardRef可以进行透传，从而拿到孩子标签的标签
const Child = forwardRef((props,ref)=>{
    return <div style={{background:'red'}}>
        <input ref={ref} defaultValue='1111111111'></input>
    </div>
})

export default Child;