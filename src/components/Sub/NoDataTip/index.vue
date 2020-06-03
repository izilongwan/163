<template>
  <div class="no-data-tip">
    <div class="content">
      <van-icon class="icon" :name="icon" />
      <p class="text">{{tip}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoDataTip',
  props: {
    tip: {
      type: String,
      default: '-- 没有找到任何数据 --'
    },
    icon: {
      type: String,
      default: 'flower-o'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.no-data-tip {
  vh-center();
  min-height: 30rem;

  .content {
    text-align: center;

    .icon {
      color: #888;
      font-size: 7rem;
    }

    .text {
      font-size: 1.4rem;
      margin-top: 1rem;
      color: #999;
    }
  }
}
</style>
