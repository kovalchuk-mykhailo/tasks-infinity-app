import { DELETE_TASK, EDIT_TASK_MODE, SAVE_EDIT_TASK, CANCEL_EDIT_TASK, TOGGLE_TASK, ADD_TASK_REQUEST } from '../constants/Todo'

const initialState = {
  id: '',
  text: '',
  completed: false,
  createdDate: '',
  editDate: '',
  userId: '',
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TASK_REQUEST:
      const createdDate = (new Date()).toLocaleDateString();
      const task = {
        text: action.text,
        createdDate: createdDate,
        editDate: createdDate,
        completed: false,
        userId: action.userId
      };
      console.log(task);
      return task;

    case TOGGLE_TASK:
      console.log('toggle')
      if (state.id !== action.id) {
        return state;
      } else {
        return {
          ...state,
          completed: !state.completed,
        }
      };

    case DELETE_TASK:
      return state;

    case EDIT_TASK_MODE:
      return state;

    case SAVE_EDIT_TASK:
      return state;

    case CANCEL_EDIT_TASK:
      return state;

    default:
      return state;
  }
};

export default taskReducer;