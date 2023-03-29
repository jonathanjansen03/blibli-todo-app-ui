import { api } from "@/config";
import axios from "axios";

const setBookData = book => {
  const authors = book.author.split(",");
  const isDiscountUndefined = book.discount === undefined;

  return {
    id: book.id,
    name: book.title,
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 80)}/800`,
    seller: {
      name: authors.length > 1 ? authors[0] + " et al." : authors[0]
    },
    features: {
      feature: "",
      "2hd": false
    },
    price: {
      final: book.price,
      old: isDiscountUndefined || book.discount === 1 ? null : book.price / book.discount,
      discount: isDiscountUndefined ? 0 : (1 - book.discount) * 100
    },
    stock: book.stock
  };
};

const buildUrl = (params) => {
  if (!params) {
    return api.getAllBooksAPI.api;
  }

  const titleParam = params?.title === undefined ? "" :
    api.searchBookAPI.params.title + params.title;
  const pageParam = params?.page === undefined ? "" :
    api.searchBookAPI.params.page + params.page;
  let url = api.searchBookAPI.api + titleParam;

  if (pageParam !== "") {
    if (titleParam !== "") {
      url += "&";
    }
    url += pageParam;
  }

  return url;
}

const state = {
  books: [],
  pagination: {},
  params: {
    title: "",
    page: 0
  }
};

const getters = {
  books(state) {
    return state.books;
  },
  pagination(state) {
    return state.pagination;
  },
  params(state) {
    return state.params;
  }
};

const mutations = {
  setBooks(state, books) {
    state.books = books;
  },
  insertBook(state, book) {
    state.books.push(book);
  },
  updateBook(state, book) {
    const index = state.books.findIndex(b => b.id === book.id);
    state.books[index] = book;
  },
  deleteBook(state, index) {
    state.books.splice(index, 1);
  },
  setPagination(state, pagination) {
    state.pagination = {
      ...state.pagination,
      ...pagination
    };
  },
  setParams(state, params) {
    state.params = {
      ...state.params,
      ...params
    };
  }
};

const actions = {
  setBooks({ commit }, params) {
    const url = buildUrl(params);

    axios
      .get(url)
      .then(res => {
        const books = res.data.content.map(book => setBookData(book));
        const pagination = {
          totalItems: res.data.totalElements,
          size: res.data.size,
        };

        commit("setBooks", books);
        commit("setPagination", pagination);
      })
      .catch(err => {
        alert("Error while fetching books data. Please try again later. " + err);
      });
  },
  insertBook({ commit, dispatch }, book) {
    axios
      .post(api.insertBookAPI.api, book)
      .then(() => {
        dispatch("setBooks", "");
      })
      .catch(err => {
        alert("Error adding book. Please try again later. " + err);
      });

    const newBook = setBookData(book);
    commit("insertBook", newBook);
  },
  deleteBook({ commit, state }, index) {
    axios
      .delete(api.deleteBookAPI.api + state.books[index].id)
      .catch(err => {
        alert("Error deleting book. Please try again later. " + err);
      });

    commit("deleteBook", index);
  },
  updateBook({ commit }, { book, isOnlyUpdatingStock }) {
    commit("updateBook", book);

    if (isOnlyUpdatingStock) {
      return;
    }

    const bookData = {
      title: book.name,
      author: book.seller.name,
      stock: book.stock,
      price: book.price.old ? book.price.old : book.price.final,
      discount: 1 - (book.price.discount / 100)
    };

    axios
      .put(api.updateBookAPI.api + book.id, bookData)
      .catch(err => {
        alert("Error updating book. Please try again later. " + err);
      });
  },
  setParams({ commit }, params) {
    commit("setParams", params);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
