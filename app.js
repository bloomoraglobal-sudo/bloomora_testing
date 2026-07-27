/**
 * AVELOUR ENTERPRISE REAL-TIME STORE ENGINE & CMS DATA MODEL
 * Real-time BroadcastChannel & LocalStorage sync engine.
 * Every edit made in admin.html instantly broadcasts to index.html in real time without code changes or redeployment.
 */

// Initial Seed Data for CMS Engine
const INITIAL_SEED_DATA = {
    settings: {
        siteName: 'Avelour',
        domain: 'bloomora.global',
        logoIcon: '❖',
        headline: 'Welcome to the House of Bloomora Global',
        subheadline: 'Immerse your senses in ultra-luxurious bespoke perfumes, rare oud extracts, and artisanal botanical elixirs, crafted in Grasse and delivered globally.',
        contactPhone: '+91 91493 72043',
        whatsappLink: 'https://wa.me/919149372043',
        currency: 'INR',
        language: 'en-IN',
        footerText: 'Redefining luxury shopping through digital craftsmanship, organic botanicals, and bespoke technology.'
    },

    categories: [
        { id: 'men-perfume', name: "👔 Men's Perfume", icon: '👔', img: 'assets/men_perfume.jpg', desc: 'Bold aged agarwood, leather, and zesty citrus accords.', count: 3, order: 1 },
        { id: 'women-perfume', name: "🌸 Women's Perfume", icon: '🌸', img: 'assets/women_perfume.jpg', desc: 'Rare French rose, velvet jasmines, and warm white musk.', count: 3, order: 2 },
        { id: 'unisex-perfume', name: "✨ Unisex Perfume", icon: '✨', img: 'assets/unisex_perfume.jpg', desc: 'Harmonious artisan blends designed for all sophisticated souls.', count: 3, order: 3 }
    ],

    products: [
        { id: 'pm1', sku: 'AV-MEN-001', name: 'Obsidian Oud Noir', category: 'men-perfume', brand: 'Avelour Atelier', price: 240.00, discount: 0, stock: 120, outOfStock: false, img: 'assets/men_perfume.jpg', rating: 5.0, reviews: 176, tag: "Men's Luxury Cologne", notes: 'Top: Calabrian Bergamot; Heart: Tuscan Leather; Base: Smoked Agarwood', desc: 'Smoked Cambodian agarwood blended with Tuscan black leather and royal amber stone.', gender: 'Men', isFeatured: true, isBestseller: true, isNew: false, createdAt: '2026-07-25' },
        { id: 'pm2', sku: 'AV-MEN-002', name: 'Cedar & Aged Tobacco Intense', category: 'men-perfume', brand: 'Avelour Atelier', price: 195.00, discount: 10, stock: 85, outOfStock: false, img: 'assets/men_perfume.jpg', rating: 4.9, reviews: 114, tag: "Men's Bespoke Cologne", notes: 'Top: Nutmeg & Cardamom; Heart: Cuban Tobacco; Base: Atlas Cedarwood', desc: 'Atlas cedarwood infused with hand-aged Cuban tobacco leaf, nutmeg, and cardamom.', gender: 'Men', isFeatured: false, isBestseller: false, isNew: true, createdAt: '2026-07-26' },
        { id: 'pm3', sku: 'AV-MEN-003', name: 'Calabrian Bergamot & Sea Salt', category: 'men-perfume', brand: 'Avelour Atelier', price: 175.00, discount: 0, stock: 42, outOfStock: false, img: 'assets/wood_note.jpg', rating: 4.8, reviews: 92, tag: "Men's Fresh Cologne", notes: 'Top: Zesty Bergamot; Heart: Ocean Mist; Base: Haitian Vetiver', desc: 'Zesty Calabrian bergamot combined with ocean spray mist, Haitian vetiver, and oakmoss.', gender: 'Men', isFeatured: false, isBestseller: false, isNew: false, createdAt: '2026-07-26' },
        { id: 'pw1', sku: 'AV-WOM-001', name: 'Rose Royale Eau de Parfum', category: 'women-perfume', brand: 'Avelour Atelier', price: 185.00, discount: 0, stock: 94, outOfStock: false, img: 'assets/women_perfume.jpg', rating: 5.0, reviews: 142, tag: "Women's Bespoke Perfume", notes: 'Top: Damask Rose; Heart: Vanilla Bean; Base: Crystal Amber', desc: 'Pure Damask rose extract blended with French Vanilla bean and warm crystal amber.', gender: 'Women', isFeatured: true, isBestseller: true, isNew: false, createdAt: '2026-07-25' },
        { id: 'pw2', sku: 'AV-WOM-002', name: 'Jasmine Elixir & Silk', category: 'women-perfume', brand: 'Avelour Atelier', price: 210.00, discount: 15, stock: 60, outOfStock: false, img: 'assets/women_perfume.jpg', rating: 4.9, reviews: 98, tag: "Women's Haute Perfume", notes: 'Top: Neroli Petals; Heart: Midnight Jasmine; Base: Cashmere Wood', desc: 'Midnight blooming jasmine with neroli petals and soft cashmere wood notes.', gender: 'Women', isFeatured: true, isBestseller: false, isNew: true, createdAt: '2026-07-26' },
        { id: 'pw3', sku: 'AV-WOM-003', name: 'Peony Blush & White Musk', category: 'women-perfume', brand: 'Avelour Atelier', price: 165.00, discount: 0, stock: 35, outOfStock: false, img: 'assets/floral_note.jpg', rating: 4.8, reviews: 85, tag: "Women's Floral Perfume", notes: 'Top: Red Apple; Heart: Peony Petals; Base: White Musk', desc: 'Crisp peony blossoms infused with wild red apple essence and velvety white musk.', gender: 'Women', isFeatured: false, isBestseller: false, isNew: false, createdAt: '2026-07-26' },
        { id: 'pu1', sku: 'AV-UNI-001', name: 'Velvet Rose & Amber Oud', category: 'unisex-perfume', brand: 'Avelour Atelier', price: 225.00, discount: 0, stock: 0, outOfStock: true, img: 'assets/unisex_perfume.jpg', rating: 4.9, reviews: 165, tag: "Unisex Atelier Fragrance", notes: 'Top: French Rose; Heart: Aged Agarwood; Base: Amber Resin', desc: 'Hand-poured Damask rose extract blended with aged agarwood, amber resin, and warm vanilla.', gender: 'Unisex', isFeatured: true, isBestseller: true, isNew: false, createdAt: '2026-07-25' },
        { id: 'pu2', sku: 'AV-UNI-002', name: 'Mysore Sandalwood & White Sage', category: 'unisex-perfume', brand: 'Avelour Atelier', price: 190.00, discount: 5, stock: 78, outOfStock: false, img: 'assets/candle_diffuser.jpg', rating: 4.8, reviews: 112, tag: "Unisex Bespoke Scents", notes: 'Top: White Sage; Heart: Mysore Sandalwood; Base: Coastal Moss', desc: 'Organic Mysore sandalwood with white sage leaves, cedarwood, and coastal moss.', gender: 'Unisex', isFeatured: false, isBestseller: false, isNew: true, createdAt: '2026-07-26' },
        { id: 'pu3', sku: 'AV-UNI-003', name: 'Golden Amber & Citrus Dew', category: 'unisex-perfume', brand: 'Avelour Atelier', price: 180.00, discount: 0, stock: 110, outOfStock: false, img: 'assets/hero_perfume.jpg', rating: 5.0, reviews: 130, tag: "Unisex Botanical Elixir", notes: 'Top: Sun Citrus; Heart: Amber Stone; Base: Frankincense', desc: 'Sun-ripened Mediterranean citrus infused with golden amber stone and frankincense.', gender: 'Unisex', isFeatured: false, isBestseller: false, isNew: false, createdAt: '2026-07-26' }
    ],

    coupons: [
        { code: 'AVELOUR20', discount: 20, type: 'percent', expiry: '2026-12-31', maxUses: 1000, currentUses: 142 },
        { code: 'WELCOME10', discount: 10, type: 'percent', expiry: '2026-12-31', maxUses: 500, currentUses: 88 },
        { code: 'ROYAL50', discount: 50, type: 'fixed', expiry: '2026-08-31', maxUses: 100, currentUses: 12 }
    ],

    blogs: [
        { id: 'b1', title: 'The Art of Grasse Perfumery & Smoked Oud Extraction', author: 'Antoine de Bloomora', date: 'July 24, 2026', category: 'Perfume Craftsmanship', img: 'assets/hero_perfume.jpg', excerpt: 'Discover how master perfumers select raw Damask rose and distill smoked Cambodian agarwood in southern France.', content: 'Full blog article detailing the extraction process...', seoTitle: 'Grasse Perfumery & Smoked Oud Artistry | Avelour', seoDesc: 'Master perfumery techniques from Grasse, France.' },
        { id: 'b2', title: 'Top 5 Winter Oud Accords for Indian Royalty', author: 'Lady Eleanor Vance', date: 'July 20, 2026', category: 'Fragrance Guides', img: 'assets/men_perfume.jpg', excerpt: 'Explore the warmest amber stone and agarwood blends crafted specifically for cold winter evenings.', content: 'Full winter fragrance guide...', seoTitle: 'Top 5 Winter Oud Accords | Avelour', seoDesc: 'Discover warm luxury agarwood fragrances.' }
    ],

    reviews: [
        { id: 'r1', productId: 'pm1', author: 'Vikramaditya T.', rating: 5, date: 'July 26, 2026', title: 'Smells insanely regal!', comment: 'The smoked agarwood and Tuscan leather notes last 24+ hours on clothes. Best oud cologne in India!', status: 'approved' },
        { id: 'r2', productId: 'pw1', author: 'Priya S.', rating: 5, date: 'July 25, 2026', title: 'Pure Parisian Elegance', comment: 'The Damask rose and crystal amber bean combination is mesmerising. Shipped fast to New Delhi.', status: 'approved' }
    ],

    auditLogs: [
        { id: 'log_1', user: 'Super Admin', role: 'Super Admin', action: 'System Initialized', target: 'AvelourStoreEngine', timestamp: '2026-07-27 21:55:00' }
    ]
};

