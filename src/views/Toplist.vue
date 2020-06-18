<template>
  <div class="container">
    <ToplistComHeader title="排行榜" />

    <ToplistContent
      :list="list"
      v-if="!isLoadingShow && list.length"
    />

    <Loading v-else />
  </div>
</template>

<script>
import ToplistComHeader from 'components/Sub/ComHeader';
import ToplistContent from 'components/Toplist/Content';
import Loading from 'components/Sub/Loading';
import { toplistDetailGet } from 'api/toplist';
import { SERVER_ERROR } from '@/config';
import tools from '@/utils/tools';

export default {
  name: 'Toplist',
  components: {
    ToplistComHeader,
    ToplistContent,
    Loading
  },

  data () {
    return {
      list: [],
      isLoadingShow: true
    };
  },

  mounted () {
    this.getData();
  },

  methods: {
    async getData () {
      this.isLoadingShow = true;

      const [err, result] = await tools.asyncFunc(
        toplistDetailGet
      );

      if (err) {
        this.$toast.fail(SERVER_ERROR);
        return;
      }

      const { code, list } = result;

      if (code === 200) {
        this.list = list;
        this.isLoadingShow = false;
      }
    }
  }
}
</script>
