function customResponses(req, res, next) {


  res.unauthorized = function unauthorized(url='/login', message='You must be logged in') {
    req.flash('alert', message);
    return res.redirect(url);
  };

  next();
}

module.exports = customResponses;
