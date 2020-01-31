import { LOGIN_ON_SUCCESS, LOGOUT_SUCCESS, LOGIN_ON_REQUEST, LOGIN_ASYNC_REQUEST, LOGIN_ON_FAILURE } from "../constants/Login";
import { setUserToStorage, removeUserFromStorage } from "../utils/authentication";

const generateState = (id, isLoading, error) => ({
  id,
  isLoading,
  error,
})

const initialState = generateState('', false, '');

export const loggedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ON_SUCCESS: {
      setUserToStorage(action.id);
      return {
        ...state,
        id: action.id,
        isLoading: false,
      }
    }

    case LOGIN_ON_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case LOGIN_ON_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }

    case LOGIN_ASYNC_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case LOGOUT_SUCCESS: {
      removeUserFromStorage();
      return {
        ...state,
        id: '',
        isLoading: false,
      }
    }

    default:
      return state;
  }
}