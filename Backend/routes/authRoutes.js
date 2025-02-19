const express = require('express');
const { signup, login, logout, updateProfile } = require('../controllers/authController');
const { authMiddleware } = require('../controllers/authMiddleware');

const router = express.Router();

// Route to handle user signup
router.post('/signup', signup);

// Route to handle user login
router.post('/login', login);

// Route to handle user logout
router.post('/logout', authMiddleware, logout);

// Route to update user profile (excluding role)
router.put('/update-profile', authMiddleware, updateProfile);

module.exports = router;
