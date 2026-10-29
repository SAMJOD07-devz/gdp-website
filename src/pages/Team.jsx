import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, Award, ShieldCheck, Phone, Mail, Calendar, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, FIRM_DETAILS } from '../data/firmData';

export default function Team() {
  const { openConsultation } = useOutletContext();

  return (
    <div className="bg-navy-950 py-12 lg:py-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Advocates &amp; Legal Associates</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Our Legal Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            A cohesive team of advocates combining seasoned trial litigators, certified trademark attorneys, and dedicated legal researchers at GD Pandya Associates.
          </p>
        </div>

        {/* Team Members Detailed Grid */}
        <div className="space-y-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className={`rounded-2xl border p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden ${
                member.featured
                  ? 'bg-navy-900 border-2 border-gold-500/50'
                  : 'bg-navy-900/80 border-slate-800'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Photo & Quick Tag */}
                <div className="lg:col-span-4 text-center lg:text-left">
                  <div className="relative inline-block mx-auto">
                    <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-xl bg-slate-950">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {member.featured && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy-950 border border-gold-400 px-3.5 py-1 rounded-full text-xs font-bold text-gold-300 shadow whitespace-nowrap">
                        Bar Council 2007 · Notary
                      </div>
                    )}
                  </div>
                </div>

                {/* Details & Biography */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <span className="text-xs font-bold text-gold-400 tracking-wider uppercase">
                      {member.role}
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mt-0.5">
                      {member.name}
                    </h2>
                    <p className="text-sm text-gold-300 font-medium">
                      {member.qualifications} {member.credentials && `· ${member.credentials}`}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {member.enrollment}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {member.bio}
                  </p>

                  {/* Specialties Pills */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Core Practice Focus:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="text-xs px-3 py-1 rounded-lg bg-navy-950 border border-slate-700 text-slate-200 font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-3">
                    <button
                      onClick={openConsultation}
                      className="px-5 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg shadow cursor-pointer"
                    >
                      Book Consultation with {member.name.split(' ')[1]}
                    </button>
                    <a
                      href={FIRM_DETAILS.social.phone}
                      className="inline-flex items-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700"
                    >
                      <Phone className="w-3.5 h-3.5 mr-2 text-gold-400" />
                      <span>{FIRM_DETAILS.phone}</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

