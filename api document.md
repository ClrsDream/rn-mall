# 接口域名  https://api.it120.cc/mall

该域名作为一个系统参数，配置在 RN 的全局 config 里面，需要方便进行修改

# 1、获取商城名称
## 接口地址
{接口域名}/config/get-value

## 请求方式
POST 或 GET

## 请求参数
key = mallName

## 接口返回
```lua
{
  "code": 0,
  "data": {
    "creatAt": "2017-01-16 12:09:31",
    "dateType": 0,
    "id": 4,
    "key": "test",
    "remark": "测试",
    "updateAt": "2017-01-16 12:09:31",
    "userId": 2,
    "value": "sjkhdskjfhkjsdh"
  },
  "msg": "success"
}
```
### 获取 value 字段作为商城的名称


# 2、获取Banner滚动图片
## 接口地址
{接口域名}/banner/list

## 请求方式
POST 或 GET

## 请求参数
无

## 接口返回
```lua
{
  "code": 0,
  "data": [
    {
      "businessId": 0,
      "dateAdd": "2017-03-01 14:13:11",
      "dateUpdate": "2017-03-01 14:38:54",
      "id": 1,
      "linkUrl": "",
      "paixu": 0,
      "picUrl": "https://cdn.it120.cc/apifactory/2017/03/01/b92442846ce7496efd0fb4e8d48d0062.png",
      "remark": "",
      "status": 0,
      "statusStr": "显示",
      "title": "测试",
      "type": "android",
      "userId": 2
    }
  ],
  "msg": "success"
}
```
picUrl 为图片路径地址；

businessId 不为 0 的时候，点击该图片打开 businessId 编号的商品详情页面

# 3、获取商品分类
## 接口地址
{接口域名}/shop/goods/category/all

## 请求方式
POST 或 GET

## 请求参数
无

## 接口返回
```lua
{
  "code": 0,
  "data": [
    {
      "dateAdd": "2017-03-22 09:56:43",
      "icon": "",
      "id": 1,
      "isUse": true,
      "key": "cd",
      "level": 1,
      "name": "菜单",
      "paixu": 0,
      "pid": 0,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:04:11",
      "icon": "",
      "id": 2,
      "isUse": true,
      "key": "cdcc",
      "level": 2,
      "name": "炒菜",
      "paixu": 0,
      "pid": 1,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:04:32",
      "icon": "",
      "id": 3,
      "isUse": true,
      "key": "cdccxc",
      "level": 3,
      "name": "湘菜",
      "paixu": 0,
      "pid": 2,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:20:20",
      "icon": "",
      "id": 4,
      "isUse": true,
      "key": "xcr",
      "level": 4,
      "name": "小炒肉",
      "paixu": 0,
      "pid": 3,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:22:49",
      "icon": "",
      "id": 5,
      "isUse": true,
      "key": "aaaa",
      "level": 5,
      "name": "aaa",
      "paixu": 0,
      "pid": 4,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:37:43",
      "icon": "",
      "id": 6,
      "isUse": true,
      "key": "jsyl",
      "level": 1,
      "name": "酒水饮料",
      "paixu": 0,
      "pid": 0,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:37:53",
      "icon": "",
      "id": 7,
      "isUse": true,
      "key": "js",
      "level": 2,
      "name": "酒水",
      "paixu": 0,
      "pid": 6,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:49:29",
      "icon": "",
      "id": 10,
      "isUse": true,
      "key": "bj",
      "level": 3,
      "name": "白酒",
      "paixu": 0,
      "pid": 7,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:38:02",
      "icon": "",
      "id": 8,
      "isUse": true,
      "key": "yl",
      "level": 2,
      "name": "饮料",
      "paixu": 0,
      "pid": 6,
      "type": "",
      "userId": 2
    },
    {
      "dateAdd": "2017-03-22 10:38:20",
      "icon": "",
      "id": 9,
      "isUse": true,
      "key": "yl",
      "level": 2,
      "name": "果汁",
      "paixu": 0,
      "pid": 6,
      "type": "",
      "userId": 2
    }
  ],
  "msg": "success"
}
```
# 4、获取商品列表
## 接口地址
{接口域名}/shop/goods/list

## 请求方式
POST 或 GET

## 请求参数
categoryId = 上面接口中指定的分类ID

## 接口返回
```lua
{
  "code": 0,
  "data": [
    {
      "categoryId": 1,
      "characteristic": "",
      "dateAdd": "2017-03-27 09:43:34",
      "id": 9,
      "logisticsId": 0,
      "minPrice": 0,
      "name": "没有规格尺寸",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 0,
      "originalPrice": 0,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/26/235e62727a2e46b75530764bd4eccbcf.jpeg",
      "recommendStatus": 0,
      "recommendStatusStr": "普通",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 0,
      "userId": 2,
      "views": 0
    },
    {
      "categoryId": 3,
      "characteristic": "测试商品",
      "dateAdd": "2017-03-26 20:46:39",
      "dateUpdate": "2017-03-26 20:47:30",
      "id": 8,
      "logisticsId": 8,
      "minPrice": 50,
      "name": "Mac 2016新款",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 0,
      "originalPrice": 100,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/26/e56a0c6e0443d416b279bcb07a890e43.png",
      "propertyIds": ",2,",
      "recommendStatus": 0,
      "recommendStatusStr": "普通",
      "shopId": 1,
      "status": 0,
      "statusStr": "上架",
      "stores": 10,
      "userId": 2,
      "views": 0
    },
    {
      "categoryId": 10,
      "characteristic": "",
      "dateAdd": "2017-03-26 16:03:38",
      "dateUpdate": "2017-03-26 21:00:51",
      "id": 7,
      "logisticsId": 0,
      "minPrice": 0,
      "name": "1111",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 0,
      "originalPrice": 0,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/26/9ade208ed4b8db9155d4bd6cb82401ea.png",
      "propertyIds": ",1,2,4,",
      "recommendStatus": 1,
      "recommendStatusStr": "推荐",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 0,
      "userId": 2,
      "views": 0
    },
    {
      "categoryId": 1,
      "characteristic": "",
      "dateAdd": "2017-03-26 16:03:27",
      "id": 6,
      "logisticsId": 0,
      "minPrice": 0,
      "name": "1111",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 0,
      "originalPrice": 0,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/26/9ade208ed4b8db9155d4bd6cb82401ea.png",
      "propertyIds": ",1,2,4,",
      "recommendStatus": 0,
      "recommendStatusStr": "普通",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 0,
      "userId": 2,
      "views": 0
    },
    {
      "categoryId": 1,
      "characteristic": "",
      "dateAdd": "2017-03-26 16:02:24",
      "id": 5,
      "logisticsId": 0,
      "minPrice": 0,
      "name": "1111",
      "numberFav": 0,
      "numberGoodReputation": 0,
      "numberOrders": 0,
      "originalPrice": 0,
      "paixu": 0,
      "pic": "https://cdn.it120.cc/apifactory/2017/03/26/9ade208ed4b8db9155d4bd6cb82401ea.png",
      "propertyIds": ",1,2,4,",
      "recommendStatus": 0,
      "recommendStatusStr": "普通",
      "shopId": 0,
      "status": 0,
      "statusStr": "上架",
      "stores": 0,
      "userId": 2,
      "views": 0
    }
  ],
  "msg": "success"
}
```
