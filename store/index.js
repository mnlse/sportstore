import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = []

for (let i = 1; i <= 10; i++) {
  testData.push({
    id: i,
    name: `Produkt ${i}`,
    category: `Kategoria ${i % 3}`,
    description: `To jest produkt #${i}`,
    price: i * 50
  })
}

export default new Vuex.Store({
  strict: true,
  state: {
    products: testData,
    productsTotal: testData.length,
    currentPage: 1,
    pageSize: 4
  },
  getters: {
    productsFilteredByCategory: state => {
      return state.products.filter(p =>
        state.currentCategory === 'Wszystkie' ||
            p.category === state.currentCategory)
    },
    processedProducts: state => {
      let index = (state.currentPage - 1) * state.pageSize
      return state.products.slice(index, index + state.pageSize)
    },
    pageCount: state => Math.ceil(state.productsTotal / state.pageSize),
    categories: state => ['Wszystkie', ...new Set(state.products.map(p => p.category).sort())]
  },
  mutations: {
    setCurrentPage (state, page) {
      state.currentPage = page
    },
    setPageSize (state, size) {
      state.pageSize = size
      state.currentPage = 1
    },
    setCurrentCategory (state, category) {
      state.currentCategory = category
      state.currentPage = 1
    }
  }
})
