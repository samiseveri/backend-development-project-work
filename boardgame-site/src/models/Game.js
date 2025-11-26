const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  playersMin: Number,
  playersMax: Number,
  playTime: Number,
  description: String,
  imageUrl: String,
  categories: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Game', GameSchema);
