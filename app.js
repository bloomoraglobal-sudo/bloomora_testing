/**
 * BLOOMORA NEXT-GEN LUXURY E-COMMERCE ENGINE
 * Full Interactive Frontend: Canvas Particle System, Custom Cursor, 3D Tilt Physics,
 * Cart & Wishlist State Management, 360° Product Turntable Viewer, Multi-Step Checkout,
 * AI Live Search, Admin Analytics Canvas, AI Concierge Chatbot, Theme & Currency Sync.
 */

// Product Database: 3 Exclusive Fragrance Categories (Men's Perfume, Women's Perfume, Unisex Perfume)
const PRODUCTS = [
    // Men's Luxury Colognes & Perfumes
    { id: 'pm1', name: 'Obsidian Oud Noir', category: 'men-perfume', price: 240.00, img: 'assets/men_perfume.jpg', rating: 5.0, reviews: 176, tag: "Men's Luxury Cologne", desc: 'Smoked Cambodian agarwood blended with Tuscan black leather and royal amber stone.' },
    { id: 'pm2', name: 'Cedar & Aged Tobacco Intense', category: 'men-perfume', price: 195.00, img: 'assets/men_perfume.jpg', rating: 4.9, reviews: 114, tag: "Men's Bespoke Cologne", desc: 'Atlas cedarwood infused with hand-aged Cuban tobacco leaf, nutmeg, and cardamom.' },
    { id: 'pm3', name: 'Calabrian Bergamot & Sea Salt', category: 'men-perfume', price: 175.00, img: 'assets/wood_note.jpg', rating: 4.8, reviews: 92, tag: "Men's Fresh Cologne", desc: 'Zesty Calabrian bergamot combined with ocean spray mist, Haitian vetiver, and oakmoss.' },

    // Women's Luxury Perfumes
    { id: 'pw1', name: 'Rose Royale Eau de Parfum', category: 'women-perfume', price: 185.00, img: 'assets/women_perfume.jpg', rating: 5.0, reviews: 142, tag: "Women's Bespoke Perfume", desc: 'Pure Damask rose extract blended with French Vanilla bean and warm crystal amber.' },
    { id: 'pw2', name: 'Jasmine Elixir & Silk', category: 'women-perfume', price: 210.00, img: 'assets/women_perfume.jpg', rating: 4.9, reviews: 98, tag: "Women's Haute Perfume", desc: 'Midnight blooming jasmine with neroli petals and soft cashmere wood notes.' },
    { id: 'pw3', name: 'Peony Blush & White Musk', category: 'women-perfume', price: 165.00, img: 'assets/floral_note.jpg', rating: 4.8, reviews: 85, tag: "Women's Floral Perfume", desc: 'Crisp peony blossoms infused with wild red apple essence and velvety white musk.' },

    // Unisex Bespoke Perfumes
    { id: 'pu1', name: 'Velvet Rose & Amber Oud', category: 'unisex-perfume', price: 225.00, img: 'assets/unisex_perfume.jpg', rating: 4.9, reviews: 165, tag: "Unisex Atelier Fragrance", desc: 'Hand-poured Damask rose extract blended with aged agarwood, amber resin, and warm vanilla.' },
    { id: 'pu2', name: 'Mysore Sandalwood & White Sage', category: 'unisex-perfume', price: 190.00, img: 'assets/candle_diffuser.jpg', rating: 4.8, reviews: 112, tag: "Unisex Bespoke Scents", desc: 'Organic Mysore sandalwood with white sage leaves, cedarwood, and coastal moss.' },
    { id: 'pu3', name: 'Golden Amber & Citrus Dew', category: 'unisex-perfume', price: 180.00, img: 'assets/hero_perfume.jpg', rating: 5.0, reviews: 130, tag: "Unisex Botanical Elixir", desc: 'Sun-ripened Mediterranean citrus infused with golden amber stone and frankincense.' }
];

// Currency Rates & Symbols
const CURRENCIES = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.78 },
    INR: { symbol: '₹', rate: 83.5 },
    JPY: { symbol: '¥', rate: 155.0 }
};

