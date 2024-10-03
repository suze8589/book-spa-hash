
import homeView from '/js/view/homeView.js';
import bookService from '/js/service/bookService.js';


async function init() {
  try {
    let books = bookService.getBooks();

    books = Object.values(books);
    console.log("Stephen King is the MAN!", books);   
    homeView.render(bookService.getBooks);
    
  } catch (error) {
    console.error('Error initializing a horror story!!', error);
  }
   
  

                
};

export default { init };
