import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meal Plans', path: '/plans' },
    { name: 'Menu', path: '/menu' },
    { name: 'Diet Plans', path: '/experts' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-4 border-simmer-orange shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-simmer-orange rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white font-black text-xl">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-heading font-black tracking-tight text-simmer-dark leading-none">
              FITHER
            </span>
            <span className="text-[10px] uppercase font-bold text-simmer-orange tracking-widest leading-none">
              Healthy Kitchen
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group ${location.pathname === link.path ? 'text-simmer-orange' : 'text-gray-600 hover:text-simmer-orange'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-0.5 bg-simmer-orange transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          ))}
        </div>

        {/* Actions - Right */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/get-started" className="btn btn-primary shadow-lg hover:shadow-simmer-orange/20 px-8">
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-simmer-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-simmer-dark hover:text-simmer-orange"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100" />
              <Link to="/get-started" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full justify-center">
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