// Global App State (Default: English - India & INR)
const state = {
    cart: JSON.parse(localStorage.getItem('avelour_cart') || localStorage.getItem('bloomora_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('avelour_wishlist') || localStorage.getItem('bloomora_wishlist')) || [],
    currency: 'INR',
    language: 'EN-IN',
    couponDiscount: 0,
    currentFilter: 'all',
    activeTurntableAngle: 0
};

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticleCanvas();
    init3DTilt();
    renderProducts();
    renderTrendingCarousel();
    renderNewArrivals();
    initCartState();
    initWishlistState();
    initSearchModal();
    initTurntableModal();
    initMultiStepCheckout();
    initUserDashboard();
    initAuthModal();
    initAIChatbot();
    initCountdownTimer();
    initThemeAndCurrency();
    initScrollHeader();
    initProductPageModal();
    initScentAlchemyVisualizer();
    initRouteMapCanvas();
});

/* ==========================================================================
   1. Custom Cursor & 3D Tilt Physics
   ========================================================================== */
function initCursor() {
    const glow = document.getElementById('cursor-glow');
    const dot = document.getElementById('cursor-dot');
    if (!glow || !dot) return;

    window.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
    });
}

function init3DTilt() {
    const card = document.getElementById('hero-card-3d');
    if (!card) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        card.style.transform = `rotateY(${x / 15}deg) rotateX(${-y / 15}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
}

/* ==========================================================================
   2. Canvas Particle System
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2
    }));

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#A855F7';
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================================================================
   3. Product Rendering Engine & Currency Conversion
   ========================================================================== */
function formatPrice(usdPrice) {
    const curr = CURRENCIES[state.currency] || CURRENCIES.USD;
    const converted = (usdPrice * curr.rate).toFixed(2);
    return `${curr.symbol}${converted}`;
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = state.currentFilter === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === state.currentFilter);

    grid.innerHTML = filtered.map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents();
}

function renderTrendingCarousel() {
    const track = document.getElementById('trending-track');
    if (!track) return;
    track.innerHTML = PRODUCTS.slice(0, 5).map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents();

    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');
    let offset = 0;
    if (next && prev) {
        next.addEventListener('click', () => {
            offset = Math.max(offset - 300, -600);
            track.style.transform = `translateX(${offset}px)`;
        });
        prev.addEventListener('click', () => {
            offset = Math.min(offset + 300, 0);
            track.style.transform = `translateX(${offset}px)`;
        });
    }
}

function renderNewArrivals() {
    const grid = document.getElementById('new-arrivals-grid');
    if (!grid) return;
    grid.innerHTML = PRODUCTS.slice(4, 8).map(p => createProductCardHTML(p)).join('');
    attachProductCardEvents();
}

function createProductCardHTML(p) {
    const isWish = state.wishlist.some(w => w.id === p.id);
    const isOut = p.outOfStock === true;
    return `
        <div class="product-card glass-card ${isOut ? 'out-of-stock-card' : ''}" data-category="${p.category}">
            <div class="product-visual">
                ${isOut ? '<span class="badge-accent" style="background: #EF4444; color: white; z-index: 5;">OUT OF STOCK</span>' : `<span class="badge-accent">${p.tag}</span>`}
                <img src="${p.img}" alt="${p.name}" loading="lazy" style="${isOut ? 'filter: grayscale(0.8); opacity: 0.6;' : ''}">
                <div class="product-actions-overlay">
                    <button class="icon-action-btn wishlist-toggle-btn ${isWish ? 'active' : ''}" data-id="${p.id}" title="Wishlist">
                        ${isWish ? '♥' : '♡'}
                    </button>
                    <button class="icon-action-btn quick-view-btn" data-id="${p.id}" title="Quick View & 360">
                        👁
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="cat-tag">${p.tag}</span>
                <h3>${p.name}</h3>
                <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 8px;">★ ${p.rating} (${p.reviews} reviews)</p>
                <div class="product-meta">
                    <span class="product-price">${formatPrice(p.price)}</span>
                    ${isOut ? `
                        <button class="btn btn-sm btn-outline" disabled style="opacity: 0.5; cursor: not-allowed;">
                            <span>Out of Stock</span>
                        </button>
                    ` : `
                        <button class="btn btn-sm btn-primary add-to-cart-btn" data-id="${p.id}">
                            <span>🛒 Add to Cart</span>
                        </button>
                    `}
                </div>
            </div>
        </div>
    `;
}

function attachProductCardEvents() {
    document.querySelectorAll('.add-to-cart-btn, .add-hero-cart').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<span>✓ Added!</span>';
            btn.style.background = '#10B981';
            
            addToCart(id);

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.style.background = '';
            }, 1200);
        };
    });

    document.querySelectorAll('.wishlist-toggle-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            toggleWishlist(id);
        };
    });

    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = btn.getAttribute('data-id');
            openTurntableModal(id);
        };
    });
}

// Category Filter Tabs
document.querySelectorAll('#product-filters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#product-filters .filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentFilter = btn.getAttribute('data-filter');
        renderProducts();
    });
});

/* ==========================================================================
   4. Cart & Wishlist State Engine
   ========================================================================== */
function addToCart(productId) {
    const existing = state.cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        const prod = PRODUCTS.find(p => p.id === productId);
        if (prod) state.cart.push({ ...prod, qty: 1 });
    }
    saveCartState();
    openCartDrawer();
}

function toggleWishlist(productId) {
    const idx = state.wishlist.findIndex(w => w.id === productId);
    if (idx > -1) {
        state.wishlist.splice(idx, 1);
    } else {
        const prod = PRODUCTS.find(p => p.id === productId);
        if (prod) state.wishlist.push(prod);
    }
    localStorage.setItem('avelour_wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadges();
    renderProducts();
}

function saveCartState() {
    localStorage.setItem('avelour_cart', JSON.stringify(state.cart));
    updateCartBadges();
    renderCartDrawer();
}

function updateCartBadges() {
    const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cart-count');
    const drawerCountEl = document.getElementById('cart-drawer-count');
    if (countEl) countEl.textContent = totalQty;
    if (drawerCountEl) drawerCountEl.textContent = totalQty;
}

function updateWishlistBadges() {
    const countEl = document.getElementById('wishlist-count');
    const drawerCountEl = document.getElementById('wishlist-drawer-count');
    if (countEl) countEl.textContent = state.wishlist.length;
    if (drawerCountEl) drawerCountEl.textContent = state.wishlist.length;
}

function initCartState() {
    updateCartBadges();
    const toggleBtn = document.getElementById('cart-toggle');
    const closeBtn = document.getElementById('close-cart-btn');
    const backdrop = document.getElementById('cart-backdrop');

    if (toggleBtn) toggleBtn.onclick = () => openCartDrawer();
    if (closeBtn) closeBtn.onclick = () => closeCartDrawer();
    if (backdrop) backdrop.onclick = () => closeCartDrawer();

    // Promo code applicator
    const applyBtn = document.getElementById('apply-coupon-btn');
    if (applyBtn) {
        applyBtn.onclick = () => {
            const input = document.getElementById('coupon-input');
            const code = input ? input.value.trim().toUpperCase() : '';
            if (code === 'AVELOUR20' || code === 'BLOOM20') {
                state.couponDiscount = 0.20;
                alert('20% Flash Sale Promo Code Applied!');
                renderCartDrawer();
            } else {
                alert('Invalid Promo Code');
            }
        };
    }
}

function openCartDrawer() {
    renderCartDrawer();
    document.getElementById('cart-drawer')?.classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cart-drawer')?.classList.remove('active');
}

function renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (state.cart.length === 0) {
        container.innerHTML = `<p class="text-center opacity-7">Your cart is currently empty.</p>`;
    } else {
        container.innerHTML = state.cart.map(item => `
            <div class="cart-item glass-card" style="display: flex; gap: 12px; padding: 12px; margin-bottom: 12px; align-items: center;">
                <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 0.95rem;">${item.name}</h4>
                    <span style="font-weight: 700; color: var(--secondary);">${formatPrice(item.price)}</span>
                </div>
                <div style="display: flex; gap: 6px; align-items: center;">
                    <button onclick="changeQty('${item.id}', -1)" style="padding: 2px 8px;">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty('${item.id}', 1)" style="padding: 2px 8px;">+</button>
                </div>
            </div>
        `).join('');
    }

    const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal * (1 - state.couponDiscount);

    document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('cart-total').textContent = formatPrice(total);
}

window.changeQty = (id, delta) => {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        state.cart = state.cart.filter(i => i.id !== id);
    }
    saveCartState();
};

function initWishlistState() {
    updateWishlistBadges();
    const btn = document.getElementById('wishlist-btn');
    const closeBtn = document.getElementById('close-wishlist-btn');
    const backdrop = document.getElementById('wishlist-backdrop');

    if (btn) btn.onclick = () => {
        renderWishlistDrawer();
        document.getElementById('wishlist-drawer')?.classList.add('active');
    };
    if (closeBtn) closeBtn.onclick = () => document.getElementById('wishlist-drawer')?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => document.getElementById('wishlist-drawer')?.classList.remove('active');
}

function renderWishlistDrawer() {
    const container = document.getElementById('wishlist-items-container');
    if (!container) return;
    if (state.wishlist.length === 0) {
        container.innerHTML = `<p class="text-center opacity-7">No wishlist items saved.</p>`;
    } else {
        container.innerHTML = state.wishlist.map(item => `
            <div class="wishlist-item glass-card" style="display: flex; gap: 12px; padding: 12px; margin-bottom: 12px; align-items: center;">
                <img src="${item.img}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1;">
                    <h4>${item.name}</h4>
                    <span style="font-weight: 700; color: var(--accent);">${formatPrice(item.price)}</span>
                </div>
                <button class="btn btn-sm btn-primary" onclick="addToCart('${item.id}')">+ Add to Cart</button>
            </div>
        `).join('');
    }
}

/* ==========================================================================
   5. Interactive 360° Product Turntable Canvas Viewer
   ========================================================================== */
function initTurntableModal() {
    const closeBtn = document.getElementById('close-quickview');
    const backdrop = document.getElementById('quickview-backdrop');
    if (closeBtn) closeBtn.onclick = () => document.getElementById('quickview-modal')?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => document.getElementById('quickview-modal')?.classList.remove('active');
}

function openTurntableModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const modal = document.getElementById('quickview-modal');
    if (!modal) return;

    document.getElementById('qv-title').textContent = product.name;
    document.getElementById('qv-category').textContent = product.tag;
    document.getElementById('qv-price').textContent = formatPrice(product.price);
    document.getElementById('qv-desc').textContent = product.desc;

    document.getElementById('qv-add-cart').onclick = () => addToCart(product.id);

    render3DCanvas(product.img);
    modal.classList.add('active');
}

function render3DCanvas(imgSrc) {
    const canvas = document.getElementById('turntable-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imgSrc;

    let isDragging = false;
    let startX = 0;
    let rotationAngle = 0;

    img.onload = () => {
        drawFrame();
    };

    function drawFrame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotationAngle * Math.PI) / 180);
        ctx.drawImage(img, -180, -180, 360, 360);
        ctx.restore();
    }

    canvas.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX;
    };
    window.onmousemove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        rotationAngle += dx * 0.5;
        startX = e.clientX;
        drawFrame();
    };
    window.onmouseup = () => (isDragging = false);
}

/* ==========================================================================
   6. AI Search & Live Voice Simulation
   ========================================================================== */
function initSearchModal() {
    const btn = document.getElementById('search-btn');
    const modal = document.getElementById('search-modal');
    const closeBtn = document.getElementById('close-search-btn');
    const backdrop = document.getElementById('search-backdrop');
    const input = document.getElementById('ai-search-input');
    const voiceBtn = document.getElementById('voice-search-btn');

    if (btn) btn.onclick = () => modal?.classList.add('active');
    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => modal?.classList.remove('active');

    if (input) {
        input.oninput = () => {
            const query = input.value.toLowerCase().trim();
            const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.category.includes(query));
            const grid = document.getElementById('search-results-grid');
            if (grid) {
                grid.innerHTML = results.map(p => `
                    <div class="glass-card" style="display: flex; gap: 12px; padding: 12px; align-items: center; margin-top: 8px;">
                        <img src="${p.img}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
                        <div style="flex:1;">
                            <h5>${p.name}</h5>
                            <span style="color: var(--secondary); font-weight: 700;">${formatPrice(p.price)}</span>
                        </div>
                        <div style="display: flex; gap: 6px;">
                            <button class="btn btn-sm btn-outline" onclick="openTurntableModal('${p.id}')">View</button>
                            <button class="btn btn-sm btn-primary" onclick="addToCart('${p.id}')">🛒 Add</button>
                        </div>
                    </div>
                `).join('');
            }
        };
    }

    if (voiceBtn) {
        voiceBtn.onclick = () => {
            if (input) {
                input.value = "Aether Obsidian Chronograph";
                input.dispatchEvent(new Event('input'));
            }
        };
    }
}

/* ==========================================================================
   7. Multi-Step Checkout & Confetti Celebration Canvas
   ========================================================================== */
function initMultiStepCheckout() {
    const btn = document.getElementById('checkout-btn');
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('close-checkout');
    const backdrop = document.getElementById('checkout-backdrop');

    if (btn) btn.onclick = () => {
        closeCartDrawer();
        modal?.classList.add('active');
    };
    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => modal?.classList.remove('active');

    // Step switching logic
    const step1 = document.getElementById('checkout-step-1');
    const step2 = document.getElementById('checkout-step-2');
    const step3 = document.getElementById('checkout-step-3');

    document.getElementById('btn-to-step-2').onclick = () => {
        step1.classList.remove('active');
        step2.classList.add('active');
        document.getElementById('dot-step-2').classList.add('active');
    };
    document.getElementById('btn-back-to-step-1').onclick = () => {
        step2.classList.remove('active');
        step1.classList.add('active');
    };
    document.getElementById('btn-to-step-3').onclick = () => {
        step2.classList.remove('active');
        step3.classList.add('active');
        document.getElementById('dot-step-3').classList.add('active');
        renderCheckoutSummary();
    };
    document.getElementById('btn-back-to-step-2').onclick = () => {
        step3.classList.remove('active');
        step2.classList.add('active');
    };

    const form = document.getElementById('checkout-form');
    if (form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            form.style.display = 'none';
            document.getElementById('checkout-success').style.display = 'block';
            runConfettiAnimation();
            state.cart = [];
            saveCartState();
        };
    }

    document.getElementById('close-success-btn').onclick = () => {
        modal?.classList.remove('active');
    };
}

function renderCheckoutSummary() {
    const box = document.getElementById('chk-summary-box');
    const totalEl = document.getElementById('chk-final-total');
    if (!box) return;
    const subtotal = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    box.innerHTML = state.cart.map(i => `<div>${i.name} (x${i.qty}) - ${formatPrice(i.price * i.qty)}</div>`).join('');
    if (totalEl) totalEl.textContent = formatPrice(subtotal * (1 - state.couponDiscount));
}

function runConfettiAnimation() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 300;

    const confetti = Array.from({ length: 80 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        color: ['#7F56D9', '#A855F7', '#F59E0B', '#10B981'][Math.floor(Math.random() * 4)],
        size: Math.random() * 6 + 4,
        vy: Math.random() * 3 + 2
    }));

    function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach(c => {
            c.y += c.vy;
            ctx.fillStyle = c.color;
            ctx.fillRect(c.x, c.y, c.size, c.size);
        });
        requestAnimationFrame(frame);
    }
    frame();
}

/* ==========================================================================
   8. Admin Analytics Chart & User Dashboard
   ========================================================================== */
function initAdminChart() {
    const btn = document.getElementById('admin-nav-btn');
    const footerBtn = document.getElementById('open-admin-link');
    const modal = document.getElementById('admin-modal');
    const closeBtn = document.getElementById('close-admin');

    const openAdmin = () => {
        modal?.classList.add('active');
        drawRevenueChart();
    };

    if (btn) btn.onclick = openAdmin;
    if (footerBtn) footerBtn.onclick = (e) => { e.preventDefault(); openAdmin(); };
    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
}

function drawRevenueChart() {
    const canvas = document.getElementById('admin-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const data = [12000, 19000, 15000, 28000, 24000, 32000, 45000];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    ctx.beginPath();
    ctx.strokeStyle = '#A855F7';
    ctx.lineWidth = 4;

    data.forEach((val, idx) => {
        const x = (idx / (data.length - 1)) * (canvas.width - 60) + 30;
        const y = canvas.height - (val / 50000) * (canvas.height - 40) - 20;
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
    ctx.stroke();
}

function initUserDashboard() {
    const btn = document.getElementById('open-dashboard-link');
    const traceMapBtn = document.getElementById('trace-order-map-btn');
    const modal = document.getElementById('dashboard-modal');
    const closeBtn = document.getElementById('close-dashboard');

    const openDash = () => {
        modal?.classList.add('active');
    };

    if (btn) btn.onclick = (e) => {
        e.preventDefault();
        openDash();
    };

    if (traceMapBtn) traceMapBtn.onclick = () => {
        document.getElementById('checkout-modal')?.classList.remove('active');
        openDash();
    };

    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
}

/* ==========================================================================
   9. Auth Modal & AI Chatbot Widget
   ========================================================================== */
function initAuthModal() {
    const btn = document.getElementById('auth-btn');
    const modal = document.getElementById('auth-modal');
    const closeBtn = document.getElementById('close-auth');
    const backdrop = document.getElementById('auth-backdrop');

    if (btn) btn.onclick = () => modal?.classList.add('active');
    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => modal?.classList.remove('active');

    // Method Switcher (Email vs Phone)
    const emailBtn = document.getElementById('method-email-btn');
    const phoneBtn = document.getElementById('method-phone-btn');
    const emailSec = document.getElementById('auth-email-section');
    const phoneSec = document.getElementById('auth-phone-section');
    const dividerText = document.getElementById('divider-text');

    if (emailBtn && phoneBtn) {
        emailBtn.onclick = () => {
            emailBtn.classList.add('active');
            phoneBtn.classList.remove('active');
            if (emailSec) emailSec.style.display = 'block';
            if (phoneSec) phoneSec.style.display = 'none';
            if (dividerText) dividerText.textContent = 'OR EMAIL SIGN IN';
        };

        phoneBtn.onclick = () => {
            phoneBtn.classList.add('active');
            emailBtn.classList.remove('active');
            if (emailSec) emailSec.style.display = 'none';
            if (phoneSec) phoneSec.style.display = 'block';
            if (dividerText) dividerText.textContent = 'OR PHONE SIGN IN';
        };
    }

    // Send SMS OTP Code Logic
    const sendOtpBtn = document.getElementById('send-otp-btn');
    const otpContainer = document.getElementById('otp-container');
    const phoneInput = document.getElementById('auth-phone');

    if (sendOtpBtn) {
        sendOtpBtn.onclick = () => {
            const num = phoneInput ? phoneInput.value.trim() : '';
            if (!num) {
                alert('Please enter your mobile phone number first.');
                return;
            }

            if (otpContainer) otpContainer.style.display = 'block';
            sendOtpBtn.textContent = '✓ SMS OTP Sent to ' + num;
            sendOtpBtn.disabled = true;

            // Auto focus first OTP digit box
            const firstDigit = document.querySelector('.otp-digit[data-idx="0"]');
            if (firstDigit) firstDigit.focus();
        };
    }

    // OTP Digit Inputs Auto-Focus Navigation
    const otpDigits = document.querySelectorAll('.otp-digit');
    otpDigits.forEach((digitInput, idx) => {
        digitInput.oninput = (e) => {
            if (e.target.value && idx < otpDigits.length - 1) {
                otpDigits[idx + 1].focus();
            }
        };
        digitInput.onkeydown = (e) => {
            if (e.key === 'Backspace' && !e.target.value && idx > 0) {
                otpDigits[idx - 1].focus();
            }
        };
    });

    // Form Submission
    const authForm = document.getElementById('auth-form');
    if (authForm) {
        authForm.onsubmit = (e) => {
            e.preventDefault();
            const isPhone = phoneBtn && phoneBtn.classList.contains('active');
            if (isPhone) {
                alert('Successfully signed in via Mobile Phone SMS OTP!');
            } else {
                alert('Successfully logged in via Email!');
            }
            modal?.classList.remove('active');
        };
    }
}

function initAIChatbot() {
    const toggleBtn = document.getElementById('chat-toggle-btn');
    const footerTrigger = document.getElementById('footer-chat-trigger');
    const windowEl = document.getElementById('chat-window');
    const closeBtn = document.getElementById('chat-close-btn');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send-btn');
    const messages = document.getElementById('chat-messages');

    const toggle = () => windowEl?.classList.toggle('active');

    if (toggleBtn) toggleBtn.onclick = toggle;
    if (footerTrigger) footerTrigger.onclick = (e) => { e.preventDefault(); toggle(); };
    if (closeBtn) closeBtn.onclick = toggle;

    const sendMessage = (text) => {
        if (!text) return;
        messages.innerHTML += `<div class="chat-msg user">${text}</div>`;
        input.value = '';
        setTimeout(() => {
            messages.innerHTML += `<div class="chat-msg bot">I recommend our <strong>Aether Obsidian Chronograph</strong> or <strong>Velvet Aura Haute Dress</strong> for timeless elegance.</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 600);
    };

    if (sendBtn) sendBtn.onclick = () => sendMessage(input.value);
    document.querySelectorAll('.prompt-chip').forEach(chip => {
        chip.onclick = () => sendMessage(chip.getAttribute('data-prompt'));
    });
}

