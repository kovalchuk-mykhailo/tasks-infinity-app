import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_REQUEST, LOGOUT_SUCCESS } from "../constants/Login"

export const loginUser = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccessUser = (id) => {
  return {
    type: LOGIN_SUCCESS,
    id
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