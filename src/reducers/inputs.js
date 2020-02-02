import { INPUT_EMAIL, INPUT_PASSWORD, INPUT_FIRSTNAME, INPUT_LASTNAME, CLEAR_INPUTS } from "../constants/Inputs";

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

export const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_EMAIL:
      return {
        ...state,
        email: action.value
      }

    case INPUT_PASSWORD:
      return {
        ...state,
        password: action.value
      }

    case INPUT_FIRSTNAME:
      return {
        ...state,
        firstName: action.value
      }

    case INPUT_LASTNAME:
      return {
        ...state,
        lastName: action.value
      }

    case CLEAR_INPUTS:
      return {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }

    default:
      return state;
  }
}
