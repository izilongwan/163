<template>
  <ul class="list">
    <Sub
      :musicList="musicList"
      v-for="(item, idx) of list"
      :key="idx"
      :item="item"
    />
  </ul>
</template>

<script>
import Sub from './Sub';
import { mapState } from 'vuex'

export default {
  name: 'MineContent',
  components: { Sub },

  data () {
    return {
      list: [
        { type: 'recents', text: '最近 の 歌曲', path: 'collection/recents' },
        { type: 'songs', text: '收藏 の 歌曲', path: 'collection/songs' },
        { type: 'artists', text: '收藏 の 歌单', path: 'collection/artists' }
      ]
    };
  },

  computed: {
    ...mapState('music', ['musicList'])
  }
};
</script>

<style></style>
