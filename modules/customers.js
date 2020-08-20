const knex = require('../connectDB');

function addCustomer(name, email, cpf, telephone) {
  const newCustomer = {
    name,
    email,
    cpf,
    telephone,
    status: 0,
    id_employee: 1,
  };

  // eslint-disable-next-line no-unused-expressions
  knex.insert(newCustomer).into('customers')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

function updateCustomer(id, email, telephone) {
  // eslint-disable-next-line no-unused-expressions
  knex.where({ id }).update({ email, telephone }).table('customers')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

function listCustomers() {
  // eslint-disable-next-line no-unused-expressions
  knex.select(['name', 'email', 'cpf', 'telephone']).table('customers')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then;
}

module.exports = {
  addCustomer,
  updateCustomer,
  listCustomers,
};
