import React,{Component} from 'react'

export default class App extends Component{
    a = 100;
    myref = React.createRef();
    render(){
        return(
            <div>
                 {/* <input ref="mytext"/>  直接使用ref会被弃用*/}
                 {/* 给input标签挂载ref */}
                 <input ref={this.myref}/>
                 {/* 点击事件加一个处理函数 */}
                 <button onClick={()=>{
                    // console.log("click1",this.refs.mytext)//this.refs.mytext 绑定到标签身上得到，DOM自身
                    console.log("click1",this.myref)//this.refs.current可以获取到这个DOM结构
                 }}>add</button>
            </div> 
        )
    }

    handleClick1(){
        console.log("click3",this.a);//this是undefined,但是可以通过bind指向this(App)
    }
    // 箭头函数中this是当前对象外上下文环境中的this指向
    handleClick2=(evt)=>{
        console.log("click4",this.a,evt)
    }

    handleClick3=(evt)=>{
        console.log("click5",this.a,evt)
    }
}

/**  React并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式(绑定到根节点上,然后冒泡进行查看)*/