/* ==========================================================================
   10. Timers, Theme & Currency Controls
   ========================================================================== */
function initCountdownTimer() {
    let seconds = 4 * 3600 + 32 * 60 + 18;
    setInterval(() => {
        seconds--;
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins');
        const sEl = document.getElementById('cd-secs');
        if (hEl) hEl.textContent = h;
        if (mEl) mEl.textContent = m;
        if (sEl) sEl.textContent = s;
    }, 1000);
}

function initThemeAndCurrency() {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.onclick = () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
        };
    }

    const currSelect = document.getElementById('currency-select');
    if (currSelect) {
        currSelect.onchange = (e) => {
            state.currency = e.target.value;
            renderProducts();
            renderTrendingCarousel();
            renderNewArrivals();
            renderCartDrawer();
        };
    }
}

function initScrollHeader() {
    window.onscroll = () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) header?.classList.add('sticky');
        else header?.classList.remove('sticky');
    };
}

/* ==========================================================================
   11. Standalone Product Page View Engine
   ========================================================================== */
function initProductPageModal() {
    const modal = document.getElementById('product-page-modal');
    const closeBtn = document.getElementById('close-product-page');
    const backdrop = document.getElementById('product-page-backdrop');

    if (closeBtn) closeBtn.onclick = () => modal?.classList.remove('active');
    if (backdrop) backdrop.onclick = () => modal?.classList.remove('active');

    // Make product card titles clickable to open the full Product Page
    document.addEventListener('click', (e) => {
        const cardTitle = e.target.closest('.product-card h3, .product-card img, .card-3d-details h3');
        if (cardTitle) {
            const card = cardTitle.closest('[data-id]');
            const id = card ? card.getAttribute('data-id') : 'p1';
            openProductPage(id);
        }
    });
}

