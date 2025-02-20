const BASE_URL = "http://localhost:5000/api";

export const signup = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Signup failed');
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Login failed');
    return data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include", // Ensure cookies are sent
      headers: {
        "Content-Type": "application/json", 
      },
    });

    const data = await response.json(); // Log response from server

    if (!response.ok) {
      console.error("Logout error:", data);
      throw new Error("Logout failed");
    }

    console.log("Logout successful:", data);
  } catch (error) {
    console.error("Logout request error:", error);
    throw error;
  }
};


export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/update-profile`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData),
      credentials: 'include',
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Profile update failed');
    return data;
  } catch (error) {
    throw error;
  }
};
