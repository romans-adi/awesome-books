import Book from './modules/classBook.js';
import emptyListWarning from './modules/emptyListWarning.js';
import { showAddSection, showContact, showList } from './modules/sectionsToggle.js';
import checkInput from './modules/validation.js';
import displayCurrentDateTime from './modules/displayTime.js';

const newBook = new Book();
const navList = document.getElementById('nav-list');
const navAdd = document.getElementById('nav-add');
const navContact = document.getElementById('nav-contact');
const form = document.getElementById('form');

newBook.displayAllBooks();
emptyListWarning();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkInput();
});

navList.addEventListener('click', () => {
  showList();
});
navAdd.addEventListener('click', () => {
  showAddSection();
});
navContact.addEventListener('click', () => {
  showContact();
});

displayCurrentDateTime();
setInterval(displayCurrentDateTime, 1000);
