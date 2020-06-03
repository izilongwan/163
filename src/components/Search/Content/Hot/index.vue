<template>
  <div class="hot-wrap" v-if="hots.length > 0">
    <HotTitle />

    <div class="list-wrap">
      <HotItem
        v-for="(item, idx) of hots"
        :key="idx"
        :item="item.first"
      />
    </div>
  </div>
</template>

<script>
import HotTitle from './title';
import HotItem from './sub';

export default {
  name: 'SearchHot',
  components: {
    HotTitle,
    HotItem
  },

  props: {
    hots: Array
  }
}
</script>

<style lang="stylus" scoped>
.list-wrap {
  padding: 0 2rem;
}
</style>
