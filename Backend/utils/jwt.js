// utils/jwt.js
const jwt = require('jsonwebtoken');

// Generate JWT Token
exports.generateToken = (userId, role) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT Secret not found in environment variables.');
  }

  return jwt.sign({ id: userId, role }, secret, { expiresIn: '1d' }); // Token expires in 1 day
};

// Verify JWT Token (used in authMiddleware)
exports.verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT Secret not found in environment variables.');
  }

  return jwt.verify(token, secret);
};
