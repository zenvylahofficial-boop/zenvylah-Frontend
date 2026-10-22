import { useStore } from '../store/useStore';
import { authService } from './authService';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const authFetch = async (url, options = {}) => {
  let { token, refreshToken, setToken, logout } = useStore.getState();

  const makeRequest = (authToken) => {
    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        ...options.headers,
      },
    });
  };

  let response = await makeRequest(token);

  // If 401 Unauthorized and we have a refreshToken, try refreshing
  if (response.status === 401 && refreshToken) {
    try {
      const data = await authService.refreshToken(refreshToken);
      if (data.access) {
        setToken(data.access);
        response = await makeRequest(data.access);
      }
    } catch {
      // Refresh token failed or expired -> log out
      logout();
    }
  } else if (response.status === 401) {
    // 401 and no refresh token or invalid -> log out to clear stale auth
    logout();
  }

  return response;
};

export const userService = {
  async getOrders(token) {
    const response = await authFetch(`${API_URL}/api/auth/orders/`);
    if (!response.ok) {
      const err = new Error('Failed to fetch orders');
      err.status = response.status;
      throw err;
    }
    return response.json();
  },

  async getAddresses(token) {
    const response = await authFetch(`${API_URL}/api/auth/addresses/`);
    if (!response.ok) {
      const err = new Error('Failed to fetch addresses');
      err.status = response.status;
      throw err;
    }
    return response.json();
  },

  async addAddress(token, addressData) {
    const response = await authFetch(`${API_URL}/api/auth/addresses/`, {
      method: 'POST',
      body: JSON.stringify(addressData),
    });
    if (!response.ok) {
      const err = new Error('Failed to add address');
      err.status = response.status;
      throw err;
    }
    return response.json();
  },

  async updateAddress(token, id, addressData) {
    const response = await authFetch(`${API_URL}/api/auth/addresses/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(addressData),
    });
    if (!response.ok) {
      const err = new Error('Failed to update address');
      err.status = response.status;
      throw err;
    }
    return response.json();
  },

  async deleteAddress(token, id) {
    const response = await authFetch(`${API_URL}/api/auth/addresses/${id}/`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const err = new Error('Failed to delete address');
      err.status = response.status;
      throw err;
    }
    return true;
  }
};
