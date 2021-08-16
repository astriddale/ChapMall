import Toast from './Toast'


const obj = {}

obj.install = function (Vue) {
  // 1:创建一个构造器
  const toastConstructor = Vue.extend(Toast);
  // 2:new的方式，可以根据组件构造器可以创建出来一个组件对象
  const toast = new toastConstructor();
  // 3:将组件对象化，手动挂载到某一个标签上
  toast.$mount(document.createElement('div'))
  // 4:toast.$el对应的就是div对象
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}

export default obj;
