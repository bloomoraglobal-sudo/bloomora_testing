# Avelour (bloomora.global) - Next-Gen Luxury E-Commerce Web Application

**Avelour** (`bloomora.global`) is a world-class luxury e-commerce web application engineered for bespoke perfumes, haute couture fashion, next-gen electronics, organic beauty, and timeless chronographs.

---

## 🚀 Quick Start / How to Open

### Method 1: Open Directly in Browser
Simply double-click or open `index.html` in any web browser:
- [index.html](file:///C:/Users/hp/.gemini/antigravity/scratch/bloomora/index.html)

### Method 2: Host via Python Local HTTP Server
Run the following command in terminal inside `C:\Users\hp\.gemini\antigravity\scratch\bloomora`:
```bash
python -m http.server 5173
```
Then visit: `http://localhost:5173`

---

## 🎨 Design System & Theme

- **Brand Name**: Avelour
- **Domain Name**: bloomora.global
- **Background Theme**: Deep Luxury Dark Blue (`linear-gradient(135deg, #0A0F1D 0%, #0B132B 50%, #1C2541 100%)`).
- **Accent Colors**: Royal Violet (`#7F56D9`), Neon Purple (`#A855F7`), Golden Amber (`#F59E0B`).
- **Glassmorphism**: Backdrop blur cards with glowing mouse-follow cursor and particle canvas physics.

---

## ✨ Features Breakdown

1. **Product Database & Categories**:
   - 🌸 **Women's Perfumes**: Rose Royale Eau de Parfum, Jasmine Elixir & Silk, Peony Blush & White Musk.
   - 👔 **Men's Colognes**: Obsidian Oud Noir, Cedar & Tobacco Intense, Bergamot & Sea Salt.
   - 👗 **Fashion**: Velvet Aura Haute Dress, Silk Kimono Loungewear.
   - 🎧 **Electronics**: Obsidian Noise-Canceling Headphones.
   - 🌿 **Home Decor & Beauty**: Mysore Sandalwood Soy Candle, Botanical Dew Serum.
   - ⌚ **Accessories**: Aether Obsidian Chronograph, Celestial Gold Pendant.

2. **Standalone Full Product Page**:
   - Image gallery thumbnail switcher + zoom on hover + 360° interactive turntable canvas + size/color swatches + quantity picker + `🛒 Add to Cart` + `⚡ Buy Now` + customer reviews + sticky purchase bar.

3. **Authentication Modal**:
   - Dual sign-in options: **✉ Email Sign In** and **📱 Phone Sign In** (with country code selector & 6-digit SMS OTP verification code inputs).

4. **Interactive Overlays & Portals**:
   - **Cart Drawer**: Real-time total calculation with `AVELOUR20` promo code applicator (20% off).
   - **Multi-Step Checkout**: Step 1 Shipping &rarr; Step 2 Payment &rarr; Step 3 Confirmation + Confetti explosion canvas animation.
   - **User Dashboard**: Profile manager and order tracking status timeline.
   - **Admin Analytics Portal**: Revenue performance canvas line chart & live sales metrics.
   - **AI Live Search**: Real-time auto-suggestions + voice search simulation.
   - **AI Stylist Concierge**: Floating chatbot assistant dialog.
   - **Multi-Currency & Language Selectors**: Live conversion across $ USD, € EUR, £ GBP, ₹ INR, ¥ JPY.

---

## 📁 File Structure

```
bloomora/
├── index.html        # Main HTML5 application structure & modals
├── index.css         # Glassmorphism design system & dark blue theme styles
├── app.js            # Frontend JavaScript engine, cart state, 360 viewer & checkout
├── README.md         # Documentation & saved project overview
└── assets/           # High-resolution product showcase images
    ├── fashion.jpg
    ├── electronics.jpg
    ├── beauty.jpg
    ├── accessories.jpg
    ├── women_perfume.jpg
    ├── men_perfume.jpg
    ├── hero_perfume.jpg
    ├── candle_diffuser.jpg
    ├── floral_note.jpg
    └── wood_note.jpg
```
