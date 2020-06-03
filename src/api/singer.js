import request from 'utils/request';
import API from './config';

export const singerListGet = () =>
  request({
    url: API.ARTISTS_LIST_GET,
    method: 'get'
  });

export const singerListDetailGet = (id) =>
  request({
    url: API.ARTISTS_DETAIL_GET,
    method: 'get',
    params: { id }
  });
