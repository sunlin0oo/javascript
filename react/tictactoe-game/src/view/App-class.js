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
    xIsNext: true,
    position: [{
      row: null,
      column: null,
    }],
    sortFlag: true
  }
  handleClick(i) {
    const position = this.state.position.slice(0, this.state.stepNumber + 1);//进行数据的备份
    const history = this.state.history.slice(0, this.state.stepNumber + 1);// 保证我们把这些“未来”的不正确的历史记录丢弃掉
    const current = history[history.length - 1]; // 获取到最新的历史记录进行改变==>修改后根据当前步数进行矩阵的选择
    const squares = current.squares.slice();// 复制旧函数==>创建了 squares 数组的一个副本
    // 避免重复点击
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const column = parseInt(i % 3 + 1);
    const row = parseInt(i / 3 + 1);
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [
          { squares: squares }
        ]
      ), // concat 拼接不改变原数组==>每次都拼接一个key:squares value:squares
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      position: position.concat([{
        row: row,
        column: column,
      }])
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const position = this.state.position;//将数据全部记录下来
    console.log('position', position);
    console.log('history', history)
    const current = history[this.state.stepNumber]; // 获取到最新的历史记录进行改变
    const winner = calculateWinner(current.squares);
    // 1.在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。
    const moves = history.map((step, move) => {
      console.log('step,move', step, move)
      //2. 在历史记录列表中加粗显示当前选择的项目。
      let font = (move === this.state.stepNumber) ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
      const desc = move ? `Go to move # ${move} 列号：${position[move].row},行号：${position[move].column} ` :
        'Go to game start';
      return (
        // 每次只要你构建动态列表的时候，都要指定一个合适的 key
        <li key={move}>
          <button style={font} onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });

    let status;
    if (winner) {
      console.log(winner);
      // 每当有人获胜时，高亮显示连成一线的
      status = `Winner:${winner.winnerName}`
      for (let i of winner.squares) {
        document.getElementsByClassName('square')[i].style = "background: lightblue;";
      }
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
      // 6.当无人获胜时，显示一个平局的消息。
      if(this.state.stepNumber === 9) status='平局';
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
          {/*4.添加一个可以升序或降序显示历史记录的按钮。*/}
          <button onClick={() => {
            this.setState({
              sortFlag: !this.state.sortFlag
            })
          }}>{this.state.sortFlag ? '升序' : '降序'}</button>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

class Board extends Component {
  // 类组件中定义方法renderSquare
  renderSquare(i) {
    // 需要给每个组件添加一个key
    return <Square key={i} value={this.props.squares[i]} onClick={() => {
      this.props.callback(i)
    }}></Square>
  }
  render() {
    return (
      // 3.使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。
      <div>
        <div className={boardStyle.status}>{this.props.status}</div>
        {
          Array(3).fill(null).map((item, x) =>
            <div key={x} className="board-row">
              {
                Array(3).fill(null).map((item, y) => this.renderSquare(3 * x + y))
              }
            </div>)
        }
        {/* <div className="board-row">
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
      </div> */}
      </div >
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
      return {
        squares: [a, b, c],//返回获胜的元素块
        winnerName: squares[a],
      }
    }
  }
  return null;
}

