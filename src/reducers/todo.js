import { ADD_TASK, DELETE_TASK, EDIT_TASK_MODE, SAVE_EDIT_TASK, CANCEL_EDIT_TASK, TOGGLE_TASK } from '../constants/Todo'
import taskReducer from './task';

const initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        taskReducer(undefined, action),
      ];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    case EDIT_TASK_MODE:
      return state;
    case SAVE_EDIT_TASK:
      return state;
    case CANCEL_EDIT_TASK:
      return state;
    case TOGGLE_TASK:
      return state.map(task => taskReducer(task, action));
    default:
      return state;
  };
};