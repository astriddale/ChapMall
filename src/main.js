import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import toast from './components/content/toast/index'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
// 添加事件总线
Vue.prototype.$bus = new Vue()
// 使用自己封装的toast插件（弹窗）
Vue.use(toast);
// 使用图片的懒加载插件
Vue.use(VueLazyLoad)

//引入
import fastClick from 'fastclick'
//初始化FastClick实例。在页面的DOM文档加载完成后
fastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
