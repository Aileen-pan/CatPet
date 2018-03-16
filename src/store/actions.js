import {
  reqMenus,
  reqPingpais,
  reqBigimgs,
  reqIconimgs,
  reqLunbos,
  reqGoodimgs
} from '../api'


import {
  RECEIVE_MENUS,
  RECEIVE_PINGPAIS,
  RECEIVE_BIGIMGS,
  RECEIVE_ICONIMGS,
  RECEIVE_LUNBOS,
  RECEIVE_GOODIMGS
} from './mutation-types'


export default {
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
      callback && goodImgs()
    }
  },
}
