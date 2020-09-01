module.exports = (req, res, next) => {
  if (!req.user) {
    res.send({ error: 'You must log in' });
  }

  next();
};
