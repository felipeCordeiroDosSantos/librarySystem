const express = require('express');

const router = express.Router();

const passport = require('passport');

const books = require('../controller/booksController');

router.get('/', (req, res, next) => {
  res.render('login');
});

router.get('/loan', (req, res, next) => {
  res.render('loan');
});

router.get('/loanConsultation', (req, res, next) => {
  res.render('loanConsultation');
});

router.get('/customerRegistration', (req, res, next) => {
  res.render('customerRegistration');
});

router.get('/bookRegistration', (req, res, next) => {
  res.render('bookRegistration');
});

router.get('/customers', (req, res, next) => {
  res.render('customers');
});

router.get('/books', (req, res, next) => {
  res.render('books');
});

router.get('/updateCustomer', (req, res, next) => {
  res.render('updateCustomer');
});

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loan',
    failureRedirect: '/',
  }));

module.exports = router;
