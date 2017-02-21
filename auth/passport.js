const passport = require('passport');
const models = require('../db/models/index');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  });

  passport.deserialzeUser((id, done) => {
    models.User.findById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};

