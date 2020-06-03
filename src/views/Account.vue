<template>
  <div class="container">
    <AccountHeader title="我的信息" />

    <AccountContent />

    <AccountLogout />
  </div>
</template>

<script>
import AccountHeader from 'components/Sub/ComHeader'
import AccountContent from 'components/Account/Content'
import AccountLogout from 'components/Account/Logout'

export default {
  name: 'Account',
  components: {
    AccountHeader,
    AccountContent,
    AccountLogout
  }
}
</script>
