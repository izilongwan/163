<template>
  <div
    class="result-wrap top-hd"
    v-if="isResultShow"
    @click="onResultClick"
  >
    <Loading v-if="isLoadingShow" />

    <SongList
      :list="songs"
      field="historys"
      v-else-if="!isLoadingShow && songCount > 0"
    />

    <NoDataTip v-else />
  </div>
</template>

<script>
import SongList from 'components/Sub/SongList';
import Loading from 'components/Sub/Loading';
import NoDataTip from 'components/Sub/NoDataTip';
import { searchKeywordsGet } from 'api/search';
import { SERVER_ERROR } from '@/config'
import tools from 'utils/tools'

export default {
  name: 'SearchReult',
  components: {
    SongList,
    Loading,
    NoDataTip
  },

  mounted () {
    this.busEvent();
  },

  data () {
    return {
      songs: [],
      songCount: 0,
      isResultShow: false,
      isLoadingShow: true
    };
  },

  methods: {
    onResultClick () {
      this.$bus.$emit('handleSetSearchValue');
      this.isResultShow = false;
    },

    busEvent () {
      this.$bus.$on('handleSearchValue', (keywords) =>
        this.getSearchValue(keywords)
      );
    },

    async getSearchValue (keywords) {
      if (keywords) {
        this.isResultShow = true;
        this.isLoadingShow = true;

        const [err, data] = await tools.asyncFunc(
          () => searchKeywordsGet(keywords)
        )

        if (err) {
          this.$toast.fail(SERVER_ERROR);
          return;
        }

        const {
          result: { songs, songCount }
        } = data;

        this.songs = songs.map(({ name, id, artists }) => ({
          name,
          id,
          player: artists.map(({ name }) => name).join('、')
        }));

        this.songCount = songCount;
        this.isLoadingShow = false;
        return;
      }

      this.isResultShow = false;
      this.isLoadingShow = false;
      this.songs = [];
      this.songCount = 0;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.result-wrap {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  bottom: auto;
  max-height: 35rem;
  background-color: #fff;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
