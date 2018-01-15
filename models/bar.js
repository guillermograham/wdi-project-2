const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
});

const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: Number,
  imageOne: String,
  imageTwo: String,
  imageThree: String,
  address: {
    line1: String,
    line2: { type: String, required: true },
    city: { type: String, required: true },
    postcode: { type: Number, required: true },
    lat: Number,
    lng: Number
  },
  website: String,
  facebook: String,
  twitter: String,
  telephone: Number,
  email: String,
  description: String,
  metro: String,
  fixtures: [{ type: mongoose.Schema.ObjectId, ref: 'Match', required: true }],
  numberScreens: Number,
  hdtv: Boolean,
  tv3d: Boolean,
  sound: Boolean,
  food: Boolean,
  wifi: Boolean,
  projector: Boolean,
  englishSpoken: Boolean,
  openHour: String,
  openMinute: String,
  closeHour: String,
  closeMinute: String,
  reviews: [ reviewSchema ]
});

module.exports = mongoose.model('Bar', barSchema);
