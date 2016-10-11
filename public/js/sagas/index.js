import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

function someTest() {
  return fetch('/investigators')
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log("Fetch error!", error);
    });
}

function* fetchInvestigators(action) {
  try {
    const investigators = yield call(someTest, action.entity);
    yield put({type: "FETCHED_INVESTIGATORS", investigators});
  } catch (e) {
    yield put({type: "FETCH_FAILED", message: e.message});
  }
}

function* sagas() {
  yield* takeEvery("CLICKED_ENTITY", fetchInvestigators);
}

export default sagas;
