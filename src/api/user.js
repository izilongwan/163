import request from 'utils/request';
import API from './config';

export const userRegister = (data) =>
  request({
    url: API.USER_REGISTER,
    method: 'post',
    data
  });

export const userLogin = (data) =>
  request({
    url: API.USER_LOGIN,
    method: 'post',
    data
  });

export const userCaptchaSend = (phone) =>
  request({
    url: API.USER_CAPTCHA_SEND,
    method: 'get',
    params: { phone }
  });

export const userCaptchaVerify = ({ phone, captcha }) =>
  request({
    url: API.USER_CAPTCHA_VERIFY,
    method: 'get',
    params: { phone, captcha }
  });
