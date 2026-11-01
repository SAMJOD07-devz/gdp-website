import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: 'Civil & Criminal Litigation',
    message: ''
  });
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validatePhone = (val) => {
    const cleaned = val.replace(/[\s-]/g, '');
    const phoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
    if (!cleaned) {
      setPhoneError('Phone number is required.');
      return false;
    }
    if (!phoneRegex.test(cleaned)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number (+91).');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return;

    const text = encodeURIComponent(
      `*Legal Consultation Request via Website*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Category:* ${formData.practiceArea}\n` +
      `*Details:* ${formData.message}`
    );
    window.open(`https://wa.me/919898598184?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact GD Pandya Associates | Legal Office Jamnagar, Gujarat</title>
        <meta name="description" content="Contact GD Pandya Associates at Office No. 241, Madhav Square, Limda Lane, Jamnagar – 361001. Call/WhatsApp +91 98985 98184 or email advocate_pandya@hotmail.com. Mon–Sat 9:30 AM–9:00 PM." />
        <meta name="keywords" content="GD Pandya Associates contact, Advocate Jamnagar phone, Law firm Jamnagar address, Legal consultation Jamnagar" />
        <link rel="canonical" href="https://advocate-pandya.com/contact" />
        <meta property="og:url" content="https://advocate-pandya.com/contact" />
        <meta property="og:title" content="Contact GD Pandya Associates | Law Firm Jamnagar, Gujarat" />
        <meta property="og:description" content="Reach GD Pandya Associates in Jamnagar. WhatsApp, call, or email for civil litigation, trademark, property, and criminal law consultations." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://advocate-pandya.com/" },
            { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://advocate-pandya.com/contact" }
          ]
        })}</script>
      </Helmet>
    <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
            Jamnagar Chambers &amp; Inquiries
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Contact GD Pandya &amp; Associates
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            Reach out to schedule an in-person meeting at our Jamnagar chambers or connect directly via phone and WhatsApp for urgent litigation assistance.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-6 sm:p-8 space-y-6 card-shadow">
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#0E1F33] pb-3 border-b border-[rgba(14,31,51,0.08)]">
                Jamnagar Head Chambers
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#738499]">
                      Chambers Location
                    </p>
                    <p className="text-sm text-[#0E1F33] font-medium mt-0.5 leading-snug">
                      Office No. 241, 2nd Floor, Madhav Square
                    </p>
                    <p className="text-xs text-[#4A5B70]">
                      Limda Lane Corner, Indira Marg, Jamnagar-361001, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#738499]">
                      Direct Telephone &amp; WhatsApp
                    </p>
                    <a
                      href={FIRM_DETAILS.social.phone}
                      className="text-sm font-semibold text-[#0E1F33] hover:text-[#A8803A] transition-colors block mt-0.5"
                    >
                      {FIRM_DETAILS.phone}
                    </a>
                    <a
                      href={FIRM_DETAILS.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 font-medium inline-flex items-center space-x-1 mt-0.5 hover:underline"
                    >
                      <span>Open chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#738499]">
                      Official Email
                    </p>
                    <a
                      href={FIRM_DETAILS.social.email}
                      className="text-sm text-[#0E1F33] hover:text-[#A8803A] transition-colors block mt-0.5"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3F8] flex items-center justify-center text-[#A8803A] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#738499]">
                      Chamber Consultation Hours
                    </p>
                    <p className="text-xs text-[#0E1F33] font-medium mt-0.5">
                      Monday – Saturday: 9:30 AM – 1:30 PM &amp; 5:00 PM – 9:00 PM
                    </p>
                    <p className="text-xs text-[#738499] mt-0.5">
                      Sunday: By prior appointment only
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[rgba(14,31,51,0.08)]">
                <a
                  href={FIRM_DETAILS.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-[#EEF3F8] hover:bg-[#E2EAF2] text-[#0E1F33] rounded-lg text-xs font-medium border border-[rgba(14,31,51,0.08)] transition-colors"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-[#A8803A]" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Business Card Record */}
            <div className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-4 card-shadow text-center">
              <img
                src="/assets/business-card.webp"
                alt="Advocate Gaurav D. Pandya - Official Notary Government of India and Legal Practice Card, Jamnagar"
                className="w-full h-auto rounded-lg border border-[rgba(14,31,51,0.08)]"
                loading="lazy"
                width="800"
                height="496"
              />
              <p className="text-[11px] text-[#738499] mt-2 font-medium">
                Official Government of India Notary Registration Card
              </p>
            </div>

          </div>

          {/* Right Column: Case Consultation Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] p-6 sm:p-8 lg:p-10 card-shadow">
              
              <div className="mb-6 space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
                  Direct Inquiry Form
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                  Send a consultation inquiry
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5B70] pt-0.5">
                  Submissions are received directly by Advocate Gaurav Pandya and treated with professional discretion.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[#0E1F33]">
                    Inquiry Formatted
                  </h3>
                  <p className="text-sm text-[#4A5B70] max-w-md mx-auto leading-relaxed">
                    Your legal matter has been formatted and redirected to Advocate Gaurav Pandya&apos;s chambers via WhatsApp (+91 98985 98184).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-5 py-2.5 bg-[#0E1F33] text-white text-xs font-semibold rounded-lg hover:bg-[#162C47] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                        Your Full Name <span className="text-[#A8803A]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mukesh Mehta"
                        className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                        Phone / WhatsApp <span className="text-[#A8803A]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) validatePhone(e.target.value);
                        }}
                        onBlur={(e) => validatePhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 bg-white border rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors ${
                          phoneError ? 'border-rose-400' : 'border-[rgba(14,31,51,0.16)]'
                        }`}
                      />
                      {phoneError && (
                        <p className="text-[11px] text-rose-500 mt-1">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                        Email Address <span className="text-[#738499] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                        Practice Domain <span className="text-[#A8803A]">*</span>
                      </label>
                      <select
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors"
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.title}>
                            {pa.title}
                          </option>
                        ))}
                        <option value="Notary Public Service">Notary Public &amp; Attestation</option>
                        <option value="General Legal Inquiry">Other Legal Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                      Brief Outline of Legal Matter <span className="text-[#A8803A]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about your dispute, court notice, property location, or trademark requirements..."
                      className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#738499] leading-relaxed pt-1">
                    Confidentiality notice: Information submitted is received directly by the chambers. Submission does not constitute an advocate-client relationship until formally engaged.
                  </p>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                    >
                      <span>Send Inquiry via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-slate-300" strokeWidth={1.5} />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}
