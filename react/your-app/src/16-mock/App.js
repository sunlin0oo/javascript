import React, { useEffect } from 'react'
import './index.js'
import axios from 'axios'

export default function App() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const fetchData = async () =>{
            const res = await axios('/mock/usermsg')
            console.log(res.data)
        }
        fetchData();
    },[])
    return (
        <div>
            Hello React
        </div>
    )
}
