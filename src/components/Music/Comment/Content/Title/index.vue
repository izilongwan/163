<template>
  <div class="title">
    <h3>
      <van-icon
        class="icon"
        :name="type === 'hot' ? 'hot-o' : 'new-o'"
      />
      {{title}}
    </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CommentsTitle',

  props: {
    title: String,
    type: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.title {
  padding: 1rem 2rem;
  font-size: 1.6rem;

  h3 {
    font-weight: bold;
    line-height: 2rem;
  }

  .icon {
    color: $defaultOrange;
  }
}
</style>