// Initialize or Load Persistent Store Engine
window.AvelourStoreEngine = (function() {
    const STORAGE_KEY = 'avelour_dynamic_db';
    const syncChannel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('avelour_realtime_sync') : null;

    function getStore() {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_DATA));
            return INITIAL_SEED_DATA;
        }
        try {
            return JSON.parse(data);
        } catch(e) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SEED_DATA));
            return INITIAL_SEED_DATA;
        }
    }

    function saveStore(store, actionName, user = 'Admin (CMS)') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        
        // Log Audit Action
        if (actionName) {
            const logEntry = {
                id: 'log_' + Date.now(),
                user: user,
                role: 'Admin',
                action: actionName,
                timestamp: new Date().toLocaleString('en-IN')
            };
            store.auditLogs.unshift(logEntry);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        }

        // Broadcast to all open tabs and windows in real time!
        if (syncChannel) {
            syncChannel.postMessage({ type: 'STORE_UPDATED', action: actionName, timestamp: Date.now() });
        }
    }

    return {
        getStore,
        saveStore,
        getProducts: () => getStore().products || [],
        getCategories: () => getStore().categories || [],
        getSettings: () => getStore().settings || INITIAL_SEED_DATA.settings,
        getCoupons: () => getStore().coupons || [],
        getBlogs: () => getStore().blogs || [],
        getReviews: () => getStore().reviews || [],
        getAuditLogs: () => getStore().auditLogs || [],
        subscribe: (callback) => {
            if (syncChannel) {
                syncChannel.onmessage = (event) => {
                    if (event.data?.type === 'STORE_UPDATED') {
                        callback(event.data);
                    }
                };
            }
            window.addEventListener('storage', (e) => {
                if (e.key === STORAGE_KEY) {
                    callback({ type: 'STORAGE_EVENT' });
                }
            });
        }
    };
})();

