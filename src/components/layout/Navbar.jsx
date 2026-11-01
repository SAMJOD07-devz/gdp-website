import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, ChevronRight } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function Navbar({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Firm', path: '/about' },
    { name: 'Practice Areas', path: '/practice-areas' },
    { name: 'Our Team', path: '/team' },
    { name: 'Legal Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[rgba(14,31,51,0.10)] shadow-[0_2px_12px_rgba(14,31,51,0.04)] py-3' 
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-2.5 sm:space-x-3.5 group min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[rgba(14,31,51,0.16)] bg-white p-0.5 shadow-xs group-hover:border-[#A8803A] transition-colors shrink-0">
              <img 
                src="/assets/logo.webp" 
                alt="GD Pandya Associates — Law Firm Logo, Jamnagar Gujarat" 
                className="w-full h-full object-contain"
                width="40"
                height="40"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center space-x-1 sm:space-x-1.5 leading-none">
                <span className="font-serif font-semibold text-base sm:text-xl tracking-tight text-[#0E1F33] truncate">
                  GD Pandya
                </span>
                <span className="text-[#A8803A] font-serif italic text-sm sm:text-base">&amp;</span>
                <span className="font-serif font-medium text-base sm:text-xl tracking-tight text-[#0E1F33] truncate">
                  Associates
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#4A5B70] tracking-wide mt-1 font-normal truncate">
                Advocates · Trademark Attorney · Notary
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-normal transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0E1F33] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#A8803A]'
                      : 'text-[#4A5B70] hover:text-[#0E1F33] font-medium'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={FIRM_DETAILS.social.phone}
              className="text-xs text-[#4A5B70] hover:text-[#0E1F33] font-medium px-2 py-1.5 transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
              <span>Call Us</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Book a consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-300" strokeWidth={1.5} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-1 rounded-md text-[#0E1F33] hover:bg-[rgba(14,31,51,0.06)] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-[rgba(14,31,51,0.08)] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm ${
                  isActive
                    ? 'text-[#0E1F33] font-semibold bg-[#EEF3F8]'
                    : 'text-[#4A5B70] hover:bg-[#F7FAFC] hover:text-[#0E1F33] font-medium'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-[#738499]" strokeWidth={1.5} />
            </NavLink>
          ))}

          <div className="pt-3 border-t border-[rgba(14,31,51,0.08)] flex flex-col space-y-2.5">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center py-2.5 text-sm font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm"
            >
              Book a consultation
            </button>
            <a
              href={FIRM_DETAILS.social.phone}
              className="w-full flex items-center justify-center py-2.5 text-sm font-medium text-[#0E1F33] bg-[#EEF3F8] rounded-lg border border-[rgba(14,31,51,0.08)]"
            >
              <Phone className="w-4 h-4 mr-2 text-[#A8803A]" strokeWidth={1.5} />
              Call +91 98985 98184
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
