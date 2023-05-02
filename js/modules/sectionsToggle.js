const form = document.getElementById('form');
const allBooks = document.getElementById('book_list');
const messageField = document.getElementById('messageField');
const contact = document.getElementById('contact');

// Show books' list

const showList = () => {
  allBooks.classList.remove('hidden');
  form.classList.add('hidden');
  contact.classList.add('hidden');
  contact.classList.remove('flex');
};

// Show add section

const showAddSection = () => {
  allBooks.classList.add('hidden');
  form.classList.remove('hidden');
  contact.classList.add('hidden');
  contact.classList.remove('flex');
  messageField.textContent = '';
};

// Show Contact

const showContact = () => {
  allBooks.classList.add('hidden');
  form.classList.add('hidden');
  contact.classList.remove('hidden');
  contact.classList.add('flex');
};

export {showList, showAddSection, showContact}
