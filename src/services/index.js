import axios from 'axios';

const serviceApi = axios.create({
  baseURL: ''
});

export const getApi = (endpoint) => {
  return new Promise((resolve) => {
    serviceApi.get(endpoint).then(response => {
      console.log('\x1b[36m GET API RESPONSE => ', response.data);
      resolve(response.data);
    }).catch(error => {
      console.log('\x1B[31m GET API ERROR =>', error.toString());
      resolve({ exception: true, log: error.toString() });
    });
  })
}

export const postApi = (endpoint, data) => {
  return new Promise((resolve) => {
    serviceApi.post(endpoint, data).then(response => {
      console.log('\x1b[36m POST API SENT => ', data);
      console.log('\x1b[35m POST API RESPONSE =>', response.data);
      resolve(response.data);
    }).catch(error => {
      console.log('\x1B[31m POST API ERROR =>', error.toString());
      resolve({ exception: true, log: error.toString() });
    });
  })
}