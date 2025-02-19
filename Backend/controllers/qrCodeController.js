// controllers/qrCodeController.js
const QRCode = require('../models/QRCode');
const User = require('../models/User');

// Admin: Upload or Update QR Code
exports.uploadQRCode = async (req, res) => {
  const { file } = req;
  const { id } = req.user; // Admin ID from the JWT token

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const admin = await User.findById(id);
  if (!admin || admin.role !== 'Admin') {
    return res.status(403).json({ message: 'Unauthorized access' });
  }

  // Check if a QR code already exists, update it
  let qrCode = await QRCode.findOne({ adminId: id });
  if (qrCode) {
    qrCode.qrCode = file.buffer;
    qrCode.contentType = file.mimetype;
  } else {
    // If QR code doesn't exist, create a new one
    qrCode = new QRCode({
      adminId: id,
      qrCode: file.buffer,
      contentType: file.mimetype,
    });
  }

  try {
    await qrCode.save();
    res.status(200).json({ message: 'QR Code uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Admin: View the QR Code
exports.viewQRCode = async (req, res) => {
  const { id } = req.user; // Admin ID from the JWT token

  const qrCode = await QRCode.findOne({ adminId: id });
  if (!qrCode) {
    return res.status(404).json({ message: 'QR Code not found' });
  }

  res.set('Content-Type', qrCode.contentType);
  res.send(qrCode.qrCode); // Send QR code image as the response
};
