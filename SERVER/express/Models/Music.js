const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  genTime: {
    type: Number,
    required: true
  },
  musicUrl: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Music', musicSchema);
