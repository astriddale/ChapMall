// 导入axios函数
import {
  request
} from './request'
// 以函数的形式导出接口
export function getDetailMultidata(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
