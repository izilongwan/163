<template>
  <div class="no-user">
    <van-button class="icon" type="primary" plain>立即登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'GoLoginBtn'
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl';

.no-user {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .icon {
    color: $defaultBg;
    border-color: $defaultBg;
  }
}
</style>
