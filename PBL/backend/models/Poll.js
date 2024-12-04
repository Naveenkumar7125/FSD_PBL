const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  title: { type: String, required: true },
  options: { type: [String], required: true },
  activationDate: { type: Date, required: true },
  deadline: { type: Date, required: true },
  voteLimit: { type: Number, required: true },
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
