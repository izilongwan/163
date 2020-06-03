<template>
  <li
    class="item"
    :class="{ touch: curIdx === idx }"
    @touchstart="onTouchStart"
    @touchmove="(e) => onTouchMove(e, idx)"
  >
    <router-link :to="`/list/play/${item.id}`" class="lk">
      <div
        class="img-wrap"
        v-lazy-container="{selector: 'img'}"
      >
        <img
          height="100%"
          :data-src="item.coverImgUrl"
          alt="封面"
        />
      </div>

      <div class="info">
        <p class="name">{{ item.name }}</p>

        <p class="desc">{{ item.description }}</p>
      </div>
    </router-link>

    <button
      class="del-btn"
      @touchstart.stop="onDelete(item.id)"
    >删 除</button>
  </li>
</template>

<script>
import { DIALOG_CONFIRM_REMOVE } from '@/config'

export default {
  name: 'ArtistListItem',
  props: {
    item: Object,
    idx: Number,
    curIdx: Number
  },

  data () {
    return {
      pos: {}
    };
  },

  methods: {
    onTouchStart (e) {
      const { pageX, pageY } = e.touches[0];

      this.$emit('update:curIdx', -1);
      this.pos.x = pageX;
      this.pos.y = pageY;
    },

    onTouchMove (e, idx) {
      const { pageX, pageY } = e.touches[0];
      const { pos } = this;
      const x = pageX - pos.x;
      const y = Math.abs(pageY - pos.y);

      x <= -100 && y <= 20 && this.$emit('update:curIdx', idx);
    },

    onDelete (id) {
      const { $dialog, $bus } = this;

      $dialog
        .confirm({
          message: DIALOG_CONFIRM_REMOVE
        })
        .then(() => $bus.$emit('handleMusicCollectData', { music: { id }, type: 'artists' }))
        .catch(() => this.$emit('update:curIdx', -1))
        .then(() => this.$emit('update:curIdx', -1));
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.item {
  position: relative;
  padding: 1rem;
  background-color: #f6f6f6;
  border-radius: 8px;
  margin-bottom: 1rem;
  transition: transform 0.5s;

  .lk {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .del-btn {
    position: absolute;
    top: 0;
    right: -6.5rem;
    width: 6rem;
    height: 100%;
    background-color: #f00;
    font-size: 1.6rem;
    color: #fff;
  }

  &.touch {
    transform: translateX(-6rem);
  }

  .img-wrap {
    width: 5rem;
    height: 5rem;
  }

  .info {
    flex: 1;
    max-width: 80%;
    margin-left: 1rem;

    .name {
      ellipsis();
      font-size: 1.6rem;
    }

    .desc {
      ellipsis-m(2);
      margin-top: 0.8rem;
      color: #999;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }
}
</style>
