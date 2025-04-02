import Table from '../../src/Table'
import store from './store'
import DefaultDemo from './default'
import EditableDemo from './editable'

export default {
  title: '表格',
  component: Table,
  tags: ['autodocs'],
  args: {
    resizable: true,
    store: store.table,
  },
}

export const Demo1 = {
  name: '简单表格',
  ...DefaultDemo,
}
export const Demo2 = {
  name: '可编辑表格',
  ...EditableDemo,
}
