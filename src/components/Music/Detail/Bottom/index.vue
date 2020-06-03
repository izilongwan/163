<template>
  <div class="bottom">
    <BottomFunc />
    <BottomBar />
    <BottomControl />
  </div>
</template>

<script>
import BottomFunc from './Func'
import BottomBar from './Bar'
import BottomControl from './Control'

export default {
  name: 'DetailBottom',
  components: {
    BottomFunc,
    BottomBar,
    BottomControl
  }
}
</script>

<style lang="stylus" scoped>
.bottom {
  margin: 0 3rem 1rem;
}
</style>
