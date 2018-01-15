const mongoose = require('mongoose');

const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: Number,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
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
  numberScreens: { type: Number, required: true },
  hdtv: { type: Boolean, required: true },
  tv3d: { type: Boolean, required: true },
  sound: { type: Boolean, required: true },
  food: { type: Boolean, required: true },
  wifi: { type: Boolean, required: true },
  projector: { type: Boolean, required: true },
  englishSpoken: { type: Boolean, required: true },
  openHour: { type: String, required: true },
  openMinute: { type: String, required: true },
  closeHour: { type: String, required: true },
  closeMinute: { type: String, required: true },
  reviews: [ reviewSchema ]
});

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
});

module.exports = mongoose.model('Bar', barSchema);
