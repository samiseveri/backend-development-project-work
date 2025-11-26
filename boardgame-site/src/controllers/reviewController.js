const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  if (!req.session.user) return res.status(403).send('Login required');
  const { rating, comment } = req.body;
  const gameId = req.params.gameId;
  const review = new Review({
    user: req.session.user._id,
    game: gameId,
    rating: Number(rating),
    comment
  });
  await review.save();
  res.redirect(`/games/${gameId}`);
};
