import { call, put, takeEvery } from "redux-saga/effects";

import api from "../../api/covid";

function* addCovid(action) {
  const result = yield call(api.add, action.payload);
  yield put({
    type: "ADD_COVID_SUCCEEDED",
    payload: { id: result.data.id, ...action.payload },
  });
}

function* fetchCovidList(action) {
  try {
    const result = yield call(api.fetch);
    yield put({
      type: "FETCH_COVIDLIST_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeCovid(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    yield put({
      type: "REMOVE_COVID_SUCCEEDED",
      payload: action.payload,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyCovid(action) {
  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_COVID_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* covidSaga() {
  yield takeEvery("ADD_COVID", addCovid);
  yield takeEvery("REMOVE_COVID", removeCovid);
  yield takeEvery("MODIFY_COVID", modifyCovid);
  yield takeEvery("FETCH_COVIDLIST", fetchCovidList);
}

export default covidSaga;
