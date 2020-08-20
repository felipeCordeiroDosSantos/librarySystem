const knex = require('../connectDB');

function addBook(name, author, year, area, edition, publisher) {
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

  // eslint-disable-next-line no-unused-expressions
  knex.insert(newBook).into('books')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

function listBooks() {
  // eslint-disable-next-line no-unused-expressions
  knex.select(['name', 'author', 'year', 'area', 'edition', 'publisher']).table('books')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

module.exports = {
  addBook,
  listBooks,
};
