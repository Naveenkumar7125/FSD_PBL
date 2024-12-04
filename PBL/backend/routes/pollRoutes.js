const express = require('express');
const { createPoll } = require('../controllers/pollController');
const router = express.Router();

router.post('/create', createPoll);

module.exports = router;
