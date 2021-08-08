<template>
  <div id="detail-info">
    <div class="title">【{{ detailGoods.name }}】{{ detailGoods.title }}</div>
    <div class="price">
      <span class="new-price">{{ detailGoods.price }} </span>
      <span class="old-price">{{ detailGoods.oldPrice }}</span>
      <span
        class="discountDesc"
        :style="{ backgroundColor: detailGoods.discountBgColor }"
        >{{ detailGoods.discountDesc }}</span
      >
    </div>
    <div class="number">
      <span
        class="columns"
        v-for="(item, index) in detailGoods.columns"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div class="services">
      <span v-for="(item, index) in detailGoods.services" :key="index">
        <img :src="item.icon" alt="" />{{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    detailGoods: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.title {
  margin: 15px 10px;
  color: rgb(26, 25, 25);
}
.price {
  margin-bottom: 20px;
}
.price .new-price {
  margin-left: 10px;
  color: var(--color-high-text);
  font-size: 25px;
}
.price .old-price {
  font-size: 15px;
  text-decoration: line-through;
}
.price .discountDesc {
  font-size: 15px;
  border-radius: 5px;
  color: black;
  padding: 1px;
}
.number {
  margin: 10px 10px;
  /* border-bottom: 1px solid rgb(221, 216, 216); */
  padding-bottom: 10px;
  font-size: 15px;
  /* display: flex; */
  text-align: center;
  display: flex;
}
.number .columns {
  flex: 1;
}
.services {
  display: flex;
  font-size: 10px;
  color: rgb(43, 40, 40);
  justify-content: space-between;
  /* border-bottom: 3px solid rgb(228, 228, 228); */
  box-shadow: 0 0 3px rgb(75, 71, 71);
}
.services span {
  flex: 1;
  margin: 20px 10px;
}
.services span img {
  width: 10px;
  height: 10px;
}
</style>
