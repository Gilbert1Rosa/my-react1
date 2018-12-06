import React from 'react';

export class Square extends React.Component {
    render() {
      var props = this.props;
      return (
        <button className="square" onClick={props.onClick}>
          {this.props.value}
        </button>
      );
    }
}