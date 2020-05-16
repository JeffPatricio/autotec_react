import axios from 'axios';

const serviceApi = axios.create({
  baseURL: 'https://autotec.herokuapp.com'
});

export const getApi = (endpoint, authorization = null) => {
  return new Promise((resolve) => {
    const headers = {};
    if (authorization) headers['Authorization'] = `Bearer ${authorization}`;
    serviceApi.get(endpoint, { headers }).then(response => {
      console.log('\x1b[36m GET API RESPONSE => ', response.data);
      resolve(response.data);
    }).catch(error => {
      console.log('\x1B[31m GET API ERROR =>', error.toString());
      resolve({ exception: true, log: error.toString() });
    });
  })
}

export const postApi = (endpoint, data, authorization = null) => {
  return new Promise((resolve) => {
    const headers = {};
    if (authorization) headers['Authorization'] = `Bearer ${authorization}`;
    serviceApi.post(endpoint, data, { headers }).then(response => {
      console.log('\x1b[36m POST API SENT => ', data);
      console.log('\x1b[35m POST API RESPONSE =>', response.data);
      resolve(response.data);
    }).catch(error => {
      console.log('\x1B[31m POST API ERROR =>', error.toString());
      resolve({ exception: true, log: error.toString() });
    });
  })
}