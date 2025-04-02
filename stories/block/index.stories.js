import Block from '../../src/Block'
import { Button } from 'antd'

const store = new Block.Store({
  request(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'aaa' })
      }, 2000)
    })
  },
})
export default {
  title: '局部',
  component: Block,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export const Demo1 = {
  name: '默认',
  args: {
    store,
    children: (
      <div style={{ background: '#fafafa', height: 200 }}>
        <Button
          onClick={() => {
            store.init()
          }}
        >
          刷新
        </Button>
      </div>
    ),
  },
}
