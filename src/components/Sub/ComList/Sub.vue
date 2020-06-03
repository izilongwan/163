<template>
  <li class="item" :data-id="item.id">
    <div
      class="img-wrap br-10"
      v-lazy-container="{ selector: 'img' }"
    >
      <div class="count"></div>
      <img :data-src="item.picUrl || item.coverImgUrl" alt="封面" />
    </div>
    <p class="text">{{item.name}}</p>
  </li>
</template>

<script>

export default {
  name: 'ComListSub',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  width: 33.3%;
  padding: 0 1rem;
  margin-bottom: 2rem;
  box-sizing: border-box;

  .img-wrap {
    position: relative;
    max-height: 10.8rem;
    overflow: hidden;

    .count {
    }
  }

  .text {
    ellipsis-m(2);
    margin-top: 0.6rem;
    font-size: 1.4rem;
    font-weight: bold;
    line-height: 1.8rem;
  }
}
</style>
