const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// Signup Controller (Default role: Student)
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  // Check if the role is valid
  const validRoles = ['Student', 'Teacher', 'Admin'];
  const userRole = validRoles.includes(role) ? role : 'Student'; // Default role is 'Student'

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    role: userRole,
  });

  try {
    await newUser.save();
    const token = generateToken(newUser._id, newUser.role);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // Token expires in 1 day
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};



// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id, user.role);

  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // Token expires in 1 day
  });

  res.status(200).json({ message: 'Logged in successfully' });
};

// Logout Controller
exports.logout = (req, res) => {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logged out successfully' });
};


exports.updateProfile = async (req, res) => {
    const { name, email, password } = req.body;
    const { id } = req.user; // Get user id from authenticated token
  
    try {
      // Find user by ID
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update profile information (excluding role)
      if (name) user.name = name;
      if (email) user.email = email;
      if (password) {
        // Hash password if it's being updated
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
  
      await user.save();
  
      // Generate new token after profile update
      const token = generateToken(user._id, user.role);
  
      // Send the token back in the response
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // Token expires in 1 day
      });
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };