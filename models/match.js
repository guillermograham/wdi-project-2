const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  competition: { type: String, required: true },
  date: { type: Date, required: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true }
});

// matchSchema.virtual('screeningBars', {
//   ref: 'Bar',
//   localField: '_id',
//   foreignField: 'fixtures'
// })
//   .set(function setScreeningBars(screeningBars) {
//     this._screeningBars = screeningBars;
//   });

module.exports = mongoose.model('Match', matchSchema);
