import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function TopBar() {
  return (
    <div className="bg-navy-950 border-b border-gold-500/20 text-xs py-2 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6 text-slate-300">
          <a 
            href={FIRM_DETAILS.social.phone} 
            className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{FIRM_DETAILS.phone}</span>
          </a>
          
          <a 
            href={FIRM_DETAILS.social.email} 
            className="flex items-center space-x-1.5 hover:text-gold-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400" />
            <span>{FIRM_DETAILS.email}</span>
          </a>

          <div className="flex items-center space-x-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Madhav Square, Limda Lane, Jamnagar</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5 text-slate-300 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-medium text-gold-300">Govt. of India Notary & Regd. Trademark Attorney</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400">
            <Clock className="w-3 h-3 text-gold-500/70" />
            <span>Mon - Sat: 9:30 AM - 9:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

