<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item
        v-for="(item, index) in banners"
        :key="index"
        v-lazy-container="{ selector: 'img' }"
      >
        <img :data-src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'RecomBanner',
  props: {
    banners: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.banner {
  margin: 0 1rem;
  background-color: $defaultBg;

  >>> img {
    max-height: 14rem;
  }

  >>> .van-swipe__indicator--active {
    background-color: $defaultBg;
  }
}
</style>
