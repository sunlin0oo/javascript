import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag'
class Add extends Component {
    createFilm = gql `
    mutation createFilm($input:FilmInput){
        createFilm(input:$input){
            id,name,price
        }
    }
    `
    // 通过ref的方法进行通信
    nameRef = React.createRef();
    posterRef = React.createRef();
    priceRef = React.createRef();

    render(){
        return(
            <div>
                <Mutation mutation={this.createFilm}>
                    {/* 回调函数中保证返回值==>对应的变量放到上面的gql查询语句中 */}
                    {
                        // 这里的回调方法是后端的方法名称;后端的查询数据会在回调函数第二个参数中给出
                        (createFilm,{data})=>{
                            console.log('data',data)
                            return <div>
                                <p>名字<input type={'text'} ref={this.nameRef}></input></p>
                                <p>海报<input type={'text'} ref={this.posterRef}></input></p>
                                <p>价格<input type={'number'} ref={this.priceRef}></input></p>
                                <button onClick={()=>{
                                    createFilm({
                                        variables:{
                                            input:{
                                                name:this.nameRef.current.value,
                                                poster:this.posterRef.current.value,
                                                price:Number(this.priceRef.current.value),
                                            }
                                        }
                                    }).then(res=>{
                                        this.props.cb();
                                    })
                                }}>add</button>
                            </div>
                        }
                    }
                </Mutation>
            </div>
        )
    }
}

export default Add;