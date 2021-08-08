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

export class DetailGoods {
  constructor(itemInfo, columns, shopInfo) {
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.title = itemInfo.title;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = shopInfo.services;
    this.name = shopInfo.name;
  }
}


export class DetailShopGoods {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}
