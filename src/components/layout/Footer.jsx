import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../../data/firmData';

export default function Footer({ onOpenDisclaimer }) {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-slate-800 text-sm">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-amber-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Firm Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 bg-slate-900 p-0.5">
                <img 
                  src="/assets/logo.png" 
                  alt="GD Pandya Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg tracking-wide">
                  GD PANDYA
                </h3>
                <p className="text-xs text-gold-400 uppercase tracking-wider font-semibold">
                  &amp; ASSOCIATES
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Founded and spearheaded by <span className="text-white font-medium">Advocate Gaurav D. Pandya (B.Com, L.L.B., DLLP)</span>. Providing ethical, assertive, and strategic legal representation across Gujarat for over 18 years.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Government of India Notary</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Scale className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Registered Trade Mark Attorney</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Bar Council of Gujarat (Enrolled 2007)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Practice Areas */}
          <div>
            <h4 className="font-display text-white text-base tracking-wider uppercase mb-4 pb-1 border-b border-gold-500/30">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <Link 
                    to={`/practice-areas#${area.id}`}
                    className="hover:text-gold-400 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-gold-500/60">›</span>
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="font-display text-white text-base tracking-wider uppercase mb-4 pb-1 border-b border-gold-500/30">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-gold-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors">
                  About Advocate Gaurav Pandya &amp; Firm
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-gold-400 transition-colors">
                  Legal Services &amp; Specialties
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-gold-400 transition-colors">
                  Our Legal Associates
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-400 transition-colors">
                  Contact &amp; Jamnagar Office Location
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenDisclaimer} 
                  className="hover:text-gold-400 transition-colors text-left text-slate-500 underline cursor-pointer pt-2"
                >
                  Bar Council of India Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="font-display text-white text-base tracking-wider uppercase mb-4 pb-1 border-b border-gold-500/30">
              Jamnagar Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {FIRM_DETAILS.officeAddress.full}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a 
                  href={FIRM_DETAILS.social.phone}
                  className="text-slate-300 hover:text-gold-400 transition-colors font-medium"
                >
                  {FIRM_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a 
                  href={FIRM_DETAILS.social.email}
                  className="text-slate-300 hover:text-gold-400 transition-colors truncate"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-gold-500/70 shrink-0 mt-0.5" />
                <span>
                  {FIRM_DETAILS.hours}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={FIRM_DETAILS.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:text-gold-300 font-medium underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box as mandated by BCI */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-[11px] text-slate-500 leading-relaxed text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-slate-400">Bar Council of India Disclaimer:</strong> As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form. This website is purely intended to provide general informational resources regarding GD Pandya Associates and does not constitute an advertisement, solicitation, legal advice, or invitation to form an attorney-client relationship.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-slate-900 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
          <p>
            &copy; {new Date().getFullYear()} GD Pandya Associates. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-600">
            Advocate Gaurav D. Pandya · Jamnagar, Gujarat
          </p>
        </div>

      </div>
    </footer>
  );
}

