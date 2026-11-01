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
    <div className="min-h-screen flex flex-col bg-[#F7FAFC] text-[#0E1F33] font-sans selection:bg-[#0E1F33] selection:text-white">
      <ScrollToTop />
      
      {/* Top Bar for Desktop */}
      <TopBar />

      {/* Sticky Main Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Page Content with bottom offset for mobile sticky quick-bar */}
      <main className="flex-grow pb-16 sm:pb-0">
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

