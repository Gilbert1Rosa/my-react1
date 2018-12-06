import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        next: 'X'
      };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.next;
        this.setState({
            squares: squares,
            next: this.state.next === 'X'? 'O': 'X'
        });
    }
  
    renderSquare(i) {
      return <Square value={this.state.squares[i]} 
                     onClick={() => this.handleClick(i)}/>;
    }
    
    render() {
      const status = 'Next player: ' + this.state.next;
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row" onClick={() => console.log(this.state.squares)}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row" onClick={() => console.log(this.state.squares)}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row" onClick={() => console.log(this.state.squares)}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}