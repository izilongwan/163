<template>
  <van-search
    v-model="value"
    shape="round"
    show-action
    class="search"
    placeholder="请输入歌名、歌手搜索"
  >
    <div slot="action" @click="onGoBack">返 回</div>
  </van-search>
</template>

<script>
import tools from 'utils/tools'

export default {
  name: 'SearchHeader',

  data () {
    return {
      value: ''
    };
  },

  deactivated () {
    this.setSearchValue();
  },

  watch: {
    value: {
      handler: tools.debounce(function () {
        const { $bus, value } = this;

        $bus.$emit('handleSearchValue', value.trim());
      })
    }
  },

  mounted () {
    this.$bus.$on('handleSetSearchValue', (val = '') =>
      this.setSearchValue(val)
    );
  },

  methods: {
    onGoBack () {
      this.$router.go(-1);
      this.setSearchValue();
    },

    setSearchValue (val = '') {
      this.value = val;
    }
  }
};
</script>

<style lang="stylus" scoped>
.search {
  position: relative;
  z-index: 3;
  padding: 0.6rem 1.2rem;
}
</style>
