const loans = require('../modules/loans');

function addLoan(req) {
  const {
    deadline,
    bookName,
    customerName,
  } = req.body;

  loans.addLoan(bookName, customerName, deadline);
}

function searchLoan(req) {
  const { bookName } = req.body;

  loans.searchLoan(bookName);
}

function returnLoan(req) {
  const { id } = req.body;

  loans.returnLoan(id);
}

function getLoan() {
  return loans.getLoan();
}

module.exports = {
  addLoan,
  searchLoan,
  getLoan,
  returnLoan,
};
