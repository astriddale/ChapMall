<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swiper :topImg="topImg" />
  </div>
</template>

<script>
//导入组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";

// 导入网络请求
import { getDetailMultidata } from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      topImg: [],
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  methods: {
    getDetailMultidata() {
      getDetailMultidata(this.$route.params.iid).then((res) => {
        this.topImg = res.data.result.itemInfo.topImages;
        console.log(res);
      });
    },
  },
  created() {
    // console.log(this.$route);
    this.getDetailMultidata();
  },
};
</script>

<style scoped>
</style>
