import { fork } from "@redux-saga/core/effects";
import todoSaga from "./todo";

export default function* rootSaga() {
  yield fork(todoSaga);
}
