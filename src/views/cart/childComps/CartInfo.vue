<template>
  <div class="cart-info">
    <div v-if="isShowTest">
      <cart-item-info :cart-data="cartDataList" @inc="inc" @add="add" />
      <div></div>
    </div>
    <div class="not-goods" v-else>
      <span> 购物车空空如也，快去购物吧~~~ </span>
      <button>点击购物</button>
    </div>
  </div>
</template>

<script>
import CartItemInfo from "./CartItemInfo.vue";

export default {
  name: "CartInfo",
  data() {
    return {
      cartDataList: [],
      isShow: false,
    };
  },
  components: {
    CartItemInfo,
  },
  created() {
    this.cartDataList = this.$store.state.cartDataList;
  },
  computed: {
    isShowTest() {
      if (this.cartDataList.length != 0) {
        this.isShow = true;
      }
      return this.isShow;
    },
  },
  methods: {
    inc(index) {
      this.$store.commit("inc", index);
    },
    add(index) {
      this.$store.commit("add", index);
    },
  },
};
</script>

<style scoped>
.not-goods {
  margin: 300px auto;
  text-align: center;
}
.not-goods button {
  display: block;
  border: 1px solid #ff8198;
  margin: 20px auto;
  text-align: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 5px;
  color: #ff5777;
}
</style>
