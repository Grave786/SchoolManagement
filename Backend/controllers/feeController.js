const Fee = require('../models/Fee'); // Fee model
const { upload } = require('../utils/upload'); // Multer upload middleware

// Upload Payment Screenshot (Student)
exports.uploadPaymentScreenshot = async (req, res) => {
  const { file } = req;
  const { studentId } = req.body; // The studentId should be part of the request body, identifying the student

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    // Check if a fee record exists for the student
    let feeRecord = await Fee.findOne({ studentId });

    // If no fee record exists, create one
    if (!feeRecord) {
      feeRecord = new Fee({
        studentId,
        totalFee: 0, // Initialize the total fee
        extraFee: 0, // Initialize the extra fee
        paidAmount: 0, // Initialize the paid amount
      });
    }

    // Save the payment screenshot as a Buffer (binary data)
    feeRecord.paymentScreenshot = file.buffer;
    feeRecord.paymentScreenshotContentType = file.mimetype;
    feeRecord.paymentStatus = 'Pending'; // Set payment status to 'Pending' initially

    await feeRecord.save();

    res.status(200).json({ message: 'Payment screenshot uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get Payment Screenshot (Admin)
exports.getPaymentScreenshot = async (req, res) => {
  const { studentId } = req.params; // Admin requests the screenshot for a specific student

  try {
    // Find the fee record for the student
    const feeRecord = await Fee.findOne({ studentId });

    if (!feeRecord) {
      return res.status(404).json({ message: 'Fee record not found' });
    }

    if (!feeRecord.paymentScreenshot) {
      return res.status(404).json({ message: 'No payment screenshot found' });
    }

    // Send the screenshot as a response with the correct content type
    res.setHeader('Content-Type', feeRecord.paymentScreenshotContentType);
    res.send(feeRecord.paymentScreenshot);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update Payment Status (Admin)
exports.updatePaymentStatus = async (req, res) => {
  const { studentId, paymentStatus } = req.body;

  if (!['Paid', 'Pending'].includes(paymentStatus)) {
    return res.status(400).json({ message: 'Invalid payment status' });
  }

  try {
    // Find the fee record for the student
    const feeRecord = await Fee.findOne({ studentId });

    if (!feeRecord) {
      return res.status(404).json({ message: 'Fee record not found' });
    }

    // Update the payment status
    feeRecord.paymentStatus = paymentStatus;
    await feeRecord.save();

    res.status(200).json({ message: 'Payment status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
