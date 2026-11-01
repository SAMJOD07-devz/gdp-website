import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';
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
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Esc key closure and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Validate Indian phone number format
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

    if (!validatePhone(formData.phone)) {
      return;
    }
    
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(14,31,51,0.45)] backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-lg bg-white border border-[rgba(14,31,51,0.12)] rounded-2xl p-6 sm:p-8 modal-shadow text-[#0E1F33] max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-[#738499] hover:text-[#0E1F33] rounded-full hover:bg-[#EEF3F8] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
            </div>
            
            <h3 className="font-serif font-semibold text-2xl text-[#0E1F33]">
              Consultation Inquiry Prepared
            </h3>
            
            <p className="text-sm text-[#4A5B70] max-w-sm mx-auto leading-relaxed">
              Your inquiry has been formatted and redirected to Advocate Gaurav Pandya&apos;s chambers on WhatsApp (+91 98985 98184).
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={FIRM_DETAILS.social.phone}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2.5 bg-[#EEF3F8] text-[#0E1F33] border border-[rgba(14,31,51,0.10)] rounded-lg text-xs font-semibold hover:bg-[#E2EAF2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#A8803A]" strokeWidth={1.5} />
                Direct Call: +91 98985 98184
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-[#0E1F33] hover:bg-[#162C47] text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
                Jamnagar Chambers &amp; Gujarat High Court
              </p>
              <h2 id="consultation-title" className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                Schedule a consultation
              </h2>
              <p className="text-xs sm:text-sm text-[#4A5B70] pt-0.5">
                Provide your dispute or advisory details to coordinate an appointment with Advocate Gaurav Pandya.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                  Full Name <span className="text-[#A8803A]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Mukesh Mehta"
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors"
                />
              </div>

              {/* Contact Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              {/* Legal Domain & Preferred Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                    Legal Domain <span className="text-[#A8803A]">*</span>
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

                <div>
                  <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors"
                  />
                </div>
              </div>

              {/* Brief Matter Summary */}
              <div>
                <label className="block text-xs font-semibold text-[#0E1F33] mb-1.5">
                  Brief Outline of Matter <span className="text-[#A8803A]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key facts, court summons, property location, or trademark query..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[rgba(14,31,51,0.16)] rounded-lg text-sm text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] transition-colors resize-none"
                />
              </div>

              {/* Quiet Helper Text (no aggressive overclaims) */}
              <p className="text-[11px] text-[#738499] leading-relaxed pt-1">
                Inquiries are received directly by Advocate Gaurav Pandya and handled with professional discretion. Submission does not establish an attorney-client relationship until formally retained.
              </p>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="order-2 sm:order-1 px-4 py-2 text-xs font-medium text-[#4A5B70] hover:text-[#0E1F33] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Send via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-slate-300" strokeWidth={1.5} />
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
