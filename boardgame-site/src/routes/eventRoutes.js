const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const { ensureLoggedIn, requireRole } = require('../middleware/auth');

router.get('/events', eventController.listEvents);
router.get('/events/new', ensureLoggedIn, eventController.showCreateForm);
router.post('/events', ensureLoggedIn, eventController.createEvent);

router.get('/events/:id', eventController.viewEvent);

router.post('/events/:id/join', ensureLoggedIn, eventController.joinEvent);
router.post('/events/:id/leave', ensureLoggedIn, eventController.leaveEvent);

router.post('/events/:id/delete', ensureLoggedIn, eventController.deleteEvent);

module.exports = router;
