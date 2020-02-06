import { SET_CURRENT_TASK } from '../constants/Todo'

const initialState = {
  userId: -1,
  text: '',
  completed: false,
  createdDate: '',
  editDate: '',
}

const currentTaskReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CURRENT_TASK:
      const task = {
        userId: action.userId,
        text: action.text,
        createdDate: action.createdDate,
        editDate: action.createdDate,
        completed: false,
      };
      console.log(task);
      return task;

    default:
      return state;
  }
};

export default currentTaskReducer;