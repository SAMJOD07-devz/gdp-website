import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext, Link } from 'react-router-dom';
import { Award, GraduationCap, ShieldCheck, Scale, Landmark, Phone, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { FIRM_DETAILS, STATS, INSTITUTIONAL_CLIENTS, TEAM_MEMBERS } from '../data/firmData';

export default function About() {
  const { openConsultation } = useOutletContext();
  const dbPandya = TEAM_MEMBERS.find((m) => m.id === 'dinesh-pandya');
  const gauravPandya = TEAM_MEMBERS.find((m) => m.id === 'gaurav-pandya');

  const credentialsList = [
    {
      title: "Enrollment with Bar Council of Gujarat (2007)",
      desc: "Continuous active courtroom practice for over 19 years before the District & Sessions Court Jamnagar and other cities across Gujarat."
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
      desc: "Respected contributor to the Saurashtra bar fraternity, upholding the highest standards of professional jurisprudence."
    },
    {
      title: "Panel Legal Counsel for Nationalized Banks & Public Undertakings",
      desc: "Empanelled counsel for Central Bank of India, Union Bank of India, Oriental Bank of Commerce, Gujarat Ayurved University, and Gujarat Water Board."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About GD PANDYA ASSOCIATES | Senior Advocates & Legal Consultants, Jamnagar - 361001</title>
        <meta name="description" content="About GD PANDYA ASSOCIATES: Senior experience with young enthusiasm. Guided by Adv. Dinesh B. Pandya and spearheaded by Adv. Gaurav D. Pandya (B.Com, L.L.B., DLLP). Jamnagar - 361001." />
        <link rel="canonical" href="https://advocate-pandya.com/about" />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://advocate-pandya.com/about" />
        <meta property="og:title" content="About GD PANDYA ASSOCIATES | Jamnagar, Gujarat" />
        <meta property="og:description" content="Senior experience with young enthusiasm. 40+ years family legacy, 19+ years active practice. Jamnagar - 361001." />
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
        
        {/* Page Header with Tagline */}
        <div className="max-w-3xl mb-16 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
            <span>Senior Experience with Young Enthusiasm</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            GD PANDYA ASSOCIATES
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            A generational legal pillar uniting four decades of senior jurisprudence with dynamic trial advocacy, registered trademark prosecution, and notary services in Jamnagar - 361001 and other cities across Gujarat.
          </p>
        </div>

        {/* 1. D B PANDYA: Senior Guiding Pillar Spotlight */}
        <div className="mb-20 rounded-2xl bg-white border border-[rgba(14,31,51,0.12)] p-6 sm:p-10 card-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* D B Pandya Photo */}
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-[rgba(14,31,51,0.10)] bg-[#EEF3F8] shadow-xs">
                <img
                  src={dbPandya?.image || "/assets/team/dinesh-pandya.webp"}
                  alt="Senior Advocate Dinesh B. Pandya (D B PANDYA) — Founding Pillar, GD PANDYA ASSOCIATES"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  width="600"
                  height="800"
                />
              </div>
              <div className="pt-3 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] px-2.5 py-0.5 rounded border border-[rgba(14,31,51,0.08)]">
                  Senior Counsel &amp; Founding Pillar
                </span>
                <p className="text-xs text-[#738499] mt-1">
                  40+ Years Bar Standing · Senior Guidance
                </p>
              </div>
            </div>

            {/* D B Pandya Bio */}
            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                  Founding Pillar
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#0E1F33]">
                  Adv. Dinesh B. Pandya (D B PANDYA)
                </h2>
                <p className="text-sm font-medium text-[#4A5B70]">
                  B.A., L.L.B. · Senior Advocate &amp; Guiding Mentor
                </p>
              </div>

              <p className="text-base text-[#4A5B70] leading-relaxed">
                With more than four decades of distinguished bar standing, <strong>Advocate Dinesh B. Pandya</strong> is the foundational pillar of <strong>GD PANDYA ASSOCIATES</strong>. His extensive career in civil law, land tenure disputes, ancestral property partition, and revenue jurisprudence provides the chambers with rare institutional wisdom and seasoned tactical judgment.
              </p>

              <p className="text-sm text-[#4A5B70] leading-relaxed">
                As senior mentor, he guides the strategic architecture of major complex suits, title clearance opinions, and appeals, ensuring that every matter adheres to the highest traditions of the Bar.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {["Senior Jurisprudence", "Civil Law & Partition", "Land Tenure & Revenue", "Institutional Mentorship"].map((spec, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.08)]"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Note: DB Pandya phone number removed per user instruction */}
              <div className="pt-4 border-t border-[rgba(14,31,51,0.08)] flex items-center space-x-3 text-xs text-[#738499]">
                <Scale className="w-4 h-4 text-[#A8803A]" />
                <span>Senior chambers consultations coordinated through Managing Principal Advocate Gaurav D. Pandya</span>
              </div>
            </div>

          </div>
        </div>

        {/* 2. GAURAV D. PANDYA: Managing Principal Advocate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Office Photograph & Visiting Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-[rgba(14,31,51,0.12)] bg-white card-shadow p-3">
              <div className="rounded-lg overflow-hidden aspect-[4/5] bg-[#EEF3F8]">
                <img
                  src="/assets/team/gaurav-pandya-office.webp"
                  alt="Advocate Gaurav D. Pandya in Jamnagar chambers — GD PANDYA ASSOCIATES"
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
                  Madhav Square Chambers, Jamnagar - 361001
                </p>
              </div>
            </div>

            {/* Official Visiting Card Document Record */}
            <div className="rounded-xl overflow-hidden border border-[rgba(14,31,51,0.12)] bg-white card-shadow p-3">
              <img
                src="/assets/dinesh-gaurav-cards.webp"
                alt="Official Practice Cards - Adv. Dinesh B. Pandya & Adv. Gaurav D. Pandya, Jamnagar"
                className="w-full h-auto rounded-lg border border-[rgba(14,31,51,0.06)]"
                loading="lazy"
                width="800"
              />
              <p className="text-[11px] text-center text-[#738499] mt-2">
                Official Practice Credentials · Adv. Dinesh B. Pandya &amp; Adv. Gaurav D. Pandya
              </p>
            </div>
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                Managing Principal Advocate
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0E1F33] mt-1">
                Gaurav D. Pandya
              </h2>
              <p className="text-sm font-medium text-[#4A5B70] mt-1">
                B.Com, L.L.B., DLLP · Govt. of India Notary · Regd. Trade Mark Attorney
              </p>
              <p className="text-xs text-[#738499] mt-0.5">
                Bar Council of Gujarat Enrolment: 2007 (19+ Years Standing) · Jamnagar Bar Association
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
                His multidisciplinary training provides a unique dual perspective: acute commercial discernment alongside mastery over civil procedural codes, criminal jurisprudence, banking recovery, and statutory property laws.
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A5B70] leading-relaxed">
              <p>
                Since commencing practice in 2007, Advocate Gaurav Pandya has represented clients in over 2,500 matters before the District &amp; Sessions Courts of Jamnagar and other cities in Gujarat. His courtroom hallmark is rigorous legal research, uncompromising preparation of documentary evidence, and persuasive oral advocacy.
              </p>
              <p>
                Recognized by the Ministry of Law and Justice, Government of India, as an authorized Notary, he oversees official verifications, oaths, and authentications. Concurrently, as a Registered Trade Mark Attorney, he manages national brand filings, opposition hearings, and corporate trademark portfolios.
              </p>
            </div>

            {/* Professional Standing & Accreditations */}
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
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors cursor-pointer"
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

        {/* 3. Panel Counsel Section (Nationalized Banks & Public Undertakings) */}
        <div className="mb-20 pt-12 border-t border-[rgba(14,31,51,0.10)]">
          <div className="max-w-3xl mb-8 space-y-1">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Panel Counsel Credentials
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-[#0E1F33]">
              Empanelled Legal Counsel for Banks &amp; Statutory Institutions
            </h2>
            <p className="text-sm text-[#4A5B70] pt-1">
              GD PANDYA ASSOCIATES is entrusted by premier nationalized banks and state authorities for banking recovery suits, title search audits, and institutional litigation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INSTITUTIONAL_CLIENTS.map((inst, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow space-y-2"
              >
                <div className="flex items-center space-x-2 text-[#A8803A]">
                  <Landmark className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-xs font-bold uppercase tracking-wider">{inst.role}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0E1F33]">
                  {inst.name}
                </h3>
                <p className="text-xs text-[#738499]">
                  {inst.type}
                </p>
                <p className="text-xs text-[#4A5B70] pt-1 border-t border-[rgba(14,31,51,0.06)] leading-relaxed">
                  {inst.scope}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Address Banner with Jamnagar - 361001 */}
        <div className="p-6 rounded-xl bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#0E1F33]">
            <MapPin className="w-5 h-5 text-[#A8803A] shrink-0" strokeWidth={1.5} />
            <span>
              <strong>GD PANDYA ASSOCIATES:</strong> Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar - 361001, Gujarat, India
            </span>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center px-4 py-2 bg-[#0E1F33] text-white rounded-lg text-xs font-semibold hover:bg-[#162C47] transition-colors shrink-0"
          >
            <span>Meet Our Complete Team</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </Link>
        </div>

      </div>
    </div>
    </>
  );
}
