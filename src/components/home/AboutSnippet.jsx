import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Scale, Award, Landmark, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function AboutSnippet() {
  const credentials = [
    {
      title: "IP (Intellectual Property)",
      badge: "Brand Protection",
      desc: "Registered Trade Mark Attorney handling brand filings, opposition hearings, and nationwide trademark protection across India."
    },
    {
      title: "19+ Years Experience",
      badge: "Courtroom Practice",
      desc: "Continuous active courtroom practice and dispute representation before the Courts of Jamnagar and other cities in Gujarat."
    },
    {
      title: "Institutional Panel Counsel",
      badge: "Nationalized Panels",
      desc: "Empanelled legal counsel for nationalized public sector banks, state universities, and government statutory bodies."
    },
    {
      title: "Trustworthy Advice",
      badge: "Senior Guidance",
      desc: "Ethical, confidential, and client-first legal counsel built on more than four decades of respected family bar standing."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EEF3F8] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Document & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Practice Cards Document */}
            <div className="bg-white p-3 rounded-xl border border-[rgba(14,31,51,0.12)] card-shadow">
              <div className="rounded-lg overflow-hidden border border-[rgba(14,31,51,0.08)] bg-slate-50">
                <img
                  src="/assets/dinesh-gaurav-cards.webp"
                  alt="Official practice cards of Senior Advocate Dinesh B. Pandya and Advocate Gaurav D. Pandya — GD PANDYA ASSOCIATES, Jamnagar"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                />
              </div>
              <div className="pt-3 pb-1 px-2 text-center border-t border-[rgba(14,31,51,0.06)] mt-2">
                <p className="text-xs text-[#738499] font-medium">
                  Official Verification Cards · Adv. Dinesh B. Pandya &amp; Adv. Gaurav D. Pandya
                </p>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-6 rounded-xl bg-white border border-[rgba(14,31,51,0.08)] card-shadow relative">
              <span className="text-[#A8803A] font-serif text-3xl leading-none absolute top-4 left-4 select-none">&ldquo;</span>
              <p className="font-serif italic text-base sm:text-lg text-[#0E1F33] leading-relaxed pl-5">
                Senior experience with young enthusiasm — combining four decades of family jurisprudence with modern, dynamic courtroom strategy.
              </p>
              <div className="mt-4 pt-3 border-t border-[rgba(14,31,51,0.08)] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0E1F33]">GD PANDYA ASSOCIATES</span>
                <span className="text-[#A8803A] font-medium">Jamnagar &amp; Other Cities</span>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                The Practice &amp; Heritage
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] leading-tight tracking-tight">
                Senior experience with young enthusiasm.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed font-sans">
              Anchored by the senior guidance of <strong>Advocate Dinesh B. Pandya</strong> and spearheaded by <strong>Advocate Gaurav D. Pandya</strong> (B.Com, L.L.B., DLLP), <strong>GD PANDYA ASSOCIATES</strong> delivers comprehensive legal advocacy built on integrity, deep statutory research, and dedicated client service.
            </p>

            <p className="text-sm sm:text-base text-[#4A5B70] leading-relaxed">
              Operating from Madhav Square, Jamnagar - 361001, the firm represents clients before the District &amp; Sessions Courts of Jamnagar and other cities across Gujarat. Appointed as a Government of India Notary and Registered Trade Mark Attorney, our chambers provide turnkey legal solutions spanning real estate title clearance, banking recovery litigation, and corporate IP protection.
            </p>

            {/* 4 Pillars: IP, 19+ exp, Institutional, Trustworthy advice */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg bg-white border border-[rgba(14,31,51,0.08)] shadow-xs hover:border-[#A8803A]/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#0E1F33]">
                      {item.title}
                    </p>
                    <span className="text-[10px] uppercase tracking-wider text-[#A8803A] font-semibold bg-[#EEF3F8] px-2 py-0.5 rounded border border-[rgba(14,31,51,0.06)]">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5B70] mt-1.5 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Read Complete Profile Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-[#0E1F33] hover:text-[#A8803A] editorial-link group"
              >
                <span>Read complete firm profile &amp; credentials</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
