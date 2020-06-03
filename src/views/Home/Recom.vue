<template>
  <Scroll class="top-hd bt-5" v-if="!isLoadingShow">
    <RecomBanner :banners="banners" />

    <RecomField />

    <RecomContent :list="list" :newsong="newsong" />
  </Scroll>

  <Loading v-else />
</template>

<script>
import Scroll from 'components/Sub/Scroll'
import RecomBanner from 'components/Home/Recom/Banner';
import RecomField from 'components/Home/Recom/Field'
import RecomContent from 'components/Home/Recom/Content'
import Loading from 'components/Sub/Loading'
import { recomGet } from 'api/recom';

export default {
  name: 'Recom',

  components: {
    Scroll,
    RecomBanner,
    RecomField,
    RecomContent,
    Loading
  },

  data () {
    return {
      banners: [],
      list: [],
      newsong: [],
      isLoadingShow: true
    }
  },

  mounted () {
    this.getDatas();
  },

  methods: {
    async getDatas () {
      this.isLoadingShow = true;

      const [
        {
          data: { banners }
        },
        {
          data: { result: list }
        },
        {
          data: { result: newsong }
        }
      ] = await recomGet();

      this.banners = banners;
      this.list = list;
      this.newsong = newsong;

      this.isLoadingShow = false;
    }
  }
};
</script>
