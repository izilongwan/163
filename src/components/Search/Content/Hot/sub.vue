<template>
  <span
    class="item"
    @click="$bus.$emit('handleSetSearchValue', item)"
  >{{item}}</span>
</template>

<script>
export default {
  name: 'HotItem',
  props: {
    item: String
  }
}
</script>

<style lang="stylus" scoped>
.item {
  display: inline-block;
  padding: 0.7rem;
  margin: 0 1rem 0.7rem 0;
  border: 1px solid #bbb;
  border-radius: 5px;
  font-size: 1.4rem;
  color: #444;
}
</style>
