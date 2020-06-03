<template>
  <div class="banner">
    <div class="img-wrap" v-lazy-container="{selector: 'img'}">
      <img
        height="100%"
        :data-src="banner.coverImgUrl"
        alt="Cover"
      />
    </div>
    <div class="cover">
      <van-icon name="like-o" class="icon" />
    </div>
    <p class="desc">{{banner.description}}</p>
  </div>
</template>

<script>
export default {
  name: 'ListBanner',
  props: {
    banner: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.banner {
  position: relative;

  .img-wrap {
    overflow: hidden;

    img {
      max-height: 30rem;
    }
  }

  .cover {
    vh-center();
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.35);

    .icon {
      color: #fff;
      font-size: 22rem;
    }
  }

  .desc {
    ellipsis-m(2);
    position: absolute;
    right: 2rem;
    bottom: 1.5rem;
    left: 2rem;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.7rem;
  }
}
</style>
