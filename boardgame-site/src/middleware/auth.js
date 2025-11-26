exports.ensureLoggedIn = (req, res, next) => {
  if (req.session && req.session.user) return next();
  res.redirect('/users/login');
};

exports.requireRole = (role) => (req, res, next) => {
  if (req.session && req.session.user && req.session.user.role === role) return next();
  res.status(403).send('Forbidden');
};
