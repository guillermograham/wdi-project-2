const User = require('../models/user');

function authentication(req, res, next) {
  if(!req.session.userId) return next();

  User
    .findById(req.session.userId)
    .exec()
    .then((user) => {
      if(!user) {
        return req.session.regenerate(() => {
          res.redirect('/');
        });
      }

      // reassign the session for good measure
      req.session.userId = user.id;
      req.user = user;

      res.locals.user = user;
      res.locals.isLoggedIn = true;

      return next();
    });
}

module.exports = authentication;
