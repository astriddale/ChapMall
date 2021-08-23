<template>
  <div id="category">
    <navbar class="nav-bar">
      <div slot="center">分类</div>
    </navbar>
    <scroll class="scroll" ref="scroll">
      <div class="scroll-item">
        <category-info
          class="item-left"
          :category="category"
          @itemClick="itemClick"
        />
        <category-content class="item" :subcategories="showSubcategories" />
      </div>
    </scroll>
  </div>
</template>

<script>
// 导入组件
import Navbar from "components/common/navbar/Navbar";
import Scroll from "components/common/scroll/Scroll.vue";
import CategoryInfo from "./childComponents/CategoryInfo.vue";
import CategoryContent from "./childComponents/CategoryContent.vue";

// 导入axios里的申请数据函数
import {
  getCategoryData,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
export default {
  name: "Category",
  components: {
    Navbar,
    Scroll,
    CategoryInfo,
    CategoryContent,
  },
  computed: {
    showSubcategories() {
      if (this.currentIndex === -1) {
        return {};
      }
      return this.categoryData[this.currentIndex].subcategories;
    },
  },
  data() {
    return {
      category: [],
      currentIndex: -1,
      categoryData: {},
    };
  },
  methods: {
    itemClick(index) {
      this._getSubcategory(index);
    },
    _getCategoryData() {
      getCategoryData().then((res) => {
        // 1.获取分类标题数据
        this.category = res.data.data.category.list;
        // 2.初始化每个类别的子数据
        for (let i = 0; i < this.category.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // 3.请求第一个分类的数据
        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.category[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data.data;
        this.categoryData = { ...this.categoryData };
      });
    },
    // _getCategoryDetail() {
    //   getCategoryDetail().then((res) => {});
    // },
  },
  created() {
    this._getCategoryData();
  },
};
</script>

<style scoped>
#category {
  height: calc(100vh - 44px - 49px);
}
.scroll {
  height: 100%;
  /* display: flex; */
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: var(--color-tint);
  font-size: 18px;
  color: white;
}
.scroll-item {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
}

.item {
  flex: 1;
}
.item-left {
  flex: 0.3;
}
</style>
