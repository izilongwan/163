<template>
  <div class="title">
    <h2>
      <van-icon class="icon" name="fire-o" />
      {{title}}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'RecomTitle',
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
.title {
  margin-left: 1.5rem;

  h2 {
    padding: 1rem 0;
    font-size: 1.6rem;
    color: #000;
  }

  .icon {
    font-size: 1.4rem;
    color: #999;
  }
}
</style>
