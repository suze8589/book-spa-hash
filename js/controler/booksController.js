import bookService from '/js/service/bookService.js';
import bookView from '/js/view/bookView.js';

async function init() {
    try {
        let books = await bookService.getBooks();
        
        books = Object.values(books);
        console.log(Array.isArray(books));
        console.log("HELLO", books);

        bookView.render(books);

    } catch (error) {
        console.error('Error initializing books:', error);
    }
}

export default { init };