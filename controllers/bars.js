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

  console.log(req.currentUser);
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
    .populate('createdBy fixtures reviews.createdBy')
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();
      return res.render('bars/show', { bar });
    })
    .catch(next);
}

function editRoute(req, res) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.redirect();
      if(!bar.belongsTo(req.user)) return res.unauthorized(`/bars/${bar.id}`, 'You do not have permission to edit that resource');
      res.render('bars/edit', { bar });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function updateRoute(req, res) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.status(404).send('Not found');

      bar = Object.assign(bar, req.body);

      return bar.save();
    })
    .then((bar) => {
      res.redirect(`/bars/${bar.id}`);
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function deleteRoute(req, res) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.status(404).send('Not found');

      return bar.remove();
    })
    .then(() => {
      res.redirect('/bars');
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function createReviewRoute(req, res, next) {
  req.body.createdBy = req.user;

  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      bar.reviews.push(req.body);
      return bar.save();
    })
    .then((bar) => res.redirect(`/bars/${bar.id}`))
    .catch(next);
}

function deleteReviewRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      const review = bar.reviews.id(req.params.reviewId);
      review.remove();
      return bar.save();
    })
    .then((bar) => res.redirect(`/bars/${bar.id}`))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createReview: createReviewRoute,
  deleteReview: deleteReviewRoute
};
