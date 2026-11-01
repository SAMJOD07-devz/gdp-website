import React, { useState } from 'react';
import { ChevronDown, Landmark, ShieldCheck, ArrowUpRight, Layers, Compass, CheckCircle } from 'lucide-react';
import { INSTITUTIONAL_CLIENTS } from '../../data/firmData';

export default function WhyChooseUs({ onOpenConsultation }) {
  const [lang, setLang] = useState('en'); // 'en' | 'gu' | 'hi'
  const [openFaq, setOpenFaq] = useState(0);

  // 5-Tier Pyramid Legal Process
  const pyramidSteps = [
    {
      level: 5,
      tier: "Peak",
      title: "05. Result Orientation",
      subtitle: "Decree, Enforcement & Substantive Relief",
      desc: "Delivering conclusive, enforceable results through decree execution, appellate protection, or negotiated settlement—securing our client's rights without unnecessary delays.",
      widthClass: "max-w-md",
      bgClass: "bg-[#0E1F33] text-white border-[#A8803A]",
      numBadge: "bg-[#A8803A] text-white"
    },
    {
      level: 4,
      tier: "Tier 4",
      title: "04. Court Appearance",
      subtitle: "Trial Representation & Advocacy",
      desc: "Assertive courtroom representation before the District & Sessions Courts of Jamnagar and other cities across Gujarat, backed by sharp oral arguments and rigorous cross-examination.",
      widthClass: "max-w-xl",
      bgClass: "bg-white text-[#0E1F33] border-[rgba(14,31,51,0.18)] shadow-sm",
      numBadge: "bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)]"
    },
    {
      level: 3,
      tier: "Tier 3",
      title: "03. Strategy Formulation",
      subtitle: "Watertight Pleadings & Defense Matrix",
      desc: "Structuring bulletproof legal notices, written statements, plaint drafts, or trademark replies fortified with relevant Supreme Court and High Court precedents.",
      widthClass: "max-w-2xl",
      bgClass: "bg-white text-[#0E1F33] border-[rgba(14,31,51,0.14)] shadow-xs",
      numBadge: "bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)]"
    },
    {
      level: 2,
      tier: "Tier 2",
      title: "02. Initial Assessment",
      subtitle: "Jurisdiction & Statutory Evaluation",
      desc: "In-depth legal feasibility evaluation, examining limitation periods, applicable acts (CPC, CrPC, NI Act, Trade Marks Act), and mapping all strategic remedies.",
      widthClass: "max-w-3xl",
      bgClass: "bg-white text-[#0E1F33] border-[rgba(14,31,51,0.12)] shadow-xs",
      numBadge: "bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)]"
    },
    {
      level: 1,
      tier: "Foundation",
      title: "01. Basics",
      subtitle: "Fact-Finding & Document Scrutiny",
      desc: "Comprehensive review of the fundamental facts, revenue records (7/12, 8-A, Index-II), contracts, court summons, or police papers during confidential intake.",
      widthClass: "max-w-4xl",
      bgClass: "bg-[#F0F4F8] text-[#0E1F33] border-[rgba(14,31,51,0.12)]",
      numBadge: "bg-[#0E1F33] text-white"
    }
  ];

  const faqs = [
    {
      q: {
        en: "What documents should I bring for an initial property or litigation consultation?",
        gu: "પ્રારંભિક મિલકત અથવા મુકદ્દમા પરામર્શ માટે કયા દસ્તાવેજો લાવવા જોઈએ?",
        hi: "प्रारंभिक संपत्ति या मुकदमेबाजी परामर्श के लिए कौन से दस्तावेज लाने चाहिए?"
      },
      a: {
        en: "Bring all primary documents related to your matter: title deeds, 7/12 & 8-A revenue extracts, registered agreements, any court summons or legal notices received, and relevant correspondence. We review them thoroughly during the initial session.",
        gu: "તમારી બાબત સાથે સંબંધિત તમામ પ્રાથમિક દસ્તાવેજો લાવો: દસ્તાવેજ, ૭/૧૨ અને ૮-અ ના ઉતારા, રજીસ્ટર્ડ કરારો, કોર્ટ સમન્સ અથવા કાનૂની નોટિસ.",
        hi: "अपने मामले से संबंधित सभी प्राथमिक दस्तावेज लाएं: स्वामित्व विलेख, राजस्व नकल (7/12, 8-A), पंजीकृत अनुबंध, कोर्ट समन या प्राप्त कानूनी नोटिस।"
      }
    },
    {
      q: {
        en: "How does trademark registration proceed and what protection does it grant?",
        gu: "ટ્રેડમાર્ક નોંધણી કેવી રીતે થાય છે અને તે શું કાનૂની સુરક્ષા આપે છે?",
        hi: "ट्रेडमार्क पंजीकरण कैसे होता है और यह क्या कानूनी सुरक्षा प्रदान करता है?"
      },
      a: {
        en: "As a Registered Trade Mark Attorney, Adv. Gaurav Pandya conducts nationwide clearance searches, prepares and files the application with the Trademark Registry, attends examination hearings, and addresses third-party oppositions to secure exclusive statutory brand rights across India.",
        gu: "રજિસ્ટર્ડ ટ્રેડમાર્ક એટર્ની તરીકે, એડવોકેટ ગૌરવ પંડ્યા શોધ, અરજી ફાઇલિંગ, સુનાવણી અને સમગ્ર ભારતમાં બ્રાન્ડ અધિકારોનું રક્ષણ કરે છે.",
        hi: "पंजीकृत ट्रेडमार्क अटॉर्नी के रूप में, एडवोकेट गौरव पंड्या सर्च, आवेदन, सुनवाई और पूरे भारत में ब्रांड अधिकारों की सुरक्षा सुनिश्चित करते हैं।"
      }
    },
    {
      q: {
        en: "Which courts and cities does GD PANDYA ASSOCIATES represent?",
        gu: "GD PANDYA ASSOCIATES કઈ અદાલતો અને શહેરોમાં કેસો લડે છે?",
        hi: "GD PANDYA ASSOCIATES किन न्यायालयों और शहरों में प्रतिनिधित्व करती है?"
      },
      a: {
        en: "GD PANDYA ASSOCIATES regularly represents clients before the District & Sessions Courts of Jamnagar and other cities across Gujarat, handling trials, civil appeals, criminal matters, and banking recovery proceedings.",
        gu: "GD PANDYA ASSOCIATES જામનગર અને ગુજરાતના અન્ય શહેરોની જિલ્લા અને સેશન્સ અદાલતો સમક્ષ નિયમિતપણે કેસોનું પ્રતિનિધિત્વ કરે છે.",
        hi: "GD PANDYA ASSOCIATES जामनगर और गुजरात के अन्य शहरों के जिला एवं सत्र न्यायालयों में मुकदमों का नियमित प्रतिनिधित्व करती है।"
      }
    },
    {
      q: {
        en: "Are consultation inquiries treated with professional privilege and confidentiality?",
        gu: "શું પરામર્શ પૂછપરછ વ્યાવસાયિક ગોપનીયતા સાથે વ્યવહાર કરવામાં આવે છે?",
        hi: "क्या परामर्श पूछताछ को पेशेवर गोपनीयता के साथ माना जाता है?"
      },
      a: {
        en: "All disclosures provided during consultations are handled with strict professional discretion in adherence to the Advocates Act, 1961 and professional ethics rules.",
        gu: "પરામર્શ દરમિયાન આપવામાં આવેલી તમામ વિગતો વ્યાવસાયિક નૈતિકતા અને નિયમો અનુસાર સંપૂર્ણ ગોપનીય રાખવામાં આવે છે.",
        hi: "परामर्श के दौरान साझा की गई सभी जानकारियों को पेशेवर गोपनीयता और एडवोकेट्स एक्ट के नियमों के अनुसार रखा जाता है।"
      }
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7FAFC] border-b border-[rgba(14,31,51,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part 1: How a Legal Matter Proceeds — Elegant Pyramid Structure */}
        <div>
          <div className="max-w-3xl mb-12 space-y-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Strategic Legal Methodology
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] tracking-tight">
              How a legal matter is resolved.
            </h2>
            <p className="text-base text-[#4A5B70] pt-1">
              From foundational facts to conclusive results — a 5-tier pyramid framework guaranteeing rigorous preparation and courtroom mastery.
            </p>
          </div>

          {/* Visual Pyramid Funnel */}
          <div className="flex flex-col items-center space-y-3.5 my-8">
            {pyramidSteps.map((step) => (
              <div 
                key={step.level}
                className={`w-full ${step.widthClass} ${step.bgClass} rounded-xl border p-4 sm:p-5 transition-all duration-300 hover:scale-[1.01]`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-current/10 pb-2.5 mb-2.5">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase ${step.numBadge}`}>
                      {step.tier}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium opacity-85 tracking-wide">
                    {step.subtitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed opacity-90 font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Initiate Stage 01 Consultation</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 text-slate-300" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Part 2: Institutional Standing Register */}
        <div className="pt-12 border-t border-[rgba(14,31,51,0.10)]">
          <div className="max-w-3xl mb-8 space-y-1">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Institutional Panel Counsel
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0E1F33]">
              Trusted by nationalized banks &amp; public bodies.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INSTITUTIONAL_CLIENTS.map((inst, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-lg bg-white border border-[rgba(14,31,51,0.08)] card-shadow space-y-1.5"
              >
                <div className="w-8 h-8 rounded-md bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] mb-2">
                  <Landmark className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <h4 className="font-serif text-base font-semibold text-[#0E1F33] leading-snug">
                  {inst.name}
                </h4>
                <p className="text-xs text-[#A8803A] font-medium">
                  {inst.role}
                </p>
                <p className="text-[11px] text-[#738499]">
                  {inst.scope}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Common Legal Inquiries / FAQs with Hairlines & Language Switcher */}
        <div className="pt-12 border-t border-[rgba(14,31,51,0.10)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[rgba(14,31,51,0.08)]">
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                Common Inquiries
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0E1F33]">
                Frequently asked legal questions.
              </h3>
            </div>

            {/* Language Switcher */}
            <div className="mt-4 md:mt-0 flex items-center space-x-1.5 bg-white p-1 rounded-lg border border-[rgba(14,31,51,0.12)]">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  lang === 'en' ? 'bg-[#0E1F33] text-white' : 'text-[#4A5B70] hover:text-[#0E1F33]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('gu')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  lang === 'gu' ? 'bg-[#0E1F33] text-white' : 'text-[#4A5B70] hover:text-[#0E1F33]'
                }`}
              >
                ગુજરાતી
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  lang === 'hi' ? 'bg-[#0E1F33] text-white' : 'text-[#4A5B70] hover:text-[#0E1F33]'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Accordion List with Hairlines */}
          <div className="border-t border-[rgba(14,31,51,0.10)] max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border-b border-[rgba(14,31,51,0.10)]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-5 text-left flex items-center justify-between space-x-4 focus:outline-none group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#0E1F33] font-normal group-hover:text-[#A8803A] transition-colors">
                      {faq.q[lang]}
                    </span>
                    <ChevronDown 
                    className={`w-4 h-4 text-[#738499] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#A8803A]' : ''}`}
                    strokeWidth={1.5}
                  />
                  </button>

                  {isOpen && (
                    <div className="pb-6 pt-1 text-sm sm:text-base text-[#4A5B70] leading-relaxed animate-in fade-in duration-200">
                      <p>{faq.a[lang]}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
