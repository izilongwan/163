<template>
  <router-link :to="`/list/play/${item.id}`" class="item">
    <div
      class="img-wrap br-10"
      v-lazy-container="{ selector: 'img' }"
    >
      <img :data-src="item.coverImgUrl" :alt="item.name" />
    </div>
    <div class="info">
      <div
        class="cell"
        v-for="(item, key) of item.tracks"
        :key="key"
      >
        <span class="num">{{ key + 1 }}.</span>
        <p class="song">{{ item.first }} - {{ item.second }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'InfoListSub',
  props: {
    item: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  padding: 1rem;
  flex-row();

  & + .item {
    border-top: 1px solid #ddd;
  }

  .img-wrap {
    width: 10rem;
  }

  .info {
    flex: 1;
    padding: 0.5rem 2rem 0.5rem 0;
    margin-left: 1.5rem;
    overflow: hidden;

    .cell {
      flex-row();
      font-size: 1.4rem;
      line-height: 3rem;

      .song {
        margin-left: 0.5rem;
        ellipsis();
      }
    }
  }
}
</style>
