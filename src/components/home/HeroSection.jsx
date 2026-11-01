import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ShieldCheck, Scale, MapPin } from 'lucide-react';
import SilkWaveBackground from '../ui/SilkWaveBackground';
import { FIRM_DETAILS } from '../../data/firmData';

export default function HeroSection({ onOpenConsultation }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-[rgba(14,31,51,0.08)]">
      {/* 3D WebGL Silk-Wave Shader Background */}
      <SilkWaveBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Subtle Label */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/90 border border-[rgba(14,31,51,0.12)] text-xs text-[#4A5B70] shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A8803A]" />
              <span className="font-semibold text-[#0E1F33]">GD PANDYA ASSOCIATES · Jamnagar - 361001</span>
            </div>

            {/* Headline with tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-serif font-normal text-[#0E1F33] leading-[1.12] tracking-tight">
              Senior experience with young enthusiasm.
              <span className="sr-only"> — GD PANDYA ASSOCIATES, Advocates &amp; Legal Consultants, Jamnagar - 361001</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed max-w-2xl font-sans font-normal">
              Anchored by senior mentor Adv. Dinesh B. Pandya and spearheaded by Adv. Gaurav D. Pandya (Government of India Notary &amp; Registered Trade Mark Attorney). Providing trial advocacy, civil property litigation, banking dispute recovery, and brand protection across Jamnagar and other cities in Gujarat.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <span>Book a consultation</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-300" strokeWidth={1.5} />
              </button>

              <a
                href="#practice-areas"
                className="inline-flex items-center text-sm font-medium text-[#0E1F33] hover:text-[#A8803A] editorial-link transition-colors group py-1"
              >
                <span>View 8 practice domains</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </a>
            </div>

            {/* Credibility Strip */}
            <div className="pt-6 sm:pt-8 mt-4 border-t border-[rgba(14,31,51,0.10)] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#738499] font-medium">Experience</p>
                <p className="text-sm font-semibold text-[#0E1F33] mt-0.5">19+ Years Practice</p>
                <p className="text-xs text-[#4A5B70]">Bar Council of Gujarat (2007)</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-[#738499] font-medium">Jurisdictions</p>
                <p className="text-sm font-semibold text-[#0E1F33] mt-0.5">Jamnagar &amp; Other Cities</p>
                <p className="text-xs text-[#4A5B70]">District &amp; Sessions Courts</p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs uppercase tracking-wider text-[#738499] font-medium">Languages</p>
                <p className="text-sm font-semibold text-[#0E1F33] mt-0.5">Gujarati · Hindi · English</p>
                <p className="text-xs text-[#4A5B70]">Native courtroom fluency</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Card (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Layered Border Frame */}
              <div className="bg-white p-3 rounded-xl border border-[rgba(14,31,51,0.12)] card-shadow">
                
                {/* Real Chambers Portrait */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#EEF3F8]">
                  <img
                    src="/assets/team/gaurav-pandya-office.webp"
                    alt="Advocate Gaurav D. Pandya, Managing Principal at GD PANDYA ASSOCIATES, Jamnagar - 361001"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                    loading="eager"
                    width="900"
                    height="1200"
                  />
                  
                  {/* Government Notary badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[rgba(14,31,51,0.10)] text-[11px] font-medium text-[#0E1F33] flex items-center space-x-1.5 shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A8803A]" strokeWidth={1.5} />
                    <span>Govt. of India Notary</span>
                  </div>
                </div>

                {/* Identity Strip */}
                <div className="pt-4 pb-2 px-2">
                  <div className="flex items-baseline justify-between">
                    <h2 className="font-serif font-semibold text-lg text-[#0E1F33]">
                      Adv. Gaurav D. Pandya
                    </h2>
                    <span className="text-[11px] text-[#A8803A] font-semibold uppercase tracking-wider">
                      Managing Principal
                    </span>
                  </div>

                  <p className="text-xs text-[#4A5B70] mt-1 leading-normal">
                    B.Com, L.L.B., DLLP (Shah Law College, Saurashtra University)
                  </p>
                  
                  <div className="mt-3 pt-2.5 border-t border-[rgba(14,31,51,0.08)] flex items-center justify-between text-[11px] text-[#738499]">
                    <span>Bar Standing: 19+ Years</span>
                    <span className="font-medium text-[#0E1F33]">Jamnagar - 361001</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
