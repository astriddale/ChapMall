<template>
  <div>
    <nav-bar>
      <div slot="left" class="detail-left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="detail-center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="detail-navbar"
          @click="centerClick(index)"
          :class="{ active: currentIndex === index ? true : '' }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
// 导入组件
import NavBar from "components/common/navbar/Navbar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["详情", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  // 注册组件
  components: {
    NavBar,
  },
  methods: {
    centerClick(index) {
      this.currentIndex = index;
      this.$emit("centerClick", index);
    },
    backClick() {
      //给返回按钮调用router的back方法返回到进入之前的页面
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail-center {
  display: flex;
  margin: 0 40px;
}
.detail-navbar {
  flex: 1;
  font-size: var(--font-size);
}
.detail-left {
  margin-top: 5px;
}
.detail-left img {
  width: 20px;
  height: 20px;
}

.active {
  color: var(--color-high-text);
}
</style>
