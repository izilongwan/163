<template>
  <div class="content pos-abs top-hd">
    <van-list
      v-model="loading"
      :immediate-check="false"
      :finished="finished"
      finished-text="ψ(._. )>我是有底线的"
      @load="onLoad"
    >
      <template v-if="hotComments.length > 0">
        <CommentTitle type="hot" title="热门评论" />

        <CommentList :list="hotComments" />
      </template>

      <template v-if="comments.length > 0">
        <CommentTitle type="new" title="最新评论" />

        <CommentList
          :list="comments.reduce((prev, cur) => prev.concat(...cur) , [])"
        />
      </template>

      <div class="loading-wrap" slot="loading">
        <van-loading size="20" type="spinner" color="#999" />
      </div>
    </van-list>
  </div>
</template>

<script>
import CommentTitle from './Title'
import CommentList from './List'

export default {
  name: 'CommentContent',
  components: {
    CommentTitle,
    CommentList
  },
  props: {
    data: Object,
    comments: Array,
    hotComments: Array,
    total: Number
  },

  data () {
    return {
      finished: false,
      loading: false
    }
  },

  mounted () {
    this.busEvent();
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('handleCommentLoading', loading => this.loading = loading);
      $bus.$on('handleCommentFinished', finished => this.finished = finished);
    },

    onLoad () {
      this.loading = true;
      this.$emit('handleCommentPage');
    }
  }
}
</script>

<style lang="stylus" scoped>
.content::-webkit-scrollbar {
  display: none;
}

.content {
  overflow-y: scroll;
}
</style>
