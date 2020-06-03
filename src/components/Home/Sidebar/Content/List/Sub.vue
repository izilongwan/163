<template>
  <router-link class="item" :to="item.path">
    <div class="first">
      <van-icon :name="item.icon" />
      <em class="txt">{{item.text}}</em>
    </div>
    <van-icon class="sm" name="arrow" />
  </router-link>
</template>

<script>
export default {
  name: 'SettingSub',
  props: {
    item: Object
  }
}
</script>

<style lang="stylus" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
  font-size: 1.4rem;

  & + .item {
    border-top: 1px solid #eee;
  }

  .txt {
    margin-left: 1rem;
  }

  .sm {
    color: #999;
  }
}
</style>
