<template>
  <!-- 定义app上方标签 -->
  <div class="nav-bar">
    <!-- 使用具名插槽的方式 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left,
.right {
  width: 50px;
}
.center {
  flex: 1;
}
</style>


