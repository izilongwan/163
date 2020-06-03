<template>
  <div class="list-wrap">
    <ul class="list" @click="onListItemClick">
      <Sub v-for="(item, idx) of list" :key="idx" :item="item" />
    </ul>
  </div>
</template>

<script>
import tools from 'utils/tools';
import Sub from './Sub';

export default {
  name: 'ComList',
  props: {
    list: Array,
    type: String
  },

  components: { Sub },

  methods: {
    onListItemClick (e) {
      const { target } = e;
      const item = tools.findItem(target);
      const id = item.dataset.id;
      const { type, $router, $bus } = this;

      type === 'play'
        ? $router.push({ name: 'list', params: { type, id } })
        : $bus.$emit('handleMusic', { id });
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-wrap {
  .list {
    display: flex;
    white-space: wrap;
    flex-wrap: wrap;
    margin: 0 0.5rem;
  }
}
</style>
