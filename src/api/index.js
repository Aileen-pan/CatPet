import ajax from './ajax'

export const reqMenus = () => ajax('/menus')
export const reqPingpais = () => ajax('/pingpais')
export const reqBigimgs = () => ajax('/bigimgs')
export const reqIconimgs = () => ajax('/iconimgs')
export const reqLunbos = () => ajax('/lunbos')
export const reqGoodimgs = () => ajax('/goodimgs')
