<template>
  <div class="history-wrap">
    <SearchResult />
    <Scroll class="top-hd bg bt-5" v-if="!isLoadingShow">
      <SearchHot :hots="hots" />

      <SearchHistory />
    </Scroll>
    <Loading v-else />
  </div>
</template>

<script>
import tools from 'utils/tools';
import Scroll from 'components/Sub/Scroll'
import Loading from 'components/Sub/Loading'
import SearchHot from './Hot';
import SearchResult from './Result';
import SearchHistory from './History';
import { searchHotGet, searchKeywordsGet } from 'api/search'
import { SERVER_ERROR } from '@/config'

export default {
  name: 'SearchContent',
  components: {
    Scroll,
    SearchHot,
    SearchResult,
    SearchHistory,
    Loading
  },

  data () {
    return {
      hots: [],
      isLoadingShow: true
    };
  },

  mounted () {
    this.getSearchHot();
  },

  methods: {
    async getSearchHot () {
      const [err, result] = await tools.asyncFunc(searchHotGet);

      if (err) {
        this.$toast.fail(SERVER_ERROR);
        return;
      }

      const { result: { hots } } = result;

      this.hots = hots;
      this.isLoadingShow = false;
    }
  }
};
</script>
