<template>
  <van-popup
    v-model="show"
    position="right"
    :style="{ width: '100%', height: '100%', backgroundColor: '#fff' }"
  >
    <CommentHeader :show.sync="show" :total="total" />

    <Skeleton v-if="isSkeletonShow" />

    <CommentContent
      v-else
      :hotComments="hotComments"
      :comments="comments"
      @handleCommentPage="++current"
    />

    <Loading v-show="isLoading" />
  </van-popup>
</template>

<script>
import CommentHeader from './Header';
import CommentContent from 'components/Music/Comment/Content';
import Skeleton from 'components/Skeleton/SkeletonComment'
import Loading from 'components/Sub/Loading';
import { songMusicComment } from 'api/music';
import tools from 'utils/tools';
import { SERVER_ERROR } from '@/config'

export default {
  name: 'Comment',
  components: {
    CommentHeader,
    CommentContent,
    Loading,
    Skeleton
  },

  data () {
    return {
      t: null,
      show: false,
      isSkeletonShow: true,
      isLoading: true,
      field: '',
      cache: {},
      pageSize: 20,
      pages: 1,
      current: 0,
      hotComments: [],
      comments: [],
      total: 0
    };
  },

  mounted () {
    this.$bus.$on('handleMusicComment', (data) => this.setMusicComment(data));
  },

  watch: {
    show (value) {
      value ? this.checkCache() : this.resetComment();
    },

    current (num) {
      const { show, pages } = this;

      if (!show) {
        return;
      }

      if (num >= pages) {
        this.$bus.$emit('handleCommentFinished', true);
        return;
      }

      show && this.checkCache();
    }
  },

  methods: {
    setMusicComment ({ show, type, id }) {
      this.show = show;
      type && (this.type = type);
      id && (this.id = id);
    },

    resetComment () {
      clearTimeout(this.t);

      this.t = setTimeout(() => {
        this.pages = 1;
        this.current = 0;
        this.total = 0;
        this.field = '';
        this.comments = [];
        this.hotComments = [];
        this.isLoading = true;
        this.isSkeletonShow = true;
      }, 500)

      this.$bus.$emit('handleCommentFinished', false);
    },

    checkCache () {
      const { type, id, current, cache, $bus } = this;

      if (!id) {
        return;
      }

      if (!cache[type]) {
        this.current = 0;
        cache[type] = {};
        cache[type][id] = {};
        cache[type][id]['comments'] = [];
        this.getData({ type, id, current });
        return;
      }

      if (!cache[type][id]) {
        cache[type][id] = {};
        cache[type][id]['comments'] = [];
        this.getData({ type, id, current });
        return;
      }

      if (!cache[type][id]['comments'][current]) {
        this.getData({ type, id, current });
        return;
      }

      this.getCommentCache({ type, id, current });
    },

    async getData ({ type, id, current }) {
      switch (type) {
        case 'song':
          const [err, result] = await songMusicComment({ id, offset: current });

          if (err) {
            return;
          }

          const { hotComments, total, comments } = result;

          this.setCommentCache({ hotComments, total, comments });
          break;
        case '':
          break;
        default:
          break;
      }

      this.isLoading = false;
      this.isSkeletonShow = false;
      this.$bus.$emit('handleCommentLoading', false);
    },

    setCommentCache ({ hotComments, total, comments }) {
      const { type, id, cache } = this;

      total && (this.total = total);
      this.pages = Math.ceil(total / 20);
      !this.comments && (this.comments = []);
      hotComments &&
        (hotComments.time = tools.formatDate(hotComments, 'time')) &&
        (this.hotComments = hotComments);
      comments &&
        (comments.time = tools.formatDate(comments, 'time')) &&
        this.comments.push(comments);

      const temp = cache[type][id];

      !temp.hotComments && (temp.hotComments = this.hotComments);
      !temp.total && (temp.total = this.total);
      !temp.pages && (temp.pages = this.pages);
      temp.comments = this.comments;
      this.$bus.$emit('handleCommentLoading', false);
    },

    getCommentCache ({ type, id }) {
      const { total, comments, hotComments, pages } = this.cache[type][id];

      total && (this.total = total);
      comments && (this.comments = comments);
      hotComments && (this.hotComments = hotComments);
      pages && (this.pages = pages);
      this.$bus.$emit('handleCommentLoading', false);
      this.isLoading = false;
      this.isSkeletonShow = false;
    }
  }
};
</script>
