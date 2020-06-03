<template>
  <div class="logo-wrap">
    <van-icon
      class-prefix="icon iconfont icon-music"
      name="extra"
    />
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.logo-wrap {
  vh-center();
  position: absolute;
  width: 100%;
  bottom: 10rem;

  .icon {
    font-size: 20rem;
    color: #f7f8fa;
    animation: rotate 3s forwards infinite;
  }
}
</style>
