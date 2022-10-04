import React, { Component } from 'react';

class Child extends Component {
    mytext = React.createRef();
    componentDidMount(){
        // console.log('this.mytext',this.mytext);
        this.props.callback(this.mytext)
    }
    render() {
        return (
            <div style={{background:'yellow'}}>
                <input defaultValue='11111111' ref={this.mytext}></input>
            </div>
        );
    }
}

export default Child;