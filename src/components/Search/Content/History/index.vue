<template>
  <div
    class="history-wrap"
    v-if="user && musicList.historys.length > 0"
  >
    <HistoryTitle />

    <HistoryList :historys="musicList.historys" :id="music.id" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import HistoryTitle from './Title';
import HistoryList from './List';

export default {
  name: 'SearchHistory',
  components: {
    HistoryTitle,
    HistoryList
  },

  computed: {
    ...mapState('user', ['user']),
    ...mapState('music', ['music', 'musicList'])
  }
};
</script>

<style lang="stylus" scoped>
.history-wrap {
  margin-top: 2rem;

  .list {
    padding: 0 2rem;
  }
}
</style>
