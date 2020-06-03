<template>
  <div class="title">
    <h2>历史搜索</h2>

    <van-icon
      name="delete"
      class="icon del"
      @click="$bus.$emit('handleMusicCollectData', {music: {id: 0}, type: 'historys'})"
    />
  </div>
</template>

<script>
export default {
  name: 'HotTitle'
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  flex-row();
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  padding: 0 2rem;
  font-size: 1.4rem;

  h2 {
    height: 100%;
    color: #999;
    line-height: 3.5rem;
  }

  .icon {
    color: #999;
  }
}
</style>
