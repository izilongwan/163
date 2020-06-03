<template>
  <div class="list-wrap">
    <ul class="list">
      <Sub v-for="item of list" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import Sub from './Sub';

export default {
  name: 'InfoList',
  components: { Sub },
  props: {
    list: Array
  }
}
</script>
