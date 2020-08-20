const bcrypt = require('bcryptjs');
const knex = require('../connectDB');

function addEmployee(username, email, password) {
  bcrypt.hash(password, 10, (err, hash) => {
    const newEmployee = {
      username,
      email,
      password: hash,
    };
    // eslint-disable-next-line no-unused-expressions
    knex.insert(newEmployee).into('employees')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then;
  });
}

module.exports = {
  addEmployee,
};
