<template>
  <div class="func" @click="onFuncClick">
    <van-icon
      name="like-o"
      class="icon"
      data-field="collect"
      :class="{collect: isCollected}"
    />

    <van-icon
      class-prefix="icon iconfont icon-download"
      name="extra"
    />

    <van-icon
      class="icon"
      name="comment-o"
      data-field="comment"
    />

    <van-icon
      class="icon"
      name="ellipsis"
      data-field="download"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'BottomFunc',
  data () {
    return {
      list: [
        { name: 'like-o', field: 'collect' },
        { name: 'comment-o', field: 'comment' },
        { name: 'down', field: 'download' },
        { name: 'ellipsis', field: '' }
      ]
    };
  },

  computed: {
    ...mapState('music', ['music', 'musicList']),

    isCollected () {
      const { musicList, music } = this;
      const { id } = music;
      const { songs } = musicList;

      return songs.find((val) => val.id == id);
    }
  },

  methods: {
    onFuncClick (e) {
      const { music } = this;

      if (!music.url) {
        return;
      }

      const { target } = e;
      const { field } = target.dataset;

      switch (field) {
        case 'collect':
          const conf = { music, type: 'songs' };

          this.$bus.$emit('handleMusicCollectData', conf);
          break;
        case 'comment':
          const { id } = this.music;
          const data = { show: true, id, type: 'song' };

          this.$bus.$emit('handleMusicComment', data);
          break;
        case 'download':

          window.open(music.url);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.func {
  flex-row();
  justify-content: space-between;

  .collect {
    color: #f00;
  }
}
</style>
