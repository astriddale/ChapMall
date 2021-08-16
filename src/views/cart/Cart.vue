<template>
  <div class="cart">
    <cart-nav-bar class="nav-bar" />
    <scroll class="cart-content" ref="scroll">
      <cart-info />
    </scroll>
    <cart-bottom-bar />
    
  </div>
</template>

<script>
// 导入子组件
import CartInfo from "./childComps/CartInfo.vue";
import CartNavBar from "./childComps/CartNavBar";
import CartBottomBar from "./childComps/CartBottomBar.vue";

// 导入bScroll组件
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartInfo,
    Scroll,
    CartBottomBar,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.cart {
  height: calc(100vh - 44px - 49px - 49px);
}
.cart .nav-bar {
  position: relative;
  z-index: 9;
}
.cart-content {
  height: 100%;
}
</style>
