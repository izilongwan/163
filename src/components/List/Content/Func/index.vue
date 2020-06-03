<template>
  <div class="func">
    <div class="cell" @click="onPlayingAll">
      <van-icon
        v-show="!isPlaying"
        class="icon"
        name="play-circle-o"
      />
      <van-icon
        v-show="isPlaying"
        class="icon"
        name="pause-circle-o"
      />
      <em class="text">
        全部播放
        <span class="total">(共{{ list.length }}首)</span>
      </em>
    </div>

    <div
      v-if="banner.playCount"
      class="cell"
      :class="{ collect: isCollected }"
      @click="$bus.$emit('handleMusicCollectData', {music: banner, type: 'artists'})"
    >
      <van-icon
        class="icon"
        :name="isCollected ? 'like-o' : 'add-o'"
      />

      <em class="text">
        {{ isCollected ? '已收藏' : '未收藏' }}
        <span
          class="total"
        >({{ Math.floor(banner.playCount / 10000) }}万)</span>
      </em>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ListFunc',
  props: {
    list: Array,
    banner: Object
  },

  data () {
    return {
      isPlaying: false
    };
  },

  computed: {
    ...mapState('music', ['musicList']),

    isCollected () {
      const { musicList, banner } = this;
      const { id } = banner;
      const { artists } = musicList;

      return artists.find((val) => val.id == id);
    }
  },

  methods: {
    onPlayingAll () {
      const { list, $bus, isPlaying } = this;
      const { id } = list[0];

      if (isPlaying) {
        $bus.$emit('handleMusicState', false);
        this.isPlaying = false;
        return;
      }

      $bus.$emit('handleMusic', {
        id,
        playings: list,
        type: 'recents'
      });

      $bus.$emit('handleMusicState', true);
      this.isPlaying = true;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.func {
  flex-row();
  background-color: #eee;
  font-size: 1.6rem;
  line-height: 4.5rem;

  .cell {
    vh-center();
    width: 50%;
    transition: background-color 0.5s, color 0.5s;

    .total {
      color: #999;
      font-size: 1.3rem;
      transition: color 0.5s;
    }

    .icon {
      font-size: 1.8rem;
    }

    .text {
      vh-center();
      margin-left: 0.5rem;
    }

    &.collect {
      background-color: #ee0a24;
      color: #fff;

      .icon {
        color: #fff;
        font-weight: bold;
      }

      .text {
        font-weight: bold;
      }

      .total {
        color: #eee;
      }
    }
  }
}
</style>
