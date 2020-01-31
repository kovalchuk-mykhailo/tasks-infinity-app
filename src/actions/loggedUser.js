import { LOGIN_ON_REQUEST, LOGIN_ON_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGIN_ASYNC_REQUEST, LOGIN_ON_FAILURE } from "../constants/Login"

export const loginAsyncRequestUser = () => {
  return {
    type: LOGIN_ASYNC_REQUEST,
  }
}

export const loginRequestUser = () => {
  return {
    type: LOGIN_ON_REQUEST,
  }
}

export const loginSuccessUser = (id) => {
  return {
    type: LOGIN_ON_SUCCESS,
    id
  }
}

export const loginFailureUser = (error) => {
  return {
    type: LOGIN_ON_FAILURE,
    error
  }
}

export const logoutRequestUser = () => {
  return {
    type: LOGOUT_REQUEST
  }
}

export const logoutSuccessUser = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}