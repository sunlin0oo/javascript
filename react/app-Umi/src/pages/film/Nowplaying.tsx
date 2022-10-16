import React, { useEffect, useState } from "react";
import { useHistory } from "umi";
export default function NowPlaying(props: any) {
    const [list, setList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch(
            "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => res.json()).then(res => setList(res.data.films))
    }, [])
    return (
        <div>
            {
                // 如果在箭头函数后面再加{}会导致输出的是js对象
                list.map((item: any) => <li key={item.filmId} onClick={() => {
                    // console.log(props); 与umi中usehistory一样
                    history.push(`/detail/${item.filmId}`)
                }}>
                    <img src={item.poster} alt={item.name} style={{ height: '300px', padding: '15px' }}></img>
                    {item.name}
                </li>)
            }
        </div>
    )
}