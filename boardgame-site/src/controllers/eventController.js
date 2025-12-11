const Event = require('../models/Event');

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

exports.listEvents = async (req, res) => {
  const events = await Event.find().sort({ date: 1 }).lean();
  const formattedEvents = events.map(e => ({ ...e, formattedDate: formatDate(e.date) }));
  res.render('events', { title: 'Events', events: formattedEvents });
};

exports.showCreateForm = (req, res) => {
  res.render('eventForm', { title: 'Create Event' });
};

exports.createEvent = async (req, res) => {
  const data = req.body;
  // Combine date and time into a single datetime
  if (data.date && data.time) {
    data.date = new Date(`${data.date}T${data.time}`);
  }
  const event = new Event({ ...data, createdBy: req.session.user ? req.session.user._id : null });
  await event.save();
  res.redirect(`/events/${event._id}`);
};

exports.viewEvent = async (req, res) => {
  const event = await Event.findById(req.params.id).populate('attendees', 'username').lean();
  if (!event) return res.status(404).render('404');
  const formattedEvent = { ...event, formattedDate: formatDate(event.date) };
  res.render('eventDetails', { title: event.title, event: formattedEvent });
};

exports.joinEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).render('404');
  
  if (!event.attendees.includes(req.session.user._id)) {
    event.attendees.push(req.session.user._id);
    await event.save();
  }
  
  res.redirect(`/events/${event._id}`);
};

exports.leaveEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).render('404');
  
  event.attendees = event.attendees.filter(id => !id.equals(req.session.user._id));
  await event.save();
  
  res.redirect(`/events/${event._id}`);
};

exports.deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.redirect('/events');
};
