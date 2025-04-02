import { defineConfig } from 'father'

export default defineConfig({
  esm: {
    output: 'es',
  },
  cjs: {
    output: 'lib',
    platform: 'browser',
  },
  // umd: {
  //   output: 'dist',
  //   name: 'zswl',
  //   externals: {
  //     antd: 'antd',
  //     moment: 'moment',
  //     mobx: 'mobx',
  //     'mobx-react-lite': 'mobxReactLite',
  //     react: 'React',
  //     'react-dom': 'ReactDOM',
  //     'react-sortable-hoc': 'SortableHOC',
  //     'react-draggable': 'ReactDraggable',
  //   },
  // },
})
