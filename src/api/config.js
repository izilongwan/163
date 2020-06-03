const USER_API = 'http://39.98.76.151:5001/api/';
const MUSIC_API = 'http://39.98.76.151:5002/';

export default {
  RECOMM_BANENR_GET: MUSIC_API + 'banner?type=1',
  RECOMM_LIST_GET: MUSIC_API + 'personalized',
  RECOMM_NEWSONG_GET: MUSIC_API + 'personalized/newsong',
  TOPLIST_GET: MUSIC_API + 'toplist',
  TOPLIST_DETAIL_GET: MUSIC_API + 'toplist/detail',
  ARTISTS_LIST_GET: MUSIC_API + 'top/artists',
  ARTISTS_DETAIL_GET: MUSIC_API + 'artists',
  SONG_DETAIL_GET: MUSIC_API + 'song/detail',
  SONG_LYRIC_GET: MUSIC_API + 'lyric',
  SONG_URL_GET: MUSIC_API + 'song/url',
  SONG_CHECK_URL: MUSIC_API + 'check/music',
  SONG_COMMENT_GET: MUSIC_API + 'comment/music',
  PLAYLIST_DETAIL_GET: MUSIC_API + 'playlist/detail',
  SEARCH_HOT_GET: MUSIC_API + 'search/hot',
  SEARCH_KEYWORDS: MUSIC_API + 'search',
  USER_CAPTCHA_SEND: MUSIC_API + 'captcha/sent',
  USER_CAPTCHA_VERIFY: MUSIC_API + 'captcha/verify',
  USER_LOGIN: USER_API + 'user/login',
  USER_REGISTER: USER_API + 'user/register',
  MUSIC_COLLECTION_GET: USER_API + 'collection/get',
  MUSIC_COLLECTION_ADD: USER_API + 'collection/add',
  MUSIC_COLLECTION_REMOVE: USER_API + 'collection/remove'
}
