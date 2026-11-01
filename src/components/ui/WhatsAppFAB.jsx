import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function WhatsAppFAB() {
  return (
    <>
      {/* Desktop Floating Action Button */}
      <div 
        aria-label="Direct WhatsApp Contact"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center group"
      >
        <div 
          role="tooltip"
          className="mr-3 bg-white text-[#0E1F33] text-xs px-3.5 py-1.5 rounded-full border border-[rgba(14,31,51,0.12)] card-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
        >
          <span className="font-semibold text-emerald-700">WhatsApp:</span> +91 98985 98184
        </div>
        <a
          href={FIRM_DETAILS.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp inquiry with Advocate Gaurav Pandya"
          className="w-12 h-12 bg-[#0E1F33] hover:bg-[#162C47] text-white rounded-full flex items-center justify-center card-shadow transition-transform duration-200 hover:scale-105 active:scale-95 border border-[rgba(14,31,51,0.12)]"
        >
          <MessageCircle className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Quick-Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[rgba(14,31,51,0.10)] px-3 py-2 flex items-center gap-2 shadow-[0_-4px_12px_rgba(14,31,51,0.06)]">
        <a
          href={FIRM_DETAILS.social.phone}
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-semibold text-[#0E1F33] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] active:bg-[#E2EAF2] transition-colors"
        >
          <Phone className="w-3.5 h-3.5 mr-1.5 text-[#A8803A]" strokeWidth={1.5} />
          <span>Call Counsel</span>
        </a>
        <a
          href={FIRM_DETAILS.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#0E1F33] active:bg-[#162C47] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-400" strokeWidth={1.5} />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
