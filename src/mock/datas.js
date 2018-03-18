import Mock from 'mockjs'
import data from './data.json'
import data2 from './types.json'

//Msite数据
Mock.mock('/menus' , {code: 0 , data: data.menus})

const pingpais = data.datas.filter( item => item.index==="3162")[0].menus
Mock.mock('/pingpais' , {code: 0 , data: pingpais})

const Imgs = data.datas.filter( item => item.type_name==="通用广告模板").map( item => item.content_images)
const iconImgs = Imgs.filter((item , index) => {
  return index === 0 || index > 5
})
Mock.mock('/iconimgs' , {code: 0 , data: iconImgs})

const bigImgs = Imgs.slice(1,6)
Mock.mock('/bigimgs' , {code: 0 , data: bigImgs})

const lunBoimgs = data.datas.filter( item => item.type_name==="图片轮播广告").map( item => item.value)
const lunBos = lunBoimgs.filter((item , index) => {
  return index === 0 || index === 7
})
Mock.mock('/lunbos' , {code: 0 , data: lunBos})

const goodImgs = data.datas.filter( item => item.type_name==="天天惊喜模板").map( item => item.goods)[0].map(item => {
  var obj = {
    image:item.image.image,
    little_price:item.little_price,
    sale_price:item.sale_price
  }
  return obj
})
Mock.mock('/goodimgs' , {code: 0 , data: goodImgs})

Mock.mock('/name' , {code: 0 , data: data2.name})

const bigLists = data2.list.map(item => {
  var types = item.filter(i => i.type === 0)
  var brands = item.filter(i => i.type === 2)
  var obj3 = {types , brands}
  return obj3
})
Mock.mock('/biglists' , {code: 0 , data: bigLists})

const brandNames = data2.brand
console.log("1",brandNames)
Mock.mock('/brandnames' , {code: 0 , data: brandNames})

