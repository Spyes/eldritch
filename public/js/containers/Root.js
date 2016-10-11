import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

import Game from '../components/Game';

const store = configureStore();

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}
