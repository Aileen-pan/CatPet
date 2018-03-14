import {
  RECEIVE_MENUS
} from './mutation-types'

export default {
  [RECEIVE_MENUS](state , {menus}){
    state.menus = menus
  }
}
