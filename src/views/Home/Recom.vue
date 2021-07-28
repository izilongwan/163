<template>
  <Scroll class="top-hd bt-5" v-if="!isLoadingShow">
    <RecomBanner :banners="banners" />

    <RecomField />

    <RecomContent :list="list" :newsong="newsong" />
  </Scroll>

  <Skeleton v-else />
</template>

<script>
import Scroll from 'components/Sub/Scroll'
import Skeleton from 'components/Skeleton/SkeletonHome'
import RecomBanner from 'components/Home/Recom/Banner';
import RecomField from 'components/Home/Recom/Field'
import RecomContent from 'components/Home/Recom/Content'
import { recomGet } from 'api/recom';

export default {
  name: 'Recom',

  components: {
    Scroll,
    RecomBanner,
    RecomField,
    RecomContent,
    Skeleton
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

      const ret = await recomGet();

      if (!ret) {
        return;
      }

      const [
        [err1, data1],
        [err2, data2],
        [err3, data3],
      ] = ret;

      if (!err1 && data1) {
        const { banners } = data1;
        this.banners = banners;
      }

      if (!err2 && data2) {
        const { result: list } = data2;
        this.list = list;
      }

      if (!err3 && data3) {
        const { result: newsong } = data3;
        this.newsong = newsong;
      }

      this.isLoadingShow = false;
    }
  }
};
</script>
