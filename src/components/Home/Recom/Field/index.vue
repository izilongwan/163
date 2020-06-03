<template>
  <div class="field">
    <ul class="list">
      <router-link
        tag="li"
        :to="path"
        class="item"
        v-for="({name, text, path}, idx) of list"
        :key="idx"
      >
        <div class="icon-wrap">
          <van-icon :name="name" />
        </div>
        <p class="text">{{text}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecomField',
  data () {
    return {
      list: [
        { name: 'fire-o', text: '私人FM', path: '/' },
        { name: 'todo-list-o', text: '每日推荐', path: '/' },
        { name: 'music-o', text: '歌手', path: 'singer' },
        { name: 'bar-chart-o', text: '排行榜', path: 'toplist' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.field {
  margin: 2rem 0;

  .list {
    display: flex;

    .item {
      vh-center();
      display: flex;
      flex-direction: column;
      width: 25%;

      .icon-wrap {
        vh-center();
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        background-color: #333;

        >>> i {
          font-size: 2.6rem;
          color: #fff;
        }
      }

      .text {
        ellipsis();
        width: 80%;
        margin: 0.8rem auto 0;
        font-size: 1.6rem;
        line-height: 2rem;
        text-align: center;
      }
    }
  }
}
</style>
