import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { Users, Award, ShieldCheck, Phone, ArrowUpRight } from 'lucide-react';
import { TEAM_MEMBERS, FIRM_DETAILS } from '../data/firmData';

export default function Team() {
  const { openConsultation } = useOutletContext();
  const seniorLawyers = TEAM_MEMBERS.filter((m) => m.isSenior || m.featured);
  const associates = TEAM_MEMBERS.filter((m) => !m.isSenior && !m.featured);

  return (
    <>
      <Helmet>
        <title>Our Legal Team | Senior Advocates & Associates — GD Pandya Associates, Jamnagar</title>
        <meta name="description" content="Meet the legal team at GD Pandya Associates: Senior Advocate Dinesh B. Pandya (Founding Counsel & Mentor), Managing Principal Gaurav D. Pandya (Govt. Notary & Trademark Attorney), Partner Falguni Pandya, and specialized associates." />
        <link rel="canonical" href="https://advocate-pandya.com/team" />
        <meta property="og:url" content="https://advocate-pandya.com/team" />
        <meta property="og:title" content="Our Legal Team | GD Pandya Associates, Jamnagar Gujarat" />
        <meta property="og:description" content="Generational legal practice anchored by Senior Advocate Dinesh B. Pandya and Advocate Gaurav D. Pandya (father & son), backed by dedicated associate counsel." />
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
          <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
            Senior Counsel &amp; Legal Associates
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Our legal team.
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            An established multi-generational law practice uniting senior courtroom litigators, registered trademark attorneys, and dedicated research associates in Jamnagar, Gujarat.
          </p>
        </div>

        {/* Senior Leadership Section (Father & Son) */}
        <div className="mb-20 space-y-10">
          <div className="pb-3 border-b border-[rgba(14,31,51,0.10)] flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                Senior Advocates &amp; Founding Counsel
              </h2>
              <p className="text-xs sm:text-sm text-[#738499] mt-0.5">
                Generational trial mastery anchored by father and son advocates.
              </p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)]">
              Leadership
            </span>
          </div>

          <div className="space-y-8">
            {seniorLawyers.map((counsel, idx) => (
              <div
                key={counsel.id}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.12)] p-6 sm:p-8 lg:p-10 card-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Rectangular Photo Frame */}
                  <div className="lg:col-span-4">
                    <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8]">
                      <img
                        src={counsel.image}
                        alt={`${counsel.name} - ${counsel.role}, GD Pandya Associates, Jamnagar`}
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
                        className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors"
                      >
                        <span>Schedule Consultation</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-300" strokeWidth={1.5} />
                      </button>
                      <a
                        href={`tel:${counsel.phone.replace(/[\s-]/g, '')}`}
                        className="inline-flex items-center text-xs font-medium text-[#0E1F33] bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] px-3.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 mr-1.5 text-[#A8803A]" strokeWidth={1.5} />
                        <span>Direct: {counsel.phone}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Associates Section */}
        <div className="space-y-6">
          <div className="pb-4 border-b border-[rgba(14,31,51,0.08)]">
            <h3 className="font-serif text-2xl font-normal text-[#0E1F33]">
              Associate Advocates
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5B70] mt-1">
              Qualified legal professionals handling specialized courtroom drafting, research, and client coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {associates.map((member) => (
              <div
                key={member.id}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-5 card-shadow flex flex-col justify-between space-y-4"
              >
                <div className="flex space-x-4">
                  <div className="w-24 h-32 rounded-lg overflow-hidden border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8] shrink-0">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}, GD Pandya Associates, Jamnagar`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      width="192"
                      height="256"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-[#A8803A] uppercase tracking-wider">
                      {member.role}
                    </p>
                    <h4 className="font-serif text-lg font-semibold text-[#0E1F33]">
                      {member.name}
                    </h4>
                    <p className="text-xs text-[#738499]">
                      {member.qualifications}
                    </p>
                    <p className="text-xs text-[#0E1F33] font-medium pt-1">
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
