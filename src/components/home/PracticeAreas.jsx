import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, ShieldCheck, Landmark, Home, Users, Briefcase, ArrowRight, Check, Sparkles } from 'lucide-react';
import { PRACTICE_AREAS } from '../../data/firmData';

const iconMap = {
  Scale: Scale,
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Home: Home,
  Users: Users,
  Briefcase: Briefcase
};

export default function PracticeAreas({ onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Practice Areas' },
    { id: 'litigation', label: 'Court Litigation' },
    { id: 'trademark-ip', label: 'Trademark & IP' },
    { id: 'banking-finance', label: 'Banking & Debt' },
    { id: 'property-real-estate', label: 'Real Estate' },
    { id: 'family-matrimonial', label: 'Family Law' }
  ];

  const filteredAreas = activeFilter === 'all'
    ? PRACTICE_AREAS
    : PRACTICE_AREAS.filter((area) => area.id === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-navy-950 relative border-b border-slate-800">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Core Practice Domains</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Comprehensive Legal Services Tailored to Protect Your Interests
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Combining strategic courtroom defense, intellectual property clearance, and institutional advisory across Jamnagar, Rajkot, and the Gujarat High Court.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-gold-500/20 scale-105'
                  : 'bg-navy-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 6-Card Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredAreas.map((area) => {
              const IconComponent = iconMap[area.icon] || Scale;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={area.id}
                  className="group relative rounded-2xl p-6 sm:p-7 bg-navy-900/90 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col justify-between"
                >
                  <div>
                    {/* Card Header with Icon & Optional Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-slate-950 transition-all duration-300 shadow-inner">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {area.badge && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300">
                          {area.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Short Description */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-gold-300 transition-colors mb-2">
                      {area.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-4">
                      {area.shortDesc}
                    </p>

                    {/* Key Practice Points */}
                    <ul className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-6">
                      {area.points.slice(0, 3).map((point, index) => (
                        <li key={index} className="flex items-start text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mr-2 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action Links */}
                  <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs">
                    <Link
                      to={`/practice-areas#${area.id}`}
                      className="text-slate-400 hover:text-white font-medium flex items-center group-hover:text-gold-400 transition-colors"
                    >
                      <span>Detailed Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>

                    <button
                      onClick={onOpenConsultation}
                      className="text-gold-400 hover:text-gold-300 font-semibold underline cursor-pointer"
                    >
                      Request Advice
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <Link
            to="/practice-areas"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 hover:border-gold-400 text-sm font-semibold text-slate-200 hover:text-gold-300 transition-all shadow"
          >
            <span>Explore All Practice Areas &amp; Specializations</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
