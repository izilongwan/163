<template>
  <div class="content">
    <ContentList />

    <ContentLogo />
  </div>
</template>

<script>
import ContentList from './List'
import ContentLogo from './Logo'

export default {
  name: 'SidebarContent',
  components: {
    ContentList,
    ContentLogo
  }
}
</script>
