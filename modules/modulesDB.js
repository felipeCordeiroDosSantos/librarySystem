const knex = require('./connectDB')

function addEmployee(name, email, password){
    const newEmployee = {
        name: name,
        email: email,
        password: password
    }

    knex.insert(newEmployee).into('employees')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function addCustomer(name, email, cpf, telephone){
    const newCustomer = {
        name: name,
        email: email,
        cpf: cpf,
        telephone: telephone,
        status: 0,
        id_employee: 1
    }

    knex.insert(newCustomer).into('customers')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function addBook(name, author, year, area, edition, publisher){
    const newBook = {
        name: name,
        author: author,
        year: year,
        area: area,
        edition: edition,
        publisher: publisher,
        status: 0,
        id_employee: 1
    }

    knex.insert(newBook).into('books')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function addLoan(deadline){
    const newLoan = {
        deadline: deadline,
        delay: 0,
        status: 0,
        id_book: 1,
        id_customer: 1
    }

    knex.insert(newLoan).into('loans')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function loanReturn(id, delay, status) {
    knex.where({id: id}).update({delay: delay, status: status }).table('loans')
    .then(function (data){
        console.log(data)  
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function updateCustomer(id, email, telephone) {
    knex.where({id: id}).update({email: email, telephone: telephone}).table('customers')
    .then(function (data){
        console.log(data)  
    })
    .catch(function (error){
        console.log(error)
    })
    .then(function (){
    })
}

function listBooks() {
    knex.select(['name', 'author', 'year', 'area', 'edition', 'publisher']).table('books')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then( function (){
    })
}

function listCustomers() {
    knex.select(['name', 'email', 'cpf', 'telephone']).table('customers')
    .then(function (data){
        console.log(data)
    })
    .catch(function (error){
        console.log(error)
    })
    .then( function (){
    })
}

module.exports = {
    addEmployee,
    addCustomer,
    addBook,
    addLoan,
    loanReturn,
    updateCustomer,
    listBooks,
    listCustomers
}