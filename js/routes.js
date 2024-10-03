
export default {
  home: {
    path: '/',
    controller: 'homeController'
  },
  authors: {
    path: '/search',
    controller: 'searchController'
  },
  films: {
    path: '/books',
    controller: 'booksController'
  },
  map: {
    path: '/shorts',
    controller: 'shortsController'
  },
  about: {
    path: '/villains',
    controller: 'villainsController'
  },
  currentPath: {
    path: '',
    controller: ''
  }
};
