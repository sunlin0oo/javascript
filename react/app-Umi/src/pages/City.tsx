import React, { useEffect, useState } from "react";
import { IndexBar, List } from 'antd-mobile';
import { useHistory } from "umi";
export default function City(props: any) {
    const [list, setList] = useState<any>([])
    const history = useHistory();
    const filterCity = function (cities: any) {
        const letterArray: Array<String> = [];
        const newList = [];
        // 记录26个英文字母
        for (let i = 65; i < 91; i++) {
            letterArray.push(String.fromCharCode(i))
        }
        // m是索引
        for (let m in letterArray) {
            let cityItems = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letterArray[m]);
            // 排除掉为空的情况
            cityItems.length && newList.push({
                title: letterArray[m],
                // substring(0, 1):取第一个字符，然后大写
                items: cityItems
            })
        }
        return newList;
    }

    const changeCity = (item: any) => {
        console.log(item);
        history.push('/cinema');
    }

    useEffect(() => {
        fetch("https://m.maizuo.com/gateway?k=2145459", {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res => res.json()).then(res => {
            console.log(res.data)
            console.log(filterCity(res.data.cities))
            setList(filterCity(res.data.cities));
        })
    }, [])
    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {list.map((item: any) => {
                    const { title, items } = item
                    return (
                        <IndexBar.Panel
                            index={title}
                            title={`标题${title}`}
                            key={`标题${title}`}
                        >
                            <List>
                                {items.map((item: any, index: number) => (
                                    <List.Item key={index} onClick={(item) => {
                                        changeCity(item)
                                    }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    )
}