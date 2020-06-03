<template>
  <div class="content">
    <RecomTitle title="精选歌单" />
    <RecomList type="play" :list="list" />
    <RecomTitle title="新歌上映" />
    <RecomList type="song" :list="newsong" />
  </div>
</template>

<script>
import RecomTitle from 'components/Sub/Title'
import RecomList from 'components/Sub/ComList'

export default {
  name: 'Recom',

  components: {
    RecomTitle,
    RecomList
  },

  props: {
    list: Array,
    newsong: Array
  }
};
</script>
