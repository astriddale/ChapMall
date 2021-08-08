<template>
  <div id="detail-shop">
    <div class="logo">
      <img :src="shopInfo.shopLogo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="info">
      <div class="shop-info">
        <div class="csells">
          <div>
            {{ shopInfo.cSells | sellCountFilter }}
          </div>
          <div class="size">总销量</div>
        </div>
        <div class="cgoods">
          <div>
            {{ shopInfo.cGoods }}
          </div>
          <div class="size">全部宝贝</div>
        </div>
        <div class="shop-border">
          <div
            class="shop-score"
            v-for="(item, index) in shopInfo.score"
            :key="index"
          >
            <span>{{ item.name }}</span>
            <span class="not-better" :class="{ better: item.isBetter }">{{
              item.score
            }}</span>
            <span
              class="not-better better-margin"
              :class="{ better: item.isBetter }"
              >{{ item.isBetter ? "高" : "低" }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shopInfo: {
      type: Object,
      default: {},
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.logo {
  margin: 20px 10px;
  position: relative;
}
.logo img {
  width: 60px;
  height: 60px;
  border-radius: 60px;
}
.logo span {
  font-size: 17px;
  color: rgb(29, 28, 28);
  position: absolute;
  top: 20px;
  left: 70px;
}
.info .shop-info {
  display: flex;
  justify-content: flex-start;

  align-items: center;
}
.info .shop-info .csells,
.cgoods {
  color: black;
  text-align: center;
  font-size: 18px;
}
.size {
  font-size: 12px;
}
.info .shop-info div {
  flex: 1;
}
.info .shop-info .cgoods {
  margin-left: -30px;
}
.shop-border {
  border-left: 1px solid rgb(218, 214, 214);
  padding-left: 60px;
  position: relative;
}
.shop-border .shop-score {
  margin: 10px -35px;
  font-size: 14px;
  color: rgb(32, 32, 32);
}
.shop-border .shop-score span {
  margin-right: 5px;
}
.shop-bottom {
  text-align: center;
  margin-top: 15px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
.not-better {
  color: chartreuse;
}
.better {
  color: red;
}
.better-margin {
  position: absolute;
  /* top: 0; */
  right: 30px;
}
</style>
