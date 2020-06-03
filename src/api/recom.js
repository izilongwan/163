import request from 'utils/request';
import API from './config';
import axios from 'axios'

const recomBannerGet = () =>
  request({
    url: API.RECOMM_BANENR_GET,
    method: 'get'
  });

const recomListGet = () =>
  request({
    url: API.RECOMM_LIST_GET,
    method: 'get'
  });

const recomNewsongGet = () =>
  request({
    url: API.RECOMM_NEWSONG_GET,
    method: 'get'
  });

export const recomGet = () =>
  axios.all([recomBannerGet(), recomListGet(), recomNewsongGet()])
