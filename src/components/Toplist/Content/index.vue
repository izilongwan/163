<template>
  <Scroll class="top-hd bt-5">
    <ToplistTitle title="官方榜" />
    <ToplistInfoList type="play" :list="list.slice(0, 4)" />

    <ToplistTitle title="推荐榜" />
    <ToplistComList type="play" :list="list.slice(4, 10)" />

    <ToplistTitle title="全球榜" />
    <ToplistComList type="play" :list="list.slice(10, 16)" />

    <ToplistTitle title="更多榜" />
    <ToplistComList type="play" :list="list.slice(16)" />
  </Scroll>
</template>

<script>
import Scroll from 'components/Sub/Scroll'
import ToplistTitle from 'components/Sub/Title'
import ToplistInfoList from './InfoList'
import ToplistComList from 'components/Sub/ComList'

export default {
  name: 'ToplistContent',
  components: {
    Scroll,
    ToplistTitle,
    ToplistInfoList,
    ToplistComList
  },

  props: {
    list: Array
  }
}
</script>
