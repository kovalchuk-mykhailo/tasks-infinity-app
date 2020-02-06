import { combineReducers } from 'redux';
import { loggedUserReducer } from './loggedUser';
import { inputsReducer } from './inputs';
import { todoReducer } from './todo';
import currentTaskReducer from './currentTask';

const allReducers = combineReducers({
  loggedUser: loggedUserReducer,
  inputs: inputsReducer,
  todo: todoReducer,
  currentTask: currentTaskReducer
})

export default allReducers;