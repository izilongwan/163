<template>
  <van-button
    class="btn"
    round
    color="linear-gradient(to right, #4bb0ff, #6149f6)"
    type="primary"
    @click="logout"
  >退出登录</van-button>
</template>

<script>
import { TOKEN_NAME } from '@/config'
import { mapActions } from 'vuex'

export default {
  name: 'AccountLogout',

  methods: {
    ...mapActions('user', ['SetUser']),
    ...mapActions('music', ['SetMusicList']),

    logout () {
      const { $router, $bus } = this;

      localStorage.removeItem(TOKEN_NAME);
      this.SetUser(null);
      this.SetMusicList({ clear: true });
      $router.push('/recom');
      $bus.$emit('handleShowSidebar', false);
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn {
  margin: 2rem 5% 0;
  width: 90%;
}
</style>
