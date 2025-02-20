const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // To load environment variables

const app = express(); // ✅ Initialize app first

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow frontend origin
  credentials: true, // Allow cookies & authorization headers
};

// Middleware
app.use(cors(corsOptions)); // ✅ Now it's safe to use `app`
app.use(express.json()); // To parse incoming JSON requests
app.use(cookieParser()); // To parse cookies

// Import routes
const authRoutes = require('./routes/authRoutes');
const feeRoutes = require('./routes/feeRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const qrCodeRoutes = require('./routes/qrCodeRoutes');
const connectDB = require('./db'); // Import the connectDB function

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/fees', feeRoutes); 
app.use('/api/attendance', attendanceRoutes); 
app.use('/api/qrcode', qrCodeRoutes); 

app.get('/', (req, res) => {
  res.send('Welcome to the School Management System API');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
