<template>
  <div class="loading-wrap pos-abs top-hd">
    <div class="balls">
      <span class="ball"></span>
      <span class="ball"></span>
      <span class="ball"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>


<style lang="stylus" scoped>
@import '~styles/mixins.styl';
@import '~styles/variables.styl';

.loading-wrap {
  display: flex;
  justify-content: center;
  background-color: #fff;

  .balls {
    margin-top: 10rem;
    width: 5rem;
    height: 5rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .ball {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: $defaultBg;

    &:nth-of-type(1) {
      transform: translateX(-100%);
      animation: left-swing 0.5s ease-in alternate infinite;
    }

    &:nth-of-type(3) {
      transform: translateX(-95%);
      animation: right-swing 0.5s ease-out alternate infinite;
    }
  }
}

@keyframes left-swing {
  50%, 100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
