<template>
  <div id="detail-image-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="key">
        {{ item.key }}
      </div>
      <div v-for="(img, index) in item.list" :key="index" class="images">
        <img :src="img" alt="" @load="imgLoad" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImageInfo",
  props: {
    detailInfo: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      counter: 0,
      imgLength: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit("imgLoad");
        // alert("数据加载中~~~");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
#detail-image-info {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

#detail-image-info .key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.images img {
  width: 100%;
}
</style>