function openProductPage(productId) {
    const p = PRODUCTS.find(prod => prod.id === productId) || PRODUCTS[0];
    const modal = document.getElementById('product-page-modal');
    if (!modal) return;

    // Populate Breadcrumb & Headers
    const crumbCat = document.getElementById('p-crumb-cat');
    const crumbName = document.getElementById('p-crumb-name');
    if (crumbCat) crumbCat.textContent = p.category.toUpperCase();
    if (crumbName) crumbName.textContent = p.name;

    document.getElementById('pp-tag').textContent = p.tag;
    document.getElementById('pp-title').textContent = p.name;
    document.getElementById('pp-price').textContent = formatPrice(p.price);
    document.getElementById('pp-desc').textContent = p.desc;
    document.getElementById('pp-main-img').src = p.img;

    // Update Sticky Bar
    document.getElementById('sticky-img').src = p.img;
    document.getElementById('sticky-title').textContent = p.name;
    document.getElementById('sticky-price').textContent = formatPrice(p.price);

    // Quantity controls
    let qty = 1;
    const qtyVal = document.getElementById('pp-qty-val');
    document.getElementById('pp-qty-minus').onclick = () => {
        if (qty > 1) { qty--; if (qtyVal) qtyVal.textContent = qty; }
    };
    document.getElementById('pp-qty-plus').onclick = () => {
        qty++; if (qtyVal) qtyVal.textContent = qty;
    };

    // Action buttons
    document.getElementById('pp-add-cart-btn').onclick = () => {
        for (let i = 0; i < qty; i++) addToCart(p.id);
    };

    document.getElementById('pp-buy-now-btn').onclick = () => {
        addToCart(p.id);
        modal.classList.remove('active');
        document.getElementById('checkout-modal')?.classList.add('active');
    };

    document.getElementById('sticky-buy-btn').onclick = () => {
        addToCart(p.id);
        modal.classList.remove('active');
        document.getElementById('checkout-modal')?.classList.add('active');
    };

    document.getElementById('pp-wishlist-btn').onclick = () => {
        toggleWishlist(p.id);
    };

    // Render Related Products
    const relatedGrid = document.getElementById('pp-related-grid');
    if (relatedGrid) {
        const related = PRODUCTS.filter(item => item.id !== p.id).slice(0, 4);
        relatedGrid.innerHTML = related.map(rel => createProductCardHTML(rel)).join('');
        attachProductCardEvents();
    }

    modal.classList.add('active');
}

