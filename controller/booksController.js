const books = require('../modules/books');

function bookRegistration(req) {
  const { bookName } = req.body;
  const { authorName } = req.body;
  const { bookRelease } = req.body;
  const { bookGenre } = req.body;
  const { bookEdition } = req.body;
  const { bookPublisher } = req.body;

  books.bookRegistration(bookName, authorName, bookRelease, bookGenre, bookEdition, bookPublisher);
}

function searchBook(req) {
  const { bookName } = req.body;
  books.searchBook(bookName);
}

function checkMarking(req) {
  const { check } = req.body;
  books.checkMarking(check);
}

function getBook() {
  return books.getBook();
}

module.exports = {
  searchBook,
  checkMarking,
  bookRegistration,
  getBook,
};
