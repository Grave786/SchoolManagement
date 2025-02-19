const express = require('express');
const { uploadQRCode, viewQRCode } = require('../controllers/qrCodeController');
const { authMiddleware } = require('../controllers/authMiddleware');
const { upload } = require('../utils/upload'); // Multer upload middleware for handling file uploads

const router = express.Router();

// Route for uploading or updating QR code (Admin only)
router.post('/upload', authMiddleware, upload.single('qrCode'), uploadQRCode);

// Route for viewing QR code (Admin only)
router.get('/view', authMiddleware, viewQRCode);

module.exports = router;
