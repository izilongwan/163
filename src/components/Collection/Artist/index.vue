<template>
  <div class="list-wrap">
    <ul class="list">
      <Sub
        v-for="(item, idx) of artists"
        :key="idx"
        :item="item"
        :idx="idx"
        :curIdx.sync="curIdx"
      />
    </ul>
  </div>
</template>

<script>
import { NOTIFY_REMOVE } from '@/config'
import Sub from './Sub';

export default {
  name: 'ArtistList',
  props: {
    artists: Array
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

  components: { Sub }
};
</script>

<style lang="stylus" scoped>
.scroll-wrap {
  position: absolute;
  top: 4.6rem;
  left: 0;
  right: 0;
  bottom: 7rem;

  .list-wrap {
    margin: 0.5rem 1.5rem;
    overflow: hidden;
  }
}
</style>