// AVELOUR ENTERPRISE AUTHENTICATION & SECURITY ENGINE
window.AvelourAuthEngine = (function() {
    const SESSION_KEY = 'avelour_auth_session';
    const USERS_KEY = 'avelour_auth_users';
    const LOCKOUT_KEY = 'avelour_auth_lockouts';

    const INITIAL_USERS = [
        { id: 'u1', name: 'Lady Eleanor Vance', email: 'admin@bloomora.global', username: 'eleanor', passwordHash: 'AdminPass123!', role: 'Super Admin', phone: '+91 91493 72043', isVerified: true, createdAt: '2026-07-01' },
        { id: 'u2', name: 'Vikramaditya Thorne', email: 'vikram@bloomora.global', username: 'vikram', passwordHash: 'AvelourPass123!', role: 'Admin', phone: '+91 98765 43210', isVerified: true, createdAt: '2026-07-10' },
        { id: 'u3', name: 'Siddharth Staff', email: 'staff@bloomora.global', username: 'siddharth', passwordHash: 'StaffPass123!', role: 'Staff', phone: '+91 91234 56789', isVerified: true, createdAt: '2026-07-15' }
    ];

    function getUsers() {
        const u = localStorage.getItem(USERS_KEY);
        if (!u) {
            localStorage.setItem(USERS_KEY, JSON.stringify(INITIAL_USERS));
            return INITIAL_USERS;
        }
        try { return JSON.parse(u); } catch(e) { return INITIAL_USERS; }
    }

    function getLockouts() {
        try { return JSON.parse(localStorage.getItem(LOCKOUT_KEY) || '{}'); } catch(e) { return {}; }
    }

    function saveLockouts(l) {
        localStorage.setItem(LOCKOUT_KEY, JSON.stringify(l));
    }

    function calculatePasswordStrength(password) {
        if (!password) return { score: 0, label: 'Empty', color: '#EF4444', width: '0%' };
        let score = 0;
        if (password.length >= 8) score += 25;
        if (/[A-Z]/.test(password)) score += 25;
        if (/[0-9]/.test(password)) score += 25;
        if (/[^A-Za-z0-9]/.test(password)) score += 25;

        if (score <= 25) return { score, label: 'Weak ⚠️', color: '#EF4444', width: '25%' };
        if (score <= 50) return { score, label: 'Fair ⚡', color: '#F59E0B', width: '50%' };
        if (score <= 75) return { score, label: 'Good 🔒', color: '#3B82F6', width: '75%' };
        return { score, label: 'Strong 💪', color: '#10B981', width: '100%' };
    }

    return {
        getUsers,
        calculatePasswordStrength,
        
        signUp: function({ name, email, username, password, phone, role = 'Admin' }) {
            const users = getUsers();
            const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
            if (exists) return { success: false, error: 'An account with this email address already exists.' };

            const newUser = {
                id: 'u_' + Date.now(),
                name,
                email,
                username: username || email.split('@')[0],
                passwordHash: password,
                role,
                phone: phone || '+91 91493 72043',
                isVerified: true,
                createdAt: new Date().toISOString()
            };

            users.push(newUser);
            localStorage.setItem(USERS_KEY, JSON.stringify(users));

            // Log Audit Event
            AvelourStoreEngine.saveStore(AvelourStoreEngine.getStore(), `New Account Registered: ${name} (${email})`, name);

            return { success: true, user: newUser, verifyCode: '881920' };
        },

        login: function({ emailOrUsername, password, rememberMe }) {
            const lockouts = getLockouts();
            const key = emailOrUsername.toLowerCase();
            const now = Date.now();

            if (lockouts[key] && lockouts[key].lockedUntil > now) {
                const mins = Math.ceil((lockouts[key].lockedUntil - now) / 60000);
                return { success: false, error: `Account locked due to 5 failed attempts. Please try again in ${mins} minute(s).` };
            }

            const users = getUsers();
            const user = users.find(u => u.email.toLowerCase() === key || u.username.toLowerCase() === key);

            if (!user || user.passwordHash !== password) {
                const attempts = (lockouts[key]?.attempts || 0) + 1;
                let lockedUntil = 0;
                if (attempts >= 5) {
                    lockedUntil = now + (15 * 60 * 1000);
                }
                lockouts[key] = { attempts, lockedUntil };
                saveLockouts(lockouts);

                AvelourStoreEngine.saveStore(AvelourStoreEngine.getStore(), `Failed Login Attempt for ${emailOrUsername}`, 'Anonymous');

                if (attempts >= 5) {
                    return { success: false, error: '⚠️ 5 Failed Login Attempts reached! Account locked for 15 minutes for brute-force protection.' };
                }
                return { success: false, error: `Invalid credentials. (${5 - attempts} attempt(s) remaining before 15-min lockout)` };
            }

            delete lockouts[key];
            saveLockouts(lockouts);

            const session = {
                token: 'jwt_avelour_' + Math.random().toString(36).substring(2) + Date.now(),
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    phone: user.phone
                },
                expiresAt: Date.now() + (rememberMe ? 7 * 24 * 60 * 60 * 1000 : 2 * 60 * 60 * 1000)
            };

            localStorage.setItem(SESSION_KEY, JSON.stringify(session));

            AvelourStoreEngine.saveStore(AvelourStoreEngine.getStore(), `User Login Success: ${user.name} (${user.role})`, user.name);

            return { success: true, session };
        },

        getSession: function() {
            try {
                const s = JSON.parse(localStorage.getItem(SESSION_KEY));
                if (!s || s.expiresAt < Date.now()) {
                    localStorage.removeItem(SESSION_KEY);
                    return null;
                }
                return s;
            } catch(e) { return null; }
        },

        logout: function() {
            const s = this.getSession();
            if (s) {
                AvelourStoreEngine.saveStore(AvelourStoreEngine.getStore(), `User Logged Out: ${s.user.name}`, s.user.name);
            }
            localStorage.removeItem(SESSION_KEY);
            if (window.location.pathname.includes('admin.html')) {
                window.location.reload();
            }
        }
    };
})();

