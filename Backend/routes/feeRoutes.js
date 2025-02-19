const express = require('express');
const { uploadPaymentScreenshot, getPaymentScreenshot, updatePaymentStatus } = require('../controllers/feeController');
const { authMiddleware } = require('../controllers/authMiddleware');
const { upload } = require('../utils/upload'); // Multer upload middleware for handling file uploads

const router = express.Router();

// Route for uploading payment screenshot (for students)
router.post('/upload-payment-screenshot', authMiddleware, upload.single('paymentScreenshot'), uploadPaymentScreenshot);

// Route for getting payment screenshot (for admin)
router.get('/get-payment-screenshot/:studentId', authMiddleware, getPaymentScreenshot);

// Route for updating payment status (for admin)
router.put('/update-payment-status', authMiddleware, updatePaymentStatus);

module.exports = router;
