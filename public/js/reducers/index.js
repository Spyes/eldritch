import { combineReducers } from 'redux';

import board from './boardReducer';
import stats from './statsReducer';
import render from './renderReducer';
import location from './locationReducer';

export default combineReducers({
  board,
  stats,
  render,
  location
});
