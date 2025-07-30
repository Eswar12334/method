import React, { createContext, useContext, useReducer, useEffect } from 'react';
import toast from 'react-hot-toast';

const AppContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  favorites: [],
  products: [],
  orders: [],
  isLoading: false,
  searchQuery: '',
  selectedCategory: 'all',
  isAdmin: false
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_USER':
      return { 
        ...state, 
        user: action.payload, 
        isAuthenticated: !!action.payload,
        isAdmin: action.payload?.role === 'admin'
      };
    
    case 'LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { 
        ...state, 
        user: null, 
        isAuthenticated: false, 
        isAdmin: false,
        cart: [],
        favorites: []
      };
    
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.favorites.some(fav => fav.id === action.payload.id);
      if (isFavorite) {
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav.id !== action.payload.id)
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    
    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load user from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (token && user) {
      try {
        const parsedUser = JSON.parse(user);
        dispatch({ type: 'SET_USER', payload: parsedUser });
      } catch (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Actions
  const login = async (email, password) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Mock authentication - in real app, this would be an API call
      if (email === 'admin@emini-shop.com' && password === 'admin123') {
        const adminUser = {
          id: 1,
          name: 'Admin User',
          email: email,
          role: 'admin',
          phone: '+91 9876543210'
        };
        localStorage.setItem('token', 'mock-admin-token');
        localStorage.setItem('user', JSON.stringify(adminUser));
        dispatch({ type: 'SET_USER', payload: adminUser });
        toast.success('Welcome Admin!');
        return { success: true };
      } else if (email === 'user@example.com' && password === 'user123') {
        const regularUser = {
          id: 2,
          name: 'John Doe',
          email: email,
          role: 'user',
          phone: '+91 9876543211'
        };
        localStorage.setItem('token', 'mock-user-token');
        localStorage.setItem('user', JSON.stringify(regularUser));
        dispatch({ type: 'SET_USER', payload: regularUser });
        toast.success('Welcome back!');
        return { success: true };
      } else {
        toast.error('Invalid email or password');
        return { success: false, error: 'Invalid credentials' };
      }
    } catch (error) {
      toast.error('Login failed');
      return { success: false, error: error.message };
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const register = async (userData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Mock registration - in real app, this would be an API call
      const newUser = {
        id: Date.now(),
        ...userData,
        role: 'user'
      };
      
      localStorage.setItem('token', 'mock-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify(newUser));
      dispatch({ type: 'SET_USER', payload: newUser });
      toast.success('Account created successfully!');
      return { success: true };
    } catch (error) {
      toast.error('Registration failed');
      return { success: false, error: error.message };
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  };

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Added to cart!');
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    toast.success('Removed from cart');
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity } });
  };

  const toggleFavorite = (product) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: product });
    const isFavorite = state.favorites.some(fav => fav.id === product.id);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  const setCategory = (category) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  const addOrder = (order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    toggleFavorite,
    clearCart,
    setSearchQuery,
    setCategory,
    addOrder,
    dispatch
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}