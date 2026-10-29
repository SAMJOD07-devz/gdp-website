import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Scale, ShieldCheck, Landmark, Home, Users, Briefcase, Check, ArrowRight, Calendar, Phone } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_DETAILS } from '../data/firmData';

const iconMap = {
  Scale: Scale,
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Home: Home,
  Users: Users,
  Briefcase: Briefcase
};

export default function PracticeAreasPage() {
  const { openConsultation } = useOutletContext();

  return (
    <div className="bg-navy-950 py-12 lg:py-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>Legal Practice &amp; Advisory Domains</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Specialized Legal Practice Areas
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From trial litigation and appellate practice to brand trademark prosecution and bank debt recovery, we deliver end-to-end legal solutions across Gujarat.
          </p>
        </div>

        {/* Quick Jump Bar */}
        <div className="mb-14 p-4 rounded-xl bg-navy-900 border border-slate-800 flex flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-semibold self-center mr-2">Jump to:</span>
          {PRACTICE_AREAS.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="px-3 py-1.5 rounded-lg bg-navy-950 hover:bg-gold-500/15 text-slate-300 hover:text-gold-300 border border-slate-800 hover:border-gold-500/30 transition-colors"
            >
              {area.title}
            </a>
          ))}
        </div>

        {/* Practice Areas List */}
        <div className="space-y-16">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Scale;
            const isEven = index % 2 === 1;

            return (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-28 rounded-2xl bg-navy-900 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden"
              >
                {/* Accent glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column (8 cols) */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        {area.badge && (
                          <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 border border-gold-400/40">
                            {area.badge}
                          </span>
                        )}
                        <h2 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-white mt-0.5">
                          {area.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                      {area.fullDesc}
                    </p>

                    <div className="pt-2">
                      <h4 className="font-semibold text-white text-xs sm:text-sm uppercase tracking-wider mb-3 text-gold-300">
                        Key Matters &amp; Scope of Representation
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {area.points.map((point, idx) => (
                          <div key={idx} className="flex items-start text-xs text-slate-300 bg-navy-950/60 p-2.5 rounded-lg border border-slate-800/80">
                            <Check className="w-4 h-4 text-gold-400 shrink-0 mr-2 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Action Card (4 cols) */}
                  <div className="lg:col-span-4 bg-navy-950 p-6 rounded-xl border border-gold-500/20 space-y-4 text-center sm:text-left">
                    <h3 className="font-display font-bold text-white text-base">
                      Need Counsel for {area.title}?
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Consult directly with Advocate Gaurav D. Pandya and the specialist legal team at our Jamnagar office.
                    </p>

                    <div className="pt-2 space-y-2.5">
                      <button
                        onClick={openConsultation}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg shadow cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 mr-1.5" />
                        <span>Book Case Consultation</span>
                      </button>

                      <a
                        href={FIRM_DETAILS.social.phone}
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium"
                      >
                        <Phone className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                        <span>Direct Call: +91 98985 98184</span>
                      </a>
                    </div>

                    <p className="text-[10px] text-slate-500 text-center pt-1">
                      Strict client confidentiality guaranteed
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

