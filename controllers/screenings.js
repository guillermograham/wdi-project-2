const Match = require('../models/match');
const Bar = require('../models/bar');

function newRoute(req, res, next) {
  console.log(req.params.id);
  const matchId = req.params.id;
  console.log(matchId);
  Bar
    .find()
    .exec()
    .then((bars) => res.render('screenings/new', { bars, matchId }))
    .catch(next);
}

function addScreening(req, res, next) {
  Bar
    .findById(req.body.barId)
    .exec()
    .then(bar => {
      bar.fixtures.push(req.params.id);
      bar.save();
    })
    .then(() => res.redirect('/matches'))
    .catch(next);

}

module.exports = {
  new: newRoute,
  addScreening: addScreening
};
