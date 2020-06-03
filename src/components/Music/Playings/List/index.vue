<template>
  <div class="top-hd pos-abs list-wrap" v-if="list.length > 0">
    <ul class="list" @click="onSongListItemClick">
      <Sub
        v-for="(item, idx) of list"
        :item="item"
        :key="idx"
        :id="id"
      />
    </ul>
  </div>
</template>

<script>
import Sub from './Sub';
import tools from 'utils/tools';

export default {
  name: 'PlayingList',
  props: {
    list: Array,
    id: Number
  },

  components: { Sub },

  methods: {
    onSongListItemClick (e) {
      const { list, $bus } = this;
      const { target } = e;
      const { id } = tools.findItem(target).dataset;

      $bus.$emit('handleMusic', {
        id,
        playings: list,
        type: 'recents',
        artist: {}
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-wrap {
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
