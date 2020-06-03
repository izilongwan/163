<template>
  <div class="container">
    <LoginHeader />

    <LoginForm />
  </div>
</template>

<script>
import LoginHeader from 'components/Login/Header';
import LoginForm from 'components/Login/Form';

export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginForm
  }
};
</script>

<style lang="stylus" scoped>
.container {
  z-index: 10;
  background-color: #fff;
}
</style>
