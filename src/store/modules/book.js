import { api, constants } from '@/config'
import axios from 'axios'
import { buildUrl } from '@/utils'
import router from '@/router'

const setBookData = book => {
  const authors = book.author.split(',')
  const isDiscountUndefined = book.discount === undefined

  return {
    id: book.id,
    name: book.title,
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 80)}/800`,
    seller: {
      list: book.author,
      name: authors.length > 1 ? authors[0] + ' et al.' : authors[0]
    },
    features: {
      feature: '',
      '2hd': false
    },
    price: {
      final: book.price - (book.price * book.discount),
      old: isDiscountUndefined || book.discount ? book.price : null,
      discount: isDiscountUndefined ? 0 : book.discount * 100
    },
    stock: book.stock
  }
}

const state = {
  books: [],
  pagination: {
    size: constants.DEFAULT_PAGE_SIZE,
  }
}

const getters = {
  books(state) {
    return state.books
  },
  pagination(state) {
    return state.pagination
  }
}

const mutations = {
  setBooks(state, books) {
    state.books = books.slice(0)
  },
  insertBook(state, book) {
    state.books.push(book)
  },
  updateBook(state, book) {
    const index = state.books.findIndex(b => b.id === book.id)
    state.books[index] = {
      ...state.books[index],
      ...book
    }
  },
  deleteBook(state, bookId) {
    const index = state.books.findIndex(book => book.id === bookId)
    state.books.splice(index, 1)
  },
  setPagination(state, pagination) {
    state.pagination = {
      ...state.pagination,
      ...pagination
    }
  }
}

const actions = {
  getBookList({ commit }, queryParams) {
    const currentQuery = router.currentRoute.query
    const url = buildUrl({ ...currentQuery, ...queryParams })

    axios
      .get(url)
      .then(res => {
        const books = res.data.bookList.map(book => setBookData(book))
        const pagination = {
          totalItems: res.data.documentCount
        }

        commit('setBooks', books)
        commit('setPagination', pagination)
      })
      .catch(err => {
        alert('Error while fetching books data. Please try again later. ' + err)
      })
  },
  async insertBook({ commit }, book) {
    let response

    try {
      response = await axios.post(api.insertBookAPI.api, book)

      const newBook = setBookData(book)
      commit('insertBook', newBook)
    } catch (e) {
      response = e.response
    }

    return response
  },
  deleteBook({ commit }, book) {
    axios
      .delete(api.deleteBookAPI.api + book.id)
      .then(() => {
        commit('deleteBook', book.id)
        alert('Book deleted successfully!')
      })
      .catch(err => {
        alert('Error deleting book. Please try again later. ' + err)
      })
  },
  async updateBook({ commit }, { book, isOnlyUpdatingStock }) {
    if (isOnlyUpdatingStock) {
      commit('updateBook', book)
      return
    }

    let response
    const bookData = {
      title: book.name,
      author: book.seller.name,
      stock: book.stock,
      price: book.price.old ? book.price.old : book.price.final,
      discount: book.price.discount / 100
    }

    try {
      response = await axios.put(api.updateBookAPI.api + book.id, bookData)
      commit('updateBook', book)
    } catch (e) {
      response = e.response
    }

    return response
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
