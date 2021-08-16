<template>
  <div id="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "数据加载中~~~",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 1000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
#toast {
  color: aliceblue;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 999;
  padding: 15px 30px;
  border-radius: 15px;
}
</style>
