export default {
  namespaced: true,

  state: {
    is_playing: false,

    music: {
      id: 0,
      name: '',
      player: '',
      picUrl: '',
      url: '',
      lyric: ''
    },

    artist: {},

    musicList: {
      recents: [],
      historys: [],
      songs: [],
      artists: [],
      playings: []
    }
  },

  mutations: {
    SET_IS_PLAYING(state, payload) {
      state.is_playing = payload;
    },

    SET_MUSIC(state, payload) {
      state.music = payload;
    },

    SET_ARTIST(state, payload) {
      payload && (state.artist = payload);
    },

    SET_MUSIC_LIST(state, { clear = false, recents, historys, artists, songs, playings }) {
      const { musicList } = state;

      if (clear) {
        for(let prop in musicList) {
          musicList[prop] = [];
        }
        return;
      }

      recents && (musicList.recents = recents);
      historys && (musicList.historys = historys);
      artists && (musicList.artists = artists);
      songs && (musicList.songs = songs);
      playings && (musicList.playings = playings);
    }
  },

  actions: {
    SetIsPlaying({ commit }, payload) {
      commit('SET_IS_PLAYING', payload);
    },

    SetMusic({ commit }, payload) {
      commit('SET_MUSIC', payload);
    },

    SetArtist({ commit }, payload) {
      commit('SET_ARTIST', payload);
    },

    SetMusicList({ commit }, payload) {
      commit('SET_MUSIC_LIST', payload);
    }
  }
};
