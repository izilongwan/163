<template>
  <li
    class="item bd-t"
    :class="{current: id == item.id}"
    :data-id="item.id"
  >
    <div class="cell">
      <span class="name">{{item.name}}</span> -
      <span class="player">{{item.player}}</span>
    </div>

    <van-icon class="icon" name="volume-o" />
  </li>
</template>

<script>
export default {
  name: 'PlayingsListItem',
  props: {
    item: Object,
    id: [Number, String]
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

.item {
  flex-row();
  justify-content: space-between;
  padding: 1.2rem 3rem 1.2rem 2rem;
  font-size: 1.4rem;

  .cell {
    ellipsis();
    width: 80%;
    line-height: 1.6rem;

    .name {
      color: #555;
    }

    .player {
      color: #999;
    }
  }

  .icon {
    font-size: 1.8rem;
  }

  &.current {
    .icon {
      color: $defaultOrange;
    }
  }
}
</style>
