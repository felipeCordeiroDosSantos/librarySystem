const databaseConnection = require('../connectDB');

function customerRegistration(name, email, cpf, telephone) {
  const newCustomer = {
    name,
    email,
    cpf,
    telephone,
    status: 1,
    id_employee: 2,
  };

  databaseConnection.insert(newCustomer).into('customers')
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

function updateCustomer(id, email, telephone) {
  databaseConnection.where({ id }).update({ email, telephone }).table('customers')
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

let customer = [];

function searchCustomer(customerName) {
  databaseConnection('customers').where('name', 'like', `%${customerName}%`)
    .then((data) => {
      console.log(data);
      customer = [];
      customer = data;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(customer);
    });
}

function checkMarkingCustomer(status) {
  databaseConnection('customers').where('status', 'like', `%${status}%`)
    .then((data) => {
      console.log(data);
      customer = [];
      customer = data;
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log(customer);
    });
}

function getCustomer() {
  return customer;
}

module.exports = {
  customerRegistration,
  updateCustomer,
  searchCustomer,
  getCustomer,
  checkMarkingCustomer,
};
