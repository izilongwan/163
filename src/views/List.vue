<template>
  <div class="container">
    <ListHeader
      :title="headerObj.title"
      :style="{backgroundColor: `rgba(44, 44, 44, ${headerObj.opacity})`}"
      class="bd-0 white"
    />

    <ListContent
      v-if="!isLoadingShow"
      :headerObj="headerObj"
      :data="data"
    />

    <Skeleton v-else />
  </div>
</template>

<script>
import ListHeader from 'components/Sub/ComHeader'
import ListContent from 'components/List/Content'
import Skeleton from 'components/Skeleton/SkeletonListPlay'
import { playlistDetailGet } from 'api/playlist'
import { singerListDetailGet } from 'api/singer'
import { SERVER_ERROR } from '@/config'
import tools from 'utils/tools'

export default {
  name: 'List',

  props: {
    type: String,
    id: [String, Number]
  },

  components: {
    ListHeader,
    ListContent,
    Skeleton
  },

  data () {
    return {
      isLoadingShow: true,
      cache: {},
      data: {
        banner: {},
        list: []
      },
      headerObj: {
        title: '歌单',
        opacity: .2
      }
    }
  },

  activated () {
    this.checkCache();
  },

  methods: {
    checkCache () {
      const { type, id, cache, headerObj } = this;

      this.isLoadingShow = true;
      this.data = {};
      headerObj.opacity = .2;


      !cache[type] && (cache[type] = {});

      if (cache[type][id]) {
        this.data = cache[type][id];
        this.isLoadingShow = false;
        headerObj.opacity = 0;
        return;
      }

      this.getData({ type, id });
    },

    async getData ({ type, id }) {
      switch (type) {
        case 'play':
          const [err, data] = await playlistDetailGet(id);

          if (err) {
            return;
          }

          const { playlist } = data;

          this.formatPlaylist(playlist);
          break;
        case 'singer':
          const [err1, data1] = await singerListDetailGet(id);

          if (err1) {
            return;
          }


          this.formatSinger(data1);
        default:
          break;
      }

      this.headerObj.opacity = 0;
      this.isLoadingShow = false;
    },

    formatPlaylist ({
      creator,
      name,
      playCount,
      coverImgUrl,
      description,
      tracks,
      id
    }) {
      const { data } = this;

      data.banner = {
        id,
        name,
        coverImgUrl,
        playCount,
        description,
        creator
      };

      data.list = tracks.map(({ name, id, ar }) => ({
        id,
        name,
        player: ar.map(({ name }) => name).join('、')
      }));

      this.setCache(data);
    },

    formatSinger ({ artist: { name, id, picUrl }, hotSongs }) {
      const { data, cache } = this;

      data.banner = {
        id,
        name,
        coverImgUrl: picUrl
      };

      data.list = hotSongs.map(({ id, name, ar }) => ({
        id,
        name,
        player: ar.map(({ name }) => name).join('、')
      }));

      this.setCache(data);
    },

    setCache (data) {
      const { cache, type, id } = this;

      cache[type][id] = data;
    }
  }
}
</script>
