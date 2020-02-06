const USER_KEY = "userId";

export const getUserIdFromStorage = () => {
  return localStorage.getItem(USER_KEY);
}

export const isUserSigned = (id = getUserIdFromStorage()) => {
  return id !== null && id !== '';
}

export const setUserToStorage = (id) => {
  localStorage.setItem(USER_KEY, id);
}

export const removeUserFromStorage = () => {
  localStorage.removeItem(USER_KEY);
}