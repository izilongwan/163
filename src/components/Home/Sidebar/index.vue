<template>
  <van-popup
    v-model="show"
    position="left"
    class="popup"
    :style="{width: '60%', height: '100%', overflow: 'hidden'}"
  >
    <SidebarContent v-if="user" />

    <GoLoginBtn @click.native="onGoLogin" v-else />
  </van-popup>
</template>

<script>
import { mapState } from 'vuex'
import SidebarContent from './Content'
import GoLoginBtn from 'components/Sub/GoLoginBtn'

export default {
  name: 'Sidebar',
  data () {
    return {
      show: false
    }
  },

  computed: {
    ...mapState('user', ['user'])
  },

  components: {
    SidebarContent,
    GoLoginBtn
  },

  mounted () {
    this.$bus.$on('handleShowSidebar', (show) => this.show = show);
  },

  methods: {
    onGoLogin () {
      this.$router.push('/login');
      this.show = false;
    }
  }
}
</script>

