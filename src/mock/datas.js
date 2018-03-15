import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/menus' , {code: 0 , data: data.menus})
