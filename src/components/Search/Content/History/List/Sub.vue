<template>
  <div class="item" :data-id="item.id">
    <div class="info">
      <p class="name" data-field="history">{{item.name}}</p>
      <span class="line">-</span>
      <p class="player" data-field="history">{{item.player}}</p>
    </div>
    <van-icon name="cross" data-field="del" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    item: Object
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items: center;
  justify-content: space-between;
  font-size: 1.4rem;
  overflow: hidden;

  .info {
    flex-row();
    align-items: center;
    width: 85%;

    .name {
      ellipsis();
      padding: 1rem 0;
      color: #666;
    }

    .line {
      color: #999;
      margin: 0 0.6rem;
    }

    .player {
      ellipsis();
      color: #999;
    }
  }

  .icon {
    color: #999;
  }
}
</style>
