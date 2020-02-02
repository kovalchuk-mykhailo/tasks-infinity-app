// import { generateUserUrl } from './UrlGenerator'
import UrlGenerator from './UrlGenerator'

export const getResponseJson = async (url) => {
  const response = await fetch(url);
  console.log("REAL response: ", response);
  return response.json();
}

export const getUserByEmailPassword = async ({ email, password }) => {
  const url = new UrlGenerator()
    .users()
    .withEmail(email)
    .withPassword(password)
    .url;
  console.log("urlGenerator: ", url);
  return getResponseJson(url);
}