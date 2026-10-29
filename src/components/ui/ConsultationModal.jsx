import React, { useState } from 'react';
import { X, Send, Phone, MessageCircle, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../../data/firmData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: 'Civil & Criminal Litigation',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message with formatted inquiry details
    const text = encodeURIComponent(
      `*New Legal Consultation Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not specified'}\n` +
      `*Domain:* ${formData.practiceArea}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n` +
      `*Brief Matter:* ${formData.message}`
    );

    window.open(`https://wa.me/919898598184?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-xl bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Consultation Inquiry Sent
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you. Your consultation details have been formatted for Advocate Gaurav Pandya. Our team will review your matter and contact you shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={FIRM_DETAILS.social.phone}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-slate-800 text-gold-400 border border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-700"
              >
                <Phone className="w-4 h-4 mr-2" />
                Direct Call: +91 98985 98184
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2 bg-gold-500 hover:bg-gold-400 text-slate-950 font-semibold rounded-lg text-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Confidential Consultation</span>
              </div>
              <h2 id="consultation-title" className="font-display font-bold text-2xl text-white">
                Book a Legal Consultation
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in the details below to schedule a meeting at our Jamnagar office or request a phone consultation.
              </p>
            </div>

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
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Contact Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1 font-medium">
                    Legal Domain / Category *
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full px-3 py-2 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                  >
                    {PRACTICE_AREAS.map((area) => (
                      <option key={area.id} value={area.title}>
                        {area.title}
                      </option>
                    ))}
                    <option value="Notary Verification">Notary Verification &amp; Attestation</option>
                    <option value="Other Legal Matter">Other Legal Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1 font-medium">
                  Brief Summary of Legal Matter *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide a brief, confidential outline of your dispute, notice, or legal requirements..."
                  className="w-full px-3 py-2 bg-navy-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-gold-400"
                ></textarea>
              </div>

              <div className="p-3 bg-navy-950/80 rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  All legal consultations and client disclosures are held strictly privileged and confidential.
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-slate-400 hover:text-white text-xs font-medium cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-xs sm:text-sm rounded-lg shadow-lg shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-1.5" />
                  <span>Submit Inquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

