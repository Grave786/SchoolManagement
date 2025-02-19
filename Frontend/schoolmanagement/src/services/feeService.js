const BASE_URL = process.env.REACT_APP_BASE_URL;

// Upload payment screenshot (Student)
export const uploadPaymentScreenshot = async (studentId, file) => {
  const formData = new FormData();
  formData.append('studentId', studentId);
  formData.append('paymentScreenshot', file);

  try {
    const response = await fetch(`${BASE_URL}/fees/upload-payment-screenshot`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to upload screenshot');
    return data;
  } catch (error) {
    throw error;
  }
};

// Get payment screenshot (Admin)
export const getPaymentScreenshot = async (studentId) => {
  try {
    const response = await fetch(`${BASE_URL}/fees/get-payment-screenshot/${studentId}`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch payment screenshot');

    return response.blob(); // Returns image blob
  } catch (error) {
    throw error;
  }
};

// Update payment status (Admin)
export const updatePaymentStatus = async (studentId, paymentStatus) => {
  try {
    const response = await fetch(`${BASE_URL}/fees/update-payment-status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentId, paymentStatus }),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to update payment status');
    return data;
  } catch (error) {
    throw error;
  }
};
