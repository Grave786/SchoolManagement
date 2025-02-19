const BASE_URL = process.env.REACT_APP_BASE_URL;

// Upload QR Code (Admin only)
export const uploadQRCode = async (file, token) => {
  const formData = new FormData();
  formData.append('qrCode', file);

  try {
    const response = await fetch(`${BASE_URL}/qr/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`, // Admin authentication token
      },
      body: formData,
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to upload QR Code');
    return data;
  } catch (error) {
    throw error;
  }
};

// View QR Code (Admin only)
export const viewQRCode = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/qr/view`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) throw new Error('Failed to fetch QR Code');
    return response.blob(); // Returns QR code image blob
  } catch (error) {
    throw error;
  }
};
