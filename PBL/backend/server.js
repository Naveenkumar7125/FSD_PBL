const cors = require('cors');
const express = require('express');
const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));

// Your existing middleware
app.use(express.json());

// Routes
const pollRoutes = require('./routes/poll');
app.use('/api/polls', pollRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
