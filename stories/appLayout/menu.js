export default [
  { title: '主页', path: '/home' }, // 菜单项务必填写 key
  {
    title: '子菜单1',
    children: [{ title: '子菜单项', path: '/table', href: 'http://www.baidu.com' }],
  },
  {
    title: '子菜单2',
    children: [
      {
        title: '子菜单项1',
        children: [
          { title: 'ccc', path: '/layout3' },
          { title: 'ddd', path: '/layout4' },
        ],
      },
      {
        title: '子菜单项2',
        children: [
          { title: 'aaa', path: '/layout' },
          { title: 'bbb', path: '/layout2' },
          { title: '111', path: '/layout11' },
          { title: '222', path: '/layout22' },
          { title: '333', path: '/layout33' },
          { title: '444', path: '/layout44' },
        ],
      },
    ],
  },
  {
    title: '子菜单3',
    path: '/path3',
  },
  {
    title: '子菜单4',
    path: '/path4',
  },
  {
    title: '子菜单5',
    path: '/path5',
  },
  {
    title: '子菜单6',
    path: '/path6',
  },
  {
    title: '子菜单7',
    path: '/path7',
  },
]
