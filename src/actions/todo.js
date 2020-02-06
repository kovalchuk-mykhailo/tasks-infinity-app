import { ADD_TASK_SUCCESS, DELETE_TASK, EDIT_TASK_MODE, SAVE_EDIT_TASK, CANCEL_EDIT_TASK, TOGGLE_TASK, LOAD_TASKS, SET_LOADED_TASKS, ADD_TASK_REQUEST, SET_CURRENT_TASK } from '../constants/Todo'

// const generatorId = (lastId = -1) => {
//   let id = lastId;
//   return () => {
//     return ++id;
//   }
// }
// const getNewId = generatorId();

export const addTaskSuccess = (task) => {
  console.log("add task");
  return {
    type: ADD_TASK_SUCCESS,
    task
  }
};

export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST,
});

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id,
  }
};

export const editTask = (id) => {
  return {
    type: EDIT_TASK_MODE,
    id: id,
  }
};

export const saveEditTask = (id, text) => {
  return {
    type: SAVE_EDIT_TASK,
    id,
    text,
  }
};

export const cancelEditTask = (id) => {
  return {
    type: CANCEL_EDIT_TASK,
    id: id,
  }
};

export const toggleTask = (id) => {
  return {
    type: TOGGLE_TASK,
    id: id,
  }
};

export const loadTasks = () => {
  return {
    type: LOAD_TASKS,
  }
};

export const setLoadedTasks = (loadedTasks) => {
  return {
    type: SET_LOADED_TASKS,
    loadedTasks,
  }
};

export const setCurrentTask = (userId, text, createdDate) => {
  return {
    type: SET_CURRENT_TASK,
    userId,
    text,
    createdDate,
  }
};