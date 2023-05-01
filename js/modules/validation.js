import Book from './classBook.js';

const newBook = new Book();

const checkInput = () => {
  const bookTitle = document.getElementById('title');
  const bookAuthor = document.getElementById('author');
  const messageField = document.getElementById('messageField');

  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    newBook.addBook(bookTitle.value, bookAuthor.value);
    newBook.displayAllBooks();
    messageField.textContent = 'Book added succesfully!';
    messageField.style.color = 'black';
  } else {
    messageField.textContent = 'Please enter a book and an author';
    messageField.style.color = 'red';
  }
};

export default checkInput;
