<template>
  <router-link
    tag="li"
    :to="`list/singer/${item.id}`"
    class="item bd-t"
  >
    <div
      class="img-wrap"
      v-lazy-container="{ selector: 'img' }"
    >
      <img height="100%" :data-src="item.picUrl" alt="图片" />
    </div>
    <p class="name">{{item.name}}</p>
  </router-link>
</template>

<script>
export default {
  name: 'SingerItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items: center;
  padding: 1rem 2rem;

  .img-wrap {
    width: 4rem;
    height: 4rem;
  }

  .name {
    margin-left: 1rem;
    font-size: 1.4rem;
  }
}
</style>
