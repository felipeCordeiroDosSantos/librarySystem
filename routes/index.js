const express = require('express');
const router = express.Router();
const passport = require('passport');
const books = require('../controller/booksController');
const customers = require('../controller/customersController');
const loans = require('../controller/loansController');

router.get('/', (req, res, next) => res.render('login'));

router.get('/loan', (req, res, next) => res.render('loan'));

router.get('/loanConsultation', (req, res, next) => {
  res.render('loanConsultation', {
    loan: loans.getLoan(),
  });
});

router.get('/customerRegistration', (req, res, next) => res.render('customerRegistration'));

router.get('/bookRegistration', (req, res, next) => res.render('bookRegistration'));

router.get('/customers', (req, res, next) => {
  res.render('customers', {
    customer: customers.getCustomer(),
  });
});

router.get('/books', (req, res, next) => {
  res.render('books', {
    book: books.getBook(),
  });
});

router.get('/updateCustomer', (req, res, next) => res.render('updateCustomer'));

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
