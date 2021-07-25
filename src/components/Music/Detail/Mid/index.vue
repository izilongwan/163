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
    music: Object
  },

  data () {
    return {
      lyricShow: false,
      prevId: 0,
      lyric: '',
      isLoadingShow: false,
    }
  },

  methods: {
    async handleMusicLyric () {

      if (this.lyricShow) {
        const id = this.music.id;

        this.isLoadingShow = true;

        if (id && id !== this.prevId) {
          const [err, ret] = await tools.asyncFunc(
            () => songLyricGet(id)
          );

          this.isLoadingShow = false;

          if (err) {
            return;
          }

          const { nolyric, lrc = {} } = ret;

          this.prevId = id;
          this.lyric = nolyric ? '' : tools.formatLyric(lrc.lyric);
        }
        return;
      }

      this.lyric =  '';
    }
  },

  watch: {
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
