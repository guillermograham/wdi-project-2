function customResponses(req, res, next) {


  res.unauthorized = function unauthorized(url='/login', message='You must be logged in') {
    req.flash('alert', message);
    return res.redirect(url);
  };

  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  next();
}

module.exports = customResponses;
