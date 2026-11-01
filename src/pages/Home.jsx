import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import PracticeAreas from '../components/home/PracticeAreas';
import AboutSnippet from '../components/home/AboutSnippet';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TeamShowcase from '../components/home/TeamShowcase';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  const { openConsultation } = useOutletContext();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of cases does GD PANDYA ASSOCIATES handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GD PANDYA ASSOCIATES handles Intellectual Property & Trademarks, Real Estate & Title Clearance, Banking & Financial Recovery, All Types of Registration & Documentation, Family & Matrimonial Law, Civil & Criminal Litigation, Corporate & Commercial Law, and Labor & Industrial Law across Jamnagar and other cities in Gujarat."
        }
      },
      {
        "@type": "Question",
        "name": "Where is GD PANDYA ASSOCIATES located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm is located at Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner, Jamnagar – 361001, Gujarat, India. Consultation hours are Monday–Saturday, 9:30 AM to 9:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Is Advocate Gaurav Pandya a registered Trademark Attorney?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Advocate Gaurav D. Pandya is a Registered Trade Mark and Copyright Attorney accredited with the Controller General of Patents, Designs and Trade Marks (CGPDTM), Government of India."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a consultation with GD PANDYA ASSOCIATES?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a consultation by calling or WhatsApp messaging +91 98985 98184, emailing advocate_pandya@hotmail.com, or using the consultation form on this website."
        }
      },
      {
        "@type": "Question",
        "name": "Which courts does GD PANDYA ASSOCIATES practice in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The firm practices before the District & Sessions Courts of Jamnagar and other cities across Gujarat. Advocate Gaurav Pandya is enrolled with the Bar Council of Gujarat since 2007 (19+ years standing)."
        }
      }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gaurav Dineshchandra Pandya",
    "givenName": "Gaurav",
    "familyName": "Pandya",
    "jobTitle": "Advocate, Government of India Notary & Registered Trademark Attorney",
    "worksFor": {
      "@type": "LegalService",
      "name": "GD PANDYA ASSOCIATES",
      "url": "https://advocate-pandya.com"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Saurashtra University, Shah Law College"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Commerce (B.Com)",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Bachelor of Laws (L.L.B.)",
        "credentialCategory": "degree"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Diploma in Labour Laws and Practice (DLLP)",
        "credentialCategory": "diploma"
      }
    ],
    "knowsAbout": ["Intellectual Property Law", "Property Title Verification", "Banking Recovery Law", "Notarial Registration", "Civil Litigation", "Criminal Litigation", "Family Law"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 241, 2nd Floor, Madhav Square, Limda Lane Corner",
      "addressLocality": "Jamnagar",
      "addressRegion": "Gujarat",
      "postalCode": "361001",
      "addressCountry": "IN"
    },
    "telephone": "+919898598184",
    "email": "advocate_pandya@hotmail.com",
    "url": "https://advocate-pandya.com/about"
  };

  return (
    <>
      <Helmet>
        <title>GD PANDYA ASSOCIATES | Advocates & Legal Consultants, Jamnagar - 361001</title>
        <meta name="description" content="GD PANDYA ASSOCIATES: Senior experience with young enthusiasm. 19+ years in trial litigation, trademark law, banking recovery, and property title clearance in Jamnagar - 361001 and across Gujarat." />
        <meta name="keywords" content="Advocate Jamnagar, GD PANDYA ASSOCIATES, Law Firm Jamnagar 361001, Trademark Attorney Jamnagar, Notary Jamnagar, Cheque Bounce Lawyer Jamnagar, Property Lawyer Jamnagar" />
        <link rel="canonical" href="https://advocate-pandya.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-pandya.com/" />
        <meta property="og:title" content="GD PANDYA ASSOCIATES | Jamnagar - 361001" />
        <meta property="og:description" content="Senior experience with young enthusiasm. 19+ Years of Legal Mastery in Jamnagar - 361001 and other cities in Gujarat." />
        <meta property="og:image" content="https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
    <div>
      <HeroSection onOpenConsultation={openConsultation} />
      <PracticeAreas onOpenConsultation={openConsultation} />
      <AboutSnippet />
      <WhyChooseUs onOpenConsultation={openConsultation} />
      <TeamShowcase onOpenConsultation={openConsultation} />
      <ContactCTA onOpenConsultation={openConsultation} />
    </div>
    </>
  );
}
