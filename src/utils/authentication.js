export const isSigned = (userId) => { // userId: string
  return userId !== '';
  // return localStorage.getItem("authToken") !== '';
}