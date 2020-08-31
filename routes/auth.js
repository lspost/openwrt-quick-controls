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
      res.send('logged in');
    }
  );

  app.get('/auth/logout', (req, res) => {
    res.logout();
    res.send('logged out');
  });

  app.get('auth/user', (req, res) => {
    res.send('test test');
  });
};
