<template>
  <div class="container">
    <RegisterHeader />

    <div class="form">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterHeader from 'components/Register/Header';
import RegisterForm from 'components/Register/Form';

export default {
  name: 'Register',

  components: {
    RegisterHeader,
    RegisterForm
  }
};
</script>

<style lang="stylus" scoped>
.container {
  z-index: 10;
  background-color: #fff;

  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    padding: 0 2rem;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
  }
}
</style>
