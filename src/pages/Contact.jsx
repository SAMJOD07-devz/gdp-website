import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: 'Intellectual Property & Trademarks',
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
        <title>Contact GD PANDYA ASSOCIATES | Legal Office Jamnagar - 361001</title>
        <meta name="description" content="Contact GD PANDYA ASSOCIATES at Office No. 241, Madhav Square, Limda Lane, Jamnagar – 361001. Call/WhatsApp +91 98985 98184 or email advocate_pandya@hotmail.com. Mon–Sat 9:30 AM–9:00 PM." />
        <meta name="keywords" content="GD PANDYA ASSOCIATES contact, Advocate Jamnagar phone, Law firm Jamnagar address, Legal consultation Jamnagar 361001" />
        <link rel="canonical" href="https://advocate-pandya.com/contact" />
        <meta property="og:url" content="https://advocate-pandya.com/contact" />
        <meta property="og:title" content="Contact GD PANDYA ASSOCIATES | Jamnagar - 361001, Gujarat" />
        <meta property="og:description" content="Reach GD PANDYA ASSOCIATES in Jamnagar - 361001. WhatsApp, call, or email for trademark, property title, civil, and criminal consultations." />
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
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
            <span>Senior Experience with Young Enthusiasm</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
            Contact GD PANDYA ASSOCIATES
          </h1>
          <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
            Reach out to schedule an in-person meeting at our Jamnagar chambers (Pincode: 361001) or connect directly via phone and WhatsApp for legal consultation across Jamnagar and other cities in Gujarat.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Office Details & Direct Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow space-y-5">
              <h2 className="font-serif text-xl font-normal text-[#0E1F33]">
                Jamnagar Chambers
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="text-[#0E1F33] block">Office Address:</strong>
                    <span className="text-[#4A5B70] leading-relaxed block mt-0.5">
                      {FIRM_DETAILS.officeAddress.full}
                    </span>
                    <span className="text-xs text-[#A8803A] font-semibold mt-1 block">
                      Pincode: 361001
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="text-[#0E1F33] block">Direct Consultation Line:</strong>
                    <a
                      href={FIRM_DETAILS.social.phone}
                      className="text-[#0E1F33] hover:text-[#A8803A] font-medium text-sm transition-colors mt-0.5 inline-block"
                    >
                      {FIRM_DETAILS.phone}
                    </a>
                    <span className="text-xs text-[#738499] block mt-0.5">
                      Adv. Gaurav D. Pandya (Principal Advocate)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#A8803A] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="text-[#0E1F33] block">Email Briefs:</strong>
                    <a
                      href={FIRM_DETAILS.social.email}
                      className="text-[#4A5B70] hover:text-[#0E1F33] transition-colors mt-0.5 inline-block"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-[#738499] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <strong className="text-[#0E1F33] block">Consultation Hours:</strong>
                    <span className="text-[#4A5B70] mt-0.5 block">
                      {FIRM_DETAILS.hours}
                    </span>
                    <span className="text-xs text-[#738499]">
                      Sunday: Closed (Available for emergency bail)
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp CTA Button */}
              <div className="pt-4 border-t border-[rgba(14,31,51,0.08)]">
                <a
                  href={FIRM_DETAILS.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center py-3 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" strokeWidth={2} />
                  <span>Message on WhatsApp (+91 98985 98184)</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Embed & Link */}
            <div className="p-4 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0E1F33]">
                  Map Location: Madhav Square, Jamnagar - 361001
                </span>
                <a
                  href={FIRM_DETAILS.social.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#A8803A] hover:underline inline-flex items-center"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>

              <div className="rounded-lg overflow-hidden border border-[rgba(14,31,51,0.08)] aspect-video bg-[#EEF3F8]">
                <iframe
                  title="GD PANDYA ASSOCIATES Chambers Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2185566085145!2d70.06173007530006!3d22.477218679559384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957152062fa5549%3A0xe549551c6e1fc45e!2sMadhav%20Square!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Direct Consultation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                  Direct Inquiry
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33] mt-1">
                  Schedule a Consultation
                </h2>
                <p className="text-xs sm:text-sm text-[#4A5B70] mt-1">
                  Fill in your details to format a consultation brief forwarded directly to Advocate Gaurav Pandya&apos;s WhatsApp.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0E1F33]">
                    Inquiry Forwarded
                  </h3>
                  <p className="text-sm text-[#4A5B70] max-w-sm mx-auto leading-relaxed">
                    Your legal query has been prepared and redirected to Advocate Gaurav Pandya&apos;s WhatsApp chambers line (+91 98985 98184).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-[#0E1F33] underline hover:text-[#A8803A]"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rameshchandra Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                        Phone Number (+91) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="98985 98184"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) validatePhone(e.target.value);
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-lg border text-xs text-[#0E1F33] focus:outline-none focus:ring-1 bg-slate-50/50 ${
                          phoneError 
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                            : 'border-[rgba(14,31,51,0.14)] focus:border-[#A8803A] focus:ring-[#A8803A]'
                        }`}
                      />
                      {phoneError && (
                        <p className="text-[11px] text-red-600 mt-1">{phoneError}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                        Email Address <span className="text-[#738499] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="client@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                      Legal Domain <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-white cursor-pointer"
                    >
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                      Brief Matter Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline the nature of your dispute, court summons received, or trademark requirement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0E1F33] hover:bg-[#162C47] text-white font-semibold rounded-lg text-xs shadow-sm transition-all duration-150 cursor-pointer"
                    >
                      <span>Proceed to WhatsApp Consultation</span>
                      <ArrowUpRight className="w-4 h-4 ml-1.5" strokeWidth={1.5} />
                    </button>
                    <p className="text-[11px] text-[#738499] text-center mt-2">
                      Adheres to Bar Council of India client privilege &amp; confidentiality standards.
                    </p>
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
