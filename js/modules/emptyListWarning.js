const allBooks = document.getElementById('book_list');
const bookList = JSON.parse(localStorage.getItem('BooksList')) || [];

export default window.onload = () => {
  if (bookList.length === 0) {
    allBooks.innerHTML = 'You have no books in your list';
    allBooks.style.padding = '10px';
  }
};
