import { LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_REQUEST } from "../constants/Login";

const generateState = (id, isLoading, error) => ({
  id,
  isLoading,
  error,
})

const initialState = generateState('', false, false);

export const loggedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        id: action.id,
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        id: '',
        isLoading: false,
      }

    case LOGIN_REQUEST:
      return generateState('', true, false);

    default:
      return state;
  }
}