const express = require('express');
const passport = require('passport');
const books = require('../controller/booksController');
const customers = require('../controller/customersController');
const loans = require('../controller/loansController');

const router = express.Router();

router.get('/', (req, res) => res.render('login'));

router.get('/loan', (req, res) => res.render('loan'));

router.get('/loanConsultation', (req, res) => {
  res.render('loanConsultation', {
    loan: loans.getLoan(),
  });
});

router.get('/customerRegistration', (req, res) => res.render('customerRegistration'));

router.get('/bookRegistration', (req, res) => res.render('bookRegistration'));

router.get('/customers', (req, res) => {
  res.render('customers', {
    customer: customers.getCustomer(),
  });
});

router.get('/books', (req, res) => {
  res.render('books', {
    book: books.getBook(),
  });
});

router.get('/updateCustomer', (req, res) => res.render('updateCustomer'));

router.post('/login', passport.authenticate('local', { successRedirect: '/loan', failureRedirect: '/' }));

router.post('/addLoan', loans.addLoan);

router.post('/searchLoan', loans.searchLoan);

router.post('/searchCustomer', customers.searchCustomer);

router.post('/searchBook', books.searchBook);

router.post('/checkMarkingCustomer', customers.checkMarkingCustomer);

router.post('/checkMarking', books.checkMarking);

router.post('/customerRegistration', customers.customerRegistration);

router.post('/bookRegistration', books.bookRegistration);

module.exports = router;