/* ==========================================================================
   11. Interactive Scent Metaphor: Aura Canvas Synthesizer
   ========================================================================== */
function initScentAlchemyVisualizer() {
    const canvas = document.getElementById('aura-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let currentHue1 = 280; // Violet
    let currentHue2 = 40;  // Gold
    let angle = 0;

    const layersData = {
        top: {
            title: 'Top Accord',
            name: 'Calabrian Bergamot',
            desc: 'Sparkling • Zesty • Radiant',
            hue1: 180, // Cyan
            hue2: 45   // Gold
        },
        heart: {
            title: 'Heart Accord',
            name: 'Damask Rose & Jasmine',
            desc: 'Floral • Velvet • Emotional',
            hue1: 330, // Crimson Pink
            hue2: 270  // Purple
        },
        base: {
            title: 'Anchor Accord',
            name: 'Smoked Oud & Amber',
            desc: 'Deep • Smoked • Eternal',
            hue1: 30,  // Amber Gold
            hue2: 150  // Emerald Oud
        }
    };

    function drawAura() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        angle += 0.015;

        // Outer Rotating Glow Ring
        for (let i = 0; i < 3; i++) {
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle * (i % 2 === 0 ? 1 : -1) + (i * Math.PI / 3));

            const gradient = ctx.createRadialGradient(0, 0, 50, 0, 0, 150);
            gradient.addColorStop(0, `hsla(${currentHue1}, 85%, 60%, 0.3)`);
            gradient.addColorStop(0.5, `hsla(${currentHue2}, 90%, 55%, 0.15)`);
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(0, 0, 140 + Math.sin(angle * 2 + i) * 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(drawAura);
    }
    drawAura();

    // Layer Click / Hover Interaction
    const cards = document.querySelectorAll('.alchemy-layer-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => activateLayer(card));
        card.addEventListener('click', () => activateLayer(card));
    });

    function activateLayer(card) {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const key = card.dataset.layer;
        const data = layersData[key];
        if (!data) return;

        currentHue1 = data.hue1;
        currentHue2 = data.hue2;

        document.getElementById('aura-note-title').textContent = data.title;
        document.getElementById('aura-note-name').textContent = data.name;
        document.getElementById('aura-note-desc').textContent = data.desc;
    }
}

