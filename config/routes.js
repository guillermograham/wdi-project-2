const router = require('express').Router();
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');

router.get('/', (req, res) => res.render('statics/index'));

router.get('/bars/new', (req,res) => res.render('bars/new'));

router.post('/bars', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

module.exports = router;
