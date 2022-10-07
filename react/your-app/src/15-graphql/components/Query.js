import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Query} from 'react-apollo';
import Delete from './Delete';

class SunlinQuery extends Component {
    query = gql `
    query getFilmInfo($id:String!){
        getFilmInfo(id:$id){
            id,name,price,poster
        }
    }
    `
    state = {
        id:""
    }
    render(){
        return(
            <div>
            <input type='text' onChange={(evt)=>{
                // console.log('evt',evt)
                this.setState({
                    id:evt.target.value
                })
            }}></input>
            {/*Query是一个组件==>为了能够使得删除或者更新后能够及时的更新数据，需要让Query重新执行一次
            ==>调用refetch==>可以强制进行更新 */}
            <Query query={this.query} variables={{id:this.state.id}}>
                {
                    ({loading, data, refetch})=>{
                        console.log(loading);// 返回true表示等待数据中,反之数据不等待已经返回
                        this.props.fetch(refetch);//将参数refetch方法传到父组件
                        return loading?<div>loading.....</div>:
                        <div>
                            {
                                // 从Network里面的XHR中进行查找
                                data.getFilmInfo.map(item=><li key={item.id} style={{border:'1px solid black',padding:'10px'}}>
                                    <div>名字：{item.name}</div>
                                    <div>价格：{item.price}</div>
                                    <Delete id={item.id} fetch={()=>{
                                        refetch();
                                    }}></Delete>
                                </li>)
                            }
                        </div>
                    }
                }
            </Query></div>
            
        )
    }
}

export default SunlinQuery;