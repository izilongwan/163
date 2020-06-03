import qs from 'qs';
import request from 'utils/request';
import API from './config';

const getToken = () => localStorage.getItem('163-music-token');

export const musicCollectionGet = () =>
  request({
    url: API.MUSIC_COLLECTION_GET,
    method: 'get',
    headers: { Authorization: getToken() }
  });

export const musicCollectionAdd = (type, data) =>
  request({
    url: `${ API.MUSIC_COLLECTION_ADD }/${ type }`,
    method: 'post',
    headers: { Authorization: getToken() },
    data: qs.stringify(data)
  });

export const musicCollectionRemove = (type, id) =>
  request({
    url: `${ API.MUSIC_COLLECTION_REMOVE }/${ type }/${ id }`,
    method: 'delete',
    headers: { Authorization: getToken() }
  });
