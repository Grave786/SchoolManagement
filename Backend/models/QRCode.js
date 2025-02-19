// models/QRCode.js
const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Only Admin can add
  qrCode: { type: Buffer, required: true },
  contentType: { type: String, required: true }, // MIME type (e.g., image/png)
});

module.exports = mongoose.model('QRCode', qrCodeSchema);
