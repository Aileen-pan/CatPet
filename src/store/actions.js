import {reqMenus} from '../api'
import {RECEIVE_MENUS} from './mutation-types'
export default {
  async getMenus({commit} , callback){
    const result = await reqMenus()
    if(result.code === 0){
      const menus = result.data()
      commit(RECEIVE_MENUS , {menus})
      callback && callback()
    }
  },
}
