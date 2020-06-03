import request from 'utils/request';
import API from './config';

export const searchHotGet = () =>
  request({
    url: API.SEARCH_HOT_GET,
    method: 'get'
  });

export const searchKeywordsGet = (keywords) =>
  request({
    url: API.SEARCH_KEYWORDS,
    method: 'get',
    params: { keywords }
  });
