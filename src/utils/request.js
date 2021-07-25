import { NET_REQUEST_ERR, TOKEN_NAME } from '@/config';
import { Toast } from 'vant';
import axios from 'axios'

let t = null;

const service = axios.create({
  timeout: 6 * 1000,
  withCredentials: true
})

service.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    Promise.reject(err);
  }
)

service.interceptors.response.use(
  config => {
    return config;
  },
  err => {
    const { status } = err.response;

    if (status === 401) {
      localStorage.removeItem(TOKEN_NAME);
    }

    let msg = err.response.data.message || NET_REQUEST_ERR;

    t = setTimeout(() => Toast.fail(msg),10);


    Promise.reject(err.response.data);
  }
)

export default service;
