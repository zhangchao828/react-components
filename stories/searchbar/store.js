import SearchBar from '../../src/SearchBar'

class Store {
  search = new SearchBar.Store({
    onSearch: (params) => {
      console.log(params)
    },
  })
}

export default new Store()
