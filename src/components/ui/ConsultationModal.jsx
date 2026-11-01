import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight, Phone, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../../data/firmData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practiceArea: 'Intellectual Property & Trademarks',
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
      `*New Legal Consultation Request — GD PANDYA ASSOCIATES*\n\n` +
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
          className="absolute top-5 right-5 p-1.5 text-[#738499] hover:text-[#0E1F33] rounded-full hover:bg-[#EEF3F8] transition-colors cursor-pointer"
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
                <Phone className="w-3.5 h-3.5 mr-1.5 text-[#A8803A]" strokeWidth={1.5} />
                <span>Call Chambers: +91 98985 98184</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#0E1F33] text-white rounded-lg text-xs font-semibold hover:bg-[#162C47] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
                Chambers Consultation · GD PANDYA ASSOCIATES
              </p>
              <h2 id="consultation-title" className="font-serif font-semibold text-xl sm:text-2xl text-[#0E1F33] mt-1">
                Book a Legal Consultation
              </h2>
              <p className="text-xs text-[#738499] mt-1">
                In-person meetings at Madhav Square, Jamnagar - 361001 or digital briefing.
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  required
                  placeholder="e.g. Rameshchandra Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                    Mobile Phone (+91) <span className="text-red-500">*</span>
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
                    className={`w-full px-3.5 py-2 rounded-lg border text-xs text-[#0E1F33] focus:outline-none focus:ring-1 bg-slate-50/50 ${
                      phoneError 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                        : 'border-[rgba(14,31,51,0.14)] focus:border-[#A8803A] focus:ring-[#A8803A]'
                    }`}
                  />
                  {phoneError && (
                    <p className="text-[10px] text-red-600 mt-0.5">{phoneError}</p>
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
                    className="w-full px-3.5 py-2 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                  Practice Domain <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-white cursor-pointer"
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
                  Preferred Consultation Timing
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0E1F33] mb-1">
                  Brief Overview of Matter <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Outline key facts, land survey numbers, trademark name, or case details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A] bg-slate-50/50"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[rgba(14,31,51,0.08)]">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0E1F33] hover:bg-[#162C47] text-white font-semibold rounded-lg text-xs shadow-sm transition-all duration-150 cursor-pointer"
              >
                <span>Proceed to WhatsApp Consultation</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" strokeWidth={1.5} />
              </button>
              <p className="text-[10px] text-[#738499] text-center mt-2">
                Advocate-client confidentiality strictly protected under the Advocates Act, 1961.
              </p>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
