const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const knex = require('./connectDB');

// eslint-disable-next-line func-names
module.exports = function (passport) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    knex('employees').where({ id }).first()
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
    knex('employees').where({ username }).first()
      // eslint-disable-next-line consistent-return
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        // eslint-disable-next-line no-undef
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
