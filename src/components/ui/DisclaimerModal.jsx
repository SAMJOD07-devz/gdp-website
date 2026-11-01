import React, { useState, useEffect } from 'react';
import { Scale, Check } from 'lucide-react';

export default function DisclaimerModal({ forceOpen, onCloseForce }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('gd_pandya_bci_disclaimer_agreed');
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  const handleAgree = () => {
    localStorage.setItem('gd_pandya_bci_disclaimer_agreed', 'true');
    setIsOpen(false);
    if (onCloseForce) onCloseForce();
  };

  if (!isOpen) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(14,31,51,0.45)] backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-white border border-[rgba(14,31,51,0.12)] rounded-2xl p-5 sm:p-8 modal-shadow text-[#0E1F33] animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-5 border-b border-[rgba(14,31,51,0.08)] pb-3 sm:pb-4">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] flex items-center justify-center text-[#A8803A] shrink-0">
            <Scale className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
          </div>
          <div>
            <h2 id="disclaimer-title" className="font-serif font-semibold text-[#0E1F33] text-base sm:text-xl">
              Bar Council of India Compliance
            </h2>
            <p className="text-[11px] sm:text-xs text-[#738499]">
              Regulatory statement under the Advocates Act, 1961
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 text-xs sm:text-sm text-[#4A5B70] leading-relaxed max-h-[50vh] overflow-y-auto pr-1">
          <p>
            Under the rules established by the <strong>Bar Council of India</strong>, advocates and law firms are strictly prohibited from soliciting work or advertising in any form or medium.
          </p>
          <p>
            By clicking <strong>&quot;I Understand &amp; Agree&quot;</strong> and accessing this website, you confirm the following:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-1 text-[11px] sm:text-xs text-[#4A5B70]">
            <li>
              You are accessing information regarding <strong>GD Pandya &amp; Associates</strong> entirely of your own volition without any solicitation, advertisement, or inducement.
            </li>
            <li>
              The materials and case outlines on this site are solely for general informational purposes and do not constitute formal legal counsel or advice.
            </li>
            <li>
              Viewing this website, downloading information, or submitting an inquiry does not establish an advocate-client relationship.
            </li>
            <li>
              GD Pandya &amp; Associates accepts no liability for any reliance placed on the information provided on this platform without formal legal consultation.
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-[rgba(14,31,51,0.08)] flex justify-end">
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-[#0E1F33] hover:bg-[#162C47] text-white font-semibold rounded-lg text-xs shadow-sm transition-all duration-150 cursor-pointer"
          >
            <Check className="w-4 h-4 mr-1.5 text-slate-300" strokeWidth={2} />
            <span>I Understand &amp; Agree</span>
          </button>
        </div>

      </div>
    </div>
  );
}
