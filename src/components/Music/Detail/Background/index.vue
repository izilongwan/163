<template>
  <div class="background">
    <div class="filter">
      <img
        width="100%"
        height="100%"
        src="http://p1.music.126.net/YsQrEZ_M6kduwN2zh6Q6kg==/109951163311406661.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBackground'
}
</script>

<style lang="stylus" scoped>
.background {
  position: absolute;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  z-index: -1;
  opacity: 0.6;
  filter: blur(30px);
  overflow: hidden;

  .filter {
    height: 100%;
    background: #000;
    opacity: 0.6;
  }
}
</style>
