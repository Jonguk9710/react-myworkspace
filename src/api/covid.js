import axios from "axios";

const covidApi = {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/covid`, data),
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/covid`),
  fetchPaging: (page, size) =>
    axios.get(
      `${process.env.REACT_APP_API_BASE}/covid/paging?page=${page}&size=${size}`
    ),
  remove: (id) => axios.delete(`${process.env.REACT_APP_API_BASE}/covid/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/covid/${data.id}`, data),
};

export default covidApi;
