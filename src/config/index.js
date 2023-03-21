const app = {
  routerName: {
    home: 'home',
    manageBooks: 'manageBooks',
    buyBooks: 'buyBooks',
    about: 'about',
    insertBook: 'insertBook',
    createReport: 'createReport'
  },
  title: {
    base: 'Toko Buku Blibli',
    home: 'Home',
    manageBooks: 'Manage Books',
    buyBooks: 'Buy Books',
    about: 'About',
    insertBook: 'Insert Book',
    createReport: 'Create Report'
  }
}
const pages = {
  home: '/',
  about: '/about',
  buyBooks: '/buy-books',
  manageBooks: '/manage-books',
  insertBook: '/insert-book',
  createReport: '/create-report'
}

const api = {
  testGetAPI: {
    api: '/backend/test'
  },
  testPostAPI: {
    api: '/backend/test'
  },

}

// GET 	"gdn-bookstore-api/books" 				-> return all books
// GET 	"gdn-bookstore-api/books?title=<title>" 		-> return specified title
// POST 	"gdn-bookstore-api/books/insert"			-> insert to mongodb (object sent via form) Book {title, author, stock, price}
// PUT	"gdn-bookstore-api/books/update/{bookId}"		-> update book (object sent via form) Book {title, author, stock, price}
// **PUT 	"gdn-bookstore-api/books/set-discount/{bookId}"		-> update book's discount (discount value = 0 - 1)
// DELETE 	"gdn-bookstore-api/books/delete/{bookId}"		-> delete book by id
//
// GET	"gdn-bookstore-api/transactions"			-> return all transaction
// GET	"gdn-bookstore-api/transactions/{transactionId}"	-> return specified transaction
// POST	"gdn-bookstore-api/transactions/insert"			-> insert to mongodb (object sent via form) Transaction {bookId, qty}
// PUT	"gdn-bookstore-api/transactions/update/{transactionId}"	-> update transaction (object sent via form) Transaction {bookId, qty}
// DELETE	"gdn-bookstore-api/transactions/delete/{bookId}"	-> delete transaction by id
//
// GET	"gdn-bookstore-api/transactions?month=<month>&year=<year>	-> return monthly report

export { app, pages, api }
