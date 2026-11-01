import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { PRACTICE_AREAS } from '../../data/firmData';

export default function PracticeAreas({ onOpenConsultation }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="practice-areas" className="py-16 sm:py-20 lg:py-28 bg-[#F7FAFC] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Editorial Rhythm */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[rgba(14,31,51,0.10)]">
          <div className="max-w-2xl space-y-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Areas of Legal Practice
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] tracking-tight">
              Disciplined counsel across core legal domains.
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="/practice-areas"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0E1F33] hover:text-[#A8803A] editorial-link transition-colors group"
            >
              <span>Explore all court practice profiles</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Editorial Indexed List (01, 02, 03...) */}
        <div className="border-t border-[rgba(14,31,51,0.10)]">
          {PRACTICE_AREAS.map((area, index) => {
            const indexNumber = String(index + 1).padStart(2, '0');
            const isExpanded = expandedId === area.id;

            return (
              <div
                key={area.id}
                className="border-b border-[rgba(14,31,51,0.10)] transition-colors duration-200"
              >
                <div
                  onClick={() => toggleExpand(area.id)}
                  className="py-5 sm:py-8 px-2 sm:px-4 flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-6 cursor-pointer group hover:bg-[#EEF3F8]/60 transition-colors rounded-sm"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(area.id);
                    }
                  }}
                >
                  {/* Left: Number + Title + Mobile Chevron */}
                  <div className="flex items-center justify-between lg:w-5/12">
                    <div className="flex items-baseline space-x-3 sm:space-x-8">
                      <span className="font-serif text-xs sm:text-base text-[#738499] font-normal shrink-0">
                        {indexNumber}
                      </span>
                      <div>
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
                          <h3 className="font-serif text-xl sm:text-[1.75rem] font-normal text-[#0E1F33] group-hover:text-[#0E1F33] transition-colors relative inline-block">
                            {area.title}
                            <span className="block h-[1px] bg-[#A8803A] max-w-0 group-hover:max-w-full transition-all duration-300 ease-out" />
                          </h3>
                          {area.badge && (
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)]">
                              {area.badge}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mobile toggle button (hidden on desktop) */}
                    <div className="lg:hidden shrink-0 ml-2">
                      <div className="w-8 h-8 rounded-full border border-[rgba(14,31,51,0.12)] flex items-center justify-center text-[#0E1F33] group-hover:border-[#A8803A]">
                        <ChevronDown 
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#A8803A]' : ''}`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Center: Short Summary */}
                  <div className="lg:w-6/12 pl-6 sm:pl-14 lg:pl-0">
                    <p className="text-xs sm:text-base text-[#4A5B70] font-sans font-normal leading-relaxed">
                      {area.shortDesc}
                    </p>
                  </div>

                  {/* Desktop toggle button */}
                  <div className="hidden lg:flex lg:w-1/12 items-center justify-end">
                    <div className="w-9 h-9 rounded-full border border-[rgba(14,31,51,0.12)] flex items-center justify-center text-[#0E1F33] group-hover:border-[#A8803A] group-hover:text-[#A8803A] transition-colors">
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-[#A8803A]' : ''}`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="px-3 sm:px-14 pb-6 pt-2 bg-[#EEF3F8]/40 border-t border-[rgba(14,31,51,0.06)] animate-in fade-in duration-200">
                    <div className="max-w-3xl space-y-4 pt-2">
                      <p className="text-xs sm:text-base text-[#0E1F33] leading-relaxed">
                        {area.fullDesc}
                      </p>

                      <div className="pt-2">
                        <p className="text-xs uppercase tracking-wider font-semibold text-[#738499] mb-2.5">
                          Key Practice Representation
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {area.points.map((pt, i) => (
                            <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#4A5B70]">
                              <Check className="w-3.5 h-3.5 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={2} />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <button
                          onClick={onOpenConsultation}
                          className="inline-flex items-center text-xs font-semibold px-4 py-2 bg-[#0E1F33] text-white rounded-md hover:bg-[#162C47] transition-colors"
                        >
                          <span>Consult on this matter</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" strokeWidth={1.5} />
                        </button>
                        
                        <Link
                          to="/practice-areas"
                          className="text-xs text-[#4A5B70] hover:text-[#0E1F33] editorial-link"
                        >
                          Read full court precedents &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
