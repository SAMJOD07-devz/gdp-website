import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { Users, Award, ShieldCheck, Phone, ArrowUpRight, MapPin, Scale, User } from 'lucide-react';
import { TEAM_MEMBERS, FIRM_DETAILS } from '../data/firmData';

export default function Team() {
  const { openConsultation } = useOutletContext();
  const seniorLawyers = TEAM_MEMBERS.filter((m) => m.isSenior || m.featured);
  const associates = TEAM_MEMBERS.filter((m) => !m.isSenior && !m.featured);

  return (
    <>
      <Helmet>
        <title>Our Legal Team | Senior Advocates & Associates — GD PANDYA ASSOCIATES, Jamnagar - 361001</title>
        <meta name="description" content="Meet the legal team at GD PANDYA ASSOCIATES: Senior Advocate Dinesh B. Pandya (D B PANDYA), Managing Principal Gaurav D. Pandya, Adv. Vyom Devani, Adv. Falguni Pandya, and associate counsel. Jamnagar and other cities." />
        <link rel="canonical" href="https://advocate-pandya.com/team" />
        <meta property="og:url" content="https://advocate-pandya.com/team" />
        <meta property="og:title" content="Our Legal Team | GD PANDYA ASSOCIATES, Jamnagar - 361001" />
        <meta property="og:description" content="Senior experience with young enthusiasm. Anchored by Adv. Dinesh B. Pandya & Adv. Gaurav D. Pandya across Jamnagar and other cities." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://advocate-pandya.com/" },
            { "@type": "ListItem", "position": 2, "name": "Our Team", "item": "https://advocate-pandya.com/team" }
          ]
        })}</script>
      </Helmet>

    <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
            <span>Senior Experience with Young Enthusiasm</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Our legal team.
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            Generational legal practice anchored by father-and-son advocates <strong>Adv. Dinesh B. Pandya</strong> and <strong>Adv. Gaurav D. Pandya</strong>, supported by regional counsel and specialized research associates in Jamnagar - 361001 and other cities across Gujarat.
          </p>
        </div>

        {/* Senior Leadership Section (Father & Son: D B PANDYA & GAURAV PANDYA) */}
        <div className="mb-20 space-y-10">
          <div className="pb-3 border-b border-[rgba(14,31,51,0.10)] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                Senior Advocates &amp; Founding Leadership
              </h2>
              <p className="text-xs sm:text-sm text-[#738499] mt-0.5">
                Senior experience with young enthusiasm · Father &amp; son counsel.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)]">
              Senior Leadership
            </span>
          </div>

          <div className="space-y-8">
            {seniorLawyers.map((counsel) => (
              <div
                key={counsel.id}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.12)] p-6 sm:p-8 lg:p-10 card-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Photo Frame */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8]">
                      <img
                        src={counsel.image}
                        alt={`${counsel.name} - ${counsel.role}, GD PANDYA ASSOCIATES, Jamnagar`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        width="600"
                        height="800"
                      />
                    </div>
                    <div className="mt-3 text-center space-y-1">
                      <p className="text-xs text-[#0E1F33] font-semibold">
                        {counsel.experience}
                      </p>
                      <p className="text-[11px] text-[#738499]">
                        {counsel.enrollment}
                      </p>
                    </div>
                  </div>

                  {/* Bio & Credentials */}
                  <div className="lg:col-span-8 space-y-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] px-2.5 py-0.5 rounded border border-[rgba(14,31,51,0.08)]">
                          {counsel.relation}
                        </span>
                        <span className="text-xs text-[#738499]">
                          {counsel.role}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#0E1F33] mt-2">
                        {counsel.name}
                      </h3>
                      <p className="text-sm font-medium text-[#4A5B70] mt-1">
                        {counsel.qualifications} · {counsel.credentials}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[#4A5B70] leading-relaxed">
                      {counsel.bio}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {counsel.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md text-xs font-medium bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.08)]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={openConsultation}
                        className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-300" strokeWidth={1.5} />
                      </button>

                      {/* DB Pandya has no phone number per explicit instruction */}
                      {counsel.phone ? (
                        <a
                          href={`tel:${counsel.phone.replace(/[\s-]/g, '')}`}
                          className="inline-flex items-center text-xs font-medium text-[#0E1F33] bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 mr-1.5 text-[#A8803A]" strokeWidth={1.5} />
                          <span>Direct: {counsel.phone}</span>
                        </a>
                      ) : (
                        <span className="text-xs text-[#738499] italic">
                          Chambers appointments coordinated via Managing Principal
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Associates Section */}
        {/* Order: Vyom Devani first, then Falguni, A (Alifiya), D (Drashti), K (Khyati), J (J. Associate) */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-[rgba(14,31,51,0.08)] flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="font-serif text-2xl font-normal text-[#0E1F33]">
                Legal Associates
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B70] mt-1">
                Trial assistance, research, and court representation across Jamnagar and other cities.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#A8803A]">
              Jamnagar and other cities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((member) => (
              <div
                key={member.id}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-5 card-shadow flex flex-col justify-between space-y-4 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex space-x-4">
                  {member.image ? (
                    <div className="w-24 h-32 rounded-lg overflow-hidden border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8] shrink-0">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}, GD PANDYA ASSOCIATES`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        width="192"
                        height="256"
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-32 rounded-lg border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8] shrink-0 flex flex-col items-center justify-center p-2 text-center">
                      <div className="w-10 h-10 rounded-full bg-white border border-[rgba(14,31,51,0.12)] flex items-center justify-center text-[#A8803A] mb-1.5 shadow-xs">
                        <Scale className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-semibold text-[#0E1F33] uppercase tracking-wider">Advocate</span>
                    </div>
                  )}
                  <div className="space-y-1 min-w-0">
                    <span className="text-[10px] font-semibold text-[#A8803A] uppercase tracking-wider block truncate">
                      {member.role}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#0E1F33] leading-snug">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#738499]">
                      {member.qualifications}
                    </p>
                    <p className="text-xs text-[#0E1F33] font-medium pt-1 line-clamp-1">
                      {member.focus || (member.specialties && member.specialties[0]) || member.credentials}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(14,31,51,0.06)] text-xs text-[#4A5B70] leading-relaxed">
                  {member.bio}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
