<template>
  <nav class="nav clearfix" slot="title">
    <router-link
      class="item"
      :class="{
        current: $route.path === '/' ? '/recom' === path : $route.path === path
      }"
      v-for="({ path, text }, idx) of list"
      :key="idx"
      :to="path"
    >{{ text }}</router-link>
  </nav>
</template>

<script>
export default {
  name: 'HomeNav',

  data () {
    return {
      list: [
        { path: '/recom', text: '推荐' },
        { path: '/mine', text: '我的' }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.nav {
  display: inline-block;

  .item {
    float: left;
    margin: 0 2.5rem;
    color: #bbb;
    font-size: 1.6rem;

    &.current {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
