import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Scale, Landmark, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
      desc: "Authorized by the Union Ministry of Law & Justice for affidavits, statutory certifications, and legal document attestations."
    },
    {
      title: "Registered Trade Mark & Copyright Attorney",
      desc: "Accredited with the Controller General of Patents, Designs and Trade Marks (CGPDTM), Government of India."
    },
    {
      title: "Member, Jamnagar Bar Association",
      desc: "Active and respected contributor to the bar fraternity, committed to the highest standards of professional ethics."
    },
    {
      title: "Panel Counsel for Public Bodies & Nationalized Banks",
      desc: "Empanelled with Central Bank of India, Union Bank of India, Gujarat Ayurved University, and Gujarat Water Board."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Advocate Gaurav D. Pandya | GD Pandya Associates, Jamnagar</title>
        <meta name="description" content="Learn about Advocate Gaurav D. Pandya — B.Com, L.L.B., DLLP (Saurashtra University), Government of India Notary & Registered Trademark Attorney. 18+ years at Gujarat High Court & District Court Jamnagar." />
        <link rel="canonical" href="https://advocate-pandya.com/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://advocate-pandya.com/about" />
        <meta property="og:title" content="About Advocate Gaurav D. Pandya | GD Pandya Associates" />
        <meta property="og:description" content="18+ years of legal mastery. Government Notary, Registered Trademark Attorney, Panel Counsel for nationalized banks. Jamnagar, Gujarat." />
        <meta property="og:image" content="https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://advocate-pandya.com/" },
            { "@type": "ListItem", "position": 2, "name": "About the Firm", "item": "https://advocate-pandya.com/about" }
          ]
        })}</script>
      </Helmet>
    <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
            Firm Profile &amp; Founder Heritage
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Advocate Gaurav D. Pandya &amp; Associates
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            Delivering uncompromised legal representation, intellectual property expertise, and notary services rooted in integrity, depth of jurisprudence, and unwavering client advocacy.
          </p>
        </div>

        {/* Founder Spotlight: 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Office Photograph & Visiting Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-[rgba(14,31,51,0.12)] bg-white card-shadow p-3">
              <div className="rounded-lg overflow-hidden aspect-[4/5] bg-[#EEF3F8]">
                <img
                  src="/assets/team/gaurav-pandya-office.webp"
                  alt="Advocate Gaurav D. Pandya in his Jamnagar office chambers with Saurashtra University law degree certificates — Principal Advocate, GD Pandya Associates"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width="900"
                  height="1200"
                />
              </div>
              <div className="pt-3 px-1 text-center">
                <p className="text-xs font-medium text-[#0E1F33]">
                  Advocate Gaurav D. Pandya in Chambers
                </p>
                <p className="text-[11px] text-[#738499]">
                  Madhav Square Chambers, Jamnagar
                </p>
              </div>
            </div>

            {/* Official Visiting Card Document Record */}
            <div className="rounded-xl overflow-hidden border border-[rgba(14,31,51,0.12)] bg-white card-shadow p-3">
              <img
                src="/assets/business-card.webp"
                alt="Government of India Notary Registration Visiting Card - Advocate Gaurav D. Pandya, Jamnagar"
                className="w-full h-auto rounded-lg border border-[rgba(14,31,51,0.06)]"
                loading="lazy"
                width="800"
                height="496"
              />
              <p className="text-[11px] text-center text-[#738499] mt-2">
                Official Government of India Notary Registration Card
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                Founding Counsel
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0E1F33] mt-1">
                Gaurav Dineshandra Pandya
              </h2>
              <p className="text-sm font-medium text-[#4A5B70] mt-1">
                B.Com, L.L.B., DLLP · Govt. of India Notary · Regd. Trade Mark Attorney
              </p>
              <p className="text-xs text-[#738499] mt-0.5">
                Bar Council of Gujarat Enrolment: 2007 · Jamnagar Bar Association
              </p>
            </div>

            {/* Education Box */}
            <div className="p-6 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow space-y-3">
              <div className="flex items-center space-x-2 text-[#0E1F33] font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-[#A8803A]" strokeWidth={1.5} />
                <span>Academic &amp; Jurisprudential Background</span>
              </div>
              <p className="text-xs sm:text-sm text-[#4A5B70] leading-relaxed">
                Advocate Gaurav Pandya completed his Bachelor of Commerce (B.Com), Bachelor of Laws (L.L.B.), and specialized Post-Graduate Diploma in Labour Laws &amp; Practice (DLLP) from the esteemed <strong>Shah Law College, Saurashtra University</strong>.
              </p>
              <p className="text-xs text-[#738499] leading-relaxed">
                His multidisciplinary training provides a unique dual perspective: acute commercial discernment alongside mastery over civil procedural codes, criminal jurisprudence, and statutory property laws.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A5B70] leading-relaxed">
              <p>
                Since commencing independent practice in 2007, Advocate Gaurav Pandya has appeared in hundreds of contentious disputes before the Courts of Jamnagar, the Sessions Court, and the High Court of Gujarat. His courtroom hallmark is rigorous legal research, uncompromising preparation of documentary evidence, and persuasive oral advocacy.
              </p>
              <p>
                Recognized by the Ministry of Law and Justice, Government of India, as an authorized Notary, he oversees official verifications, oaths, and authentications. Concurrently, his appointment as a Registered Trade Mark Attorney has established the firm as a regional hub for intellectual property filings, trademark portfolio management, and objection hearings.
              </p>
            </div>

            {/* Accreditation List */}
            <div className="pt-2 space-y-3">
              <h3 className="font-serif text-xl font-normal text-[#0E1F33]">
                Professional Standing &amp; Accreditations
              </h3>
              <div className="space-y-3">
                {credentialsList.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-lg bg-white border border-[rgba(14,31,51,0.08)] card-shadow flex items-start space-x-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0E1F33]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#4A5B70] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center space-x-4">
              <button
                onClick={openConsultation}
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={1.5} />
              </button>
              <a
                href={FIRM_DETAILS.social.phone}
                className="text-xs font-medium text-[#0E1F33] hover:text-[#A8803A] editorial-link"
              >
                Direct Call: +91 98985 98184
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
    </>
  );
}
