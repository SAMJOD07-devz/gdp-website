import React from 'react';
import { Phone, ArrowUpRight, MessageCircle, MapPin } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function ContactCTA({ onOpenConsultation }) {
  return (
    <section className="py-20 lg:py-24 bg-[#EEF3F8] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
          Jamnagar Office &amp; High Court Practice
        </p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] tracking-tight leading-tight">
          Facing a legal dispute, court notice, or trademark requirement?
        </h2>

        <p className="text-base sm:text-lg text-[#4A5B70] max-w-2xl mx-auto leading-relaxed">
          Arrange a structured consultation with Advocate Gaurav D. Pandya at our Jamnagar chambers or coordinate via direct phone and WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Book a consultation</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-300" strokeWidth={1.5} />
          </button>

          <a
            href={FIRM_DETAILS.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-[#0E1F33] bg-white border border-[rgba(14,31,51,0.12)] hover:border-[#A8803A] rounded-lg card-shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-emerald-600" strokeWidth={1.5} />
            <span>WhatsApp Inquiry</span>
          </a>

          <a
            href={FIRM_DETAILS.social.phone}
            className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-[#0E1F33] bg-white border border-[rgba(14,31,51,0.12)] hover:border-[#A8803A] rounded-lg card-shadow transition-colors"
          >
            <Phone className="w-4 h-4 mr-2 text-[#A8803A]" strokeWidth={1.5} />
            <span>Call +91 98985 98184</span>
          </a>
        </div>

        <div className="pt-4 flex items-center justify-center space-x-2 text-xs text-[#738499]">
          <MapPin className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
          <span>Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar</span>
        </div>

      </div>
    </section>
  );
}
