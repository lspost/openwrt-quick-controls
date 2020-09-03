module.exports = app => {
  require('./auth')(app);
  require('./groups')(app);
};
