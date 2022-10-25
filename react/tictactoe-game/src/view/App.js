/* eslint-disable no-undef */
import React, { Component } from 'react'
import boardStyle from '../styles/board.module.css'
export default class App extends Component {
  render() {
    return (
      <div className={boardStyle.game}>
        <div className={boardStyle.gameboard}>
          <Board></Board>
        </div>
        <div className={boardStyle.gameinfo}>
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

class Board extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null)
  //   }
  // }
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }
  handleClick(i){
    const squares = this.state.squares.slice();// 复制旧函数==>创建了 squares 数组的一个副本
    // 避免重复点击
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({xIsNext: !this.state.xIsNext});
    this.setState({squares: squares,
      xIsNext: !this.state.xIsNext});
  }
  // 类组件中定义方法renderSquare
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={()=>{
      this.handleClick(i)
    }}></Square>
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){
      status = `Winner:11111111${winner}`
    }else{
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className={boardStyle.status}>{status}</div>
        <div className={boardStyle.boardrow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={boardStyle.boardrow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={boardStyle.boardrow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

// class Square extends Component {
//   /**每次你定义其子类的构造函数时，都需要调用 super 方法。因此，在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。 */
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   state = {
//     value:null
//   }
//   render() {
//     return (
//       // 通过执行回调函数，使状态提升
//       <div>
//         <button className={boardStyle.square} onClick={()=>{
//       this.setState({
//         value:this.props.onClick() // 执行上级传来的回调函数
//       })}}>
//           {/* {this.state.value} */}
//           {this.props.value}
//         </button>
//       </div>
//     )
//   }
// }

function Square(props) {
  return (
    <div>
      <button className={boardStyle.square} onClick={props.onClick}>
      {props.value}
    </button>
    </div>
  )
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

