<template>
  <van-nav-bar class="header">
    <van-icon
      name="apps-o"
      slot="left"
      @click="$bus.$emit('handleShowSidebar', true)"
    />

    <van-icon
      slot="right"
      class="icon"
      class-prefix="iconfont icon-search"
      @click="$router.push('search')"
      name="extra"
    />

    <Nav slot="title" />
  </van-nav-bar>
</template>

<script>
import Nav from './Nav'

export default {
  name: 'HomeNavbar',

  components: { Nav }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header {
  background-color: $defaultBg;

  .icon {
    color: #fff;
  }

  >>> .van-icon {
    color: #fff;
  }
}
</style>
