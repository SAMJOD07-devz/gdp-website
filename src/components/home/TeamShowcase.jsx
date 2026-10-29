import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Award, ShieldCheck, Phone, Mail, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { TEAM_MEMBERS, FIRM_DETAILS } from '../../data/firmData';

export default function TeamShowcase({ onOpenConsultation }) {
  const principal = TEAM_MEMBERS.find((m) => m.featured);
  const associates = TEAM_MEMBERS.filter((m) => !m.featured);

  return (
    <section className="py-16 lg:py-24 bg-navy-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>Legal Counsel &amp; Advocates</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Meet the Experienced Legal Minds at GD Pandya Associates
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Our multi-disciplinary team brings together courtroom veterans, registered trademark attorneys, and skilled legal researchers dedicated to securing client objectives.
          </p>
        </div>

        {/* Featured Founder Spotlight Card */}
        {principal && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14 rounded-2xl bg-navy-950 border-2 border-gold-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              {/* Photo */}
              <div className="lg:col-span-4 text-center lg:text-left">
                <div className="relative inline-block mx-auto">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-gold-400/80 shadow-xl bg-slate-900">
                    <img
                      src={principal.image}
                      alt={principal.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-navy-900 border border-gold-400 px-3 py-1 rounded-full text-[11px] font-bold text-gold-300 shadow whitespace-nowrap">
                    Enrolled 2007 · 18+ Yrs Exp
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
                <div>
                  <span className="text-xs font-semibold text-gold-400 tracking-wider uppercase">
                    Founder &amp; Principal Advocate
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-0.5">
                    {principal.name}
                  </h3>
                  <p className="text-sm text-gold-300 font-medium">
                    {principal.qualifications} · {principal.credentials}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {principal.enrollment}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {principal.bio}
                </p>

                {/* Case Resolution metric */}
                <div className="py-2 max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span className="flex items-center text-gold-400">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      Client Satisfaction &amp; Case Resolution Index
                    </span>
                    <span className="text-gold-300 font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-gold-500 to-amber-400 rounded-full w-[95%]"></div>
                  </div>
                </div>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                  {principal.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-xs px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-300 font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Direct Action */}
                <div className="pt-3 flex flex-wrap gap-3 justify-center lg:justify-start">
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg shadow cursor-pointer"
                  >
                    Consult Advocate Pandya
                  </button>
                  <a
                    href={FIRM_DETAILS.social.phone}
                    className="inline-flex items-center px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-medium rounded-lg border border-slate-700"
                  >
                    <Phone className="w-3.5 h-3.5 mr-2 text-gold-400" />
                    <span>Call Directly</span>
                  </a>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {/* 5 Legal Associates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {associates.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-xl bg-navy-950/80 border border-slate-800 p-5 text-center flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 hover:shadow-xl group"
            >
              <div>
                {/* Associate Image */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-gold-400 transition-colors bg-slate-900 shadow-md mb-3.5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info */}
                <h4 className="font-display font-bold text-base text-white group-hover:text-gold-300 transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-gold-400 font-semibold mt-0.5">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-medium">
                  {member.qualifications}
                </p>

                <p className="text-[11px] text-slate-300 leading-relaxed font-light mt-2.5 line-clamp-3">
                  {member.bio}
                </p>
              </div>

              {/* Bottom Specialty Tag */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-gold-300/90 font-medium">
                {member.specialties[0]}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Team Link */}
        <div className="mt-12 text-center">
          <Link
            to="/team"
            className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            <span>View Detailed Profiles &amp; Court Admissions</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
