const knex = require('../connectDB');

function addLoan(deadline) {
  const newLoan = {
    deadline,
    delay: 0,
    status: 0,
    id_book: 1,
    id_customer: 1,
  };

  // eslint-disable-next-line no-unused-expressions
  knex.insert(newLoan).into('loans')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

function loanReturn(id, delay, status) {
  // eslint-disable-next-line no-unused-expressions
  knex.where({ id }).update({ delay, status }).table('loans')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

module.exports = {
  addLoan,
  loanReturn,
};
