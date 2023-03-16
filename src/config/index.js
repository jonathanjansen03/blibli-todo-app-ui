const app = {
  routerName: {
    home: 'home',
    manageBooks: 'manageBooks',
    buyBooks: 'buyBooks',
    about: 'about'
  },
  title: {
    base: 'Toko Buku Blibli',
    home: 'Home',
    manageBooks: 'Manage Books',
    buyBooks: 'Buy Books',
    about: 'About'
  }
}
const pages = {
  home: '/',
  about: '/about',
  buyBooks: '/buy-books',
  manageBooks: '/manage-books'
}

const api = {
  testGetAPI: {
    api: '/backend/test'
  },
  testPostAPI: {
    api: '/backend/test'
  }
}

export { app, pages, api }
