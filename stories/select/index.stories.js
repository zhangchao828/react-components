import Select from '../../src/Select'
import App from '../../src/App'
import Button from '../../src/Button'
import { useRef } from 'react'

function init() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        access: ['1', '2'],
        optionsType: {
          user: [
            { label: '前端', value: 'aa' },
            { label: '哈哈', value: 'bb' },
            { label: '测试6', value: 'cc' },
            { label: '测试5', value: 'dd' },
            { label: '测试4', value: 'ee' },
            { label: '测试3', value: 'ff' },
            { label: '测试2', value: 'gg' },
            { label: '测试1', value: 'yy' },
            { label: '测试0', value: 'yy3' },
          ],
        },
      })
    }, 300)
  })
}

function load(params) {
  console.log('load', params)
  return new Promise((resolve) => {
    setTimeout(() => {
      const m = (Math.random() + '').substring(0, 4)
      resolve([
        { label: 'aa' + m, value: 'aa' },
        { label: 'bb' + m, value: 'bb' },
        { label: 'cc' + m, value: 'cc' },
      ])
    }, 10)
  })
  // return [
  //   { label: 'aa', value: 'aa' },
  //   { label: 'bb', value: 'bb' },
  //   { label: 'cc', value: 'cc' },
  // ]
}

function MySelect({ refLoad, ...rest }) {
  const ref = useRef()
  return (
    <App init={init}>
      <Select
        ref={ref}
        allowClear
        style={{ width: 200 }}
        onChange={(v) => {
          console.log(v)
        }}
        {...rest}
      />
      {refLoad && (
        <Button
          onClick={() => {
            ref.current.loadOptions()
          }}
        >
          加载
        </Button>
      )}
    </App>
  )
}
export default {
  title: '下拉选择',
  component: MySelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Demo1 = {
  name: '简单下拉',
  args: {
    options: [
      { label: '前端', value: 'aa' },
      { label: '哈哈', value: 'bb' },
    ],
  },
}
export const Demo2 = {
  name: '下拉项为字典',
  args: {
    options: 'user',
  },
}
export const Demo3 = {
  name: '加载下拉项',
  args: {
    options: load,
  },
}

export const Demo4 = {
  name: '搜索加载',
  args: {
    options: load,
    debounceSearch: true,
    refLoad: true,
  },
}
