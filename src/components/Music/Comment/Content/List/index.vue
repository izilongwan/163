<template>
  <div class="list-wrap" v-show="list.length > 0">
    <ul class="list">
      <Sub v-for="(item, idx) of list" :key="idx" :item="item" />
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Sub from './sub';

export default {
  name: 'CommentsList',

  props: {
    list: Array
  },

  components: { Sub }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.list-wrap {
  .page-bd {
    margin: 2rem;
    text-align: center;
  }
}
</style>
