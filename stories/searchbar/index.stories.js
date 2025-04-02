import SearchBar from '../../src/SearchBar'
import store from './store'
import { Input } from 'antd'

const { Item } = SearchBar
export default {
  title: '搜索',
  component: SearchBar,
  tags: ['autodocs'],
  args: {
    store: store.search,
  },
}

export const Demo1 = {
  name: '简单搜索',
  args: {
    initialValues: { name: 'aaa' },
    searchButton: false,
    resetButton: false,
    // layout: 'inline',
    items: [
      { title: '姓名', dataIndex: 'name' },
      { title: '年龄', dataIndex: 'age' },
    ],
  },
}
export const Demo2 = {
  name: '无样式',
  args: {
    noStyle: true,
    items: [
      { title: '姓名', dataIndex: 'name' },
      { title: '年龄', dataIndex: 'age' },
      { title: '体重', dataIndex: 'weight' },
      { title: '爱好', dataIndex: 'like' },
    ],
  },
}
