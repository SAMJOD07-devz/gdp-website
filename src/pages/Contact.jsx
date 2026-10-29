import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: 'Civil & Criminal Litigation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="bg-navy-950 py-12 lg:py-20 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4" />
            <span>Jamnagar Office &amp; Inquiries</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Contact GD Pandya Associates
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Reach out to schedule an in-person meeting at our office or connect via phone or WhatsApp for urgent litigation and legal advice.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Interactive Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Office Details & Business Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-navy-900 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="font-display font-bold text-xl text-white pb-3 border-b border-slate-800">
                Jamnagar Head Office
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Office Location</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {FIRM_DETAILS.officeAddress.full}
                    </p>
                    <p className="text-[11px] text-gold-400/80 mt-1">
                      Landmark: Limda Lane Corner, Indira Marg
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone &amp; WhatsApp</h3>
                    <a
                      href={FIRM_DETAILS.social.phone}
                      className="text-xs text-gold-400 hover:text-gold-300 font-semibold block mt-1"
                    >
                      {FIRM_DETAILS.phone}
                    </a>
                    <a
                      href={FIRM_DETAILS.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[11px] text-emerald-400 hover:text-emerald-300 mt-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Address</h3>
                    <a
                      href={FIRM_DETAILS.social.email}
                      className="text-xs text-slate-300 hover:text-gold-400 transition-colors block mt-1"
                    >
                      {FIRM_DETAILS.email}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {FIRM_DETAILS.secondaryEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Consultation Hours</h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {FIRM_DETAILS.hours}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sunday: Prior appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visiting card reminder */}
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-navy-900 p-2 shadow">
              <img
                src="/assets/business-card.jpeg"
                alt="Advocate Gaurav Pandya Business Card"
                className="w-full h-auto rounded-lg"
              />
            </div>

          </div>

          {/* Right Column: Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-navy-900 border border-slate-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl">
            
            <div className="mb-6">
              <span className="text-xs font-bold text-gold-400 tracking-wider uppercase">
                Direct Inquiry Form
              </span>
              <h2 className="font-display font-bold text-2xl text-white mt-1">
                Send a Case Consultation Inquiry
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Submissions are received directly by Advocate Gaurav Pandya. All disclosures remain privileged.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your legal query has been formatted for WhatsApp transmission. Our office will respond promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-gold-500 text-slate-950 font-semibold rounded-lg text-sm cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mukesh Mehta"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">
                      Practice Area / Dispute Type *
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                    >
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                      <option value="Notary Attestation">Notary Attestation &amp; Verification</option>
                      <option value="Other">Other Legal Matter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Brief Outline of Legal Matter *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your dispute, court notices, property title, or trademark requirements..."
                    className="w-full px-3.5 py-2.5 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  ></textarea>
                </div>

                <div className="p-3 bg-navy-950/80 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>
                    Privileged &amp; Confidential. We do not share client contact information with third parties.
                  </span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-bold text-sm rounded-lg shadow-lg cursor-pointer"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Inquiry via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Office Location Map Box */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-navy-900 shadow-xl">
          <div className="p-4 sm:p-6 bg-navy-900 border-b border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-white text-lg">
                Office Location on Map
              </h3>
              <p className="text-xs text-slate-400">
                Office No. 241, Madhav Square, Limda Lane Corner, Jamnagar, Gujarat
              </p>
            </div>
            <a
              href={FIRM_DETAILS.social.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-gold-300 border border-slate-700 rounded-lg text-xs font-semibold"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 bg-slate-950">
            <iframe
              title="Jamnagar Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.123456789!2d70.061234!3d22.471234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3957154098765432%3A0xabcdef1234567890!2sMadhav%20Square%2C%20Limda%20Lane%2C%20Jamnagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}

