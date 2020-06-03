<template>
  <van-nav-bar
    class="top bd-0 color-555"
    @click-left="$emit('update:show', false)"
  >
    <van-icon class="icon" slot="left" name="arrow-down" />

    <div class="center" slot="title">
      <h2 class="name">{{name ? name : '未选择歌曲'}}</h2>
      <h3 class="player">{{player}}</h3>
    </div>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    show: Boolean,
    name: String,
    player: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.top {
  background-color: transparent;
  color: #444;

  .name {
    ellipsis();
    font-size: 1.6rem;
    line-height: 4rem;
  }

  .player {
    ellipsis();
    margin-top: -0.8rem;
    line-height: 1.6rem;
    color: #777;
    font-size: 1.4rem;
  }
}
</style>
