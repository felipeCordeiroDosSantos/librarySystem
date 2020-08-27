const loans = require('../modules/loans');

function addLoan(req) {
  const { deadline } = req.body;
  const { bookName } = req.body;
  const { customerName } = req.body;

  loans.addLoan(bookName, customerName, deadline);
}

function searchLoan(req) {
  const { bookName } = req.body;

  loans.searchLoan(bookName);
}

function getLoan() {
  return loans.getLoan();
}

module.exports = {
  addLoan,
  searchLoan,
  getLoan,
};
