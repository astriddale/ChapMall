<template>
  <div class="cart-bottom-bar">
    <div class="left">
      <check-box :class="{ check: isChecked }" @click.native="isCheck" />
      <span>全选</span>
    </div>
    <div class="center">
      <span>总计：{{ totalPrice }}</span>
    </div>
    <div class="right">
      <span>去计算({{ totalCount }})</span>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkBox/CheckBox.vue";
export default {
  components: { CheckBox },
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      // console.log(this.$store.state.cartDataList.filter((item) => item.flag));
      return this.$store.state.cartDataList
        .filter((item) => item.flag)
        .reduce((prev, cur, index) => {
          // console.log(cur)
          return prev + cur.count * cur.price;
        }, 0)
        .toFixed(2);
    },
    totalCount() {
      return this.$store.state.cartDataList.filter((item) => item.flag).length;
    },
    isChecked() {
      if (this.$store.state.cartDataList.length == 0) return false;
      return !this.$store.state.cartDataList.find(
        (item) => item.flag === false
      );
    },
  },
  methods: {
    isCheck() {
      // 找到是否有没有选中的物品
      let isSellectAll = this.$store.state.cartDataList.find(
        (item) => !item.flag
      );
      if (isSellectAll) {
        // 如果有没有选中的物品，则点击全部选中
        this.$store.state.cartDataList.forEach((item) => {
          item.flag = true;
        });
      } else {
        // 如果全都选中了，点击则设置为全未选中
        this.$store.state.cartDataList.forEach((item) => {
          item.flag = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  position: relative;
  z-index: 9;
  height: 44px;
  display: flex;
  background-color: #eeeeee;
  font-size: 15px;
  color: rgb(44, 41, 41);
}
.cart-bottom-bar .left {
  width: 80px;
  display: flex;
}
.cart-bottom-bar .left span {
  line-height: 44px;
}
.cart-bottom-bar .center {
  flex: 1;
  line-height: 44px;
  margin-left: 20px;
}
.cart-bottom-bar .right {
  width: 100px;
  background-color: #ff8198;
  line-height: 44px;
  text-align: center;
}
.check {
  background-color: rgb(247, 135, 200);
  border: 1px solid rgb(247, 135, 200);
}
</style>
