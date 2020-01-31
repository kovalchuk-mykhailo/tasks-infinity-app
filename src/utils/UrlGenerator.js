const requestBaseUrl = "http://localhost:3000/";

export const generateUserUrl = ({ email, password }) => {
  return `${requestBaseUrl}users?email=${email}&password=${password}`;
}