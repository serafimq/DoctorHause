const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

passport.serializeUser(function(user, done) {
  console.log('Издавать выпусками:', user);
  done(null, user._id);
})

passport.deserializeUser(function(id, done) {
  User.findById(_id, function(err, user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy(
  function(email, pass, done) {
    User.findOne({ email: email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(pass)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
