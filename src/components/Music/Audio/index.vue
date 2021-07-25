<template>
  <audio
    id="J_audio"
    ref="oAudio"
    :src="music.url || `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`"
    :autoplay="is_playing"
    @timeupdate="onTimeupdate"
    @ended="onEnded"
  ></audio>
</template>

<script>
import { TOKEN_NAME } from '@/config';
import {
  TOAST_COLLECTION,
  TOAST_REMOVE,
  TOAST_UNCOLLECTION,
  TOAST_SONG_VIP,
  DIALOG_COMFIRM_NO_USER,
  SERVER_ERROR
} from '@/config';
import { songGet, songCheckUrl } from 'api/music';
import { musicPlaylistSubscribe } from 'api/collection';
import { mapState, mapActions } from 'vuex';
import tools from 'utils/tools';

export default {
  name: 'MusicAudio',

  data () {
    return {
      cache: {}
    };
  },

  computed: {
    ...mapState('music', ['music', 'is_playing', 'musicList']),
    ...mapState('user', ['user'])
  },

  mounted () {
    this.busEvent();
  },

  watch: {
    'music.id' () {
      this.setMusicProcess('0');
    }
  },

  methods: {
    ...mapActions('user', ['SetUser']),
    ...mapActions('music', [
      'SetMusic',
      'SetIsPlaying',
      'SetMusicList',
      'SetArtist'
    ]),

    busEvent () {
      const { $bus } = this;

      $bus.$on('handleMusicState', (state) => this.setMusicState(state));
      $bus.$on('handleSetMusicProcess', (percentage) =>
        this.setMusicProcess(percentage)
      );
      $bus.$on('handleMusic', (data) => this.checkCache(data));
      $bus.$on('handleMusicCollectData', (data) => this.setCollectMusic(data));
    },

    onTimeupdate: tools._throttle(function () {
      const { $bus, $refs } = this;

      if (!$refs.oAudio) {
        return;
      }

      const { currentTime, duration } = $refs.oAudio;

      const curTime = tools.formatTime(currentTime);
      const durTime = tools.formatTime(duration);
      const percentage = ((currentTime / duration) * 100).toFixed(2);

      $bus.$emit('handlMusiceBarState', {
        currentTime: curTime,
        percentage,
        duration: durTime
      });
      $bus.$emit('handleMiniProcess', percentage);
      $bus.$emit('handleMusicLyric', curTime.replace(/\s+/g, ''));
    }),

    onEnded () {
      this.$bus.$emit('handleMusicPrevNext', 'next');
    },

    setMusicState (state) {
      const { oAudio } = this.$refs;

      if (oAudio && oAudio.duration) {
        this.SetIsPlaying(state);
        state ? oAudio.play() : oAudio.pause();
      }
    },

    setMusicProcess (percentage) {
      const { oAudio } = this.$refs;
      const { duration } = oAudio;

      duration && (oAudio.currentTime = percentage * duration);
      !percentage && oAudio.play();
    },

    checkCache ({ id, type = 'recents', playings, artist }) {
      const { cache, music } = this;
      const prevId = music.id;

      id = parseInt(id);

      if (prevId === id) {
        return;
      }

      this.type = type;
      this.playings = playings;
      this.artist = artist;

      if (!cache[id]) {
        this.getData(id);
        return;
      }

      this.getCache({ ...cache[id] });
    },

    async getData (id) {
      id = parseInt(id);

      const { $toast } = this;

      const [err, result = {}] = await tools.asyncFunc(
        () => songCheckUrl(id)
      );


      if (err) {
        return;
      }

      if (!result.success) {
        return;
      }

      const [
        {
          data: {
            songs: [songs]
          }
        },
        {
          data: {
            data: [{ url }]
          }
        }
      ] = await songGet(id);

      if (!url) {
        return;
      }

      const music = {
        id,
        url,
        name: songs.name,
        player: songs.ar.map(({ name }) => name).join('、'),
        picUrl: songs.al.picUrl
      };

      this.setCache({ music, id });
    },

    setCache ({ music, id }) {
      this.cache[id] = music;
      this.setData(music);
    },

    setData (music) {
      const { type, playings, artist } = this;

      this.SetMusic(music);
      this.SetIsPlaying(true);
      this.SetMusicList({ playings });
      this.SetArtist(artist);
      // this.setAddData(music, type);
      // type === 'historys' && this.setAddData(music, 'recents');
    },

    getCache (music) {
      this.setData(music);
    },

    async setAddData (music) {
      const { user } = this;

      if (!user) {
        return;
      }

      const { name, id, picUrl, player } = music;
      const obj = { name, id, picUrl, player };

      const [err, result] = await tools.asyncFunc(
        () => musicPlaylistSubscribe(1, id)
      )

      if (err) {
        this.$toast.fail(SERVER_ERROR);
        return;
      }

      const { code, data } = result;

      code === 0 && this.SetMusicList(data);
    },

    isCollected (type, id) {
      const list = this.musicList[type];

      return list.find((val) => val.id == id);
    },

    async setCollectMusic ({ music, type, field = 'one' }) {
      const { user, $dialog, $router, $bus } = this;
      const { id } = music;

      if (!user) {
        $dialog
          .confirm({
            message: DIALOG_COMFIRM_NO_USER
          })
          .then(() => {
            $router.push('/login');
            $bus.$emit('handleMusicDetailState', false);
            $bus.$emit('handlePlayingState', false);
          });
        return;
      }

      const message = type === 'recents' ? TOAST_REMOVE : TOAST_UNCOLLECTION;
      const conf = { message };

      if (id === 0 || this.isCollected(type, id)) {
        const [err, result] = await tools.asyncFunc(
          () => musicPlaylistSubscribe(0, id)
        )

        if (err) {
          this.$toast.fail(SERVER_ERROR);
          return;
        }

        const { code, token } = result;

        code === 0 && this.SetMusicList(data);

        if (id === 0 || type === 'historys') {
          return;
        }
      } else {
        const {
          name,
          id,
          picUrl,
          player,
          coverImgUrl,
          creator,
          description,
          playCount
        } = music;

        const obj =
          type === 'artists'
            ? {
              id,
              name,
              coverImgUrl,
              creator,
              playCount,
              description
            }
            : { id, name, picUrl, player };

        const [err, result] = await tools.asyncFunc(
          () => musicPlaylistSubscribe(1, id)
        )

        if (err) {
          return;
        }

        const { code, data } = result;

        code === 0 && this.SetMusicList(data);
        conf.message = TOAST_COLLECTION;
        conf.icon = 'like-o';
      }

      this.$toast.success(conf);
    },

    clearData () {
      this.SetMusicList({ clear: true });
      this.SetUser(null);
      localStorage.removeItem(TOKEN_NAME);
    }
  }
};
</script>