/* ==========================================================================
   12. Internal Canvas GPS Delivery Route Tracker (No Google API Trigger)
   ========================================================================== */
function initRouteMapCanvas() {
    const canvas = document.getElementById('route-map-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let progress = 0;

    function animateRoute() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const p1 = { x: 80, y: 180 };   // Grasse, FR
        const p2 = { x: 300, y: 60 };   // Waypoint Cargo Hub
        const p3 = { x: 520, y: 160 };  // Destination

        // Draw Vector Grid Lines
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
        }
        for (let y = 0; y < canvas.height; y += 40) {
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
        }

        // Draw Flight Curved Path
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 6]);
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(p2.x, p2.y, p3.x, p3.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw Waypoint Nodes
        [p1, p3].forEach((pt, idx) => {
            ctx.fillStyle = idx === 0 ? '#10B981' : '#F59E0B';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '11px Plus Jakarta Sans, sans-serif';
            ctx.fillText(idx === 0 ? 'Grasse Atelier (Origin)' : 'Delhi Hub (Destination)', pt.x - 35, pt.y + 24);
        });

        // Calculate Courier Animated Position along Quadratic Curve
        progress += 0.005;
        if (progress > 1) progress = 0;

        const t = progress;
        const cx = (1 - t) * (1 - t) * p1.x + 2 * (1 - t) * t * p2.x + t * t * p3.x;
        const cy = (1 - t) * (1 - t) * p1.y + 2 * (1 - t) * t * p2.y + t * t * p3.y;

        // Pulsing Radar Ring
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.6)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 14 + Math.sin(progress * 20) * 4, 0, Math.PI * 2);
        ctx.stroke();

        // Courier Icon Marker
        ctx.fillStyle = '#A855F7';
        ctx.beginPath();
        ctx.arc(cx, cy, 7, 0, Math.PI * 2);
        ctx.fill();

        requestAnimationFrame(animateRoute);
    }
    animateRoute();
}
