const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./Routes/authRoutes');
const likeRoutes = require('./Routes/likeRoutes');
const viewRoutes = require('./Routes/viewRoutes'); 

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Authentication routes
app.use('/api/auth', authRoutes);

// Like routes
app.use('/api/likes', likeRoutes);

// View count routes
app.use('/api/views', viewRoutes);  // Register the view routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
