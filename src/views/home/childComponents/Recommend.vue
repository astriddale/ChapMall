<template>
  <div class="recommend">
    <a :href="item.link" v-for="(item, index) in recommend" :key="index">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    font-size: 14px;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
  }
  .recommend a{
    flex: 1;
    text-align: center;
  }
  .recommend img{
    width: 75px;
    height: 75px;
    margin-bottom: 10px;
  }
</style>
