<template>
  <div class="mid" @click="lyricShow = !lyricShow">
    <transition-group name="fade" mode="out-in" appear>
      <Pic v-show="!lyricShow" :picUrl="music.picUrl" key="pic" />

      <Lyric
        key="lyric"
        v-show="lyricShow"
        :lyric="lyric"
        :is-loading-show="isLoadingShow"
      />
    </transition-group>
  </div>
</template>

<script>
import Pic from './Pic'
import Lyric from './Lyric'
import { songLyricGet } from 'api/music'
import tools from 'utils/tools'

export default {
  name: 'DetailMid',
  components: {
    Pic,
    Lyric
  },

  props: {
    music: Object,
    show: Boolean,
  },

  data () {
    return {
      lyricShow: false,
      prevId: 0,
      lyric: '',
      isLoadingShow: false,
      cache: {}
    }
  },

  methods: {
    async getLyric(id) {
      this.isLoadingShow = true;

      if (id && id !== this.prevId) {
        const [err, ret] = await songLyricGet(id);

        this.isLoadingShow = false;

        if (err) {
          return;
        }

        const { nolyric, lrc = {} } = ret;

        this.prevId = id;

        if (!nolyric) {
          const data = tools.formatLyric(lrc.lyric);
          this.lyric = data;
          this.setCache(id, data);
        }
        else {
          this.lyric = '';
        }
      }

      this.isLoadingShow = false;
    },

    handleMusicLyric () {

      if (this.lyricShow && this.show) {
        const id = this.music.id;

        const data = this.getCache(id);

        data
          ? this.lyric = data
          : this.getLyric(id);
        return;
      }

      this.lyric =  '';
    },

    setCache(id, data) {
      if (!this.cache[id]) {
        this.cache[id] = data;
      }
    },

    getCache(id) {
      if (this.cache[id]) {
        return this.cache[id];
      }
    }
  },

  watch: {
    show: 'handleMusicLyric',
    lyricShow: 'handleMusicLyric',
    'music.id': 'handleMusicLyric'
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.mid {
  display: flex;
  vh-center();
  position: relative;
  flex: 1;
  overflow: hidden;

  >>> span {
    vh-center();
    width: 85%;
  }
}
</style>
