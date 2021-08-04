// 导入axios函数
import {
  request
} from './request'
// 以函数的形式导出接口
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data?type=' + type + '&page=' + page
  })
}
