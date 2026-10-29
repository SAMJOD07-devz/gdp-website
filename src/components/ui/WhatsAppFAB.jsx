import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function WhatsAppFAB() {
  return (
    <aside 
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      <div 
        role="tooltip"
        className="mr-3 bg-navy-950 text-slate-100 text-xs px-3 py-1.5 rounded-full border border-emerald-500/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap hidden sm:block"
      >
        <span className="text-emerald-400 font-semibold">Direct WhatsApp:</span> +91 98985 98184
      </div>
      <a
        href={FIRM_DETAILS.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Advocate Gaurav Pandya on WhatsApp"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 ring-4 ring-emerald-500/20"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}

