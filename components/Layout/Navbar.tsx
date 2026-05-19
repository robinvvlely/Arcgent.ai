import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'How We Work', path: '/how-we-work' },
    { label: 'Services', path: '/services' },
    { label: 'Why AI-SOPs', path: '/why-ai-sops' },
    { label: 'About', path: '/about' },
    { label: 'DCA Calculator', path: '/sp500-dca-calculator' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-brand-600 p-2.5 rounded-xl text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105">
              <Logo size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-stone-900 tracking-tight">Arcgent</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors hover:text-brand-600 ${location.pathname === link.path ? 'text-brand-600' : 'text-stone-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <Button to="/contact" variant="primary" className="py-2.5 px-6 text-sm">
              Book Audit
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none p-2 bg-stone-100 rounded-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-stone-100 shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 rounded-xl text-base font-semibold text-stone-700 hover:text-brand-600 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-2">
               <Button to="/contact" variant="primary" fullWidth>
                Book Audit
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;