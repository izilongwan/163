<template>
  <li
    class="item bd-t"
    :data-id="item.id"
    :class="{current: item.id == id}"
  >
    <div class="cell">
      <span class="num">{{idx + 1}}</span>

      <van-icon
        class-prefix="icon music iconfont icon-music"
        name="extra"
      />
    </div>

    <div class="info">
      <span class="name">{{item.name}}</span>

      <span class="player">{{item.player}}</span>
    </div>

    <span class="like-o"></span>
  </li>
</template>

<script>
export default {
  name: 'SongListSub',
  props: {
    item: Object,
    idx: Number,
    id: Number
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.item {
  flex-row();
  background-color: #fff;
  padding: 1rem 2rem 1rem 0;

  .cell {
    vh-center();
    width: 6rem;

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
    max-width: 70%;
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

.list-wrap {
  &.historys {
    .item .cell {
      width: 3rem;

      .num, .icon {
        display: none;
      }
    }

    .info {
      max-width: 90%;
    }
  }
}
</style>
