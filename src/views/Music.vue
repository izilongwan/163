<template>
  <div class="container">
    <MusicDetail />

    <MusicMini />

    <MusicAudio />

    <MusicPlayings />

    <MusicComment />
  </div>
</template>

<script>
import MusicDetail from 'components/Music/Detail'
import MusicMini from 'components/Music/Mini'
import MusicAudio from 'components/Music/Audio'
import MusicPlayings from 'components/Music/Playings'
import MusicComment from 'components/Music/Comment'

export default {
  name: 'Music',
  components: {
    MusicDetail,
    MusicMini,
    MusicAudio,
    MusicPlayings,
    MusicComment
  }
}
</script>

<style lang="stylus" scoped>
.container {
  position: static;
}
</style>
