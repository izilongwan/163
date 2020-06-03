<template>
  <div class="list-wrap">
    <ul class="list">
      <Sub
        class="item"
        v-for="(item, idx) of list"
        :key="idx"
        :item="item"
      >{{item}}</Sub>
    </ul>
  </div>
</template>

<script>
import Sub from './Sub'

export default {
  name: 'SidebarList',
  data () {
    return {
      list: [
        { text: '我的账户', path: 'account', icon: 'star-o' },
        { text: '设置', path: '', icon: 'setting-o' }
      ]
    }
  },

  components: { Sub }
}
</script>

<style lang="stylus" scoped>
.list-wrap {
  margin-top: 1rem;
}
</style>
