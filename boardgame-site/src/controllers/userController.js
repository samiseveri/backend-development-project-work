const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.showRegister = (req, res) => res.render('register', { title: 'Register' });

exports.register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password) {
    return res.redirect('/users/register');
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);
  const user = new User({ username, email, passwordHash });
  await user.save();
  req.session.user = { _id: user._id, username: user.username, role: user.role };
  res.redirect('/');
};

exports.showLogin = (req, res) => res.render('login', { title: 'Login' });

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.redirect('/users/login');
  }
  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.redirect('/users/login');
  req.session.user = { _id: user._id, username: user.username, role: user.role };
  res.redirect('/');
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
};
