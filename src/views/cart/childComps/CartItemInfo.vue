<template>
  <div class="cart-item-info">
    <div v-for="(item, index) in cartData" :key="index" class="cart-item">
      <check-box
        @click.native="checkButton(index)"
        :class="{ check: $store.state.cartDataList[index].flag }"
      />
      <div class="left">
        <img :src="item.image" alt="" />
      </div>
      <div class="center">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.desc }}</div>
        <div class="price">￥{{ item.price }}</div>
      </div>
      <div class="right">
        <button @click="inc(index)">-</button>
        <span> {{ item.count }} </span>
        <button @click="add(index)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkBox/CheckBox.vue";

export default {
  name: "CartNavBar",
  props: {
    cartData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    inc(index) {
      this.$emit("inc", index);
    },
    add(index) {
      this.$emit("add", index);
    },
    checkButton(index) {
      this.$store.state.cartDataList[index].flag =
        !this.$store.state.cartDataList[index].flag;
    },
  },
  components: {
    CheckBox,
  },
};
</script>

<style scoped>
.cart-item-info {
  padding: 15px 0;
}
.cart-item img {
  width: 80px;
  height: 120px;
  border-radius: 10px;
}
.cart-item {
  display: flex;
  border-bottom: 1px solid rgb(202, 199, 199);
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.left,
.center,
.right {
  flex: 1;
}
.center {
  position: relative;
}
.center .title {
  width: 160px;
  overflow: hidden;
  /* 将多余的文字按照...的方式进行显示 */
  text-overflow: ellipsis;
  /* 使文字按从左往右的方向排列 */
  white-space: nowrap;
  margin: 5px 10px;
}
.center .desc {
  height: 32px;
  overflow: hidden;
  /* 将多余的文字按照...的方式进行显示 */
  text-overflow: ellipsis;
  /* 使文字按从左往右的方向排列 */
  /* white-space: nowrap; */
  margin: 10px 10px;
}
.center .price {
  position: absolute;
  bottom: 0px;
  margin: 0 0 0 10px;
  color: var(--color-high-text);
  font-size: 18px;
  font-weight: 600;
}
.right {
  margin-top: 103px;
}
.right button {
  width: 15px;
  height: 19px;
  border: 1px solid rgb(247, 135, 200);
  font-size: 18px;
  line-height: 10px;
  background-color: #fff;
}
.right span {
  font-size: 16px;
}
.check {
  background-color: rgb(247, 135, 200);
  border: 1px solid rgb(247, 135, 200);
}
</style>
