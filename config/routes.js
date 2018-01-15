const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const bars = require('../controllers/bars');

router.get('/', (req, res) => res.render('statics/index'));

router.route('/bars')
  .get(bars.index)
  .post(bars.create);

router.route('/bars/new')
  .get(bars.new);

router.route('/bars/:id')
  .get(bars.show);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

module.exports = router;
