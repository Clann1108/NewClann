import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    handleScroll();
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/95 shadow-md backdrop-blur-sm'
          : 'bg-cream-100'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* DEFAULT STATE: Large centered logo + desktop nav */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            scrolled
              ? 'max-h-0 opacity-0 overflow-hidden'
              : 'max-h-[400px] opacity-100 py-6 sm:py-8 lg:py-10'
          }`}
        >
          <div className="flex flex-col items-center relative">
            {/* Mobile menu button — top right */}
            <div className="lg:hidden absolute right-0 top-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-navy-800 hover:text-amber transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <Link to="/" className="mb-3 lg:mb-5">
              <img
                src="/logo.png"
                alt="Clann Staffing"
                className="h-28 sm:h-36 lg:h-44 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
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
          </div>
        </div>

        {/* SCROLLED STATE: Compact bar */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            scrolled
              ? 'max-h-[80px] opacity-100 py-3'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="shrink-0">
              <img
                src="/logo.png"
                alt="Clann Staffing"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
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

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-navy-800 hover:text-amber transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream-100 border-t border-cream-200 overflow-hidden"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 space-y-1">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}