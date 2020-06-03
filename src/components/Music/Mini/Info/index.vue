<template>
  <div class="info" @click="$bus.$emit('handleMusicDetailState', true)">
    <div class="img-wrap" v-lazy-container="{ selector: 'img' }">
      <img :data-src="music.picUrl || require('images/lazy.png')" alt="图片" />
    </div>

    <span class="name">{{ music.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'MiniInfo',
  props: {
    music: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.info {
  flex-row();
  width: 65%;

  .img-wrap {
    width: 4rem;
    height: 4rem;
  }

  .name {
    ellipsis();
    flex: 1;
    margin-left: 1rem;
    line-height: 4rem;
    font-size: 1.4rem;
    color: #888;
  }
}
</style>
