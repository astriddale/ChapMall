<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImg="topImg" />
      <detail-info :detailGoods="detailGoods" />
      <detail-shop :shopInfo="shopInfo" />
      <detail-image-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-params :itemParams="itemParams" />
      <detail-rate :rateInfo="rateInfo" />
    </scroll>
  </div>
</template>

<script>
//导入组件
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo.vue";
import DetailShop from "./childComps/DetailShop.vue";
import DetailImageInfo from "./childComps/DetailImageInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailRate from "./childComps/DetailRate.vue";

// 导入Bscroll组件
import Scroll from "components/common/scroll/Scroll";

// 导入网络请求
import {
  getDetailMultidata,
  DetailGoods,
  DetailShopGoods,
  DetailParamsInfo,
  DetailRateInfo,
} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      topImg: [],
      detailGoods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      rateInfo: {},
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailInfo,
    DetailShop,
    DetailImageInfo,
    Scroll,
    DetailParams,
    DetailRate,
  },
  methods: {
    getDetailMultidata() {
      // 传入轮播图信息
      getDetailMultidata(this.$route.params.iid).then((res) => {
        const data = res.data.result;
        this.topImg = data.itemInfo.topImages;

        // 传入商品详情基本信息
        this.detailGoods = new DetailGoods(
          data.itemInfo,
          data.columns,
          data.shopInfo
        );

        // 传入商品详情店铺信息
        this.shopInfo = new DetailShopGoods(data.shopInfo);

        // 传入商品详细信息
        this.detailInfo = data.detailInfo;

        // 传入参数信息
        this.itemParams = new DetailParamsInfo(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 传入评论信息
        if (data.rate.list) {
          this.rateInfo = new DetailRateInfo(
            data.rate.list[0],
            data.rate.list[0].user
          );
        }
        // console.log(this.rateInfo);
        // console.log(data.rate);
        // console.log(data.rate.list[0])
      });
    },
    imgLoad() {
      this.$refs.scroll.refresh();
    },
  },
  created() {
    // console.log(this.$route);
    this.getDetailMultidata();
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
