<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  data() {
    return {
      imgIndex: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if (!this.imgIndex) {
        this.$emit("imgLoad");
        this.imgIndex = true;
      }
    },
  },
};
</script>

<style scoped>
</style>
