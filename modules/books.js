const databaseConnection = require('../connectDB');

function bookRegistration(name, author, year, area, edition, publisher) {
  const newBook = {
    name,
    author,
    year,
    area,
    edition,
    publisher,
    status: 0,
    id_employee: 2,
  };

  databaseConnection.insert(newBook).into('books')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log('test');
    });
}

let book = [];

function searchBook(bookName) {
  databaseConnection('books').where('name', 'like', `%${bookName}%`)
    .then((data) => {
      console.log(data[0].id);
      book = [];
      book = data;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(book);
    });
}

function checkMarking(status) {
  databaseConnection('books').where('status', 'like', `%${status}%`)
    .then((data) => {
      console.log(data);
      book = [];
      book = data;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(book);
    });
}

function getBook() {
  return book;
}

module.exports = {
  bookRegistration,
  searchBook,
  checkMarking,
  getBook,
};
