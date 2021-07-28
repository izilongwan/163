<template>
  <div class="list-wrap">
    <ul class="list" @click="onMusicHostoryClick">
      <HistoryItem
        v-for="item of historys"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import HistoryItem from './Sub';
import tools from 'utils/tools'

export default {
  name: 'SearchHistory',
  components: { HistoryItem },

  props: {
    historys: Array
  },

  methods: {
    onMusicHostoryClick (e) {
      const { target } = e;
      const { field } = target.dataset;
      const { id } = tools.findItem(target).dataset;
      const { $bus } = this;

      switch (field) {
        case 'history':
          $bus.$emit('handleMusic', { id, type: 'historys' });
          break;
        case 'del':
          $bus.$emit('handleMusicCollectData', { music: { id }, type: 'historys' })
        default:
          break;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-wrap {
  padding: 0 2rem;
}
</style>
