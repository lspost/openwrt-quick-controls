const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account'
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log(req.user);
      res.redirect('/');
    }
  );

  app.post('/auth/logout', (req, res) => {
    req.logout();
    res.send({});
  });

  app.get('/auth/user', (req, res) => {
    res.send(req.user);
  });
};
