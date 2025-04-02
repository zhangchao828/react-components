import App from '../../src/App'
import Page from '../../src/Page'
import AppLayout from '../../src/AppLayout'
import store from './store'
import Watermark from '../../src/Watermark'
import './style.less'

function Layout(props) {
  return (
    <App init={store.init} loginIntercept={false}>
      <AppLayout header="header" {...props} style={{ height: 500 }}>
        <Page breadcrumb={['aa', 'bb']}>
          <div style={{ height: 80 }}>content</div>
          <Watermark content={'aaa'} getContainer={() => null} />
        </Page>
      </AppLayout>
    </App>
  )
}
export default {
  title: '应用布局',
  component: Layout,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
}

export const Demo1 = {
  name: '默认',
  args: {},
}
export const Demo2 = {
  name: '顶部导航',
  args: {
    mode: 'respective',
    header: <AppLayout.TopNav />,
  },
}
