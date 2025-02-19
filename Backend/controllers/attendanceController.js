// controllers/attendanceController.js
const Attendance = require('../models/Attendance');
const User = require('../models/User');

// Admin/Teacher: Add or Update Attendance
exports.updateAttendance = async (req, res) => {
  const { studentId, date, status } = req.body;
  const { id } = req.user; // The user ID from JWT token

  // Check if the student exists
  const student = await User.findById(studentId);
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }

  // Check if the attendance already exists for the date
  let attendance = await Attendance.findOne({ studentId, date });
  
  if (attendance) {
    // If attendance exists, update it
    attendance.status = status;
    attendance.updatedBy = id;
  } else {
    // If no attendance exists, create new record
    attendance = new Attendance({
      studentId,
      date,
      status,
      updatedBy: id,
    });
  }

  try {
    await attendance.save();
    res.status(200).json({ message: 'Attendance updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Teacher/Admin: View Attendance for a Specific Student (or all students)
exports.viewAttendance = async (req, res) => {
  const { studentId } = req.params; // The student whose attendance is to be viewed

  // Fetch attendance based on studentId
  const attendanceRecords = await Attendance.find({ studentId }).populate('studentId', 'name');

  if (attendanceRecords.length === 0) {
    return res.status(404).json({ message: 'No attendance records found for this student' });
  }

  res.status(200).json({ attendance: attendanceRecords });
};
