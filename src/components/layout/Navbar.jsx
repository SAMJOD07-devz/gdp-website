import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, ChevronRight } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function Navbar({ onOpenConsultation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-xl border-b border-gold-500/20 py-2.5' 
          : 'bg-navy-900/90 backdrop-blur-sm border-b border-slate-800 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold-400/80 bg-slate-900 p-0.5 shadow-md shadow-gold-500/10 group-hover:border-gold-300 transition-colors">
              <img 
                src="/assets/logo.png" 
                alt="GD Pandya Associates Logo" 
                className="w-full h-full object-contain filter contrast-125"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-bold text-xl md:text-2xl tracking-wide text-white group-hover:text-gold-300 transition-colors">
                  GD PANDYA
                </span>
                <span className="text-gold-400 font-serif italic text-lg">&amp;</span>
                <span className="font-display text-base md:text-lg text-slate-300 tracking-wider">
                  ASSOCIATES
                </span>
              </div>
              <p className="text-[10px] md:text-xs text-gold-400/90 tracking-wider uppercase font-medium">
                Advocates · Trademark Attorney · Notary
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'text-gold-400 bg-gold-500/10 border-b-2 border-gold-400 font-semibold'
                      : 'text-slate-200 hover:text-gold-300 hover:bg-slate-800/60'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={FIRM_DETAILS.social.phone}
              className="flex items-center space-x-1.5 text-xs text-slate-300 hover:text-gold-400 px-3 py-2 rounded-md border border-slate-700 hover:border-gold-500/40 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Now</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs md:text-sm font-semibold tracking-wide text-slate-950 transition-all duration-200 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 rounded-md shadow-lg shadow-gold-500/20 hover:from-gold-300 hover:to-amber-400 hover:shadow-gold-500/30 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenConsultation}
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-950 bg-gold-400 rounded shadow"
            >
              Consult
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-gold-400 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-navy-950/98 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'text-gold-300 bg-gold-500/15 font-semibold'
                    : 'text-slate-200 hover:bg-slate-800/80 hover:text-gold-400'
                }`
              }
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </NavLink>
          ))}

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-gold-400 to-amber-500 rounded-lg shadow"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Free Consultation
            </button>
            <a
              href={FIRM_DETAILS.social.phone}
              className="w-full flex items-center justify-center py-2.5 text-sm font-medium text-slate-200 bg-slate-800 rounded-lg border border-slate-700"
            >
              <Phone className="w-4 h-4 mr-2 text-gold-400" />
              Call +91 98985 98184
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

