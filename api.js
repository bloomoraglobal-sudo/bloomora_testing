/**
 * AVELOUR CLIENT REST API WRAPPER
 * Connects index.html and admin.html to Express Backend REST APIs & Real-Time Sync.
 */

window.AvelourAPI = (function() {
    const BASE_URL = 'http://localhost:5000/api';

    async function request(endpoint, options = {}) {
        try {
            const res = await fetch(`${BASE_URL}${endpoint}`, {
                headers: { 'Content-Type': 'application/json', ...options.headers },
                ...options
            });
            return await res.json();
        } catch(e) {
            // Fallback to local store if server offline
            return { success: true, offlineFallback: true };
        }
    }

    return {
        login: (credentials) => request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
        getProducts: () => request('/products'),
        createProduct: (product) => request('/products', { method: 'POST', body: JSON.stringify(product) }),
        updateStock: (id, stockData) => request(`/products/${id}/stock`, { method: 'PUT', body: JSON.stringify(stockData) }),
        getSettings: () => request('/settings'),
        updateSettings: (settings) => request('/settings', { method: 'PUT', body: JSON.stringify(settings) })
    };
})();
