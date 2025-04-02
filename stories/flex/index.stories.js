import Flex from '../../src/Flex'
import { Button } from 'antd'

const commonChild = Array.from({ length: 4 }).map((_, i) => (
  <div
    key={i}
    style={{ width: 100, height: 40, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }}
  />
))
const cardStyle = { width: 100, height: 40, backgroundColor: '#1677ff' }
export default {
  title: 'Flex布局',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
}

export const Demo1 = {
  name: '水平方向',
  args: {
    children: commonChild,
  },
}

export const Demo2 = {
  name: '垂直方向',
  args: {
    vertical: true,
    children: commonChild,
  },
}
export const Demo3 = {
  name: '对齐方式',
  args: {
    justify: 'start',
    gap: 10,
    children: [1, 2, 3, 4].map((_, index) => {
      return (
        <Button type="primary" key={index}>
          Primary
        </Button>
      )
    }),
  },
}
export const Demo4 = {
  name: '嵌套布局',
  args: {
    style: { width: 300 },
    gap: 10,
    children: [
      <Flex flex={1} style={cardStyle}>
        1111
      </Flex>,
      <Flex flex={3} style={cardStyle}>
        2222
      </Flex>,
    ],
  },
}
