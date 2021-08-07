<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImg" :key="index">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailSwiper",
  props: {
    topImg: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {},
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>
