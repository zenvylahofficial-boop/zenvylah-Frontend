const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

export const productService = {
  async getProducts(search = '') {
    const query = search ? `?search=${encodeURIComponent(search)}` : '';
    const response = await fetch(`${API_URL}/api/products/${query}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  async getProductById(id) {
    const response = await fetch(`${API_URL}/api/products/${id}/`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },

  async getProductsByTag(tagName) {
    try {
      const response = await fetch(`${API_URL}/api/products/tag/${tagName}/`);
      if (!response.ok) {
        if (response.status === 404) return [];
        throw new Error(`Failed to fetch products for tag: ${tagName}`);
      }
      return await response.json();
    } catch (err) {
      console.warn(`Could not load products for tag ${tagName}:`, err.message);
      return [];
    }
  },

  async getCategories() {
    try {
      const response = await fetch(`${API_URL}/api/products/categories/`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      return await response.json();
    } catch (err) {
      console.warn('Could not load categories:', err.message);
      return [];
    }
  },

  async getHeroImages() {
    try {
      const response = await fetch(`${API_URL}/api/products/hero/`);
      if (!response.ok) throw new Error('Failed to fetch hero images');
      return await response.json();
    } catch (err) {
      console.warn('Could not load hero images:', err.message);
      return [];
    }
  },

  async getProductsByCategory(categoryId) {
    const products = await this.getProducts();
    return products.filter(p => p.category === parseInt(categoryId));
  }
};
