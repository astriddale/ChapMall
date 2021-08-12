<template>
  <div class="cart-nav-bar">
    <div slot="center">购物车({{ getCount }})</div>
  </div>
</template>

<script>
// 导入组件
import NavBar from "components/common/navbar/Navbar";

// 导入vuex组件的mapgetters方法
import { mapGetters } from "vuex";

export default {
  name: "CartNavBar",
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
};
</script>

<style scoped>
.cart-nav-bar {
  background-color: var(--color-tint);
  font-size: 18px;
  color: white;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
</style>
