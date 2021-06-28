import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/covid";

function* addCovid(action) {
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    const { size } = yield select((state) => state.covid);
    const resultFetched = yield call(api.fetchPaging, 0, size);
    console.log(resultFetched);

    yield put({
      type: "FETCH_COVIDLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchCovidListPaging(action) {
  try {
    const { page, size } = yield select((state) => state.covid);

    const result = yield call(
      api.fetchPaging,
      action.payload ? action.payload.page : page,
      action.payload ? action.payload.size : size
    );
    console.log(result);
    yield put({
      type: "FETCH_COVIDLIST_PAGING_SUCCEEDED",
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

    const { page, size } = yield select((state) => state.covid);
    const resultFetched = yield call(api.fetchPaging, page, size);
    console.log(resultFetched);

    yield put({
      type: "FETCH_COVIDLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
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
  yield takeLatest("FETCH_COVIDLIST_PAGING", fetchCovidListPaging);
}

export default covidSaga;
