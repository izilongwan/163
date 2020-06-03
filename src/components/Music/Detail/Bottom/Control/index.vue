<template>
  <div class="control" @click="onControlClick">
    <van-icon
      name="extra"
      data-field="mode"
      :class-prefix="`icon iconfont icon-${musicMode}`"
    />

    <van-icon
      name="extra"
      data-field="prev"
      class-prefix="icon iconfont icon-media-prev"
    />

    <van-icon
      v-show="!is_playing"
      class="icon big"
      name="play"
      data-field="play"
    />

    <van-icon
      v-show="is_playing"
      class="icon big"
      name="pause"
      data-field="pause"
    />

    <van-icon
      name="extra"
      class-prefix="icon iconfont icon-media-next"
      data-field="next"
    />

    <van-icon
      class-prefix="icon iconfont icon-list1"
      name="extra"
      data-field="list"
    />
  </div>
</template>

<script>
import { SONG_FIRST, SONG_LAST } from '@/config';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'BottomControl',
  data () {
    return {
      musicMode: 'in-order',
      musicModeList: [
        { mode: 'in-order', text: '顺序播放' },
        { mode: 'random', text: '随机播放' },
        { mode: 'loop', text: '循环播放' }
      ],
      musicModeIdx: 0
    };
  },

  computed: {
    ...mapState('music', ['music', 'is_playing', 'musicList']),
    ...mapState('user', ['user'])
  },

  mounted () {
    this.busEvent();
  },

  methods: {
    busEvent () {
      this.$bus.$on('handleMusicPrevNext', (field) =>
        this.changeMusicNextPrev(field)
      );
    },

    onControlClick (e) {
      const { music, $bus } = this;

      if (!music.id) {
        return;
      }

      const { target } = e;
      const { field } = target.dataset;

      switch (field) {
        case 'mode':
          this.setMusicMode();
          break;
        case 'play':
        case 'pause':
          music.url &&
            $bus.$emit(
              'handleMusicState',
              field === 'play' ? true : false
            );
          break;
        case 'next':
        case 'prev':
          this.changeMusicNextPrev(field);
          break;
        case 'list':
          $bus.$emit('handlePlayingState', true);
          break;
        default:
          break;
      }
    },

    setMusicMode () {
      const { musicModeList, musicModeIdx } = this;

      this.musicModeIdx =
        musicModeIdx >= musicModeList.length - 1 ? 0 : musicModeIdx + 1;

      const { mode, text } = musicModeList[this.musicModeIdx];
      const conf = {
        message: text,
        icon: 'service-o'
      };

      this.$toast(conf);
      this.musicMode = mode;
    },

    changeMusicNextPrev (field) {
      const { music, musicList, musicMode } = this;
      const { playings } = musicList;
      const { id } = music;

      switch (musicMode) {
        case 'in-order':
          this.inOrderMode(field, id, playings);
          break;
        case 'random':
          this.randomMode(id, playings);
          break;
        case 'loop':
          this.loopMode();
          break;
        default:
          break;
      }
    },

    inOrderMode (field, id, list) {
      if (list.length <= 0) {
        return;
      }

      const maxIdx = list.length - 1;
      let idx = list.findIndex((val) => val.id == id) || 0;

      switch (field) {
        case 'prev':
          if (idx > 0) {
            idx--;
          } else {
            this.$toast.fail(SONG_FIRST);
            return;
          }
          break;
        case 'next':
          if (idx < maxIdx) {
            idx++;
          } else {
            this.$toast.fail(SONG_LAST);
            return;
          }
          break;
        default:
          break;
      }

      id = list[idx].id;
      this.$bus.$emit('handleMusic', { id });
    },

    randomMode (id, list) {
      if (list && list.length > 0) {
        const { floor, random } = Math;
        const len = list.length;
        let idx = floor(random() * len);
        let curId = list[idx].id;

        while (id == curId) {
          idx = floor(random() * len);
          curId = list[idx].id;
        }

        this.$bus.$emit('handleMusic', { id: curId });
      }
    },

    loopMode () {
      this.$bus.$emit('handleSetMusicProcess', 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.control {
  flex-row();
  align-items: center;
  justify-content: space-between;

  .big {
    font-size: 4rem;
  }
}
</style>
