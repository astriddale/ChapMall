<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">查派商城</div>
    </nav-bar>
    <tab-ctron
      :titles="['流行', '新款', '精选']"
      @itemClick="itemClick"
      ref="tabctron1"
      v-show="isShowTab"
      class="tab-show"
    />
    <scroll
      class="content"
      :probe-type="3"
      :pulling-up-load="true"
      @scrollTo="scroll"
      @pullingUp="loadMore"
      ref="scroll"
    >
      <div>
        <homeSwiper :banners="banners" @imgLoad="imgLoad" />
        <recommend :recommend="recommend" />
        <feature-view />
        <tab-ctron
          :titles="['流行', '新款', '精选']"
          @itemClick="itemClick"
          ref="tabctron"
        />
        <goods-list :goods-list="goodsType" />
      </div>
    </scroll>

    <back-top @click.native="scrollTo" v-show="isShow"></back-top>
  </div>
</template>

<script>
//导入公共组件
import NavBar from "components/common/navbar/Navbar";
import HomeSwiper from "./childComponents/HomeSwiper";
import TabCtron from "components/content/tabCtronller/TabCtron";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop.vue";

// 导入自定义的常量
import { POP, NEW, SELL } from "common/const.js";
// 导入防抖函数
import { deBounce } from "common/util/deBounce";

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
      isShow: false,
      tabOffsetTop: 0,
      isShowTab: false,
      positionY: 0,
      itemImgLisener: null,

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
    Scroll,
    BackTop,
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

  mounted() {
    // console.log(this.$refs.scroll.refresh)
    this.itemImgLisener = () => {
      refresh();
    };
    const refresh = deBounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImgLoad", this.itemImgLisener);
  },

  activated() {
    // 进入当前页面时就调用scroll组件的scrollTo函数跳到之前的位置
    this.$refs.scroll.scrollTo(0, this.positionY, 0);
    // 重新刷新一次，计算高度
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // this.positionY = this.$refs.scroll.position.y;
    // 在这里获取到Bscroll对象的y的值
    this.positionY = this.$refs.scroll.scroll.y;
    this.$bus.$off("itemImgLoad", this.itemImgLisener);
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
      // this.$refs.tabctron.index = index;
      // 把当前点击的index给tabctron（下面）的currentIndex，改变他的值
      this.$refs.tabctron.currentIndex = index;
      // console.log(index)
      // 把当前点击的index给tabctron1（上面）的currentIndex，改变他的值
      this.$refs.tabctron1.currentIndex = index;
    },
    scroll(position) {
      // 设置下移到指定位置时出现backtop组件
      this.isShow = -position.y > 1100;
      // console.log(-position.y);
      this.isShowTab = -position.y > this.tabOffsetTop;
      // console.log(this.isShowTab)
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      console.log("数据加载中~~~");
    },
    imgLoad() {
      this.tabOffsetTop = this.$refs.tabctron.$el.offsetTop;
      // console.log(this.tabOffsetTop);
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
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    // 用来决定商品类型
    goodsType() {
      // console.log(this.goods[this.currentType].list);
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  /* 因为下面的conteng属性设置了绝对定位距离上方44，所以padding属性就没必要使用了 */
  /* padding-top: 44px; */
  height: calc(100vh - 44px - 49px);
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: white;
  font-size: 17px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.content {
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0; */
  height: 100%;
}
.tab-show {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}
</style>
