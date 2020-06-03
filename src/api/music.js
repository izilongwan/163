import axios from 'axios';
import request from 'utils/request';
import API from './config';

export const songCheckUrl = (id) =>
  request({
    url: API.SONG_CHECK_URL,
    method: 'get',
    params: { id }
  });

export const songLyricGet = (id) =>
  request({
    url: API.SONG_LYRIC_GET,
    method: 'get',
    params: { id }
  });

export const songUrlGet = (id) =>
  request({
    url: API.SONG_URL_GET,
    method: 'get',
    params: { id }
  });

export const songDetailGet = (ids) =>
  request({
    url: API.SONG_DETAIL_GET,
    method: 'get',
    params: { ids }
  });

export const songGet = (id) =>
  axios.all([songDetailGet(id), songUrlGet(id), songLyricGet(id)]);

export const songMusicComment = ({ id, offset }) =>
  request({
    url: API.SONG_COMMENT_GET,
    method: 'get',
    params: { id, offset }
  });
