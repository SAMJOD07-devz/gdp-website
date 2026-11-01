import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function TopBar() {
  return (
    <div className="bg-[#EEF3F8] border-b border-[rgba(14,31,51,0.08)] text-xs py-2 px-4 hidden lg:block text-[#4A5B70]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a 
            href={FIRM_DETAILS.social.phone} 
            className="flex items-center space-x-1.5 hover:text-[#0E1F33] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
            <span className="font-semibold text-[#0E1F33]">{FIRM_DETAILS.phone}</span>
          </a>
          
          <a 
            href={FIRM_DETAILS.social.email} 
            className="flex items-center space-x-1.5 hover:text-[#0E1F33] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
            <span>{FIRM_DETAILS.email}</span>
          </a>

          <div className="flex items-center space-x-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
            <span>Madhav Square, Jamnagar - 361001</span>
          </div>
        </div>

        <div className="flex items-center space-x-5 text-xs">
          <div className="flex items-center space-x-1.5 text-[#0E1F33] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
            <span>Govt. of India Notary · Regd. Trade Mark Attorney</span>
          </div>
          <span className="text-[rgba(14,31,51,0.2)]">|</span>
          <div className="flex items-center space-x-1 text-[#4A5B70]">
            <Clock className="w-3 h-3 text-[#738499]" strokeWidth={1.5} />
            <span>Mon–Sat: 9:30 AM – 9:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
