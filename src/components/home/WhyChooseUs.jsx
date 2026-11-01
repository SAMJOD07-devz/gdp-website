import React, { useState } from 'react';
import { ChevronDown, Landmark, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { INSTITUTIONAL_CLIENTS } from '../../data/firmData';

export default function WhyChooseUs({ onOpenConsultation }) {
  const [lang, setLang] = useState('en'); // 'en' | 'gu' | 'hi'
  const [openFaq, setOpenFaq] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Initial Brief & Document Scrutiny",
      desc: "Confidential examination of your court notices, land revenue records, contracts, or FIR/charge-sheets at our Jamnagar chambers or via secure digital brief."
    },
    {
      num: "02",
      title: "Strategic Advisory & Remedy Analysis",
      desc: "Transparent counsel on statutory remedies, limitation periods, expected timelines, and realistic dispute outcomes before initiating legal steps."
    },
    {
      num: "03",
      title: "Pleadings & Court Advocacy",
      desc: "Meticulous drafting of petitions, trademark filings, or written statements, accompanied by assertive trial representation before District Courts or the High Court."
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
        en: "Bring all primary documents related to your matter: title deeds, 7/12 & 8-A revenue extracts, registered agreements, any court summons or legal notices received, and relevant correspondence. We will review them in detail during the session.",
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
        en: "Can the firm represent matters before the Gujarat High Court in Ahmedabad?",
        gu: "શું પેઢી અમદાવાદ ખાતે ગુજરાત હાઇકોર્ટ સમક્ષ બાબતોનું પ્રતિનિધિત્વ કરી શકે છે?",
        hi: "क्या फर्म अहमदाबाद में गुजरात उच्च न्यायालय के समक्ष मामलों का प्रतिनिधित्व कर सकती है?"
      },
      a: {
        en: "Yes. Adv. Gaurav Pandya and associate counsel regularly draft, file, and argue Special Civil Applications, Criminal Appeals, Revisions, and Bail Petitions before the High Court of Gujarat, alongside active trial advocacy at the Jamnagar District Court.",
        gu: "હા. એડવોકેટ ગૌરવ પંડ્યા અને સહયોગીઓ જામનગર જિલ્લા અદાલત તેમજ ગુજરાત હાઇકોર્ટ સમક્ષ નિયમિતપણે કાનૂની રજૂઆત કરે છે.",
        hi: "हाँ। एडवोकेट गौरव पंड्या और सहयोगी जामनगर जिला न्यायालय के साथ-साथ गुजरात उच्च न्यायालय में नियमित रूप से प्रतिनिधित्व करते हैं।"
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
        
        {/* Part 1: How a Consultation Works (3 Calm Numbered Steps) */}
        <div>
          <div className="max-w-3xl mb-14 space-y-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Procedure &amp; Consultation
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0E1F33] tracking-tight">
              How a legal consultation works.
            </h2>
            <p className="text-base text-[#4A5B70] pt-1">
              A transparent, structured process ensuring immediate clarity on your rights and remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Subtle connecting hairline across steps on desktop */}
            <div className="hidden md:block absolute top-7 left-12 right-12 h-[1px] bg-[rgba(14,31,51,0.12)] z-0" />

            {steps.map((st, i) => (
              <div 
                key={i} 
                className="relative z-10 bg-[#F7FAFC] md:bg-transparent pt-2 md:pt-0"
              >
                {/* Step Circle & Number */}
                <div className="w-14 h-14 rounded-full bg-white border border-[rgba(14,31,51,0.14)] card-shadow flex items-center justify-center font-serif text-lg font-semibold text-[#0E1F33] mb-5">
                  {st.num}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#0E1F33] mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-[#4A5B70] leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Institutional Standing Register */}
        <div className="pt-12 border-t border-[rgba(14,31,51,0.10)]">
          <div className="max-w-3xl mb-8 space-y-1">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Institutional Standing
            </p>
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#0E1F33]">
              Trusted by public sector banks &amp; government bodies.
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
                    className="w-full py-5 text-left flex items-center justify-between space-x-4 focus:outline-none group"
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
