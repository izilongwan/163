import qs from 'qs';
import request from 'utils/request';
import API from './config';

const getToken = () => localStorage.getItem('163-music-token');

export const musicCollectionGet = () =>
  request({
    url: API.MUSIC_COLLECTION_GET,
    method: 'get',
    // headers: { Authorization: getToken() }
  });

export const musicPlaylistSubscribe = (t, id) =>
  request({
    url: `${ API.MUSIC_PLAYLIST_SUBSCRIBE }?t=${t}&id=${id}`,
    method: 'post',
    // headers: { Authorization: getToken() },
    // data: qs.stringify(data)
  });
