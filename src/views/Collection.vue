<template>
  <div class="container">
    <CollectionHeader>
      <h3>
        {{getTitle}}
        <sub class="total">({{getList.length}})</sub>
      </h3>
    </CollectionHeader>

    <Scroll class="top-hd bt-5" v-if="getList.length > 0">
      <CollectionArtist
        v-if="type === 'artists'"
        :artists="getList"
      />

      <CollectionSong
        :field="type"
        v-else
        :songs="getList"
      />
    </Scroll>

    <NoDataTip
      v-else
      tip="这里空空如也"
      :icon="type === 'recents' ? 'music-o' : 'like-o'"
    />
  </div>
</template>

<script>
import CollectionHeader from 'components/Sub/ComHeader'
import CollectionArtist from 'components/Collection/Artist'
import CollectionSong from 'components/Collection/Song'
import Scroll from 'components/Sub/Scroll'
import NoDataTip from 'components/Sub/NoDataTip'
import { mapState } from 'vuex'

export default {
  name: 'Collection',

  components: {
    CollectionHeader,
    Scroll,
    CollectionArtist,
    CollectionSong,
    NoDataTip
  },

  data () {
    return {
      type: ''
    }
  },

  activated () {
    const { name } = this.$route;

    this.type = name.split('_')[1];
  },

  computed: {
    ...mapState('music', ['musicList']),

    getTitle () {
      const { type } = this;

      if (!type) {
        return;
      }

      type === 'songs' ? '收藏 の 歌曲' : '收藏 の 歌单';

      switch (type) {
        case 'songs':
          return '收藏 の 歌曲';
          break;
        case 'artists':
          return '收藏 の 歌单';
        case 'recents':
          return '最近 の 歌单';
        default:
          return '';
          break;
      }
    },

    getList () {
      const { type, musicList } = this;

      if (!type) {
        return [];
      }

      return musicList[type];
    }
  }
}
</script>

<style lang="stylus" scoped>
.total {
  color: #999;
}
</style>
