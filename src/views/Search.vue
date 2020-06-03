<template>
  <div class="container">
    <SearchHeader />

    <SearchContent />
  </div>
</template>

<script>
import SearchHeader from 'components/Search/Header'
import SearchContent from 'components/Search/Content'

export default {
  name: 'Search',
  components: {
    SearchHeader,
    SearchContent
  }
}
</script>
