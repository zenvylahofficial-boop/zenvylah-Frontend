import { useStore } from '../store/useStore';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const getHeaders = (token) => {
  const headers = { 'Content-Type': 'application/json' };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

export const orderService = {
  async createOrder(orderData, token) {
    let response = await fetch(`${API_URL}/api/create-order/`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify(orderData),
    });

    // If token is invalid/expired (401), clear invalid auth and retry as guest
    if (response.status === 401 && token) {
      useStore.getState().logout();
      response = await fetch(`${API_URL}/api/create-order/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
    }

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || 'Failed to create order');
    }
    return response.json();
  },

  async verifyPayment(paymentData, token) {
    const response = await fetch(`${API_URL}/api/verify-payment/`, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify(paymentData),
    });
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || 'Payment verification failed');
    }
    return response.json();
  },

  async getDeliveryConfig() {
    try {
      const response = await fetch(`${API_URL}/api/delivery-config/`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch delivery configuration');
      }
      return await response.json();
    } catch (err) {
      console.warn('Could not load remote delivery config, using fallback:', err.message);
      return { charge_upto_two: "50.00", charge_more_than_two: "100.00" };
    }
  }
};
