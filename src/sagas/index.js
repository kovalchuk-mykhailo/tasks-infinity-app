import { put, takeEvery, all, call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* incrementAsync() {
  try {
    yield call(delay, 1000) // Call (fn, args) === delay(1000)
    // const response = yield call(reqSignin())
    // if (response.body.token) {
    //   yield put({ 
    //   type: 'Success login', 
    //   token: response.body.token
    // }) //success 
    // } else {
    //   throw yield put('Invalid Data on Login Form')
    // }
    yield put({ type: 'INCREMENT' })// === dispatch({ type: 'INCREMENT' })
  } catch (error) {
    yield put('ERROR REQUEST')
  }
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)//Always watch for incrementAsync, when action.type = INCREMENT_ASYNC
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}