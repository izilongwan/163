import request from 'utils/request';
import API from './config';

export const toplistDetailGet = () =>
  request({
    url: API.TOPLIST_DETAIL_GET,
    method: 'get'
  });
