import React, { Component } from 'react';

/* COMPONENTS */
import Board from '../Board';

export default class Game extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}
