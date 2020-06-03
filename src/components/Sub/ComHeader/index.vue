<template>
  <van-nav-bar
    :title="title"
    left-arrow
    class="header"
    @click-left="$router.go(-1)"
  >
    <slot slot="title"></slot>
  </van-nav-bar>
</template>

<script>
export default {
  name: 'Toplist',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.header {
  position: relative;
  z-index: 3;

  >>> .van-nav-bar__title {
    font-weight: bold;
  }
}
</style>
