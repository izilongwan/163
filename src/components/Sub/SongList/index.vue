<template>
  <div class="list-wrap" :class="[field]">
    <ul class="list" @click="onSongListItemClick">
      <Sub
        v-for="(item, idx) of list"
        :key="idx"
        :item="item"
        :idx="idx"
        :id="music.id"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sub from './Sub';
import tools from 'utils/tools';

export default {
  name: 'SongList',
  components: { Sub },
  props: {
    field: {
      type: String,
      default: ''
    },
    list: Array,
    artist: Object
  },

  computed: {
    ...mapState('music', ['music'])
  },

  methods: {
    onSongListItemClick (e) {
      const { field, artist, list, $bus } = this;
      const { target } = e;
      const { id } = tools.findItem(target).dataset;

      $bus.$emit('handleMusic', {
        id,
        artist,
        type: field,
        playings: field === 'historys' ? '' : list
      });
    }
  }
};
</script>
