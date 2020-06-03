<template>
  <div class="control" @click="onControlClick">
    <van-icon
      v-show="!is_playing"
      class="icon"
      name="play-circle-o"
      data-field="play"
    />

    <van-icon
      v-show="is_playing"
      class="icon"
      name="pause-circle-o"
      data-field="pause"
    />

    <van-icon
      class-prefix="ml icon iconfont icon-list2"
      data-field="list"
      name="extra"
    />
  </div>
</template>

<script>
export default {
  name: 'MiniControl',
  props: {
    is_playing: Boolean,
    url: String
  },

  methods: {
    onControlClick (e) {
      const { url, $bus } = this;

      if (!url) {
        return;
      }

      const { target } = e;
      const { field } = target.dataset;

      switch (field) {
        case 'play':
        case 'pause':
          $bus.$emit(
            'handleMusicState',
            field === 'play' ? true : false
          );
          break;
        case 'list':
          $bus.$emit('handlePlayingState', true);
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.control {
  flex-row();

  .icon {
    vh-center();
    width: 4rem;
    font-size: 3.3rem;
    color: #666;

    &.ml {
      margin-left: 1rem;
    }
  }
}
</style>
