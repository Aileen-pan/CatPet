import {
  reqMenus,
  reqPingpais,
  reqBigimgs,
  reqIconimgs,
  reqLunbos,
  reqGoodimgs,

  reqName,
  reqBiglists,
  reqBrandnames
} from '../api'


import {
  RECEIVE_MENUS,
  RECEIVE_PINGPAIS,
  RECEIVE_BIGIMGS,
  RECEIVE_ICONIMGS,
  RECEIVE_LUNBOS,
  RECEIVE_GOODIMGS,

  RECEIVE_NAME,
  RECEIVE_BIGLISTS,
  RECEIVE_BRANDNAMES

} from './mutation-types'


export default {
  //msite
  async getMenus({commit} , callback){
    const result = await reqMenus()
    if(result.code === 0){
      const menus = result.data
      commit(RECEIVE_MENUS , {menus})
      callback && callback()
    }
  },

  async getPingpais({commit} , callback){
    const result = await reqPingpais()
    if(result.code === 0){
      const pingpais = result.data
      commit(RECEIVE_PINGPAIS , {pingpais})
      callback && callback()
    }
  },

  async getBigimgs({commit} , callback){
    const result = await reqBigimgs()
    if(result.code === 0){
      const bigImgs = result.data
      commit(RECEIVE_BIGIMGS , {bigImgs})
      callback && callback()
    }
  },

  async getIconimgs({commit} , callback){
    const result = await reqIconimgs()
    if(result.code === 0){
      const iconImgs = result.data
      commit(RECEIVE_ICONIMGS , {iconImgs})
      callback && callback()
    }
  },

  async getLunbos({commit} , callback){
    const result = await reqLunbos()
    if(result.code === 0){
      const lunBos = result.data
      commit(RECEIVE_LUNBOS , {lunBos})
      callback && callback()
    }
  },

  async getGoodimgs({commit} , callback){
    const result = await reqGoodimgs()
    if(result.code === 0){
      const goodImgs = result.data
      commit(RECEIVE_GOODIMGS , {goodImgs})
      callback && callback()
    }
  },

  //class
  async getName({commit} , callback){
    const result = await reqName()
    if(result.code === 0){
      const name = result.data
      commit(RECEIVE_NAME , {name})
      callback && callback()
    }
  },

  async getBiglists({commit} , callback){
    const result = await reqBiglists()
    if(result.code === 0){
      const bigLists = result.data
      commit(RECEIVE_BIGLISTS , {bigLists})
      callback && callback()
    }
  },

  async getBrandnames({commit} , callback){
    const result = await reqBrandnames()
    console.log("22")
    if(result.code === 0){
      const brandNames = result.data
      console.log("22",brandNames)
      commit(RECEIVE_BRANDNAMES , {brandNames})
      callback && callback()
    }
  },

}
