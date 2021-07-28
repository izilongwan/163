const USER_API = 'http://39.98.76.151:5001/api/';
const MUSIC_API = 'https://netease-cloud-music-api-rho-ten.vercel.app/';

export default {
  RECOMM_BANENR_GET: MUSIC_API + 'banner?type=1',
  RECOMM_LIST_GET: MUSIC_API + 'personalized',
  RECOMM_NEWSONG_GET: MUSIC_API + 'personalized/newsongs',
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
  USER_LOGIN: MUSIC_API + 'login/cellphone',
  USER_REGISTER: MUSIC_API + 'user/register',
  // MUSIC_RECOMMED_RESOURCE: MUSIC_API + 'recommend/resource', // 私人音乐
  // MUSIC_COLLECTION_GET: MUSIC_API + 'user/subcount',
  // MUSIC_COLLECTION_GET: MUSIC_API + '/user/record?uid=1410403774&type=0',
  MUSIC_COLLECTION_GET: MUSIC_API + 'topic/sublist',
  MUSIC_PLAYLIST_SUBSCRIBE: MUSIC_API + 'playlist/subscribe',
  MUSIC_PLAYLIST_SUBSCRIBERS: MUSIC_API + 'playlist/subscribers',
  MUSIC_COLLECTION_REMOVE: MUSIC_API + 'collection/remove'
}
