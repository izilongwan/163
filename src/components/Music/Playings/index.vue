<template>
  <van-popup
    v-model="show"
    position="bottom"
    :style="{
      width: '100%',
      height: '50%'
    }"
  >
    <PlayingTitle
      :count="musicList.playings.length"
      :artist="artist"
      :isCollected="isCollected"
    />

    <PlayingList :list="musicList.playings" :id="music.id" />
  </van-popup>
</template>

<script>
import PlayingTitle from './Title';
import PlayingList from './List';
import { mapState } from 'vuex';

export default {
  name: 'MusicPlayings',

  components: {
    PlayingTitle,
    PlayingList
  },

  data () {
    return {
      show: false
    };
  },

  mounted () {
    this.busEvent();
  },

  computed: {
    ...mapState('music', ['music', 'artist', 'musicList']),

    isCollected () {
      const { artist } = this;

      if (!artist) {
        return;
      }

      const { musicList } = this;
      const { artists } = musicList;
      const { id } = artist;

      return artists.findIndex((val) => val.id == id) >= 0;
    }
  },

  methods: {
    busEvent () {
      const { $bus } = this;

      $bus.$on('handlePlayingState', (show) => (this.show = show));
    }
  }
};
</script>
