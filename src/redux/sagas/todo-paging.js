import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

import api from "../../api/todo";

function* addTodo(action) {
  try {
    const result = yield call(api.add, action.payload);
    console.log(result);

    const { size } = yield select((state) => state.todo);
    const resultFetched = yield call(api.fetchPaging, 0, size);
    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* fetchTodoListPaging(action) {
  console.log("--sagas: fetch Todolist --");
  console.log(action);
  try {
    const { page, size } = yield select((state) => state.todo);
    const result = yield call(
      api.fetchPaging,
      action.paylodad ? action.payload.page : page,
      action.paylodad ? action.payload.size : size
    );
    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* removeTodo(action) {
  try {
    const result = yield call(api.remove, action.payload);
    console.log(result);
    const { page, size } = yield select((state) => state.todo);
    const resultFetched = yield call(api.fetchPaging, page, size);
    yield put({
      type: "FETCH_TODOLIST_PAGING_SUCCEEDED",
      payload: resultFetched.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* modifyTodo(action) {
  console.log("--sagas: modify Todo --");
  console.log(action);

  try {
    const result = yield call(api.modify, action.payload);
    console.log(result);
    yield put({
      type: "MODIFY_TODO_SUCCEEDED",
      payload: result.data,
    });
  } catch (e) {
    alert(e.message);
  }
}

function* todoSaga() {
  yield takeEvery("ADD_TODO", addTodo);
  yield takeEvery("REMOVE_TODO", removeTodo);
  yield takeEvery("MODIFY_TODO", modifyTodo);
  yield takeLatest("FETCH_TODOLIST_PAGING", fetchTodoListPaging);
}

export default todoSaga;