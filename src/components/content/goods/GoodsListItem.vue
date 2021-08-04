<template>
  <!-- 封装商品数据 -->
  <div class="goods-list-item">
    <a :href="goods.link">
      <img :src="goods.show.img" alt="" />
      <p class="title">{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="cfav">{{ goods.cfav }}</span>
    </a>
  </div>
</template>

  <script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.goods-list-item {
  display: flex;
  flex-wrap: wrap;
  
}

</style>
