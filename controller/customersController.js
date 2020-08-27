const customers = require('../modules/customers');

function customerRegistration(req) {
  const { customerName } = req.body;
  const { customerCPF } = req.body;
  const { customerEmail } = req.body;
  const { customerTelephone } = req.body;

  customers.customerRegistration(customerName, customerEmail, customerCPF, customerTelephone);
}

function searchCustomer(req) {
  const { customerName } = req.body;

  customers.searchCustomer(customerName);
}

function checkMarkingCustomer(req) {
  const { check } = req.body;
  customers.checkMarkingCustomer(check);
}

function getCustomer() {
  return customers.getCustomer();
}

module.exports = {
  customerRegistration,
  searchCustomer,
  getCustomer,
  checkMarkingCustomer,
};
