<template>
  <div class="loading-wrap">
    <div class="img-wrap">
      <img src="~images/loading.gif" alt="加载中" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingGif'
}
</script>

<style lang="stylus" scoped>
.loading-wrap {
  background-color: #fff;

  .img-wrap {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 4rem;
    transform: translateX(-50%);
  }
}
</style>
