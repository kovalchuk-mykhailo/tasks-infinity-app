import { ADD_TASK, DELETE_TASK, EDIT_TASK_MODE, SAVE_EDIT_TASK, CANCEL_EDIT_TASK, TOGGLE_TASK } from '../constants/Todo'

const generatorId = (lastId = -1) => {
  let id = lastId;
  return () => {
    return ++id;
  }
}

const getNewId = generatorId();

export const addTask = (text) => {
  console.log("add task");
  return {
    type: ADD_TASK,
    id: getNewId(),
    text,
  }
};

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