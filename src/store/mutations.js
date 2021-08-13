import {
  ADD_TO_CART,
  ADD_COUNT
} from './mutation_type'


export default {
  [ADD_TO_CART](state, payload) {
    // 使payload添加一个count属性并为1，然后往state的数组中push进数据
    payload.flag = true;
    payload.count = 1;
    state.cartDataList.push(payload);
  },
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  inc(state, payload) {
    if (state.cartDataList[payload].count <= 0) {
      state.cartDataList.splice(payload, 1);
    } else {
      state.cartDataList[payload].count--;
    }
  },
  add(state, payload) {
    state.cartDataList[payload].count++;
  }
}
