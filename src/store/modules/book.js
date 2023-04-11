import { api, constants } from '@/config'
import axios from 'axios'
import { buildUrl } from '@/utils'

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

// const buildUrl = (params) => {
//   if (!params) {
//     return api.getAllBooksAPI.api
//   }
//
//   const titleParam = params?.title === undefined ? '' :
//     api.searchBookAPI.params.title + params.title
//   const pageParam = params?.page === undefined ? '' :
//     api.searchBookAPI.params.page + params.page
//   let url = api.searchBookAPI.api + titleParam
//
//   if (pageParam !== '') {
//     if (titleParam !== '') {
//       url += '&'
//     }
//     url += pageParam
//   }
//
//   return url
// }

const state = {
  books: [],
  pagination: {
    size: constants.DEFAULT_PAGE_SIZE,
  },
  params: {
    title: '',
    page: 0
  }
}

const getters = {
  books(state) {
    return state.books
  },
  pagination(state) {
    return state.pagination
  },
  params(state) {
    return state.params
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
  },
  setParams(state, params) {
    state.params = {
      ...state.params,
      ...params
    }
  }
}

const actions = {
  getBookList({ commit }, params) {
    const url = buildUrl(params)

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
  insertBook({ commit }, book) {
    axios
      .post(api.insertBookAPI.api, book)
      .then(() => {
        alert('Book added successfully!')
      })
      .catch(res => {
        console.log('tes', res.response.data)
        alert('Error adding book. Please try again later. ' + res)
      })

    const newBook = setBookData(book)
    commit('insertBook', newBook)
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
  updateBook({ commit }, { book, isOnlyUpdatingStock }) {
    commit('updateBook', book)

    if (isOnlyUpdatingStock) {
      return
    }

    const bookData =  {
      title: book.name,
      author: book.seller.name,
      stock: book.stock,
      price: book.price.old ? book.price.old : book.price.final,
      discount: book.price.discount / 100
    }

    axios
      .put(api.updateBookAPI.api + book.id, bookData)
      .catch(err => {
        alert('Error updating book. Please try again later. ' + err)
      })
  },
  setParams({ commit }, params) {
    commit('setParams', params)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
