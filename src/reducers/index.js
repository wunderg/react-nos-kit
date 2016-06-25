import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './userReducer.js';
import data from './dataReducer.js';

const rootReducer = combineReducers({
  //reducers will go here
  form: formReducer,
  user,
  data
});

export default rootReducer;
