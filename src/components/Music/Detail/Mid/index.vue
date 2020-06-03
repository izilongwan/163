<template>
  <div class="mid" @click="lyricShow = !lyricShow">
    <transition-group name="fade" mode="out-in" appear>
      <Pic v-show="!lyricShow" :picUrl="music.picUrl" key="pic" />

      <Lyric
        key="lyric"
        v-show="lyricShow"
        :lyric="music.lyric"
      />
    </transition-group>
  </div>
</template>

<script>
import Pic from './Pic'
import Lyric from './Lyric'

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
      lyricShow: true
    }
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
