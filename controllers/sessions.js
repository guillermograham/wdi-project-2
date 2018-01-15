const User = require('../models/user');

function newRoute(req, res){
  res.render('session/new');
}

function createRoute(req, res) {
  User
    .findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if(!user || !user.validatePassword(req.body.password)) {
        req.flash('danger', 'Unknown email/password combination');
        return res.redirect('/login');
      }

      req.session.userId = user.id;

      req.flash('info', 'Welcome back, ${user.username}!');
      res.redirect('/');
    });
}

module.exports = {
  new: newRoute,
  create: createRoute
};
