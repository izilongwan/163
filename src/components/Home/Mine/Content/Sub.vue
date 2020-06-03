<template>
  <router-link tag="li" class="item" :to="item.path">
    <div class="info cell">
      <div
        class="img-wrap"
        v-lazy-container="{selector: 'img'}"
      >
        <img :data-src="getUrl" alt="图片" />
      </div>

      <span class="text">{{ item.text }}</span>
    </div>

    <div class="right cell">
      <span class="count">
        （共{{ musicList[item.type].length
        }}{{ item.type === 'artists' ? '个' : '首' }}）
      </span>

      <van-icon class="icon" name="arrow" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MinsContentItem',
  props: {
    item: Object,
    musicList: Object
  },

  computed: {
    getUrl () {
      const { item, musicList } = this;
      const { type } = item;
      const list = musicList[type];
      const len = list.length;

      if (len <= 0) {
        return '';
      }

      const cover = list[len - 1];

      switch (type) {
        case 'songs':
        case 'recents':
          return cover.picUrl;
          break;
        case 'artists':
          return cover.coverImgUrl;
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  flex-row();
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  margin: 0 1rem 1rem;
  background-color: #f1f1f1;
  border-radius: 0.7rem;

  &:first-child {
    margin-top: 0.5rem;
  }

  .cell {
    flex-row();
    align-items: center;
  }

  .info {
    flex-row();
    align-items: center;

    .icon {
      color: #666;
      font-size: 2.5rem;
    }

    .img-wrap {
      width: 4rem;
      margin-right: 1rem;
      overflow: hidden;
    }

    .text {
      font-size: 1.6rem;
      color: #777;
    }
  }

  .right {
    .count {
      font-size: 1.4rem;
      color: #999;
    }

    .icon {
      font-size: 1.6rem;
      color: #999;
    }
  }
}
</style>
