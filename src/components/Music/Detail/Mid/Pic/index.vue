<template>
  <div
    class="img-wrap"
    v-lazy-container="{ selector: 'img' }"
  >
    <img :data-src="picUrl" alt="图片" />
  </div>
</template>

<script>
export default {
  name: 'MidPic',
  props: {
    picUrl: String
  }
}
</script>

<style lang="stylus" scoped>
.img-wrap {
  position: absolute;
  width: 25rem;
  height: 25rem;
  border-radius: 3rem;
  overflow: hidden;
}
</style>
