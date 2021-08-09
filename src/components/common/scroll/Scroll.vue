<template>
  <!-- 封装商品数据 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: {},
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullingUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      pullingUpLoad: this.pillingUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollTo", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    //封装刷新函数
    refresh() {
      this.scroll && this.scroll.refresh();
    },

    // 封装结束刷新函数
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>
