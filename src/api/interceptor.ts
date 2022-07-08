import axios from 'axios';
import { camelizeKeys } from 'humps';

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  response = { ...response, data: camelizeKeys(response.data) };
  return response;
});
