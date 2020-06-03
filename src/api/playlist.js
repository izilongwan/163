import request from 'utils/request';
import API from './config';

export const playlistDetailGet = (id) =>
  request({
    url: API.PLAYLIST_DETAIL_GET,
    method: 'get',
    params: { id }
  });
