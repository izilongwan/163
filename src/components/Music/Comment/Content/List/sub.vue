<template>
  <div class="item">
    <div class="avatar">
      <div
        class="avatar-bd"
        v-lazy-container="{ selector: 'img' }"
      >
        <img
          :data-src="item.user.avatarUrl"
          :alt="item.user.nickname"
        />

        <p class="nickname">{{item.user.nickname}}</p>
      </div>
    </div>

    <div class="info">
      <span class="liked-count">
        <van-icon
          class-prefix="icon iconfont icon-great"
          name="extra"
        />
        {{item.likedCount}}
      </span>

      <p class="content">{{item.content}}</p>

      <span class="time">{{item.time}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentsItem',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.item {
  padding: 1rem 2rem;
  flex-row();

  & + .item {
    border-top: 1px solid #eee;
  }

  .avatar {
    vh-center();

    .avatar-bd {
      width: 5rem;
      flex-column();
      vh-center();

      img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
      }

      .nickname {
        width: 100%;
        margin-top: 1rem;
        color: #666;
        text-align: center;
        ellipsis();
      }
    }
  }

  .info {
    position: relative;
    flex: 1;
    margin-left: 1rem;
    font-size: 1.4rem;

    .liked-count {
      position: absolute;
      top: 0;
      right: 0;
      color: #999;

      .icon {
        margin-right: 0.2rem;
        color: #999;
        font-size: 1.5rem;
      }
    }

    .content {
      margin: 2rem 0;
      text-indent: 2rem;
      line-height: 2rem;
    }

    .time {
      color: #999;
      margin-left: 2rem;
    }
  }
}
</style>
