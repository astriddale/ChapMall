import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('@/views/home/Home')
const Cart = () => import('@/views/home/Home')
const Profile = () => import('@/views/home/Home')


Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '',
    component: Home
  }, {
    path: '/home',
    component: Home
  },{
    path: '/cart',
    component: Cart
  }],
  mode: 'history'
})