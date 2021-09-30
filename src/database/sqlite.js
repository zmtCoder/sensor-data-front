/*
 * @Description: 链接sqlite数据库
 * @Author: zmt
 * @Date: 2021-09-27 14:13:59
 * @LastEditors: zmt
 * @LastEditTime: 2021-09-30 16:58:59
 */
const sqlite3 = require('sqlite3').verbose()
let connection

export async function connectSQLite (filePth, errFn, successFn) {
  connection = new sqlite3.Database(filePth)
}

export function querySQLite (statement, errFn, successFn) {
  if (connection) {
    connection.run(statement, (err) => {
      if (err) {
        errFn(err)
        return
      }
      successFn()
    })
  } else {
    errFn('SQLite未连接')
  }
}

export function closeSQLite (errFn, successFn) {
  if (connection) {
    connection.close(err => {
      if (err) {
        errFn(err)
        return
      }
      successFn()
    })
  } else {
    errFn('SQLite未连接')
  }
}
