<template>
  <van-popup
    v-model="show"
    position="bottom"
    :style="{ width: '100%', height: '100%', overflow: 'hidden' }"
  >
    <div class="detail">
      <Top
        :name="music.name"
        :player="music.player"
        :show.sync="show"
      />

      <Mid :music="music" />

      <Bottom />
    </div>
  </van-popup>
</template>

<script>
import Background from './Background';
import Top from './Top';
import Mid from './Mid';
import Bottom from './Bottom';
import { mapState } from 'vuex';
import tools from 'utils/tools';

export default {
  name: 'MusicDetail',
  components: {
    Background,
    Top,
    Mid,
    Bottom
  },

  data () {
    return {
      show: false
    };
  },

  mounted () {
    this.$bus.$on('handleMusicDetailState', (show) => (this.show = show));
  },

  computed: {
    ...mapState('music', ['music'])
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.detail {
  flex-column();
  height: 100%;
  background-color: #a9a9a9;
  overflow: hidden;
}
</style>
