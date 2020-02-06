import { put, takeEvery, all, call, select } from 'redux-saga/effects'
import { getUserByEmailPassword, getTasksByUserId, addNewTaskRequest } from '../utils/ApiClient'
import { getUserIdFromStorage } from '../utils/authentication'
import { loginRequestUser, loginAsyncRequestUser, loginSuccessUser, loginFailureUser } from '../actions/loggedUser'
import { loadTasks, setLoadedTasks, addTaskSuccess, addTaskRequest } from '../actions/todo'

// const delay = (ms) => new Promise(res => setTimeout(res, ms)).then(res => { console.log("Timeout") })

// const fakeUser = {
//   "email": "i1@gmail.com",
//   "password": "123",
// }

const responseOk = (response) => {
  if (typeof response === 'object')
    return Object.keys(response).length;
  else
    return false
}

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* requestSignInAsync() {
  try {
    const getInputs = (state) => state.inputs;
    const inputs = yield select(getInputs);
    console.log("INPUTS (USER): ", inputs);

    yield put(loginRequestUser());
    const response = yield call(getUserByEmailPassword, inputs);
    console.log("response: ", response);

    if (responseOk(response)) { // success => login
      const user = response[0];
      console.log("User(response):", user);
      yield put(loginSuccessUser(user.id));// Will MUST BE token / userId
    } else { // invalid Data => send Error message
      throw new Error('Invalid Login Data');
    }
  } catch (error) {
    yield put(loginFailureUser(error.message));
  }
}

function* watchSignInAsync() {
  yield takeEvery(loginAsyncRequestUser().type, requestSignInAsync)//Always watch for requestSignInAsync, when action.type = LOGIN_ASYNC_REQUEST
}

function* requestAddTask() {
  try {
    const getTask = state => state.currentTask;
    const task = yield select(getTask);
    console.log("Task from store: ", task);

    const response = yield call(addNewTaskRequest, task);
    console.log("Post response: ", response)

    if (responseOk(response)) {
      const responseTask = response;
      yield put(addTaskSuccess(responseTask));
    } else {
      throw new Error("Post Request Error");
    }
  } catch (error) {
    console.log(error.message);
  }

}

function* watchAddTaskAsync() {
  yield takeEvery(addTaskRequest().type, requestAddTask)
}

function* requestTodo() {
  try {
    const userId = getUserIdFromStorage();
    const response = yield call(getTasksByUserId, userId);
    console.log(response);

    if (responseOk(response)) {
      yield put(setLoadedTasks(response));// Will MUST BE token / userId
    } else {
      throw new Error('Invalid Request Data or Data is empty')
    }
  } catch (error) {
    console.log('requestTodoAsync', error.message);
  }
}

function* watchTodoAsync() {
  yield takeEvery(loadTasks().type, requestTodo)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchSignInAsync(),
    watchTodoAsync(),
    watchAddTaskAsync(),
  ])
}