import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS } from '../data/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-md border-b border-gray-200'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Ray Dairy Logo"
              width={88}
              height={88}
              loading="eager"
              decoding="async"
              className="h-22 md:h-26 w-auto object-contain scale-110 -mt-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-2 py-1 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:rounded ${
                    isActive
                      ? 'text-emerald-600 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-emerald-600'
                      : 'hover:text-emerald-600'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              to="/contact"
              className="ml-6 rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white
                         hover:bg-emerald-700 shadow-md hover:shadow-lg
                         transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-fade-in">
            <div className="flex flex-col gap-1 py-4 px-2">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 mx-4 py-3 bg-emerald-600 text-white rounded-full font-semibold text-center
                           hover:bg-emerald-700 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
