import React from 'react';
import {Square} from './Square';

export class Board extends React.Component {
    renderSquare(i) {
      return <Square value={this.props.squares[i]} 
                     onClick={() => this.props.onClick(i)}/>;
    }
    
    render() {
      var squares = this.props.squares.map((value, index) => {
        return (
          this.renderSquare(index)
        )
      });
      var board = (
        <div>
          <div className="board-row" onClick={() => console.log(this.props.squares)}>
            {squares.slice(0, 3)}
          </div>
          <div className="board-row" onClick={() => console.log(this.props.squares)}>
            {squares.slice(3, 6)}
          </div>
          <div className="board-row" onClick={() => console.log(this.props.squares)}>
            {squares.slice(6, 9)}
          </div>
        </div>
      );
      var something = (
        <div>asdf</div>
      );
      return (
        <div>
        {board}
        {something}
        </div>
      )
    }
}