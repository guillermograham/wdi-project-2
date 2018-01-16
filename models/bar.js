const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
},{
  timestamps: true
});

reviewSchema.methods.belongsTo = function belongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
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
  hdtv: { type: Boolean, default: false },
  tv3d: { type: Boolean, default: false },
  sound: { type: Boolean, default: false },
  food: { type: Boolean, default: false },
  wifi: { type: Boolean, default: false },
  projector: { type: Boolean, default: false },
  englishSpoken: { type: Boolean, default: false },
  openHour: String,
  openMinute: String,
  closeHour: String,
  closeMinute: String,
  reviews: [ reviewSchema ]
});

barSchema.methods.belongsTo = function belongsTo(user) {

  //check if the user who created the bar is the same as the person who is logged in
  // 'this' is the instance of the hotel that we are calling the 'belongsTo' method on
  //'user' is the user object that we will pass this method (the user who is logged in)
  // will return a boolean value
  return this.createdBy.id === user.id;
};

module.exports = mongoose.model('Bar', barSchema);
