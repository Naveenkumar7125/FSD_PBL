const Poll = require('../models/Poll'); // Import your Poll model

// Function to create a poll
const createPoll = async (req, res) => {
  try {
    const { title, options, activationDate, deadline, voteLimit } = req.body;
    const newPoll = await Poll.create({ title, options, activationDate, deadline, voteLimit });
    res.status(201).json(newPoll);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create poll' });
  }
};

// Function to fetch all polls
const getPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json(polls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch polls' });
  }
};

module.exports = { createPoll, getPolls };
