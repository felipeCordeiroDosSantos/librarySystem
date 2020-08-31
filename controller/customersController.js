const customers = require('../modules/customers');

function customerRegistration(req) {
  const {
    customerName,
    customerCPF,
    customerEmail,
    customerTelephone,
  } = req.body;

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

function checkBlockedStatus(req) {
  const { check } = req.body;
  customers.checkBlockedStatus(check);
}

function getCustomer() {
  return customers.getCustomer();
}

module.exports = {
  customerRegistration,
  searchCustomer,
  getCustomer,
  checkMarkingCustomer,
  checkBlockedStatus,
};
