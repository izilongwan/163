<template>
  <div class="list-wrap" :class="[field]">
    <ul class="list" @click="onSongListItemClick">
      <Sub
        v-for="(item, idx) of songs"
        :key="idx"
        :item="item"
        :idx="idx"
        :id="music.id"
        :curIdx.sync="curIdx"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import tools from 'utils/tools';
import { NOTIFY_REMOVE } from '@/config'
import Sub from './Sub'

export default {
  name: 'CollectionSong',
  props: {
    songs: Array,
    field: String
  },

  computed: {
    ...mapState('music', ['music'])
  },

  data () {
    return {
      curIdx: -1
    }
  },

  mounted () {
    this.$Notify({
      message: NOTIFY_REMOVE,
      background: '#bbb'
    })
  },

  activated () {
    this.curIdx = -1;
  },

  components: { Sub },

  methods: {
    onSongListItemClick (e) {
      const { list, songs, $bus } = this;
      const { target } = e;
      const { id } = tools.findItem(target).dataset;

      $bus.$emit('handleMusic', {
        id,
        type: 'recents',
        playings: songs,
        artist: {}
      });
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-wrap {
  margin: 0 2rem;
  overflow: hidden;
}
</style>
