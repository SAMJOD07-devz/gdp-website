import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import WhatsAppFAB from '../ui/WhatsAppFAB';
import DisclaimerModal from '../ui/DisclaimerModal';
import ConsultationModal from '../ui/ConsultationModal';

export default function Layout() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [forceDisclaimerOpen, setForceDisclaimerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <ScrollToTop />
      
      {/* Top Bar for Desktop */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet context={{ openConsultation: () => setIsConsultationOpen(true) }} />
      </main>

      {/* Site Footer */}
      <Footer onOpenDisclaimer={() => setForceDisclaimerOpen(true)} />

      {/* Floating Action Button */}
      <WhatsAppFAB />

      {/* Legal Compliance Disclaimer Modal */}
      <DisclaimerModal 
        forceOpen={forceDisclaimerOpen} 
        onCloseForce={() => setForceDisclaimerOpen(false)} 
      />

      {/* Quick Consultation Booking Modal */}
      <ConsultationModal 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
    </div>
  );
}

