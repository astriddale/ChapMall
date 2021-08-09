<template>
  <div id="detail-rate">
    <div class="user-rate">
      <span> 用户评价 </span>
      <span> 更多 </span>
    </div>
    <div v-if="Object.keys(rateInfo).length !== 0">
      <div class="user-img">
        <img :src="rateInfo.avatar" alt="" />
        <span>{{ rateInfo.uname }}</span>
      </div>
      <div class="rate-padd">
        <div class="user-content">{{ rateInfo.content }}</div>
        <div class="user-small-info">
          <span>
            {{ rateInfo.created | timeInfo }}
          </span>
          <span>
            {{ rateInfo.style }}
          </span>
        </div>
        <div class="user-info-img">
          <img
            v-for="(item, index) in rateInfo.images"
            :key="index"
            :src="item"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="not" v-else>暂无评论</div>
  </div>
</template>

<script>
import { formatDate } from "common/util/util";

export default {
  name: "DetailRate",
  props: {
    rateInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    timeInfo(value) {
      const time = new Date(value * 1000 + 63072000000);
      return formatDate(time, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
#detail-rate {
  border-bottom: 5px solid #f2f5f8;
}
.user-rate {
  margin: 0 15px;
  border-bottom: 1px solid rgba(212, 212, 212, 0.5);
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: black;
}
.user-img {
  padding: 0 15px;
  margin-top: 15px;
  height: 60px;
  line-height: 60px;
  display: flex;
}
.user-img img {
  height: 60px;
  width: 60px;
  border-radius: 60px;
}
.user-img span {
  display: inline-block;
  font-size: 18px;
  color: rgb(34, 33, 33);
  flex: 1;
  margin-left: 20px;
}
.user-small-info {
  margin: 10px 0;
  font-size: 13px;
}
.user-small-info span {
  margin-right: 15px;
}
.rate-padd {
  padding: 15px 15px;
}
.user-info-img {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.user-info-img img {
  width: 80px;
  height: 80px;
  margin-right: 5px;
}
.not {
  padding: 15px 10px;
}
</style>
