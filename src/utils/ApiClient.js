import { generateUserUrl } from './UrlGenerator'

export const getResponseJson = async (url) => {
  const response = await fetch(url);
  console.log("REAL response: ", response);
  return response.json();
}

export const getUserByEmailPassword = async (params) => {
  const url = generateUserUrl(params);
  return getResponseJson(url);
}