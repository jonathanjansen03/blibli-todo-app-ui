const app = {
  routerName: {
    home: 'home',
    manageBooks: 'manageBooks',
    buyBooks: 'buyBooks',
    cart: 'cart',
    about: 'about',
    insertBook: 'insertBook',
    createReport: 'createReport',
    bookDetail: 'bookDetail'
  },
  title: {
    base: 'Toko Buku Blibli',
    home: 'Home',
    manageBooks: 'Manage Books',
    buyBooks: 'Buy Books',
    cart: 'Cart',
    about: 'About',
    insertBook: 'Insert Book',
    createReport: 'Create Report',
    bookDetail: 'Book Detail'
  }
}

const pages = {
  home: '/',
  buyBooks: '/buy-books',
  manageBooks: '/manage-books',
  cart: '/cart',
  about: '/about',
  insertBook: '/insert-book',
  createReport: '/create-report',
  bookDetail: '/books/:id'
}

const testApi = {
  testGetAPI: {
    api: '/backend/test'
  },
  testPostAPI: {
    api: '/backend/test'
  }
}

const api = {
  getAllBooksAPI: {
    api: '/gdn-bookstore-api/books'
  },
  searchBookAPI: {
    api: '/gdn-bookstore-api/books?title='
  },
  insertBookAPI: {
    api: '/gdn-bookstore-api/books/insert'
  },
  deleteBookAPI: {
    api: '/gdn-bookstore-api/books/delete/'
  }
}
// https://random-data-api.com/api/v2/addresses
// POST 	"gdn-bookstore-api/books/insert"			-> insert to mongodb (object sent via form) Book {title, author, stock, price}
// PUT	"gdn-bookstore-api/books/update/{bookId}"		-> update book (object sent via form) Book {title, author, stock, price}
// **PUT 	"gdn-bookstore-api/books/set-discount/{bookId}"		-> update book's discount (discount value = 0 - 1)
// GET	"gdn-bookstore-api/transactions"			-> return all transaction
// GET	"gdn-bookstore-api/transactions/{transactionId}"	-> return specified transaction
// POST	"gdn-bookstore-api/transactions/insert"			-> insert to mongodb (object sent via form) Transaction {bookId, qty}
// PUT	"gdn-bookstore-api/transactions/update/{transactionId}"	-> update transaction (object sent via form) Transaction {bookId, qty}
// DELETE	"gdn-bookstore-api/transactions/delete/{bookId}"	-> delete transaction by id
//
// GET	"gdn-bookstore-api/transactions?month=<month>&year=<year>	-> return monthly report

export { app, pages, testApi, api }
