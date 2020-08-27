const databaseConnection = require('../connectDB');

function loanConfirm(deadline, idBook, idCustomer) {
  const newLoan = {
    deadline,
    delay: 0,
    status: 0,
    id_book: idBook,
    id_customer: idCustomer,
  };

  databaseConnection.insert(newLoan).into('loans')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      databaseConnection.where({ id: idBook }).update({ status: 1 }).table('books')
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          console.log('test');
        });
    });
}

function addLoan(bookName, customerName, deadline) {
  let book;
  databaseConnection('books').where('name', 'like', `%${bookName}%`)
    .then((data) => {
      console.log(data[0].id);
      book = data[0].id;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(book);
      let customer;
      databaseConnection('customers').where('name', 'like', `%${customerName}%`)
        .then((data) => {
          console.log(data[0].id);
          customer = data[0].id;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          console.log(customer);
          loanConfirm(deadline, book, customer);
        });
    });
}
let loan = [];
function searchLoan(book) {
  let bookId;
  let idbook;
  let bookName;
  let customerId;
  let customerName;
  let customerCPF;
  let deadline;
  databaseConnection('books').where('name', 'like', `%${book}%`)
    .then((data) => {
      console.log(data);
      bookId = data[0].id;
      bookName = data[0].name;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(bookId);
      console.log(bookName);
      databaseConnection('loans').where('id_book', 'like', `%${bookId}%`)
        .then((data) => {
          console.log(data);
          deadline = data[0].deadline;
          customerId = data[0].id_customer;
          idbook = data[0].id_book;
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {
          console.log(deadline);
          console.log(customerId);
          databaseConnection('customers').where('id', 'like', `%${customerId}%`)
            .then((data) => {
              console.log(data);
              customerName = data[0].name;
              customerCPF = data[0].cpf;
            })
            .catch((error) => {
              console.log(error);
            })
            .then(() => {
              console.log(customerName);
              const data = {
                bookName,
                customerName,
                customerCPF,
                deadline,
              };
              loan = [];
              if (bookId === idbook) {
                loan.push(data);
                console.log(data);
                console.log(loan);
              }
            });
        });
    });
}

function getLoan() {
  return loan;
}

function loanReturn(id, delay, status) {
  databaseConnection.where({ id }).update({ delay, status }).table('loans')
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

module.exports = {
  addLoan,
  loanReturn,
  searchLoan,
  getLoan,
};
