<template>
  <div class="cart">
    <cart-nav-bar class="nav-bar"/>
    <scroll class="cart-content">
      <cart-info />
    </scroll>
  </div>
</template>

<script>
// 导入子组件
import CartInfo from "./childComps/CartInfo.vue";
import CartNavBar from "./childComps/CartNavBar";

// 导入bScroll组件
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartInfo,
    Scroll,
  },
};
</script>

<style scoped>
.cart {
  height: calc(100vh - 44px - 49px);
}
.cart .nav-bar{
	position: relative;
	z-index: 9;
}
.cart-content {
  height: 100%;
}
</style>
