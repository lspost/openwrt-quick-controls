const cookieSession = require('cookie-session');
const keys = require('../keys');

module.exports = app => {
  app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.COOKIE_KEY]
    })
  );
};
