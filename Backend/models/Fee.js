const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalFee: { type: Number, required: true },
  extraFee: { type: Number, required: true },
  paidAmount: { type: Number, default: 0 },
  paymentScreenshot: { type: Buffer }, // Blob type for storing screenshot
  paymentScreenshotContentType: { type: String }, // To store MIME type (e.g., 'image/png', 'image/jpeg')
  paymentStatus: { type: String, enum: ['Pending', 'Paid'], default: 'Pending' },
});

module.exports = mongoose.model('Fee', feeSchema);
