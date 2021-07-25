<template>
  <div class="mini">
    <span class="bar" :style="{width: `${percentage}%`}"></span>

    <MiniInfo :music="music" :is_playing="is_playing" />

    <MiniControl :url="music.url" :is_playing="is_playing" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MiniInfo from './Info'
import MiniControl from './Control'

export default {
  name: 'MusicMini',

  computed: {
    ...mapState('music', ['music', 'is_playing'])
  },

  data () {
    return {
      percentage: 0
    }
  },

  mounted () {
    this.$bus.$on('handleMiniProcess', percentage => this.percentage = percentage);
  },

  components: {
    MiniInfo,
    MiniControl
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.mini {
  flex-row();
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  padding: 0.5rem 1rem;
  background-color: #fefefe;

  .bar, &::before {
    content: '';
    position: absolute;
    top: 0.1rem;
    left: 0;
    height: 0.2rem;
  }

  &::before {
    width: 100%;
    background-color: #eee;
  }

  .bar {
    width: 50%;
    background-color: $defaultOrange;
  }
}
</style>
