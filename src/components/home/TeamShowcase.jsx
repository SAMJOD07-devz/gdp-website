import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone, Scale } from 'lucide-react';
import { TEAM_MEMBERS, FIRM_DETAILS } from '../../data/firmData';

export default function TeamShowcase({ onOpenConsultation }) {
  const seniorLawyers = TEAM_MEMBERS.filter((m) => m.isSenior || m.featured);
  const associates = TEAM_MEMBERS.filter((m) => !m.isSenior && !m.featured);

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#FFFFFF] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-[rgba(14,31,51,0.10)]">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
              <span>Senior Experience with Young Enthusiasm</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] tracking-tight">
              Senior advocates &amp; legal counsel.
            </h2>
            <p className="text-xs sm:text-sm text-[#4A5B70] pt-1">
              Anchored by father-and-son advocates Adv. Dinesh B. Pandya and Adv. Gaurav D. Pandya, delivering comprehensive trial advocacy and advisory across Jamnagar and other cities in Gujarat.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link
              to="/team"
              className="inline-flex items-center text-xs sm:text-sm font-medium text-[#0E1F33] hover:text-[#A8803A] editorial-link transition-colors group"
            >
              <span>View all counsel profiles</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        {/* Senior Advocates Showcase (Father & Son: D B PANDYA & GAURAV PANDYA) */}
        <div className="mb-14 sm:mb-20 space-y-8">
          <div className="flex items-center justify-between pb-2 border-b border-[rgba(14,31,51,0.08)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
              Senior Leadership &amp; Founding Counsel
            </span>
            <span className="text-xs text-[#738499]">
              Jamnagar - 361001 &amp; Gujarat
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {seniorLawyers.map((counsel) => (
              <div
                key={counsel.id}
                className="rounded-xl bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] p-6 sm:p-8 card-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                    
                    {/* Portrait Photo Frame */}
                    <div className="sm:col-span-5">
                      <div className="aspect-[4/5] rounded-lg overflow-hidden border border-[rgba(14,31,51,0.12)] bg-white card-shadow">
                        <img
                          src={counsel.image}
                          alt={`${counsel.name} - ${counsel.role}, GD PANDYA ASSOCIATES`}
                          className="w-full h-full object-cover object-top filter contrast-[1.02]"
                          loading="lazy"
                          width="600"
                          height="800"
                        />
                      </div>
                      <div className="mt-2 text-center">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white text-[#0E1F33] border border-[rgba(14,31,51,0.10)]">
                          {counsel.experience}
                        </span>
                      </div>
                    </div>

                    {/* Counsel Header Info */}
                    <div className="sm:col-span-7 space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A8803A] bg-white px-2 py-0.5 rounded border border-[rgba(14,31,51,0.08)]">
                          {counsel.relation}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0E1F33]">
                        {counsel.name}
                      </h3>
                      <p className="text-xs text-[#0E1F33] font-medium">
                        {counsel.role}
                      </p>
                      <p className="text-xs text-[#4A5B70]">
                        {counsel.qualifications} · {counsel.credentials}
                      </p>
                      <p className="text-[11px] text-[#738499]">
                        {counsel.enrollment}
                      </p>
                    </div>

                  </div>

                  <p className="text-xs sm:text-sm text-[#4A5B70] leading-relaxed pt-4">
                    {counsel.bio}
                  </p>

                  {/* Practice pills */}
                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {counsel.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-[#0E1F33] border border-[rgba(14,31,51,0.08)]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: DB Pandya has NO phone number */}
                <div className="pt-5 mt-4 border-t border-[rgba(14,31,51,0.08)] flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-slate-300" strokeWidth={1.5} />
                  </button>

                  {counsel.phone ? (
                    <a
                      href={`tel:${counsel.phone.replace(/[\s-]/g, '')}`}
                      className="inline-flex items-center justify-center text-xs font-medium text-[#0E1F33] bg-white border border-[rgba(14,31,51,0.12)] px-3.5 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1 text-[#A8803A]" strokeWidth={1.5} />
                      <span>{counsel.phone}</span>
                    </a>
                  ) : null}
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Associate Counsel Grid */}
        {/* Order: Vyom Devani first, then Falguni, A (Alifiya), D (Drashti), K (Khyati), J (J. Associate) */}
        <div>
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#0E1F33]">
                Legal Associates
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5B70] mt-1">
                Trial assistance, judicial research, and dispute advocacy across Jamnagar and other cities.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#A8803A]">
              Jamnagar and other cities
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5">
            {associates.map((member) => (
              <div
                key={member.id}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Portrait frame */}
                  {member.image ? (
                    <div className="aspect-[3/4] max-h-56 sm:max-h-none bg-[#EEF3F8] overflow-hidden border-b border-[rgba(14,31,51,0.08)]">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role} at GD PANDYA ASSOCIATES`}
                        className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-102 transition-transform duration-300"
                        loading="lazy"
                        width="600"
                        height="800"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] max-h-56 sm:max-h-none bg-[#EEF3F8] border-b border-[rgba(14,31,51,0.08)] flex flex-col items-center justify-center p-4 text-center">
                      <div className="w-12 h-12 rounded-full bg-white border border-[rgba(14,31,51,0.12)] flex items-center justify-center text-[#A8803A] mb-2 shadow-xs">
                        <Scale className="w-5 h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-semibold text-[#0E1F33]">GD PANDYA ASSOCIATES</span>
                      <span className="text-[10px] text-[#738499] uppercase tracking-wider mt-0.5">Legal Associate</span>
                    </div>
                  )}

                  <div className="p-3.5 space-y-1">
                    <p className="text-[10px] font-semibold text-[#A8803A] uppercase tracking-wider truncate">
                      {member.role}
                    </p>
                    <h5 className="font-serif text-base font-semibold text-[#0E1F33] leading-snug">
                      {member.name}
                    </h5>
                    <p className="text-[11px] text-[#738499]">
                      {member.qualifications}
                    </p>
                    <p className="text-xs text-[#4A5B70] leading-relaxed pt-1 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 pt-0">
                  <div className="pt-2 border-t border-[rgba(14,31,51,0.06)]">
                    <span className="text-[11px] text-[#0E1F33] font-medium block truncate">
                      {member.focus || (member.specialties && member.specialties[0]) || member.credentials}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
