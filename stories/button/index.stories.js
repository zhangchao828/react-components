import Button from '../../src/Button'

export default {
  title: '按钮',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['default', 'primary', 'ghost', 'link', 'text', 'a'],
      control: { type: 'select' },
      description: '类型',
    },
  },
  args: { children: '按钮' },
}

export const Demo1 = {
  name: '默认按钮',
  args: {},
}
export const Demo2 = {
  name: '主按钮',
  args: {
    type: 'primary',
  },
}
