import {
  RECEIVE_MENUS,
  RECEIVE_PINGPAIS,
  RECEIVE_BIGIMGS,
  RECEIVE_ICONIMGS,
  RECEIVE_LUNBOS,
  RECEIVE_GOODIMGS
} from './mutation-types'

export default {
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
}


