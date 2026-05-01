import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Upload, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'SERVICES', href: '/services' },
  { label: 'INDUSTRIES', href: '/industries' },
  { label: 'JOB OPENINGS', href: '/jobs' },
  { label: 'TESTIMONIALS', href: '/testimonials' },
  { label: 'CONTACT US', href: '/contact-us' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-cream-100/95 shadow-soft backdrop-blur-sm' : 'bg-cream-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo centered */}
        <div className="flex justify-center pt-4 pb-2">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Clann Staffing" className="h-40 w-auto object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 pb-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-200 ${
                isActive(link.href)
                  ? 'text-amber'
                  : 'text-navy-800 hover:text-amber'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center justify-between pb-3">
          <span className="text-sm font-sans text-navy-700">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-navy-800 hover:text-amber transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream-100 border-t border-cream-200 overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-4 py-3 text-sm font-sans font-medium tracking-wide rounded-md transition-colors ${
                    isActive(link.href)
                      ? 'text-amber bg-cream-200'
                      : 'text-navy-800 hover:text-amber hover:bg-cream-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <Link
                  to="/upload-resume"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-navy-800 text-white rounded-md text-sm font-medium hover:bg-navy-900 transition-colors"
                >
                  <Upload size={16} />
                  Upload Resume
                </Link>
                <Link
                  to="/contact-us"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-amber text-white rounded-md text-sm font-medium hover:bg-amber-dark transition-colors"
                >
                  <Phone size={16} />
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Buttons row (desktop) */}
      <div className="hidden lg:block border-t border-cream-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex justify-end gap-3">
          <Link
            to="/upload-resume"
            className="inline-flex items-center gap-2 px-5 py-2 bg-navy-800 text-white rounded-pill text-sm font-medium hover:bg-navy-900 transition-all hover:shadow-soft"
          >
            <Upload size={16} />
            Upload Resume
          </Link>
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 px-5 py-2 bg-amber text-white rounded-pill text-sm font-medium hover:bg-amber-dark transition-all hover:shadow-soft"
          >
            <Phone size={16} />
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
