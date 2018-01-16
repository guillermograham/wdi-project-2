const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  sport: { type: String, required: true },
  competition: { type: String, required: true },
  date: { type: Date, required: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true }
});

module.exports = mongoose.model('Match', matchSchema);
