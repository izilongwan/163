<template>
  <div class="title">
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HotTitle',
  data () {
    return {
      title: '热门搜索'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title {
  height: 4rem;
  padding-left: 2rem;

  h2 {
    height: 100%;
    font-size: 1.4rem;
    line-height: 4rem;
  }
}
</style>