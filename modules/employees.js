const bcrypt = require('bcryptjs');
const databaseConnection = require('../connectDB');

function addEmployee(username, email, password) {
  bcrypt.hash(password, 10, (err, hash) => {
    const newEmployee = {
      username,
      email,
      password: hash,
    };

    databaseConnection.insert(newEmployee).into('employees')
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
