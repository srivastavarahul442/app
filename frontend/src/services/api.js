import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Get auth token from localStorage
const getAuthToken = () => localStorage.getItem('admin_token');

// Create axios instance with auth header
const createAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${getAuthToken()}`
  }
});

// ============= PUBLIC APIs =============

export const getDestinations = async (country = null) => {
  try {
    const url = country ? `${API}/destinations?country=${country}` : `${API}/destinations`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const getDestination = async (id) => {
  try {
    const response = await axios.get(`${API}/destinations/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destination:', error);
    throw error;
  }
};

export const getPackages = async () => {
  try {
    const response = await axios.get(`${API}/packages`);
    return response.data;
  } catch (error) {
    console.error('Error fetching packages:', error);
    throw error;
  }
};

export const getPackage = async (id) => {
  try {
    const response = await axios.get(`${API}/packages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching package:', error);
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await axios.get(`${API}/testimonials`);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await axios.post(`${API}/bookings`, bookingData);
    return response.data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const createContactInquiry = async (inquiryData) => {
  try {
    const response = await axios.post(`${API}/contact`, inquiryData);
    return response.data;
  } catch (error) {
    console.error('Error creating inquiry:', error);
    throw error;
  }
};

export const search = async (query, country = null) => {
  try {
    const response = await axios.post(`${API}/search`, { query, country });
    return response.data;
  } catch (error) {
    console.error('Error searching:', error);
    throw error;
  }
};

// ============= ADMIN APIs =============

export const adminLogin = async (username, password) => {
  try {
    const response = await axios.post(`${API}/admin/login`, { username, password });
    const { access_token } = response.data;
    localStorage.setItem('admin_token', access_token);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const adminLogout = () => {
  localStorage.removeItem('admin_token');
};

export const isAdminAuthenticated = () => {
  return !!getAuthToken();
};

export const getAllBookings = async () => {
  try {
    const response = await axios.get(`${API}/admin/bookings`, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};

export const updateBooking = async (id, data) => {
  try {
    const response = await axios.put(`${API}/admin/bookings/${id}`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error updating booking:', error);
    throw error;
  }
};

export const deleteBooking = async (id) => {
  try {
    const response = await axios.delete(`${API}/admin/bookings/${id}`, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error deleting booking:', error);
    throw error;
  }
};

export const getAllInquiries = async () => {
  try {
    const response = await axios.get(`${API}/admin/inquiries`, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }
};

export const updateInquiry = async (id, data) => {
  try {
    const response = await axios.put(`${API}/admin/inquiries/${id}`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error updating inquiry:', error);
    throw error;
  }
};

export const createDestination = async (data) => {
  try {
    const response = await axios.post(`${API}/admin/destinations`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error creating destination:', error);
    throw error;
  }
};

export const updateDestination = async (id, data) => {
  try {
    const response = await axios.put(`${API}/admin/destinations/${id}`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error updating destination:', error);
    throw error;
  }
};

export const deleteDestination = async (id) => {
  try {
    const response = await axios.delete(`${API}/admin/destinations/${id}`, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error deleting destination:', error);
    throw error;
  }
};

export const createPackage = async (data) => {
  try {
    const response = await axios.post(`${API}/admin/packages`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error creating package:', error);
    throw error;
  }
};

export const updatePackage = async (id, data) => {
  try {
    const response = await axios.put(`${API}/admin/packages/${id}`, data, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error updating package:', error);
    throw error;
  }
};

export const deletePackage = async (id) => {
  try {
    const response = await axios.delete(`${API}/admin/packages/${id}`, createAuthConfig());
    return response.data;
  } catch (error) {
    console.error('Error deleting package:', error);
    throw error;
  }
};
