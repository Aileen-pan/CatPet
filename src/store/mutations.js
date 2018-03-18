import {
  //msite
  RECEIVE_MENUS,
  RECEIVE_PINGPAIS,
  RECEIVE_BIGIMGS,
  RECEIVE_ICONIMGS,
  RECEIVE_LUNBOS,
  RECEIVE_GOODIMGS,

  //class
  RECEIVE_NAME,
  RECEIVE_BIGLISTS,
  RECEIVE_BRANDNAMES
} from './mutation-types'

export default {
  //msite
  [RECEIVE_MENUS](state , {menus}){
    state.menus = menus
  },

  [RECEIVE_PINGPAIS](state , {pingpais}){
    state.pingpais = pingpais
  },

  [RECEIVE_BIGIMGS](state , {bigImgs}){
    state.bigImgs = bigImgs
  },

  [RECEIVE_ICONIMGS](state , {iconImgs}){
    state.iconImgs = iconImgs
  },

  [RECEIVE_LUNBOS](state , {lunBos}){
    state.lunBos = lunBos
  },

  [RECEIVE_GOODIMGS](state , {goodImgs}){
    state.goodImgs = goodImgs
  },

  //class
  [RECEIVE_NAME](state , {name}){
    state.name = name
  },

  [RECEIVE_BIGLISTS](state , {bigLists}){
    state.bigLists = bigLists
  },

  [RECEIVE_BRANDNAMES](state , {brandNames}){
    state.brandNames = brandNames
  },
}


