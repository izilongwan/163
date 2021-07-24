import { NET_REQUEST_ERR, TOKEN_NAME } from '@/config';
import { Toast } from 'vant';
import axios from 'axios'

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

    Toast.fail(NET_REQUEST_ERR);
    Promise.reject(err);
  }
)

export default service;
