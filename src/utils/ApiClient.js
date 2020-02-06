// import { generateUserUrl } from './UrlGenerator'
import UrlGenerator from './UrlGenerator'

const headersJson = {
  "Content-type": "application/json; charset=UTF-8"
}

const getResponseJson = async url => {
  const response = await fetch(url);
  console.log("REAL response: ", response);
  return response.json();
}

const postResponseJson = async (url, params) => {
  const response = await fetch(url, params);
  console.log("REAL response: ", response);
  return response.json();
}

const createPostParamsRequest = body => ({
  method: 'POST',
  body: JSON.stringify(body),
  headers: headersJson
});

export const getUserByEmailPassword = async ({ email, password }) => {
  const url = new UrlGenerator()
    .users()
    .withEmail(email)
    .withPassword(password)
    .url;

  console.log("urlGenerator: ", url);
  return getResponseJson(url);
}

export const getTasksByUserId = async userId => {
  const url = new UrlGenerator()
    .tasks()
    .withUserId(userId)
    .url;

  console.log("urlGenerator: ", url);
  return getResponseJson(url);
}

export const addNewTaskRequest = async task => {
  const url = new UrlGenerator()
    .tasks()
    .url;
  const params = createPostParamsRequest(task);

  console.log("urlGenerator: ", url);
  console.log("Post params: ", params);

  return postResponseJson(url, params);
}