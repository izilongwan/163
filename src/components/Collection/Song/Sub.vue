<template>
  <li
    class="item bd-t"
    :class="{ touch: curIdx === idx, current: id == item.id }"
    :data-id="item.id"
    @touchstart="onTouchStart"
    @touchmove="(e) => onTouchMove(e, idx)"
  >
    <div class="cell">
      <span class="num">{{ idx + 1 }}</span>

      <van-icon
        class-prefix="icon music iconfont icon-music"
        name="extra"
      />
    </div>

    <div class="info">
      <span class="name">{{ item.name }}</span>
      <span class="player">{{ item.player }}</span>
    </div>

    <van-icon
      @touchstart.prevent.stop="onDelete(item.id, 'songs')"
      class="collect icon"
      name="like-o"
    />

    <van-icon
      @touchstart.prevent.stop="onDelete(item.id, 'recents')"
      class="del icon"
      name="delete"
    />
  </li>
</template>

<script>
import { DIALOG_CONFIRM_REMOVE } from '@/config'

export default {
  name: 'CollectionSongSub',
  props: {
    item: Object,
    idx: Number,
    curIdx: Number,
    id: Number
  },

  data () {
    return {
      pos: {}
    };
  },

  methods: {
    onTouchStart (e) {
      const { pageX, pageY } = e.touches[0];

      this.$emit('update:curIdx', -1);
      this.pos.x = pageX;
      this.pos.y = pageY;
    },

    onTouchMove (e, idx) {
      const { pageX, pageY } = e.touches[0];
      const { pos } = this;
      const x = pageX - pos.x;
      const y = Math.abs(pageY - pos.y);

      x <= -100 && y <= 20 && this.$emit('update:curIdx', idx);
    },

    onDelete (id, type) {
      const { $dialog, $bus } = this;

      $dialog
        .confirm({
          message: DIALOG_CONFIRM_REMOVE
        })
        .then(() => $bus.$emit('handleMusicCollectData', { music: { id }, type }))
        .catch(() => this.$emit('update:curIdx', -1))
        .then(() => this.$emit('update:curIdx', -1));
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.item {
  position: relative;
  flex-row();
  background-color: #fff;
  padding: 1rem 2rem 1rem 0;
  transition: transform 0.5s;

  .cell {
    vh-center();
    width: 6rem;
    margin-left: -2rem;

    .num {
      font-size: 1.6rem;
      color: #666;
    }

    .icon {
      font-size: 2rem;
      display: none;
    }
  }

  .info {
    flex-column();
    max-width: 80%;
    font-size: 1.4rem;

    .name {
      ellipsis();
      line-height: 1.7rem;
    }

    .player {
      ellipsis();
      margin-top: 0.5rem;
      line-height: 1.5rem;
      color: #999;
    }
  }

  .collect, .del {
    vh-center();
    position: absolute;
    top: 0;
    right: -9rem;
    width: 6rem;
    height: 100%;
    font-size: 3rem;
    background-color: #ddd;
    transition: right 0.8s;
  }

  .collect, .del {
    color: #f33;
  }

  &.touch {
    transform: translateX(-3rem);

    .collect, .del {
      right: -2rem;
    }
  }

  &.current {
    .music {
      display: inline-block;
      color: $defaultOrange;
    }

    .num {
      display: none;
    }
  }
}

.songs .item .del, .recents .item .del {
  display: none;
}

.recents .item .del, .songs .item .collect {
  display: flex;
}
</style>
