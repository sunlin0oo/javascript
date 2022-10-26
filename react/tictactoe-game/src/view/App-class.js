/* eslint-disable no-undef */
import React, { Component } from 'react'
import boardStyle from '../styles/board.module.css'
import '../styles/game.css'
export default class App extends Component {
  state = {
    // history作为数组存储每次点击的矩阵结果，初始化存储了一个最开始全null
    history: [
      { squares: Array(9).fill(null) }
    ],
    stepNumber: 0,
    xIsNext: true
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);// 保证我们把这些“未来”的不正确的历史记录丢弃掉
    const current = history[history.length - 1]; // 获取到最新的历史记录进行改变==>修改后根据当前步数进行矩阵的选择
    const squares = current.squares.slice();// 复制旧函数==>创建了 squares 数组的一个副本
    // 避免重复点击
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [
          { squares: squares }
        ]
      ), // concat 拼接不改变原数组==>每次都拼接一个key:squares value:squares
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }
  
  render() {
    const history = this.state.history;
    console.log('history', history)
    const current = history[this.state.stepNumber]; // 获取到最新的历史记录进行改变 
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      console.log('step,move', step,move)
      const desc = move ? 'Go to move #' + move :
        'Go to game start';
      return (
        // 每次只要你构建动态列表的时候，都要指定一个合适的 key
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
    let status;
    if (winner) {
      status = `Winner:11111111${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className='game'>
        <div className="game-board">
          <Board squares={current.squares} status={status} callback={(i) => {
            this.handleClick(i);
          }}></Board>
        </div>
        <div className="game-info">
          {/* <div>{status}</div> */}
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

class Board extends Component {
  // 类组件中定义方法renderSquare
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => {
      this.props.callback(i)
    }}></Square>
  }
  render() {
    return (
      <div>
        <div className={boardStyle.status}>{this.props.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}


function Square(props) {
  return (
    <div>
      <button className="square" onClick={props.onClick}>
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

