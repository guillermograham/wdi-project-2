const Match = require('../models/match');

function newRoute(req, res) {
  return res.render('matches/new');
}

function indexRoute(req, res, next) {
  Match
    .find()
    .exec()
    .then((matches) => res.render('matches/index', { matches }))
    .catch(next);
}

function createRoute(req, res, next) {
  Match
    .create(req.body)
    .then(() => res.redirect('/matches'))
    .catch((err) => {
      next(err);
    });
}

module.exports = {
  new: newRoute,
  index: indexRoute,
  create: createRoute
};
