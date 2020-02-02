import { INPUT_PASSWORD, INPUT_FIRSTNAME, INPUT_LASTNAME, INPUT_EMAIL, CLEAR_INPUTS } from "../constants/Inputs"


const input = (type, value) => {
  return {
    type,
    value
  }
}

export const setPassword = (value) => {
  return input(INPUT_PASSWORD, value);
}

export const setEmail = (value) => {
  return input(INPUT_EMAIL, value);

}

export const setFirstname = (value) => {
  return input(INPUT_FIRSTNAME, value)
}

export const setLastname = (value) => {
  return input(INPUT_LASTNAME, value)
}

export const clearInputs = () => {
  return {
    type: CLEAR_INPUTS,
  }
}