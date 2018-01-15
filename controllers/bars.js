const Bar = require('../models/bar');

function newRoute(req, res) {
  return res.render('bars/new');
}

// index
function indexRoute(req, res, next) {
  Bar
    .find()
    .exec()
    .then((bars) => res.render('bars/index', { bars }))
    .catch(next);
}

function createRoute(req, res, next) {
  // creating a new property on req.body, making it the same as req.user, which was defined during authentication (see lib folder)
  req.body.createdBy = req.user;

  Bar
    .create(req.body)
    .then(() => res.redirect('/bars'))
    .catch((err) => {
      // if(err.name === 'ValidationError') {
      //   return res.badRequest('/bars/new', err.toString());
      // }
      next(err);
    });
}

function showRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.status(404).end();
      res.render('bars/show', { bar });
    })
    .catch(() => {
      res.status(500).end();
    });
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute
};
