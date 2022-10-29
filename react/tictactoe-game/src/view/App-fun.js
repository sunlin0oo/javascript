import React, { useEffect, useState } from 'react'
import '../styles/game.css'
export default function App() {
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const [history, setHistory] = useState([
        {
            squares: Array(9).fill(null)
        }
    ])
    // 记录行列序号
    const [position, setPosition] = useState([
        {
            row: null,
            column: null,
        }
    ])
    // 记录升/降序
    const [sortFlag, SetSortFlag] = useState(true);
    const [moves,setMoves] = useState(null);
    console.log('position', position)
    const copyHistory = history;
    const copyPosition = position;
    const currentHistory = copyHistory[stepNumber];
    const winner = calculateWinner(currentHistory.squares);
    
    // 控制升序降序
    useEffect(()=>{
        if(sortFlag){
            setMoves(copyHistory.map((step, move) => {
                let font = stepNumber === move ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
                console.log('step,move', step, move)
                // 要用步数对其进行控制
                const desc = move ? `Go to move #  列号：${copyPosition[move].column} 行号：${copyPosition[move].row} 步数:${move}` :
                    'Go to game start';
                return (
                    // 每次只要你构建动态列表的时候，都要指定一个合适的 key
                    <li key={move}>
                        <button style={font} onClick={() => jumpTo(move)}>{desc}</button>
                    </li>
                )
            }));
        }else{
            const len = copyHistory.length;
            console.log('len', len);
            setMoves(copyHistory.map((step, move) => {
                let font = stepNumber === move ? { fontWeight: 'bold' } : { fontWeight: 'normal' };
                console.log('step,move', step, move)
                // 要用步数对其进行控制
                const desc = len - move - 1 ? `Go to move #  列号：${copyPosition[len - move - 1].column} 行号：${copyPosition[len - move - 1].row} 步数:${len - move - 1}` :
                    'Go to game start';
                return (
                    // 每次只要你构建动态列表的时候，都要指定一个合适的 key
                    <li key={move}>
                        <button style={font} onClick={() => jumpTo(move)}>{desc}</button>
                    </li>
                )
            }));
        }
    },[copyHistory, copyPosition, sortFlag, stepNumber])
    let status;
    if (winner) {
        status = `Winner:${winner.winnerName}`
        for (let i of winner.squares) {
            document.getElementsByClassName('square')[i].style = "background: lightblue;";
          }
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
        // 6.当无人获胜时，显示一个平局的消息。
      if(stepNumber === 9) status='平局';
    }

    function handleClick(i) {
        const copyHistory = history.slice(0, stepNumber + 1);// 保证我们把这些“未来”的不正确的历史记录丢弃掉
        const copyPosition = position.slice(0, stepNumber + 1);
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
        setStepNumber(copyHistory.length);
        setPosition(copyPosition.concat([
            {
                row: parseInt(stepNumber % 3 + 1),
                column: parseInt(stepNumber / 3 + 1),
            }
        ]))
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0)
    }
    return (
        <div className='game'>
            <div className="game-board">
                <Board squares={currentHistory.squares} callBack={(i) => handleClick(i)} status={status}></Board>
            </div>
            <button onClick={() => {
                SetSortFlag(!sortFlag)
            }}>{sortFlag ? '升序' : '降序'}</button>
            <div className="game-info">
                <div></div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}


function Board(props) {
    const row = Array(3).fill(null);
    const column = Array(3).fill(null);
    function renderSquare(i) {
        return (
            <Square key={i} value={props.squares[i]} onClick={() => { props.callBack(i) }}></Square>
        )
    }
    return (
        <div>
            <div className='status'>{props.status}</div>
            {
                row.map((item, x) =>
                    <div key={x} className="board-row">
                        {
                            column.map((item, y) => renderSquare(3 * x + y))
                        }
                    </div>)
            }
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
            return {
                squares: [a, b, c],//返回获胜的元素块
                winnerName: squares[a],
            };
        }
    }
    return null;
}