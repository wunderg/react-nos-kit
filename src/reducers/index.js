import { combineReducers } from 'redux';
import user from './userReducer.js';

const rootReducer = combineReducers({
  //reducers will go here
  user
});

export default rootReducer;
