import React from 'react';
import { Landmark, Shield, Award, CheckCircle, Scale, Building2 } from 'lucide-react';
import { INSTITUTIONAL_CLIENTS, FIRM_DETAILS } from '../../data/firmData';

export default function WhyChooseUs() {
  const processSteps = [
    {
      step: "01",
      title: "Comprehensive Legal Scrutiny",
      desc: "Every matter begins with a thorough examination of documents, precedents, and statutory rights."
    },
    {
      step: "02",
      title: "Strategic Advisory & Strategy",
      desc: "Clear legal options presented with straightforward assessments of timelines, risks, and remedies."
    },
    {
      step: "03",
      title: "Pleadings & Precision Drafting",
      desc: "Meticulous preparation of writ petitions, plaints, written statements, or trademark filings."
    },
    {
      step: "04",
      title: "Assertive Courtroom Representation",
      desc: "Forceful oral arguments and trial advocacy before District Courts and the High Court of Gujarat."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-navy-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Landmark className="w-4 h-4" />
            <span>Institutional Standing</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Trusted by Government Bodies &amp; Premier Nationalized Banks
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Our credentials are demonstrated through long-standing institutional appointments, public board representations, and high-stakes corporate recovery panels.
          </p>
        </div>

        {/* Institutional Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {INSTITUTIONAL_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-navy-900 border border-slate-800/80 hover:border-gold-500/40 transition-colors text-center flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-white leading-tight">
                  {client.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1">
                  {client.type}
                </p>
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-gold-300 font-medium">
                {client.role}
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Process Grid */}
        <div className="bg-navy-900/60 rounded-2xl border border-slate-800 p-8 lg:p-12">
          <div className="max-w-2xl mb-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Our Systematic Approach to Legal Representation
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
              We adhere to structured, evidence-based litigation protocols to deliver maximum legal advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="relative p-5 rounded-xl bg-navy-950/80 border border-slate-800/80">
                <div className="font-display font-extrabold text-2xl text-gold-500/40 mb-2">
                  {p.step}
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base mb-1.5">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

