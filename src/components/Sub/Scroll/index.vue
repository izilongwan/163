<template>
  <div class="scroll-wrap pos-abs" ref="wrap">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import tools from 'utils/tools';

export default {
  name: 'Scroll',

  props: {
    scrollAction: Function,
    isScrollToTop: Boolean,
  },

  mounted () {
    this.initBS();
  },

  methods: {
    initBS () {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrap, {
          probeType: 3,
          click: true
        });

        this.scroll.refresh();

        this.scrollAction && this.scroll.on('scroll', this.scrollAction);
      });
    }
  },

  deactivated () {
    this.isScrollToTop && this.scroll.scrollTo(0, 0);
  }
};
</script>
