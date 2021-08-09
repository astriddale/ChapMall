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

// 封装了详情页数据的类
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

// 店铺信息数据
export class DetailShopGoods {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.shopLogo = shopInfo.shopLogo;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
  }
}

// 参数信息数据
export class DetailParamsInfo {
  constructor(info, rule) {
    this.set = info.set;
    this.tables = rule.tables;
  }
}

// 评论信息数据
export class DetailRateInfo {
  constructor(list, user) {
    this.content = list.content;
    this.created = list.created;
    this.extraInfo = list.extraInfo;
    this.images = list.images;
    this.style = list.style;
    this.avatar = user.avatar;
    this.uname = user.uname;
  }
}
