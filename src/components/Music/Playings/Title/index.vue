<template>
  <div class="title">
    <div class="cell">
      <van-icon name="fire-o" color="#f00" />
      <span class="tip">播放列表</span>
      <sub class="count">(共{{ count }}首)</sub>
    </div>

    <div
      v-show="count && artist.id"
      class="cell"
      :class="{ collect: isCollected }"
      @click="$bus.$emit('handleMusicCollectData', {music: artist, type: 'artists'})"
    >
      <van-icon
        class="icon"
        :name="isCollected ? 'like-o' : 'plus'"
      />
      <span class="text">{{ isCollected ? '已收藏' : '收藏歌单' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playings',
  props: {
    count: Number,
    artist: Object,
    isCollected: Boolean
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  flex-row();
  position: relative;
  z-index: 3;
  background-color: #fff;
  line-height: 4rem;
  font-size: 1.6rem;
  border-bottom: 0.1rem solid #e0e0e0;

  .cell {
    vh-center();
    width: 50%;
    transition: background-colcor 0.5s, color 0.5s;

    .tip {
      margin-left: 0.3rem;
    }

    .count {
      margin-left: 1rem;
      color: #999;
    }

    .icon {
      font-size: 1.8rem;
      color: #999;
      margin-right: 1rem;
    }

    &.collect {
      background-color: #f00;
      color: #fff;
      font-weight: bold;

      .icon {
        color: #fff;
        font-weight: bold;
      }
    }
  }
}
</style>
