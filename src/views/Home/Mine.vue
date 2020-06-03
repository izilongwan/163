<template>
  <div class="container">
    <MineContent v-if="user" />

    <MineNoLogin v-else />
  </div>
</template>

<script>
import MineContent from 'components/Home/Mine/Content'
import MineNoLogin from 'components/Home/Mine/NoLogin'
import { mapState } from 'vuex'

export default {
  name: 'Mine',

  components: {
    MineContent,
    MineNoLogin
  },

  computed: {
    ...mapState('user', ['user'])
  }
}
</script>
