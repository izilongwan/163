<template>
  <div id="app" class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="pos-abs view" />
      </keep-alive>
    </transition>

    <Music />
  </div>
</template>

<script>
import Music from 'views/Music'
import { TOKEN_NAME } from '@/config'
import { musicCollectionGet } from 'api/collection'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },

  components: { Music },

  mounted () {
    this.checkToken();
    document.documentElement.addEventListener('touchend', this.onTouchEnd, false);
  },

  computed: {
    ...mapState('music', ['music', 'is_playing'])
  },

  methods: {
    ...mapActions('user', ['SetUser']),
    ...mapActions('music', ['SetMusicList']),

    onTouchEnd (e) {
      clearTimeout(this.t);

      this.$nextTick(() => {
        const { id } = this.music;
        const oAudio = document.getElementById('J_audio');

        if (id) {
          oAudio.play();
          document.documentElement.removeEventListener('touchend', this.onTouchEnd, false);
          return;
        }

        this.t = setTimeout(() => id && oAudio.play());
      })
    },

    async checkToken () {
      const token = localStorage.getItem(TOKEN_NAME);

      if (token) {
        const user = JSON.parse(token);

        if (user) {
          await this.SetUser(user);

          // const [err, result] = await musicCollectionGet();

          // if (err) {
          //   localStorage.removeItem(TOKEN_NAME);
          //   return;
          // }

          // const { code, data } = result;

          // code === 0 && this.SetMusicList(data);
        }
      }
    }
  },

  watch: {
    '$route' (from, to) {
      this.transitionName =
        from.meta.index < to.meta.index ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="stylus" scoped>
.view {
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>
