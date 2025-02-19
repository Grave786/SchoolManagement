// controllers/authMiddleware.js
const jwt = require('jsonwebtoken');

// Verify JWT Token
exports.authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assuming JWT secret is stored in environment variable
    req.user = decoded; // Attach user data to req.user
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token', error: error.message });
  }
};
