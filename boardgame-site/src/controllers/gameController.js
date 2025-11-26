const Game = require('../models/Game');
const Review = require('../models/Review');

exports.listGames = async (req, res) => {
  const games = await Game.find().sort({ createdAt: -1 }).lean();
  res.render('games', { title: 'Games', games });
};

exports.showCreateForm = (req, res) => {
  res.render('gameForm', { title: 'Add New Game' });
};

exports.createGame = async (req, res) => {
  const data = req.body;
  const game = new Game({ ...data, createdBy: req.session.user ? req.session.user._id : null });
  await game.save();
  res.redirect(`/games/${game._id}`);
};

exports.viewGame = async (req, res) => {
  const game = await Game.findById(req.params.id).lean();
  if (!game) return res.status(404).render('404');
  const reviews = await Review.find({ game: game._id }).populate('user', 'username').lean();
  res.render('gameDetails', { title: game.title, game, reviews });
};

exports.deleteGame = async (req, res) => {
  await Game.findByIdAndDelete(req.params.id);
  res.redirect('/games');
};
