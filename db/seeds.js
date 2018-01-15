const mongoose = require('mongoose');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Bar = require('../models/bar.js');

Bar.collection.drop();

Bar.create([{
  name: 'George Payne',
  rating: Number,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  imageOne: String,
  imageTwo: String,
  imageThree: String,
  doorNumber: String,
  street: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: Number, required: true },
  website: String,
  facebook: String,
  twitter: String,
  telephone: Number,
  email: String,
  description: String,
  latLong: String,
  metro: String,
  fixtures: Array,
  numberScreens: { type: Number, required: true },
  hdtv: { type: Boolean, required: true },
  tv3d: { type: Boolean, required: true },
  sound: { type: Boolean, required: true },
  food: { type: Boolean, required: true },
  wifi: { type: Boolean, required: true },
  projector: { type: Boolean, required: true },
  englishSpoken: { type: Boolean, required: true },
  sundayOpen: { type: String, required: true },
  sundayClose: { type: String, required: true },
  mondayOpen: { type: String, required: true },
  mondayClose: { type: String, required: true },
  tuesdayOpen: { type: String, required: true },
  tuesdayClose: { type: String, required: true },
  wednesdayOpen: { type: String, required: true },
  wednesdayClose: { type: String, required: true },
  thurdayOpen: { type: String, required: true },
  thursdayClose: { type: String, required: true },
  fridayOpen: { type: String, required: true },
  fridayClose: { type: String, required: true },
  saturdayOpen: { type: String, required: true },
  saturdayClose: { type: String, required: true },
  reviews: [ reviewSchema ]
},{

}])
