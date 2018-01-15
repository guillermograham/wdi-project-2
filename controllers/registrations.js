const User = require('../models/user');

function newRoute(req, res) {
  res.render('registration/new');
}

function createRoute(req, res) {
  User
    .create(req.body)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = {
  new: newRoute,
  create: createRoute
};
