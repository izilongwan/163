<template>
  <div class="pos-abs top-hd bt-5" ref="wrap">
    <van-index-bar
      class="list"
      :index-list="chars"
      v-if="!isLoadingShow"
    >
      <template v-for="(item, idx) of chars">
        <van-index-anchor
          :key="item"
          :index="item"
        >{{idx === 0 ? '热' : item}}</van-index-anchor>

        <Sub
          v-for="(cItem, cIdx) of artists[item]"
          :item="cItem"
          :key="`${item}_${cIdx}`"
        />
      </template>
    </van-index-bar>

    <Loading v-else />
  </div>
</template>

<script>
import Sub from './Sub'
import Scroll from 'components/Sub/Scroll'
import jspy from 'js-pinyin'
import Loading from 'components/Sub/Loading'
import { singerListGet } from 'api/singer'
import { SERVER_ERROR } from '@/config'
import tools from 'utils/tools'

export default {
  name: 'SingerContent',
  components: {
    Scroll,
    Sub,
    Loading
  },

  data () {
    return {
      artists: [],
      chars: [],
      isLoadingShow: true
    }
  },

  mounted () {
    this.getData();
  },

  deactivated () {
    this.scrollToTop();
  },

  methods: {
    async getData () {
      this.isLoadingShow = true;

      const [err, result] = await tools.asyncFunc(singerListGet)

      if (err) {
        this.$toast.fail(SERVER_ERROR);
        return;
      }

      const { artists } = result;

      this.formatData(artists);
      this.isLoadingShow = false;
    },

    formatData (data) {
      const obj = {};
      const hot = data.slice(0, 10);
      let firstLetter = null;
      let charCode = null;

      data.map(val => {
        firstLetter = jspy.getFullChars(val.name).substr(0, 1);
        charCode = firstLetter.charCodeAt();

        if (charCode > 64 && charCode < 123) {
          firstLetter = firstLetter.toUpperCase();
          if (!obj[firstLetter]) {
            obj[firstLetter] = [];
          }
          obj[firstLetter].push(val);
        }
      });

      this.artists = obj;
      obj['#'] = hot;
      this.chars = Object.keys(obj).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
    },

    scrollToTop (top = 0) {
      this.$nextTick(() => this.$refs.wrap.scrollTop = top + 'px');
    }
  }
}
</script>


<style lang="stylus" scoped>
.pos-abs {
  overflow-y: scroll;

  .list {
    scroll-behavior: smooth;
  }

  >>> .van-index-bar__index {
    padding: 0.3rem 0.8rem;
    font-size: 1.2rem;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
