import {
  ADD_TO_CART,
  ADD_COUNT
} from './mutation_type'

export default {
  addCart(context, payload) {
    /**
     * 或者使用以下方法：
        let product = null;
        for (let item of context.state.cartDataList) {
          if (item.id === payload.id) {
            product = item
          }
        }
     * 
     */
    return new Promise((resolve, reject) => {
      let product = context.state.cartDataList.find(item => {
        return item.id === payload.id
      })
      // console.log(product)
      if (product) {
        // 将遍历比较完后的数据提交到mutations的addCount事件，实现数量+1的效果
        context.commit(ADD_COUNT, product)
        resolve("当前商品数量加一")
      } else {
        // 如果state的数组中没有当前id的数据，则将传来的数据提交到addToCart事件
        context.commit(ADD_TO_CART, payload)
        resolve("加入购物车成功")
      }
    })
  }
}
