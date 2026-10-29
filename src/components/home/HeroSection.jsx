import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Phone, Calendar, ArrowRight, Award, Scale, Landmark, CheckCircle } from 'lucide-react';
import { FIRM_DETAILS, STATS } from '../../data/firmData';

export default function HeroSection({ onOpenConsultation }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative overflow-hidden bg-navy-950 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      
      {/* Background Graphic Effects */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-luminosity"
        style={{ backgroundImage: `url('/assets/hero-legal.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/80" />
      
      {/* Gold Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Trust Pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-medium shadow-sm">
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
                <span>18+ Years of Legal Mastery · Gujarat High Court &amp; Jamnagar</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white tracking-tight leading-[1.15]"
            >
              Defending Your Rights.{' '}
              <span className="gold-gradient-text block mt-1">
                Delivering Justice.
              </span>
            </motion.h1>

            {/* Sub-text */}
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-light"
            >
              Led by <strong className="text-white font-semibold">Advocate Gaurav D. Pandya (B.Com, L.L.B., DLLP)</strong>, Government of India Notary and Registered Trademark Attorney. Trusted counsel for civil &amp; criminal litigation, nationalized bank recoveries, property title clearance, and corporate brand protection.
            </motion.p>

            {/* Credential Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="flex items-center space-x-2 bg-navy-900/90 border border-slate-800 p-2.5 rounded-lg text-slate-300 hover:border-gold-500/40 transition-colors">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium">Govt. of India Notary</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/90 border border-slate-800 p-2.5 rounded-lg text-slate-300 hover:border-gold-500/40 transition-colors">
                <Scale className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium">Regd. Trademark Attorney</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/90 border border-slate-800 p-2.5 rounded-lg text-slate-300 col-span-2 sm:col-span-1 hover:border-gold-500/40 transition-colors">
                <Landmark className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="font-medium">Nationalized Bank Panel</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold tracking-wide text-slate-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-amber-400 rounded-lg shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Legal Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href={FIRM_DETAILS.social.phone}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-navy-900/80 hover:bg-slate-800 border border-slate-700 hover:border-gold-500/50 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-gold-400" />
                <span>Call {FIRM_DETAILS.phone}</span>
              </a>
            </motion.div>

            {/* Quick Consultation note */}
            <motion.p variants={itemVariants} className="text-[11px] text-slate-400 flex items-center space-x-1.5 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Direct consultation available at Jamnagar office (Madhav Square, Limda Lane)</span>
            </motion.p>

          </motion.div>

          {/* Right Hero Visual Card (5 Cols) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none group">
              
              {/* Outer Decorative Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500/40 via-amber-600/30 to-gold-400/40 rounded-2xl blur-sm group-hover:blur-md transition-all"></div>

              {/* Card Container */}
              <div className="relative bg-navy-900 border border-gold-500/40 rounded-2xl overflow-hidden shadow-2xl">
                
                {/* Photo of Adv. Gaurav Pandya in Office */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-950">
                  <img
                    src="/assets/team/gaurav-pandya-office.jpeg"
                    alt="Advocate Gaurav D. Pandya in Jamnagar Office"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>

                  <div className="absolute top-3 right-3 bg-navy-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-gold-400/50 text-[11px] text-gold-300 font-semibold shadow">
                    Bar Council 2007
                  </div>
                </div>

                {/* Card Bio Snippet */}
                <div className="p-6 space-y-3">
                  <div>
                    <h2 className="font-display font-bold text-xl text-white">
                      Adv. Gaurav D. Pandya
                    </h2>
                    <p className="text-xs text-gold-400 font-semibold tracking-wide">
                      B.Com, L.L.B., DLLP (Saurashtra University)
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Advocate · Government Notary · Regd. Trade Mark Attorney
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Empanelled with <strong>Central Bank of India</strong>, <strong>Union Bank of India</strong>, <strong>Gujarat Ayurved University</strong>, and <strong>Gujarat Water Board</strong>.
                  </p>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                    <span>Office No. 241, Madhav Square</span>
                    <span className="text-gold-400 font-medium">Jamnagar, Gujarat</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Key Stats Bar */}
        <motion.div 
          className="mt-14 pt-8 border-t border-slate-800/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="p-4 rounded-xl bg-navy-900/50 border border-slate-800/60 hover:border-gold-500/40 transition-colors">
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-gold-400">
                  {stat.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-light">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
