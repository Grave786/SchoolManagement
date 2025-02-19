const express = require('express');
const { updateAttendance, viewAttendance } = require('../controllers/attendanceController');
const { authMiddleware } = require('../controllers/authMiddleware');

const router = express.Router();

// Admin/Teacher: Update or Add Attendance
// POST request to update or add attendance
router.post('/update-attendance', authMiddleware, updateAttendance);

// Admin/Teacher: View Attendance for a Specific Student
// GET request to view attendance for a specific student
router.get('/view-attendance/:studentId', authMiddleware, viewAttendance);

module.exports = router;
