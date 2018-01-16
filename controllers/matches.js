const Match = require('../models/match');
const Bar   = require('../models/bar');

function newRoute(req, res) {
  return res.render('matches/new');
}

function indexRoute(req, res, next) {
  Match
    .find()
    .populate('screeningBars')
    .exec()
    .then((matches) => res.render('matches/index', { matches }))
    .catch(next);
}

function showRoute(req, res, next) {
  Match
    .findById(req.params.id)
    .exec()
    .then(match => {
      Bar
        .find({ fixtures: match.id })
        .then(bars => {
          res.render('matches/show', { match, bars });
        });
    })
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
  show: showRoute,
  create: createRoute
};
