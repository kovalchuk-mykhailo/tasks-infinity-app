import { combineReducers } from 'redux';
import { loggedUserReducer } from './loggedUser';
import { inputsReducer } from './inputs';
import { todoReducer } from './todo';

const allReducers = combineReducers({
  loggedUser: loggedUserReducer,
  inputs: inputsReducer,
  todo: todoReducer,
})

export default allReducers;