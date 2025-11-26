const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const reviewController = require('../controllers/reviewController');
const { ensureLoggedIn, requireRole } = require('../middleware/auth');

router.get('/', (req, res) => res.redirect('/games'));

router.get('/games', gameController.listGames);
router.get('/games/new', ensureLoggedIn, gameController.showCreateForm);
router.post('/games', ensureLoggedIn, gameController.createGame);

router.get('/games/:id', gameController.viewGame);

router.post('/games/:gameId/reviews', ensureLoggedIn, reviewController.createReview);

router.post('/games/:id/delete', requireRole('admin'), gameController.deleteGame);

module.exports = router;
