<template>
  <div class="list-wrap" ref="scroll">
    <ul class="list" v-if="lyric && !isLoadingShow">
      <li
        class="item"
        :class="{ cur: idx === curIdx }"
        v-for="([key, value], idx) of lyric"
        :key="idx"
        ref="refItem"
      >{{ value }}</li>
    </ul>

    <Skeleton v-else-if="isLoadingShow" />

    <p v-else class="tip">- 暂无歌词 -</p>
  </div>
</template>

<script>
import Skeleton from 'components/Skeleton/SkeletonDetailMidLyric'

export default {
  name: 'MidLyric',
  props: {
    lyric: [Array, String],
    isLoadingShow: Boolean,
  },

  components: {
    Skeleton
  },

  data () {
    return {
      curIdx: 0
    };
  },

  mounted () {
    this.$bus.$on('handleMusicLyric', (time) => this.scrollLyric(time));
  },

  methods: {
    scrollLyric (time) {
      const { $refs, lyric } = this;
      const { refItem, scroll } = $refs;

      if (!lyric || !refItem) {
        return;
      }

      lyric.some(([key], idx) => {
        if (key > time) {
          this.curIdx = idx - 1 < 0 ? 0 : idx - 1;

          if (!refItem[idx]) {
            return;
          }

          const { offsetTop } = refItem[idx];

          scroll.scrollTop = offsetTop - 195;

          return true;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.list-wrap {
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  .list {
    padding-bottom: 15rem;

    .item {
      text-align: center;
      font-size: 1.4rem;
      color: #777;
      line-height: 3rem;
      transition: color 0.5s, font-size 0.5s;

      &.cur {
        font-size: 1.8rem;
        color: #444;
      }
    }
  }

  .tip {
    text-align: center;
    color: #666;
    font-size: 1.8rem;
    line-height: 30rem;
  }
}
</style>
