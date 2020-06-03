<template>
  <div class="bar-wrap">
    <div class="bar" @click="onProcessClick">
      <span
        class="process"
        :style="{ width: `${percentage}%` }"
      ></span>
    </div>

    <div class="time-wrap">
      <span class="time">{{currentTime}}</span>
      <span class="time">{{duration}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'BottomBar',

  props: {
    id: Number
  },

  data () {
    return {
      percentage: 0,
      currentTime: '00.00',
      duration: '00.00'
    }
  },

  computed: {
    ...mapState('music', ['music'])
  },

  mounted () {
    this.$bus.$on('handlMusiceBarState', (data) => this.setProcess(data));
  },

  methods: {
    onProcessClick (e) {
      if (!this.music.url) {
        return;
      }

      const { offsetX, target } = e;
      const percentage = (offsetX / target.offsetWidth).toFixed(1);

      this.$bus.$emit('handleSetMusicProcess', percentage);
    },

    setProcess ({ currentTime = '00.00', duration = '00.00', percentage = 0 }) {
      currentTime && (this.currentTime = currentTime);
      parseInt(duration) && (this.duration = duration);
      percentage && (this.percentage = percentage);
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.bar-wrap {
  margin: 1rem 0;

  .bar {
    position: relative;
    background-color: #d6d6d6;
    height: 0.25rem;

    .process {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #666;

      &::before, &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        border-radius: 50%;
      }

      &::before {
        width: 0.7rem;
        height: 0.7rem;
        background-color: #555;
        transform: translate(0, -50%);
      }

      &::after {
        width: 1.5rem;
        height: 1.5rem;
        transform: translate(25%, -50%);
        background-color: rgba(0, 0, 0, 0.2);
      }
    }
  }

  .time-wrap {
    flex-row();
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 1.4rem;
    color: #777;
  }
}
</style>
