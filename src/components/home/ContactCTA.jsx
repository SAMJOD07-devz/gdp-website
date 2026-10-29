import React from 'react';
import { Phone, Calendar, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function ContactCTA({ onOpenConsultation }) {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-900 to-navy-950 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-wider">
          <span>Schedule a Confidential Legal Consultation</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
          Facing a High-Stakes Legal Dispute, Court Summons, or Trademark Requirement?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
          Contact Advocate Gaurav D. Pandya &amp; Associates today for honest, strategic, and authoritative legal counsel at our Jamnagar office.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-amber-400 rounded-lg shadow-xl shadow-gold-500/25 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 mr-2" />
            <span>Book In-Person Consultation</span>
          </button>

          <a
            href={FIRM_DETAILS.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={FIRM_DETAILS.social.phone}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-navy-950 border border-slate-700 hover:border-gold-500/50 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-gold-400" />
            <span>{FIRM_DETAILS.phone}</span>
          </a>
        </div>

        {/* Office Location note */}
        <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-slate-400">
          <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
          <span>Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar – 361001</span>
        </div>

      </div>
    </section>
  );
}

