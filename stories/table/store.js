import Table from '../../src/Table'
import moment from 'moment'

class Store {
  table = new Table.Store({
    request: (params, config) => {
      console.log(params, config)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            list: new Array(3).fill(0).map((item, i) => {
              return {
                id: Math.random(),
                name: '张三' + i,
                date: moment(),
                cname: 'aaa',
                age: 30,
                age1: 10 + i,
              }
            }),
            total: 3,
          })
        }, 1000)
      })
    },
    onColumnsDragSortEnd(sortRes) {
      console.log(sortRes)
    },
  })
}

export default new Store()
