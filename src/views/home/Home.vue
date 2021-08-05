<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">查派商城</div>
    </nav-bar>
    <homeSwiper :banners="banners" />
    <recommend :recommend="recommend" />
    <feature-view />
    <tab-ctron
      :titles="['流行', '新款', '精选']"
      class="tab-ctron"
      @itemClick="itemClick"
    />
    <goods-list :goods-list="goodsType" />

    <ul>
      <li>liebiao1</li>
      <li>liebiao97</li>
      <li>liebiao98</li>
      <li>liebiao99</li>
      <li>liebiao100</li>
    </ul>
  </div>
</template>

<script>
//导入公共组件
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./childComponents/HomeSwiper";
import TabCtron from "components/content/tabCtronller/TabCtron";
import GoodsList from "components/content/goods/GoodsList";

import { POP, NEW, SELL } from "common/const.js";

//导入子组件
import Recommend from "./childComponents/Recommend";
import FeatureView from "./childComponents/FeatureView";

//导入网络组件
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      // 用来保存当前首页显示的商品类型
      currentType: POP,

      //自定义数据类型
      data: [],
      banners: [],
      dKeyword: [],
      keywords: [],
      recommend: [],

      //用来保存商品数据
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    TabCtron,
    GoodsList,

    Recommend,
    FeatureView,
  },
  //在生命周期函数中（即组件创建的时候）获取数据
  created() {
    //获取首页轮播图等数据
    this.getHomeMultidata();
    //获取商品数据
    this.getHomeGoods(POP);
    this.getHomeGoods(NEW);
    this.getHomeGoods(SELL);
  },
  methods: {
    /**
     * 其他事件的方法
     */
    itemClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.data = res.data.data;
        this.banners = res.data.data.banner.list;
        this.dKeyword = res.data.data.dKeyword.list;
        this.keywords = res.data.data.keywords.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, this.goods[type].page).then((res) => {
        const goodslist = res.data.data.list;
        this.goods[type].list.push(...goodslist);
        this.goods[type].page += 1;
      });
    },
  },
  computed: {
    // 用来决定商品类型
    goodsType() {
      return this.goods[this.currentType].list
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-size: 17px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.tab-ctron {
  position: sticky;
  top: 44px;
  z-index: 10;
}
</style>
