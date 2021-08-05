<template>
  <!-- 封装商品数据的导航条 -->
  <div class="tab-ctron">
    <!-- 使用v-for遍历数据，然后使用动态绑定的方法来监听活跃的div并添加样式 -->
    <div
      class="tab-ctron-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex ? true : '' }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

  <script>
export default {
  name: "TabCtron",
  props: {
    titles: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      // 改变currentIndex的值
      this.currentIndex = index;

      // 发出itemClick事件
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.tab-ctron {
  display: flex;
  font-size: 16px;
  text-align: center;
  margin: 10px 0px;
  background-color: #fff;
  line-height: 40px;
}
.tab-ctron-item {
  flex: 1;
}
.tab-ctron-item span {
  padding: 5px;
}

.active span {
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>
