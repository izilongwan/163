<template>
  <van-nav-bar
    left-arrow
    @click-left="$emit('update:show', false)"
  >
    <h3 slot="title">
      全部评论
      <span class="total">(共{{total}}首)</span>
    </h3>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'Toplist',
  props: {
    total: Number,
    show: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.total {
  color: #999;
  font-size: 1.4rem;
}
</style>
