const allBooks = document.getElementById('book_list');
let bookList = JSON.parse(localStorage.getItem('BooksList')) || [];

class Book {
  constructor() {
    this.bookTitle = document.getElementById('title');
    this.bookAuthor = document.getElementById('author');
  }

  displayAllBooks() {
    allBooks.innerHTML = '';
    bookList.forEach((book) => {
      const bookListItem = document.createElement('li');
      bookListItem.innerHTML = `"${book.bookTitle}" by ${book.bookAuthor}`;
      const btnRemove = document.createElement('button');
      btnRemove.innerHTML = 'Remove';
      btnRemove.className = 'removeButton';
      btnRemove.addEventListener('click', () => this.removeBook(book));
      bookListItem.appendChild(btnRemove);
      allBooks.appendChild(bookListItem);
      this.bookTitle.value = '';
      this.bookAuthor.value = '';
    });
  }

  removeBook(book) {
    bookList = bookList.filter((element) => element !== book);
    localStorage.setItem('BooksList', JSON.stringify(bookList));
    this.displayAllBooks();
  }

  addBook(bookTitle, bookAuthor) {
    const newBook = { bookTitle, bookAuthor };
    bookList.push(newBook);
    localStorage.setItem('BooksList', JSON.stringify(bookList));
    this.displayAllBooks();
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }
}

export default Book;