// Active Products Array dynamically backed by AvelourStoreEngine
let PRODUCTS = AvelourStoreEngine.getProducts();

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

    // Real-Time Live Sync Subscriber (Updates index.html live without refreshing page)
    AvelourStoreEngine.subscribe((data) => {
        PRODUCTS = AvelourStoreEngine.getProducts();
        renderProducts();
        renderTrendingCarousel();
        renderNewArrivals();
        renderDynamicCategories();
        renderDynamicSiteSettings();
    });

    renderDynamicCategories();
    renderDynamicSiteSettings();
});

function renderDynamicCategories() {
    const cats = AvelourStoreEngine.getCategories();
    const grid = document.querySelector('.categories-grid');
    if (grid && cats.length) {
        grid.innerHTML = cats.map(c => `
            <div class="category-card glass-card" data-category="${c.id}">
                <img src="${c.img || 'assets/unisex_perfume.jpg'}" alt="${c.name}">
                <div class="category-overlay">
                    <span class="badge-cat">${c.count || 3} Items</span>
                    <h3>${c.name}</h3>
                    <p>${c.desc || 'Ultra-luxurious bespoke fragrance accords.'}</p>
                    <span class="cat-arrow">Explore ${c.name} &rarr;</span>
                </div>
            </div>
        `).join('');
    }
}

function renderDynamicSiteSettings() {
    const s = AvelourStoreEngine.getSettings();
    const heroTitle = document.querySelector('.hero-title');
    const heroSub = document.querySelector('.hero-subheadline');
    const brandLogos = document.querySelectorAll('.logo');
    const footerDesc = document.querySelector('.footer-desc');

    if (heroTitle && s.headline) heroTitle.innerHTML = s.headline;
    if (heroSub && s.subheadline) heroSub.textContent = s.subheadline;
    if (footerDesc && s.footerText) footerDesc.textContent = s.footerText;
}

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
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header?.classList.add('sticky');
        else header?.classList.remove('sticky');
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.onclick = () => {
            navMenu.classList.toggle('mobile-active');
            menuToggle.classList.toggle('active');
        };
        document.querySelectorAll('.nav-link').forEach(link => {
            link.onclick = () => {
                navMenu.classList.remove('mobile-active');
                menuToggle.classList.remove('active');
            };
        });
    }
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
