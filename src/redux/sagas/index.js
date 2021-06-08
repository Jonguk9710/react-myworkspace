import { fork } from "@redux-saga/core/effects";
import todoSaga from "./todo";
import contactSaga from "./contact";

export default function* rootSaga() {
  yield fork(todoSaga);
  yield fork(contactSaga);
}
