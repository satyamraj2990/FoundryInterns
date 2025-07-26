import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, User, Building, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: null },
    { path: '/opportunities', label: 'Opportunities', icon: Search },
    { path: '/companies', label: 'Companies', icon: Building },
    { path: '/dashboard', label: 'Dashboard', icon: User },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative p-3 foundry-logo rounded-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 foundry-spark rounded-full"></div>
                <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center foundry-core">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full foundry-spark"></div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Foundry<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 animate-gradient-shift">Interns</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(path)
                    ? 'text-pink-600 bg-pink-50 animate-glow-pulse'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-25 hover-bounce'
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-300 hover:scale-125 hover-wiggle notification-badge relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full animate-heartbeat"></span>
            </button>
            <Link
              to="/profile"
              className="p-2 text-gray-600 hover:text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-300 hover:scale-125 hover-heartbeat"
            >
              <User className="h-5 w-5" />
            </Link>
            <button className="bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white px-6 py-2 rounded-2xl font-semibold btn-adorable ripple sparkle-effect floating-hearts">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'text-pink-600 bg-pink-50 animate-glow-pulse'
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-25 hover-bounce'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{label}</span>
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 text-white px-4 py-2 rounded-2xl font-semibold btn-adorable">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;