const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  rating: { type: Number, min:1, max:5, required: true },
  comment: String
}, { timestamps: true });

module.exports = mongoose.model('Review', ReviewSchema);
