/*
 * @Description: 头部最大化 最小化 关闭
 * @Author: zmt
 * @Date: 2021-09-27 09:34:02
 * @LastEditors: zmt
 * @LastEditTime: 2021-10-13 10:33:34
 */

import eventBus from '@/util/eventBus'

import { ipcRenderer } from 'electron'

export function register (e) {
  ipcRenderer.on('isMax', isMax)
}

export function remove () {
  ipcRenderer.removeListener('isMax', isMax)
}

export function headerIpc (type) {
  ipcRenderer.send(type)
}

function isMax (event, val) {
  eventBus.$emit('isMax', val)
}
