import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/cart', label: 'Cart' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/profile', label: 'Profile' },
];

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-primary">Emini-Shop</Link>
        <nav className="space-x-4">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}