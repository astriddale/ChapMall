<template>
  <!-- 封装商品数据 -->
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goods="item"
    >
    </goods-list-item>
  </div>
</template>

  <script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default: [],
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style scoped>
</style>
