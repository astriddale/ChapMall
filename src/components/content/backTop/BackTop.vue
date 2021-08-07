<template>
  <!-- 封装商品数据 -->
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 65px;
  right: 8px;
}
.back-top img {
  height: 43px;
  width: 43px;
  z-index: 9;
}
</style>
