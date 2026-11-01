import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Award, BookOpen } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function AboutSnippet() {
  const credentials = [
    {
      title: "Direct Senior Counsel Access",
      desc: "Every legal matter is directly reviewed, drafted, and strategized by Advocate Gaurav Pandya."
    },
    {
      title: "Institutional Standing",
      desc: "Empanelled counsel for premier public sector banks, municipal universities, and statutory boards."
    },
    {
      title: "Comprehensive IP Protection",
      desc: "Govt. registered Trademark Attorney handling nationwide filings, opposition hearings, and renewals."
    },
    {
      title: "18+ Years Bar Standing",
      desc: "Enrolled with the Bar Council of Gujarat (2007). Continuous unblemished trial record in Jamnagar & High Court."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#EEF3F8] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Official Document & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Business Card & Notary Credential Card */}
            <div className="bg-white p-3 rounded-xl border border-[rgba(14,31,51,0.12)] card-shadow">
              <div className="rounded-lg overflow-hidden border border-[rgba(14,31,51,0.08)] bg-slate-50">
                <img
                  src="/assets/business-card.webp"
                  alt="Official visiting card of Advocate Gaurav D. Pandya — Government of India Notary, Registered Trademark Attorney, GD Pandya Associates, Jamnagar"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width="800"
                />
              </div>
              <div className="pt-3 pb-1 px-2 text-center border-t border-[rgba(14,31,51,0.06)] mt-2">
                <p className="text-xs text-[#738499] font-medium">
                  Official Verification &amp; Notary Card · Government of India
                </p>
              </div>
            </div>

            {/* Editorial Quote Box */}
            <div className="p-6 rounded-xl bg-white border border-[rgba(14,31,51,0.08)] card-shadow relative">
              <span className="text-[#A8803A] font-serif text-3xl leading-none absolute top-4 left-4 select-none">&ldquo;</span>
              <p className="font-serif italic text-base sm:text-lg text-[#0E1F33] leading-relaxed pl-5">
                Legal advocacy is not merely about arguing statutes; it is about providing decisive, dependable protection for people&apos;s livelihoods, hard-earned properties, and families.
              </p>
              <div className="mt-4 pt-3 border-t border-[rgba(14,31,51,0.08)] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0E1F33]">Advocate Gaurav D. Pandya</span>
                <span className="text-[#738499]">Principal Counsel</span>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                The Practice &amp; Founder
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] leading-tight tracking-tight">
                A trusted legal pillar built on integrity, diligence, and courtroom experience.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed font-sans">
              Established under the leadership of Advocate Gaurav Dineshandra Pandya, GD Pandya Associates has evolved into one of Jamnagar&apos;s most respected full-service law offices. With formal qualifications spanning B.Com, L.L.B., and Diploma in Labour Laws and Practice (DLLP) from Saurashtra University&apos;s Shah Law College, Adv. Pandya unites sharp financial acumen with comprehensive courtroom prowess.
            </p>

            <p className="text-sm sm:text-base text-[#4A5B70] leading-relaxed">
              Appointed as a Government of India Notary and recognized as a Registered Trade Mark Attorney, the firm provides clients with turnkey solutions—from drafting title clearance certificates and securing national trademarks to representing complex disputes before the District Courts and the High Court of Gujarat.
            </p>

            {/* 4 Key Pillars in clean grid with hairline rules */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-lg bg-white border border-[rgba(14,31,51,0.08)] shadow-xs"
                >
                  <p className="text-sm font-semibold text-[#0E1F33]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#4A5B70] mt-1 leading-normal">
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
