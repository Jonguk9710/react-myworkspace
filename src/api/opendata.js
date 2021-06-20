import axios from "axios";

const openDataApi = {
  fetchCovidDaily: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/covid/daily`),
};

export default openDataApi;
