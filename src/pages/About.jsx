import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Scale, Landmark, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS, STATS } from '../data/firmData';

export default function About() {
  const { openConsultation } = useOutletContext();

  const credentialsList = [
    {
      title: "Enrollment with Bar Council of Gujarat (2007)",
      desc: "Continuous active practice for over 18 years before the District & Sessions Court Jamnagar and the Gujarat High Court."
    },
    {
      title: "Appointed Government of India Notary",
      desc: "Authorized by the Union Ministry of Law & Justice for affidavits, document attestations, and statutory certifications."
    },
    {
      title: "Registered Trade Mark & Copyright Attorney",
      desc: "Accredited with the Controller General of Patents, Designs and Trade Marks (CGPDTM), Govt. of India."
    },
    {
      title: "Member, Jamnagar Bar Association",
      desc: "Active contributor and respected member of the Bar fraternity, upholding the highest standards of legal ethics."
    },
    {
      title: "Legal Panel Counsel for Public Bodies & Banks",
      desc: "Empanelled with Gujarat Ayurved University, Gujarat Water Board, Central Bank of India, and Union Bank of India."
    }
  ];

  return (
    <div className="bg-navy-950 py-12 lg:py-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Firm Profile &amp; Founder Heritage</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Advocate Gaurav D. Pandya &amp; Associates
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Delivering uncompromised legal representation, intellectual property expertise, and notary services rooted in integrity, depth of jurisprudence, and unwavering client advocacy.
          </p>
        </div>

        {/* Founder Spotlight: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Office Photograph with Certificates & Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-2xl">
              <img
                src="/assets/team/gaurav-pandya-office.jpeg"
                alt="Advocate Gaurav D. Pandya in Jamnagar Office with Saurashtra University Certificates"
                className="w-full h-auto object-cover"
              />
              <div className="p-4 bg-navy-900 border-t border-slate-800 text-center">
                <h3 className="font-display font-bold text-white text-lg">
                  Adv. Gaurav Dineshchandra Pandya
                </h3>
                <p className="text-xs text-gold-400 font-semibold mt-0.5">
                  B.Com, L.L.B., DLLP (Shah Law College / Saurashtra Univ.)
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Founder · Government of India Notary · Regd. Trademark Attorney
                </p>
              </div>
            </div>

            {/* Visiting Card Reference */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-900 p-2 shadow">
              <img
                src="/assets/business-card.jpeg"
                alt="Advocate Gaurav Pandya Notary Visiting Card"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Right Column: Educational Background & Detailed Journey */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              <h2 className="font-display font-bold text-2xl text-white">
                Educational Foundation &amp; Jurisprudential Legacy
              </h2>
              <p>
                Advocate Gaurav D. Pandya completed his higher legal education from the prestigious <strong>Shah Law College, Jamnagar</strong>, affiliated with <strong>Saurashtra University</strong>, earning degrees in <strong>Commerce (B.Com)</strong>, <strong>Law (L.L.B.)</strong>, and an advanced <strong>Diploma in Labour Laws and Practice (DLLP)</strong>.
              </p>
              <p>
                This multi-disciplinary academic background—uniting commercial finance, corporate structures, and statutory labor laws—provides the firm with a unique advantage in handling complex commercial disputes, corporate negotiations, and property title litigations.
              </p>
              <p>
                Enrolled with the <strong>Bar Council of Gujarat in 2007</strong>, Adv. Pandya has continually built a distinguished litigation track record before the District &amp; Sessions Courts of Jamnagar, Devbhoomi Dwarka, Rajkot, and appellate proceedings before the High Court of Gujarat.
              </p>
            </div>

            {/* Credentials Accordion/List */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h3 className="font-display font-bold text-lg text-white">
                Key Professional Accreditations
              </h3>

              <div className="space-y-2.5">
                {credentialsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-navy-900/90 border border-slate-800/80 flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={openConsultation}
                className="px-6 py-3 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-sm rounded-lg shadow-lg cursor-pointer"
              >
                Schedule Consultation
              </button>
              <a
                href={FIRM_DETAILS.social.phone}
                className="inline-flex items-center px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg border border-slate-700"
              >
                <Phone className="w-4 h-4 mr-2 text-gold-400" />
                <span>Call {FIRM_DETAILS.phone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Firm Ethos & Commitments */}
        <div className="rounded-2xl bg-navy-900 border border-slate-800 p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              The Guiding Pillars of GD Pandya Associates
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Upholding time-tested values of the Indian legal profession.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3 p-5 rounded-xl bg-navy-950/70 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Absolute Confidentiality</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                Every consultation, document, and corporate strategy is protected by strict statutory advocate-client privilege.
              </p>
            </div>

            <div className="text-center space-y-3 p-5 rounded-xl bg-navy-950/70 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Rigorous Trial Preparation</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                We believe trials are won in preparation. Every precedent is researched and every piece of evidence cross-verified.
              </p>
            </div>

            <div className="text-center space-y-3 p-5 rounded-xl bg-navy-950/70 border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mx-auto">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">Transparent Counsel</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                We provide pragmatic assessments of merits, potential costs, and expected timelines without misleading promises.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

