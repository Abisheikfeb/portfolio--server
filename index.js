const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');  // Ensure your database connection logic is correct
const authRoutes = require('./Routes/authRoutes');
const likeRoutes = require('./Routes/likeRoutes');
const viewRoutes = require('./Routes/viewRoutes');

dotenv.config(); // Load environment variables
connectDB(); // Connect to the database

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req, res) => {
  res.send('Backend Server is Running Successfully!');
});

// API Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/likes', likeRoutes); // Like-related routes
app.use('/api/views', viewRoutes); // View count routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
