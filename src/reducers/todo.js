import { DELETE_TASK, EDIT_TASK_MODE, SAVE_EDIT_TASK, CANCEL_EDIT_TASK, TOGGLE_TASK, SET_LOADED_TASKS, ADD_TASK_REQUEST, ADD_TASK_SUCCESS } from '../constants/Todo'
import taskReducer from './task';

const initialState = [];

const getValidateLoadedTasks = (tasks = []) => {
  if (typeof tasks === 'object')
    return tasks;
  else
    return [];
}

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_TASK_REQUEST:
    //   return [
    //     ...state,
    //     taskReducer(undefined, action),
    //   ];

    case ADD_TASK_SUCCESS:
      console.log("Action task: ", action.task);
      return [
        ...state,
        action.task
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

    case SET_LOADED_TASKS:
      const validateLoadedTasks = getValidateLoadedTasks(action.loadedTasks);
      return [
        ...state,
        ...validateLoadedTasks
      ]

    case ADD_TASK_REQUEST:
    default:
      return state;
  };
};