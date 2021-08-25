import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartDataList: [],
    changed:false
  },
  mutations,
  actions,
  getters
})

export default store;
