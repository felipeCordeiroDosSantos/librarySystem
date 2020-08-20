const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const databaseConnection = require('./connectDB');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    databaseConnection('employees').where({ id }).first()
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, ((username, password, done) => {
    databaseConnection('employees').where({ username }).first()
      .then((user) => {
        if (!user) {
          return done(null, false);
        }

        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) {
            return done(err);
          }
          if (!isValid) {
            return done(null, false);
          }
          return done(null, user);
        });
      })
      .catch((err) => done(err));
  })));
};
