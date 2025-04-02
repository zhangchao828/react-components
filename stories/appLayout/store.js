import menu from './menu'
/**
 * 这个store主要用来存在一些全局的状态，比如个人信息,菜单栏,一些下拉选项等
 */
class Store {
  init = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          // 菜单
          menu,
          // 权限标识
          access: '*',
          // 用户信息
          user: {},
          // 字典映射
          optionsType: {},
        })
      }, 500)
    })
  }
}
export default new Store()
