<template>
  <div class="category-info">
    <div
      class="category-menu"
      v-for="(item, index) in category"
      :key="index"
      @click="itemClick(index)"
      :class="{ active: currentIndex == index }"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryInfo",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    category: {
      type: Array,
      default: [],
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
};
</script>

<style scoped>
.category-info {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}
.category-menu {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>