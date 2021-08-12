export let mixDetail = {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    scroll(position) {
      // 设置下移到指定位置时出现backtop组件
      this.isShow = -position.y > 1100;
    }
  }
}
