const express = require('express');
require('express-async-errors');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const gameRoutes = require('./routes/gameRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// view engine
app.engine('hbs', exphbs.engine({ extname: '.hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts'), partialsDir: path.join(__dirname, 'views/partials') }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET || 'secretdev',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user || null;
  next();
});

app.use('/', gameRoutes);
app.use('/users', userRoutes);

app.get('/home', (req, res) => {
  res.redirect('/');
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  if (req.accepts('html')) {
    res.status(500).render('500', { error: err.message });
  } else {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;
