const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const bars = require('../controllers/bars');
const matches = require('../controllers/matches');
const screenings = require('../controllers/screenings');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/bars')
  .get(bars.index)
  .post(bars.create);

router.route('/bars/new')
  .get(bars.new);

router.route('/bars/:id/edit')
  .get(bars.edit);

router.route('/bars/:id/reviews')
  .post(bars.createReview);

router.route('/bars/:id/reviews/:reviewId')
  .delete(bars.deleteReview);

router.route('/bars/:id')
  .get(bars.show)
  .put(bars.update)
  .delete(bars.delete);

router.route('/matches')
  .get(matches.index);

router.route('/matches/new')
  .get(matches.new)
  .post(matches.create);

router.route('/matches/:id/new')
  .get(screenings.new);

router.route('/screenings/:id/add')
  .put(screenings.addScreening);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
