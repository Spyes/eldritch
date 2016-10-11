import { combineReducers } from 'redux';

import game from './gameReducer';
import stats from './statsReducer';
import render from './renderReducer';
import location from './locationReducer';

export default combineReducers({
  game,
  stats,
  render,
  location
});
