<template>
  <div class="container">
    <HomeHeader />
    <HomeSidebar />

    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import HomeHeader from 'components/Home/Header'
import HomeSidebar from 'components/Home/Sidebar'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSidebar
  }
}
</script>
