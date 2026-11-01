import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Scale, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../../data/firmData';

export default function Footer({ onOpenDisclaimer }) {
  return (
    <footer className="bg-[#EEF3F8] text-[#4A5B70] border-t border-[rgba(14,31,51,0.10)] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Col 1: Firm Overview */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[rgba(14,31,51,0.14)] bg-white p-0.5 shadow-xs">
                <img 
                  src="/assets/logo.webp" 
                  alt="GD PANDYA ASSOCIATES — Advocates, Notary &amp; Trademark Attorney, Jamnagar" 
                  className="w-full h-full object-contain"
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-base sm:text-lg text-[#0E1F33]">
                  GD PANDYA ASSOCIATES
                </div>
                <p className="text-[11px] text-[#A8803A] font-medium tracking-wide">
                  Advocates · Trademark Attorney · Notary
                </p>
              </div>
            </div>

            <p className="text-xs text-[#4A5B70] leading-relaxed">
              Senior experience with young enthusiasm. Founded under the guidance of <span className="text-[#0E1F33] font-medium">Adv. Dinesh B. Pandya</span> and spearheaded by <span className="text-[#0E1F33] font-medium">Advocate Gaurav D. Pandya (B.Com, L.L.B., DLLP)</span>. Providing assertive and strategic legal advocacy across Jamnagar - 361001 and other cities in Gujarat for over 19 years.
            </p>

            <div className="pt-1 space-y-1.5 text-xs text-[#0E1F33]">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8803A] shrink-0" strokeWidth={1.5} />
                <span>Government of India Notary</span>
              </div>
              <div className="flex items-center space-x-2">
                <Scale className="w-3.5 h-3.5 text-[#A8803A] shrink-0" strokeWidth={1.5} />
                <span>Registered Trade Mark Attorney</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A8803A] shrink-0" strokeWidth={1.5} />
                <span>Bar Council of Gujarat (Enrolled 2007)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Practice Domains */}
          <div>
            <h4 className="font-serif text-[#0E1F33] text-base font-semibold mb-4 pb-1.5 border-b border-[rgba(14,31,51,0.10)]">
              Practice Domains
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.id}>
                  <Link 
                    to={`/practice-areas#${area.id}`}
                    className="hover:text-[#0E1F33] transition-colors flex items-center space-x-2 group"
                  >
                    <span className="text-[#A8803A] text-[10px] group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-serif text-[#0E1F33] text-base font-semibold mb-4 pb-1.5 border-b border-[rgba(14,31,51,0.10)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-[#0E1F33] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0E1F33] transition-colors">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="hover:text-[#0E1F33] transition-colors">
                  Court Practice &amp; Services
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-[#0E1F33] transition-colors">
                  Our Legal Team
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#0E1F33] transition-colors">
                  Legal Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0E1F33] transition-colors">
                  Jamnagar Chambers Location
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenDisclaimer} 
                  className="hover:text-[#0E1F33] transition-colors text-left text-[#738499] underline cursor-pointer pt-1"
                >
                  Bar Council of India Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="font-serif text-[#0E1F33] text-base font-semibold mb-4 pb-1.5 border-b border-[rgba(14,31,51,0.10)]">
              Jamnagar Chambers
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-[#4A5B70] leading-snug">
                  {FIRM_DETAILS.officeAddress.full}
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#A8803A] shrink-0" strokeWidth={1.5} />
                <a 
                  href={FIRM_DETAILS.social.phone}
                  className="text-[#0E1F33] hover:text-[#A8803A] transition-colors font-medium"
                >
                  {FIRM_DETAILS.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#A8803A] shrink-0" strokeWidth={1.5} />
                <a 
                  href={FIRM_DETAILS.social.email}
                  className="text-[#4A5B70] hover:text-[#0E1F33] transition-colors truncate"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start space-x-2.5 text-[#738499]">
                <Clock className="w-4 h-4 text-[#738499] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span>
                  {FIRM_DETAILS.hours}
                </span>
              </div>

              <div className="pt-1">
                <a
                  href={FIRM_DETAILS.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#0E1F33] hover:text-[#A8803A] font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#A8803A]" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box as mandated by BCI */}
        <div className="mt-14 pt-8 border-t border-[rgba(14,31,51,0.10)] text-[11px] text-[#738499] leading-relaxed text-center max-w-4xl mx-auto">
          <p>
            <strong className="text-[#0E1F33] font-medium">Bar Council of India Compliance:</strong> As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising in any form. This website is purely intended to provide general informational resources regarding <strong>GD PANDYA ASSOCIATES</strong> without any motive of advertisement or commercial solicitation. Nothing on this website constitutes legal advertisement, solicitation, legal advice, or an invitation to establish an advocate-client relationship.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[rgba(14,31,51,0.06)] text-xs text-[#738499] flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
          <p>
            &copy; {new Date().getFullYear()} GD PANDYA ASSOCIATES. All rights reserved.
          </p>
          <p className="text-[11px]">
            Advocate Gaurav D. Pandya · Jamnagar - 361001, Gujarat
          </p>
        </div>

      </div>
    </footer>
  );
}
