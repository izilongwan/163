<template>
  <Scroll class="bt-5" :scrollAction="scrollAction">
    <ListBanner :banner="data.banner" />

    <ListFunc :list="data.list" :banner="data.banner" />

    <SongList
      :artist="data.banner"
      field="recents"
      :list="data.list"
    />
  </Scroll>
</template>

<script>
import ListBanner from './Banner'
import Scroll from 'components/Sub/Scroll'
import tools from 'utils/tools'
import SongList from 'components/Sub/SongList'
import ListFunc from './Func'

export default {
  name: 'ListContent',

  props: {
    data: Object,
    headerObj: Object
  },

  components: {
    ListBanner,
    Scroll,
    SongList,
    ListFunc
  },

  methods: {
    scrollAction: tools._throttle(function ({ y }) {
      const top = -y;
      const { headerObj, data } = this;
      const { name } = data.banner;
      let opacity = ((top + 500) / 500 - 1).toFixed(2),
        title = '歌单';

      if (opacity <= 0.01) {
        title = '歌单';
      } else if (opacity > 1) {
        opacity = 1;
        title = name;
      } else if (opacity >= 0.4) {
        title = name;
      }

      headerObj.opacity = opacity;
      headerObj.title = title;
    }, 500)
  }
};
</script>
