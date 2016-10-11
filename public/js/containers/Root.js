import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

import Game from '../components/Game';

import sagas from '../sagas';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({}, sagaMiddleware);
sagaMiddleware.run(sagas);

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
