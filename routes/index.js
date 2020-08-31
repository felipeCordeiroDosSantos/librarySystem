const express = require('express');
const passport = require('passport');
const books = require('../controller/booksController');
const customers = require('../controller/customersController');
const loans = require('../controller/loansController');
const db = require('../connectDB');

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

router.post('/checkPendingStatus', customers.checkMarkingCustomer);

router.post('/checkBlockedStatus', customers.checkBlockedStatus);

router.post('/returnLoan', loans.returnLoan);

router.post('/checkMarking', books.checkMarking);

router.post('/customerRegistration', customers.customerRegistration);

router.post('/bookRegistration', books.bookRegistration);

router.post('/bookName', (req, res) => {
  let bn;
  const { bookName } = req.body;
  console.log(bookName);
  db('books').where('name', 'like', `%${bookName}%`)
    .then((data) => {
      bn = [];
      for (let i = 0; i < data.length; i += 1) {
        bn.push(data[i].name);
      }
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      res.jsonp(bn);
    });
});

module.exports = router;
