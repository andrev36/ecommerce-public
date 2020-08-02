import axios from 'axios';
export function makeUserRequest(method, data, api) {
 // returns a Promise
 return axios({
  method: method,
  url: api,
  data: data
 });
}
