<template>
  <div class="no-login pos-abs bt-5">
    <div class="icon-wrap">
      <van-icon
        class-prefix="icon iconfont icon-music"
        name="extra"
      />
    </div>

    <div class="btn-wrap">
      <van-button
        icon="success"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        @click="$router.push('/login')"
      >立即登录</van-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MineNoLogin'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.no-login {
  .icon-wrap {
    vh-center();
    min-height: 30rem;

    .icon {
      font-size: 20rem;
      -webkit-line-clamp: 2;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-image: linear-gradient(135deg, #ff833b, #707afa);
      animation: rotate 5s backwards infinite;
    }
  }

  .btn-wrap {
    text-align: center;
  }
}
</style>
