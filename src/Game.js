import React from 'react';
import {Board} from './Board';

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
  var winner = null
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winner = squares[a];
      break;
    }
  }
  return winner;
}

export class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        next: 'X'
      }
    }

    handleClick(i) {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const squares = current.squares.slice();
      squares[i] = this.state.next;
      if (calculateWinner(current.squares) || current.squares[i]) {
        return;
      }
      this.setState({
          history : history.concat([{
            squares: squares,
          }]),
          stepNumber: history.length,
          next: this.state.next === 'X'? 'O': 'X'
      });
    }

    jumpTo(step) {
      var next = this.state.next;
      this.setState({
        stepNumber: step,
        next: (next % 2) === 0? 'X':'O'
      })
    }

    renderGoToMoves() {
      return this.state.history.map((step, move) => {
          const desc = move? `Go to move # ${move}` : 'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
          );
      })
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + this.state.next;
      }

      return (
        <div className="game">
          <div className="game-board">
            <Board
             squares={current.squares}
             onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{this.renderGoToMoves()}</ol>
          </div>
        </div>
      );
    }
}