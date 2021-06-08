import axios from "axios";

const todoApi = {
  // todoApi.add(data) -> POST http://....:8080/todos {"memo":"redux-saga 공부하기"}
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/todos`, data),
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/todos`),
};

export default todoApi;
