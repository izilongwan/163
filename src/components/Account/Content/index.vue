<template>
  <van-cell-group v-if="user">
    <van-cell title="昵称" icon="fire-o" :value="user.nickname" />
    <van-cell title="手机号" icon="phone-o" :value="user.phone" />
  </van-cell-group>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'AccountContent',

  computed: {
    ...mapState('user', ['user'])
  }
}
</script>
