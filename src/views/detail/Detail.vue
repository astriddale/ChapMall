<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @centerClick="centerClick"
      ref="navbar"
    />
    <scroll class="content" ref="scroll" :probe-type="3" @scrollTo="scroll">
      <detail-swiper :topImg="topImg" />
      <detail-info :detailGoods="detailGoods" />
      <detail-shop :shopInfo="shopInfo" />
      <detail-image-info :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-params :itemParams="itemParams" ref="params" />
      <detail-rate :rateInfo="rateInfo" ref="rate" />
      <goods-list :goodsList="detailRecommend" ref="recommend" />
    </scroll>
    

    <back-top class="back-top" @click.native="backClick" v-show="isShow" />
    <detail-bottom-bar />
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
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';

// 导入Bscroll组件
import Scroll from "components/common/scroll/Scroll";

// 导入网络请求
import {
  getDetailMultidata,
  DetailGoods,
  DetailShopGoods,
  DetailParamsInfo,
  DetailRateInfo,
  getDetailRecommend,
} from "network/detail.js";

// 导入防抖函数
import { deBounce } from "common/util/deBounce";

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
      detailRecommend: [],
      itemImgLisener: null,
      isShow: false,
      positionY: [],
      currentIndex: 0,
      // 定义防抖函数的封装
      getPositionY: null,
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
    GoodsList,
    BackTop,
    DetailBottomBar,
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
      getDetailRecommend().then((res) => {
        this.detailRecommend = res.data.data.list;
        // console.log(this.detailRecommend);
      });
    },
    imgLoad() {
      this.$refs.scroll.refresh();

      // 调用经过防抖的函数，在created里面
      this.getPositionY();
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    scroll(position) {
      // 设置下移到指定位置时出现backtop组件
      this.isShow = -position.y > 1100;

      const positions = -position.y;
      // 设置下滑到某个位置时，对应的模块名处于活跃状态
      for (let index = 0; index < this.positionY.length - 1; index++) {
        if (
          this.currentIndex !== index &&
          positions >= this.positionY[index] &&
          positions < this.positionY[index + 1]
        ) {
          this.currentIndex = index;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
    },
    // navbar组件传过来的事件---控制navbar的点击
    centerClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.positionY[index], 500);
    },
  },
  created() {
    // console.log(this.$route);
    this.getDetailMultidata();

    // 设置点击navbar跳转到对应位置的参数;然后在图像加载函数里进行调用
    this.getPositionY = deBounce(() => {
      this.positionY = [];
      this.positionY.push(0);
      this.positionY.push(this.$refs.params.$el.offsetTop);
      this.positionY.push(this.$refs.rate.$el.offsetTop);
      this.positionY.push(this.$refs.recommend.$el.offsetTop);
      this.positionY.push(Number.MAX_VALUE);
    }, 100);
  },
  updated() {},
  mounted() {
    // console.log(this.$refs.scroll.refresh)
    this.itemImgLisener = () => {
      refresh();
    };
    const refresh = deBounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImgLoad", this.itemImgLisener);
  },
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgLisener);
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
  bottom: 58px;
}
.back-top {
  right: 50px;
  bottom: 140px;
}
</style>
