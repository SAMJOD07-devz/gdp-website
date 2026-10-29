import React, { useState, useEffect } from 'react';
import { Scale, ShieldAlert, Check } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in"
    >
      <div className="relative w-full max-w-2xl bg-navy-900 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Header */}
        <div className="flex items-center space-x-3 mb-5 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center text-gold-400 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 id="disclaimer-title" className="font-display font-bold text-white text-lg sm:text-xl">
              Bar Council of India Disclaimer
            </h2>
            <p className="text-xs text-gold-400 font-medium">
              Compliance with Rules of Bar Council of India
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            As per the rules of the <strong>Bar Council of India</strong>, advocates and law firms in India are not permitted to solicit work or advertise in any form or manner.
          </p>
          <p>
            By clicking <strong>&quot;I Agree&quot;</strong> and proceeding to browse this website, you acknowledge and confirm that:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300 text-xs">
            <li>
              You are accessing information about <strong>GD Pandya Associates</strong> of your own accord and without any inducement, solicitation, or advertisement by the firm or its advocates.
            </li>
            <li>
              The materials provided on this website are exclusively intended for informational purposes and should not be construed as legal advice or formal consultation.
            </li>
            <li>
              The transmission or receipt of information through this website does not create any advocate-client relationship between GD Pandya Associates and the visitor.
            </li>
            <li>
              GD Pandya Associates shall not be held liable for any action taken by the user relying on material or information provided on this platform.
            </li>
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleAgree}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-gold-400 to-amber-500 hover:from-gold-300 hover:to-amber-400 text-slate-950 font-semibold text-sm rounded-lg shadow-lg shadow-gold-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <Check className="w-4 h-4 mr-1.5" />
            <span>I Agree &amp; Proceed</span>
          </button>
        </div>

      </div>
    </div>
  );
}

