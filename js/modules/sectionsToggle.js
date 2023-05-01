const form = document.getElementById('form');
const allBooks = document.getElementById('book_list');
const messageField = document.getElementById('messageField');
const contact = document.getElementById('contact');

// Show books' list

export const showList = () => {
  allBooks.classList.remove('hidden');
  form.classList.add('hidden');
  contact.classList.add('hidden');
  contact.classList.remove('flex');
};

// Show add section

export const showAddSection = () => {
  allBooks.classList.add('hidden');
  form.classList.remove('hidden');
  contact.classList.add('hidden');
  contact.classList.remove('flex');
  messageField.textContent = '';
};

// Show Contact

export const showContact = () => {
  allBooks.classList.add('hidden');
  form.classList.add('hidden');
  contact.classList.remove('hidden');
  contact.classList.add('flex');
};
