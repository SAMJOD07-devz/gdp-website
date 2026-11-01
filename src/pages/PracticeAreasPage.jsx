import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { Scale, ShieldCheck, Landmark, Home, Users, Briefcase, BookOpen, FileText, Check, ArrowUpRight, Phone } from 'lucide-react';
import { PRACTICE_AREAS, FIRM_DETAILS } from '../data/firmData';

const iconMap = {
  Scale: Scale,
  ShieldCheck: ShieldCheck,
  Landmark: Landmark,
  Home: Home,
  Users: Users,
  Briefcase: Briefcase,
  BookOpen: BookOpen,
  FileText: FileText
};

export default function PracticeAreasPage() {
  const { openConsultation } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Legal Practice Areas | GD PANDYA ASSOCIATES, Jamnagar - 361001</title>
        <meta name="description" content="Specialized legal practice areas at GD PANDYA ASSOCIATES: Intellectual Property, Title Clearance, Banking Recovery, Registration & Notary, Family Law, Civil & Criminal Litigation, Corporate Law, and Labor Law across Jamnagar - 361001 and Gujarat." />
        <meta name="keywords" content="Trademark attorney Jamnagar, Title search report Jamnagar, Banking recovery lawyer Gujarat, Registration Notary Jamnagar, Family lawyer Jamnagar, Civil criminal advocate Gujarat" />
        <link rel="canonical" href="https://advocate-pandya.com/practice-areas" />
        <meta property="og:url" content="https://advocate-pandya.com/practice-areas" />
        <meta property="og:title" content="Practice Areas | GD PANDYA ASSOCIATES, Jamnagar - 361001" />
        <meta property="og:description" content="Turnkey legal services across 8 core practice domains in Jamnagar - 361001 and other cities across Gujarat." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://advocate-pandya.com/" },
            { "@type": "ListItem", "position": 2, "name": "Practice Areas", "item": "https://advocate-pandya.com/practice-areas" }
          ]
        })}</script>
      </Helmet>

    <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
            <span>Senior Experience with Young Enthusiasm</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Specialized legal practice areas.
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            Turnkey legal solutions across 8 core practice domains before the Courts of Jamnagar - 361001 and other cities across Gujarat.
          </p>
        </div>

        {/* Quick Jump Bar */}
        <div className="mb-14 p-3.5 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#738499] font-medium mr-1 pl-1">Practice Domains:</span>
          {PRACTICE_AREAS.map((area, idx) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="px-3 py-1.5 rounded-md bg-[#EEF3F8] hover:bg-[#E2EAF2] text-[#0E1F33] border border-[rgba(14,31,51,0.08)] transition-colors font-medium"
            >
              {String(idx + 1).padStart(2, '0')}. {area.title}
            </a>
          ))}
        </div>

        {/* Practice Areas Detailed List (8 domains in exact requested sequence) */}
        <div className="space-y-12">
          {PRACTICE_AREAS.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Scale;
            const indexNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-28 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-6 sm:p-8 lg:p-10 card-shadow relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                  
                  {/* Left Column: Number, Title, Overview */}
                  <div className="lg:w-7/12 space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-serif text-sm font-semibold text-[#A8803A]">
                        Domain {indexNumber}
                      </span>
                      {area.badge && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium tracking-wide uppercase bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)]">
                          {area.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                        {area.title}
                      </h2>
                      {area.locationScope && (
                        <p className="text-xs font-semibold text-[#A8803A] tracking-wide mt-1">
                          {area.locationScope}
                        </p>
                      )}
                    </div>

                    <p className="text-base text-[#0E1F33] font-medium leading-relaxed">
                      {area.shortDesc}
                    </p>

                    <p className="text-sm text-[#4A5B70] leading-relaxed">
                      {area.fullDesc}
                    </p>

                    {/* Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={openConsultation}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={1.5} />
                      </button>

                      <a
                        href={FIRM_DETAILS.social.phone}
                        className="inline-flex items-center text-xs font-medium text-[#0E1F33] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] px-4 py-2.5 rounded-lg hover:bg-[#E2EAF2] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 mr-1.5 text-[#A8803A]" strokeWidth={1.5} />
                        <span>Call +91 98985 98184</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Practice Points */}
                  <div className="lg:w-5/12 bg-[#EEF3F8]/60 p-6 rounded-lg border border-[rgba(14,31,51,0.08)] space-y-3">
                    <div className="flex items-center space-x-2 text-[#0E1F33] font-semibold text-xs uppercase tracking-wider">
                      <IconComponent className="w-4 h-4 text-[#A8803A]" strokeWidth={1.5} />
                      <span>Scope of Legal Representation</span>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      {area.points.map((pt, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#4A5B70]">
                          <Check className="w-3.5 h-3.5 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={2} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
    </>
  );
}
