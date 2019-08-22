/*
 * @Descripttion: sessionStorage 通用方法
 * @version: 
 * @Author: liuminghao@benlai.com
 * @Date: 2019-08-22 16:37:49
 * @LastEditTime: 2019-08-22 17:21:09
 */
import {isJson, formatData} from './utils'
let sessionStorage = window.sessionStorage;

/**
 * @description: 在sessionStorage中存数据
 * @param {type} _key:要存储的key值， _val:要存储的value值
 */
const setItem = (_key, _val) => {
  if (_key && !isJson(_key)) {
    sessionStorage.setItem(_key, JSON.stringify(_val))
  } else if (_key && isJson(_key) && !_val) {
    for (let objKey in _key) {
      this.set(objKey, _key[objKey])
    }
  }
}

/**
 * @description: 从sessionStorage中获取数据
 * @param {type} _key：获取数据的key值
 * @return: 返回获取到的数据
 */
const getItem = (_key) => {
  if(!_key) {
    return ''
  }
  return formatData(sessionStorage.getItem(_key))
}

/**
 * @description: 清空sessionStorage中缓存的所有数据
 */
const clear = () => {
  sessionStorage.clear()
}

/**
 * @description: 清空sessionStorage中缓存的指定的数据
 * @param {type} _key： 要清楚的数据的key值
 */
const removeItem = (_key) => {
  sessionStorage.removeItem(_key)
}

export default {
  setItem,
  getItem,
  clear,
  removeItem
}
