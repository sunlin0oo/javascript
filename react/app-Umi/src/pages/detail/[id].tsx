// 这里[id]==>会动态取id
import React from "react";
import { useParams } from "umi";

export default function Detail(props: any) {
    // console.log(props.params.id);与useParams 相同
    const params = useParams();
    // console.log(params.id);
    return (
        <div>
            Detail
        </div>
    )
}