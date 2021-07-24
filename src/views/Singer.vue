<template>
  <div class="container">
    <SingerComHeader style="height: 4.6rem" title="歌手" />
    <SingerContent />
  </div>
</template>

<script>
import SingerComHeader from 'components/Sub/ComHeader';
import SingerContent from 'components/Singer/Content';

export default {
  name: 'Singer',
  components: {
    SingerComHeader,
    SingerContent
  }
};
</script>
