import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../../data/firmData';

export default function AboutSnippet() {
  return (
    <section className="py-16 lg:py-24 bg-navy-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Business Card & Visual (5 cols) */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 bg-navy-950 p-2 shadow-2xl group">
              <img
                src="/assets/business-card.jpeg"
                alt="Official Visiting Card - Advocate Gaurav D. Pandya, Government of India Notary"
                className="w-full h-auto rounded-xl shadow-inner border border-slate-800 group-hover:scale-102 transition-transform duration-300"
              />
              <div className="p-3 text-center bg-navy-900/90 rounded-b-xl border-t border-slate-800">
                <p className="text-xs text-gold-400 font-medium">
                  Official Verification &amp; Notary Card · Government of India
                </p>
              </div>
            </div>

            {/* Quote box */}
            <div className="p-5 rounded-xl bg-gold-500/5 border-l-4 border-gold-400 text-xs sm:text-sm text-slate-300 italic">
              &quot;Legal advocacy is not merely about arguing statutes; it is about providing decisive, dependable protection for people&apos;s livelihoods, hard-earned properties, and families.&quot;
              <span className="block mt-2 font-semibold text-gold-300 not-italic">
                — Advocate Gaurav D. Pandya
              </span>
            </div>

          </motion.div>

          {/* Right Column: Narrative (7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            
            <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>About GD Pandya Associates</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-snug">
              A Trusted Legal Pillar Built on Integrity, Diligence &amp; Trial Experience
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              Established under the visionary leadership of <strong>Advocate Gaurav Dineshchandra Pandya</strong>, GD Pandya Associates has evolved into one of Jamnagar’s most respected full-service law offices. With formal qualifications spanning <strong>B.Com, L.L.B., and Diploma in Labour Laws and Practice (DLLP)</strong> from Saurashtra University’s Shah Law College, Adv. Pandya unites sharp financial acumen with comprehensive courtroom prowess.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-light">
              Appointed as a <strong>Government of India Notary</strong> and recognized as a <strong>Registered Trade Mark Attorney</strong>, the firm provides clients with turnkey solutions—from drafting title clearance certificates and securing national trademarks to representing complex disputes before the District Courts and the High Court of Gujarat.
            </p>

            {/* Core Values / Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-navy-950/60 border border-slate-800/80 hover:border-gold-500/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-xs sm:text-sm">Direct Senior Counsel Access</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Every matter is personally reviewed and guided by senior advocates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-navy-950/60 border border-slate-800/80 hover:border-gold-500/30 transition-colors">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-xs sm:text-sm">Institutional Trust</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Selected panel counsel for premier nationalized banks and universities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-navy-950/60 border border-slate-800/80 hover:border-gold-500/30 transition-colors">
                <BookOpen className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-xs sm:text-sm">Comprehensive IP Practice</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Specialized trademark registration, objection hearing, and copyright protection.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-lg bg-navy-950/60 border border-slate-800/80 hover:border-gold-500/30 transition-colors">
                <Award className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-white text-xs sm:text-sm">18+ Years Bar Standing</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">Unblemished professional record with the Bar Council of Gujarat since 2007.</p>
                </div>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center text-sm font-semibold text-gold-400 hover:text-gold-300 group"
              >
                <span>Read complete firm profile &amp; credentials</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
