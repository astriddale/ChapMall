<template>
  <!-- 封装商品数据 -->
  <div class="goods">
    <a :href="goods.link">
      <img :src="goods.show.img" alt="" />
      <div class="goods-info">
        <p class="title">{{ goods.title }}</p>
        <span class="price">￥{{ goods.price }}</span>
        <span class="cfav">{{ goods.cfav }}</span>
      </div>
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
.goods {
  padding-bottom: 40px;
  position: relative;
  width: 28%;
}

.goods img {
  width: 100%;
  border-radius: 10px;
  height: 180px;
}

.goods-info {
  font-style: 14px;
  color: #333;
  position: absolute;
  overflow: hidden;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}

.goods-info .title {
  overflow: hidden;
  /* 将多余的文字按照...的方式进行显示 */
  text-overflow: ellipsis;
  /* 使文字按从左往右的方向排列 */
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .cfav {
  position: relative;
}
/* 伪元素，在cfav的前面加上图标 */
.goods-info .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
