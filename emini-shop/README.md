# 🛍️ Emini-Shop - Full-Stack E-Commerce Website

A modern, responsive e-commerce website built with React.js featuring realistic Indian e-commerce experience with comprehensive shopping features.

![Emini-Shop Banner](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop)

## ✨ Features

### 🏠 **Home Page**
- Modern hero section with call-to-action
- Product categories showcase
- Featured products carousel
- Newsletter subscription
- Responsive design

### 🔐 **Authentication System**
- User registration with validation
- Secure login system
- Password visibility toggle
- Form validation with error handling
- Demo credentials provided

### 🛒 **Shopping Experience**
- Advanced product catalog with filtering
- Search functionality
- Category-based browsing
- Product detail pages with image gallery
- Shopping cart with quantity management
- Favorites/Wishlist functionality
- Order summary and checkout flow

### 💰 **Indian E-Commerce Features**
- Indian Rupee (₹) currency formatting
- Indian payment methods (UPI, Paytm, Razorpay, COD)
- Indian phone number validation
- Free shipping above ₹999
- Realistic Indian product pricing

### 👨‍💼 **Admin Dashboard**
- Product management (Add/Edit/Delete)
- Order management
- User management
- Sales analytics

### 📱 **Mobile-First Design**
- Fully responsive across all devices
- Touch-friendly interface
- Mobile navigation menu
- Optimized product cards

## 🚀 Demo Credentials

### User Account
- **Email:** `user@example.com`
- **Password:** `user123`

### Admin Account
- **Email:** `admin@emini-shop.com`
- **Password:** `admin123`

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Heroicons** - Beautiful hand-crafted SVG icons
- **React Hot Toast** - Toast notifications

### State Management
- **React Context API** - Global state management
- **useReducer** - Complex state updates
- **Local Storage** - Data persistence

### Development Tools
- **Create React App** - Project bootstrapping
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd emini-shop
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🗂️ Project Structure

```
emini-shop/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   │   ├── ProtectedRoute.js
│   │   └── AdminRoute.js
│   ├── pages/             # Page components
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Products.js
│   │   ├── ProductDetail.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Favorites.js
│   │   ├── Profile.js
│   │   ├── Orders.js
│   │   └── AdminDashboard.js
│   ├── context/           # React Context
│   │   └── AppContext.js
│   ├── data/              # Sample data
│   │   └── products.js
│   ├── utils/             # Utility functions
│   │   └── helpers.js
│   ├── services/          # API services
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Features Implemented

### ✅ **Authentication**
- [x] User registration with validation
- [x] Secure login system
- [x] Protected routes
- [x] Admin role management

### ✅ **Product Management**
- [x] Product catalog with filtering
- [x] Search functionality
- [x] Category browsing
- [x] Product detail pages
- [x] Image gallery

### ✅ **Shopping Cart**
- [x] Add/remove items
- [x] Quantity management
- [x] Order summary
- [x] Price calculations
- [x] Free shipping threshold

### ✅ **User Experience**
- [x] Favorites/Wishlist
- [x] Responsive design
- [x] Toast notifications
- [x] Loading states
- [x] Error handling

### ✅ **Indian E-Commerce**
- [x] Indian currency formatting
- [x] Indian payment methods
- [x] Indian phone validation
- [x] Realistic pricing

## 🎨 Design System

### Color Palette
- **Primary Blue:** #3b82f6 (Various shades)
- **Accent Purple:** #d946ef (Various shades)
- **Success Green:** #10b981
- **Error Red:** #ef4444
- **Warning Yellow:** #f59e0b

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Weights:** 100-900

### Components
- Consistent button styles
- Card-based layouts
- Form input styling
- Responsive grid system

## 📱 Mobile Features

- Touch-friendly interface
- Swipe gestures
- Mobile navigation
- Optimized images
- Fast loading

## 🔮 Future Enhancements

### Backend Integration
- [ ] REST API development
- [ ] Database integration
- [ ] Real authentication
- [ ] Payment gateway integration

### Advanced Features
- [ ] Product reviews system
- [ ] Real-time inventory
- [ ] Order tracking
- [ ] Email notifications
- [ ] Multi-language support

### Performance
- [ ] Image optimization
- [ ] Code splitting
- [ ] PWA features
- [ ] Caching strategies

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

Built with ❤️ using React.js and TailwindCSS

---

**Happy Shopping! 🛍️**
