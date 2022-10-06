import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag'
class Update extends Component {
    updateFilm = gql `
    mutation updateFilm($id:String!,$input:FilmInput){
        updateFilm(id:$id,input:$input){
            id,name,price,poster
        }
    }
    `
    state = {
        id:"633d41c33764bd553c6493b6"
    }
    render(){
        return(
            <div>
                <Mutation mutation={this.updateFilm}>
                    {/* 回调函数中保证返回值==>对应的变量放到上面的gql查询语句中 */}
                    {
                        // 这里的回调方法是后端的方法名称;后端的查询数据会在回调函数第二个参数中给出
                        (updateFilm,{data})=>{
                            console.log('data',data)
                            return <div>
                                <button onClick={()=>{
                                    updateFilm({
                                        variables:{
                                            id:this.state.id,
                                            input:{
                                                name:"我又更新了sunlin",
                                                poster:"有更新了poster",
                                                price:666,
                                            }
                                        }
                                    })
                                }}>Update</button>
                            </div>
                        }
                    }
                </Mutation>
            </div>
        )
    }
}

export default Update;