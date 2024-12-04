const express = require('express');
const { createPoll, getPolls } = require('../controllers/pollController'); // Ensure these functions exist in your controller file

const router = express.Router();

// Define your routes
router.post('/create', createPoll); // POST route for creating a poll
router.get('/all', getPolls); // GET route to fetch all polls

module.exports = router;
