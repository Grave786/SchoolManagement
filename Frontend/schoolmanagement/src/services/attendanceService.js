const BASE_URL = process.env.REACT_APP_BASE_URL;

export const updateAttendance = async (attendanceData) => {
  try {
    const response = await fetch(`${BASE_URL}/attendance/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(attendanceData),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to update attendance');
    return data;
  } catch (error) {
    throw error;
  }
};

export const viewAttendance = async (studentId) => {
  try {
    const response = await fetch(`${BASE_URL}/attendance/${studentId}`, {
      method: 'GET',
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to fetch attendance records');
    return data;
  } catch (error) {
    throw error;
  }
};
