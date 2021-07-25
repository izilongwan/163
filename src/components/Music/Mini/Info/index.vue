<template>
  <div class="info" @click="$bus.$emit('handleMusicDetailState', true)">
    <div :class="['img-wrap', is_playing ? 'is-play' : '']" v-lazy-container="{ selector: 'img' }">
      <img :data-src="music.picUrl || require('images/lazy.png')" alt="图片" />
    </div>

    <span class="name">{{ music.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'MiniInfo',
  props: {
    music: Object,
    is_playing: Boolean,
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.info {
  flex-row();
  width: 65%;

  .img-wrap {
    position: absolute;
    top: -1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    overflow: hidden;
    transition: transform 1s, box-shadow 2s;
    animation: go1 20s linear infinite paused;
    box-shadow: 0 0 1px 1px #eee;

    &.is-play {
      animation-play-state: running;
      -webkit-animation-play-state: running;
    }

  }

  .name {
    ellipsis();
    flex: 1;
    margin-left: 6rem;
    line-height: 4rem;
    font-size: 1.4rem;
    color: #888;
  }
}

@keyframes go1 {
  from {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
