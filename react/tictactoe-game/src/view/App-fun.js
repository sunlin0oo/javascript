import React, { useState } from 'react'
import '../styles/game.css'
export default function App() {
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null)
        }
    ])
    const copyHistory = history;
    const current = copyHistory[stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = copyHistory.map((step, move) => {
        console.log('step,move', step,move)
        const desc = move ? 'Go to move #' + move :
          'Go to game start';
        return (
          // 每次只要你构建动态列表的时候，都要指定一个合适的 key
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      });
    let status;
    if (winner) {
      status = `Winner:11111111${winner}`
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
    function handleClick(i) {
        const copyHistory = history.slice(0, stepNumber + 1);// 保证我们把这些“未来”的不正确的历史记录丢弃掉
        const current = copyHistory[copyHistory.length - 1]; // 获取到最新的历史记录进行改变==>修改后根据当前步数进行矩阵的选择
        const squares = current.squares.slice();// 复制旧函数==>创建了 squares 数组的一个副本
        // 避免重复点击
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setXIsNext(!xIsNext);
        setHistory(copyHistory.concat([
            {
                squares: squares
            }
        ]))
        setStepNumber(copyHistory.length)
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    }
    return (
        <div className='game'>
            <div className="game-board">
                <Board squares={current.squares} callBack={(i) => handleClick(i)} status={status}></Board>
            </div>
            <div className="game-info">
                <div></div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}


function Board(props) {
    function renderSquare(i) {
        return (
            <Square value={props.squares[i]} onClick={() => { props.callBack(i) }}></Square>
        )
    }
    return (
        <div>
            <div className='status'>{props.status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
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