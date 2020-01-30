import { combineReducers } from 'redux';
import { loggedUserReducer } from './loggedUser';

const allReducers = combineReducers({
  loggedUser: loggedUserReducer,
})

export default allReducers;