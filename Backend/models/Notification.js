const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    recipientRole: { type: String, enum: ['Student', 'Teacher'], required: true },
    date: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Notification', notificationSchema);
  