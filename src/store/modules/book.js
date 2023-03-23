import { api } from "@/config";
import axios from "axios";

const setBookData = book => {
  return {
    id: book.id,
    name: book.title,
    imageUrl: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//87/MTA-11147207/dekoruma_dekoruma_full03.jpg",
    variant: 0,
    seller: {
      name: book.author,
      location: "United Kingdom",
      isOfficialStore: false,
    },
    features: {
      feature: "",
      "2hd": false
    },
    price: {
      final: book.price * book.discount,
      old: book.discount === 1 ? null : book.price,
      discount: (1 - book.discount) * 100
    }
  };
};

const state = {
  books: [],
  searchedBooks: []
};

const getters = {
  books(state) {
    return state.books;
  },
  searchedBooks(state) {
    return state.searchedBooks;
  }
};

const mutations = {
  setBooks(state, books) {
    state.books = books;
  },
  setSearchedBooks(state, books) {
    state.searchedBooks = books;
  },
  insertBook(state, book) {
    state.books.push(book);
  },
  deleteBook(state, index) {
    state.books.splice(index, 1);
  }
};

const actions = {
  setBooks({ commit }) {
    axios
      .get(api.getAllBooksAPI.api)
      .then(res => {
        const books = res.data.map(book => setBookData(book));
        commit("setBooks", books);
      })
      .catch(err => {
        alert("Error while fetching books data. Please try again later. " + err);
      });
  },
  setSearchedBooks({ commit }, searchQuery) {
    axios
      .get(api.searchBookAPI.api + searchQuery)
      .then(res => {
        const books = res.data.map(book => setBookData(book));
        commit("setSearchedBooks", books);
      });
    let books;
    commit("setSearchedBooks", books);
  },
  insertBook({ commit }, book) {
    axios
      .post(api.insertBookAPI.api, book)
      .then(() => {
        alert("Book added successfully!");
      })
      .catch(err => {
        alert("Error adding book. Please try again later. " + err);
      });

    commit("insertBook", book);
  },
  deleteBook({ commit, state }, index) {
    axios
      .delete(api.deleteBookAPI.api + state.books[index].id)
      .then(() => {
        alert("Book deleted successfully!");
      })
      .catch(err => {
        alert("Error deleting book. Please try again later. " + err);
      });

    commit("deleteBook", index);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
