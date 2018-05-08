
// set up passport to handle the express authentication 

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../model/user');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function (err, user) {
      if (err) { return done(err); }
      // user  not found
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // wrong password
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }

      return done(null, user);
    });
  }
));