<template>
  <div class="container">
    <p class="not-found">page not found</p>

    <div class="tipsiz">
      <div class="tipsiz-body">
        <div class="left-arm arm"></div>

        <div class="face">
          <div class="upper-face">
            <div class="element">4</div>

            <div class="element">0</div>

            <div class="element">4</div>
          </div>

          <div class="mouth"></div>
        </div>

        <div class="right-arm arm"></div>
      </div>
    </div>

    <p>
      maybe you want to go
      <span
        @click="$router.go(-1)"
      >Back?</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.container {
  vh-center();
  font-family: 'Gamja Flower', cursive;
  z-index: 20;
  background-color: #fff;
  margin: 0;
  flex-direction: column;
}

p {
  font-family: 'Comfortaa', cursive;
  font-size: 3rem;
  text-align: center;
}

span {
  color: #f00;
  text-decoration: none;
}

.not-found {
  background-color: black;
  color: white;
  padding: 15px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.tipsiz {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.6rem;
  flex-direction: column;
}

.tipsiz-body {
  display: flex;
  align-items: center;
  margin: 2rem;
}

.arm {
  align-self: flex-end;
  width: 2.5rem;
  height: 4.5rem;
  border-top: 3px solid black;
}

.left-arm {
  border-right: 3px solid black;
  transform: skew(20deg);
}

.right-arm {
  border-left: 3px solid black;
  transform: skew(-20deg);
}

.face {
  width: 15rem;
  height: 10rem;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 15px;
}

.upper-face {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 4rem;
  margin-left: 4rem;
}

.element {
  font-size: 3.5rem;
}

.mouth {
  width: 1rem;
  height: 0.5rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: 3px solid black;
  border-bottom: 0;
}
</style>
