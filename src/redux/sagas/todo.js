import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/todo";

function* addTodo(action) {
  const result = yield call(api.add, action.payload);
  yield put({
    type: "ADD_TODO_SUCCEEDED",
    payload: { id: result.data.id, ...action.payload },
  });
}

function* fetchTodoList(action) {
  try {
    const result = yield call(api.fetch);
    yield put({
      type: "FETCH_TODOLIST_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* todoSaga() {
  yield takeEvery("ADD_TODO", addTodo);
  yield takeLatest("FETCH_TODOLIST", fetchTodoList);
}

export default todoSaga;
