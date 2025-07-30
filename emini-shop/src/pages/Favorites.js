import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { HeartIcon } from '@heroicons/react/24/outline';

const Favorites = () => {
  const { favorites, toggleFavorite } = useApp();

  const clearAllFavorites = () => {
    if (window.confirm('Are you sure you want to remove all items from your favorites?')) {
      favorites.forEach(product => toggleFavorite(product));
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <HeartIcon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your favorites list is empty</h2>
          <p className="text-gray-600 mb-8">Start adding products you love to see them here.</p>
          <Link
            to="/products"
            className="btn-primary"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Favorites</h1>
            <p className="text-gray-600">
              {favorites.length} item{favorites.length !== 1 ? 's' : ''} in your favorites
            </p>
          </div>
          <button
            onClick={clearAllFavorites}
            className="mt-4 sm:mt-0 text-red-600 hover:text-red-700 font-medium text-sm"
          >
            Clear All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {favorites.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            Continue Shopping →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;