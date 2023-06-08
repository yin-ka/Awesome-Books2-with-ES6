import Book from './modules/book.js';
import Store from './modules/store.js';
import { DateTime } from './modules/luxon.js';
import Library from './modules/library.js';

// define the current local time
const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('time').innerHTML = currentDate;

// Event: Display Books
document.addEventListener('DOMContentLoaded', Library.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // Instatiate book
  const book = new Book(title, author);

  // Add Book to Structure
  Library.addBookToList(book);

  // Add book to store
  Store.addBook(book);

  // Clear fields
  Library.clearFields();
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from Structure
  Library.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

// display the books list when click the button "List"
const bookList = document.querySelector('.book_list_holder');
const list = document.querySelector('.list');
const formholder = document.querySelector('.form-holder');
const contactInfo = document.querySelector('.contact_info');

list.addEventListener('click', () => {
  bookList.classList.remove('hide');
  formholder.classList.add('hide');
  contactInfo.classList.add('hide');
});

window.addEventListener('load', () => {
  bookList.classList.remove('hide');
  formholder.classList.add('hide');
  contactInfo.classList.add('hide');
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.querySelector('.add-new-btn');

addNewBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formholder.classList.remove('hide');
  contactInfo.classList.add('hide');
});

// display the  Contact section when click the button "Contact"
const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formholder.classList.add('hide');
  contactInfo.classList.remove('hide');
});