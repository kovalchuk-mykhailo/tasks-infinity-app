import { put, takeEvery, all, call } from 'redux-saga/effects'
import { getUserByEmailPassword } from '../utils/ApiClient'
import { loginRequestUser, loginAsyncRequestUser, loginSuccessUser, loginFailureUser } from '../actions/loggedUser'

// const delay = (ms) => new Promise(res => setTimeout(res, ms)).then(res => { console.log("Timeout") })

const fakeUser = {
  "email": "i1@gmail.com",
  "password": "123",
}

const responseOk = (response) => {
  return response.length;
}

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* requestAsync() {
  try {
    yield put(loginRequestUser());
    const response = yield call(getUserByEmailPassword, fakeUser);
    console.log("response: ", response);

    if (responseOk(response)) { // success => login
      const user = response[0];
      console.log("User:", user);
      yield put(loginSuccessUser(user.firstName));
    } else { // invalid Data => send Error message
      throw new Error('Invalid Login Data');
    }
  } catch (error) {
    yield put(loginFailureUser(error.message));
  }
}

function* watchRequestAsync() {
  yield takeEvery(loginAsyncRequestUser().type, requestAsync)//Always watch for requestAsync, when action.type = LOGIN_ASYNC_REQUEST
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchRequestAsync()
  ])
}