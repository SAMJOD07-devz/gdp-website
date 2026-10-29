import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import AboutSnippet from '../components/home/AboutSnippet';
import PracticeAreas from '../components/home/PracticeAreas';
import TeamShowcase from '../components/home/TeamShowcase';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  const { openConsultation } = useOutletContext();

  return (
    <div>
      <HeroSection onOpenConsultation={openConsultation} />
      <AboutSnippet />
      <PracticeAreas onOpenConsultation={openConsultation} />
      <TeamShowcase onOpenConsultation={openConsultation} />
      <WhyChooseUs />
      <ContactCTA onOpenConsultation={openConsultation} />
    </div>
  );
}

