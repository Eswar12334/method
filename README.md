# Emini-Shop

Emini-Shop is a full-stack e-commerce web application built with React.js, TailwindCSS, Node.js/Express, and MongoDB. It offers a modern, responsive shopping experience with Indian payment gateway integration (Razorpay) and JWT-based authentication.

## ✨ Key Features

* Modern, clean and fully responsive UI built with React 18 + TailwindCSS
* User authentication with JWT (signup, login, protected routes)
* Product browsing by category, search & live filters
* Shopping cart & wishlist management
* Secure checkout flow with Razorpay – supporting UPI, cards & wallets in ₹
* Order history & profile management for customers
* Admin dashboard for managing products & viewing orders

## 🖥️ Tech Stack

| Layer   | Technology |
|---------|------------|
| Frontend| React 18, React Router 6, Context API, Axios, TailwindCSS, Vite |
| Backend | Node.js 20, Express 4, MongoDB (Mongoose), JWT, Razorpay SDK |

## 🚀 Getting Started

The project is organised as a **mono-repo** with two workspaces:

```
/client   → React frontend (Vite)
/server   → Node/Express backend
```

### Prerequisites

* Node.js ≥ 18 & npm
* MongoDB running locally or Atlas URI
* Razorpay account (for live payments) – optional for dev

### 1. Clone & Install

```bash
# clone repository
git clone <repo-url> emini-shop
cd emini-shop

# install root dependencies (none) and then each workspace
cd client && npm install
cd ../server && npm install
```

### 2. Environment Variables

Create a `.env` file inside `/server` with the following keys:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/emini-shop
JWT_SECRET=supersecretkey
RAZORPAY_KEY_ID=<your_key_id>
RAZORPAY_KEY_SECRET=<your_key_secret>
```

### 3. Run Development Servers

```bash
# in /client
npm run dev       # starts Vite dev server on http://localhost:5173

# in /server
npm run dev       # starts Express API on http://localhost:5000
```

The React app proxies API requests to `/api/*` paths automatically in development (see `vite.config.js`).

### 4. Build for Production

```bash
cd client && npm run build   # generates static files in dist/
cd ../server && npm start    # make sure PORT env is set
```

## 📂 Project Structure (simplified)

```
client/
  ├─ src/
  │   ├─ components/   # reusable UI components
  │   ├─ pages/        # route pages (Home, Cart, Login…)
  │   ├─ context/      # React Context providers (Auth, Cart)
  │   ├─ hooks/        # custom hooks
  │   ├─ api/          # axios instances & helpers
  │   └─ App.jsx
  └─ index.html

server/
  ├─ models/           # Mongoose schemas (User, Product, Order)
  ├─ routes/           # Express routers (auth, products, orders)
  ├─ controllers/      # Route handlers
  ├─ utils/            # helper functions (auth, payment)
  └─ index.js          # entry point
```

## 🛣️ Roadmap

- [ ] Basic project skeleton (you are here)
- [ ] Implement UI pages & state management
- [ ] Implement backend routes & controllers
- [ ] Razorpay integration & webhooks
- [ ] Unit & integration tests

## 📝 License

MIT © 2023-present Emini-Shop Contributors