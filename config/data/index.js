module.exports = app => {
  require('./mongoose');
  require('./cookieSession')(app);
};
